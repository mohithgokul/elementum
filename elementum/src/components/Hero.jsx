import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title display-font">
          <span className="underline-gold">The thinkers and</span><br />
          <span className="highlight-rose">doers were changing</span><br />
          <span className="highlight-mint">the status Quo with</span>
        </h1>
        <p className="hero-description body-font">
          We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>
      <div className="hero-avatars">
        <div className="avatar-cluster">
          <img src="/avatar_1.png" alt="Team member 1" className="avatar avatar-1" />
          <img src="/avatar_2.png" alt="Team member 2" className="avatar avatar-2" />
          <img src="/avatar_1.png" alt="Team member 3" className="avatar avatar-3" />
          <img src="/avatar_2.png" alt="Team member 4" className="avatar avatar-4" />
          <img src="/avatar_1.png" alt="Team member 5" className="avatar avatar-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
