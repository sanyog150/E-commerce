import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer bg-black text-light">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-6">
                <h4 className="text-primary">Join Our Newsletter</h4>
                <p>
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                />
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="d-flex align-items-center text-primary">
                <span className="sitename">{process.env.REACT_APP_SITE_NAME}</span>
              </a>
              <div className="footer-contact pt-3">
                <p>{process.env.REACT_APP_ADDRESS}</p>
                {/* <p>UtterPradesh, 100203</p> */}       
                <p className="mt-3">
                  <strong>Phone:</strong> <span>{process.env.REACT_APP_PHONE}</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>{process.env.REACT_APP_EMAIL}</span>
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className="text-primary">Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right text-light"></i> <Link className="text-light" to="/">Home</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right text-light"></i> <Link className="text-light" to="/about">About us</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right text-light"></i> <Link className="text-light" to="/shop">Shop</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right text-light"></i>{" "}
                  <Link className="text-light" to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className="text-primary">Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right text-light"></i> <Link className="text-light" to="/features">Features</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right text-light"></i> <Link className="text-light" to="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right text-light"></i> <Link className="text-light" to="#">Privacy Policy</Link>
                </li>
                <li>
                  <i className="bi bi-chevron-right text-light"></i>{" "}
                  <Link className="text-light" to="#">Terms and Conditions</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12">
              <h4 className="text-primary">Follow Us</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-links d-flex">
                <Link to={process.env.REACT_APP_TWITTER} target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link to={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noreferrer">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to={process.env.REACT_APP_INSTAGRAM} target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                  <i className="bi bi-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">{process.env.REACT_APP_SITE_NAME}</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
