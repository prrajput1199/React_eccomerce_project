import React from 'react';
import styled from 'styled-components';
import HeroSection from './Components/HeroSection';

const Home = () => {
  let dataObj={
    name: "Raj store"
  }

  return (
    <>
      <HeroSection mydataObj={dataObj}/>
    </>
  )
}

export default Home;
