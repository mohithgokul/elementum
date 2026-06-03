import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Section.css';

const Section2 = () => {
  return (
    <section className="split-section container">
      <div className="split-content">
        <h2 className="section-title display-font">
          <span className="underline-gold">Tomorrow should</span><br />
          <span className="highlight-mint">be better than today</span>
        </h2>
        <p className="section-description body-font">
          We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
        </p>
        <a href="#read-more" className="read-more-link">
          Read more <ArrowRight size={20} />
        </a>
      </div>
      <div className="split-visual">
        <div className="circle-img-wrapper">
          <div className="triangle-accent-top"></div>
          <img src="/team_meeting.png" alt="Team meeting" className="circle-img" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
