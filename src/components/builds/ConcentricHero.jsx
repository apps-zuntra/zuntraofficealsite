import React from 'react';
import { Link } from 'react-router-dom';

// Mini visual helpers for the floating cards
const SparklineVisual = ({ color = 'blue' }) => {
  const strokeColor = color === 'purple' ? '#a855f7' : color === 'teal' ? '#10b981' : '#3b82f6';
  const fillColor = color === 'purple' ? 'rgba(168, 85, 247, 0.12)' : color === 'teal' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(59, 130, 246, 0.12)';

  return (
    <svg width="100%" height="48" viewBox="0 0 160 48" fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sparkGrad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fillColor} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M 5 38 Q 35 34 55 35 T 95 24 T 125 18 T 155 8 L 155 48 L 5 48 Z"
        fill={`url(#sparkGrad-${color})`}
      />
      <path
        d="M 5 38 Q 35 34 55 35 T 95 24 T 125 18 T 155 8"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="155" cy="8" r="3" fill={strokeColor} />
    </svg>
  );
};

const DonutVisual = ({ color = 'blue' }) => {
  const strokeColor = color === 'purple' ? '#8b5cf6' : '#2563eb';
  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      <circle
        cx="22"
        cy="22"
        r="16"
        fill="none"
        stroke="#f1f5f9"
        strokeWidth="6"
      />
      <circle
        cx="22"
        cy="22"
        r="16"
        fill="none"
        stroke={strokeColor}
        strokeWidth="6"
        strokeDasharray="75 100"
        strokeLinecap="round"
        transform="rotate(-90 22 22)"
      />
    </svg>
  );
};

const BarVisual = ({ color = 'blue' }) => {
  const bars = [
    { height: 16, opacity: 0.8 },
    { height: 22, opacity: 0.85 },
    { height: 20, opacity: 0.9 },
    { height: 30, opacity: 0.95 },
    { height: 26, opacity: 0.9 },
    { height: 36, opacity: 1 },
    { height: 32, opacity: 0.95 },
    { height: 42, opacity: 1 }
  ];

  return (
    <svg width="100%" height="48" viewBox="0 0 140 48" fill="none">
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={10 + i * 15}
          y={48 - bar.height}
          width="9"
          height={bar.height}
          rx="2.5"
          fill="#3b82f6"
          fillOpacity={bar.opacity}
        />
      ))}
    </svg>
  );
};

const ConcentricHero = ({ build }) => {
  if (!build) return null;

  const cards = (build.floatingCards && build.floatingCards.length > 0)
    ? build.floatingCards
    : (build.heroMockup?.items || []).slice(0, 5).map((item, idx) => ({
        category: item.desc || 'System',
        title: item.name,
        type: idx % 2 === 0 ? 'sparkline' : 'bar',
        color: item.dotColor === 'purple' ? 'purple' : 'blue'
      }));

  // Card placement classes and dot colors
  const cardConfigs = [
    { posClass: 'pos-tl', anchorType: 'right', dotClass: 'dot-blue' },
    { posClass: 'pos-tc', anchorType: 'bottom', dotClass: 'dot-blue' },
    { posClass: 'pos-tr', anchorType: 'left', dotClass: 'dot-purple' },
    { posClass: 'pos-bl', anchorType: 'right', dotClass: 'dot-blue' },
    { posClass: 'pos-br', anchorType: 'left', dotClass: 'dot-purple' }
  ];

  return (
    <section className="concentric-hero-section">
      {/* Concentric Circular Background Orbits */}
      <div className="concentric-orbits-wrapper" aria-hidden="true">
        <div className="concentric-orbit orbit-1"></div>
        <div className="concentric-orbit orbit-2"></div>
        <div className="concentric-orbit orbit-3"></div>
        <div className="concentric-orbit orbit-4"></div>
        <div className="concentric-orbit orbit-5"></div>
        <div className="concentric-orbit orbit-6"></div>
        <div className="concentric-hero-glow"></div>
      </div>

      {/* Floating Orbit Cards (Desktop Positioned) */}
      {cards.map((card, idx) => {
        const config = cardConfigs[idx] || cardConfigs[0];
        return (
          <div
            key={idx}
            className={`hero-floating-card-wrapper ${config.posClass}`}
          >
            {config.anchorType === 'left' && (
              <span className={`orbit-anchor-dot anchor-left ${config.dotClass}`}></span>
            )}

            <div className="hero-floating-card">
              <div className="card-cat-label">{card.category}</div>
              <div className="card-main-title">{card.title}</div>
              <div className="card-visual-box">
                {card.type === 'donut' ? (
                  <DonutVisual color={card.color} />
                ) : card.type === 'bar' ? (
                  <BarVisual color={card.color} />
                ) : (
                  <SparklineVisual color={card.color} />
                )}
              </div>
            </div>

            {config.anchorType === 'right' && (
              <span className={`orbit-anchor-dot anchor-right ${config.dotClass}`}></span>
            )}
            {config.anchorType === 'bottom' && (
              <span className={`orbit-anchor-dot anchor-bottom ${config.dotClass}`}></span>
            )}
          </div>
        );
      })}

      {/* Hero Center Text Content */}
      <div className="concentric-hero-center">
        {build.eyebrowPill && (
          <div className="hero-pill-badge">{build.eyebrowPill}</div>
        )}

        <h1 className="concentric-hero-title">
          {build.heroTitle || build.title}
        </h1>

        <p className="concentric-hero-subtitle">
          {build.heroSubtitle || build.subtitle}
        </p>

        <div className="concentric-hero-buttons">
          <Link
            to={build.whatWeBuild?.cards?.[0]?.link || `#what-we-build`}
            className="btn-hero-primary"
          >
            {build.heroButtons?.[0]?.text || `Explore ${build.name}`}
          </Link>
          <Link
            to="/contact"
            className="btn-hero-secondary"
          >
            {build.heroButtons?.[1]?.text || "Let's talk"}
          </Link>
        </div>
      </div>

      {/* Mobile Card Grid for Smaller Screens */}
      {cards.length > 0 && (
        <div className="concentric-hero-cards-mobile" style={{ display: 'none' }}>
          {cards.map((card, idx) => (
            <div key={idx} className="hero-floating-card">
              <div className="card-cat-label">{card.category}</div>
              <div className="card-main-title">{card.title}</div>
              <div className="card-visual-box">
                {card.type === 'donut' ? (
                  <DonutVisual color={card.color} />
                ) : card.type === 'bar' ? (
                  <BarVisual color={card.color} />
                ) : (
                  <SparklineVisual color={card.color} />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ConcentricHero;
