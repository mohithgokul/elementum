import React from 'react';
import './Section.css'; 

const Section3 = () => {
  return (
    <section className="split-section reverse container fade-in-up delay-3">
      <div className="split-content">
        <h2 className="section-title display-font">
          <span className="highlight-mint">See</span> how we can<br />
          help you <span className="underline-gold">progress</span>
        </h2>
        <p className="section-description body-font">
          We add a layer of fearless insights and action that allows change<br />
          makers to accelerate their progress in areas such as brand, design<br />
          digital, comms and social research.
        </p>
        <a href="#read-more" className="read-more-link">
          Read more 
          <svg width="80" height="10" viewBox="0 0 80 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '10px'}}>
            <path d="M0 5H78M78 5L73 0M78 5L73 10" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </a>
      </div>
      <div className="split-visual">
        <div className="circle-img-wrapper">
          <div className="triangle-accent-top-left"></div>
          <div className="triangle-accent-bottom-right"></div>
          <img src="/team_collaboration.png" alt="Team collaboration" className="circle-img" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
