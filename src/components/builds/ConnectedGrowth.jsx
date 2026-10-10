import React from 'react';

const ConnectedGrowth = ({ data }) => {
  if (!data) return null;

  const titleBold = data.titleBold || data.bold;
  const titleLight = data.titleLight || data.light;

  return (
    <section className="connected-growth-section">
      <div className="connected-growth-inner">
        {data.eyebrow && (
          <span className="connected-growth-eyebrow">{data.eyebrow}</span>
        )}

        <h2 className="connected-growth-title">
          <span className="connected-title-bold">{titleBold} </span>
          <span className="connected-title-light">{titleLight}</span>
        </h2>

        {data.desc && (
          <p className="connected-growth-desc">{data.desc}</p>
        )}
      </div>
    </section>
  );
};

export default ConnectedGrowth;
