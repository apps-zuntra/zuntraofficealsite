import React from 'react';
import './InteractiveBanner.css';

const InteractiveBanner = ({ images }) => {
  // Use provided images or fallback to mock data
  const bannerImages = images && images.length === 3 ? images : [null, null, null];
  
  // For the mock backgrounds
  const mockColors = ['red', 'blue', 'green'];

  return (
    <div className="interactive-banner-wrapper">
      <div className="project-container">
        <div className="project full">
          <div className="preview-container">
            {bannerImages.map((img, index) => (
              <picture key={index} tabIndex="0">
                {img ? (
                  <img src={img} alt={`Banner img ${index + 1}`} className="fill" />
                ) : (
                  <div className={`bg ${mockColors[index]}`} alt="fakeCap"></div>
                )}
              </picture>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBanner;
