import React from 'react';
import About from '../Components/About';
import Values from '../Components/Values';
import Features from '../Components/Features';
import Testimonial from '../Components/Testimonial';
import Breadcrum from '../Components/Breadcrum';

const FeaturesPage = () => {
  return (
    <>
    <Breadcrum title="Features"/>
      <Values/>
      <Features/>
      <About/>
      <Testimonial/>
    </>
  );
}

export default FeaturesPage;
