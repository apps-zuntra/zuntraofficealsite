import React from 'react';
import VenturesShowcase from './VenturesShowcase';
import './VenturesSection.css';

const VenturesSection = () => {
  return (
    <section className="ventures-section">
      <div className="ventures-header-container">
        <span className="ventures-pill">Ventures & Products</span>
        <h2 className="ventures-title">From intelligence to implementation.</h2>
        <p className="ventures-subtitle">
          We turn real world problems into focused digital products that make everyday experiences simpler, smarter, and more connected. Each venture is built around a clear need, combining thoughtful product design, technology, and intelligent systems to create solutions people can actually use.
        </p>
      </div>
      <VenturesShowcase />
    </section>
  );
};

export default VenturesSection;
