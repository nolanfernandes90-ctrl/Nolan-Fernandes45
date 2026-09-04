import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function HomeFeed({ articles = [], categoryGroups = [] }) {

    const [businessStart, setBusinessStart] = useState(0);

    const businessArticles = articles.filter(
        article => article.groupCategory === 'BUSINESS'
    );

    // Automatically move one post every 4 seconds
    useEffect(() => {

        if (businessArticles.length <= 3) return;

        const timer = setInterval(() => {

            setBusinessStart(prev => {

                if (prev >= businessArticles.length - 1) {
                    return 0;
                }

                return prev + 1;
            });

        }, 4000);

        return () => clearInterval(timer);

    }, [businessArticles.length]);


    return (
        <div>

            {categoryGroups.map((group, groupIndex) => {

                const groupArticles = articles.filter(
                    article => article.groupCategory === group.name
                );

                if (groupArticles.length === 0) {
                    return null;
                }


                /* =====================================================
                   BUSINESS SECTION
                ===================================================== */

                if (group.name === 'BUSINESS') {

                    return (
                        <section
                            className="business-news-section"
                            key={groupIndex}
                        >

                            <h4 className="border_section">
                                BUSINESS
                            </h4>


                            <div className="business-slider-container">

                                <div
                                    className="business-slider-track"
                                    style={{
                                        transform: `translateX(-${businessStart * (100 / 3)}%)`
                                    }}
                                >

                                    {businessArticles.map((article) => (

                                        <article
                                            className="business-news-card"
                                            key={article.id}
                                        >

                                            <Link
                                                to={`/article/${article.id}`}
                                            >

                                                <img
                                                    src={article.image_url}
                                                    alt={article.title}
                                                    className="business-news-image"
                                                />

                                            </Link>


                                            <div className="business-news-body">

                                                <Link
                                                    to={`/category/${encodeURIComponent(
                                                        article.category?.toLowerCase() || 'business'
                                                    )}`}
                                                    className="business-news-category"
                                                >
                                                    {article.category || 'BUSINESS'}
                                                </Link>


                                                <h5>

                                                    <Link
                                                        to={`/article/${article.id}`}
                                                    >
                                                        {article.title}
                                                    </Link>

                                                </h5>


                                                <p className="business-news-meta">
                                                    By {article.author || 'Editor'}
                                                    {article.article_date
                                                        ? ` • ${article.article_date}`
                                                        : ''}
                                                </p>

                                            </div>

                                        </article>

                                    ))}

                                </div>

                            </div>


                            {/* Slider indicators */}

                            <div className="business-slider-dots">

                                {businessArticles.map((article, index) => (

                                    <button
                                        key={article.id}
                                        onClick={() => setBusinessStart(index)}
                                        className={
                                            index === businessStart
                                                ? 'business-slider-dot active'
                                                : 'business-slider-dot'
                                        }
                                    />

                                ))}

                            </div>

                        </section>
                    );
                }


                /* =====================================================
                   ALL OTHER SECTIONS
                ===================================================== */

                return (
                    <div
                        className="wrapper__list__article mb-4"
                        key={groupIndex}
                    >

                        <h4 className="border_section">
                            {group.name}
                        </h4>

                        <div className="row">

                            {groupArticles.slice(0, 4).map((article) => (

                                <div
                                    className="col-md-6 mb-3"
                                    key={article.id}
                                >

                                    <div className="card__post card__post-list">

                                        <div className="image-sm">

                                            <Link
                                                to={`/article/${article.id}`}
                                            >

                                                <img
                                                    src={article.image_url}
                                                    className="img-fluid"
                                                    alt={article.title}
                                                    style={{
                                                        height: '90px',
                                                        objectFit: 'cover'
                                                    }}
                                                />

                                            </Link>

                                        </div>


                                        <div className="card__post__body">

                                            <div className="card__post__content">

                                                <div className="card__post__author-info mb-1">

                                                    <ul className="list-inline">

                                                        <li className="list-inline-item">

                                                            <span
                                                                className="text-primary"
                                                                style={{
                                                                    fontSize: '12px'
                                                                }}
                                                            >
                                                                by {article.author}
                                                            </span>

                                                        </li>

                                                    </ul>

                                                </div>


                                                <div className="card__post__title">

                                                    <h6>

                                                        <Link
                                                            to={`/article/${article.id}`}
                                                            className="text-dark"
                                                            style={{
                                                                fontSize: '14px',
                                                                lineHeight: '1.3'
                                                            }}
                                                        >
                                                            {article.title}
                                                        </Link>

                                                    </h6>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>
                );

            })}

        </div>
    );
}

export default HomeFeed;