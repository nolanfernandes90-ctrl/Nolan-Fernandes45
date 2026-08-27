import { Link } from 'react-router-dom';

function HomeFeed({ articles = [], categoryGroups = [] }) {
    return (
        <div>
            {categoryGroups.map((group, groupIndex) => {
                const groupArticles = articles.filter(article => article.groupCategory === group.name);
                if (groupArticles.length === 0) return null;

                return (
                    <div className="wrapper__list__article mb-4" key={groupIndex}>
                        <h4 className="border_section">{group.name}</h4>
                        <div className="row">
                            {groupArticles.slice(0, 4).map((article) => (
                                <div className="col-md-6 mb-3" key={article.id}>
                                    <div className="card__post card__post-list">
                                        <div className="image-sm">
                                            <Link to={`/article/${article.id}`}>
                                                <img src={article.image_url} className="img-fluid" alt={article.title} style={{ height: '90px', objectFit: 'cover' }} />
                                            </Link>
                                        </div>
                                        <div className="card__post__body">
                                            <div className="card__post__content">
                                                <div className="card__post__author-info mb-1">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><span className="text-primary" style={{ fontSize: '12px' }}>by {article.author}</span></li>
                                                    </ul>
                                                </div>
                                                <div className="card__post__title">
                                                    <h6><Link to={`/article/${article.id}`} className="text-dark" style={{ fontSize: '14px', lineHeight: '1.3' }}>{article.title}</Link></h6>
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