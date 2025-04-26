import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" >
        <div className="container">
          <Link className="navbar-brand" to="/">
            {process.env.REACT_APP_SITE_NAME}
          </Link>
          <butto
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <i className={`bi ${menuOpen ? "bi-x" : "bi-list"}`}></i>
          </butto>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/shop">Shop</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/features">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/testimonial">Testimonials</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">Admin</NavLink>
              </li>
            </ul>
            <NavLink className="btn btn-warning ms-3" to="/about">
              Get Started
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
