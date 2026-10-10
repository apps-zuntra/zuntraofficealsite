import React, { useState } from 'react';
import './HorizontalGridLine.css';

const HorizontalGridLine = ({ maxWidth, className = '', style = {} }) => {
  const [animating, setAnimating] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleMouseEnter = (e) => {
    e.stopPropagation();
    if (!animating) {
      setAnimKey(prev => prev + 1);
      setAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    // Intentional empty function to allow animation to complete fully once started
  };

  const handleAnimationEnd = () => {
    setAnimating(false);
  };

  const combinedStyle = maxWidth ? { maxWidth, ...style } : style;

  return (
    <div 
      className={`horizontal-gridline ${className}`}
      style={combinedStyle}
      aria-hidden="true"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div className="horizontal-gridline-bar">
        {animating && (
          <div 
            key={animKey}
            className="horizontal-gridline-beam animating"
            onAnimationEnd={handleAnimationEnd}
          />
        )}
      </div>
    </div>
  );
};

export default HorizontalGridLine;
