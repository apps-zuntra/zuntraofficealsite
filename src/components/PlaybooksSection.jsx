import React from 'react';
import './PlaybooksSection.css';

const PlaybooksSection = () => {
  return (
    <section className="playbooks-section section-padding container">
      <div className="mb-5">
        <h2 className="section-title">PLAYBOOKS BUILT <br/>FOR YOUR GOALS.</h2>
      </div>

      <div className="grid-cols-2">
        <div className="playbook-card">
          <div className="playbook-content">
            <span className="badge badge-blue">Frontend</span>
            <h3>Configuring custom domains for your Next.js app</h3>
            <p>Learn how to connect a custom domain to your Vercel project with minimal friction.</p>
            <a href="#" className="link-arrow mt-4">Read Guide &rarr;</a>
          </div>
          <div className="playbook-visual visual-1">
             <div className="card-mockup">
                <div className="mockup-header"></div>
                <div className="mockup-body">
                   <div className="line line-short"></div>
                   <div className="line line-long"></div>
                   <div className="line line-medium"></div>
                </div>
             </div>
          </div>
        </div>
        
        <div className="playbook-card">
          <div className="playbook-content">
            <span className="badge badge-purple">Backend</span>
            <h3>Setting up a serverless database with Redis</h3>
            <p>A complete guide to provisioning, connecting, and scaling Redis on our platform.</p>
            <a href="#" className="link-arrow mt-4">Read Guide &rarr;</a>
          </div>
          <div className="playbook-visual visual-2">
             <div className="card-mockup">
                <div className="mockup-header"></div>
                <div className="mockup-body">
                   <div className="line line-short"></div>
                   <div className="line line-long"></div>
                   <div className="line line-medium"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaybooksSection;
