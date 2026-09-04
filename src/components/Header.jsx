import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchQuery, setMobileSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        setCurrentDate(
            new Date().toLocaleDateString('en-US', options)
        );
    }, []);

    const primaryCategories = [
        "Politics",
        "Crime",
        "Development",
        "Business",
        "Economy",
        "Food",
        "Health",
        "Arts & Culture",
        "Education",
        "Environment",
        "Agriculture",
        "Fashion & Style",
        "Sports",
        "Technology",
        "Tourism",
        "Travel"
    ];

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if (searchQuery.trim()) {
            navigate(
                `/search?q=${encodeURIComponent(searchQuery.trim())}`
            );
            setSearchOpen(false);
        }
    };

    const handleMobileSearchSubmit = (e) => {
        e.preventDefault();

        if (mobileSearchQuery.trim()) {
            setIsMenuOpen(false);

            navigate(
                `/search?q=${encodeURIComponent(mobileSearchQuery.trim())}`
            );
        }
    };

    return (
        <header
            style={{
                background: '#fff',
                width: '100%',
                position: 'relative',
                zIndex: 1000
            }}
        >

            {/* =====================================================
                TOP BLACK BAR
            ====================================================== */}

            <div
                style={{
                    background: '#050505',
                    color: '#fff',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: '1380px',
                        margin: '0 auto',
                        padding: '0 28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '12px'
                    }}
                >

                    {/* Date */}

                    <div
                        style={{
                            fontFamily: 'Georgia, serif',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {currentDate}
                    </div>


                    {/* Center Links */}

                    <div
                        className="desktop-top-links"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '22px',
                            fontFamily: 'Georgia, serif',
                            textTransform: 'uppercase',
                            letterSpacing: '0.4px'
                        }}
                    >
                        <Link
                            to="/category/live"
                            style={topLinkStyle}
                        >
                            Live
                        </Link>

                        <span style={separatorStyle}>|</span>

                        <Link
                            to="/category/events"
                            style={topLinkStyle}
                        >
                            Events
                        </Link>

                        <span style={separatorStyle}>|</span>

                        <Link
                            to="/category/podcasts"
                            style={topLinkStyle}
                        >
                            Podcasts
                        </Link>

                        <span style={separatorStyle}>|</span>

                        <Link
                            to="/category/interviews"
                            style={topLinkStyle}
                        >
                            Interviews
                        </Link>
                    </div>


                    {/* Social Media */}

                    <div
                        className="desktop-social-links"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '17px'
                        }}
                    >
                        <a
                            href="https://www.facebook.com/thegoamonitor"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={socialStyle}
                        >
                            f
                        </a>

                        <a
                            href="https://x.com/thegoamonitor"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={socialStyle}
                        >
                            𝕏
                        </a>

                       <a
    href="https://www.instagram.com/thegoamonitor?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    style={socialStyle}
    aria-label="Instagram"
>
    <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
        />
        <circle
            cx="17.5"
            cy="6.5"
            r="1.2"
            fill="currentColor"
        />
    </svg>
</a>
                    </div>

                </div>
            </div>


            {/* =====================================================
                MAIN NAVBAR
            ====================================================== */}

            <div
                style={{
                    background: '#fff',
                    borderBottom: '1px solid #e8e8e8',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
                }}
            >

                <div
                    style={{
                        width: '100%',
                        maxWidth: '1380px',
                        margin: '0 auto',
                        padding: '0 28px'
                    }}
                >

                    <div
                        className="main-navbar"
                        style={{
                            minHeight: '96px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '30px'
                        }}
                    >

                        {/* =================================================
                            LOGO
                        ================================================== */}

                        <Link
                            to="/"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexShrink: 0,
                                textDecoration: 'none'
                            }}
                        >
                            <img
                                src="/images/logo/gmonitor-logo.png"
                                alt="The Goa Monitor"
                                style={{
                                    width: '185px',
                                    height: 'auto',
                                    display: 'block'
                                }}
                            />
                        </Link>


                        {/* =================================================
                            DESKTOP NAVIGATION
                        ================================================== */}

                        <nav
                            className="desktop-navigation"
    style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        columnGap: '4px',
        rowGap: '2px',
        maxWidth: '100%',
    }}
>
    {primaryCategories.map((category) => (
        <Link
            key={category}
            to={`/category/${encodeURIComponent(
                category.toLowerCase()
            )}`}
            className="category-link"
            style={{
                color: '#111',
                textDecoration: 'none',
                fontFamily: 'Arial, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                padding: '8px 6px',
                letterSpacing: '0.1px',
                transition: 'all 0.2s ease'
            }}
        >
            {category}
        </Link>
    ))}
                        </nav>


                        {/* =================================================
                            SEARCH
                        ================================================== */}

                        <button
                            onClick={() => {
                                setSearchOpen(!searchOpen);
                                if (searchOpen) {
                                    setSearchQuery('');
                                }
                            }}
                            aria-label="Search"
                            style={{
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}
                        >
                            {searchOpen ? (
                                <span
                                    style={{
                                        fontSize: '25px',
                                        lineHeight: 1,
                                        color: '#111'
                                    }}
                                >
                                    ×
                                </span>
                            ) : (
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <line
                                        x1="16.5"
                                        y1="16.5"
                                        x2="22"
                                        y2="22"
                                    />
                                </svg>
                            )}
                        </button>


                        {/* =================================================
                            MOBILE MENU BUTTON
                        ================================================== */}

                        <button
                            className="mobile-menu-button"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                            style={{
                                display: 'none',
                                border: '1px solid #ddd',
                                background: '#fff',
                                width: '42px',
                                height: '42px',
                                cursor: 'pointer',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                gap: '5px'
                            }}
                        >
                            <span
                                style={{
                                    width: '19px',
                                    height: '2px',
                                    background: '#111'
                                }}
                            />

                            <span
                                style={{
                                    width: '19px',
                                    height: '2px',
                                    background: '#111'
                                }}
                            />

                            <span
                                style={{
                                    width: '19px',
                                    height: '2px',
                                    background: '#111'
                                }}
                            />
                        </button>

                    </div>

                </div>
            </div>


            {/* =====================================================
                SEARCH PANEL
            ====================================================== */}

            <div
                style={{
                    maxHeight: searchOpen ? '100px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                    borderBottom: searchOpen
                        ? '1px solid #e5e5e5'
                        : 'none',
                    background: '#fff'
                }}
            >

                <div
                    style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        padding: searchOpen
                            ? '20px 25px'
                            : '0 25px'
                    }}
                >

                    <form
                        onSubmit={handleSearchSubmit}
                        style={{
                            display: 'flex',
                            width: '100%'
                        }}
                    >

                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            autoFocus={searchOpen}
                            style={{
                                flex: 1,
                                height: '46px',
                                border: '1px solid #ddd',
                                borderRight: 'none',
                                padding: '0 15px',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />

                        <button
                            type="submit"
                            style={{
                                width: '55px',
                                border: '1px solid #111',
                                background: '#111',
                                color: '#fff',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            >
                                <circle cx="11" cy="11" r="7" />
                                <line
                                    x1="16.5"
                                    y1="16.5"
                                    x2="22"
                                    y2="22"
                                />
                            </svg>
                        </button>

                    </form>

                </div>

            </div>


            {/* =====================================================
                MOBILE MENU
            ====================================================== */}

            {isMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.45)',
                        zIndex: 9999
                    }}
                    onClick={() => setIsMenuOpen(false)}
                >

                    <div
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: 0,
                            height: '100%',
                            width: '330px',
                            maxWidth: '90%',
                            background: '#fff',
                            overflowY: 'auto',
                            boxShadow: '-5px 0 20px rgba(0,0,0,0.15)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Mobile Header */}

                        <div
                            style={{
                                padding: '20px',
                                borderBottom: '1px solid #eee',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >

                            <img
                                src="/images/logo/gmonitor-logo.png"
                                alt="The Goa Monitor"
                                style={{
                                    width: '145px'
                                }}
                            />

                            <button
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    border: 'none',
                                    background: 'transparent',
                                    fontSize: '28px',
                                    cursor: 'pointer',
                                    lineHeight: 1
                                }}
                            >
                                ×
                            </button>

                        </div>


                        {/* Mobile Search */}

                        <div style={{ padding: '20px' }}>

                            <form
                                onSubmit={handleMobileSearchSubmit}
                                style={{
                                    display: 'flex'
                                }}
                            >

                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={mobileSearchQuery}
                                    onChange={(e) =>
                                        setMobileSearchQuery(e.target.value)
                                    }
                                    style={{
                                        flex: 1,
                                        height: '42px',
                                        border: '1px solid #ddd',
                                        padding: '0 12px',
                                        outline: 'none'
                                    }}
                                />

                                <button
                                    type="submit"
                                    style={{
                                        width: '45px',
                                        border: 'none',
                                        background: '#111',
                                        color: '#fff'
                                    }}
                                >
                                    🔍
                                </button>

                            </form>

                        </div>


                        {/* Quick Links */}

                        <div style={{ padding: '0 20px 20px' }}>

                            <div
                                style={{
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: '#999',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '10px'
                                }}
                            >
                                Quick Links
                            </div>

                            {[
                                'Live',
                                'Events',
                                'Podcasts',
                                'Interviews'
                            ].map((item) => (
                                <Link
                                    key={item}
                                    to={`/category/${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={mobileLinkStyle}
                                >
                                    {item}
                                </Link>
                            ))}

                        </div>


                        {/* Categories */}

                        <div style={{ padding: '0 20px 30px' }}>

                            <div
                                style={{
                                    fontSize: '11px',
                                    fontWeight: '700',
                                    color: '#999',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '10px'
                                }}
                            >
                                Categories
                            </div>

                            {primaryCategories.map((category) => (
                                <Link
                                    key={category}
                                    to={`/category/${encodeURIComponent(
                                        category.toLowerCase()
                                    )}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={mobileLinkStyle}
                                >
                                    {category}
                                </Link>
                            ))}

                        </div>

                    </div>

                </div>
            )}


            {/* =====================================================
                RESPONSIVE CSS
            ====================================================== */}

            <style>{`

                .category-link:hover {
                    color: #e21b23 !important;
                }

                @media (max-width: 1250px) {

                    .category-link {
                        font-size: 10px !important;
                        padding-left: 5px !important;
                        padding-right: 5px !important;
                    }

                    .main-navbar {
                        gap: 15px !important;
                    }

                }

                @media (max-width: 1050px) {

                    .desktop-navigation {
                        display: none !important;
                    }

                    .desktop-top-links,
                    .desktop-social-links {
                        display: none !important;
                    }

                    .mobile-menu-button {
                        display: flex !important;
                    }

                    .main-navbar {
                        min-height: 76px !important;
                    }

                }

                @media (max-width: 600px) {

                    .main-navbar {
                        padding: 0 !important;
                    }

                }

            `}</style>

        </header>
    );
}


/* ============================================================
   SMALL STYLE OBJECTS
============================================================ */

const topLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '600'
};

const separatorStyle = {
    color: '#555'
};

const socialStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '700',
    width: '16px',
    height: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1'
};

const mobileLinkStyle = {
    display: 'block',
    color: '#111',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    padding: '10px 0',
    borderBottom: '1px solid #f1f1f1'
};

export default Header;