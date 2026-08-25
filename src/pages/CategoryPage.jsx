import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostsByCategory, fetchWpPosts } from '../wpApi';
import Sidebar from '../components/Sidebar'; // IMPORT SIDEBAR

function CategoryPage() {
    const { categoryName } = useParams(); 
    
    const [articles, setArticles] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    useEffect(() => {
        setLoading(true);
        setCurrentPage(1); 
        
        Promise.all([
            fetchPostsByCategory(categoryName),
            fetchWpPosts()
        ]).then(([categoryData, allData]) => {
            setArticles(Array.isArray(categoryData) ? categoryData : []);
            setRecentPosts(Array.isArray(allData) ? allData.slice(0, 4) : []); 
            setLoading(false);
        });
    }, [categoryName]);

    const stripHtml = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handlePageChange = (e, pageNumber) => {
        e.preventDefault();
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (loading) {
        return (
            <div className="container text-center py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="spinner-border text-danger mb-3" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p className="text-muted font-italic">Loading {categoryName} articles...</p>
            </div>
        );
    }

    return (
        <section className="pt-4 pb-5 min-vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="breadcrumbs bg-light mb-4">
                            <li className="breadcrumbs__item">
                                <Link to="/" className="breadcrumbs__url">
                                    <i className="fa fa-home"></i> Home
                                </Link>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs__url">Category</span>
                            </li>
                            <li className="breadcrumbs__item breadcrumbs__item--current text-capitalize">
                                {categoryName}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {/* Main Content Area */}
                    <div className="col-md-8">
                        <aside className="wrapper__list__article">
                            <h4 className="border_section text-uppercase">{categoryName} News</h4>

                            <div className="row">
                                {currentArticles.length > 0 ? (
                                    currentArticles.map((article) => (
                                        <div className="col-md-6 mb-4" key={article.id}>
                                            <div className="article__entry">
                                                <div className="article__image">
                                                    <Link to={`/article/${article.id}`}>
                                                        <img 
                                                            src={article.image_url} 
                                                            alt={article.title} 
                                                            className="img-fluid" 
                                                            style={{ height: '220px', width: '100%', objectFit: 'cover' }}
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="article__content mt-3">
                                                    <div className="article__category text-uppercase badge badge-danger mb-2">
                                                        {article.category}
                                                    </div>
                                                    <ul className="list-inline mb-2" style={{ fontSize: '12px' }}>
                                                        <li className="list-inline-item">
                                                            <span className="text-primary">by {article.author}</span>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="text-dark text-capitalize">{article.article_date}</span>
                                                        </li>
                                                    </ul>
                                                    <h5 className="mb-2">
                                                        <Link to={`/article/${article.id}`} className="text-dark">
                                                            {article.title}
                                                        </Link>
                                                    </h5>
                                                    <p className="text-muted" style={{ fontSize: '14px' }}>
                                                        {stripHtml(article.excerpt).substring(0, 110)}...
                                                    </p>
                                                    <Link to={`/article/${article.id}`} className="btn btn-outline-primary mb-4 text-capitalize btn-sm">
                                                        Read more
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 py-4">
                                        <h5 className="text-muted">No articles found in {categoryName}.</h5>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>

                    {/* Reusable Sidebar Component */}
                    <div className="col-md-4">
                        <Sidebar recentPosts={recentPosts} />
                    </div>
                </div>

                <div className="clearfix"></div>

                {totalPages > 1 && (
                    <div className="pagination-area mt-5">
                        <div className="pagination wow fadeIn animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <a 
                                href="#" 
                                onClick={(e) => handlePageChange(e, currentPage - 1)}
                                style={{ pointerEvents: currentPage === 1 ? 'none' : 'auto', opacity: currentPage === 1 ? 0.5 : 1 }}
                            >
                                «
                            </a>
                            
                            {[...Array(totalPages)].map((_, index) => (
                                <a 
                                    href="#" 
                                    key={index} 
                                    className={currentPage === index + 1 ? "active" : ""}
                                    onClick={(e) => handlePageChange(e, index + 1)}
                                >
                                    {index + 1}
                                </a>
                            ))}
                            
                            <a 
                                href="#" 
                                onClick={(e) => handlePageChange(e, currentPage + 1)}
                                style={{ pointerEvents: currentPage === totalPages ? 'none' : 'auto', opacity: currentPage === totalPages ? 0.5 : 1 }}
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