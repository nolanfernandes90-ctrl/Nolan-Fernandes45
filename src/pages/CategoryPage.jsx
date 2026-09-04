import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostsByCategory, fetchWpPosts } from '../wpApi';
import Sidebar from '../components/Sidebar';

function CategoryPage() {
    const { categoryName } = useParams();

    const [articles, setArticles] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    /* =========================================================
       LOAD CATEGORY ARTICLES
    ========================================================= */

    useEffect(() => {
        setLoading(true);
        setCurrentPage(1);

        Promise.all([
            fetchPostsByCategory(categoryName),
            fetchWpPosts()
        ])
            .then(([categoryData, allData]) => {

                setArticles(
                    Array.isArray(categoryData)
                        ? categoryData
                        : []
                );

                setRecentPosts(
                    Array.isArray(allData)
                        ? allData.slice(0, 4)
                        : []
                );

                setLoading(false);
            })
            .catch((error) => {

                console.error(
                    'Error loading category:',
                    error
                );

                setArticles([]);
                setRecentPosts([]);
                setLoading(false);
            });

    }, [categoryName]);


    /* =========================================================
       REMOVE HTML FROM EXCERPT
    ========================================================= */

    const stripHtml = (html) => {

        if (!html) return '';

        const doc =
            new DOMParser().parseFromString(
                html,
                'text/html'
            );

        return doc.body.textContent || '';
    };


    /* =========================================================
       PAGINATION
    ========================================================= */

    const indexOfLastArticle =
        currentPage * articlesPerPage;

    const indexOfFirstArticle =
        indexOfLastArticle - articlesPerPage;

    const currentArticles =
        articles.slice(
            indexOfFirstArticle,
            indexOfLastArticle
        );

    const totalPages =
        Math.ceil(
            articles.length / articlesPerPage
        );


    const handlePageChange = (
        e,
        pageNumber
    ) => {

        e.preventDefault();

        if (
            pageNumber > 0 &&
            pageNumber <= totalPages
        ) {

            setCurrentPage(pageNumber);

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };


    /* =========================================================
       LOADING
    ========================================================= */

    if (loading) {

        return (
            <div
                className="container text-center py-5"
                style={{
                    minHeight: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <div
                    className="spinner-border text-danger mb-3"
                    role="status"
                >
                    <span className="sr-only">
                        Loading...
                    </span>
                </div>

                <p className="text-muted font-italic">
                    Loading {categoryName} articles...
                </p>

            </div>
        );
    }


    /* =========================================================
       PAGE
    ========================================================= */

    return (

        <section
            className="category-page pt-4 pb-5"
            style={{
                minHeight: '100vh'
            }}
        >

            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <div className="container">

                <div className="row">

                    <div className="col-md-12">

                        <ul
                            className="breadcrumbs bg-light mb-4"
                        >

                            <li className="breadcrumbs__item">

                                <Link
                                    to="/"
                                    className="breadcrumbs__url"
                                >

                                    <i className="fa fa-home"></i>{' '}
                                    Home

                                </Link>

                            </li>


                            <li className="breadcrumbs__item">

                                <span className="breadcrumbs__url">
                                    News
                                </span>

                            </li>


                            <li
                                className="
                                    breadcrumbs__item
                                    breadcrumbs__item--current
                                    text-capitalize
                                "
                            >

                                {categoryName}

                            </li>

                        </ul>

                    </div>

                </div>

            </div>


            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div className="container">

               <div className="row">


                    {/* =================================================
                        LEFT — CATEGORY ARTICLES
                    ================================================= */}

                    <div
                        className="col-md-12 col-lg-8"
                    >

                        {/* CATEGORY TITLE */}

                        <div
                            className="wrapper__list__article"
                            style={{
                                marginBottom: '25px'
                            }}
                        >

                            <h4
                                className="
                                    border_section
                                    text-capitalize
                                "
                            >

                                {categoryName} News

                            </h4>

                        </div>


                        {/* =================================================
                            ARTICLE LIST
                        ================================================= */}

                        {currentArticles.length > 0 ? (

                            <div>

                                {currentArticles.map(
                                    (article, index) => {

                                        const excerptText =
                                            stripHtml(
                                                article.excerpt
                                            );

                                        return (

                                            <article
                                                className="category-article"
                                                key={`category-${article.id}`}
                                                style={{
                                                    display: 'flex',
                                                    width: '100%',
                                                    gap: '25px',
                                                    marginBottom: '35px',
                                                    alignItems: 'flex-start'
                                                }}
                                            >

                                                {/* =================================
                                                    IMAGE
                                                ================================= */}

                                                <div
                                                    style={{
                                                        flex: '0 0 320px',
                                                        width: '320px',
                                                        height: '220px',
                                                        overflow: 'hidden',
                                                        backgroundColor: '#eee'
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
                                                            src={
                                                                article.image_url
                                                            }
                                                            alt={
                                                                article.title
                                                            }
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                objectFit: 'cover',
                                                                display: 'block'
                                                            }}
                                                        />

                                                    </Link>

                                                </div>


                                                {/* =================================
                                                    ARTICLE CONTENT
                                                ================================= */}

                                                <div
                                                    style={{
                                                        flex: 1,
                                                        minWidth: 0,
                                                        paddingTop: '5px'
                                                    }}
                                                >

                                                    {/* CATEGORY */}

                                                    <div
                                                        style={{
                                                            display: 'inline-block',
                                                            backgroundColor: '#ed1c24',
                                                            color: '#fff',
                                                            padding: '6px 10px',
                                                            fontSize: '10px',
                                                            lineHeight: '1',
                                                            fontWeight: '700',
                                                            textTransform: 'uppercase',
                                                            marginBottom: '10px'
                                                        }}
                                                    >

                                                        {article.category}

                                                    </div>


                                                    {/* AUTHOR + DATE */}

                                                    <div
                                                        style={{
                                                            fontSize: '12px',
                                                            marginBottom: '8px'
                                                        }}
                                                    >

                                                        <span
                                                            style={{
                                                                color: '#ed1c24',
                                                                fontWeight: '700'
                                                            }}
                                                        >

                                                            By {article.author}

                                                        </span>


                                                        <span
                                                            style={{
                                                                color: '#555',
                                                                marginLeft: '12px'
                                                            }}
                                                        >

                                                            {article.article_date}

                                                        </span>

                                                    </div>


                                                    {/* TITLE */}

                                                    <h4
                                                        style={{
                                                            margin: '0 0 12px 0',
                                                            fontSize: '22px',
                                                            lineHeight: '1.25',
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

                                                    </h4>


                                                    {/* EXCERPT */}

                                                    {excerptText && (

                                                        <p
                                                            style={{
                                                                color: '#666',
                                                                fontSize: '14px',
                                                                lineHeight: '1.65',
                                                                margin: '0'
                                                            }}
                                                        >

                                                            {excerptText.substring(
                                                                0,
                                                                155
                                                            )}

                                                            {excerptText.length >
                                                                155
                                                                ? '...'
                                                                : ''}

                                                        </p>

                                                    )}

                                                </div>

                                            </article>

                                        );
                                    }
                                )}

                            </div>

                        ) : (

                            /* =============================================
                               NO ARTICLES
                            ============================================= */

                            <div
                                className="py-5"
                            >

                                <h5 className="text-muted">

                                    No articles found in{' '}
                                    {categoryName}.

                                </h5>

                            </div>

                        )}


                    </div>


                    {/* =================================================
                        RIGHT — SIDEBAR
                    ================================================= */}

                   <div
    className="col-md-12 col-lg-4 d-flex flex-column"
>

                        <Sidebar
                            recentPosts={recentPosts}
                        />

                    </div>

                </div>


                {/* =================================================
                    PAGINATION
                ================================================= */}

                {totalPages > 1 && (

                    <div
                        className="pagination-area mt-4"
                    >

                        <div
                            className="pagination"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '5px'
                            }}
                        >

                            {/* PREVIOUS */}

                            <a
                                href="#"
                                onClick={(e) =>
                                    handlePageChange(
                                        e,
                                        currentPage - 1
                                    )
                                }
                                style={{
                                    pointerEvents:
                                        currentPage === 1
                                            ? 'none'
                                            : 'auto',

                                    opacity:
                                        currentPage === 1
                                            ? 0.5
                                            : 1
                                }}
                            >

                                «

                            </a>


                            {/* PAGE NUMBERS */}

                            {[
                                ...Array(totalPages)
                            ].map(
                                (_, index) => (

                                    <a
                                        href="#"
                                        key={index}
                                        className={
                                            currentPage ===
                                            index + 1
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={(e) =>
                                            handlePageChange(
                                                e,
                                                index + 1
                                            )
                                        }
                                    >

                                        {index + 1}

                                    </a>

                                )
                            )}


                            {/* NEXT */}

                            <a
                                href="#"
                                onClick={(e) =>
                                    handlePageChange(
                                        e,
                                        currentPage + 1
                                    )
                                }
                                style={{
                                    pointerEvents:
                                        currentPage ===
                                        totalPages
                                            ? 'none'
                                            : 'auto',

                                    opacity:
                                        currentPage ===
                                        totalPages
                                            ? 0.5
                                            : 1
                                }}
                            >

                                »

                            </a>

                        </div>

                    </div>

                )}

            </div>

        </section>
    );
}

export default CategoryPage;