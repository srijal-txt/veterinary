import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook,faTwitter,faInstagram,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer con">
          <div className="footer-first">
            <h2>YOUR LOGO HERE</h2>
            <p>Phone Number:</p>
            <a href='tel:'>+977-9861859764</a>
            <p>Location:</p>
            <span>Tahachal-Kathmandu</span>
          </div>
          <div className="footer-description">
          <p>"City Pet House & Animal Clinic: Quality and affordable animal care at your doorstep. Comprehensive, professional, and compassionate veterinary services by our dedicated and experienced team."</p>
          </div>
          <div className="footer-menu">
            <h5>Menu</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Breeds</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-gallery">
            <h5>Gallery</h5>
            <img src={require('../../assets/gallery1.jpg')} alt=''></img>
            <img src={require('../../assets/gallery2.jpg')} alt=''></img>
            <img src={require('../../assets/gallery3.jpg')} alt=''></img>
            <img src={require('../../assets/gallery4.jpg')} alt=''></img>
          </div>
        </div>
        <div className="footer-last con">
          <p>Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved</p>
          <div className="social">
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faTwitter}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faLinkedin}/>
            <FontAwesomeIcon icon={faYoutube}/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer