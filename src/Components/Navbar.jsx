import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* social-media icons */}
      <div className="top-bar">
        <div className="row" style={{width:'100%'}}>
          <div className="col-md-9 col-13">
            <div className="ms5 ">
              <Link className="me-4" to="mailto:sanyogkumar140@gmail.com">
                <i className="text-light fa fa invelope">
                  <span className="d-none d-md-inline">
                    sanyogkumar140@gmail.com
                  </span>
                </i>
              </Link>
              <Link className="me-4" to="+91 6200964536">
                <i className="text-light fa fa phone">
                  <span className="d-none d-md-inline">+91 6200964536</span>
                </i>
              </Link>
              <Link className="me-4" to="https://wa.me/+916200964536">
                <i className="text-light fa fa whatsapp">
                  <span className="d-none d-md-inline">+91 6200964536</span>
                </i>
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="float-end me-5">
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="fa fa facebook"></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="fa fa instagram"></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="fa fa twitter"></i>
              </Link>
              <Link className="me-3" to="#" target="_blank" rel="noreferrer">
                <i className="fa fa linkedin"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">{process.env.REACT_APP_SITE_NAME}</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/">
                  Home
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/features">Features</NavLink>
              </li>
              <li>
                <NavLink to="/testimonial">Testimonials</NavLink>
              </li>
              <li>
                <NavLink to="/contactus">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              {/* <li className="dropdown">
                <NavLink to="#">
                  <span>Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Dropdown 1</NavLink>
                  </li>
                  <li className="dropdown">
                    <NavLink to="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </NavLink>
                    <ul>
                      <li>
                        <NavLink to="#">Deep Dropdown 1</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Deep Dropdown 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Deep Dropdown 3</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Deep Dropdown 4</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Deep Dropdown 5</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="#">Dropdown 2</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Dropdown 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Dropdown 4</NavLink>
                  </li>
                </ul>
              </li>
              <li className="listing-dropdown">
                <NavLink to="#">
                  <span>Listing Dropdown</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown"></i>
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="#">Column 1 link 1</NavLink>
                    <NavLink to="#">Column 1 link 2</NavLink>
                    <NavLink to="#">Column 1 link 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Column 2 link 1</NavLink>
                    <NavLink to="#">Column 2 link 2</NavLink>
                    <NavLink to="#">Column 3 link 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Column 3 link 1</NavLink>
                    <NavLink to="#">Column 3 link 2</NavLink>
                    <NavLink to="#">Column 3 link 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Column 4 link 1</NavLink>
                    <NavLink to="#">Column 4 link 2</NavLink>
                    <NavLink to="#">Column 4 link 3</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Column 5 link 1</NavLink>
                    <NavLink to="#">Column 5 link 2</NavLink>
                    <NavLink to="#">Column 5 link 3</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="#contact">Contact</NavLink>
              </li> */}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <NavLink
            className="btn-getstarted flex-md-shrink-0"
            to="index.html#about"
          >
            Get Started
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
