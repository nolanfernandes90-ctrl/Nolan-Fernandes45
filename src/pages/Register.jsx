import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Register() {
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
        <div className="body-box">
            {/* Registration Form Section */}
            <section className="wrap__section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mx-auto" style={{ maxWidth: '520px' }}>
                                <article className="card-body">
                                    <header className="mb-4">
                                        <h4 className="card-title">Sign up</h4>
                                        <small className="form-text text-muted">
                                            Already have an account? <Link to="/login" className="text-primary font-weight-bold">Login</Link>
                                        </small>
                                    </header>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <label>First name</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                            <div className="col form-group">
                                                <label>Last name</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="" />
                                            <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Create password</label>
                                                <input className="form-control" type="password" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Repeat password</label>
                                                <input className="form-control" type="password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                                        </div>
                                    </form>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;