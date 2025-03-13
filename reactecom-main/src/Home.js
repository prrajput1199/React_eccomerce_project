import React, { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import { useProductContext } from './styles/Context/ProductContext';
import axios from 'axios';

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Services/>
      <Trusted/>
    </>
  )
}



export default Home;
