import React from 'react';
import styled from 'styled-components';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';

const Home = () => {
  let dataObj={
    name: "Raj store"
  }

  return (
    <>
      <HeroSection mydataObj={dataObj}/>
      <Services/>
      <Trusted/>
    </>
  )
}

export default Home;
