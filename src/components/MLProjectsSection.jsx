import React from 'react';
import './MLProjectsSection.css';

const MLProjectsSection = () => {
  return (
    <section className="ml-section section-padding container">
      <div className="text-center mb-5">
        <h2 className="section-title">PRE-TRAINED RUNNERS <br/> FOR ML PROJECTS.</h2>
      </div>

      <div className="grid-cols-3 ml-grid">
        <div className="ml-card card-orange">
          <div className="ml-card-head">
             <span className="ml-icon ml-icon-orange"></span>
             <h4>TensorFlow</h4>
          </div>
          <p>Deploy models instantly with optimized runners.</p>
        </div>
        
        <div className="ml-card card-purple">
          <div className="ml-card-head">
             <span className="ml-icon ml-icon-purple"></span>
             <h4>PyTorch</h4>
          </div>
          <p>Seamless integration with PyTorch workflows.</p>
        </div>
        
        <div className="ml-card card-green">
          <div className="ml-card-head">
             <span className="ml-icon ml-icon-green"></span>
             <h4>Scikit-Learn</h4>
          </div>
          <p>Run classic ML algorithms at scale.</p>
        </div>
        
        <div className="ml-card card-blue">
          <div className="ml-card-head">
             <span className="ml-icon ml-icon-blue"></span>
             <h4>Hugging Face</h4>
          </div>
          <p>Direct support for transformers and NLP models.</p>
        </div>
        
        <div className="ml-card card-pink">
          <div className="ml-card-head">
             <span className="ml-icon ml-icon-pink"></span>
             <h4>Keras</h4>
          </div>
          <p>High-level neural networks APIs ready to run.</p>
        </div>
        
        <div className="ml-card card-red">
          <div className="ml-card-head">
             <span className="ml-icon ml-icon-red"></span>
             <h4>Jupyter</h4>
          </div>
          <p>Interactive notebooks in the cloud.</p>
        </div>
      </div>
    </section>
  );
};

export default MLProjectsSection;
