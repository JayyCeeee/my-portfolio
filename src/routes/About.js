import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';
import Education from '../components/Education';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="About Me" text="Get to know me better"/>
      <AboutContent/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default About
