import React from 'react'

const Signup = () => {
    return (
        <div>
            <div class="container my-5">
                <h1 class="text-center text-primary mb-5">Sign In</h1>
                <div class="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="inputName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="inputName" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="inputName" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="phone" class="form-label">Mobile Number</label>
                                <input type="text" class="form-control" id="phone" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="" />
                            </div>

                            <div class="col-md-6">
                                <label for="inputCity" class="form-label">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-md-2">
                                <label for="inputZip" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                            <div class="col-12">
                                <p class="text-muted"> Already have an Account <a href="./login.html" class="ps-2">Login</a></p>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
