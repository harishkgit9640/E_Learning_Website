import React from 'react'

const Signup = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center text-primary mb-5">Sign In</h1>
                <div className="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label for="inputName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="inputName" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="inputName" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-12">
                                <label for="phone" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" id="phone" />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="" />
                            </div>

                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="col-md-4">
                                <label for="inputState" className="form-label">State</label>
                                <select id="inputState" className="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label for="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-12">
                                <p className="text-muted"> Already have an Account <a href="./login.html" className="ps-2">Login</a></p>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
