import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const ProductSlider = () => {
  const [showPerPage, setShowPerPage] = useState(3);

  const options = {
    slidesPerView: showPerPage,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: { clickable: true },
    modules: [FreeMode, Pagination],
    className: "mySwiper",
  };
 
  const handleWindowResize = () => {
    if (window.innerWidth < 576) setShowPerPage(1);
    else if (window.innerWidth < 768) setShowPerPage(2);
    else if (window.innerWidth < 1200) setShowPerPage(3);
  };
  window.addEventListener("resize", handleWindowResize);

  return (
    <>
      <section id="team" className="team section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our hard working team</p>
        </div>

        <div className="container">
          <div className="gy-4">
            <Swiper {...options}>
              <SwiperSlide>
                <div
                  className="d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <p>
                        Velit aut quia fugit et et. Dolorum ea voluptate vel
                        tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                        minima enim corporis et voluptate.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <p>
                        Quo esse repellendus quia id. Est eum et accusantium
                        pariatur fugit nihil minima suscipit corporis. Voluptate
                        sed quas reiciendis animi neque sapiente.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <p>
                        Vero omnis enim consequatur. Voluptas consectetur unde
                        qui molestiae deserunt. Voluptates enim aut architecto
                        porro aspernatur molestiae modi.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="team-member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href="">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <p>
                        Rerum voluptate non adipisci animi distinctio et
                        deserunt amet voluptas. Quia aut aliquid doloremque ut
                        possimus ipsum officia.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSlider;
