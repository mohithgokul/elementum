import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section container fade-in-up">
      <div className="testimonials-header">
        <h2 className="testimonials-title display-font">
          <span className="highlight-mint">What</span> our customer<br />
          says <span className="underline-gold">About Us</span>
        </h2>
      </div>
      
      <div className="testimonials-content">
        <div className="avatars-left">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop" alt="Customer" className="test-avatar tl" />
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" alt="Customer" className="test-avatar cl" />
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop" alt="Customer" className="test-avatar bl" />
          <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop" alt="Customer" className="test-avatar ml" />
        </div>
        
        <div className="quote-box">
          <div className="quote-mark left">“</div>
          <p className="quote-text body-font">
            Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable
          </p>
          <div className="quote-mark right">”</div>
        </div>
        
        <div className="avatars-right">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" alt="Customer" className="test-avatar tr" />
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" alt="Customer" className="test-avatar cr" />
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" alt="Customer" className="test-avatar br" />
          <img src="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=150&h=150&fit=crop" alt="Customer" className="test-avatar mr" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
