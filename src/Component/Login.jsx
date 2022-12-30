import React from 'react'
// import Alert from '@mui/material/Alert';

const Login = () => {

    const submitForm = (e) => {
        e.preventDefault();
        // <>
        //     <Alert severity="error">Page Not Found!</Alert>
        //     <Alert severity="success">This is a success alert — check it out!</Alert>
        // </>
    }

    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center text-primary mb-5">Log In</h1>
                <div className="col-md-6 col-sm-6 mx-auto">
                    <form method="post">
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
                                <a href="forget_pass.html">Forget Password</a>
                                <p className="text-muted"> New User <a href="./signup.html" className="ps-2">Sign In</a></p>
                            </div>
                            <div className="col-12">
                                <button type="submit" onClick={submitForm} className="btn btn-primary">Log in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
