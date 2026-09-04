import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection({
    mainPopularArticles = [],
    sidePopularArticles = []
}) {
    return (
        <section
            className="hero-section"
            style={{
                width: '100%',
                margin: 0,
                padding: 0
            }}
        >

            <div
                className="popular__news-header"
                style={{
                    width: '100%',
                    margin: 0,
                    padding: 0
                }}
            >

                <div
                    className="hero-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        columnGap: '20px',
                        width: '100%',
                        height: '500px',
                        margin: 0,
                        padding: 0
                    }}
                >

                    {/* =====================================================
                        LEFT — MAIN HERO
                    ===================================================== */}

                    <div
                        className="hero-main-column"
                        style={{
                            width: '100%',
                            height: '500px',
                            minWidth: 0,
                            margin: 0,
                            padding: 0
                        }}
                    >

                        <div
                            className="card__post-carousel"
                            style={{
                                width: '100%',
                                height: '500px',
                                margin: 0,
                                padding: 0
                            }}
                        >

                            {mainPopularArticles.map((article) => (

                                <div
                                    className="item"
                                    key={`main-pop-${article.id}`}
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        margin: 0,
                                        padding: 0
                                    }}
                                >

                                    <div
                                        className="card__post"
                                        style={{
                                            width: '100%',
                                            height: '500px',
                                            margin: 0,
                                            padding: 0
                                        }}
                                    >

                                        <div
                                            className="card__post__body"
                                            style={{
                                                position: 'relative',
                                                width: '100%',
                                                height: '500px',
                                                margin: 0,
                                                padding: 0,
                                                overflow: 'hidden'
                                            }}
                                        >

                                            <Link
                                                to={`/article/${article.id}`}
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: '100%',
                                                    margin: 0,
                                                    padding: 0
                                                }}
                                            >

                                                <img
                                                    src={article.image_url}
                                                    className="img-fluid"
                                                    alt={article.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '500px',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                        margin: 0,
                                                        padding: 0
                                                    }}
                                                />

                                            </Link>


                                            {/* DARK OVERLAY */}

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background:
                                                        'linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,0.9) 100%)',
                                                    pointerEvents: 'none'
                                                }}
                                            />


                                            {/* CONTENT */}

                                            <div
                                                className="card__post__content bg__post-cover"
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    zIndex: 5,
                                                    padding: '35px 25px 22px',
                                                    margin: 0
                                                }}
                                            >

                                                <div className="card__post__category text-uppercase">
                                                    {article.category}
                                                </div>


                                                <div className="card__post__title">

                                                    <h2
                                                        style={{
                                                            margin: '0 0 10px 0'
                                                        }}
                                                    >

                                                        <Link
                                                            to={`/article/${article.id}`}
                                                        >
                                                            {article.title}
                                                        </Link>

                                                    </h2>

                                                </div>


                                                <div className="card__post__author-info">

                                                    <ul
                                                        className="list-inline mb-0"
                                                        style={{
                                                            margin: 0
                                                        }}
                                                    >

                                                        <li className="list-inline-item">

                                                            <span className="text-white">
                                                                By {article.author}
                                                            </span>

                                                        </li>

                                                        <li className="list-inline-item">

                                                            <span className="text-white">
                                                                {article.article_date}
                                                            </span>

                                                        </li>

                                                    </ul>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* =====================================================
                        RIGHT — TWO STACKED STORIES
                    ===================================================== */}

                    <div
                        className="hero-side-column"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '500px',
                            minWidth: 0,
                            margin: 0,
                            padding: 0,
                            overflow: 'hidden'
                        }}
                    >

                        {sidePopularArticles
                            .slice(0, 2)
                            .map((article, index) => (

                                <div
                                    className="hero-side-card"
                                    key={`side-pop-${article.id}`}
                                    style={{
                                        position: 'absolute',
                                        top: index === 0 ? '0px' : '260px',
                                        left: 0,
                                        width: '100%',
                                        height: '240px',
                                        margin: 0,
                                        padding: 0,
                                        overflow: 'hidden'
                                    }}
                                >

                                    <div
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '240px',
                                            margin: 0,
                                            padding: 0,
                                            overflow: 'hidden'
                                        }}
                                    >

                                        {/* IMAGE */}

                                        <Link
                                            to={`/article/${article.id}`}
                                            style={{
                                                display: 'block',
                                                width: '100%',
                                                height: '240px',
                                                margin: 0,
                                                padding: 0
                                            }}
                                        >

                                            <img
                                                src={article.image_url}
                                                className="img-fluid"
                                                alt={article.title}
                                                style={{
                                                    width: '100%',
                                                    height: '240px',
                                                    objectFit: 'cover',
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0
                                                }}
                                            />

                                        </Link>


                                        {/* DARK OVERLAY */}

                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background:
                                                    'linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9) 100%)',
                                                pointerEvents: 'none'
                                            }}
                                        />


                                        {/* CONTENT */}

                                        <div
                                            className="hero-side-content"
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                zIndex: 5,
                                                padding: '25px 20px 18px',
                                                margin: 0
                                            }}
                                        >

                                            {/* CATEGORY */}

                                            <div className="card__post__category text-uppercase">

                                                {article.category}

                                            </div>


                                            {/* TITLE */}

                                            <div className="card__post__title">

                                                <h5
                                                    style={{
                                                        margin: '0 0 8px 0'
                                                    }}
                                                >

                                                    <Link
                                                        to={`/article/${article.id}`}
                                                    >
                                                        {article.title}
                                                    </Link>

                                                </h5>

                                            </div>


                                            {/* AUTHOR + DATE */}

                                            <div className="card__post__author-info">

                                                <ul
                                                    className="list-inline mb-0"
                                                    style={{
                                                        margin: 0
                                                    }}
                                                >

                                                    <li className="list-inline-item">

                                                        <span className="text-white">
                                                            By {article.author}
                                                        </span>

                                                    </li>

                                                    <li className="list-inline-item">

                                                        <span className="text-white">
                                                            {article.article_date}
                                                        </span>

                                                    </li>

                                                </ul>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroSection;