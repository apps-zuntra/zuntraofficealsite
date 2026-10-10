import React from 'react';

const ComplexityBox = ({ data }) => {
  if (!data) return null;

  return (
    <section className="complexity-box-section">
      <div className="complexity-box-card">
        <div className="complexity-col-left">
          <h3 className="complexity-main-title">{data.title}</h3>
        </div>
        <div className="complexity-col-right">
          <p className="complexity-desc-text">{data.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default ComplexityBox;
