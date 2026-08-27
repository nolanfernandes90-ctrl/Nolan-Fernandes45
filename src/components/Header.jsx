import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileSearchQuery, setMobileSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState('');
    const navigate = useNavigate();

    // Generate live formatted date on component mount
    useEffect(() => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('en-US', options);
        setCurrentDate(today);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleMobileSearchSubmit = (e) => {
        e.preventDefault();
        if (mobileSearchQuery.trim()) {
            setIsMenuOpen(false);
            navigate(`/search?q=${encodeURIComponent(mobileSearchQuery)}`);
        }
    };

    const primaryCategories = [
        "Politics", "Crime", "Development", "Business", "Economy", 
        "Food", "Health", "Arts & Culture", "Education", "Environment", 
        "Agriculture", "Fashion & Style", "Sports", "Technology", "Tourism", "Travel"
    ];

    return (
        <header className="bg-light">
            {/* Topbar: Date on Left, Nav Elements in Center, Socials on Right */}
            <div className="topbar d-none d-lg-block py-3 text-white" style={{ backgroundColor: '#000', fontSize: '12px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Live Current Date (Left) */}
                        <div className="col-md-3">
                            <span className="text-white">{currentDate}</span>
                        </div>

                        {/* Centered Navigation Elements linked to categories */}
                        <div className="col-md-6 text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item mx-2"><Link to={`/category/live`} className="text-white text-uppercase font-weight-bold">Live</Link></li>
                                <li className="list-inline-item mx-2"><span className="text-muted">|</span></li>
                                <li className="list-inline-item mx-2"><Link to={`/category/events`} className="text-white text-uppercase font-weight-bold">Events</Link></li>
                                <li className="list-inline-item mx-2"><span className="text-muted">|</span></li>
                                <li className="list-inline-item mx-2"><Link to={`/category/podcasts`} className="text-white text-uppercase font-weight-bold">Podcasts</Link></li>
                                <li className="list-inline-item mx-2"><span className="text-muted">|</span></li>
                                <li className="list-inline-item mx-2"><Link to={`/category/interviews`} className="text-white text-uppercase font-weight-bold">Interviews</Link></li>
                            </ul>
                        </div>

                        {/* Social Media Links (Right) - Updated to open in new tab */}
                        <div className="col-md-3 text-right">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item ml-3"><a href="https://www.facebook.com/thegoamonitor" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item ml-3"><a href="https://x.com/thegoamonitor" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item ml-3"><a href="https://www.instagram.com/thegoamonitor/" target="_blank" rel="noopener noreferrer" className="text-white"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navbar & Centered Logo Section */}
            <div className="navigation-wrap navigation-shadow bg-white py-3">
                <div className="container text-center">
                    {/* Centered Logo */}
                    <div className="mb-3">
                        <Link to="/">
                            <img src="/images/logo/gmonitor-logo.png" alt="Logo" className="img-fluid logo" style={{ maxHeight: '55px' }} />
                        </Link>
                    </div>

                    <nav className="navbar navbar-hover navbar-expand-lg navbar-soft justify-content-center pt-0 pb-0">
                        <div className="container d-flex justify-content-between align-items-center px-0">
                            {/* Mobile Hamburger Toggle */}
                            <div 
                                onClick={() => setIsMenuOpen(true)}
                                className="d-lg-none d-flex align-items-center justify-content-center mr-3" 
                                style={{ 
                                    cursor: 'pointer', 
                                    border: '1px solid #dcdcdc', 
                                    width: '40px', 
                                    height: '40px', 
                                    backgroundColor: '#fff' 
                                }}
                            >
                                <span className="navbar-toggler-icon" style={{ backgroundImage: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fa fa-bars" style={{ fontSize: '18px', color: '#555' }}></i>
                                </span>
                            </div>

                            {/* Centered Categories Menu */}
                            <div className="collapse navbar-collapse justify-content-center" id="main_nav99">
                                <ul className="navbar-nav flex-wrap justify-content-center" style={{ fontSize: '11px' }}>
                                    {primaryCategories.map((category, index) => (
                                        <li className="nav-item px-1 py-1" key={index}>
                                            <Link 
                                                to={`/category/${encodeURIComponent(category.toLowerCase())}`} 
                                                className="nav-link text-uppercase font-weight-bold text-dark px-1 py-0"
                                                style={{ transition: 'color 0.2s' }}
                                                onMouseEnter={(e) => e.target.style.color = '#c00'}
                                                onMouseLeave={(e) => e.target.style.color = '#343a40'}
                                            >
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Search toggle button */}
                            <ul className="navbar-nav align-items-center ml-auto">
                                <li className="nav-item search hidden-xs hidden-sm">
                                    <a 
                                        className="nav-link" 
                                        href="#" 
                                        onClick={(e) => { 
                                            e.preventDefault(); 
                                            setSearchOpen(!searchOpen); 
                                            if (searchOpen) setSearchQuery(''); 
                                        }}
                                    >
                                        <i className={searchOpen ? "fa fa-times" : "fa fa-search"}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Modal Sidebar */}
            <div 
                id="modal_aside_right" 
                className={`modal fixed-left fade ${isMenuOpen ? 'show' : ''}`} 
                tabIndex="-1" 
                role="dialog" 
                style={{ display: isMenuOpen ? 'block' : 'none', backgroundColor: isMenuOpen ? 'rgba(0,0,0,0.5)' : 'transparent' }}
            >
                <div className="modal-dialog modal-dialog-aside" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="widget__form-search-bar w-100">
                                <form onSubmit={handleMobileSearchSubmit}>
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <input 
                                                className="form-control border-secondary border-right-0 rounded-0" 
                                                type="text"
                                                placeholder="Search" 
                                                value={mobileSearchQuery}
                                                onChange={(e) => setMobileSearchQuery(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <button type="button" className="close" onClick={() => setIsMenuOpen(false)} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <nav className="list-group list-group-flush">
                                <ul className="navbar-nav">
                                    <li className="nav-item text-muted font-weight-bold mb-2" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Quick Links</li>
                                    <li className="nav-item"><Link className="nav-link text-dark py-1" to="/category/live" onClick={() => setIsMenuOpen(false)}>Live</Link></li>
                                    <li className="nav-item"><Link className="nav-link text-dark py-1" to="/category/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                                    <li className="nav-item"><Link className="nav-link text-dark py-1" to="/category/podcasts" onClick={() => setIsMenuOpen(false)}>Podcasts</Link></li>
                                    <li className="nav-item"><Link className="nav-link text-dark py-1" to="/category/interviews" onClick={() => setIsMenuOpen(false)}>Interviews</Link></li>
                                    <hr />
                                    <li className="nav-item text-muted font-weight-bold mb-2" style={{ fontSize: '11px', textTransform: 'uppercase' }}>Categories</li>
                                    {primaryCategories.map((cat, idx) => (
                                        <li key={idx} className="nav-item">
                                            <Link className="nav-link text-dark py-1" to={`/category/${encodeURIComponent(cat.toLowerCase())}`} onClick={() => setIsMenuOpen(false)}>
                                                {cat}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="modal-footer">
                            <p>© 2026 GoaMonitor. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smooth Slide-Down Search Panel */}
            <div 
                style={{
                    maxHeight: searchOpen ? '120px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease-in-out, padding 0.4s ease-in-out',
                    backgroundColor: '#fff',
                    borderBottom: searchOpen ? '1px solid #eaeaea' : 'none',
                    padding: searchOpen ? '25px 0' : '0 0'
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <form onSubmit={handleSearchSubmit}>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        placeholder="Search articles..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="form-control form-control-lg border-right-0"
                                        autoFocus={searchOpen}
                                        style={{ height: '50px' }}
                                    />
                                    <div className="input-group-append">
                                        <button 
                                            type="submit" 
                                            className="input-group-text bg-white border-left-0" 
                                            style={{ cursor: 'pointer', border: '1px solid #ced4da', height: '50px' }}
                                        >
                                            <i className="fa fa-search text-muted"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;