import React from "react";

const Features = () => {
  return (
    <>
      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>
            Our Advacedd Features
            <br />
          </p>
        </div>

        <div className="container">
          <div className="row gy-5">
            <div className="col-xl-6" data-aos="zoom-out" data-aos-delay="100">
              <img src="assets/img/features.png" className="img-fluid" alt="" />
            </div>

            <div className="col-xl-6 d-flex">
              <div className="row align-self-center gy-4">
                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Eos aspernatur rem</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Facilis neque ipsa</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Volup amet volupt</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Rerum omnis sint</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Alias possimus</h3>
                  </div>
                </div>

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>Repellendus molli</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="alt-features" className="alt-features section">
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-xl-7 d-flex order-2 order-xl-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row align-self-center gy-5">
                <div className="col-md-6 icon-box">
                  <i className="bi bi-award"></i>
                  <div>
                    <h4>Corporis voluptates sit</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-card-checklist"></i>
                  <div>
                    <h4>Ullamco laboris nisi</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-dribbble"></i>
                  <div>
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-filter-circle"></i>
                  <div>
                    <h4>Beatae veritatis</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-lightning-charge"></i>
                  <div>
                    <h4>Molestiae dolor</h4>
                    <p>
                      Et fuga et deserunt et enim. Dolorem architecto ratione
                      tensa raptor marte
                    </p>
                  </div>
                </div>

                <div className="col-md-6 icon-box">
                  <i className="bi bi-patch-check"></i>
                  <div>
                    <h4>Explicabo consectetur</h4>
                    <p>
                      Est autem dicta beatae suscipit. Sint veritatis et sit
                      quasi ab aut inventore
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-5 d-flex align-items-center order-1 order-xl-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src="assets/img/alt-features.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
