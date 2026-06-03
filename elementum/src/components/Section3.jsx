import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Section.css'; // Reuses styles from Section2

const Section3 = () => {
  return (
    <section className="split-section reverse container">
      <div className="split-content">
        <h2 className="section-title display-font">
          <span className="highlight-mint-outline">See how we can</span><br />
          <span className="underline-gold">help you progress</span>
        </h2>
        <p className="section-description body-font">
          We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
        </p>
        <a href="#read-more" className="read-more-link">
          Read more <ArrowRight size={20} />
        </a>
      </div>
      <div className="split-visual">
        <div className="circle-img-wrapper">
          <div className="triangle-accent-bottom"></div>
          <img src="/team_collaboration.png" alt="Team collaboration" className="circle-img" />
        </div>
      </div>
    </section>
  );
};

export default Section3;
