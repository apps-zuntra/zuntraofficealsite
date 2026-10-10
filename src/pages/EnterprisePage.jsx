import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { enterpriseData, sharedEnterpriseData } from '../data/enterpriseData';
import ThreeDCard from '../components/ThreeDCard';
import Particles from '../components/Particles';
import SideGridLines from '../components/SideGridLines';
import HorizontalGridLine from '../components/HorizontalGridLine';
import HeroDotsBackground from '../components/ui/HeroDotsBackground';
import './EnterprisePage.css';

// 3D Faceted Geodesic Sphere for Environment Cards
const FacetedSphere = ({ baseColor, sphereId }) => (
  <svg viewBox="0 0 44 44" width="38" height="38" className="ent-facet-sphere">
    <defs>
      <radialGradient id={`sphere-base-${sphereId}`} cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
        <stop offset="40%" stopColor={baseColor} stopOpacity="0.9" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.65" />
      </radialGradient>
      <filter id={`sphere-shadow-${sphereId}`} x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.3" />
      </filter>
    </defs>

    {/* Base shaded circular sphere */}
    <circle cx="22" cy="22" r="18" fill={`url(#sphere-base-${sphereId})`} filter={`url(#sphere-shadow-${sphereId})`} />

    {/* Facets - Triangular mesh creating authentic 3D geodesic / faceted look */}
    {/* Top / Specular Highlight facets */}
    <polygon points="22,4 17,13 27,13" fill="#ffffff" fillOpacity="0.45" />
    <polygon points="17,13 7,14 12,22" fill="#ffffff" fillOpacity="0.35" />
    <polygon points="17,13 12,22 22,22" fill="#ffffff" fillOpacity="0.25" />
    <polygon points="22,4 7,14 17,13" fill="#ffffff" fillOpacity="0.4" />
    <polygon points="22,4 27,13 37,14" fill="#ffffff" fillOpacity="0.3" />
    <polygon points="27,13 22,22 32,22" fill="#ffffff" fillOpacity="0.2" />
    <polygon points="27,13 32,22 37,14" fill="#ffffff" fillOpacity="0.15" />

    {/* Mid-tone center facets */}
    <polygon points="22,22 12,22 16,31" fill="#000000" fillOpacity="0.1" />
    <polygon points="22,22 16,31 28,31" fill="#000000" fillOpacity="0.16" />
    <polygon points="22,22 28,31 32,22" fill="#000000" fillOpacity="0.22" />

    {/* Darker shadow / underside facets */}
    <polygon points="12,22 7,30 16,31" fill="#000000" fillOpacity="0.25" />
    <polygon points="16,31 22,40 28,31" fill="#000000" fillOpacity="0.32" />
    <polygon points="16,31 7,30 22,40" fill="#000000" fillOpacity="0.38" />
    <polygon points="32,22 28,31 37,30" fill="#000000" fillOpacity="0.3" />
    <polygon points="28,31 22,40 37,30" fill="#000000" fillOpacity="0.42" />

    {/* Specular sheen ring */}
    <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" />
  </svg>
);

