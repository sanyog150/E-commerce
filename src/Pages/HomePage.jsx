import React from "react";
import About from "../Components/About";
import Services from "../Components/Services";
import Products from "../Components/Products";
import Values from "../Components/Values";
import Features from "../Components/Features";
import Testimonial from "../Components/Testimonial";
import CategorySlider from "../Components/CategorySlider";
import ProductSlider from "../Components/ProductSlider";

const HomePage = () => {
  return (
    <>
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
              "Seamlessly manage your shopping cart, review items, secure shopping experience."
              </h1>
              <p data-aos="fade-up" data-aos-delay="100">
                We are team of talented designers making websites with Bootstrap
              </p>
              <div
                className="d-flex flex-column flex-md-row"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#about" className="btn-get-started">
                  Get Started <i className="bi bi-arrow-right"></i>
                </a>
                <a
                  href="https://youtube.com/shorts/NZOXhJTGtsc?si=5nqnhljDGn6cGY0H"
                  className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
                >
                  <i className="bi bi-play-circle"></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="assets/img/hero-img.png"
                className="img-fluid animated"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Values/>
      <Features/>
      <Services/>
      <Products/>
      <ProductSlider/>
      <Testimonial/>
      <CategorySlider/>
    </>
  );
};

export default HomePage;
