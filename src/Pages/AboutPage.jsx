import React from 'react';
import About from '../Components/About';
import Values from '../Components/Values';
import Features from '../Components/Features';
import Testimonial from '../Components/Testimonial';
import Breadcrum from '../Components/Breadcrum';

const AboutPage = () => {
  return (
    <>
    <Breadcrum title="About Us"/>
      <About/>
      <Values/>
      <Features/>
      <Testimonial/>
    </>
  );
}

export default AboutPage;


