import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const Navbar = () => {

  const [Cookies, setCookies, removeCookies] = useCookies();
  const logOut = () => {
    removeCookies("userName");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Hii {Cookies["userName"]}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/course">
                  Course
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <Button>
              <NavLink to="/login" className="btn btn-light">
                Log In
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/signup" className="btn btn-primary">
                Sign Up
              </NavLink>
            </Button>

            <Button>
              <NavLink to="/" onClick={logOut} className="btn btn-secondary">
                Logout
              </NavLink>
            </Button>


          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
