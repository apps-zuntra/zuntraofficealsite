import React, { useRef, useState, useEffect } from 'react';
import './ThreeDCard.css';

const ThreeDCard = ({ children, className = '', style = {}, ...rest }) => {
  const cardRef = useRef(null);
  const boundsRef = useRef(null);

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = '';
      const glow = cardRef.current.querySelector('.glow');
      if (glow) {
        glow.style.backgroundImage = '';
      }
    }
    boundsRef.current = null;
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // Capture bounds once per hover to prevent jitter from transformed bounds
    if (!boundsRef.current) {
      boundsRef.current = cardRef.current.getBoundingClientRect();
    }
    const bounds = boundsRef.current;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2
    };
    
    // Calculate rotation between -10 and 10 degrees based on mouse position
    const maxRotation = 10;
    const rotateX = (center.y / (bounds.height / 2)) * -maxRotation;
    const rotateY = (center.x / (bounds.width / 2)) * maxRotation;
    
    cardRef.current.style.transform = `
      perspective(1500px)
      scale3d(1.04, 1.04, 1.04)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
    
    const glow = cardRef.current.querySelector('.glow');
    if (glow) {
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${leftX}px
          ${topY}px,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(255, 255, 255, 0) 60%
        )
      `;
    }
  };

  return (
    <div 
      className={`threed-card-container ${className}`}
      ref={cardRef}
      style={style}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...rest}
    >
      {children}
      <div className="glow" />
    </div>
  );
};

export default ThreeDCard;
