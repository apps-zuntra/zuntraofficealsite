import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollStackedCards.css';

const PALETTES = [
  { bg: "#00b4d8", textColor: "#ffffff", titleColor: "#051923", icon: "✨" },
  { bg: "#5c3216", textColor: "#fdf0e7", titleColor: "#ffd166", icon: "🔐" },
  { bg: "#f5b700", textColor: "#4a3500", titleColor: "#ff4d6d", icon: "🍪" },
  { bg: "#2ec4b6", textColor: "#012a4a", titleColor: "#012a4a", icon: "⚡" },
  { bg: "#fb8500", textColor: "#ffffff", titleColor: "#023047", icon: "⚙️" },
  { bg: "#ff5d8f", textColor: "#ffffff", titleColor: "#fff0f5", icon: "📈" }
];

const AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
];

const ScrollStackedCards = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  // Dynamically map items from buildData or fallback to defaults
  const cards = (items && items.length > 0)
    ? items.map((item, i) => {
        const palette = PALETTES[i % PALETTES.length];
        const avatar = AVATARS[i % AVATARS.length];
        
        // Color mapping corresponding to dotColor or palette
        let bg = palette.bg;
        let titleColor = palette.titleColor;
        let textColor = palette.textColor;

        if (item.dotColor === 'blue') {
          bg = "#00b4d8";
          titleColor = "#051923";
          textColor = "#ffffff";
        } else if (item.dotColor === 'purple') {
          bg = "#5c3216";
          titleColor = "#ffd166";
          textColor = "#fdf0e7";
        } else if (item.dotColor === 'green') {
          bg = "#2ec4b6";
          titleColor = "#012a4a";
          textColor = "#012a4a";
        } else if (item.dotColor === 'orange') {
          bg = "#fb8500";
          titleColor = "#023047";
          textColor = "#ffffff";
        } else if (item.dotColor === 'pink') {
          bg = "#ff5d8f";
          titleColor = "#fff0f5";
          textColor = "#ffffff";
        }

        return {
          id: i + 1,
          name: (item.name || `STEP ${i + 1}`).toUpperCase(),
          icon: palette.icon,
          bg,
          textColor,
          titleColor,
          desc: item.desc ? `${item.desc}. Automating this step ensures continuous operation without manual intervention, saving both time and resources while minimizing errors.` : "Request & Context. Automating this step ensures continuous operation without manual intervention, saving both time and resources while minimizing errors.",
          avatar
        };
      })
    : PALETTES.map((p, i) => ({
        id: i + 1,
        name: `STEP ${i + 1}`,
        icon: p.icon,
        bg: p.bg,
        textColor: p.textColor,
        titleColor: p.titleColor,
        desc: "Automating this step ensures continuous operation without manual intervention, saving both time and resources while minimizing errors.",
        avatar: AVATARS[i % AVATARS.length]
      }));

  // Active non-passive native wheel listener to lock outer page scroll and cycle cards
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onNativeWheel = (e) => {
      // Fix screen: prevent outer window from scrolling down while user scrolls on the cards
      e.preventDefault();
      e.stopPropagation();

      const now = Date.now();
      // Throttle wheel events to transition one card per flick
      if (now - lastScrollTime.current < 280) {
        return;
      }

      if (Math.abs(e.deltaY) > 8) {
        lastScrollTime.current = now;
        if (e.deltaY > 0) {
          setActiveIndex((prev) => (prev + 1) % cards.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
        }
      }
    };

    el.addEventListener('wheel', onNativeWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', onNativeWheel);
    };
  }, [cards.length]);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;
    if (diff > 35) {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    } else if (diff < -35) {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }
  };

  // Auto-cycle timer (pauses when hovered)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [isHovered, cards.length]);

  return (
    <div 
      className="scroll-stacked-wrapper"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Peach Container with Orange S-Curve */}
      <div className="scroll-stacked-canvas">
        {/* Background S-Curve */}
        <svg className="s-curve-bg" viewBox="0 0 400 480" fill="none" preserveAspectRatio="none">
          <path 
            d="M 380 160 C 140 160 80 290 240 330 C 400 370 330 480 150 460" 
            stroke="#ff7a53" 
            strokeWidth="48" 
            strokeLinecap="round" 
            opacity="0.9"
          />
        </svg>

        {/* 3D Stacking Cards List */}
        <div className="cards-stack-viewport">
          {cards.map((card, index) => {
            // Distance from active card
            let diff = index - activeIndex;
            
            // Allow wrap-around smooth perception
            if (diff > cards.length / 2) diff -= cards.length;
            if (diff < -cards.length / 2) diff += cards.length;

            const isActive = diff === 0;

            // Calculate 3D stacking transform properties (ALL visible cards are 100% solid/opaque)
            let y = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            let pointerEvents = 'auto';

            if (diff === 0) {
              // Active Center Card
              y = 0;
              scale = 1;
              opacity = 1;
              zIndex = 30;
            } else if (diff === -1) {
              // 1 step above (peeking top tab)
              y = -62;
              scale = 0.92;
              opacity = 1;
              zIndex = 20;
            } else if (diff === -2) {
              // 2 steps above (tucked further top)
              y = -112;
              scale = 0.84;
              opacity = 1;
              zIndex = 10;
            } else if (diff === 1) {
              // 1 step below (peeking bottom tab)
              y = 62;
              scale = 0.92;
              opacity = 1;
              zIndex = 20;
            } else if (diff === 2) {
              // 2 steps below (tucked further bottom)
              y = 112;
              scale = 0.84;
              opacity = 1;
              zIndex = 10;
            } else {
              // Hidden out of view
              y = diff < 0 ? -160 : 160;
              scale = 0.72;
              opacity = 0;
              zIndex = 1;
              pointerEvents = 'none';
            }

            return (
              <motion.div
                key={card.id}
                className={`custom-stacked-card ${isActive ? 'active-card' : 'inactive-card'}`}
                style={{
                  backgroundColor: card.bg,
                  color: card.textColor,
                  zIndex,
                  pointerEvents,
                }}
                animate={{
                  y,
                  scale,
                  opacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 26,
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Left Text Content */}
                <div className="card-left-section">
                  <div className="card-title-row">
                    <span className="card-emoji">{card.icon}</span>
                    <h3 
                      className="card-main-title"
                      style={{ color: card.titleColor }}
                    >
                      {card.name}
                    </h3>
                  </div>
                  <p className="card-desc-paragraph">
                    {card.desc}
                  </p>
                </div>

                {/* Right Avatar with Speech-Bubble Notch */}
                <div className="card-right-section">
                  <div className="avatar-container">
                    <img src={card.avatar} alt={card.name} className="avatar-img" />
                    {/* Speech bubble pointer notch */}
                    <svg className="speech-notch" viewBox="0 0 20 40" fill={card.bg}>
                      <path d="M 0 0 C 12 12 18 20 18 20 C 18 20 12 28 0 40 Z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle Pagination Indicator Dots */}
        <div className="stack-indicators">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`indicator-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollStackedCards;
