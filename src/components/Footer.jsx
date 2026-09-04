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

                    {/* BRAND */}
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

                            <a
                                href="https://www.facebook.com/thegoamonitor"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a
                                href="https://x.com/thegoamonitor"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
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

                            <a
                                href="https://www.instagram.com/thegoamonitor/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fa fa-instagram"></i>
                            </a>

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


                    {/* NEWS & SOCIETY */}
                    <div className="gm-footer-column">

                        <h3>News & Society</h3>

                        <Link to="/category/politics">Politics</Link>
                        <Link to="/category/crime">Crime</Link>
                        <Link to="/category/development">Development</Link>
                        <Link to="/category/education">Education</Link>
                        <Link to="/category/environment">Environment</Link>
                        <Link to="/category/agriculture">Agriculture</Link>

                    </div>


                    {/* BUSINESS & LIFESTYLE */}
                    <div className="gm-footer-column">

                        <h3>Business & Lifestyle</h3>

                        <Link to="/category/business">Business</Link>
                        <Link to="/category/economy">Economy</Link>
                        <Link to="/category/food">Food</Link>
                        <Link to="/category/health">Health</Link>
                        <Link to="/category/fashion+%26+style">
                            Fashion & Style
                        </Link>
                        <Link to="/category/arts+%26+culture">
                            Arts & Culture
                        </Link>

                    </div>


                    {/* SPORTS / TECH / TRAVEL */}
                    <div className="gm-footer-column">

                        <h3>Sports, Tech & Travel</h3>

                        <Link to="/category/sports">Sports</Link>
                        <Link to="/category/technology">Technology</Link>
                        <Link to="/category/tourism">Tourism</Link>
                        <Link to="/category/travel">Travel</Link>
                        <Link to="/category/science">Science</Link>
                        <Link to="/category/entertainment">
                            Entertainment
                        </Link>

                    </div>


                    {/* QUICK NAVIGATION */}
                    <div className="gm-footer-column">

                        <h3>Quick Navigation</h3>

                        <Link to="/">Home</Link>
                        {/* <Link to="/about">About Us</Link> */}
                        <Link to="/contact">Contact Us</Link>
                        <Link to="/login">Login</Link>

                    </div>

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
    Designed & Developed by{' '}
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