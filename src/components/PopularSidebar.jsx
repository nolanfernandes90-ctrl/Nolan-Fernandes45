import { Link } from 'react-router-dom';

function PopularSidebar({ sidebarListArticles = [] }) {

    const sampleTags = [
        "Live",
        "Events",
        "Podcasts",
        "Interviews",
        "Politics",
        "Business",
        "Sports",
        "Technology"
    ];

    return (
        <div
            className="sidebar-sticky"
            style={{
                position: 'sticky',
                top: '20px',
                height: 'max-content',
                zIndex: 10
            }}
        >

            {/* =================================================
                POPULAR POSTS
            ================================================= */}

            <aside className="wrapper__list__article">

                <h4 className="border_section">
                    Popular Post
                </h4>

                <div className="wrapper__list-number">

                    {sidebarListArticles.map((article, index) => (

                        <div
                            className="card__post__list"
                            key={`sidebar-${article.id}`}
                        >

                            <div className="list-number">
                                <span>{index + 1}</span>
                            </div>

                            <Link
                                to={`/category/${encodeURIComponent(
                                    article.category.toLowerCase()
                                )}`}
                                className="category text-uppercase"
                            >
                                {article.category}
                            </Link>

                            <ul className="list-inline">

                                <li className="list-inline-item">

                                    <h5>
                                        <Link
                                            to={`/article/${article.id}`}
                                        >
                                            {article.title}
                                        </Link>
                                    </h5>

                                </li>

                            </ul>

                        </div>

                    ))}

                </div>

            </aside>


            {/* =================================================
                TAGS
            ================================================= */}

            <aside className="wrapper__list__article mt-4">

                <h4 className="border_section">
                    Tags
                </h4>

                <div className="blog-tags p-0">

                    <ul className="list-inline">

                        {sampleTags.map((tag, index) => (

                            <li
                                className="list-inline-item"
                                key={index}
                            >

                                <Link
                                    to={`/category/${tag.toLowerCase()}`}
                                >
                                    #{tag}
                                </Link>

                            </li>

                        ))}

                    </ul>

                </div>

            </aside>


            {/* =================================================
                STAY CONNECTED
            ================================================= */}

            <aside
                className="wrapper__list__article"
                style={{
                    marginTop: '30px'
                }}
            >

                <h4 className="border_section">
                    Stay Connected
                </h4>


                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        marginTop: '20px'
                    }}
                >

                    {/* FACEBOOK */}

                    <a
                        href="https://www.facebook.com/thegoamonitor"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '54px',
                            width: '100%',
                            background: '#4267A9',
                            color: '#fff',
                            textDecoration: 'none'
                        }}
                    >

                        <div
                            style={{
                                width: '50px',
                                height: '54px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRight: '1px solid rgba(255,255,255,0.25)',
                                fontSize: '22px'
                            }}
                        >
                            <i className="fa fa-facebook"></i>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                paddingLeft: '14px',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            <strong>Facebook</strong>
                            <br />
                            <span
                                style={{
                                    fontSize: '11px',
                                    opacity: 0.85
                                }}
                            >
                                Follow The Goa Monitor
                            </span>
                        </div>

                        <div
                            style={{
                                padding: '0 14px',
                                fontSize: '13px',
                                fontWeight: '700',
                                borderLeft: '1px solid rgba(255,255,255,0.25)'
                            }}
                        >
                            Follow
                        </div>

                    </a>


                    {/* X / TWITTER */}

                    <a
                        href="https://x.com/thegoamonitor"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '54px',
                            width: '100%',
                            background: '#111',
                            color: '#fff',
                            textDecoration: 'none'
                        }}
                    >

                        <div
                            style={{
                                width: '50px',
                                height: '54px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRight: '1px solid rgba(255,255,255,0.25)',
                                fontSize: '20px',
                                fontWeight: '700'
                            }}
                        >
                            𝕏
                        </div>

                        <div
                            style={{
                                flex: 1,
                                paddingLeft: '14px',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            <strong>Twitter / X</strong>
                            <br />
                            <span
                                style={{
                                    fontSize: '11px',
                                    opacity: 0.7
                                }}
                            >
                                Follow The Goa Monitor
                            </span>
                        </div>

                        <div
                            style={{
                                padding: '0 14px',
                                fontSize: '13px',
                                fontWeight: '700',
                                borderLeft: '1px solid rgba(255,255,255,0.25)'
                            }}
                        >
                            Follow
                        </div>

                    </a>


                    {/* INSTAGRAM */}

                    <a
                        href="https://www.instagram.com/thegoamonitor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '54px',
                            width: '100%',
                            background: '#C13584',
                            color: '#fff',
                            textDecoration: 'none'
                        }}
                    >

                        <div
                            style={{
                                width: '50px',
                                height: '54px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRight: '1px solid rgba(255,255,255,0.25)',
                                fontSize: '21px'
                            }}
                        >
                            <i className="fa fa-instagram"></i>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                paddingLeft: '14px',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            <strong>Instagram</strong>
                            <br />
                            <span
                                style={{
                                    fontSize: '11px',
                                    opacity: 0.85
                                }}
                            >
                                Follow The Goa Monitor
                            </span>
                        </div>

                        <div
                            style={{
                                padding: '0 14px',
                                fontSize: '13px',
                                fontWeight: '700',
                                borderLeft: '1px solid rgba(255,255,255,0.25)'
                            }}
                        >
                            Follow
                        </div>

                    </a>


                    {/* YOUTUBE */}

                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '54px',
                            width: '100%',
                            background: '#FF0000',
                            color: '#fff',
                            textDecoration: 'none'
                        }}
                    >

                        <div
                            style={{
                                width: '50px',
                                height: '54px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRight: '1px solid rgba(255,255,255,0.25)',
                                fontSize: '21px'
                            }}
                        >
                            <i className="fa fa-youtube"></i>
                        </div>

                        <div
                            style={{
                                flex: 1,
                                paddingLeft: '14px',
                                fontSize: '14px',
                                fontWeight: '600'
                            }}
                        >
                            <strong>YouTube</strong>
                            <br />
                            <span
                                style={{
                                    fontSize: '11px',
                                    opacity: 0.85
                                }}
                            >
                                Subscribe to our channel
                            </span>
                        </div>

                        <div
                            style={{
                                padding: '0 14px',
                                fontSize: '13px',
                                fontWeight: '700',
                                borderLeft: '1px solid rgba(255,255,255,0.25)'
                            }}
                        >
                            Subscribe
                        </div>

                    </a>

                </div>

            </aside>

            {/* =================================================
    NEWSLETTER
================================================= */}
<aside
    className="wrapper__list__article"
    style={{
        marginTop: '30px',
        marginBottom: '30px'
    }}
>

    <h4 className="border_section">
        Newsletter
    </h4>

    <div
        style={{
            background: '#ffffff',
            padding: '25px',
            marginTop: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
        }}
    >

        <h3
            style={{
                fontSize: '21px',
                lineHeight: '1.3',
                fontWeight: '700',
                color: '#111',
                marginBottom: '12px'
            }}
        >
            The most important world news and events of the day.
        </h3>

        <p
            style={{
                fontSize: '15px',
                lineHeight: '1.5',
                color: '#555',
                marginBottom: '20px'
            }}
        >
            Get GoaMonitor daily newsletter on your inbox.
        </p>

        <form
            onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
            }}
        >

            <input
                type="email"
                placeholder="Your email address"
                required
                style={{
                    width: '100%',
                    height: '50px',
                    padding: '0 14px',
                    border: '1px solid #ddd',
                    marginBottom: '10px',
                    fontSize: '14px',
                    outline: 'none'
                }}
            />

            <button
                type="submit"
                style={{
                    width: '100%',
                    height: '50px',
                    border: 'none',
                    background: '#e00000',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}
            >
                SIGN UP
            </button>

        </form>

    </div>

</aside>

        </div>
    );
}

export default PopularSidebar;