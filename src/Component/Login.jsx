import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center text-primary mb-5">Log In</h1>
                <div className="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div className="row g-3">
                            <div className="col-12">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-12">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <a href="forgetpass.html">Forget Password</a>
                                <p className="text-muted"> New User <a href="./signup.html" className="ps-2">Sign In</a></p>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Log in</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
