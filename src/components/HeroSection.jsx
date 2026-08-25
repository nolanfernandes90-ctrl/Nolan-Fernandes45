import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection({ mainPopularArticles, sidePopularArticles }) {
    return (
        <section>
            <div className="popular__news-header">
                <div className="container">
                    <div className="row no-gutters" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                        
                        {/* LEFT COLUMN: Main Hero Carousel (800x600 Ratio) */}
                        <div className="col-md-8" style={{ flex: '0 0 66.66667%', maxWidth: '66.66667%', paddingRight: '15px' }}>
                            <div className="card__post-carousel">
                                {mainPopularArticles.map((article) => (
                                    <div className="item" key={`main-pop-${article.id}`}>
                                        <div className="card__post">
                                            <div className="card__post__body" style={{ position: 'relative', height: '440px', overflow: 'hidden' }}>
                                                <Link to={`/article/${article.id}`}>
                                                    <img src={article.image_url} className="img-fluid" alt={article.title} style={{ height: '440px', objectFit: 'cover', width: '100%' }} />
                                                </Link>
                                                <div className="card__post__content bg__post-cover" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5 }}>
                                                    <div className="card__post__category text-uppercase">{article.category}</div>
                                                    <div className="card__post__title">
                                                        <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
                                                    </div>
                                                    <div className="card__post__author-info">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item"><span className="text-white">by {article.author}</span></li>
                                                            <li className="list-inline-item"><span className="text-white">{article.article_date}</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Two Stacked Popular Cards (600x400 Ratio) */}
                        <div className="col-md-4" style={{ flex: '0 0 33.33333%', maxWidth: '33.33333%' }}>
                            <div className="popular__news-right">
                                {sidePopularArticles.map((article) => (
                                    <div className="card__post mb-3" key={`side-pop-${article.id}`} style={{ marginBottom: '15px' }}>
                                        <div className="card__post__body card__post__transition" style={{ position: 'relative', height: '212px', overflow: 'hidden' }}>
                                            <Link to={`/article/${article.id}`}>
                                                <img src={article.image_url} className="img-fluid" alt={article.title} style={{ height: '212px', objectFit: 'cover', width: '100%' }} />
                                            </Link>
                                            <div className="card__post__content bg__post-cover" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5 }}>
                                                <div className="card__post__category text-uppercase">{article.category}</div>
                                                <div className="card__post__title">
                                                    <h5><Link to={`/article/${article.id}`}>{article.title}</Link></h5>
                                                </div>
                                                <div className="card__post__author-info">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><span className="text-white">by {article.author}</span></li>
                                                        <li className="list-inline-item"><span className="text-white">{article.article_date}</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;