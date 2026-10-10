import React from 'react';
import './PlatformSection.css';

const PlatformSection = () => {
  return (
    <section className="platform-section section-padding container">
      <div className="text-center mb-5">
        <h2 className="section-title">ONE PLATFORM FOR MANY POSSIBILITIES.</h2>
      </div>

      <div className="platform-grid">
        <div className="platform-list">
          <div className="platform-item active">
             <h4>Web Applications</h4>
          </div>
          <div className="platform-item">
             <h4>Serverless Functions</h4>
          </div>
          <div className="platform-item">
             <h4>Edge Computing</h4>
          </div>
          <div className="platform-item">
             <h4>Databases</h4>
          </div>
        </div>
        
        <div className="platform-preview">
          <div className="preview-card">
            <div className="preview-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="preview-body">
               <h3>Optimized for the modern web</h3>
               <p>Deploy your frontend frameworks seamlessly.</p>
               <div className="grid-cols-2 mt-4">
                  <div className="framework-box">React</div>
                  <div className="framework-box">Vue</div>
                  <div className="framework-box">Next.js</div>
                  <div className="framework-box">Svelte</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
