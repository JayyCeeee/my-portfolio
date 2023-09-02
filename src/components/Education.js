import "./EducationStyles.css"
import { VscCircleLargeFilled } from "react-icons/vsc";
import React from 'react'

const Education = () => {
  return (
    <div>
        <h1 className="project-heading">Education</h1>
        <div className="education">
            <div className="box-container">
                <div className="box">
                <VscCircleLargeFilled className="nani" size={10} style={{color:"#dbe916", marginRight:"2rem"}}/>
                    <span>2023 (Current)</span>
                    <h3>Master of Data Science</h3>
                    <p>Sunway University, Selangor</p>
                </div>
                <div className="box">
                <VscCircleLargeFilled className="nani" size={10} style={{color:"#dbe916", marginRight:"2rem"}}/>
                    <span>2020-2023</span>
                    <h3>Bsc(Hons) in Information Technology</h3>
                    <p>This is an example of a text paragraph</p>
                </div>
                <div className="box">
                <VscCircleLargeFilled className="nani" size={10} style={{color:"#dbe916", marginRight:"2rem"}}/>
                    <span>2018-2019</span>
                    <h3>Monash University Foundation Year (MUFY)</h3>
                    <p>Sunway College, Selangor</p>
                </div>
                <div className="box">
                    
                    <VscCircleLargeFilled className="nani" size={10} style={{color:"#dbe916", marginRight:"2rem"}}/>
                    <span>2013-2017</span>
                    <h3>Sijil Pelajaran Malaysia (SPM)</h3>
                    <p>St. Xavier's Institution</p>
                </div>
                

            </div>
        </div>
        <h1 className="project-heading">Work Experience</h1>
        <div className="education">
            <div className="box-container">
                <div className="box">
                <VscCircleLargeFilled className="nani" size={10} style={{color:"#dbe916", marginRight:"2rem"}}/>
                    <span>2019-2023</span>
                    <h3>Internship</h3>
                    <p>Jabil, Penang</p>
                </div>
                <div className="box">
                <VscCircleLargeFilled className="nani" size={10} style={{color:"#dbe916", marginRight:"2rem"}}/>
                    <span>2020-2023</span>
                    <h3>Part Time Waitress</h3>
                    <p>Nandos, Penang</p>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Education
