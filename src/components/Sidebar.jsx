import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar({ recentPosts = [] }) {
    const [sidebarSearch, setSidebarSearch] = useState('');
    const navigate = useNavigate();

    const handleSidebarSearchSubmit = (e) => {
        e.preventDefault();
        if (sidebarSearch.trim()) {
            navigate(`/search?q=${encodeURIComponent(sidebarSearch.trim())}`);
            setSidebarSearch('');
        }
    };

    // Exactly 8 tags (matching your Category page setup)
    const sampleTags = [
        "Live", "Events", "Podcasts", "Interviews",
        "Politics", "Business", "Sports", "Technology"
    ];

    return (
        <div className="sidebar-sticky" style={{ position: 'sticky', top: '20px', height: 'max-content', zIndex: 10 }}>
            {/* Search Widget Section */}
            <aside className="wrapper__list__article mb-4">
                <h4 className="border_section">Search</h4>
                <form onSubmit={handleSidebarSearchSubmit}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Search articles..." 
                            value={sidebarSearch}
                            onChange={(e) => setSidebarSearch(e.target.value)}
                            style={{ height: '42px', fontSize: '14px' }}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit" style={{ height: '42px' }}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </aside>

            {/* Recent Posts Section */}
            <aside className="wrapper__list__article">
                <h4 className="border_section">Recent Posts</h4>
                
                <div className="wrapper__list__article-small">
                    {recentPosts.length > 0 ? (
                        recentPosts.map((post) => (
                            <div className="mb-3" key={post.id}>
                                <div className="card__post card__post-list">
                                    <div className="image-sm">
                                        <Link to={`/article/${post.id}`}>
                                            <img 
                                                src={post.image_url} 
                                                className="img-fluid" 
                                                alt={post.title} 
                                                style={{ height: '85px', width: '100%', objectFit: 'cover' }} 
                                            />
                                        </Link>
                                    </div>
                                    <div className="card__post__body">
                                        <div className="card__post__content">
                                            <div className="card__post__author-info mb-1" style={{ fontSize: '11px' }}>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <span className="text-primary">by {post.author}</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="text-muted text-capitalize">{post.article_date}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card__post__title">
                                                <h6 style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                                    <Link to={`/article/${post.id}`} className="text-dark">
                                                        {post.title}
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-muted">No recent posts available.</p>
                    )}
                </div>
            </aside>

            {/* Tags Section with active Link routing */}
            <aside className="wrapper__list__article mt-4">
                <h4 className="border_section">Tags</h4>
                <div className="blog-tags p-0">
                    <ul className="list-inline">
                        {sampleTags.map((tag, index) => (
                            <li className="list-inline-item" key={index}>
                                <Link to={`/category/${tag.toLowerCase()}`}>
                                    #{tag}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;