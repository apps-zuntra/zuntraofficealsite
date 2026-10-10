import React from 'react';
import './ImpactStatsSection.css';

const ImpactStatsSection = () => {
  return (
    <section className="impact-stats-section">
      <div className="impact-stats-container">
        <div className="impact-grid">
          <div className="impact-item">
            <h2>20+</h2>
            <h4>Products Built</h4>
            <p>Across B2B and consumer markets</p>
          </div>
          <div className="impact-item">
            <h2>9+</h2>
            <h4>Industries</h4>
            <p>From healthcare to government</p>
          </div>
          <div className="impact-item">
            <h2>40+</h2>
            <h4>Technologies</h4>
            <p>AI, cloud, robotics, mobile</p>
          </div>
          <div className="impact-item">
            <h2>6+</h2>
            <h4>Ventures Launched</h4>
            <p>Fully built and deployed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;
