import React, { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import { useProductContext } from './styles/Context/ProductContext';
import axios from 'axios';

const Home = () => {

  let dataObj={
    name: "Raj store"
  }

  let API="https://api.pujakaitem.com/api/products";

  // ctrl + ALT + l(For logging our data)

  const getProducts = async (url)=>{
       let res = await axios.get(url);
      //  console.log("res=>",res);
       let products = res.data;
       console.log("products => ",products);
  }

  useEffect(()=>{
      getProducts(API);
  }, []);

  return (
    <>
      <HeroSection mydataObj={dataObj}/>
      <Services/>
      <Trusted/>
    </>
  )
}



export default Home;
