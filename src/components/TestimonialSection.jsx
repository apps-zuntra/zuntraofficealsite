import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="quote-icon">“</div>
          <blockquote className="testimonial-quote">
            “We believe the future belongs to technology that solves real problems. Our vision is to turn bold ideas into intelligent products, build solutions that create meaningful impact, and make advanced technology useful, accessible, and built for the real world.”
          </blockquote>
          <div className="testimonial-author">
            <div className="author-name">Building what matters. Creating what comes next.</div>
            <div className="author-role">Zuntra Digital &nbsp;•&nbsp; Vision 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
