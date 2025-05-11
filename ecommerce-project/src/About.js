import React from 'react'
import HeroSection from './Components/HeroSection'

const About = () => {
    let dataObj={
        name: "Raj eccomerce"
      }
    
  return (
    <>
      <HeroSection mydataObj={dataObj}/>
    </>
  )
}

export default About
