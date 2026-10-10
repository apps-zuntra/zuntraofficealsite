import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { productsData } from '../data/productsData';
import InteractiveBanner from '../components/InteractiveBanner';
import InteractiveDotsBackground from '../components/InteractiveDotsBackground';
import GlareHover from '../components/GlareHover';
import ThreeDCard from '../components/ThreeDCard';
import SideGridLines from '../components/SideGridLines';
import HorizontalGridLine from '../components/HorizontalGridLine';

import huzzlerLogo from '../assets/product-logos/huzzler-logo.png';
import rentitLogo from '../assets/product-logos/rentit-logo.png';
import wiviyLogo from '../assets/product-logos/wiviy-logo.png';
import zucaLogo from '../assets/product-logos/zuca-logo.png';
import mungoLogo from '../assets/product-logos/mungo-logo.png';
import './ProductPage.css';

const ProductPage = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const currentSlug = propSlug || paramSlug || 'huzzler';
  const data = productsData[currentSlug];

  const [activeNav, setActiveNav] = useState('Discover');
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  if (!data) {
    return <Navigate to="/products/huzzler" replace />;
  }

  const {
    hero,
    statement,
    storyHeader,
    features,
    intelligence,
    gridFeatures,
    bothSides,
    closing
  } = data;

  return (
    <div className="product-page">
      {/* Interactive Side Grid Lines with light rainbow hover */}
      <SideGridLines />
      {/* Background Wireframe Grid */}
      <div className="p-bg-wireframe">
        <div className="p-bg-wireframe-col"></div>
        <div className="p-bg-wireframe-col"></div>
        <div className="p-bg-wireframe-col"></div>
        <div className="p-bg-wireframe-col"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="p-hero-new">
        <div className="p-hero-new-container">
          <h1 className="p-hero-new-title">
            <span className="gradient-text">{hero.titlePrimary}</span>
            <br />
            <span className="gradient-text">{hero.titleAccent}</span>
          </h1>
          <p className="p-hero-new-subtitle">{hero.subtitle}</p>

          <div className="p-hero-new-actions">
            <a href={hero.primaryBtnLink} className="p-btn-new-primary">
              {hero.primaryBtnText}
            </a>
            <a href={hero.secondaryBtnLink} className="p-btn-new-secondary" target="_blank" rel="noopener noreferrer">
              {hero.secondaryBtnText}
            </a>
          </div>

          <div className="p-hero-new-banner-container">
            <InteractiveBanner images={data.bannerImages} />
          </div>


        </div>
      </section>

      {/* Horizontal Divider between Hero and Built for Work */}
      <HorizontalGridLine maxWidth="1266px" />

      {/* 2. Built for Work Section */}
      <section className="p-built-for-work">
        <div className="p-container">
          <div className="p-bfw-header">
            <h2>Built for the way work moves now.</h2>
            <p className="p-bfw-subtitle">
              Freelance is no longer just about<br />
              finding a gig — it's about finding the<br />
              right people at the right moment.
            </p>
          </div>
        </div>
        
        <div className="p-bfw-features-wrapper">
          <div className="p-bfw-grid-box">
            <InteractiveDotsBackground />
            <div className="p-bfw-inner">
              <div className="p-bfw-features-header">
                <h3>The Best of Our Features</h3>
                <p>
                  Built to accelerate freelance collaboration with AI-driven<br />
                  matching, faster workflows, and a trusted ecosystem for both<br />
                  clients and freelancers.
                </p>
              </div>
              
              <div className="p-bfw-grid">
                <div className="p-bfw-card">
                  <span className="p-bfw-number">01</span>
                  <h4>AI Project Matching</h4>
                  <p>Connect instantly with the right freelancers based on skills, project goals, and experience.</p>
                </div>
                <div className="p-bfw-card">
                  <span className="p-bfw-number">02</span>
                  <h4>Verified Professional Profiles</h4>
                  <p>Explore detailed freelancer portfolios, skills, experience, and achievements to connect with the right talent confidently.</p>
                </div>
                <div className="p-bfw-card">
                  <span className="p-bfw-number">03</span>
                  <h4>Opportunity-Based Project Discovery</h4>
                  <p>Discover relevant projects and opportunities tailored to your skills, interests, and professional goals through an intelligent matching system.</p>
                </div>
                <div className="p-bfw-card">
                  <span className="p-bfw-number">04</span>
                  <h4>Trusted Freelance Network</h4>
                  <p>Discover relevant projects and opportunities tailored to your skills, interests, and professional goals through an intelligent matching system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Divider between Built for Work and Your Needs */}
      <HorizontalGridLine maxWidth="1266px" />

      {/* 3. Your Needs, Our Services Section */}
      <section className="p-needs-services-section">
        <div className="p-container">
          
          <div className="p-needs-top-row">
            <div className="p-needs-left">
              <h2>Your Needs, Our Services</h2>
              <p>
                Four core capabilities, applied across every industry ZUNTRA serves — from AI software to the infrastructure and growth systems that support it.
              </p>
            </div>
            <div className="p-needs-right">
              <div className="p-needs-purple-box">
                <div className="p-needs-purple-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="4" fill="#111111" />
                    <circle cx="12" cy="7" r="2.5" fill="white" />
                    <circle cx="7" cy="16" r="2.5" fill="white" />
                    <circle cx="17" cy="16" r="2.5" fill="white" />
                    <path d="M11 9L8 14M13 9L16 14" stroke="white" strokeWidth="1.5" />
                  </svg>
                </div>
                <h4>Four core capabilities</h4>
                <div className="p-needs-capabilities-grid">
                  <div className="p-needs-cap-item"><span>01</span> Talent hiring</div>
                  <div className="p-needs-cap-item"><span>02</span> Smart client-freelancer collaboration</div>
                  <div className="p-needs-cap-item"><span>03</span> Freelancer growth</div>
                  <div className="p-needs-cap-item"><span>04</span> Professional networking</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-needs-icons-grid">
            {[0, 1, 2, 3].map((i) => (
              <div className="p-needs-col-icon" key={i}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Divider below icons */}
        <HorizontalGridLine maxWidth="1266px" />

        <div className="p-container">
          <div className="p-needs-bottom-grid">
            {[
              { title: "Talent hiring", desc: "applied across every industry ZUNTRA serves — from AI software to the infrastructure and growth systems that support it." },
              { title: "Smart client - freelancer collaboration", desc: "applied across every industry ZUNTRA serves — from AI software to the infrastructure and growth systems that support it." },
              { title: "Freelancer growth", desc: "applied across every industry ZUNTRA serves — from AI software to the infrastructure and growth systems that support it." },
              { title: "Professional networking", desc: "applied across every industry ZUNTRA serves — from AI software to the infrastructure and growth systems that support it." }
            ].map((col, i) => (
              <div className="p-needs-col" key={i}>
                <p><strong>{col.title}</strong> <span className="p-needs-col-desc">{col.desc}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Divider between Needs and Download */}
      <HorizontalGridLine maxWidth="1266px" />

      {/* 4. Download Banner Section */}
        <section className="p-download-banner">
          <div className="p-container">
            <div className="p-dl-content">
              <div className="p-dl-left">
                <h4>Connect, collaborate, and grow with {data.name}.</h4>
              </div>
              <div className="p-dl-divider"></div>
              <div className="p-dl-right">
                <span className="p-dl-text">Download now on</span>
                <div className="p-dl-buttons">
                  <GlareHover className="p-dl-btn-wrapper" borderRadius="8px" glareOpacity={0.6}>
                    <a href="#" className="p-dl-btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" width="20" height="20" />
                      <span>Playstore</span>
                    </a>
                  </GlareHover>
                  <GlareHover className="p-dl-btn-wrapper" borderRadius="8px" glareOpacity={0.6}>
                    <a href="#" className="p-dl-btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" width="18" height="18" style={{ marginBottom: '2px' }} />
                      <span>Appstore</span>
                    </a>
                  </GlareHover>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Divider between Download and Services Intro */}
        <HorizontalGridLine maxWidth="1266px" />

        {/* 5. Our Services Intro */}
        <section className="p-services-intro">
          <div className="p-container">
            <div className="p-sv-intro-content">
              <h2 className="p-sv-title">Our Services</h2>
              <p className="p-sv-desc">
                {data.closing?.description || "Explore smart freelance solutions designed to connect businesses with skilled professionals faster. From AI-powered talent discovery to professional networking and verified freelancer profiles, Huzzler helps users collaborate, grow, and find the right opportunities with ease."}
              </p>
            </div>
          </div>
        </section>

        {/* Horizontal Divider between Services Intro and Sticky Services */}
        <HorizontalGridLine maxWidth="1266px" />

        {/* 6. Our Services Section (Sticky Stack) */}
        <section className="p-sticky-services-wrapper">
          <div className="p-sticky-slide">
            <div className="p-sticky-inner">
              <div className="p-sticky-left">
                <div className="p-sticky-content">
                  <h4 className="p-sticky-tag">Our Services</h4>
                  <h2>Your Needs, Our Services</h2>
                  <p>
                    We build enterprise products that combine AI, intelligent platforms, automation, and emerging technologies to solve complex business challenges at scale.
                  </p>
                </div>
              </div>
              <div className="p-sticky-right">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" alt="Enterprise Solutions" className="p-sticky-img" />
              </div>
            </div>
          </div>

          <div className="p-sticky-slide">
            <div className="p-sticky-inner">
              <div className="p-sticky-left">
                <div className="p-sticky-content">
                  <h4 className="p-sticky-tag">Our Services</h4>
                  <h2>Professional Networking for Freelancers</h2>
                  <p>
                    Huzzler creates a dedicated networking ecosystem where freelancers, creators, and businesses can build meaningful professional connections. Users can showcase portfolios, share achievements, expand industry reach, and interact with potential clients or collaborators in a modern digital environment designed for growth.
                  </p>
                </div>
              </div>
              <div className="p-sticky-right">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" alt="Professional Networking" className="p-sticky-img" />
              </div>
            </div>
          </div>

          <div className="p-sticky-slide">
            <div className="p-sticky-inner">
              <div className="p-sticky-left">
                <div className="p-sticky-content">
                  <h4 className="p-sticky-tag">Our Services</h4>
                  <h2>Client-Focused Hiring Solutions</h2>
                  <p>
                    Huzzler enables businesses and startups to easily discover, evaluate, and connect with the right freelance talent. Clients can explore verified profiles, review skills and experience, and choose professionals that best fit their project needs—making the hiring process faster, smarter, and more reliable.
                  </p>
                </div>
              </div>
              <div className="p-sticky-right">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" alt="Hiring Solutions" className="p-sticky-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Divider between Sticky Services and Insights */}
        <HorizontalGridLine maxWidth="1266px" />

        {/* 7. Insights Section */}
        <section className="p-insights-section">
          <div className="p-container">
            <div className="p-insights-header">
              <h2>Insights</h2>
              <button className="p-btn-view-all">View all</button>
            </div>
            <div className="p-insights-grid">
              <ThreeDCard className="p-insight-3d-wrapper">
                <div className="p-insight-card">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" alt="Industry Insight" className="p-insight-img" />
                  <div className="p-insight-content">
                    <span className="p-insight-tag">Industry Insight</span>
                    <h4 className="p-insight-title">Building enterprise technology systems that survive contact with reality</h4>
                    <span className="p-insight-meta">Sep 05, 2026 • 8 min</span>
                  </div>
                </div>
              </ThreeDCard>
              <ThreeDCard className="p-insight-3d-wrapper">
                <div className="p-insight-card">
                  <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" alt="AI & Intelligence" className="p-insight-img" />
                  <div className="p-insight-content">
                    <span className="p-insight-tag">AI & Intelligence</span>
                    <h4 className="p-insight-title">What makes an AI agent actually useful in a production environment?</h4>
                    <span className="p-insight-meta">Aug 28, 2026 • 6 min</span>
                  </div>
                </div>
              </ThreeDCard>
              <ThreeDCard className="p-insight-3d-wrapper">
                <div className="p-insight-card">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Industry Insight" className="p-insight-img" />
                  <div className="p-insight-content">
                    <span className="p-insight-tag">Industry Insight</span>
                    <h4 className="p-insight-title">Automation and the knowledge worker: what actually changes and what stays the same</h4>
                    <span className="p-insight-meta">Aug 12, 2026 • 5 min</span>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </section>

        {/* Horizontal Divider between Insights and Other Products */}
        <HorizontalGridLine maxWidth="1266px" />

        {/* 8. Our Products Section */}
        <section className="p-other-products-section">
          <div className="p-container">
            <div className="p-op-container">
              <h3 className="p-op-title">Our Products</h3>
              <div className="p-op-logos-wrapper">
                <div className="p-op-logos-track">
                  {/* Original set */}
                  <div className="p-op-logo-set">
                    {[
                      { name: 'huzzler', src: huzzlerLogo },
                      { name: 'rentit', src: rentitLogo },
                      { name: 'wiviy', src: wiviyLogo },
                      { name: 'zuca', src: zucaLogo },
                      { name: 'mungo', src: mungoLogo }
                    ].map((logo, i) => (
                      <Link to={`/products/${logo.name}`} key={i} className="p-op-logo-link">
                        <img src={logo.src} alt={logo.name} className="p-op-logo" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


    </div>
  );
};

export default ProductPage;
