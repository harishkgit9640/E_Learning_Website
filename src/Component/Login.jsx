import React from 'react'

const Login = () => {
    return (
        <div>
            <div class="container my-5">
                <h1 class="text-center text-primary mb-5">Log In</h1>
                <div class="col-md-6 col-sm-6 mx-auto">
                    <form method="post" action="#">
                        <div class="row g-3">
                            <div class="col-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" />
                            </div>
                            <div class="col-12">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" />
                            </div>
                            <div class="d-flex justify-content-between">
                                <a href="forgetpass.html">Forget Password</a>
                                <p class="text-muted"> New User <a href="./signup.html" class="ps-2">Sign In</a></p>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Log in</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
