import { Link } from 'react-router-dom';

function PopularSidebar({ sidebarListArticles = [] }) {
    return (
        <div className="sidebar-sticky" style={{ position: 'sticky', top: '20px', height: 'max-content', zIndex: 10 }}>
            <aside className="wrapper__list__article">
                <h4 className="border_section">Popular Post</h4>
                <div className="wrapper__list-number">
                    {sidebarListArticles.map((article, index) => (
                        <div className="card__post__list" key={`sidebar-${article.id}`}>
                            <div className="list-number"><span>{index + 1}</span></div>
                            <Link to={`/category/${encodeURIComponent(article.category.toLowerCase())}`} className="category text-uppercase">
                                {article.category}
                            </Link>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <h5><Link to={`/article/${article.id}`}>{article.title}</Link></h5>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}

export default PopularSidebar;
