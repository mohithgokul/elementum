import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container fade-in-up">
      {/* Left side decoration lines */}
      <div className="hero-left-lines">
        <svg width="60" height="200" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 0 C 40 50, 40 150, 0 200" stroke="#E0E0E0" strokeWidth="2" fill="none" />
          <path d="M -20 20 C 20 70, 20 130, -20 180" stroke="#E0E0E0" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Right side purple blob */}
      <div className="hero-right-blob"></div>

      <div className="hero-content">
        <h1 className="hero-title display-font fade-in-up delay-1">
          The <span className="underline-gold">thinkers</span> and<br />
          doers were <span className="highlight-rose">changing</span><br />
          the <span className="highlight-mint">status</span> Quo with
        </h1>
        <p className="hero-description body-font">
          We are a team of strategists, designers communicators, researchers. Togeather,<br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>
      
      <div className="hero-avatars-wide">
        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a1" />
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a2" />
        <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a3" />
        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a4" />
        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a5" />
        <img src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a6" />
        <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a7" />
        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&h=200&fit=crop" alt="Team member" className="avatar-w a8" />
      </div>
    </section>
  );
};

export default Hero;
