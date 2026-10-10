import React from 'react';

const EmergingTechIcon = ({ icon }) => {
  switch (icon) {
    case 'branch':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="3" width="6" height="6" rx="1.5" />
          <rect x="3" y="15" width="6" height="6" rx="1.5" />
          <rect x="15" y="15" width="6" height="6" rx="1.5" />
          <path d="M12 9v3m0 0H6v3m6-3h6v3" />
        </svg>
      );
    case 'user':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case 'chat':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case 'search':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'trend':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case 'grid':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case 'cart':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    default:
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
};

const EmergingTechnologySection = ({ data, build }) => {
  const currentBuild = build || {};
  const currentData = data || currentBuild.emergingTech;
  if (!currentData || !currentData.items || currentData.items.length === 0) return null;

  const eyebrow = currentData.eyebrow || 'EMERGING TECHNOLOGY';
  const fullTitle = currentData.title || `${currentData.titleBold || ''} ${currentData.titleLight || ''}`.trim() || 'Built for what comes next.';
  const titleParts = fullTitle.split(' ');
  const titleBold = currentData.titleBold || titleParts.slice(0, 3).join(' ');
  const titleLight = currentData.titleLight || titleParts.slice(3).join(' ');

  return (
    <section className="emerging-tech-section">
      <div className="container">
        {/* Header */}
        <div className="emerging-tech-header">
          {eyebrow && (
            <span className="emerging-tech-eyebrow">{eyebrow}</span>
          )}
          <h2 className="emerging-tech-main-title">
            <span className="et-title-bold">{titleBold} </span>
            <span className="et-title-light">{titleLight}</span>
          </h2>
        </div>

        {/* 4-Column x 2-Row Bordered Grid */}
        <div className="emerging-tech-grid-card">
          <div className="emerging-tech-cards-grid">
            {currentData.items.map((item, idx) => (
              <div key={idx} className="emerging-tech-item-col">
                <div className="emerging-item-icon">
                  <EmergingTechIcon icon={item.icon} />
                </div>
                <h4 className="emerging-item-title">{item.title}</h4>
                <p className="emerging-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergingTechnologySection;
