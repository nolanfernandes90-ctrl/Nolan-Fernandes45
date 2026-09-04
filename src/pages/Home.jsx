import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchWpPosts } from '../wpApi';

import HeroSection from '../components/HeroSection';
import PopularSidebar from '../components/PopularSidebar';
import HomeFeed from '../components/HomeFeed';


function Home() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    /* =========================================================
       CATEGORY GROUPS
    ========================================================= */

    const categoryGroups = [
        {
            name: "NATION",
            subCategories: [
                "Politics",
                "Crime",
                "Development",
                "Education",
                "Environment",
                "Agriculture",
                "Accidents",
                "Local News"
            ]
        },

        {
            name: "BUSINESS",
            subCategories: [
                "Business",
                "Economy",
                "Technology",
                "Market",
                "Finance"
            ]
        },

        {
            name: "LIFESTYLE",
            subCategories: [
                "Food",
                "Health",
                "Fashion & Style",
                "Arts & Culture",
                "Lifestyle",
                "Tourism"
            ]
        },

        {
            name: "SPORTS & TRAVEL",
            subCategories: [
                "Sports",
                "Travel",
                "Science",
                "Entertainment"
            ]
        }
    ];


    /* =========================================================
       FETCH WORDPRESS POSTS
    ========================================================= */

    useEffect(() => {

        fetchWpPosts()
            .then((data) => {

                if (Array.isArray(data)) {
                    setArticles(data);
                } else {
                    setArticles([]);
                }

                setLoading(false);

            })
            .catch((error) => {

                console.error("Failed to load articles:", error);

                setArticles([]);
                setLoading(false);

            });

    }, []);


    /* =========================================================
       LOAD TEMPLATE JS
    ========================================================= */

    useEffect(() => {

        if (!loading && articles.length > 0) {

            const timer = setTimeout(() => {

                const existingScript =
                    document.getElementById("retnews-js-bundle");

                if (existingScript) {
                    existingScript.remove();
                }

                const script = document.createElement('script');

                script.src = "/js/index.bundle.js";
                script.id = "retnews-js-bundle";
                script.async = false;

                document.body.appendChild(script);

            }, 300);


            return () => {

                clearTimeout(timer);

                const existingScript =
                    document.getElementById("retnews-js-bundle");

                if (existingScript) {
                    existingScript.remove();
                }

            };

        }

    }, [loading, articles]);


    /* =========================================================
       LOADING
    ========================================================= */

    if (loading) {

        return (
            <div
                className="container text-center py-5"
                style={{
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <p className="text-muted font-italic">
                    Loading...
                </p>

            </div>
        );

    }


    /* =========================================================
       ARTICLE DATA
    ========================================================= */

    /*
        TOP = 3 articles
        This keeps the entire top ticker in ONE ROW.
    */

    const topCarouselArticles =
        articles.slice(0, 3);


    /*
        HERO
    */

    const mainPopularArticles =
        articles.slice(0, 3);

    const sidePopularArticles =
        articles.slice(1, 3);


    /*
        SIDEBAR
    */

    const sidebarListArticles =
        articles.slice(3, 7);


    return (

        <div className="home-page">


            {/* =====================================================
                TOP TRENDING NEWS
            ===================================================== */}

            <section
                className="bg-light home-trending-section"
                style={{
                    width: '100%'
                }}
            >

                <div className="container">

                    <div className="row">

                        <div className="col-md-12">

                            <div
                                className="wrapp__list__article-responsive home-top-news-row"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns:
                                        'repeat(3, minmax(0, 1fr))',
                                    gap: '25px',
                                    width: '100%'
                                }}
                            >

                                {topCarouselArticles.map((article) => (

                                    <div
                                        className="item"
                                        key={`carousel-${article.id}`}
                                        style={{
                                            minWidth: 0
                                        }}
                                    >

                                        <div
                                            className="card__post card__post-list"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                width: '100%'
                                            }}
                                        >

                                            {/* IMAGE */}

                                            <div
                                                className="image-sm"
                                                style={{
                                                    flex: '0 0 100px'
                                                }}
                                            >

                                                <Link
                                                    to={`/article/${article.id}`}
                                                >

                                                    <img
                                                        src={article.image_url}
                                                        className="img-fluid"
                                                        alt={article.title}
                                                        style={{
                                                            width: '100px',
                                                            height: '70px',
                                                            objectFit: 'cover',
                                                            display: 'block'
                                                        }}
                                                    />

                                                </Link>

                                            </div>


                                            {/* TEXT */}

                                            <div
                                                className="card__post__body"
                                                style={{
                                                    flex: 1,
                                                    minWidth: 0
                                                }}
                                            >

                                                <div
                                                    className="card__post__content"
                                                >

                                                    <div
                                                        className="card__post__author-info"
                                                        style={{
                                                            marginBottom: '5px'
                                                        }}
                                                    >

                                                        <ul
                                                            className="list-inline mb-0"
                                                            style={{
                                                                fontSize: '11px'
                                                            }}
                                                        >

                                                            <li className="list-inline-item">

                                                                <span
                                                                    className="text-primary"
                                                                >
                                                                    By {article.author}
                                                                </span>

                                                            </li>

                                                            <li className="list-inline-item">

                                                                <span
                                                                    className="text-dark"
                                                                >
                                                                    {article.article_date}
                                                                </span>

                                                            </li>

                                                        </ul>

                                                    </div>


                                                    <div className="card__post__title">

                                                        <h6
                                                            style={{
                                                                margin: 0,
                                                                lineHeight: '1.3',
                                                                fontWeight: '700'
                                                            }}
                                                        >

                                                            <Link
                                                                to={`/article/${article.id}`}
                                                                className="text-dark"
                                                                style={{
                                                                    textDecoration: 'none'
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

                    </div>

                </div>

            </section>



            {/* =====================================================
                HERO SECTION
            ===================================================== */}

            <section className="home-hero-section">

                <div className="container">

                    <HeroSection
                        mainPopularArticles={
                            mainPopularArticles
                        }
                        sidePopularArticles={
                            sidePopularArticles
                        }
                    />

                </div>

            </section>



            {/* =====================================================
                RECENT POSTS + SIDEBAR
            ===================================================== */}

           <section className="pt-0 home-content-section">

                <div
    className="popular__section-news"
    style={{
        width: '100%'
    }}
>

                    <div className="container">

                        <div
                            className="row align-items-start"
                            style={{
                                position: 'relative'
                            }}
                        >


                            {/* =================================================
                                MAIN CONTENT
                            ================================================= */}

                            <div
                                className="col-md-12 col-lg-8"
                            >

                                {/* =============================================
                                    RECENT POST TITLE
                                ============================================= */}

                                <div className="wrapper__list__article">

                                    <h4 className="border_section">
                                        Recent Post
                                    </h4>

                                </div>


                                {/* =============================================
                                    RECENT POSTS
                                ============================================= */}

                                <div className="row">


                                    {/* =========================
                                        FIRST 2 BIG POSTS
                                    ========================= */}

                                    {articles
                                        .slice(0, 2)
                                        .map((article) => (

                                            <div
                                                className="col-sm-12 col-md-6 mb-4"
                                                key={`featured-${article.id}`}
                                            >

                                                <div
                                                    className="recent-featured-card"
                                                    style={{
                                                        position: 'relative',
                                                        height: '280px',
                                                        overflow: 'hidden',
                                                        backgroundColor: '#000'
                                                    }}
                                                >

                                                    <Link
                                                        to={`/article/${article.id}`}
                                                        style={{
                                                            display: 'block',
                                                            width: '100%',
                                                            height: '100%'
                                                        }}
                                                    >

                                                        <img
                                                            src={article.image_url}
                                                            alt={article.title}
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                display: 'block'
                                                            }}
                                                        />


                                                        {/* DARK GRADIENT */}

                                                        <div
                                                            style={{
                                                                position: 'absolute',
                                                                left: 0,
                                                                right: 0,
                                                                bottom: 0,
                                                                padding:
                                                                    '50px 20px 18px',
                                                                background:
                                                                    'linear-gradient(transparent, rgba(0,0,0,0.9))'
                                                            }}
                                                        >

                                                            {/* CATEGORY */}

                                                            <span
                                                                className="badge badge-danger text-uppercase"
                                                                style={{
                                                                    fontSize: '10px',
                                                                    marginBottom: '8px'
                                                                }}
                                                            >
                                                                {article.category}
                                                            </span>


                                                            {/* TITLE */}

                                                            <h5
                                                                style={{
                                                                    color: '#fff',
                                                                    fontSize: '19px',
                                                                    lineHeight: '1.3',
                                                                    fontWeight: '700',
                                                                    margin: '6px 0'
                                                                }}
                                                            >
                                                                {article.title}
                                                            </h5>


                                                            {/* META */}

                                                            <div
                                                                style={{
                                                                    color: '#ddd',
                                                                    fontSize: '12px'
                                                                }}
                                                            >
                                                                By {article.author}
                                                                {' • '}
                                                                {article.article_date}
                                                            </div>

                                                        </div>

                                                    </Link>

                                                </div>

                                            </div>

                                        ))}



                                    {/* =========================
                                        NEXT 4 SMALL POSTS
                                    ========================= */}

                                    {articles
                                        .slice(2, 6)
                                        .map((article) => (

                                            <div
                                                className="col-sm-12 col-md-6 mb-3"
                                                key={`small-${article.id}`}
                                            >

                                                <div
                                                    className="recent-small-card"
                                                    style={{
                                                        display: 'flex',
                                                        gap: '15px',
                                                        alignItems: 'flex-start',
                                                        borderBottom:
                                                            '1px solid #eee',
                                                        paddingBottom: '15px'
                                                    }}
                                                >

                                                    {/* IMAGE */}

                                                    <Link
                                                        to={`/article/${article.id}`}
                                                        style={{
                                                            flex: '0 0 125px'
                                                        }}
                                                    >

                                                        <img
                                                            src={article.image_url}
                                                            alt={article.title}
                                                            style={{
                                                                width: '125px',
                                                                height: '90px',
                                                                objectFit: 'cover',
                                                                display: 'block'
                                                            }}
                                                        />

                                                    </Link>


                                                    {/* TEXT */}

                                                    <div
                                                        style={{
                                                            flex: 1,
                                                            minWidth: 0
                                                        }}
                                                    >

                                                        {/* META */}

                                                        <div
                                                            style={{
                                                                fontSize: '11px',
                                                                color: '#777',
                                                                marginBottom: '6px'
                                                            }}
                                                        >

                                                            <span
                                                                style={{
                                                                    color: '#e00000',
                                                                    fontWeight: '600'
                                                                }}
                                                            >
                                                                By {article.author}
                                                            </span>

                                                            {' • '}

                                                            {article.article_date}

                                                        </div>


                                                        {/* TITLE */}

                                                        <h6
                                                            style={{
                                                                margin: 0,
                                                                fontSize: '15px',
                                                                lineHeight: '1.35',
                                                                fontWeight: '700'
                                                            }}
                                                        >

                                                            <Link
                                                                to={`/article/${article.id}`}
                                                                className="text-dark"
                                                                style={{
                                                                    textDecoration: 'none'
                                                                }}
                                                            >
                                                                {article.title}
                                                            </Link>

                                                        </h6>

                                                    </div>

                                                </div>

                                            </div>

                                        ))}

                                </div>



                                {/* =================================================
                                    GROUPED CATEGORY SECTIONS
                                ================================================= */}

                                <HomeFeed
                                    articles={articles}
                                    categoryGroups={
                                        categoryGroups
                                    }
                                />

                            </div>



                            {/* =================================================
                                RIGHT SIDEBAR
                            ================================================= */}

                            <div
                                className="col-md-12 col-lg-4 d-flex flex-column"
                            >


                                {/* =============================================
                                    EDITOR'S PICK
                                ============================================= */}

                                {articles.length > 0 && (

                                    <aside
                                        className="wrapper__list__article mb-4"
                                    >

                                        <h4 className="border_section">
                                            Editor's Pick
                                        </h4>


                                        <div
                                            style={{
                                                marginTop: '20px',
                                                background: '#fff',
                                                boxShadow:
                                                    '0 2px 10px rgba(0,0,0,0.08)'
                                            }}
                                        >

                                            <Link
                                                to={`/article/${
                                                    articles[4]?.id ||
                                                    articles[0].id
                                                }`}
                                            >

                                                <img
                                                    src={
                                                        articles[4]?.image_url ||
                                                        articles[0].image_url
                                                    }
                                                    alt={
                                                        articles[4]?.title ||
                                                        articles[0].title
                                                    }
                                                    style={{
                                                        width: '100%',
                                                        height: '220px',
                                                        objectFit: 'cover',
                                                        display: 'block'
                                                    }}
                                                />

                                            </Link>


                                            <div
                                                style={{
                                                    padding: '15px'
                                                }}
                                            >

                                                {/* CATEGORY */}

                                                <span
                                                    className="badge badge-danger text-uppercase"
                                                    style={{
                                                        fontSize: '10px',
                                                        marginBottom: '8px'
                                                    }}
                                                >
                                                    {
                                                        articles[4]?.category ||
                                                        articles[0].category
                                                    }
                                                </span>


                                                {/* TITLE */}

                                                <h5
                                                    style={{
                                                        fontSize: '17px',
                                                        lineHeight: '1.4',
                                                        fontWeight: '700',
                                                        margin: '8px 0'
                                                    }}
                                                >

                                                    <Link
                                                        to={`/article/${
                                                            articles[4]?.id ||
                                                            articles[0].id
                                                        }`}
                                                        className="text-dark"
                                                        style={{
                                                            textDecoration: 'none'
                                                        }}
                                                    >
                                                        {
                                                            articles[4]?.title ||
                                                            articles[0].title
                                                        }
                                                    </Link>

                                                </h5>


                                                {/* META */}

                                                <div
                                                    style={{
                                                        fontSize: '12px',
                                                        color: '#777'
                                                    }}
                                                >

                                                    By {
                                                        articles[4]?.author ||
                                                        articles[0].author
                                                    }

                                                    {' • '}

                                                    {
                                                        articles[4]?.article_date ||
                                                        articles[0].article_date
                                                    }

                                                </div>

                                            </div>

                                        </div>

                                    </aside>

                                )}



                                {/* =============================================
                                    POPULAR SIDEBAR
                                ============================================= */}

                                <PopularSidebar
                                    sidebarListArticles={
                                        sidebarListArticles
                                    }
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    );

}


export default Home;