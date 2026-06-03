import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="newsletter-section container">
        <div className="newsletter-decoration-arrows">
          <svg width="250" height="150" viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 160 0 C 160 60, 100 80, 50 130" stroke="#FF7B89" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 35 110 L 50 130 L 70 120" stroke="#FF7B89" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            
            <path d="M 230 -20 C 230 50, 170 80, 110 130" stroke="#FF7B89" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 95 110 L 110 130 L 130 120" stroke="#FF7B89" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        
        <h2 className="newsletter-title body-font">
          Subscribe to<br />our newsletter
        </h2>
        
        <p className="newsletter-subtext body-font">
          To make your stay special and even more memorable
        </p>
        <button className="btn-primary subscribe-btn">Subscribe Now</button>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-links-section container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-heading body-font">Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading body-font">Terms & Policies</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#accessibility">Accessibility</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading body-font">Follow Us</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#youtube">Youtube</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading body-font">Terms & Policies</h4>
            <address className="footer-address">
              1498w Fluton ste, STE<br />
              2D Chicgo, IL 63867.<br /><br />
              (123) 456789000<br /><br />
              info@elementum.com
            </address>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>©2023 Elementum. All rights reserved</p>
        </div>
      </div>
      
      <div className="purple-semi-circle"></div>
    </footer>
  );
};

export default Footer;
