import React from 'react';
import './Section4.css';

const Section4 = () => {
  return (
    <section className="offers-section container">
      <div className="offers-title-wrapper">
        <h2 className="offers-title display-font">
          What we <span className="highlight-mint">can</span><br />
          <span className="underline-gold">offer</span> you!
        </h2>
        
        <svg className="offers-curvy-line" width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 350 C 150 350, 150 50, 400 50 C 650 50, 650 200, 800 100" stroke="#FF6B6B" strokeWidth="2" fill="none" />
        </svg>
      </div>
      
      <div className="offers-table">
        <div className="offer-row">
          <div className="offer-category body-font">Office of multiple interest content</div>
          <div className="offer-name display-font">Colaborative & partnership</div>
          <div className="offer-arrow">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        
        <div className="offer-row">
          <div className="offer-category body-font">The hanger US Air force digital experimental</div>
          <div className="offer-name display-font">We talk about our weight</div>
          <div className="offer-arrow">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
        
        <div className="offer-row">
          <div className="offer-category body-font">Delta faucet content, social, digital</div>
          <div className="offer-name display-font">
            Piloting digital confidence
          </div>
          <div className="offer-arrow">
            <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6H58M58 6L53 1M58 6L53 11" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
