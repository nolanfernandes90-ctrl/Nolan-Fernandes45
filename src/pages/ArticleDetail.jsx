import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPostById, fetchCommentsByPostId, fetchWpPosts } from '../wpApi';
import Sidebar from '../components/Sidebar'; // IMPORT SIDEBAR

function ArticleDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [comments, setComments] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetchPostById(id),
            fetchCommentsByPostId(id),
            fetchWpPosts()
        ]).then(([postData, commentsData, allData]) => {
            setArticle(postData || null);
            setComments(Array.isArray(commentsData) ? commentsData : []);
            setRecentPosts(Array.isArray(allData) ? allData.slice(0, 4) : []);
            setLoading(false);
        });
    }, [id]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement('script');
            script.src = "/js/index.bundle.js";
            script.id = "retnews-js-bundle";
            script.async = false;
            document.body.appendChild(script);
        }, 500);

        return () => {
            clearTimeout(timer);
            const existingScript = document.getElementById("retnews-js-bundle");
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, [id]);

    if (loading) {
        return (
            <div className="container text-center py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="spinner-border text-danger mb-3" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p className="text-muted font-italic">Loading your article...</p>
            </div>
        );
    }

    return (
        <div>
            <section className="pb-80 pt-4 min-vh-100">
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
                                    <a href="#" className="breadcrumbs__url">{article ? article.category : 'News'}</a>
                                </li>
                                <li className="breadcrumbs__item breadcrumbs__item--current">
                                    {article ? article.title : `Article Details (ID: ${id})`}
                                </li>
                            </ul>
                        </div>
                        
                        <div className="col-md-8">
                            {article ? (
                                <div className="wrap__article-detail">
                                    <div className="wrap__article-detail-title">
                                        <h1>{article.title}</h1>
                                    </div>
                                    <hr />
                                    <div className="wrap__article-detail-info">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <span>by</span> <a href="#">{article.author},</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="text-dark text-capitalize ml-1">{article.article_date}</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="text-dark text-capitalize">in</span> <a href="#">{article.category}</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="wrap__article-detail-image mt-4">
                                        <figure>
                                            <img src={article.image_url || "/images/placeholder/800x500.jpg"} alt={article.title} className="img-fluid w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                        </figure>
                                    </div>
                                    
                                    <div className="wrap__article-detail-content mt-4">
                                        <div dangerouslySetInnerHTML={{ __html: article.content || '<p>No content available.</p>' }} />
                                    </div>
                                </div>
                            ) : (
                                <div className="alert alert-warning">Article not found or could not be loaded.</div>
                            )}

                            {/* Author Section */}
                            <div className="wrap__profile mt-5">
                                <div className="wrap__profile-author">
                                    <figure>
                                        <img src="/images/placeholder/80x80.jpg" alt="" className="img-fluid rounded-circle" />
                                    </figure>
                                    <div className="wrap__profile-author-detail">
                                        <div className="wrap__profile-author-detail-name">Author</div>
                                        <h4>{article ? article.author : 'Editor'}</h4>
                                        <p>Posts published by {article ? article.author : 'Editor'} on GoaMonitor covering regional news, updates, and current events.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Dynamic Comments Section */}
                            <div id="comments" className="comments-area mt-5">
                                <h3 className="comments-title">{comments.length} Comment{comments.length !== 1 ? 's' : ''}:</h3>
                                <ol className="comment-list">
                                    {comments.length > 0 ? (
                                        comments.map((comment) => (
                                            <li className="comment" key={comment.id}>
                                                <aside className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={comment.avatarUrl} className="avatar rounded-circle" alt="avatar" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                                            <b className="fn ml-2">{comment.authorName}</b>
                                                        </div>
                                                        <div className="comment-metadata">
                                                            <a href="#"><span>{comment.date}</span></a>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content mt-2" dangerouslySetInnerHTML={{ __html: comment.content }}></div>
                                                </aside>
                                            </li>
                                        ))
                                    ) : (
                                        <p className="text-muted">No comments yet. Be the first to reply!</p>
                                    )}
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>
                                    <form className="comment-form" onSubmit={(e) => e.preventDefault()}>
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-comment">
                                            <label htmlFor="comment">Comment</label>
                                            <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required="required"></textarea>
                                        </p>
                                        <p className="comment-form-author">
                                            <label>Name <span className="required">*</span></label>
                                            <input type="text" id="author" name="name" required="required" />
                                        </p>
                                        <p className="comment-form-email">
                                            <label htmlFor="email">Email <span className="required">*</span></label>
                                            <input type="email" id="email" name="email" required="required" />
                                        </p>
                                        <p className="form-submit">
                                            <button type="submit" name="submit" id="submit" className="submit btn btn-primary">
                                                Submit Comment
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Reusable Sidebar Component */}
                        <div className="col-md-4">
                            <Sidebar recentPosts={recentPosts} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArticleDetail;