import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/logo.webp"
            alt="Male Fashion"
            height="40"
            width="200"
            className="me-2"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3 text-center text-lg-start ms-auto">
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
              <a className="nav-link fw-semibold text-dark" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
