import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const DepthCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        perspective: 1000,
        scale: 1.02,
        easing: "cubic-bezier(.03,.98,.52,.99)"
      });
    }
    
    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`depth-card-wrapper ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      <div 
        style={{
          transform: 'translateZ(30px)',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DepthCard;
