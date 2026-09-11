import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo.png';

function Footer() {
    return (
        <footer className="gm-footer">

            {/* =========================
                MAIN FOOTER
            ========================== */}
            <div className="gm-footer-container">

                <div className="gm-footer-grid">

                    {/* =========================
                        BRAND
                    ========================== */}
                    <div className="gm-footer-brand">

                        <Link to="/" className="gm-footer-logo">
                            <img
                                src={logoWhite}
                                alt="GoaMonitor Logo"
                            />
                        </Link>

                        <p>
                            Independent news and journalism from Goa,
                            bringing you the latest stories, developments
                            and voices from across the state.
                        </p>

                        <div className="gm-socials">

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/thegoamonitor"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fa fa-facebook"></i>
                            </a>

                            {/* X */}
                            <a
                                href="https://x.com/thegoamonitor"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X"
                            >
                                <span
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '700',
                                        lineHeight: '1'
                                    }}
                                >
                                    𝕏
                                </span>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/flashlab.creative/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fa fa-instagram"></i>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919923580022?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20GoaMonitor."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <i className="fa fa-whatsapp"></i>
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        QUICK LINKS
                    ========================== */}
                    <div className="gm-footer-column">

                        <h3>Quick Links</h3>

                        <Link to="/">Home</Link>

                        <a href="#">About</a>

                        <a href="#">Careers</a>

                        <a href="#">Internship</a>

                        <a href="#">Advertising</a>

                        <Link to="/contact">Contact Us</Link>

                    </div>


                    {/* =========================
                        MEDIA
                    ========================== */}
                    <div className="gm-footer-column">

                        <h3>Media</h3>

                        <a href="#">Live</a>

                        <a href="#">Events</a>

                        <a href="#">Podcasts</a>

                        <a href="#">Interview</a>

                        <a href="#">Web Stories</a>

                        <a href="#">Newsletter</a>

                    </div>


                    {/* =========================
                        TAGS
                    ========================== */}
                    <div className="gm-footer-column gm-footer-tags">

                        <h3>Tags</h3>

                        <Link to="/category/politics">
                            Politics
                        </Link>

                        <Link to="/category/crime">
                            Crime
                        </Link>

                        <Link to="/category/business">
                            Business
                        </Link>

                        <Link to="/category/sports">
                            Sports
                        </Link>

                        <Link to="/category/health">
                            Health
                        </Link>

                        <Link to="/category/tourism">
                            Tourism
                        </Link>

                        <Link to="/category/entertainment">
                            Entertainment
                        </Link>

                        <Link to="/category/technology">
                            Technology
                        </Link>

                        <Link to="/category/education">
                            Education
                        </Link>

                        <Link to="/category/environment">
                            Environment
                        </Link>

                        <Link to="/category/agriculture">
                            Agriculture
                        </Link>

                        <Link to="/category/travel">
                            Travel
                        </Link>

                    </div>

                </div>


                {/* =========================
                    LOGIN BUTTON
                ========================== */}
                <div className="gm-footer-login-corner">

                    <Link to="/login">
                        Login
                    </Link>

                </div>


                {/* =========================
                    DIVIDER
                ========================== */}
                <div className="gm-footer-divider"></div>


                {/* =========================
                    BOTTOM
                ========================== */}
                <div className="gm-footer-bottom">

                    <span>
                        Copyright © {new Date().getFullYear()} GoaMonitor.
                        All rights reserved.
                    </span>

                    <span>
                        Designed &amp; Developed by{' '}
                        <a
                            href="https://cybercreative.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cyber Creative
                        </a>
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Footer;