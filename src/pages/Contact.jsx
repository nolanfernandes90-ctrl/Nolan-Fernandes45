import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        subject: '',
        message: ''
    });

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

            const existingScript =
                document.getElementById("retnews-js-bundle");

            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);


    /* =========================================
       HANDLE FORM INPUTS
    ========================================= */

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    };


    /* =========================================
       SEND FORM DETAILS TO WHATSAPP
    ========================================= */

    const handleSubmit = (e) => {

        e.preventDefault();

        const whatsappMessage = `Hello GoaMonitor,

I would like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Website: ${formData.website}
Subject: ${formData.subject}

Message:
${formData.message}`;

        const whatsappUrl =
            `https://wa.me/919923580022?text=${encodeURIComponent(
                whatsappMessage
            )}`;

        window.open(
            whatsappUrl,
            '_blank',
            'noopener,noreferrer'
        );
    };


    return (
        <div>

            {/* =========================================
                BREADCRUMB
            ========================================= */}

            <section className="pt-4">

                <div className="container">

                    <div className="row">

                        <div className="col-md-12">

                            <ul className="breadcrumbs bg-light mb-4">

                                <li className="breadcrumbs__item">

                                    <Link
                                        to="/"
                                        className="breadcrumbs__url"
                                    >

                                        <i className="fa fa-home"></i>{' '}
                                        Home

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


            {/* =========================================
                CONTACT SECTION
            ========================================= */}

            <section className="wrap__contact-form">

                <div className="container">

                    <div className="row">


                        {/* =====================================
                            LEFT — CONTACT FORM
                        ===================================== */}

                        <div className="col-md-8">

                            <h5>Contact Us</h5>

                            <div className="row">


                                {/* NAME */}

                                <div className="col-md-6">

                                    <div className="form-group form-group-name">

                                        <label>
                                            Your name <span className="required"></span>
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>


                                {/* EMAIL */}

                                <div className="col-md-6">

                                    <div className="form-group form-group-name">

                                        <label>
                                            Your email <span className="required"></span>
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>


                                {/* WEBSITE */}

                                <div className="col-md-6">

                                    <div className="form-group form-group-name">

                                        <label>
                                            Website <span className="required"></span>
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>


                                {/* SUBJECT */}

                                <div className="col-md-6">

                                    <div className="form-group form-group-name">

                                        <label>
                                            Subject <span className="required"></span>
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>


                                {/* MESSAGE */}

                                <div className="col-md-12">

                                    <div className="form-group">

                                        <label>
                                            Your message
                                        </label>

                                        <textarea
                                            className="form-control"
                                            rows="8"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>

                                    </div>


                                    {/* SUBMIT */}

                                    <div className="form-group float-right mb-4">

                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            onClick={handleSubmit}
                                        >
                                            Submit
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* =====================================
                            RIGHT — INFO LOCATION
                        ===================================== */}

                        <div className="col-md-4">

                            <h5>Info Location</h5>

                            <div className="wrap__contact-form-office">

                                <ul className="list-unstyled">


                                    {/* ADDRESS */}

                                    <li>

                                        <span>
                                            <i className="fa fa-home"></i>
                                        </span>

                                        G26 Vikrant Complex,
                                        <br />
                                        Malbhat, Margao, Goa, 403601

                                    </li>


                                    {/* PHONE */}

                                    <li>

                                        <span>

                                            <i className="fa fa-phone"></i>

                                            <a href="tel:+919923580022">
                                                +91 9923580022
                                            </a>

                                        </span>

                                    </li>


                                    {/* EMAIL */}

                                    <li>

                                        <span>

                                            <i className="fa fa-envelope"></i>

                                            <a href="mailto:contact@goamonitor.com">
                                                contact@goamonitor.com
                                            </a>

                                        </span>

                                    </li>


                                   

                                </ul>


                                {/* =====================================
                                    FIND US
                                ===================================== */}

                                <div className="social__media">

                                    <h5>Find Us</h5>

                                    <ul className="list-inline">


                                        {/* WHATSAPP */}

                                        <li className="list-inline-item">

                                            <a
                                                href="https://wa.me/919923580022"
                                                className="btn btn-social rounded text-white whatsapp"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="WhatsApp"
                                            >

                                                <i className="fa fa-whatsapp"></i>

                                            </a>

                                        </li>


                                        {/* INSTAGRAM */}

                                        <li className="list-inline-item">

                                            <a
                                                href="https://www.instagram.com/thegoamonitor?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                                                className="btn btn-social rounded text-white instagram"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Instagram"
                                            >

                                                <i className="fa fa-instagram"></i>

                                            </a>

                                        </li>


                                        {/* X / TWITTER */}

                                        <li className="list-inline-item">

                                            <a
                                                href="https://x.com/thegoamonitor"
                                                className="btn btn-social rounded text-white twitter"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="X"
                                            >

                                                <span
    style={{
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '1'
    }}
>
    𝕏
</span>

                                            </a>

                                        </li>


                                        {/* FACEBOOK */}

                                        <li className="list-inline-item">

                                            <a
                                                href="https://www.facebook.com/thegoamonitor"
                                                className="btn btn-social rounded text-white facebook"
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label="Facebook"
                                            >

                                                <i className="fa fa-facebook"></i>

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