import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Section4.css';

const Section4 = () => {
  return (
    <section className="offers-section container">
      <h2 className="offers-title display-font">
        <span className="highlight-mint">What we can</span><br />
        <span className="underline-gold">offer you!</span>
      </h2>
      
      <div className="offers-table">
        <div className="offer-row">
          <div className="offer-category body-font">Office of multiple interest content</div>
          <div className="offer-name display-font">Colaborative & partnership</div>
          <div className="offer-arrow"><ArrowRight size={24} /></div>
        </div>
        
        <div className="offer-row">
          <div className="offer-category body-font">The hanger US Air force digital experimental</div>
          <div className="offer-name display-font">We talk about our weight</div>
          <div className="offer-arrow"><ArrowRight size={24} /></div>
        </div>
        
        <div className="offer-row">
          <div className="offer-category body-font">Delta faucet content, social, digital</div>
          <div className="offer-name display-font">
            Piloting digital confidence
            <div className="confidence-badge">✨</div>
          </div>
          <div className="offer-arrow"><ArrowRight size={24} /></div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
