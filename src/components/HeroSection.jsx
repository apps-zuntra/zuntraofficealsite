import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import HeroRainbowWave from './HeroRainbowWave';

const heroCardsData = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    number: "01",
    title: "01. AI Products & Platforms",
    description: "Building AI powered products, SaaS platforms, and intelligent systems that solve real business problems and create scalable digital experiences.",
    link: "/build/ai-software-automation"
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    number: "02",
    title: "02. Robotics & Smart Systems",
    description: "Developing intelligent robotics and smart systems that bring automation, efficiency, and real time decision making to complex business environments.",
    link: "/verticals/robotics"
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    number: "03",
    title: "03. Media Technology & Content",
    description: "Creating technology driven media platforms and content systems that simplify creation, manage digital assets, and connect businesses with their audiences.",
    link: "/verticals/media"
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    number: "04",
    title: "04. Art, Culture & Digital Experiences",
    description: "Using technology to transform art and culture through digital platforms, immersive experiences, intelligent solutions, and new ways to preserve and share creative heritage.",
    link: "/verticals/art-culture"
  }
];

const HeroSection = () => {
  return (
    <div className="hero-outer-wrapper">
      {/* Full-width Animated Rainbow Wave Background matching header-bg.png */}
      <div className="hero-rainbow-layer" aria-hidden="true">
        <HeroRainbowWave />
      </div>

      <div className="hero-top-banner">
        <div className="hero-content-wrapper">
          <div className="hero-title-container">
            <h1 className="hero-main-title">
              Real problems. Intelligent solutions. Technology built to make businesses move forward.
            </h1>
          </div>

          <p className="hero-main-subtitle">
            Zuntra builds AI powered products, digital platforms, and technology solutions that turn business challenges into scalable opportunities. We take ideas from problem to product and from product to impact.
          </p>

          <div className="hero-main-actions">
            <Link to="/build/ai-software-automation" className="btn-primary-hero">EXPLORE ZUNTRA →</Link>
            <Link to="/contact" className="btn-outline-hero">SEE OUR WORK →</Link>
          </div>
        </div>
      </div>

      {/* 4 Feature Cards Section overlapping the wave background */}
      <section className="hero-cards-section">
        <div className="hero-cards-box">
          <div className="hero-cards-grid">
            {heroCardsData.map((card, idx) => (
              <div key={idx} className="hero-card-item">
                <div className="hero-card-icon-box">
                  {card.icon}
                </div>
                <h3 className="hero-card-title">{card.title}</h3>
                <p className="hero-card-description">{card.description}</p>
                <Link to={card.link} className="hero-card-learn-btn">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
