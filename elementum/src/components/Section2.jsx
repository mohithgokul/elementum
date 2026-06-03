import React from 'react';
import './Section.css';

const Section2 = () => {
  return (
    <section className="split-section container fade-in-up delay-2">
      <div className="pink-glow-bg"></div>
      
      <div className="split-content">
        <h2 className="section-title display-font">
          <span className="underline-gold">Tomorrow</span> should<br />
          be better than <span className="highlight-mint">today</span>
        </h2>
        <p className="section-description body-font">
          We are a team of strategists, designers communicators, researchers.<br />
          Togeather, we belive that progress only happens when you refuse<br />
          to play things safe.
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
          <div className="rectangle-accent-top"></div>
          <img src="/team_meeting.png" alt="Team meeting" className="circle-img" />
          
          <svg className="curvy-line-connector" width="900" height="600" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 850 50 C 750 300, 150 0, 0 450" stroke="#FF6B6B" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section2;
