import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        
        {/* Wavy line connecting Section 2 to Section 4 */}
        <div style={{ position: 'relative' }}>
          <svg className="wavy-line" style={{ top: '100px', left: '20%', width: '100px', height: '800px', overflow: 'visible' }}>
            <path d="M50 0 C0 200, 100 400, 50 800" stroke="#FCA5A5" strokeWidth="2" fill="none" strokeDasharray="5 5" />
          </svg>
          
          <Section2 />
          <Section3 />
        </div>
        
        <Section4 />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
