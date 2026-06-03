import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section container">
      <div className="testimonials-header">
        <h2 className="testimonials-title display-font">
          <span className="highlight-mint">What our customer</span><br />
          <span className="underline-gold">says About Us</span>
        </h2>
      </div>
      
      <div className="testimonials-content">
        <div className="avatars-left">
          <img src="/avatar_1.png" alt="Customer" className="test-avatar tl" />
          <img src="/avatar_2.png" alt="Customer" className="test-avatar cl" />
          <img src="/avatar_1.png" alt="Customer" className="test-avatar bl" />
          <img src="/avatar_2.png" alt="Customer" className="test-avatar ml" />
        </div>
        
        <div className="quote-box">
          <div className="quote-mark left">“</div>
          <p className="quote-text display-font">
            Elementum delivered the site with inthe timeline as they requested, Inthe end, the client found a 50% increase in traffic with in days since its launch, They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable
          </p>
          <div className="quote-mark right">”</div>
        </div>
        
        <div className="avatars-right">
          <img src="/avatar_2.png" alt="Customer" className="test-avatar tr" />
          <img src="/avatar_1.png" alt="Customer" className="test-avatar cr" />
          <img src="/avatar_2.png" alt="Customer" className="test-avatar br" />
          <img src="/avatar_1.png" alt="Customer" className="test-avatar mr" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
