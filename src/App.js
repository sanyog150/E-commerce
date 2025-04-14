import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import ShopPage from "./Pages/ShopPage";
import FeaturesPage from "./Pages/FeaturesPage";
import TestimonialPage from "./Pages/TestimonialPage";
import ContactUsPage from "./Pages/ContactUsPage";
// Admin Home
import AdminHome from "./Pages/Admin/AdminHome";
// Admin MainCategory
import AdminMaincategory from "./Pages/Admin/Maincategory/AdminMaincategory";
import AdminCreateMaincategory from "./Pages/Admin/Maincategory/AdminCreateMaincategory";
import AdminUpdateMaincategory from "./Pages/Admin/Maincategory/AdminUpdateMaincategory";
// Admin SubCategory
import AdminSubcategory from "./Pages/Admin/Subcategory/AdminSubcategory";
import AdminCreateSubcategory from "./Pages/Admin/Subcategory/AdminCreateSubcategory";
import AdminUpdateSubcategory from "./Pages/Admin/Subcategory/AdminUpdateSubcategory";
// Admin Brand
import AdminBrand from "./Pages/Admin/Brands/AdminBrand";
import AdminCreateBrand from "./Pages/Admin/Brands/AdminCreateBrand";
import AdminUpdateBrand from "./Pages/Admin/Brands/AdminUpdateBrand";
// Admin Testimonial
import AdminTestimonial from "./Pages/Admin/Testimonial/AdminTestimonial";
import AdminCreateTestimonial from "./Pages/Admin/Testimonial/AdminCreateTestimonial";
import AdminUpdateTestimonial from "./Pages/Admin/Testimonial/AdminUpdateTestimonial";
// Admin Product
import AdminProduct from "./Pages/Admin/Product/AdminProduct";
import AdminCreateProduct from "./Pages/Admin/Product/AdminCreateProduct";
import AdminUpdateProduct from "./Pages/Admin/Product/AdminUpdateProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/features' element={<FeaturesPage/>}/>
          <Route path='/testimonial' element={<TestimonialPage/>}/>
          <Route path='/contactus' element={<ContactUsPage/>}/>

          {/* Admin */}
          <Route path='/admin' element={<AdminHome/>}/>
          {/* Admin Maincategory */}
          <Route path='/admin/maincategory' element={<AdminMaincategory/>}/>
          <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory/>}/>
          <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory/>}/>
          {/* Admin Subcategory */}
          <Route path='/admin/subcategory' element={<AdminSubcategory/>}/>
          <Route path='/admin/subcategory/create' element={<AdminCreateSubcategory/>}/>
          <Route path='/admin/subcategory/update/:id' element={<AdminUpdateSubcategory/>}/>
          {/* Admin Brand */}
          <Route path='/admin/brand' element={<AdminBrand/>}/>
          <Route path='/admin/brand/create' element={<AdminCreateBrand/>}/>
          <Route path='/admin/brand/update/:id' element={<AdminUpdateBrand/>}/>
          {/* Admin Products */}
          <Route path='/admin/product' element={<AdminProduct/>}/>
          <Route path='/admin/product/create' element={<AdminCreateProduct/>}/>
          <Route path='/admin/product/update/:id' element={<AdminUpdateProduct/>}/>
          {/* Admin Testimonial */}
          <Route path='/admin/testimonial' element={<AdminTestimonial/>}/>
          <Route path='/admin/testimonial/create' element={<AdminCreateTestimonial/>}/>
          <Route path='/admin/testimonial/update/:id' element={<AdminUpdateTestimonial/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
