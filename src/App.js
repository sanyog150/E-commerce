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
import AdminHome from "./Pages/Admin/AdminHome";
import AdminMaincategory from "./Pages/Admin/Maincategory/AdminMaincategory";
import AdminCreateMaincategory from "./Pages/Admin/Maincategory/AdminCreateMaincategory";
import AdminUpdateMaincategory from "./Pages/Admin/Maincategory/AdminUpdateMaincategory";

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
          <Route path='/admin/maincategory' element={<AdminMaincategory/>}/>
          <Route path='/admin/maincategory/create' element={<AdminCreateMaincategory/>}/>
          <Route path='/admin/maincategory/update/:id' element={<AdminUpdateMaincategory/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
