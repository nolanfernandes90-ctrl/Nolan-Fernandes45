import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
            {/* Login Section */}
            <section className="wrap__section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mx-auto" style={{ maxWidth: '380px' }}>
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Sign in</h4>
                                    {/* Direct secure form submission to WordPress backend login handler */}
                                    <form action="https://thegoamonitor.com/wp-login.php" method="POST">
                                        <a href="#" className="btn btn-facebook btn-block mb-2 text-white">
                                            <i className="fa fa-facebook"></i> &nbsp; Sign in with Facebook
                                        </a>
                                        <a href="#" className="btn btn-primary btn-block mb-4">
                                            <i className="fa fa-google"></i> &nbsp; Sign in with Google
                                        </a>
                                        <div className="form-group">
                                            <input 
                                                className="form-control" 
                                                placeholder="Username or Email" 
                                                type="text" 
                                                name="log"
                                                required 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                                className="form-control" 
                                                placeholder="Password" 
                                                type="password" 
                                                name="pwd"
                                                required 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <a href="https://thegoamonitor.com/wp-login.php?action=lostpassword" className="float-right" target="_blank" rel="noopener noreferrer">Forgot password?</a>
                                            <label className="float-left custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" name="rememberme" value="forever" defaultChecked />
                                                <span className="custom-control-label"> Remember </span>
                                            </label>
                                        </div>
                                        
                                        {/* Forces direct entry into the WordPress admin dashboard upon success */}
                                        <input type="hidden" name="redirect_to" value="https://thegoamonitor.com/wp-admin/" />
                                        
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block"> Login </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <p className="text-center mt-4">
                                Don't have an account? <Link to="/register" className="text-primary font-weight-bold">Sign up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;