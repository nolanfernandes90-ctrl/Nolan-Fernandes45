import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
    useEffect(() => {
        // 500ms delay ensures React paints the DOM before jQuery initializes
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
            <section className="pb-80 pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* Breadcrumb */}
                            <ul className="breadcrumbs bg-light mb-4">
                                <li className="breadcrumbs__item">
                                    <Link to="/" className="breadcrumbs__url">
                                        <i className="fa fa-home"></i> Home
                                    </Link>
                                </li>
                                <li className="breadcrumbs__item breadcrumbs__item--current">
                                    About Us
                                </li>
                            </ul>
                            {/* end breadcrumb */}

                            <div className="wrap__about-us">
                                <h2>Our Mission</h2>
                                <h4>It is a long established fact that a reader will be distracted</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                    of Lorem Ipsum.
                                </p>

                                <figure className="float-left mr-3">
                                    <img src="/images/placeholder/500x400.jpg" alt="" className="img-fluid" />
                                </figure>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                    but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                    of Lorem Ipsum.
                                </p>
                                <div className="clearfix"></div>
                                <h2>Our Valuable Team Members</h2>
                                
                                {/* team member */}
                                <div className="team-member row">
                                    <div className="col-md-3">
                                        <figure className="member"> 
                                            <img src="/images/placeholder/600x600.jpg" className="img-fluid" alt="Image" />
                                            <figcaption>
                                                <h4>Debora Hilton</h4>
                                                <small>Editor</small>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3">
                                        <figure className="member"> 
                                            <img src="/images/placeholder/600x600.jpg" className="img-fluid" alt="Image" />
                                            <figcaption>
                                                <h4>Debora Hilton</h4>
                                                <small>Editor</small>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3">
                                        <figure className="member"> 
                                            <img src="/images/placeholder/600x600.jpg" className="img-fluid" alt="Image" />
                                            <figcaption>
                                                <h4>Debora Hilton</h4>
                                                <small>Publisher</small>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    <div className="col-md-3">
                                        <figure className="member"> 
                                            <img src="/images/placeholder/600x600.jpg" className="img-fluid" alt="Image" />
                                            <figcaption>
                                                <h4>Debora Hilton</h4>
                                                <small>Project Manager</small>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                    <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                    passages, and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;