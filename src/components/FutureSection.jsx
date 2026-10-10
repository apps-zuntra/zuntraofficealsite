import React from 'react';
import './FutureSection.css';

const FutureSection = () => {
  return (
    <section className="future-section section-padding container">
      <div className="text-center mb-5">
        <h2 className="section-title">DO NOT JUST BUILD FOR THE FUTURE.<br/>BUILD THE FUTURE.</h2>
      </div>

      <div className="grid-cols-4 future-grid">
        <div className="future-card card-purple-light">
           <h4>Web Frameworks</h4>
           <p>Next.js, SvelteKit, Nuxt</p>
        </div>
        <div className="future-card card-blue-light">
           <h4>Databases</h4>
           <p>PostgreSQL, Redis, MongoDB</p>
        </div>
        <div className="future-card card-green-light">
           <h4>Analytics</h4>
           <p>Real-time insights</p>
        </div>
        <div className="future-card card-orange-light">
           <h4>Edge Functions</h4>
           <p>Global execution</p>
        </div>
        <div className="future-card card-pink-light">
           <h4>Storage</h4>
           <p>Object & Blob</p>
        </div>
        <div className="future-card card-red-light">
           <h4>Machine Learning</h4>
           <p>Runners & Models</p>
        </div>
        <div className="future-card card-gray-light">
           <h4>Security</h4>
           <p>DDoS protection</p>
        </div>
        <div className="future-card card-dark">
           <h4>And much more...</h4>
           <p>Explore the docs</p>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
