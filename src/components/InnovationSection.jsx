import React from 'react';
import './InnovationSection.css';

const innovationData = [
  {
    title: 'Incubation',
    desc: 'From idea to validated product with Zuntra\'s resources, expertise and network behind you.',
    color: '#8b5cf6'
  },
  {
    title: 'Venture Building',
    desc: 'Co-founding and building technology companies from the ground up through a structured build program.',
    color: '#3b82f6'
  },
  {
    title: 'Accelerators',
    desc: 'Rapid-growth programs for early-stage technology companies with real product traction.',
    color: '#10b981'
  },
  {
    title: 'University Partnerships',
    desc: 'Research collaborations and talent pipelines with leading academic institutions.',
    color: '#f97316'
  },
  {
    title: 'Hackathons',
    desc: 'High-intensity innovation events that turn problems into working prototypes in days.',
    color: '#f59e0b'
  },
  {
    title: 'Innovation Labs',
    desc: 'Dedicated R&D environments for emerging technology exploration — AI, robotics, spatial and beyond.',
    color: '#db2777'
  }
];

const InnovationSection = () => {
  return (
    <section className="innovation-section">
      <div className="container">
        <span className="inno-eyebrow">INNOVATION</span>
        <h2 className="inno-title">DON'T JUST BUILD<br />FOR THE FUTURE.<br />BUILD THE FUTURE.</h2>

        <div className="inno-grid">
          {innovationData.map((item, index) => (
            <div className="inno-card" key={index}>
              <div className="inno-icon" style={{backgroundColor: item.color}}></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
