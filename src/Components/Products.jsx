import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/ActionCreators/ProductActionCreators";
import { getMaincategory } from "../Redux/ActionCreators/MaincategoryActionCreators";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("")
  const ProductStateData = useSelector(state=>state.ProductStateData)
  const MaincategoryStateData = useSelector(state=>state.MaincategoryStateData)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProduct())
  },[ProductStateData.length])

  useEffect(()=>{
    dispatch(getMaincategory())
  },[MaincategoryStateData.length])
  return (
    <>
      <section id="portfolio" className="portfolio section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Products</h2>
          <p>Check our latest products</p>
        </div>

        <div className="container">
          <div
            className="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
          >
            <ul
              className="portfolio-filters isotope-filters"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li data-filter="*" className="filter-active" onClick={()=>setActiveFilter("")}>
                All
              </li>
              {
                MaincategoryStateData.filter(x=>x.active).map((item)=>(
                  <li data-filter={`.filter-${item.name}`} onClick={()=>setActiveFilter(item.name)}>{item.name}</li>
                ))
              }
            </ul>

            <div
              className="row gy-4 isotope-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {
                ProductStateData.filter((x)=>x.active && (activeFilter === "" || activeFilter === x.maincategory)).map((item)=>(
                  <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${item.maincategory}`}>
                  <div className="portfolio-content h-100">
                    <img
                      src={`${process.env.REACT_APP_BACKEND_SERVER}${item.pic[0]}`} style={{height:300, width:"100%"}}
                      className="img-fluid"
                      alt=""
                    />
                    <div className="portfolio-info">
                      <h4>{item.maincategory}</h4>
                      <p>{item.name}</p>
                      <a
                        href="assets/img/portfolio/app-1.jpg"
                        title="App 1"
                        data-gallery="portfolio-gallery-app"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                ))
              }

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
