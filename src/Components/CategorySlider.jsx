import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const CategorySlider = () => {
  const [showPerPage, setShowPerPage] = useState(6);

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
    if (window.innerWidth < 576) setShowPerPage(2);
    else if (window.innerWidth < 768) setShowPerPage(3);
    else if (window.innerWidth < 992) setShowPerPage(4);
    else if (window.innerWidth < 1200) setShowPerPage(5);
    else setShowPerPage(6);
  };
  window.addEventListener("resize", handleWindowResize);

  const clients = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
    "client-6.png",
    "client-7.png",
    "client-8.png",
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Brands</h2>
        <p>We work with best clients</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper {...options}>
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <img
                src={`assets/img/clients/${client}`}
                className="img-fluid"
                alt={`Client ${index + 1}`}
                style={{ height: "70px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
