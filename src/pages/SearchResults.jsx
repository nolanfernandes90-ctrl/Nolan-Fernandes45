import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchWpPosts } from '../wpApi';

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState(query);
    const [loading, setLoading] = useState(true);

    // Update searchQuery state if URL search param changes
    useEffect(() => {
        setSearchQuery(query);
    }, [query]);

    // Fetch search results from WordPress API based on search query
    useEffect(() => {
        const activeQuery = query || searchQuery;
        if (!activeQuery) {
            setArticles([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        searchWpPosts(activeQuery)
            .then((data) => {
                if (Array.isArray(data)) {
                    setArticles(data);
                } else {
                    setArticles([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching search results:', err);
                setArticles([]);
                setLoading(false);
            });
    }, [query, searchQuery]);

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    return (
        <div>
            {/* Search Result Section */}
            <section className="pt-4 pb-80 min-vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="wrap__search-result">
                                <div className="wrap__search-result-keyword mb-4">
                                    <h5>
                                        Search results for keyword: <span className="text-primary">"{query || searchQuery || 'all'}"</span> found in {articles.length} posts.
                                    </h5>
                                </div>

                                {loading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-danger" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                ) : articles.length > 0 ? (
                                    articles.map((article) => (
                                        <div className="card__post card__post-list card__post__transition mt-30 mb-4" key={article.id}>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="card__post__transition">
                                                        <Link to={`/article/${article.id}`}>
                                                            <img 
                                                                src={article.image_url || "/images/placeholder/500x400.jpg"} 
                                                                className="img-fluid w-100" 
                                                                style={{ height: '180px', objectFit: 'cover' }} 
                                                                alt={article.title} 
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 my-auto pl-0">
                                                    <div className="card__post__body">
                                                        <div className="card__post__content">
                                                            <div className="card-post-category text-uppercase text-primary mb-1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                                                {article.category}
                                                            </div>
                                                            <div className="card__post__author-info mb-2">
                                                                <ul className="list-inline mb-0" style={{ fontSize: '13px' }}>
                                                                    <li className="list-inline-item">
                                                                        <span className="text-primary">by {article.author}</span>
                                                                    </li>
                                                                    <li className="list-inline-item">
                                                                        <span className="text-dark text-capitalize">{article.article_date}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="card__post__title">
                                                                <h5>
                                                                    <Link to={`/article/${article.id}`} className="text-dark text-decoration-none">
                                                                        {article.title}
                                                                    </Link>
                                                                </h5>
                                                                <p className="d-none d-lg-block d-xl-block mb-0 text-muted" style={{ fontSize: '14px' }}>
                                                                    {article.excerpt ? stripHtml(article.excerpt).substring(0, 120) + '...' : ''}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-muted">No posts found matching your criteria.</p>
                                )}

                            </div>

                            {/* Pagination */}
                            <div className="mt-4">
                                <div className="pagination-area">
                                    <div className="pagination">
                                        <a href="#">«</a>
                                        <a href="#" className="active">1</a>
                                        <a href="#">»</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SearchResults;