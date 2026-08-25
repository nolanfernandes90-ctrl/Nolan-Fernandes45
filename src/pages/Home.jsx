import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWpPosts } from '../wpApi';
import HeroSection from '../components/HeroSection';
import PopularSidebar from '../components/PopularSidebar';

function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoryGroups = [
        {
            name: "NATION",
            subCategories: ["Politics", "Crime", "Development", "Education", "Environment", "Agriculture", "Accidents", "Local News"]
        },
        {
            name: "BUSINESS",
            subCategories: ["Business", "Economy", "Technology", "Market", "Finance"]
        },
        {
            name: "LIFESTYLE",
            subCategories: ["Food", "Health", "Fashion & Style", "Arts & Culture", "Lifestyle", "Tourism"]
        },
        {
            name: "SPORTS & TRAVEL",
            subCategories: ["Sports", "Travel", "Science", "Entertainment"]
        }
    ];

    // Fetch live WordPress posts
    useEffect(() => {
        fetchWpPosts().then((data) => {
            if (Array.isArray(data)) {
                setArticles(data);
            } else {
                setArticles([]);
            }
            setLoading(false);
        });
    }, []);

    // Load template bundle and re-initialize Slick carousels after articles render
    useEffect(() => {
        if (!loading && articles.length > 0) {
            const timer = setTimeout(() => {
                const script = document.createElement('script');
                script.src = "/js/index.bundle.js";
                script.id = "retnews-js-bundle";
                script.async = false;
                document.body.appendChild(script);
            }, 300);

            return () => {
                clearTimeout(timer);
                const existingScript = document.getElementById("retnews-js-bundle");
                if (existingScript) {
                    document.body.removeChild(existingScript);
                }
            };
        }
    }, [loading, articles]);

    if (loading) {
        return (
            <div className="container text-center py-5">
                <p className="text-muted font-italic">Connecting to GoaMonitor WordPress Backend...</p>
            </div>
        );
    }

    const topCarouselArticles = articles.slice(0, 6);
    const mainPopularArticles = articles.slice(0, 3);
    const sidePopularArticles = articles.slice(1, 3);
    const sidebarListArticles = articles.slice(3, 7);

    return (
        <div>
            {/* Trending News Carousel (Top) */}
            <section className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wrapp__list__article-responsive wrapp__list__article-responsive-carousel">
                                {topCarouselArticles.map((article) => (
                                    <div className="item px-2" key={`carousel-${article.id}`}>
                                        <div className="card__post card__post-list">
                                            <div className="image-sm">
                                                <Link to={`/article/${article.id}`}>
                                                    <img src={article.image_url} className="img-fluid" alt={article.title} style={{ height: '80px', objectFit: 'cover' }} />
                                                </Link>
                                            </div>
                                            <div className="card__post__body">
                                                <div className="card__post__content">
                                                    <div className="card__post__author-info mb-2">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span className="text-primary">by {article.author}</span></li>
                                                            <li className="list-inline-item"><span className="text-dark text-capitalize">{article.article_date}</span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="card__post__title">
                                                        <h6><Link to={`/article/${article.id}`}>{article.title}</Link></h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extracted Hero Grid Component */}
            <HeroSection 
                mainPopularArticles={mainPopularArticles} 
                sidePopularArticles={sidePopularArticles} 
            />

            {/* Recent Post & Grouped Category Grid Section */}
            <section className="pt-0">
                <div className="popular__section-news">
                    <div className="container">
                        <div className="row align-items-start">
                            {/* Recent Post Area */}
                            <div className="col-md-12 col-lg-8">
                                <div className="wrapper__list__article">
                                    <h4 className="border_section">Recent Post</h4>
                                </div>
                                <div className="row">
                                    {articles.slice(0, 4).map((article) => (
                                        <div className="col-sm-12 col-md-6 mb-4" key={article.id}>
                                            <div className="card card__post shadow-sm h-100" style={{ border: 'none' }}>
                                                <Link to={`/article/${article.id}`}>
                                                    <img 
                                                        src={article.image_url} 
                                                        className="card-img-top" 
                                                        style={{ height: '220px', objectFit: 'cover' }} 
                                                        alt={article.title} 
                                                    />
                                                </Link>
                                                <div className="card-body bg-white p-3 d-flex flex-column justify-content-between">
                                                    <div>
                                                        <span className="badge badge-danger mb-2 text-uppercase" style={{ fontSize: '11px' }}>{article.category}</span>
                                                        <h5 className="card-title mb-2">
                                                            <Link to={`/article/${article.id}`} className="text-dark text-decoration-none" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                                                {article.title}
                                                            </Link>
                                                        </h5>
                                                    </div>
                                                    <div className="text-muted mt-2" style={{ fontSize: '13px' }}>
                                                        <span>By {article.author}</span> &bull; <span>{article.article_date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Grouped Category Sections */}
                                {categoryGroups.map((group, catIdx) => {
                                    const catArticles = articles.filter(a => 
                                        a.groupCategory && a.groupCategory.trim().toUpperCase() === group.name.trim().toUpperCase()
                                    ).slice(0, 4);

                                    return (
                                        <div key={catIdx}>
                                            <div className="wrapper__list__article mt-4">
                                                <h4 className="border_section">{group.name}</h4>
                                            </div>
                                            <div className="row">
                                                {catArticles.length > 0 ? (
                                                    catArticles.map((article) => (
                                                        <div className="col-sm-12 col-md-6 mb-4" key={`${group.name}-${article.id}`}>
                                                            <div className="card card__post shadow-sm h-100" style={{ border: 'none' }}>
                                                                <Link to={`/article/${article.id}`}>
                                                                    <img src={article.image_url} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} alt={article.title} />
                                                                </Link>
                                                                <div className="card-body bg-white p-3 d-flex flex-column justify-content-between">
                                                                    <div>
                                                                        <span className="badge badge-danger mb-2 text-uppercase" style={{ fontSize: '11px' }}>{article.category}</span>
                                                                        <h5 className="card-title mb-2">
                                                                            <Link to={`/article/${article.id}`} className="text-dark text-decoration-none" style={{ fontSize: '16px', fontWeight: 'bold' }}>{article.title}</Link>
                                                                        </h5>
                                                                    </div>
                                                                    <div className="text-muted mt-2" style={{ fontSize: '13px' }}><span>By {article.author}</span> &bull; <span>{article.article_date}</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="col-12 mb-4">
                                                        <p className="text-muted font-italic" style={{ fontSize: '13px' }}>No articles found in {group.name} yet.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Popular Post Sidebar Component */}
                            <div className="col-md-12 col-lg-4">
                                <PopularSidebar sidebarListArticles={sidebarListArticles} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;