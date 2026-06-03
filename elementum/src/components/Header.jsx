import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="header-logo display-font">Elementum</div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#studio">Studio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faqs">FAQ`s</a></li>
        </ul>
      </nav>
      <div className="header-cta">
        {/* Intentionally empty as per design */}
      </div>
      <div className="header-decoration">
        <svg width="30" height="60" viewBox="0 0 30 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0V60" stroke="#E8A232" strokeWidth="2" strokeDasharray="4 4"/>
          <path d="M10 20C10 20 25 15 25 30C25 45 10 40 10 40" stroke="#1E1E1E" strokeWidth="2"/>
          <path d="M15 30C15 30 30 25 30 40C30 55 15 50 15 50" stroke="#FCA5A5" strokeWidth="2"/>
        </svg>
      </div>
    </header>
  );
};

export default Header;
