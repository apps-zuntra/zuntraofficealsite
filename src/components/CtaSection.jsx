import React from 'react';
import { Link } from 'react-router-dom';
import LightRays from './LightRays';
import './CtaSection.css';

const CtaSection = () => {
  return (
    <section className="cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="cta-container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="cta-eyebrow">START BUILDING</span>
        <h2 className="cta-title">HAVE SOMETHING<br />WORTH BUILDING?</h2>
        <p className="cta-subtitle">Let's turn the idea into something real.</p>
        <Link to="/contact" className="cta-btn">
          LET'S BUILD IT &rarr;
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
