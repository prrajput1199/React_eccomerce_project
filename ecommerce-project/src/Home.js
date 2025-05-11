import React, { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import { useProductContext } from './styles/Context/ProductContext';
import axios from 'axios';
import FeaturedProduct from './Components/FeaturedProduct';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <FeaturedProduct/>
      <Services/>
      <Trusted/>
    </>
  )
}



export default Home;
