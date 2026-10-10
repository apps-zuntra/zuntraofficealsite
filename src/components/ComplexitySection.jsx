import React, { useState } from 'react';
import './ComplexitySection.css';

const industries = [
  { id: 'education', label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance' },
  { id: 'government', label: 'Government' },
  { id: 'retail', label: 'Retail' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'media', label: 'Media' },
  { id: 'technology', label: 'Technology' },
  { id: 'logistics', label: 'Logistics' }
];

const ComplexitySection = () => {
  const [activeInd, setActiveInd] = useState('education');

  return (
    <section className="complexity-section">
      <div className="container">
        
        <div className="cx-layout">
          {/* Left / Title */}
          <div className="cx-left">
            <h2 className="cx-title">BUILT FOR<br />REAL-WORLD<br />COMPLEXITY.</h2>
          </div>

          {/* Center / Sidebar */}
          <div className="cx-sidebar">
            {industries.map(ind => (
              <button 
                key={ind.id}
                className={`cx-tab ${activeInd === ind.id ? 'active' : ''}`}
                onClick={() => setActiveInd(ind.id)}
              >
                {ind.label}
                {activeInd === ind.id && <span className="cx-arrow">&rarr;</span>}
              </button>
            ))}
          </div>

          {/* Right / Content */}
          <div className="cx-content">
            {activeInd === 'education' && (
              <div className="cx-panel">
                <span className="cx-cat">EDUCATION</span>
                <h3>Building for education that scales.</h3>
                <p>Adaptive learning platforms, student information systems, institutional analytics, and AI-driven personalization for educators and learners.</p>
                <a href="/industry/education" className="btn-explore-outline">
                  EXPLORE EDUCATION &rarr;
                </a>
              </div>
            )}
            
            {activeInd !== 'education' && (
              <div className="cx-panel">
                <span className="cx-cat">{industries.find(i => i.id === activeInd)?.label.toUpperCase()}</span>
                <h3>Building for {industries.find(i => i.id === activeInd)?.label.toLowerCase()} that scales.</h3>
                <p>Tailored infrastructure, specialized data models, and intelligent workflows built for the unique regulatory and operational realities of this sector.</p>
                <a href={`/industry/${activeInd}`} className="btn-explore-outline">
                  EXPLORE {industries.find(i => i.id === activeInd)?.label.toUpperCase()} &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplexitySection;
