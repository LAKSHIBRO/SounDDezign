import React from 'react'
import './Footer.css'
import {facebookLogo, instagramLogo, twitterLogo} from '../../assets'

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className='logo'>
              Sound<span className='red'>DZign</span>
            </a>

            <div className="socail-icons">
              <img src={facebookLogo} alt="" />
            </div>
            <div className="socail-icons">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="socail-icons">
              <img src={twitterLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer