import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Online Learning</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About1</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/course">Course</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <NavLink to="/login" className="btn btn-primary">Log In</NavLink>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar;