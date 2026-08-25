// src/wpApi.js

const WP_BASE_URL = 'https://thegoamonitor.com/wp-json/wp/v2';

function mapToGroupCategory(wpCategoryName) {
    if (!wpCategoryName) return "NATION";
    const cat = wpCategoryName.toLowerCase();

    if (["politics", "crime", "development", "education", "environment", "agriculture", "crime & law", "accidents", "local news"].some(sub => cat.includes(sub))) return "NATION";
    if (["business", "economy", "technology", "market", "finance"].some(sub => cat.includes(sub))) return "BUSINESS";
    if (["food", "health", "fashion", "arts", "culture", "lifestyle", "tourism"].some(sub => cat.includes(sub))) return "LIFESTYLE";
    if (["sports", "travel", "science", "entertainment"].some(sub => cat.includes(sub))) return "SPORTS & TRAVEL";
    return "NATION";
}

function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function extractImageFromHtml(htmlContent) {
    if (!htmlContent) return null;
    const match = htmlContent.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
}
// =====================================================================
// MASTER FORMATTING HELPER
// =====================================================================
function formatWpPost(post) {
    let imageUrl = null;
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
        imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
    }
    if (!imageUrl) imageUrl = extractImageFromHtml(post.content.rendered);
    if (!imageUrl) imageUrl = "/images/placeholder/600x400.jpg";

    // Clean up content: safely strip out the first <img> tag from the body HTML 
    // to prevent duplicate image rendering since the banner is already displayed at the top.
    let cleanedContent = post.content.rendered;
    if (cleanedContent) {
        cleanedContent = cleanedContent.replace(/<img[^>]*>/i, '');
    }

    let authorName = "Admin";
    if (post._embedded && post._embedded.author && post._embedded.author[0].name) {
        authorName = post._embedded.author[0].name;
    }

    let rawCategoryName = "General";
    if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0].length > 0) {
        rawCategoryName = decodeHtml(post._embedded['wp:term'][0][0].name);
    }

    return {
        id: post.id,
        title: decodeHtml(post.title.rendered),
        content: cleanedContent, // Uses the cleaned body content without the leading duplicate image
        excerpt: decodeHtml(post.excerpt.rendered), 
        author: authorName,
        article_date: new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        image_url: imageUrl,
        category: rawCategoryName,
        groupCategory: mapToGroupCategory(rawCategoryName)
    };
}


// =====================================================================
// 1. FETCH ALL POSTS (Homepage)
// =====================================================================
export async function fetchWpPosts() {
    try {
        const requestUrls = [1, 2, 3].map(page => 
            fetch(`${WP_BASE_URL}/posts?_embed&per_page=100&page=${page}`).then(res => res.ok ? res.json() : [])
        );
        const pagesData = await Promise.all(requestUrls);
        let allPosts = pagesData.flat().slice(0, 250);

        if (!Array.isArray(allPosts) || allPosts.length === 0) return [];
        return allPosts.map(formatWpPost);
    } catch (error) {
        console.error("Error fetching WordPress posts:", error);
        return [];
    }
}

// =====================================================================
// 2. SEARCH POSTS BY KEYWORD (Deep Server Archive Scan)
// =====================================================================
export async function searchWpPosts(keyword) {
    try {
        if (!keyword) return [];
        const query = keyword.trim();
        const safeKeyword = encodeURIComponent(query);

        // 1. Try fetching from WordPress native search first
        let posts = [];
        const response = await fetch(`${WP_BASE_URL}/posts?_embed&search=${safeKeyword}&per_page=100`);
        if (response.ok) {
            posts = await response.json();
        }

        let formatted = Array.isArray(posts) ? posts.map(formatWpPost) : [];

        // 2. If it's a direct ID lookup (e.g. searching "6668"), fetch it directly
        if (formatted.length === 0 && !isNaN(query)) {
            const singlePost = await fetchPostById(query);
            if (singlePost) {
                formatted = [singlePost];
            }
        }

        // 3. Deep Archive Fallback: If native search misses older/buried posts, 
        // scan across multiple recent pages to ensure the keyword is caught locally.
        if (formatted.length === 0) {
            const requestUrls = [1, 2, 3, 4, 5].map(page => 
                fetch(`${WP_BASE_URL}/posts?_embed&per_page=100&page=${page}`).then(res => res.ok ? res.json() : [])
            );
            const pagesData = await Promise.all(requestUrls);
            const allPosts = pagesData.flat();
            const allFormatted = allPosts.map(formatWpPost);

            const lowerQuery = query.toLowerCase();
            formatted = allFormatted.filter(post => 
                String(post.id) === query ||
                post.title.toLowerCase().includes(lowerQuery) || 
                post.content.toLowerCase().includes(lowerQuery) ||
                post.excerpt.toLowerCase().includes(lowerQuery)
            );
        }

        return formatted;
    } catch (error) {
        console.error("Error fetching search results:", error);
        return [];
    }
}

// =====================================================================
// 3. FETCH POSTS BY CATEGORY (With Keyword Fallback)
// =====================================================================
export async function fetchPostsByCategory(categoryName) {
    try {
        if (!categoryName) return [];
        const decodedQuery = decodeURIComponent(categoryName).toLowerCase().trim();

        // 1. Fetch categories from WordPress
        const catResponse = await fetch(`${WP_BASE_URL}/categories?per_page=100`);
        if (catResponse.ok) {
            const categories = await catResponse.json();
            if (Array.isArray(categories) && categories.length > 0) {
                const matchingCategories = categories.filter(cat => {
                    const catName = cat.name.toLowerCase();
                    const catSlug = cat.slug.toLowerCase();
                    return (
                        catSlug.includes(decodedQuery) ||
                        decodedQuery.includes(catSlug) ||
                        catName.includes(decodedQuery) ||
                        decodedQuery.includes(catName)
                    );
                });

                if (matchingCategories.length > 0) {
                    const categoryIds = matchingCategories.map(cat => cat.id).join(',');
                    const response = await fetch(`${WP_BASE_URL}/posts?_embed&categories=${categoryIds}&per_page=100`);
                    const posts = await response.json();
                    if (Array.isArray(posts) && posts.length > 0) {
                        return posts.map(formatWpPost);
                    }
                }
            }
        }

        // 2. Fallback: If no exact category match is found, search posts by keyword (e.g. "podcasts", "interviews")
        return await searchWpPosts(categoryName);
    } catch (error) {
        console.error("Error fetching category results:", error);
        return [];
    }
}
// =====================================================================
// 4. FETCH SINGLE POST BY ID (For Article Details Page)
// =====================================================================
export async function fetchPostById(id) {
    try {
        const response = await fetch(`${WP_BASE_URL}/posts/${id}?_embed`);
        if (!response.ok) return null;
        
        const post = await response.json();
        return formatWpPost(post);
    } catch (error) {
        console.error(`Error fetching post with ID ${id}:`, error);
        return null;
    }
}

// =====================================================================
// 5. FETCH COMMENTS FOR A POST
// =====================================================================
export async function fetchCommentsByPostId(postId) {
    try {
        const response = await fetch(`${WP_BASE_URL}/comments?post=${postId}`);
        if (!response.ok) return [];
        const comments = await response.json();
        
        return comments.map(comment => ({
            id: comment.id,
            authorName: decodeHtml(comment.author_name),
            date: new Date(comment.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            content: decodeHtml(comment.content.rendered),
            avatarUrl: comment.author_avatar_urls ? comment.author_avatar_urls['96'] : "/images/placeholder/80x80.jpg"
        }));
    } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error);
        return [];
    }
}