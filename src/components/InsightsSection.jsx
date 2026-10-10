import React from 'react';
import { Link } from 'react-router-dom';
import ThreeDCard from './ThreeDCard';
import './InsightsSection.css';

const insightsData = [
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    category: 'Industry Insight',
    categoryClass: 'cat-green',
    title: 'Building enterprise technology systems that survive contact with reality',
    date: 'Sep 05, 2026',
    readTime: '8 min',
    link: '/company/research-insights/building-useful-ai'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    category: 'AI & Intelligence',
    categoryClass: 'cat-orange',
    title: 'What makes an AI agent actually useful in a production environment?',
    date: 'Aug 28, 2026',
    readTime: '6 min',
    link: '/company/research-insights/idea-to-production'
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    category: 'Industry Insight',
    categoryClass: 'cat-pink',
    title: 'Automation and the knowledge worker: what actually changes and what stays the same',
    date: 'Aug 12, 2026',
    readTime: '5 min',
    link: '/company/research-insights/next-in-venture-building'
  }
];

const InsightsSection = () => {
  return (
    <section className="insights-section">
      <div className="insights-container">
        <div className="insights-header">
          <h2 className="insights-title">Insights</h2>
          <Link to="/company/research-insights" className="btn-view-all">
            View all
          </Link>
        </div>

        <div className="insights-grid">
          {insightsData.map((item, index) => (
            <ThreeDCard key={index} className="insight-3d-wrapper">
              <Link to={item.link} className="insight-card">
                <div className="insight-image-wrapper">
                  <img src={item.image} alt={item.title} className="insight-image" />
                </div>
                <div className="insight-card-content">
                  <div className={`insight-cat ${item.categoryClass}`}>{item.category}</div>
                  <h3 className="insight-card-title">{item.title}</h3>
                  <div className="insight-footer">
                    <span className="insight-meta">{item.date} &middot; {item.readTime}</span>
                  </div>
                </div>
              </Link>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
