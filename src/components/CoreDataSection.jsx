import React from 'react';
import './CoreDataSection.css';

const CoreDataSection = () => {
  return (
    <section className="core-section">
      <div className="container core-grid">
        <div className="core-content">
          <h2 className="section-title text-light">DATA TRANSFERS<br/>AT THE CORE.</h2>
          <p className="core-desc">
            Connect to any data source effortlessly. Build powerful integrations with minimal code.
          </p>
          <ul className="core-list">
            <li><span className="dot dot-blue"></span> High throughput, low latency</li>
            <li><span className="dot dot-purple"></span> Secure connections</li>
            <li><span className="dot dot-green"></span> End-to-end encryption</li>
            <li><span className="dot dot-orange"></span> Automatic failover</li>
            <li><span className="dot dot-pink"></span> Global edge network</li>
          </ul>
        </div>
        <div className="core-visual flex-center">
           <div className="hexagon-graphic">
              {/* Complex graphic placeholder */}
              <div className="hex-center"></div>
              <div className="hex-node node-1"></div>
              <div className="hex-node node-2"></div>
              <div className="hex-node node-3"></div>
              <div className="hex-node node-4"></div>
              <div className="hex-node node-5"></div>
              <div className="hex-node node-6"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CoreDataSection;
