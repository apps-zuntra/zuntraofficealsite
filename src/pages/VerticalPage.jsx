import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { verticalsData } from '../data/verticalsData';
import './VerticalPage.css';
import VanillaTilt from 'vanilla-tilt';
import DepthCard from '../components/ui/DepthCard';
import LiquidEther from '../components/ui/LiquidEther';
import SideGridLines from '../components/SideGridLines';

const VerticalPage = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const currentSlug = propSlug || paramSlug || 'media';
  const data = verticalsData[currentSlug];

  const [activeStep, setActiveStep] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const ecoCardsRef = useRef([]);

  if (!data) {
    return <Navigate to="/verticals/media" replace />;
  }

  const {
    hero,
    intro,
    process,
    ecosystem,
    spotlights,
    capabilities,
    technology,
    ecosystemWays,
    whatWeCreate,
    ctaBanner,
    faqs,
    darkCta
  } = data;

  useEffect(() => {
    if (ecoCardsRef.current.length > 0) {
      VanillaTilt.init(ecoCardsRef.current.filter(Boolean), {
        max: 15,
        speed: 300,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1.05,
      });
    }
  }, [ecosystem]);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleAccordion = (idx) => {
    setActiveAccordion(activeAccordion === idx ? null : idx);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="vertical-page">
      <SideGridLines />
      {/* 1. Hero Section */}
      <section className="v-hero-section">
        <div className="v-container">
          <div className="v-hero-content">
            <h1 className="v-hero-title">{hero.title}</h1>
            <p className="v-hero-subtitle">{hero.subtitle}</p>
            <div className="v-hero-cta-group">
              <a href={hero.primaryBtnLink} className="v-btn v-btn-primary">
                {hero.primaryBtnText} <span>&rarr;</span>
              </a>
              <a href={hero.secondaryBtnLink} className="v-btn v-btn-secondary">
                {hero.secondaryBtnText} <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Story Section */}
      <section className="v-intro-section">
        <div className="v-container">
          <div className="v-intro-content">
            <h2 className="v-intro-title">{intro.title}</h2>
            <div className="v-intro-text">
              {intro.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={idx === intro.leadParagraphIndex ? 'v-lead-paragraph' : ''}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Process Timeline Section */}
      <section className="v-process-section">
        <div className="v-container">
          <h2 className="v-process-title">{process.title}</h2>
          <div className="v-stepper-wrapper">
            <div className="v-stepper-track">
              {process.steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`v-step-node ${activeStep === idx || (activeStep === null && idx === 0) ? 'v-step-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="v-step-circle">
                    <span>{step.num}</span>
                  </div>
                  <span className="v-step-label">{step.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ecosystem 4-Card Section */}
      <section id="ecosystem" className="v-ecosystem-section">
        <div className="v-container">
          <div className="v-ecosystem-header">
            <h2 className="v-ecosystem-title">{ecosystem.title}</h2>
            <p className="v-ecosystem-subtitle">{ecosystem.subtitle}</p>
          </div>

          <div className="v-ecosystem-grid">
            {ecosystem.cards.map((card, idx) => (
              <div
                className="v-eco-card"
                key={idx}
                ref={el => ecoCardsRef.current[idx] = el}
              >
                <div className="v-eco-card-media">
                  <img src={card.image} alt={card.name} loading="lazy" />
                </div>
                <div className="v-eco-card-body">
                  <span className="v-eco-card-num">{card.num}</span>
                  <h3 className="v-eco-card-name">{card.name}</h3>
                  <div
                    className="v-eco-card-tag"
                    style={{ color: card.tagColor }}
                  >
                    {card.tagline}
                  </div>
                  <p className="v-eco-card-desc">{card.description}</p>
                  <a href={card.linkUrl} className="v-eco-card-link">
                    <span className="v-eco-link-arrow">&rarr;</span>
                    <span className="v-eco-link-text">{card.linkText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Spotlight Sections */}
      <div className="v-spotlights-container">
        {spotlights.map((spotlight, idx) => {
          if (spotlight.theme === 'dark') {
            return (
              <section key={spotlight.id || idx} id={spotlight.id} className="v-spotlight-section v-spotlight-dark">
                <div className="v-container">
                  <div className="v-spotlight-grid">
                    <div className="v-spotlight-info">
                      <span className="v-spotlight-tag">{spotlight.tag}</span>
                      <h2 className="v-spotlight-title">{spotlight.title}</h2>
                      <div className="v-spotlight-desc">
                        {spotlight.description.split('\n\n').map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                      <a href={spotlight.btnLink} className="v-btn v-btn-dark-cta">
                        {spotlight.btnText} <span>&rarr;</span>
                      </a>
                    </div>

                    <div className="v-spotlight-accordion">
                      {spotlight.listItems && spotlight.listItems.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className={`v-acc-row ${activeAccordion === itemIdx ? 'v-acc-open' : ''}`}
                          onClick={() => toggleAccordion(itemIdx)}
                        >
                          <div className="v-acc-header">
                            <div className="v-acc-left">
                              <span className="v-acc-num">{item.num}</span>
                              <span className="v-acc-dot" style={{ backgroundColor: item.dotColor }}></span>
                              <span className="v-acc-name">{item.title}</span>
                            </div>
                            <span className="v-acc-arrow">&darr;</span>
                          </div>
                          {activeAccordion === itemIdx && (
                            <div className="v-acc-body">
                              <p>{item.detail}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          return (
            <section
              key={spotlight.id || idx}
              id={spotlight.id}
              className={`v-spotlight-section ${spotlight.theme === 'tint' ? 'v-spotlight-tint' : ''}`}
            >
              <div className="v-container">
                <div className={`v-spotlight-grid ${spotlight.imagePosition === 'left' ? 'v-grid-media-left' : 'v-grid-media-right'}`}>
                  {spotlight.imagePosition === 'left' && (
                    <DepthCard className="v-spotlight-visual">
                      <img src={spotlight.image} alt={spotlight.title} loading="lazy" style={{ transform: 'translateZ(20px)', borderRadius: '12px' }} />
                    </DepthCard>
                  )}

                  <div className="v-spotlight-info">
                    <span className="v-spotlight-tag">{spotlight.tag}</span>
                    <h2 className="v-spotlight-title">{spotlight.title}</h2>
                    <div className="v-spotlight-desc">
                      {spotlight.description.split('\n\n').map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {spotlight.badges && (
                      <div className="v-spotlight-badges">
                        {spotlight.badges.map((badge, bIdx) => (
                          <span className="v-badge" key={bIdx}>{badge}</span>
                        ))}
                      </div>
                    )}

                    <a href={spotlight.btnLink} className="v-btn v-btn-primary">
                      {spotlight.btnText} <span>&rarr;</span>
                    </a>
                  </div>

                  {spotlight.imagePosition === 'right' && (
                    <DepthCard className="v-spotlight-visual">
                      <img src={spotlight.image} alt={spotlight.title} loading="lazy" style={{ transform: 'translateZ(20px)', borderRadius: '12px' }} />
                    </DepthCard>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 6. Capabilities Grid Section */}
      <section className="v-capabilities-section">
        <div className="v-container">
          <h2 className="v-cap-title">{capabilities.title}</h2>

          <div className="v-cap-grid">
            {capabilities.items.map((item, idx) => (
              <div className="v-cap-card" key={idx}>
                <div className="v-cap-num-line">
                  <span className="v-cap-num">{item.num}</span>
                  <div className="v-cap-line"></div>
                </div>
                <h3 className="v-cap-name">{item.title}</h3>
                <p className="v-cap-desc">{item.desc}</p>
              </div>
            ))}

            {/* Filler placeholder boxes to complete the 3x4 grid matching the mockup */}
            <div className="v-cap-filler"></div>
            <div className="v-cap-filler"></div>
          </div>
        </div>
      </section>

      {/* 7. Technology Stack / Diagram Section */}
      {technology && (
        <section className="v-tech-section">
          <div className="v-container">
            <div className="v-tech-grid">
              <div className="v-tech-info">
                <span className="v-tech-tag">{technology.tag}</span>
                <h2 className="v-tech-title">{technology.title}</h2>
                <p className="v-tech-desc">{technology.description}</p>
              </div>

              <div className="v-tech-diagram-container">
                <div className="v-grid-backdrop">
                  <div className="v-tech-stack-cards">
                    {technology.layers.map((layer, lIdx) => (
                      <div
                        key={lIdx}
                        className="v-tech-layer-card"
                        style={{
                          backgroundColor: layer.bg,
                          borderColor: layer.border,
                          color: layer.color
                        }}
                      >
                        {layer.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. One Ecosystem. Different Ways to Create Section */}
      {ecosystemWays && (
        <section className="v-ways-section">
          <div className="v-container">
            <h2 className="v-ways-title">
              {ecosystemWays.title.split('\n').map((t, idx) => (
                <React.Fragment key={idx}>{t}<br /></React.Fragment>
              ))}
            </h2>

            <div className="v-ways-center-badge">
              <span>{ecosystemWays.badge}</span>
            </div>

            <div className="v-ways-grid">
              {ecosystemWays.cards.map((card, cIdx) => (
                <div className="v-way-card" key={cIdx}>
                  <div className="v-way-card-header">
                    <span className="v-way-dot" style={{ backgroundColor: card.dotColor }}></span>
                    <h3 className="v-way-card-title">{card.title}</h3>
                  </div>
                  <p className="v-way-card-sub">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. What We Create Section */}
      {whatWeCreate && (
        <section className="v-create-section">
          <div className="v-container">
            <div className="v-create-header">
              <span className="v-create-tag">{whatWeCreate.tag}</span>
              <h2 className="v-create-title">
                {whatWeCreate.title.split('\n').map((t, idx) => (
                  <React.Fragment key={idx}>{t}<br /></React.Fragment>
                ))}
              </h2>
            </div>

            <div className="v-create-grid">
              {whatWeCreate.items.map((item, idx) => (
                <div className="v-create-item" key={idx}>
                  <span className="v-create-num">{item.num}</span>
                  <h4 className="v-create-name">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Work With Us Banner (Radar Circle Graphic) */}
      {ctaBanner && (
        <section className="v-radar-banner-section">
          <div className="v-container">
            <div className="v-radar-banner-grid">
              <div className="v-radar-banner-info">
                <span className="v-radar-tag">{ctaBanner.tag}</span>
                <h2 className="v-radar-title">
                  {ctaBanner.title.split('\n').map((t, idx) => (
                    <React.Fragment key={idx}>{t}<br /></React.Fragment>
                  ))}
                </h2>
                <div className="v-radar-desc">
                  <p>{ctaBanner.p1}</p>
                  <p>{ctaBanner.p2}</p>
                </div>
                <a href={ctaBanner.btnLink} className="v-btn v-btn-primary">
                  {ctaBanner.btnText} <span>&rarr;</span>
                </a>
              </div>

              <div className="v-radar-visual">
                <div className="v-radar-frame">
                  <div className="v-radar-bracket v-bracket-tl"></div>
                  <div className="v-radar-bracket v-bracket-tr"></div>
                  <div className="v-radar-bracket v-bracket-bl"></div>
                  <div className="v-radar-bracket v-bracket-br"></div>

                  <div className="v-radar-pulse-ring ring-3"></div>
                  <div className="v-radar-pulse-ring ring-2"></div>
                  <div className="v-radar-pulse-ring ring-1"></div>

                  <div className="v-radar-core">
                    <span className="v-core-title">{data.name.toUpperCase()}</span>
                    <span className="v-core-sub">ZUNTRA</span>
                  </div>
                  <div className="v-radar-axis-h"></div>
                  <div className="v-radar-axis-v"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 11. Frequently Asked Questions */}
      {faqs && faqs.length > 0 && (
        <section className="v-faqs-section">
          <div className="v-container">
            <h2 className="v-faqs-title">Frequently asked questions</h2>

            <div className="v-faqs-accordion">
              {faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className={`v-faq-item ${openFaq === fIdx ? 'v-faq-open' : ''}`}
                  onClick={() => toggleFaq(fIdx)}
                >
                  <div className="v-faq-header">
                    <h4 className="v-faq-question">{faq.q}</h4>
                    <span className="v-faq-icon">&rsaquo;</span>
                  </div>
                  {openFaq === fIdx && (
                    <div className="v-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. Dark Call to Action Footer Pre-banner */}
      {darkCta && (
        <section id="contact" className="v-dark-cta-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <LiquidEther
              colors={['#c4c1ce', '#bbb8bbff', '#ffffff']}
              mouseForce={20}
              cursorSize={65}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.2}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
              backgroundColor="#08080a"
              lightMode={false}
            />
          </div>
          <div className="v-container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
            <div className="v-dark-cta-content" style={{ pointerEvents: 'auto' }}>
              <span className="v-dark-cta-tag">{darkCta.tag}</span>
              <h2 className="v-dark-cta-title">
                {darkCta.title.split('\n').map((t, idx) => (
                  <React.Fragment key={idx}>{t}<br /></React.Fragment>
                ))}
              </h2>
              <p className="v-dark-cta-desc">{darkCta.desc}</p>
              <a href={darkCta.btnLink} className="v-btn v-btn-secondary v-btn-white-outline">
                {darkCta.btnText} <span>&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default VerticalPage;
