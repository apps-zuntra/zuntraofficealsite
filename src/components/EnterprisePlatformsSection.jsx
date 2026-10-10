import React, { useState, useEffect, useRef } from 'react';
import './EnterprisePlatformsSection.css';

const productsData = [
  {
    id: 'entwy',
    name: 'Entwy.com',
    tag: 'Enterprise AI Product & Digital Experience Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    description: 'Entwy helps businesses turn complex ideas and business requirements into intelligent digital products. The platform brings together AI, product engineering, automation, and digital experience capabilities to help organizations design, develop, and scale modern enterprise solutions. From intelligent applications to connected digital experiences, Entwy helps transform business challenges into technology that is practical, scalable, and built for real world use.'
  },
  {
    id: 'workzi',
    name: 'Workzi',
    tag: 'AI Powered Workforce Management Platform',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1400&q=80',
    description: 'Workzi helps organizations simplify the way they manage their workforce and day to day operations. It brings attendance, workforce scheduling, team coordination, activity visibility, and operational processes into one connected platform. With intelligent insights and streamlined workflows, Workzi gives businesses a clearer understanding of their workforce while reducing the complexity of managing teams at scale.'
  },
  {
    id: 'talvivo',
    name: 'TalVivo',
    tag: 'Autonomous AI Hiring Platform',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    description: 'TalVivo transforms the traditional hiring process into an intelligent, evidence driven workflow. The platform brings together AI powered candidate screening, conversational voice interviews, technical and cognitive assessments, and structured candidate evaluation in one system. By helping organizations identify relevant talent and evaluate candidates more efficiently, TalVivo enables faster hiring decisions while bringing greater consistency and intelligence to recruitment.'
  },
  {
    id: 'cubeforge',
    name: 'cubeforge Labs',
    tag: 'AI Powered Social Content Creation Platform',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
    description: 'cubeforge Labs helps businesses, marketers, and creators turn ideas into complete social media content with the power of AI. The platform can help create social media posts, reels, captions, hashtags, tags, and other content assets while reducing the time and effort involved in content planning and production. From developing an idea to preparing content for publishing, cubeforge Labs brings multiple parts of the social media creation process into one intelligent workspace.'
  }
];

const EnterprisePlatformsSection = () => {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

  // 7 columns x 10 rows = 70 grid cells matching 683 x 946 dimensions
  const gridCells = Array.from({ length: 70 });

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const overall = Math.max(0, Math.min(1, scrolled / totalScrollable));

      const numItems = productsData.length;
      const stepSize = 1 / numItems;

      let idx = Math.floor(overall / stepSize);
      if (idx >= numItems) idx = numItems - 1;

      const itemProg = Math.min(1, Math.max(0, (overall - idx * stepSize) / stepSize));

      setActiveIndex(idx);
      setCurrentProgress(itemProg);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (idx) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const totalScrollable = rect.height - windowHeight;
    const stepSize = 1 / productsData.length;
    const targetScroll = window.scrollY + rect.top + (idx * stepSize * totalScrollable) + 4;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className="ep-scroll-wrapper" ref={wrapperRef}>
      <section className="enterprise-platforms-section ep-sticky">
        <div className="ep-container">
          {/* Header */}
          <div className="ep-header">
            <span className="ep-pill">Enterprise Products</span>
            <h2 className="ep-title">Platforms built for real work</h2>
          </div>

          {/* Body: 46% Left + 54% Right Box */}
          <div className="ep-body">
            {/* Left Column */}
            <div className="ep-left">
              <p className="ep-intro">
                We build intelligent products that solve real business problems. From enterprise AI and workforce operations to intelligent hiring and content creation, our platforms are designed to make complex work simpler, faster, and more effective.
              </p>

              <div className="ep-products-list">
                {productsData.map((prod, idx) => {
                  const isActive = activeIndex === idx;
                  const isPassed = activeIndex > idx;
                  const fillPercent = isActive ? currentProgress * 100 : (isPassed ? 100 : 0);

                  return (
                    <div
                      key={prod.id}
                      className={`ep-product-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleItemClick(idx)}
                    >
                      <div className="ep-product-title-row">
                        <h3 className="ep-product-title">{prod.name}</h3>
                      </div>

                      {isActive && (
                        <div className="ep-product-details">
                          <div className="ep-product-subtitle">{prod.tag}</div>
                          <p className="ep-product-desc-line">
                            {prod.description}
                          </p>

                          {/* Loading Animation Progress Line */}
                          <div className="ep-progress-track">
                            <div
                              className="ep-progress-fill"
                              style={{ width: `${fillPercent}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Box with Architectural Grid + Contained Product Card */}
            <div className="ep-right">
              {/* 7 cols x 10 rows architectural matrix */}
              <div className="ep-grid-matrix" aria-hidden="true">
                {gridCells.map((_, index) => (
                  <div key={index} className="ep-grid-cell"></div>
                ))}
              </div>

              {/* Product visual card framed cleanly inside the box */}
              <div className="ep-image-display-frame">
                {productsData.map((prod, idx) => (
                  <div
                    key={prod.id}
                    className={`ep-image-card ${activeIndex === idx ? 'visible' : ''}`}
                  >
                    <div className="ep-mock-header">
                      <div className="ep-mock-dots">
                        <span className="ep-dot dot-red"></span>
                        <span className="ep-dot dot-yellow"></span>
                        <span className="ep-dot dot-green"></span>
                      </div>
                      <div className="ep-mock-url">zuntra.com/{prod.id}</div>
                    </div>
                    <div className="ep-image-media-wrapper">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="ep-product-img"
                      />
                      <div className="ep-image-overlay">
                        <span className="ep-img-badge">{prod.tag}</span>
                        <h4 className="ep-img-title">{prod.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePlatformsSection;