const EnterprisePage = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const currentSlug = propSlug || paramSlug || 'talvivo';
  const data = enterpriseData[currentSlug] || enterpriseData['talvivo'];

  const [activeCapIdx, setActiveCapIdx] = useState(5); // Default to Innovation & Venture Building
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);
  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0); // 01 is selected by default
  const step0Ref = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const stepRefs = [step0Ref, step1Ref, step2Ref];

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      stepRefs.forEach((ref, idx) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const dist = Math.abs(itemCenter - viewportCenter);
          if (dist < minDistance) {
            minDistance = dist;
            closestIdx = idx;
          }
        }
      });

      setActiveShowcaseIdx(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) {
    return <Navigate to="/enterprise/talvivo" replace />;
  }

  const {
    hero,
    statement,
    whatWeBuild,
    enterpriseAi,
    inPractice,
    productEngineering,
    automation,
    journey
  } = data;

  const industriesList = data.industriesList || sharedEnterpriseData.industriesList;
  const useCases = data.useCases || sharedEnterpriseData.useCases;

  const {
    productsGrid,
    dedicatedCapabilities,
    proofOfWork,
    caseStudies,
    insights,
    closingCta,
    oneEcosystem
  } = sharedEnterpriseData;

  return (
    <div className="enterprise-page">
      <SideGridLines />
      <HorizontalGridLine />
      {/* =========================================================
          1. HERO SECTION (Boxed Grid with Animated Dot Matrix)
          ========================================================= */}
      <section className="ent-hero-section">
        <div className="ent-hero-grid-box">
          <HeroDotsBackground />
          <div className="ent-hero-grid">

            {/* Left Content */}
            <div className="ent-hero-content">
              <h1 className="ent-hero-title">
                <span className="ent-title-line ent-title-purple">
                  {hero.titlePart1 || "Build the systems your"}
                </span>
                <span className="ent-title-line ent-title-dark">
                  {hero.titlePart2 || "business needs next."}
                </span>
              </h1>
              <p className="ent-hero-subtitle">
                {hero.subtitle}
              </p>

              <div className="ent-hero-cta-group">
                <a href={hero.primaryBtnLink || "#contact"} className="ent-btn-talk">
                  {hero.primaryBtnText || "Talk to Talvio"}
                </a>
                <a href={hero.secondaryBtnLink || "#what-we-build"} className="ent-btn-explore">
                  {hero.secondaryBtnText || "Explore Talvio"}
                </a>
              </div>
            </div>

            {/* Right Interactive Node Architecture Visual */}
            <div className="ent-hero-visual">
              <div className="ent-diagram-box">
                {/* SVG Connections with calibrated 820x600 topology and animated pulses */}
                <svg className="ent-diagram-svg" viewBox="0 0 820 600" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <filter id="ent-glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="ent-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="ent-hub-arc-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="35%" stopColor="#ec4899" />
                      <stop offset="70%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id="ent-hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000000" floodOpacity="0.06" />
                    </filter>
                  </defs>

                  {/* Vertical Faint Guide Lines Behind Columns */}
                  <line x1="130" y1="30" x2="130" y2="570" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
                  <line x1="200" y1="30" x2="200" y2="570" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
                  <line x1="430" y1="30" x2="430" y2="570" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
                  <line x1="535" y1="30" x2="535" y2="570" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
                  <line x1="720" y1="30" x2="720" y2="570" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />

                  {/* Dashed Connecting Lines (Straight Only) */}
                  {/* Strategy right to Design/Data vertical dashed guide */}
                  <line x1="205" y1="163" x2="430" y2="163" stroke="#93c5fd" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.85" />
                  {/* Design bottom to Data top */}
                  <line x1="430" y1="132" x2="430" y2="288" stroke="#93c5fd" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.85" />
                  <circle cx="430" cy="163" r="3" fill="#ffffff" stroke="#60a5fa" strokeWidth="1.5" />

                  {/* Solid Flow Paths (100% Straight Segments with 90° Clean Corners) */}
                  {/* 1. Strategy to Hub: Straight down -> right -> down into Hub top port */}
                  <path d="M 130 186 V 232 A 15 15 0 0 0 145 247 H 185 A 15 15 0 0 1 200 262" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 2. Hub to Design: Straight up from Hub -> right into Design left port */}
                  <path d="M 234 276 V 125 A 15 15 0 0 1 249 110 H 344" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 3. Hub to Data: 100% Straight horizontal line */}
                  <path d="M 248 310 H 350" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 4. Design to AI: Straight right -> down into AI top port */}
                  <path d="M 516 110 H 705 A 15 15 0 0 1 720 125 V 178" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 5. Data to AI (Upper Fork): Straight right -> 90° UP straight into AI bottom port */}
                  <path d="M 510 310 H 702 A 18 18 0 0 0 720 292 V 222" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 6. Data to Engineering (Lower Fork): From horizontal stem -> 90° DOWN straight into Engineering top port */}
                  <path d="M 702 310 A 18 18 0 0 1 720 328 V 378" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 7. Hub to Automation: Straight down from Hub -> left -> down into Automation top port */}
                  <path d="M 200 358 V 373 A 15 15 0 0 1 185 388 H 145 A 15 15 0 0 0 130 403 V 410" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 8. Automation to Deploy: Straight right -> down -> right into Deploy left port */}
                  <path d="M 200 432 H 407 A 15 15 0 0 1 422 447 V 507 A 15 15 0 0 0 437 522 H 437" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 9. Deploy to Engineering: Straight right -> UP straight into Engineering bottom port */}
                  <path d="M 633 522 H 705 A 15 15 0 0 0 720 507 V 422" stroke="url(#ent-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Central Hub SVG Elements */}
                  <g className="ent-hub-svg-group">
                    {/* Dotted Orbit */}
                    <circle cx="200" cy="310" r="48" stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.65" />

                    {/* White Hub Disc */}
                    <circle cx="200" cy="310" r="36" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" filter="url(#ent-hub-shadow)" />

                    {/* Multi-Color Gradient Arc on Upper Rim */}
                    <path d="M 165 316 A 36 36 0 0 1 221 280" stroke="url(#ent-hub-arc-grad)" strokeWidth="3.2" strokeLinecap="round" fill="none" />

                    {/* Hub Text */}
                    <text x="200" y="314" textAnchor="middle" dominantBaseline="middle" fill="#0f172a" fontSize="11" fontWeight="800" letterSpacing="0.08em" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace">ZUNTRA</text>

                    {/* Hub Ports on Orbit */}
                    <circle cx="200" cy="262" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="234" cy="276" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="248" cy="310" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="200" cy="358" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  </g>

                  {/* Connector Terminal Ports */}
                  {/* Strategy Ports */}
                  <circle cx="130" cy="186" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="205" cy="163" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Design Ports */}
                  <circle cx="344" cy="110" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="430" cy="132" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="516" cy="110" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Data Ports */}
                  <circle cx="350" cy="310" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="430" cy="288" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="510" cy="310" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* AI Ports */}
                  <circle cx="720" cy="178" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="720" cy="222" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Automation Ports */}
                  <circle cx="130" cy="410" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="200" cy="432" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Engineering Ports */}
                  <circle cx="720" cy="378" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="720" cy="422" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Deploy Ports */}
                  <circle cx="437" cy="522" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="633" cy="522" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Animated Traveling Pulses (Synchronized to Straight Paths) */}
                  <circle r="3.2" fill="#3b82f6" filter="url(#ent-glow)">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M 130 186 V 232 A 15 15 0 0 0 145 247 H 185 A 15 15 0 0 1 200 262" />
                  </circle>
                  <circle r="3.2" fill="#8b5cf6" filter="url(#ent-glow)">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 234 276 V 125 A 15 15 0 0 1 249 110 H 344" />
                  </circle>
                  <circle r="3.2" fill="#f97316" filter="url(#ent-glow)">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 248 310 H 350" />
                  </circle>
                  <circle r="3.2" fill="#10b981" filter="url(#ent-glow)">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 516 110 H 705 A 15 15 0 0 1 720 125 V 178" />
                  </circle>
                  <circle r="3.2" fill="#10b981" filter="url(#ent-glow)">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 510 310 H 702 A 18 18 0 0 0 720 292 V 222" />
                  </circle>
                  <circle r="3.2" fill="#f59e0b" filter="url(#ent-glow)">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 702 310 A 18 18 0 0 1 720 328 V 378" />
                  </circle>
                  <circle r="3.2" fill="#ec4899" filter="url(#ent-glow)">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 200 358 V 373 A 15 15 0 0 1 185 388 H 145 A 15 15 0 0 0 130 403 V 410" />
                  </circle>
                  <circle r="3.2" fill="#3b82f6" filter="url(#ent-glow)">
                    <animateMotion dur="4.4s" repeatCount="indefinite" path="M 200 432 H 407 A 15 15 0 0 1 422 447 V 507 A 15 15 0 0 0 437 522 H 437" />
                  </circle>
                  <circle r="3.2" fill="#f59e0b" filter="url(#ent-glow)">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 633 522 H 705 A 15 15 0 0 0 720 507 V 422" />
                  </circle>
                </svg>

                {/* Central ZUNTRA Interactive Hover Target */}
                <div className="ent-hub-center" title="ZUNTRA Core Architecture" />

                {/* 1. Strategy Node Card */}
                <div className="ent-flow-card ent-card-strategy">
                  <div className="ent-card-icon-box box-strategy">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#3b82f6" strokeWidth="2.2" fill="none">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" fill="#3b82f6" />
                    </svg>
                  </div>
                  <span className="ent-card-label">Strategy</span>
                  <span className="ent-card-corner-dot dot-strategy" />
                </div>

                {/* 2. Design Node Card */}
                <div className="ent-flow-card ent-card-design">
                  <div className="ent-card-icon-box box-design">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#8b5cf6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19l7-7 3 3-7 7-3-3z" />
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                      <circle cx="11" cy="11" r="2" fill="#8b5cf6" />
                    </svg>
                  </div>
                  <span className="ent-card-label">Design</span>
                  <span className="ent-card-corner-dot dot-design" />
                </div>

                {/* 3. AI Node Card */}
                <div className="ent-flow-card ent-card-ai">
                  <div className="ent-card-icon-box box-ai">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#10b981" strokeWidth="2.2" fill="none">
                      <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="rgba(16, 185, 129, 0.25)" />
                    </svg>
                  </div>
                  <span className="ent-card-label">AI</span>
                  <span className="ent-card-corner-dot dot-ai" />
                </div>

                {/* 4. Data Node Card */}
                <div className="ent-flow-card ent-card-data">
                  <div className="ent-card-icon-box box-data">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#f97316" strokeWidth="2.2" fill="none">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <span className="ent-card-label">Data</span>
                  <span className="ent-card-corner-dot dot-data" />
                </div>

                {/* 5. Automation Node Card */}
                <div className="ent-flow-card ent-card-automation">
                  <div className="ent-card-icon-box box-automation">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#ec4899" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(236, 72, 153, 0.25)" />
                    </svg>
                  </div>
                  <span className="ent-card-label">Automation</span>
                  <span className="ent-card-corner-dot dot-automation" />
                </div>

                {/* 6. Engineering Node Card */}
                <div className="ent-flow-card ent-card-engineering">
                  <div className="ent-card-icon-box box-engineering">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#f59e0b" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="ent-card-label">Engineering</span>
                  <span className="ent-card-corner-dot dot-engineering" />
                </div>

                {/* 7. Deploy Node Card */}
                <div className="ent-flow-card ent-card-deploy">
                  <div className="ent-card-icon-box box-deploy">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="#3b82f6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="rgba(59, 130, 246, 0.2)" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                  <span className="ent-card-label">Deploy</span>
                  <span className="ent-card-corner-dot dot-deploy" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <HorizontalGridLine />

      {/* =========================================================
          2. BIG STATEMENT SECTION (Light)
          ========================================================= */}
      <section className="ent-statement-section">
        <div className="ent-container">
          <div className="ent-statement-content">
            <h2 className="ent-statement-title">{statement.title}</h2>
            <div className="ent-statement-bar"></div>
            <p className="ent-statement-desc">{statement.subtitle}</p>
          </div>
        </div>
      </section>
      <HorizontalGridLine />

      {/* =========================================================
          3. WHAT WE BUILD SECTION (Light)
          ========================================================= */}
      <section id="what-we-build" className="ent-build-section">
        <div className="ent-container">
          <span className="ent-section-tag">{whatWeBuild.tag}</span>
          <h2 className="ent-build-main-title">{whatWeBuild.title}</h2>

          <div className="ent-build-grid">
            {/* Left Capabilities Tabs */}
            <div className="ent-capabilities-list">
              {whatWeBuild.capabilities.map((cap, cIdx) => (
                <div
                  key={cap.id}
                  className={`ent-cap-item ${activeCapIdx === cIdx ? 'active' : ''}`}
                  onClick={() => setActiveCapIdx(cIdx)}
                >
                  <div className="ent-cap-header">
                    <h4>{cap.title}</h4>
                    <span className="ent-cap-arrow">&rarr;</span>
                  </div>
                  {activeCapIdx === cIdx && (
                    <p className="ent-cap-desc">{cap.description}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Right Graph Visual */}
            <div className="ent-build-visual-col">
              <div className="ent-build-graph-card">
                <div className="ent-bubbles-canvas">
                  {/* SVG Connection Lines from Center (VENTURE) to Outer Bubbles */}
                  <svg className="ent-bubble-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Venture (50, 56) to Idea (22, 38) */}
                    <line x1="50" y1="56" x2="22" y2="38" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="2,2" />
                    {/* Venture (50, 56) to Build (66, 22) */}
                    <line x1="50" y1="56" x2="66" y2="22" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="2,2" />
                    {/* Venture (50, 56) to Launch (82, 45) */}
                    <line x1="50" y1="56" x2="82" y2="45" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="2,2" />
                    {/* Venture (50, 56) to Incubate (20, 72) */}
                    <line x1="50" y1="56" x2="20" y2="72" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="2,2" />
                    {/* Venture (50, 56) to Scale (82, 75) */}
                    <line x1="50" y1="56" x2="82" y2="75" stroke="#d1d5db" strokeWidth="0.8" strokeDasharray="2,2" />
                  </svg>

                  {/* Bubble Nodes */}
                  <div className="ent-bubble-node bubble-idea" style={{ left: '22%', top: '38%' }}>
                    <span>IDEA</span>
                  </div>
                  <div className="ent-bubble-node bubble-build" style={{ left: '66%', top: '22%' }}>
                    <span>BUILD</span>
                  </div>
                  <div className="ent-bubble-node bubble-launch" style={{ left: '82%', top: '45%' }}>
                    <span>LAUNCH</span>
                  </div>
                  <div className="ent-bubble-node bubble-venture" style={{ left: '50%', top: '56%' }}>
                    <span>VENTURE</span>
                  </div>
                  <div className="ent-bubble-node bubble-incubate" style={{ left: '20%', top: '72%' }}>
                    <span>INCUBATE</span>
                  </div>
                  <div className="ent-bubble-node bubble-scale" style={{ left: '82%', top: '75%' }}>
                    <span>SCALE</span>
                  </div>
                </div>

                <div className="ent-graph-bottom-info">
                  <span className="ent-graph-cap-tag">CAPABILITY</span>
                  <h4 className="ent-graph-cap-title">{whatWeBuild.capabilities[activeCapIdx]?.title}</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <HorizontalGridLine />

      {/* =========================================================
          4. ENTERPRISE AI SECTION (Dark)
          ========================================================= */}
      <section className="ent-ai-section">
        <div className="ent-container">
          <div className="ent-ai-grid">

            {/* Left Info */}
            <div className="ent-ai-info">
              <span className="ent-purple-tag">{enterpriseAi.tag}</span>
              <h2 className="ent-ai-title">{enterpriseAi.title}</h2>
              <p className="ent-ai-subtitle">{enterpriseAi.subtitle}</p>
              <p className="ent-ai-desc">{enterpriseAi.description}</p>
              <button className="ent-btn ent-btn-outline-purple">
                {enterpriseAi.btnText} <span className="ent-btn-arrow">&rarr;</span>
              </button>
            </div>

            {/* Right Interactive Node Architecture Diagram (Replaces old vertical stack) */}
            <div className="ent-ai-visual-col">
              <div className="ent-ai-diagram-card">
                {/* SVG Connections with calibrated 820x600 topology and straight orthogonal lines */}
                <svg className="ent-ai-diagram-svg" viewBox="0 0 820 600" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <filter id="ent-ai-glow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                    <linearGradient id="ent-ai-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="ent-ai-hub-arc-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="35%" stopColor="#ec4899" />
                      <stop offset="70%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <filter id="ent-ai-hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#000000" floodOpacity="0.25" />
                    </filter>
                  </defs>

                  {/* Vertical Faint Guide Lines Behind Columns */}
                  <line x1="130" y1="30" x2="130" y2="570" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                  <line x1="200" y1="30" x2="200" y2="570" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                  <line x1="430" y1="30" x2="430" y2="570" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                  <line x1="535" y1="30" x2="535" y2="570" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />
                  <line x1="720" y1="30" x2="720" y2="570" stroke="#334155" strokeWidth="1" strokeDasharray="3 4" opacity="0.35" />

                  {/* Dashed Connecting Lines (Straight Only) */}
                  {/* Role Context right to Candidate Data/Assessments vertical dashed line */}
                  <line x1="205" y1="163" x2="430" y2="163" stroke="#818cf8" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.65" />
                  {/* Candidate Data bottom to Assessments top */}
                  <line x1="430" y1="132" x2="430" y2="288" stroke="#818cf8" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.65" />
                  <circle cx="430" cy="163" r="3" fill="#ffffff" stroke="#60a5fa" strokeWidth="1.5" />

                  {/* Solid Flow Paths (100% Straight Segments with 90° Clean Corners) */}
                  {/* 1. Role Context to Hub: Straight down -> right -> down into Hub top port */}
                  <path d="M 130 186 V 232 A 15 15 0 0 0 145 247 H 185 A 15 15 0 0 1 200 262" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 2. Hub to Candidate Data: Straight up from Hub -> right into Candidate Data left port */}
                  <path d="M 234 276 V 125 A 15 15 0 0 1 249 110 H 344" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 3. Hub to Assessments: 100% Straight horizontal line */}
                  <path d="M 248 310 H 350" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 4. Candidate Data to AI Models: Straight right -> down into AI Models top port */}
                  <path d="M 516 110 H 705 A 15 15 0 0 1 720 125 V 178" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 5. Assessments to AI Models (Upper Fork): Straight right -> 90° UP straight into AI Models bottom port */}
                  <path d="M 510 310 H 702 A 18 18 0 0 0 720 292 V 222" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 6. Assessments to Workflows (Lower Fork): From horizontal stem -> 90° DOWN straight into Workflows top port */}
                  <path d="M 702 310 A 18 18 0 0 1 720 328 V 378" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 7. Hub to Evaluation: Straight down from Hub -> left -> down into Evaluation top port */}
                  <path d="M 200 358 V 373 A 15 15 0 0 1 185 388 H 145 A 15 15 0 0 0 130 403 V 410" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 8. Evaluation to Hiring Decisions: Straight right -> down -> right into Hiring Decisions left port */}
                  <path d="M 200 432 H 407 A 15 15 0 0 1 422 447 V 507 A 15 15 0 0 0 437 522 H 437" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* 9. Hiring Decisions to Workflows: Straight right -> UP straight into Workflows bottom port */}
                  <path d="M 633 522 H 705 A 15 15 0 0 0 720 507 V 422" stroke="url(#ent-ai-line-gradient)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Central Hub SVG Elements */}
                  <g className="ent-hub-svg-group">
                    {/* Dotted Orbit */}
                    <circle cx="200" cy="310" r="48" stroke="#475569" strokeWidth="1.2" strokeDasharray="3 3" fill="none" opacity="0.65" />

                    {/* Hub Disc */}
                    <circle cx="200" cy="310" r="36" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" filter="url(#ent-ai-hub-shadow)" />

                    {/* Multi-Color Gradient Arc on Upper Rim */}
                    <path d="M 165 316 A 36 36 0 0 1 221 280" stroke="url(#ent-ai-hub-arc-grad)" strokeWidth="3.2" strokeLinecap="round" fill="none" />

                    {/* Hub Text */}
                    <text x="200" y="314" textAnchor="middle" dominantBaseline="middle" fill="#0f172a" fontSize="10" fontWeight="800" letterSpacing="0.06em" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace">
                      {data.name?.toUpperCase() || "TALVIVO"}
                    </text>

                    {/* Hub Ports on Orbit */}
                    <circle cx="200" cy="262" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="234" cy="276" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="248" cy="310" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                    <circle cx="200" cy="358" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  </g>

                  {/* Connector Terminal Ports */}
                  {/* Role Context Ports */}
                  <circle cx="130" cy="186" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="205" cy="163" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Candidate Data Ports */}
                  <circle cx="344" cy="110" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="430" cy="132" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="516" cy="110" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Assessments Ports */}
                  <circle cx="350" cy="310" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="430" cy="288" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="510" cy="310" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* AI Models Ports */}
                  <circle cx="720" cy="178" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="720" cy="222" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Evaluation Ports */}
                  <circle cx="130" cy="410" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="200" cy="432" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Workflows Ports */}
                  <circle cx="720" cy="378" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="720" cy="422" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Hiring Decisions Ports */}
                  <circle cx="437" cy="522" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />
                  <circle cx="633" cy="522" r="3.8" fill="#ffffff" stroke="#60a5fa" strokeWidth="2" />

                  {/* Animated Traveling Pulses (Synchronized to Straight Paths) */}
                  <circle r="3.2" fill="#3b82f6" filter="url(#ent-ai-glow)">
                    <animateMotion dur="3.4s" repeatCount="indefinite" path="M 130 186 V 232 A 15 15 0 0 0 145 247 H 185 A 15 15 0 0 1 200 262" />
                  </circle>
                  <circle r="3.2" fill="#8b5cf6" filter="url(#ent-ai-glow)">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 234 276 V 125 A 15 15 0 0 1 249 110 H 344" />
                  </circle>
                  <circle r="3.2" fill="#f97316" filter="url(#ent-ai-glow)">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 248 310 H 350" />
                  </circle>
                  <circle r="3.2" fill="#10b981" filter="url(#ent-ai-glow)">
                    <animateMotion dur="4.0s" repeatCount="indefinite" path="M 516 110 H 705 A 15 15 0 0 1 720 125 V 178" />
                  </circle>
                  <circle r="3.2" fill="#10b981" filter="url(#ent-ai-glow)">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 510 310 H 702 A 18 18 0 0 0 720 292 V 222" />
                  </circle>
                  <circle r="3.2" fill="#f59e0b" filter="url(#ent-ai-glow)">
                    <animateMotion dur="3.2s" repeatCount="indefinite" path="M 702 310 A 18 18 0 0 1 720 328 V 378" />
                  </circle>
                  <circle r="3.2" fill="#ec4899" filter="url(#ent-ai-glow)">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 200 358 V 373 A 15 15 0 0 1 185 388 H 145 A 15 15 0 0 0 130 403 V 410" />
                  </circle>
                  <circle r="3.2" fill="#3b82f6" filter="url(#ent-ai-glow)">
                    <animateMotion dur="4.4s" repeatCount="indefinite" path="M 200 432 H 407 A 15 15 0 0 1 422 447 V 507 A 15 15 0 0 0 437 522 H 437" />
                  </circle>
                  <circle r="3.2" fill="#f59e0b" filter="url(#ent-ai-glow)">
                    <animateMotion dur="3.6s" repeatCount="indefinite" path="M 633 522 H 705 A 15 15 0 0 0 720 507 V 422" />
                  </circle>
                </svg>

                {/* Central Hub Hover Target */}
                <div className="ent-hub-center" title={`${data.name || "TalVivo"} Core AI`} />

                {/* 1. Card 0: Role Context / Top-Left */}
                {enterpriseAi.layers?.[0] && (
                  <div className="ent-flow-card ent-card-strategy" title={enterpriseAi.layers[0].detail}>
                    <div className="ent-card-icon-box box-strategy">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#3b82f6" strokeWidth="2.2" fill="none">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" fill="#3b82f6" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[0].name}</span>
                    <span className="ent-card-corner-dot dot-strategy" />
                  </div>
                )}

                {/* 2. Card 1: Candidate Data / Top-Center */}
                {enterpriseAi.layers?.[1] && (
                  <div className="ent-flow-card ent-card-design" title={enterpriseAi.layers[1].detail}>
                    <div className="ent-card-icon-box box-design">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#8b5cf6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                        <circle cx="11" cy="11" r="2" fill="#8b5cf6" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[1].name}</span>
                    <span className="ent-card-corner-dot dot-design" />
                  </div>
                )}

                {/* 3. Card 2: AI Models / Top-Right */}
                {enterpriseAi.layers?.[2] && (
                  <div className="ent-flow-card ent-card-ai" title={enterpriseAi.layers[2].detail}>
                    <div className="ent-card-icon-box box-ai">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#10b981" strokeWidth="2.2" fill="none">
                        <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="rgba(16, 185, 129, 0.25)" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[2].name}</span>
                    <span className="ent-card-corner-dot dot-ai" />
                  </div>
                )}

                {/* 4. Card 3: Assessments / Center */}
                {enterpriseAi.layers?.[3] && (
                  <div className="ent-flow-card ent-card-data" title={enterpriseAi.layers[3].detail}>
                    <div className="ent-card-icon-box box-data">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#f97316" strokeWidth="2.2" fill="none">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[3].name}</span>
                    <span className="ent-card-corner-dot dot-data" />
                  </div>
                )}

                {/* 5. Card 4: Evaluation / Bottom-Left */}
                {enterpriseAi.layers?.[4] && (
                  <div className="ent-flow-card ent-card-automation" title={enterpriseAi.layers[4].detail}>
                    <div className="ent-card-icon-box box-automation">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#ec4899" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(236, 72, 153, 0.25)" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[4].name}</span>
                    <span className="ent-card-corner-dot dot-automation" />
                  </div>
                )}

                {/* 6. Card 5: Workflows / Middle-Right */}
                {enterpriseAi.layers?.[5] && (
                  <div className="ent-flow-card ent-card-engineering" title={enterpriseAi.layers[5].detail}>
                    <div className="ent-card-icon-box box-engineering">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#f59e0b" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[5].name}</span>
                    <span className="ent-card-corner-dot dot-engineering" />
                  </div>
                )}

                {/* 7. Card 6: Hiring Decisions / Bottom-Center */}
                {enterpriseAi.layers?.[6] && (
                  <div className="ent-flow-card ent-card-deploy" title={enterpriseAi.layers[6].detail}>
                    <div className="ent-card-icon-box box-deploy">
                      <svg viewBox="0 0 24 24" width="14" height="14" stroke="#3b82f6" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="rgba(59, 130, 246, 0.2)" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>
                    </div>
                    <span className="ent-card-label">{enterpriseAi.layers[6].name}</span>
                    <span className="ent-card-corner-dot dot-deploy" />
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
      <HorizontalGridLine />

      {/* =========================================================
          5, 6, 7. ENTERPRISE SHOWCASE (Sticky Scroll Experience)
          ========================================================= */}
      <section className="ent-sticky-showcase-section">
        <div className="ent-container">
          <div className="ent-sticky-showcase-grid">

            {/* Left Column: Scrolling Texts */}
            <div className="ent-sticky-steps-col">

              {/* Step 1: Candidate Data to Decision */}
              <div
                ref={step0Ref}
                className={`ent-sticky-step-item ${activeShowcaseIdx === 0 ? 'is-active' : ''}`}
                onClick={() => {
                  step0Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <div className="ent-step-content-inner">
                  <h2 className="ent-sticky-title">{inPractice.title}</h2>
                  <p className="ent-sticky-desc">{inPractice.description}</p>
                  <button className="ent-btn ent-btn-outline-dark">
                    {inPractice.btnText}
                  </button>
                </div>

                {/* Mobile-only visual fallback */}
                <div className="ent-mobile-visual">
                  <div className="ent-mock-dark-window">
                    <div className="ent-mock-top-bar">
                      <div className="ent-mock-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <span className="ent-mock-win-title">{inPractice.mockup.windowTitle}</span>
                    </div>

                    <div className="ent-mock-body">
                      <div className="ent-user-prompt-box">
                        <span className="ent-prompt-lbl">USER</span>
                        <p className="ent-prompt-text">"{inPractice.mockup.userPrompt}"</p>
                      </div>

                      <div className="ent-searching-indicator">
                        <span className="ent-pulse-dot"></span>
                        <span>{inPractice.mockup.statusText}</span>
                      </div>

                      <div className="ent-mock-projects-list">
                        {inPractice.mockup.projects.map((proj, pIdx) => (
                          <div className="ent-mock-proj-card" key={pIdx}>
                            <div className="ent-proj-info">
                              <span className="ent-proj-accent-bar" style={{ backgroundColor: '#f97316' }}></span>
                              <div>
                                <h5>{proj.name}</h5>
                                <p>{proj.dep}</p>
                              </div>
                            </div>
                            <span className={`ent-status-pill ${proj.statusType}`}>{proj.status}</span>
                          </div>
                        ))}
                      </div>

                      <div className="ent-mock-rec-box">
                        <span className="ent-rec-tag">RECOMMENDED ACTIONS</span>
                        <ul>
                          {inPractice.mockup.recommendations.map((rec, rIdx) => (
                            <li key={rIdx}>
                              <span className="ent-rec-arrow">&rarr;</span> {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Hiring Need to Hiring System */}
              <div
                ref={step1Ref}
                className={`ent-sticky-step-item ${activeShowcaseIdx === 1 ? 'is-active' : ''}`}
                onClick={() => {
                  step1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <div className="ent-step-content-inner">
                  <h2 className="ent-sticky-title">{productEngineering.title}</h2>
                  <p className="ent-sticky-desc">{productEngineering.description}</p>
                  <button className="ent-btn ent-btn-solid-dark">
                    {productEngineering.btnText}
                  </button>
                </div>

                {/* Mobile-only visual fallback */}
                <div className="ent-mobile-visual">
                  <div className="ent-ide-window">
                    <div className="ent-ide-top-bar">
                      <div className="ent-mock-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="ent-ide-search-bar"></div>
                    </div>

                    <div className="ent-ide-main">
                      <div className="ent-ide-sidebar">
                        {productEngineering.mockup.tabs.map((tab, tIdx) => (
                          <div
                            key={tIdx}
                            className={`ent-ide-tab-btn ${tab === productEngineering.mockup.activeTab ? 'active' : ''}`}
                          >
                            {tab}
                          </div>
                        ))}
                      </div>

                      <div className="ent-ide-content">
                        <div className="ent-ide-badge-row">
                          <span className="ent-progress-pill">{productEngineering.mockup.statusLabel}</span>
                        </div>

                        <div className="ent-ide-bars-list">
                          <div className="ent-task-bar-row">
                            <div className="ent-bar-strip" style={{ backgroundColor: '#3b82f6' }}></div>
                            <div className="ent-bar-skeleton">
                              <div className="ent-skeleton-line" style={{ width: '40%' }}></div>
                            </div>
                            <div className="ent-task-status-pill green">
                              <span className="ent-status-fill"></span>
                            </div>
                          </div>

                          <div className="ent-task-bar-row">
                            <div className="ent-bar-strip" style={{ backgroundColor: '#3b82f6' }}></div>
                            <div className="ent-bar-skeleton">
                              <div className="ent-skeleton-line" style={{ width: '55%' }}></div>
                            </div>
                            <div className="ent-task-status-pill green">
                              <span className="ent-status-fill"></span>
                            </div>
                          </div>

                          <div className="ent-task-bar-row">
                            <div className="ent-bar-strip" style={{ backgroundColor: '#10b981' }}></div>
                            <div className="ent-bar-skeleton">
                              <div className="ent-skeleton-line" style={{ width: '70%' }}></div>
                            </div>
                            <div className="ent-task-status-pill purple">
                              <span className="ent-status-fill"></span>
                            </div>
                          </div>

                          <div className="ent-task-bar-row">
                            <div className="ent-bar-strip" style={{ backgroundColor: '#f97316' }}></div>
                            <div className="ent-bar-skeleton">
                              <div className="ent-skeleton-line" style={{ width: '55%' }}></div>
                            </div>
                            <div className="ent-task-status-pill purple">
                              <span className="ent-status-fill"></span>
                            </div>
                          </div>

                          <div className="ent-task-bar-row">
                            <div className="ent-bar-strip" style={{ backgroundColor: '#4b5563' }}></div>
                            <div className="ent-bar-skeleton">
                              <div className="ent-skeleton-line" style={{ width: '65%' }}></div>
                            </div>
                            <div className="ent-task-status-pill muted">
                              <span className="ent-status-fill"></span>
                            </div>
                          </div>

                          <div className="ent-task-bar-row">
                            <div className="ent-bar-strip" style={{ backgroundColor: '#ec4899' }}></div>
                            <div className="ent-bar-skeleton">
                              <div className="ent-skeleton-line" style={{ width: '45%' }}></div>
                            </div>
                            <div className="ent-task-status-pill muted">
                              <span className="ent-status-fill"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Connect the Hiring Workflow */}
              <div
                ref={step2Ref}
                className={`ent-sticky-step-item ${activeShowcaseIdx === 2 ? 'is-active' : ''}`}
                onClick={() => {
                  step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <div className="ent-step-content-inner">
                  <h2 className="ent-sticky-title">{automation.title}</h2>
                  <p className="ent-sticky-desc">{automation.description}</p>
                  <button className="ent-btn ent-btn-solid-dark">
                    {automation.btnText} <span className="ent-btn-arrow">&rarr;</span>
                  </button>
                </div>

                {/* Mobile-only visual fallback */}
                <div className="ent-mobile-visual">
                  <div className="ent-connector-canvas">
                    <div className="ent-connectors-grid">
                      {(automation.connectors || [
                        { name: 'CRM', color: '#8b5cf6' },
                        { name: 'ERP', color: '#3b82f6' },
                        { name: 'Email', color: '#10b981' },
                        { name: 'Forms', color: '#f97316' },
                        { name: 'Analytics', color: '#f59e0b' },
                        { name: 'DB', color: '#ec4899' }
                      ]).map((conn, cIdx) => (
                        <div className="ent-connector-card" key={cIdx}>
                          <span className="ent-conn-accent" style={{ backgroundColor: conn.color }}></span>
                          <span className="ent-conn-name">{conn.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="ent-flow-lines-wrapper">
                      <svg className="ent-flow-svg" viewBox="0 0 100 24" preserveAspectRatio="none">
                        <line x1="20" y1="0" x2="50" y2="24" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2,2" />
                        <line x1="50" y1="0" x2="50" y2="24" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2,2" />
                        <line x1="80" y1="0" x2="50" y2="24" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2,2" />
                      </svg>
                    </div>

                    <div className="ent-intel-hub-box">
                      <span>INTELLIGENCE</span>
                    </div>

                    <div className="ent-connector-vert-line"></div>

                    <div className="ent-action-pill-box">
                      <span>AUTOMATION ACTION</span>
                    </div>

                    <div className="ent-connector-vert-line"></div>

                    <div className="ent-outcome-pill-box">
                      <span>OUTCOME</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Pinned Sticky Visual Container (Desktop) */}
            <div className="ent-sticky-visual-col">
              <div className="ent-sticky-visual-wrapper">
                <div className="ent-sticky-visual-box">

                  {/* Slide 0: AI in Practice Terminal */}
                  <div className={`ent-mockup-slide ${activeShowcaseIdx === 0 ? 'active' : activeShowcaseIdx > 0 ? 'prev' : 'next'}`}>
                    <div className="ent-mock-dark-window">
                      <div className="ent-mock-top-bar">
                        <div className="ent-mock-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <span className="ent-mock-win-title">{inPractice.mockup.windowTitle}</span>
                      </div>

                      <div className="ent-mock-body">
                        <div className="ent-user-prompt-box">
                          <span className="ent-prompt-lbl">USER</span>
                          <p className="ent-prompt-text">"{inPractice.mockup.userPrompt}"</p>
                        </div>

                        <div className="ent-searching-indicator">
                          <span className="ent-pulse-dot"></span>
                          <span>{inPractice.mockup.statusText}</span>
                        </div>

                        <div className="ent-mock-projects-list">
                          {inPractice.mockup.projects.map((proj, pIdx) => (
                            <div className="ent-mock-proj-card" key={pIdx}>
                              <div className="ent-proj-info">
                                <span className="ent-proj-accent-bar" style={{ backgroundColor: '#f97316' }}></span>
                                <div>
                                  <h5>{proj.name}</h5>
                                  <p>{proj.dep}</p>
                                </div>
                              </div>
                              <span className={`ent-status-pill ${proj.statusType}`}>{proj.status}</span>
                            </div>
                          ))}
                        </div>

                        <div className="ent-mock-rec-box">
                          <span className="ent-rec-tag">RECOMMENDED ACTIONS</span>
                          <ul>
                            {inPractice.mockup.recommendations.map((rec, rIdx) => (
                              <li key={rIdx}>
                                <span className="ent-rec-arrow">&rarr;</span> {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 1: IDE Pipeline */}
                  <div className={`ent-mockup-slide ${activeShowcaseIdx === 1 ? 'active' : activeShowcaseIdx > 1 ? 'prev' : 'next'}`}>
                    <div className="ent-ide-window">
                      <div className="ent-ide-top-bar">
                        <div className="ent-mock-dots">
                          <span className="dot dot-red"></span>
                          <span className="dot dot-yellow"></span>
                          <span className="dot dot-green"></span>
                        </div>
                        <div className="ent-ide-search-bar"></div>
                      </div>

                      <div className="ent-ide-main">
                        <div className="ent-ide-sidebar">
                          {productEngineering.mockup.tabs.map((tab, tIdx) => (
                            <div
                              key={tIdx}
                              className={`ent-ide-tab-btn ${tab === productEngineering.mockup.activeTab ? 'active' : ''}`}
                            >
                              {tab}
                            </div>
                          ))}
                        </div>

                        <div className="ent-ide-content">
                          <div className="ent-ide-badge-row">
                            <span className="ent-progress-pill">{productEngineering.mockup.statusLabel}</span>
                          </div>

                          <div className="ent-ide-bars-list">
                            <div className="ent-task-bar-row">
                              <div className="ent-bar-strip" style={{ backgroundColor: '#3b82f6' }}></div>
                              <div className="ent-bar-skeleton">
                                <div className="ent-skeleton-line" style={{ width: '40%' }}></div>
                              </div>
                              <div className="ent-task-status-pill green">
                                <span className="ent-status-fill"></span>
                              </div>
                            </div>

                            <div className="ent-task-bar-row">
                              <div className="ent-bar-strip" style={{ backgroundColor: '#3b82f6' }}></div>
                              <div className="ent-bar-skeleton">
                                <div className="ent-skeleton-line" style={{ width: '55%' }}></div>
                              </div>
                              <div className="ent-task-status-pill green">
                                <span className="ent-status-fill"></span>
                              </div>
                            </div>

                            <div className="ent-task-bar-row">
                              <div className="ent-bar-strip" style={{ backgroundColor: '#10b981' }}></div>
                              <div className="ent-bar-skeleton">
                                <div className="ent-skeleton-line" style={{ width: '70%' }}></div>
                              </div>
                              <div className="ent-task-status-pill purple">
                                <span className="ent-status-fill"></span>
                              </div>
                            </div>

                            <div className="ent-task-bar-row">
                              <div className="ent-bar-strip" style={{ backgroundColor: '#f97316' }}></div>
                              <div className="ent-bar-skeleton">
                                <div className="ent-skeleton-line" style={{ width: '55%' }}></div>
                              </div>
                              <div className="ent-task-status-pill purple">
                                <span className="ent-status-fill"></span>
                              </div>
                            </div>

                            <div className="ent-task-bar-row">
                              <div className="ent-bar-strip" style={{ backgroundColor: '#4b5563' }}></div>
                              <div className="ent-bar-skeleton">
                                <div className="ent-skeleton-line" style={{ width: '65%' }}></div>
                              </div>
                              <div className="ent-task-status-pill muted">
                                <span className="ent-status-fill"></span>
                              </div>
                            </div>

                            <div className="ent-task-bar-row">
                              <div className="ent-bar-strip" style={{ backgroundColor: '#ec4899' }}></div>
                              <div className="ent-bar-skeleton">
                                <div className="ent-skeleton-line" style={{ width: '45%' }}></div>
                              </div>
                              <div className="ent-task-status-pill muted">
                                <span className="ent-status-fill"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: Workflow Connectors */}
                  <div className={`ent-mockup-slide ${activeShowcaseIdx === 2 ? 'active' : activeShowcaseIdx > 2 ? 'prev' : 'next'}`}>
                    <div className="ent-connector-canvas">
                      <div className="ent-connectors-grid">
                        {(automation.connectors || [
                          { name: 'CRM', color: '#8b5cf6' },
                          { name: 'ERP', color: '#3b82f6' },
                          { name: 'Email', color: '#10b981' },
                          { name: 'Forms', color: '#f97316' },
                          { name: 'Analytics', color: '#f59e0b' },
                          { name: 'DB', color: '#ec4899' }
                        ]).map((conn, cIdx) => (
                          <div className="ent-connector-card" key={cIdx}>
                            <span className="ent-conn-accent" style={{ backgroundColor: conn.color }}></span>
                            <span className="ent-conn-name">{conn.name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="ent-flow-lines-wrapper">
                        <svg className="ent-flow-svg" viewBox="0 0 100 24" preserveAspectRatio="none">
                          <line x1="20" y1="0" x2="50" y2="24" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2,2" />
                          <line x1="50" y1="0" x2="50" y2="24" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2,2" />
                          <line x1="80" y1="0" x2="50" y2="24" stroke="#d1d5db" strokeWidth="1" strokeDasharray="2,2" />
                        </svg>
                      </div>

                      <div className="ent-intel-hub-box">
                        <span>INTELLIGENCE</span>
                      </div>

                      <div className="ent-connector-vert-line"></div>

                      <div className="ent-action-pill-box">
                        <span>AUTOMATION ACTION</span>
                      </div>

                      <div className="ent-connector-vert-line"></div>

                      <div className="ent-outcome-pill-box">
                        <span>OUTCOME</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <HorizontalGridLine />
      {/* =========================================================
          8. HOW WE WORK: THE ENTERPRISE JOURNEY (Dark)
          ========================================================= */}
      <section className="ent-journey-section">
        <div className="ent-container">
          <div className="ent-journey-header">
            <h2 className="ent-journey-title">{journey.title}</h2>
          </div>

          <div className="ent-journey-stepper">
            <div className="ent-stepper-steps-grid">
              {journey.steps.map((step, sIdx) => {
                const isActive = activeJourneyIdx === sIdx;
                return (
                  <div
                    className={`ent-step-card ${isActive ? 'active' : ''}`}
                    key={sIdx}
                    onClick={() => setActiveJourneyIdx(sIdx)}
                    onMouseEnter={() => setActiveJourneyIdx(sIdx)}
                    onTouchStart={() => setActiveJourneyIdx(sIdx)}
                  >
                    <div className="ent-step-num-box">
                      <span className="ent-step-num">{step.num}</span>
                    </div>
                    <div className="ent-step-info">
                      <h4 className="ent-step-name">{step.name}</h4>
                      <p className="ent-step-desc">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <HorizontalGridLine />

      {/* =========================================================
          9. BUILT FOR EVERY HIRING ENVIRONMENT (3D Tilted Card Deck)
          ========================================================= */}
      <section className="ent-industries-section">
        <div className="ent-container">
          <div className="ent-industries-grid">

            {/* Left Headline & Subtitle */}
            <div className="ent-industries-left">
              <h2 className="ent-industries-title">
                {industriesList.title || "Built for every hiring environment."}
              </h2>
              <p className="ent-industries-desc">
                {industriesList.subtitle || "Zuntra works across industries where technology complexity is high and the cost of getting it wrong is even higher."}
              </p>
            </div>

            {/* Right: 3D Tilted Card Deck */}
            <div className="ent-industries-right">
              <div className="ent-deck-wrapper">
                <div className="ent-deck-stage">
                  {(industriesList.cards || [
                    { id: "economy", title: "Economy", subtitle: "Vollversicherung", sphereBase: "#9333ea" },
                    { id: "premium-economy", title: "Premium Economy", subtitle: "Vollversicherung", sphereBase: "#2563eb" },
                    { id: "business-class", title: "Business Class", subtitle: "Vollversicherung", sphereBase: "#0284c7" },
                    { id: "first-class", title: "First Class", subtitle: "Vollversicherung", sphereBase: "#312e81" }
                  ]).map((card, cIdx) => (
                    <div
                      key={card.id || cIdx}
                      className={`ent-deck-card ent-deck-card-${cIdx}`}
                    >
                      <div className="ent-deck-card-top">
                        <FacetedSphere baseColor={card.sphereBase} sphereId={card.id || cIdx} />
                      </div>
                      <div className="ent-deck-card-bottom">
                        <h4 className="ent-deck-card-title">{card.title}</h4>
                        <span className="ent-deck-card-sub">{card.subtitle}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <HorizontalGridLine />

      {/* =========================================================
          10. USE CASES (Light)
          ========================================================= */}
      <section className="ent-usecases-section">
        <div className="ent-container">
          <span className="ent-section-tag">{useCases.tag}</span>
          <h2 className="ent-usecases-main-title">
            WHERE ENTERPRISE<br />TECHNOLOGY MEETS ACTION.
          </h2>

          <div className="ent-usecases-grid">
            {useCases.items.map((uc, uIdx) => (
              <div className="ent-usecase-card" key={uIdx}>
                <div className="ent-usecase-top-bar" style={{ backgroundColor: uc.accentColor }}></div>
                <h4 className="ent-usecase-card-title">{uc.title}</h4>
                <p className="ent-usecase-card-desc">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          11. ZUNTRA PRODUCTS WE'VE PUT TO WORK (Light)
          ========================================================= */}
      <section className="ent-products-work-section">
        <div className="ent-container">
          <span className="ent-section-tag">{productsGrid.tag}</span>
          <h2 className="ent-products-work-title">
            TECHNOLOGY WE'VE<br />ALREADY PUT TO WORK.
          </h2>

          <div className="ent-products-work-grid">
            {productsGrid.items.map((prod, pIdx) => (
              <div className="ent-prod-work-card" key={pIdx}>
                <span className="ent-prod-work-tag" style={{ color: prod.tagColor }}>{prod.tag}</span>
                <h4 className="ent-prod-work-name">{prod.name}</h4>
                <p className="ent-prod-work-desc">{prod.desc}</p>
                {prod.linkText && (
                  <Link to={prod.link} className="ent-prod-work-link" style={{ color: prod.tagColor }}>
                    {prod.linkText}
                  </Link>
                )}
                <div className="ent-prod-card-bg-circle" style={{ backgroundColor: prod.circleColor }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          12. DEDICATED CAPABILITIES (Dark)
          ========================================================= */}
      <section className="ent-dedicated-caps-section">
        <div className="ent-container">
          <span className="ent-blue-tag">{dedicatedCapabilities.tag}</span>
          <h2 className="ent-dedicated-main-title">{dedicatedCapabilities.title}</h2>

          <div className="ent-dedicated-grid">
            {dedicatedCapabilities.columns.map((col, cIdx) => (
              <div className="ent-dedicated-col" key={cIdx}>
                <div className="ent-dedicated-accent-bar" style={{ backgroundColor: col.barColor }}></div>
                <h3 className="ent-dedicated-col-title">{col.title}</h3>
                <p className="ent-dedicated-col-desc">{col.description}</p>
                <ul className="ent-dedicated-bullets">
                  {col.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <span className="ent-ded-bullet-dot" style={{ backgroundColor: col.barColor }}></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          13. PROOF OF WORK (Light)
          ========================================================= */}
      <section className="ent-proof-section">
        <div className="ent-container">
          <span className="ent-section-tag">{proofOfWork.tag}</span>
          <h2 className="ent-proof-title">{proofOfWork.title}</h2>

          <div className="ent-proof-pills-row">
            {proofOfWork.pills.map((pill, plIdx) => (
              <div className="ent-proof-pill" key={plIdx}>
                <span className="ent-proof-dot" style={{ backgroundColor: pill.color }}></span>
                <span>{pill.text}</span>
              </div>
            ))}
          </div>

          <p className="ent-proof-desc">{proofOfWork.description}</p>
        </div>
      </section>

      {/* =========================================================
          14. CASE STUDIES (Light)
          ========================================================= */}
      <section className="ent-casestudies-section">
        <div className="ent-container">
          <span className="ent-section-tag">{caseStudies.tag}</span>
          <h2 className="ent-casestudies-title">{caseStudies.title}</h2>

          <div className="ent-casestudies-grid">
            {caseStudies.items.map((cs, cIdx) => (
              <div className="ent-casestudy-card" key={cIdx}>
                <span className="ent-cs-tag" style={{ color: cs.tagColor }}>{cs.tag}</span>
                <h3 className="ent-cs-title">{cs.title}</h3>

                <div className="ent-cs-block">
                  <span className="ent-cs-label">CHALLENGE</span>
                  <p>{cs.challenge}</p>
                </div>

                <div className="ent-cs-block">
                  <span className="ent-cs-label">SOLUTION</span>
                  <p>{cs.solution}</p>
                </div>

                {cs.linkText && (
                  <Link to={cs.link} className="ent-cs-link" style={{ color: cs.tagColor }}>
                    {cs.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          15. INSIGHTS (Light)
          ========================================================= */}
      <section className="ent-insights-section">
        <div className="ent-container">
          <div className="ent-insights-header">
            <div>
              <span className="ent-section-tag">{insights.tag}</span>
              <h2 className="ent-insights-title">{insights.title}</h2>
            </div>
            <Link to={insights.btnLink} className="ent-btn ent-btn-outline-dark">
              {insights.btnText}
            </Link>
          </div>

          <div className="ent-insights-grid">
            {insights.items.map((art, aIdx) => (
              <ThreeDCard key={aIdx} className="ent-insight-3d-wrapper">
                <Link to={art.link} className="ent-insight-card">
                  <div className="ent-insight-img-box">
                    <img src={art.image} alt={art.title} loading="lazy" />
                  </div>
                  <div className="ent-insight-body">
                    <span className="ent-insight-category" style={{ color: art.categoryColor }}>{art.category}</span>
                    <h4 className="ent-insight-card-title">{art.title}</h4>
                    <div className="ent-insight-footer">
                      <span className="ent-insight-date">{art.date}</span>
                      <span className="ent-insight-arrow">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================
          16. HAVE A COMPLEX PROBLEM TO SOLVE? (Dark CTA)
          ========================================================= */}
      <section className="ent-closing-cta-section">
        <div className="ent-container">
          <div className="ent-closing-cta-content">
            <h2 className="ent-closing-cta-title">{closingCta.title}</h2>
            <p className="ent-closing-cta-desc">{closingCta.subtitle}</p>
            <div className="ent-closing-cta-buttons">
              <a href={closingCta.primaryBtnLink} className="ent-btn ent-btn-primary">
                {closingCta.primaryBtnText} <span>&rarr;</span>
              </a>
              <a href={closingCta.secondaryBtnLink} className="ent-btn ent-btn-outline-light">
                {closingCta.secondaryBtnText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          17. ONE TECHNOLOGY ECOSYSTEM (Light)
          ========================================================= */}
      <section className="ent-one-eco-section">
        <div className="ent-container">
          <div className="ent-one-eco-grid">
            <div className="ent-one-eco-info">
              <h2 className="ent-one-eco-title">{oneEcosystem.title}</h2>
              <p className="ent-one-eco-desc">{oneEcosystem.subtitle}</p>
              <Link to={oneEcosystem.btnLink} className="ent-btn ent-btn-solid-dark">
                {oneEcosystem.btnText} <span>&rarr;</span>
              </Link>
            </div>

            <div className="ent-one-eco-pills-cluster">
              {oneEcosystem.pills.map((pill, plIdx) => (
                <span
                  key={plIdx}
                  className="ent-eco-tag-pill"
                  style={{
                    backgroundColor: pill.bg,
                    color: pill.color,
                    borderColor: pill.border
                  }}
                >
                  {pill.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;
