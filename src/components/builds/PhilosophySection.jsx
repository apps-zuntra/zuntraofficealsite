import React from 'react';

const PhilosophySection = ({ data }) => {
  if (!data) return null;

  return (
    <section className="philosophy-section">
      <div className="container">
        <div className="philosophy-card-split">
          <div className="phil-left-col">
            {data.eyebrow && (
              <span className="phil-eyebrow">{data.eyebrow}</span>
            )}
            <h2 className="phil-main-title">
              <span className="phil-title-bold">{data.titleBold}</span>
              <span className="phil-title-light">{data.titleLight}</span>
            </h2>
          </div>

          <div className="phil-right-col">
            {data.paragraphs && data.paragraphs.map((p, i) => (
              <p key={i} className="phil-paragraph">{p}</p>
            ))}

            {data.tags && (
              <div className="phil-tags-row">
                {data.tags.map((tag, i) => (
                  <span key={i} className="phil-tag-pill">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
