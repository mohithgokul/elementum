import React from 'react';
import { Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header container">
      <div className="header-logo">Elementum</div>
      <nav className="header-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#studio">Studio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faqs">FAQ`s</a></li>
        </ul>
      </nav>
      <div className="header-menu">
        <Menu size={32} strokeWidth={1.5} />
      </div>
    </header>
  );
};

export default Header;
