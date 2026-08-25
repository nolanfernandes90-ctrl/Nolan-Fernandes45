import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    useEffect(() => {
        const timer = setTimeout(() => {
            const script = document.createElement('script');
            script.src = "/js/index.bundle.js";
            script.id = "retnews-js-bundle";
            script.async = false;
            document.body.appendChild(script);
        }, 500);

        return () => {
            clearTimeout(timer);
            const existingScript = document.getElementById("retnews-js-bundle");
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div>
            {/* Breadcrumb */}
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumbs bg-light mb-4">
                                <li className="breadcrumbs__item">
                                    <Link to="/" className="breadcrumbs__url">
                                        <i className="fa fa-home"></i> Home
                                    </Link>
                                </li>
                                <li className="breadcrumbs__item breadcrumbs__item--current">
                                    Contact Us
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form contact */}
            <section className="wrap__contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h5>Contact Us</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group form-group-name">
                                        <label>Your name <span className="required"></span></label>
                                        <input type="text" className="form-control" name="name" required="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-name">
                                        <label>Your email <span className="required"></span></label>
                                        <input type="email" className="form-control" name="email" required="" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group form-group-name">
                                        <label>Website <span className="required"></span></label>
                                        <input type="text" className="form-control" name="website" required="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-name">
                                        <label>Subject <span className="required"></span></label>
                                        <input type="text" className="form-control" name="subject" required="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Your message </label>
                                        <textarea className="form-control" rows="8" name="message"></textarea>
                                    </div>
                                    <div className="form-group float-right mb-4">
                                        <button type="submit" className="btn btn-primary" onClick={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <h5>Info Location</h5>
                            <div className="wrap__contact-form-office">
                                <ul className="list-unstyled">
                                    <li>
                                        <span>
                                            <i className="fa fa-home"></i>
                                        </span>
                                        Panaji, Goa, India
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa fa-phone"></i>
                                            <a href="tel:">(+91) 98765 43210</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa fa-envelope"></i>
                                            <a href="mailto:">contact@goamonitor.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fa fa-globe"></i>
                                            <a href="#" target="_blank" rel="noreferrer"> www.goamonitor.com</a>
                                        </span>
                                    </li>
                                </ul>

                                <div className="social__media">
                                    <h5>Find Us</h5>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-social rounded text-white facebook">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-social rounded text-white twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-social rounded text-white whatsapp">
                                                <i className="fa fa-whatsapp"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-social rounded text-white telegram">
                                                <i className="fa fa-telegram"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="btn btn-social rounded text-white linkedin">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;