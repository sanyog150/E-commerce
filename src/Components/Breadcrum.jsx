import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = ({title}) => {
  return (
    <>
      <section id="hero" className="py-0 my-4 bg-primary">
       <div className="container">
       <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className='text-light'>Home</Link>
          </li>
          <li className="breadcrumb-item active text-light" aria-current="page">{ title }</li>
        </ol>
       </div>
    </section>
    </>
  );
};

export default Breadcrum;
