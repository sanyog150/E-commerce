import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="list-group sidebar fixed"> 
        <Link to="/admin" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-home fs-4'></i><span className='ml'>Home</span></Link>
        <Link to="/admin/maincategory" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-list fs-4'></i><span className='ml'>Maincategory</span></Link>
        <Link to="/admin/subcategory" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-list fs-4'></i><span className='ml'>Subcategory</span></Link>
        <Link to="/admin/brand" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-list fs-4'></i><span className='ml'>Brands</span></Link>
        <Link to="/admin/product" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-list fs-4'></i><span className='ml'>Product</span></Link>
        <Link to="/admin/testimonial" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-star fs-4'></i><span className='ml'>Testimonial</span></Link>
        <Link to="/admin/user" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-users fs-4'></i><span className='ml'>User</span></Link>
        <Link to="/admin/newsletter" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-envelope fs-4'></i><span className='ml'>Newsletter</span></Link>
        <Link to="/admin/contactus" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-phone fs-4'></i><span className='ml'>ContactUs</span></Link>
        <Link to="/admin/checkout" className='padding bg-primary text-white list-group-item list-group-item-action action mb-1 d-flex justify-content-between' aria-current='true'><i className='fa fa-shopping-bag fs-4'></i><span className='ml'>Checkouts</span></Link>
      </div>
    </>
  );
}

export default Sidebar; 
