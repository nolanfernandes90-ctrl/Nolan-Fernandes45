import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg__footer-dark text-white">
            <div className="container py-4">
                {/* 4 Category Columns brought close together in the center */}
                <div className="row justify-content-center text-left" style={{ margin: '0 auto', maxWidth: '1000px' }}>
                    {/* Column 1: News & Society */}
                    <div className="col-lg-3 col-md-3 col-6 mb-3 px-2">
                        <h6 className="text-uppercase mb-2 text-danger" style={{ fontSize: '14px', letterSpacing: '0.5px', fontWeight: 'bold' }}>News & Society</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: '13px', lineHeight: '1.9' }}>
                            <li><Link to="/category/politics" className="text-white">Politics</Link></li>
                            <li><Link to="/category/crime" className="text-white">Crime</Link></li>
                            <li><Link to="/category/development" className="text-white">Development</Link></li>
                            <li><Link to="/category/education" className="text-white">Education</Link></li>
                            <li><Link to="/category/environment" className="text-white">Environment</Link></li>
                            <li><Link to="/category/agriculture" className="text-white">Agriculture</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Business & Lifestyle */}
                    <div className="col-lg-3 col-md-3 col-6 mb-3 px-2">
                        <h6 className="text-uppercase mb-2 text-danger" style={{ fontSize: '14px', letterSpacing: '0.5px', fontWeight: 'bold' }}>Business & Lifestyle</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: '13px', lineHeight: '1.9' }}>
                            <li><Link to="/category/business" className="text-white">Business</Link></li>
                            <li><Link to="/category/economy" className="text-white">Economy</Link></li>
                            <li><Link to="/category/food" className="text-white">Food</Link></li>
                            <li><Link to="/category/health" className="text-white">Health</Link></li>
                            <li><Link to="/category/fashion+%26+style" className="text-white">Fashion & Style</Link></li>
                            <li><Link to="/category/arts+%26+culture" className="text-white">Arts & Culture</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Sports, Tech & Travel */}
                    <div className="col-lg-3 col-md-3 col-6 mb-3 px-2">
                        <h6 className="text-uppercase mb-2 text-danger" style={{ fontSize: '14px', letterSpacing: '0.5px', fontWeight: 'bold' }}>Sports, Tech & Travel</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: '13px', lineHeight: '1.9' }}>
                            <li><Link to="/category/sports" className="text-white">Sports</Link></li>
                            <li><Link to="/category/technology" className="text-white">Technology</Link></li>
                            <li><Link to="/category/tourism" className="text-white">Tourism</Link></li>
                            <li><Link to="/category/travel" className="text-white">Travel</Link></li>
                            <li><Link to="/category/science" className="text-white">Science</Link></li>
                            <li><Link to="/category/entertainment" className="text-white">Entertainment</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Navigation */}
                    <div className="col-lg-3 col-md-3 col-6 mb-3 px-2">
                        <h6 className="text-uppercase mb-2 text-danger" style={{ fontSize: '14px', letterSpacing: '0.5px', fontWeight: 'bold' }}>Quick Navigation</h6>
                        <ul className="list-unstyled mb-0" style={{ fontSize: '13px', lineHeight: '1.9' }}>
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/about" className="text-white">About Us</Link></li>
                            <li><Link to="/contact" className="text-white">Contact Us</Link></li>
                            <li><Link to="/login" className="text-white">Login</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Middle Row: Logo Image on Left, Linkable Social Icons on Right */}
                <div className="row align-items-center py-2 mt-3">
                    <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <Link to="/">
                            <img src="/images/logo/gmonitor-logo.png" alt="GoaMonitor Logo" className="img-fluid" style={{ maxHeight: '45px' }} />
                        </Link>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item mx-1">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-social rounded text-white facebook" aria-label="Facebook">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-1">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-social rounded text-white twitter" aria-label="Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-1">
                                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="btn btn-social rounded text-white whatsapp" aria-label="WhatsApp">
                                    <i className="fa fa-whatsapp"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-1">
                                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="btn btn-social rounded text-white telegram" aria-label="Telegram">
                                    <i className="fa fa-telegram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item mx-1">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-social rounded text-white linkedin" aria-label="LinkedIn">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-line border-top-1 my-2" style={{ borderColor: '#2e2f3c' }}></div>

                {/* Bottom Row: Left-aligned Copyright */}
                <div className="row align-items-center pt-2">
                    <div className="col-md-12 text-center text-md-left">
                        <span style={{ fontSize: '12px', color: '#aaa' }}>Copyright © 2026 GoaMonitor. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;