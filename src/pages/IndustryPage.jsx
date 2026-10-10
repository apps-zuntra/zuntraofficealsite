import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { buildData } from '../data/buildData';
import ThreeDCard from '../components/ThreeDCard';
import SideGridLines from '../components/SideGridLines';
import './IndustryPage.css';

const IndustryPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Particle animation for CTA section
  const ctaCanvasRef = React.useRef(null);

  useEffect(() => {
    let rafId;
    let resizeTimer;
    let onResize;

    const start = () => {
      const canvas = ctaCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      const setSize = () => {
        const sec = canvas.closest('section') || canvas.parentElement;
        canvas.width = sec ? sec.offsetWidth : window.innerWidth;
        canvas.height = sec ? sec.offsetHeight : 400;
      };

      let pts = [];
      const spawn = () => {
        pts = [];
        const n = Math.max(70, Math.floor((canvas.width * canvas.height) / 5000));
        for (let i = 0; i < n; i++) {
          pts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            r: Math.random() * 2.2 + 0.5,
            a: Math.random() * 0.6 + 0.25,
          });
        }
      };

      const tick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const W = canvas.width;
        const H = canvas.height;

        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x;
            const dy = pts[i].y - pts[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 140) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255,255,255,${0.18 * (1 - d / 140)})`;
              ctx.lineWidth = 0.7;
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[j].x, pts[j].y);
              ctx.stroke();
            }
          }
        }

        for (const p of pts) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${p.a})`;
          ctx.fill();
        }

        rafId = requestAnimationFrame(tick);
      };

      setSize();
      spawn();
      tick();

      onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { setSize(); spawn(); }, 200);
      };
      window.addEventListener('resize', onResize);
    };

    // Wait two frames so the browser finishes layout before reading dimensions
    requestAnimationFrame(() => requestAnimationFrame(start));

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      if (onResize) window.removeEventListener('resize', onResize);
    };
  }, [pathname]);

  const industry = industriesData.find(ind => ind.id === slug);

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="industry-page">
      <SideGridLines />
      {/* Hero Section */}
      <section className="ind-hero">
        <div className="container text-center hero-container">
          <h1 className="ind-title">{industry.title}</h1>
          <p className="ind-subtitle">{industry.subtitle}</p>
          <button className="ind-btn-primary">Explore Solutions</button>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="ind-outcomes">
        <div className="container">
          <h2 className="ind-section-title outcomes-title">
            Nine ways we advance {industry.name.toLowerCase()} outcomes.
          </h2>
          <div className="outcomes-list">
            {industry.outcomes.map((outcome, index) => (
              <div className="outcome-item" key={outcome.id}>
                <div className="outcome-num-col">
                  <span className="outcome-num">0{index + 1}</span>
                </div>
                <div className="outcome-title-col">
                  <h4>{outcome.title}</h4>
                </div>
                <div className="outcome-desc-col">
                  <p>{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="ind-problems">
        <div className="container">
          <div className="problems-header">
            <div className="problems-header-left">
              <h2 className="ind-section-title">
                The problems {industry.name.toLowerCase()} faces.
              </h2>
            </div>
            <div className="problems-header-right">
              <p>{industry.problemsDesc || `Organizations face mounting pressure to modernize operations while managing data privacy, accuracy, and cost.`}</p>
            </div>
          </div>

          <div className="problems-grid">
            {industry.problems.map((prob, index) => (
              <div className="problem-card" key={prob.id}>
                <div className="problem-num">0{index + 1}</div>
                <h4>{prob.title}</h4>
                <p>{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ind-features">
        <div className="container">
          <div className="features-header">
            <div className="features-header-left">
              <h2 className="ind-section-title">{industry.featuresHeaderTitle || industry.feature1Title}</h2>
            </div>
            <div className="features-header-right">
              <p>{industry.featuresHeaderDesc || industry.feature1Desc}</p>
            </div>
          </div>

          <div className="features-list">
            {(industry.featureBlocks || [
              { id: 1, title: industry.feature1Title, desc: industry.feature1Desc, visualType: 'dark-dashboard', reverse: false, btnText: 'Discuss your use case' },
              { id: 2, title: industry.feature2Title, desc: industry.feature2Desc, visualType: 'light-dashboard', reverse: true, btnText: 'Explore security →' }
            ]).map(block => (
              <div className={`feature-block ${block.reverse ? 'block-reverse' : ''}`} key={block.id}>

                {/* Left/Right Text Content */}
                <div className="feature-text">
                  {block.eyebrow && (
                    <span className={`eyebrow-color ${block.eyebrowColor === 'blue' ? 'text-blue' : 'text-green'}`}>
                      {block.eyebrow}
                    </span>
                  )}
                  <h2>{block.title}</h2>
                  <p>{block.desc}</p>
                  <button className="ind-btn-outline">{block.btnText || 'Discuss your use case'}</button>
                </div>

                {/* Left/Right Visual Content */}
                <div className="feature-visual-container">
                  {block.visualType === 'dark-dashboard' && (
                    <div className="custom-mockup dark-mockup">
                      <div className="mockup-top-label">
                        CLINICAL AI — TRIAGE ASSIST
                      </div>
                      <div className="mockup-row">
                        <span className="mr-label">Chief Complaint</span>
                        <span className="mr-val">Chest pain, 6h onset</span>
                      </div>
                      <div className="mockup-row">
                        <span className="mr-label">Vitals Pattern</span>
                        <span className="mr-val">Elevated BP, low sat</span>
                      </div>
                      <div className="mockup-row flex-between">
                        <div className="mr-left">
                          <span className="mr-label">AI Risk Score</span>
                          <span className="mr-val">High (78/100)</span>
                        </div>
                        <span className="mr-tag-value tag-orange">78%</span>
                      </div>
                      <div className="mockup-row flex-between">
                        <div className="mr-left">
                          <span className="mr-label">Differential (AI)</span>
                          <span className="mr-val">ACS • PE • Aortic Dissec.</span>
                        </div>
                        <span className="mr-tag-value tag-blue">94%</span>
                      </div>
                      <div className="mockup-row flex-between row-no-border">
                        <div className="mr-left">
                          <span className="mr-label">Recommended Action</span>
                          <span className="mr-val">Expedited physician review</span>
                        </div>
                        <span className="mr-tag-value tag-green">92%</span>
                      </div>
                    </div>
                  )}

                  {block.visualType === 'light-dashboard' && (
                    <div className="custom-mockup light-mockup">
                      <div className="mockup-header flex-between text-dark">
                        <span>Population Health Dashboard</span>
                        <span className="mr-label">LIVE</span>
                      </div>
                      <div className="lm-grid">
                        <div className="lm-card">
                          <span className="mr-label">Potential Risk</span>
                          <h3 className="text-orange">1,240</h3>
                        </div>
                        <div className="lm-card">
                          <span className="mr-label">Care Gap Rate</span>
                          <h3 className="text-blue">14.2%</h3>
                        </div>
                        <div className="lm-card">
                          <span className="mr-label">Readmission</span>
                          <h3 className="text-green">&darr; 18%</h3>
                        </div>
                        <div className="lm-card">
                          <span className="mr-label">Avg LOS</span>
                          <h3 className="text-purple">3.2 days</h3>
                        </div>
                      </div>
                      <div className="lm-chart">
                        <div className="lm-bars">
                          {[20, 30, 40, 35, 45, 30, 40, 50, 45, 60, 80].map((h, i) => (
                            <div key={i} className={`lm-bar ${i >= 9 ? 'bg-blue' : ''}`} style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                        <span className="mr-label">Monthly readmit volume - past 12 months</span>
                      </div>
                    </div>
                  )}

                  {block.visualType === 'workflow-list' && (
                    <div className="custom-mockup list-mockup">
                      <div id='Workflow' className="mockup-header list-header">Workflow Automation — Intake</div>
                      <div className="list-items">
                        <div className="l-item">
                          <span className="dot dot-green"></span>
                          <span className="l-text text-dark">Patient intake form submitted</span>
                          <span className="l-time">09:14</span>
                        </div>
                        <div className="l-item">
                          <span className="dot dot-green"></span>
                          <span className="l-text text-dark">Insurance eligibility verified</span>
                          <span className="l-time">09:15</span>
                        </div>
                        <div className="l-item">
                          <span className="dot dot-green"></span>
                          <span className="l-text text-dark">Triage AI score generated</span>
                          <span className="l-time">09:15</span>
                        </div>
                        <div className="l-item">
                          <span className="dot dot-blue"></span>
                          <span className="l-text text-dark">Provider assigned</span>
                          <span className="l-time">09:16</span>
                        </div>
                        <div className="l-item opacity-50">
                          <span className="dot dot-gray"></span>
                          <span className="l-text">Appointment confirmation sent</span>
                          <span className="l-time">&mdash;</span>
                        </div>
                        <div className="l-item opacity-50 border-none">
                          <span className="dot dot-gray"></span>
                          <span className="l-text">EHR record updated</span>
                          <span className="l-time">&mdash;</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Fallbacks for generic templates */}
                  {(!['dark-dashboard', 'light-dashboard', 'workflow-list'].includes(block.visualType)) && (
                    <div className="custom-mockup light-mockup flex-center">
                      <span>Visualization Placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zuntra Section */}
      <section className="ind-why">
        <div className="container why-grid">
          <div className="why-image">
            <ThreeDCard className="why-threed-card">
              {industry.whyZuntraImage ? (
                <img src={industry.whyZuntraImage} alt={industry.whyZuntraTitle} className="why-actual-img" />
              ) : (
                <div className="placeholder-img flex-center">
                  <span>{industry.name} Representation</span>
                </div>
              )}
            </ThreeDCard>
          </div>
          <div className="why-text">
            <span className="eyebrow">WHY ZUNTRA</span>
            <h2>{industry.whyZuntraTitle}</h2>

            {Array.isArray(industry.whyZuntraDesc) ? (
              industry.whyZuntraDesc.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>{industry.whyZuntraDesc}</p>
            )}

            <button className="btn btn-black mt-4">
              Explore {industry.name} Partnership &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="ind-how-work">
        <div className="container">
          <div className="hww-header">
            <h2 className="ind-section-title">How we work<br />with {industry.name.toLowerCase()}<br />organizations.</h2>
          </div>
          <div className="work-steps">
            {industry.howWeWork.map((step, index) => {
              // Map index to specific colors: 0=purple, 1=blue, 2=green, 3=orange
              const colorClasses = ['text-purple', 'text-blue', 'text-green', 'text-orange'];
              const colorClass = colorClasses[index % colorClasses.length];
              return (
                <div className="work-step" key={step.id}>
                  <div className={`step-number ${colorClass}`}>{step.step}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              );
            })}
          </div>
          {industry.howWeWorkFooter && (
            <p className="hww-footer">{industry.howWeWorkFooter}</p>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ind-faq">
        <div className="container faq-container">
          <h2 className="ind-section-title">Frequently asked questions</h2>
          <div className="faq-list">
            {industry.faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'active' : ''}`} key={index}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <h4>{faq.q || faq}</h4>
                  <span className="faq-toggle">{openFaq === index ? '-' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.a || `Detailed answer regarding "${faq}" goes here. Our team is ready to discuss your specific requirements.`}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ind-cta text-center">
        <canvas ref={ctaCanvasRef} className="ind-cta-particles" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2>HAVE SOMETHING<br />WORTH BUILDING?</h2>
          <p>Let's turn the idea into something real.</p>
          <div className="cta-links">
            <a href="#" className="cta-link">LET'S BUILD IT &rarr;</a>
            <a href="#" className="cta-link">VIEW ALL INDUSTRIES</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
