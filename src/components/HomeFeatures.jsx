import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildData } from '../data/buildData';
import HorizontalGridLine from './HorizontalGridLine';
import './HomeFeatures.css';

const HomeFeatures = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCardExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector('.build-card');
      const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 380;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* Quote Section */}
      <section className="home-quote-section">
        <div className="home-quote-container">
          <p className="home-quote">
            Technology matters when it solves something real. At Zuntra, we start with the problem, understand what people truly need, and build the technology that makes the solution possible.
          </p>
        </div>
      </section>

      {/* Horizontal Divider between Quote and Builds */}
      <HorizontalGridLine />

      {/* What ZUNTRA Builds Section */}
      <section className="what-zuntra-builds-section">
        <div className="builds-container">
          <div className="builds-header-row">
            <h2 className="builds-main-title">
              What Zuntra Builds
            </h2>
            <div className="builds-header-right">
              <p className="builds-header-desc">
                Four core capabilities that turn business challenges into intelligent technology solutions, from AI products and software to the infrastructure and growth systems that support them.
              </p>
              <div className="builds-arrow-buttons">
                <button
                  className="arrow-btn arrow-prev"
                  onClick={() => handleScroll('left')}
                  aria-label="Previous capabilities"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>
                <button
                  className="arrow-btn arrow-next"
                  onClick={() => handleScroll('right')}
                  aria-label="Next capabilities"
                  type="button"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`builds-slider-container ${isDragging ? 'is-dragging' : ''}`}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="builds-grid">
              {buildData.map((item, idx) => {
                const img = item.whyZuntraImage || item.heroMockup?.items?.[0]?.image || 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80';
                const num = `0${idx + 1}`;
                return (
                  <div key={item.id} className="build-card">
                    <div className="build-card-image-wrapper">
                      <img
                        src={img}
                        alt={item.name}
                        className="build-card-image"
                        draggable="false"
                      />
                    </div>
                    <h3 className="build-card-title">{num}. {item.name}</h3>
                    <div className="build-card-desc-wrapper">
                      <p className={`build-card-desc ${expandedCards[item.id] ? 'is-expanded' : 'is-clamped'}`}>
                        {item.subtitle}
                      </p>
                      <button
                        type="button"
                        className="build-card-see-more-btn"
                        onClick={(e) => {
                          if (hasDragged) {
                            e.preventDefault();
                            return;
                          }
                          toggleCardExpand(item.id);
                        }}
                        aria-expanded={!!expandedCards[item.id]}
                      >
                        {expandedCards[item.id] ? 'See less' : 'See more'}
                      </button>
                    </div>
                    <Link
                      to={`/build/${item.id}`}
                      className="build-card-btn"
                      onClick={(e) => {
                        if (hasDragged) e.preventDefault();
                      }}
                    >
                      Learn more →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFeatures;
