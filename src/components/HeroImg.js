import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/intro-bg2.jpg"
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <h1>Hi, I'm Joel Chuah</h1>
        <p>A passionate front-end developer. </p>
        
        <div>
            <Link to="/about" className="btn btn-light">
            About Me
            </Link>
        </div>

        
      </div>
    </div>
  )
}

export default HeroImg
