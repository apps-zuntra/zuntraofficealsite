import React from 'react';
import { Link } from 'react-router-dom';
import './RealProblemsSection.css';

const RealProblemsSection = () => {
  return (
    <section className="real-problems-section">
      <div className="container">
        <h2 className="rp-title">REAL PROBLEMS.<br />REAL SYSTEMS.<br />REAL IMPACT.</h2>

        <div className="rp-grid">
          {/* Card 1 */}
          <div className="rp-card">
            <div className="rp-card-visual">
              <div className="rp-target" style={{borderColor: '#2563eb'}}>
                <div className="rp-target-inner" style={{backgroundColor: '#2563eb'}}></div>
              </div>
            </div>
            <div className="rp-card-content">
              <div className="rp-category" style={{color: '#2563eb'}}>HEALTHCARE &middot; AI</div>
              <h3 className="rp-name">Healthcare Platform</h3>
              
              <div className="rp-problem-solution">
                <div className="rp-label">PROBLEM</div>
                <p>Manual triage processes causing patient wait times exceeding industry benchmarks.</p>
                
                <div className="rp-label mt">SOLUTION</div>
                <p>AI-powered intake and routing system with real-time capacity optimization.</p>
              </div>

              <div className="rp-footer">
                <span className="rp-metric" style={{color: '#2563eb'}}>[Placeholder metric]</span>
                <Link to="/industry/healthcare" className="rp-link">READ THE CASE &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rp-card">
            <div className="rp-card-visual">
              <div className="rp-target" style={{borderColor: '#ea580c'}}>
                <div className="rp-target-inner" style={{backgroundColor: '#ea580c'}}></div>
              </div>
            </div>
            <div className="rp-card-content">
              <div className="rp-category" style={{color: '#ea580c'}}>LOGISTICS &middot; DATA</div>
              <h3 className="rp-name">Logistics Operator</h3>
              
              <div className="rp-problem-solution">
                <div className="rp-label">PROBLEM</div>
                <p>Fragmented fleet and routing data making operational visibility near-impossible.</p>
                
                <div className="rp-label mt">SOLUTION</div>
                <p>Unified data platform with real-time telemetry and predictive routing.</p>
              </div>

              <div className="rp-footer">
                <span className="rp-metric" style={{color: '#ea580c'}}>[Placeholder metric]</span>
                <Link to="/industry/logistics" className="rp-link">READ THE CASE &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rp-card">
            <div className="rp-card-visual">
              <div className="rp-target" style={{borderColor: '#7c3aed'}}>
                <div className="rp-target-inner" style={{backgroundColor: '#7c3aed'}}></div>
              </div>
            </div>
            <div className="rp-card-content">
              <div className="rp-category" style={{color: '#7c3aed'}}>EDUCATION &middot; PRODUCT</div>
              <h3 className="rp-name">EdTech Startup</h3>
              
              <div className="rp-problem-solution">
                <div className="rp-label">PROBLEM</div>
                <p>Generic content delivery failing to retain learners beyond the first week.</p>
                
                <div className="rp-label mt">SOLUTION</div>
                <p>Adaptive learning engine with personalized content sequencing.</p>
              </div>

              <div className="rp-footer">
                <span className="rp-metric" style={{color: '#7c3aed'}}>[Placeholder metric]</span>
                <Link to="/industry/education" className="rp-link">READ THE CASE &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealProblemsSection;
