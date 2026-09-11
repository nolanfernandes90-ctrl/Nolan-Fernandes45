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
        height: 'fit-content',
        zIndex: 10,
        alignSelf: 'flex-start'
    }}
>

            {/* ================= SEARCH ================= */}
            <aside className="wrapper__list__article mb-4">
                <h4 className="border_section">Search</h4>

                <form onSubmit={handleSidebarSearchSubmit}>
                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search articles..."
                            value={sidebarSearch}
                            onChange={(e) =>
                                setSidebarSearch(e.target.value)
                            }
                            style={{
                                height: '42px',
                                fontSize: '14px'
                            }}
                        />

                        <div className="input-group-append">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                style={{ height: '42px' }}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>

                    </div>
                </form>
            </aside>


            {/* ================= RECENT POSTS ================= */}
            <aside className="wrapper__list__article">

                <h4 className="border_section">
                    Recent Posts
                </h4>

                <div className="wrapper__list__article-small">

                    {recentPosts.length > 0 ? (

                        recentPosts.map((post) => (

                            <div
                                className="mb-3"
                                key={post.id}
                            >

                                <div className="card__post card__post-list">

                                    <div className="image-sm">

                                        <Link to={`/article/${post.id}`}>

                                            <img
                                                src={post.image_url}
                                                className="img-fluid"
                                                alt={post.title}
                                                style={{
                                                    height: '85px',
                                                    width: '100%',
                                                    objectFit: 'cover'
                                                }}
                                            />

                                        </Link>

                                    </div>


                                    <div className="card__post__body">

                                        <div className="card__post__content">

                                            <div
                                                className="card__post__author-info mb-1"
                                                style={{ fontSize: '11px' }}
                                            >

                                                <ul className="list-inline mb-0">

                                                    <li className="list-inline-item">
                                                        <span className="text-primary">
                                                            by {post.author}
                                                        </span>
                                                    </li>

                                                    <li className="list-inline-item">
                                                        <span className="text-muted">
                                                            {post.article_date}
                                                        </span>
                                                    </li>

                                                </ul>

                                            </div>


                                            <div className="card__post__title">

                                                <h6
                                                    style={{
                                                        fontSize: '14px',
                                                        lineHeight: '1.4'
                                                    }}
                                                >

                                                    <Link
                                                        to={`/article/${post.id}`}
                                                        className="text-dark"
                                                    >
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

                        <p className="text-muted">
                            No recent posts available.
                        </p>

                    )}

                </div>

            </aside>


            {/* ================= TAGS ================= */}
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
    style={{
        marginTop: '30px',
        marginBottom: '30px'
    }}
>
    {/* TITLE */}
    <h4
        style={{
            fontFamily: 'Georgia, serif',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '12px'
        }}
    >
        Stay Connected
    </h4>

    {/* RED UNDERLINE */}
    <div
        style={{
            height: '5px',
            background: '#eeeeee',
            marginBottom: '22px',
            position: 'relative'
        }}
    >
        <div
            style={{
                width: '60px',
                height: '5px',
                background: '#e31b23'
            }}
        />
    </div>


    {/* INSTAGRAM */}
    <a
        href="https://www.instagram.com/thegoamonitor/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '54px',
            marginBottom: '12px',
            background: '#c13584',
            color: '#ffffff',
            textDecoration: 'none'
        }}
    >
        <div
            style={{
                width: '48px',
                height: '54px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                borderRight: '1px solid rgba(255,255,255,0.25)'
            }}
        >
            <i className="fa fa-instagram"></i>
        </div>

        <div
            style={{
                flex: 1,
                paddingLeft: '14px',
                fontSize: '15px',
                fontWeight: '700'
            }}
        >
            <strong>743</strong> Shares
        </div>

        <div
            style={{
                padding: '0 14px',
                fontSize: '15px',
                fontWeight: '700',
                borderLeft: '1px solid rgba(255,255,255,0.25)'
            }}
        >
            Share
        </div>
    </a>


    {/* FACEBOOK */}
    <a
        href="https://www.facebook.com/thegoamonitor"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '54px',
            marginBottom: '12px',
            background: '#4267a9',
            color: '#ffffff',
            textDecoration: 'none'
        }}
    >
        <div
            style={{
                width: '48px',
                height: '54px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                borderRight: '1px solid rgba(255,255,255,0.25)'
            }}
        >
            <i className="fa fa-facebook"></i>
        </div>

        <div
            style={{
                flex: 1,
                paddingLeft: '14px',
                fontSize: '15px',
                fontWeight: '700'
            }}
        >
            <strong>682</strong> Shares
        </div>

        <div
            style={{
                padding: '0 14px',
                fontSize: '15px',
                fontWeight: '700',
                borderLeft: '1px solid rgba(255,255,255,0.25)'
            }}
        >
            Share
        </div>
    </a>


    {/* X */}
    <a
        href="https://x.com/thegoamonitor"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '54px',
            marginBottom: '12px',
            background: '#222222',
            color: '#ffffff',
            textDecoration: 'none'
        }}
    >
        <div
            style={{
                width: '48px',
                height: '54px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                borderRight: '1px solid rgba(255,255,255,0.25)'
            }}
        >
            𝕏
        </div>

        <div
            style={{
                flex: 1,
                paddingLeft: '14px',
                fontSize: '15px',
                fontWeight: '700'
            }}
        >
            <strong>391</strong> Shares
        </div>

        <div
            style={{
                padding: '0 14px',
                fontSize: '15px',
                fontWeight: '700',
                borderLeft: '1px solid rgba(255,255,255,0.25)'
            }}
        >
            Share
        </div>
    </a>

</aside>


            {/* =================================================
                NEWSLETTER
            ================================================= */}
            <aside className="newsletter-widget">

                <h4 className="border_section">
                    Newsletter
                </h4>

                <div className="newsletter-box">

                    <h3>
                        The most important world news and events of the day.
                    </h3>

                    <p>
                        Get GoaMonitor daily newsletter on your inbox.
                    </p>

                    <form
                        className="newsletter-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const email = e.target.email.value.trim();

                            if (email) {
                                alert("Thank you for subscribing!");
                                e.target.reset();
                            }
                        }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            required
                        />

                        <button type="submit">
                            SIGN UP
                        </button>
                    </form>

                </div>

            </aside>

        </div>
    );
}

export default Sidebar;