import React from 'react';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import { useProductContext } from './styles/Context/ProductContext';

const Home = () => {
  const { myName } = useProductContext();

  let dataObj={
    name: "Raj store"
  }

  return (
    <>
      { myName }
      <HeroSection mydataObj={dataObj}/>
      <Services/>
      <Trusted/>
    </>
  )
}



export default Home;
