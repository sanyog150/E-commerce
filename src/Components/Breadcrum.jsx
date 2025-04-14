import React from "react";
import { Link } from "react-router-dom";

const Breadcrum = ({title}) => {
  return (
    <>
      <section id="hero"   style={{ padding:'0px', marginTop: "56px", marginLeft: "17px"}}>
       <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link  to="/" className='text-dark'>Home</Link> 
          </li>
          <li className="breadcrumb-item text-dark" aria-current="page">{ title }</li>
        </ol>
    </section>
    </>
  );
};

export default Breadcrum;


//problem with the navbar
