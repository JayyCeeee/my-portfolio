import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import pro1 from "../assets/me.JPG"
import "./PricingCardStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div>
        <div className="about">
            

            <div className="right">
                <div className="img-container">
                    <div className="img-stack-top">
                        <img src={pro1} className="img" alt="true"></img>
                    </div>
                    
                </div>
            </div>

            <div className="left">
                <h1>Who Am I?</h1>
                <p>My name is Chuah Wei Jern (Joel), a recent graduate with a strong 
                    passion for web development. I am a skilled and passionate web
                    designeer with experience in creating visually appealing,
                    responsive and user-friendly websites. I have a strong understanding of design and
                    am proficient in HTML, CSS and JavaScript as well as frameworks such as
                    React.js.
                </p>
                <Link to="">
                    <button className="btn">Download Resume</button>
                </Link>
            </div>

            

        </div>

        <h1 className="project-heading">Skills</h1>

        <div className="card-container">

            <div className="card">
                <h3>- Frontend Development -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- HTML -</p>
                <p>- CSS -</p>
                <p>- JavaScript -</p>
                <p>- React.js -</p>
            </div>

            <div className="card">
                <h3>- Backend Development -</h3>
                <span className="bar"></span>
                <p className="btc"></p>
                <p>- PHP -</p>
                <p>- Python -</p>
                <p>- SQL -</p>
            </div>

        </div>
        
    </div>
    
    
  )
}

export default AboutContent
