import React from 'react';
import './InfrastructureSection.css';

const InfrastructureSection = () => {
  return (
    <section className="infra-section section-padding container">
      <div className="text-center mb-5">
        <h2 className="section-title">
          Don't build your infrastructure.<br />Program it.
        </h2>
        <p className="section-subtitle">
          From infrastructure to endpoints. Develop, test, and deploy directly to production.
        </p>
      </div>

      <div className="infra-grid">
        <div className="infra-card">
          <div className="infra-card-header">
             <span className="dot dot-red"></span>
             <span className="dot dot-yellow"></span>
             <span className="dot dot-green"></span>
          </div>
          <div className="infra-card-body">
             <code>
               $ o.deploy --prod<br/>
               <span className="text-muted">Deploying project to production...</span><br/>
               <span className="text-green">Success!</span> Project is live.
             </code>
          </div>
        </div>
        
        <div className="infra-info">
          <h3>Serverless deployments just got easier.</h3>
          <p>Instantly deploy your applications with zero configuration. We handle the scaling so you can focus on code.</p>
          <a href="#" className="link-arrow">Learn more &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
