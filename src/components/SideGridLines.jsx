import React, { useEffect, useState, useRef } from 'react';
import './SideGridLines.css';

const SideGridLines = ({ startSelector }) => {
  const containerRef = useRef(null);
  const [topOffset, setTopOffset] = useState(null);
  const [leftAnim, setLeftAnim] = useState({ active: false, key: 0, startY: 0, endY: 0 });
  const [rightAnim, setRightAnim] = useState({ active: false, key: 0, startY: 0, endY: 0 });

  useEffect(() => {
    const updatePosition = () => {
      // 1. Explicit startSelector prop if provided
      if (startSelector) {
        const target = document.querySelector(startSelector);
        if (target && containerRef.current && containerRef.current.parentElement) {
          const parentRect = containerRef.current.parentElement.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const top = targetRect.top - parentRect.top;
          setTopOffset(Math.max(0, Math.round(top)));
          return;
        }
      }

      // 2. Build page detection: start after the hero section (at capability strip or connected section)
      const buildPage = document.querySelector('.build-page');
      if (buildPage) {
        const target = buildPage.querySelector('.capability-strip-container') || buildPage.querySelector('.connected-growth-section');
        if (target) {
          const pageRect = buildPage.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const top = targetRect.top - pageRect.top;
          setTopOffset(Math.max(0, Math.round(top)));
          return;
        }
      }

      // 3. Home page detection
      const cardsSec = document.querySelector('.hero-cards-section');
      if (cardsSec) {
        const homeMain = document.querySelector('.home-page-main');
        if (homeMain) {
          const mainRect = homeMain.getBoundingClientRect();
          const cardsRect = cardsSec.getBoundingClientRect();
          const top = cardsRect.top - mainRect.top;
          setTopOffset(Math.round(top));
          return;
        }
      }
    };

    updatePosition();
    const timer1 = setTimeout(updatePosition, 100);
    const timer2 = setTimeout(updatePosition, 400);
    const timer3 = setTimeout(updatePosition, 1000);
    window.addEventListener('resize', updatePosition);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('resize', updatePosition);
    };
  }, [startSelector]);

  const BEAM_LENGTH = 140;

  const triggerLeft = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (leftAnim.active) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = rect.height;
    const viewportTop = -rect.top;
    const startY = Math.max(0, Math.min(containerHeight - BEAM_LENGTH, viewportTop));
    const endY = Math.max(0, Math.min(containerHeight - BEAM_LENGTH, viewportTop + window.innerHeight - BEAM_LENGTH));
    setLeftAnim(prev => ({
      active: true,
      key: prev.key + 1,
      startY,
      endY
    }));
  };

  const stopLeft = () => {
    // Intentional empty function to allow animation to complete fully once started
  };

  const triggerRight = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (rightAnim.active) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerHeight = rect.height;
    const viewportTop = -rect.top;
    const startY = Math.max(0, Math.min(containerHeight - BEAM_LENGTH, viewportTop));
    const endY = Math.max(0, Math.min(containerHeight - BEAM_LENGTH, viewportTop + window.innerHeight - BEAM_LENGTH));
    setRightAnim(prev => ({
      active: true,
      key: prev.key + 1,
      startY,
      endY
    }));
  };

  const stopRight = () => {
    // Intentional empty function to allow animation to complete fully once started
  };

  return (
    <div
      ref={containerRef}
      className="side-gridlines-container"
      aria-hidden="true"
      style={topOffset !== null ? { top: `${topOffset}px`, height: `calc(100% - ${topOffset}px)` } : undefined}
    >
      {/* Left Gridline */}
      <div
        className="side-gridline side-gridline-left"
        onMouseEnter={triggerLeft}
        onMouseLeave={stopLeft}
        onTouchStart={triggerLeft}
        onTouchEnd={stopLeft}
      >
        <div className="side-gridline-bar">
          {leftAnim.active && (
            <div
              key={leftAnim.key}
              className="side-gridline-beam animating"
              style={{
                '--beam-start-y': `${leftAnim.startY}px`,
                '--beam-end-y': `${leftAnim.endY}px`
              }}
              onAnimationEnd={() => setLeftAnim(prev => ({ ...prev, active: false }))}
            />
          )}
        </div>
      </div>

      {/* Right Gridline */}
      <div
        className="side-gridline side-gridline-right"
        onMouseEnter={triggerRight}
        onMouseLeave={stopRight}
        onTouchStart={triggerRight}
        onTouchEnd={stopRight}
      >
        <div className="side-gridline-bar">
          {rightAnim.active && (
            <div
              key={rightAnim.key}
              className="side-gridline-beam animating"
              style={{
                '--beam-start-y': `${rightAnim.startY}px`,
                '--beam-end-y': `${rightAnim.endY}px`
              }}
              onAnimationEnd={() => setRightAnim(prev => ({ ...prev, active: false }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideGridLines;
