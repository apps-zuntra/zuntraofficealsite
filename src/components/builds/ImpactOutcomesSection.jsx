import React from 'react';

const OutcomeIcon = ({ name }) => {
  switch (name) {
    case 'connected':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="6" height="6" rx="1.5" />
          <rect x="15" y="15" width="6" height="6" rx="1.5" />
          <path d="M6 9v3a3 3 0 0 0 3 3h6" />
        </svg>
      );
    case 'personalized':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'measurable':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'scalable':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

const ImpactOutcomesSection = ({ data }) => {
  if (!data || !data.items) return null;

  return (
    <section className="impact-outcomes-section">
      <div className="container">
        <div className="impact-outcomes-header">
          {data.eyebrow && (
            <span className="impact-eyebrow">{data.eyebrow}</span>
          )}
          <h2 className="impact-main-title">
            <span className="impact-title-bold">{data.titleBold}</span>
            <span className="impact-title-light">{data.titleLight}</span>
          </h2>
        </div>

        <div className="impact-outcomes-card">
          <div className="impact-outcomes-grid">
            {data.items.map((item, idx) => (
              <div key={idx} className="impact-outcome-col">
                <div className="outcome-icon-box">
                  <OutcomeIcon name={item.icon} />
                </div>
                <h4 className="outcome-col-title">{item.title}</h4>
                <p className="outcome-col-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactOutcomesSection;
