import React from 'react'
import "./FooterStyles.css"
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Penang, Malaysia</p>
                    
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +(6)016-4451898</h4>
                
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                joelchuah2010@hotmail.com</h4>
                
            </div>
        </div>
        <div className='right'>
            <h4>Connect with me</h4>
            
            <div className='social'>
            
              <Link to="https://www.linkedin.com/in/chuahjern/"><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/></Link>
            
            
              <Link to="https://wa.me/0164451898"><FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/></Link>
              <Link to="https://www.instagram.com/joelchuah_00/"><FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}}/></Link>
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
