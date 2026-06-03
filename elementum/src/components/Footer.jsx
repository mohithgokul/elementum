import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="newsletter-section container">
        <h2 className="newsletter-title display-font">
          Subscribe to<br />our newsletter
        </h2>
        <div className="newsletter-decoration-arrows">
          <svg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C20 30 10 50 10 70" stroke="#E8A232" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M5 60L10 70L20 55" stroke="#E8A232" strokeWidth="2"/>
            
            <path d="M50 10C40 40 45 60 30 75" stroke="#E8A232" strokeWidth="2" strokeDasharray="4 4"/>
            <path d="M25 65L30 75L45 70" stroke="#E8A232" strokeWidth="2"/>
          </svg>
        </div>
        <p className="newsletter-subtext body-font">
          To make your stay special and even more memorable
        </p>
        <button className="btn-primary subscribe-btn">Subscribe Now</button>
      </div>

      <div className="footer-links-section container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Terms & Policies</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#youtube">Youtube</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Terms & Policies</h4>
            <address className="footer-address">
              1498a Fluton ste, STE<br />
              20 Chicago, IL 60607.<br />
              (123) 456789000<br />
              info@elementum.com
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>
      
      <div className="purple-blob"></div>
    </footer>
  );
};

export default Footer;
