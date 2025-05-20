import React, { useEffect } from "react";
import logo from "../assets/logo.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"; // Required

const Navbar = () => {
  useEffect(() => {
    // Bootstrap needs this if hydration issues exist
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Male Fashion" height="40" className="me-2" />
           
          </a>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 text-center text-lg-start">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Brand text style */
        .brand-text {
          font-weight: 700;
          font-size: 1.25rem;
          color: #2c3e50; /* Dark slate blue */
        }
        /* Nav link base color */
        .nav-link {
          color: #34495e; /* Soft dark blue */
          position: relative;
          transition: color 0.3s ease;
        }
        /* Hover and focus effect */
        .nav-link:hover,
        .nav-link:focus {
          color: #e74c3c; /* Accent: vibrant red */
        }
        /* Active or current page link style */
        .nav-link.active {
          color: #e74c3c;
          font-weight: 700;
        }
        /* Navbar background color */
        nav.navbar {
          background-color: #f8f9fa; /* Light gray */
        }
        /* Toggler button color tweak */
        .navbar-toggler {
          border-color: #e74c3c;
        }
        .navbar-toggler-icon {
          background-image: url(
            "data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23e74c3c' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E"
          );
        }
      `}</style>
    </>
  );
};

export default Navbar;
