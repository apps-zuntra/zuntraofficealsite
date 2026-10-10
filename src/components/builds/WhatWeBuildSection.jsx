import React from 'react';
import { Link } from 'react-router-dom';
import IllustrativeMockup from './IllustrativeMockup';

const WhatWeBuildSection = ({ data, build, slug }) => {
  const currentBuild = build || {};
  const currentSlug = slug || currentBuild.id;

  const getMockupType = (pillarId, idx) => {
    if (pillarId === 'ai-software-automation') {
      return ['ai-agent', 'rpa-workflow', 'mlops-pipeline', 'attribution', 'chat-lead'][idx] || 'ai-agent';
    }
    if (pillarId === 'product-engineering') {
      return ['saas-arch', 'design-system', 'mobile-app', 'api-gateway', 'stack'][idx] || 'saas-arch';
    }
    if (pillarId === 'cloud-data') {
      return ['cloud-infra', 'data-pipeline', 'warehouse-schema', 'security-shield', 'attribution'][idx] || 'cloud-infra';
    }
    return ['workflow', 'profile', 'commerce', 'search', 'attribution'][idx] || 'workflow';
  };

  const resolvedCards = data?.cards || (currentBuild.featureBlocks || []).map((fb, idx) => {
    const parts = (fb.eyebrow || '').split('/');
    const num = (parts[0] || `0${idx + 1}`).trim();
    const category = (parts[1] || 'Platform').trim();
    return {
      num,
      category,
      title: fb.title,
      desc: fb.desc,
      mockupType: getMockupType(currentSlug, idx)
    };
  });

  if (!resolvedCards || resolvedCards.length === 0) return null;

  const primaryCards = resolvedCards.slice(0, 4);
  const featuredCard = data?.featuredCard || resolvedCards[4] || null;

  const eyebrow = data?.eyebrow || currentBuild.featuresHeaderDesc || 'WHAT WE BUILD';
  const fullTitle = data?.titleBold ? `${data.titleBold} ${data.titleLight || ''}` : (currentBuild.featuresHeaderTitle || 'From concept to execution.');
  const titleParts = fullTitle.split(' ');
  const titleBold = data?.titleBold || titleParts.slice(0, 2).join(' ');
  const titleLight = data?.titleLight || titleParts.slice(2).join(' ');

  return (
    <section className="what-we-build-section" id="what-we-build">
      <div className="what-we-build-header">
        {eyebrow && (
          <span className="what-we-build-eyebrow">{eyebrow}</span>
        )}
        <h2 className="what-we-build-title">
          <span className="wwb-title-bold">{titleBold} </span>
          <span className="wwb-title-light">{titleLight}</span>
        </h2>
      </div>

      <div className="what-we-build-grid-container">
        {/* 2x2 Grid for Cards 01 - 04 */}
        <div className="what-we-build-grid">
          {primaryCards.map((card, idx) => {
            const CardInner = (
              <>
                <div className="grid-card-visual-wrapper">
                  <IllustrativeMockup type={card.mockupType} />
                </div>

                <span className="card-caption-note">Illustrative system view</span>

                <div className="grid-card-info">
                  <span className="grid-card-eyebrow">
                    {card.num} / {card.category}
                  </span>
                  <h4 className="grid-card-title">{card.title}</h4>
                  <p className="grid-card-desc">{card.desc}</p>
                </div>
              </>
            );

            if (card.link) {
              return (
                <Link
                  key={idx}
                  to={card.link}
                  className="build-grid-card"
                >
                  {CardInner}
                </Link>
              );
            }

            return (
              <div key={idx} className="build-grid-card">
                {CardInner}
              </div>
            );
          })}
        </div>

        {/* 2-Column Wide Card for 05 (if present) */}
        {featuredCard && (
          featuredCard.link ? (
            <Link to={featuredCard.link} className="what-we-build-featured-card">
              <div className="wwb-feat-left">
                <span className="grid-card-eyebrow">
                  {featuredCard.num} / {featuredCard.category}
                </span>
                <h3 className="wwb-feat-title">{featuredCard.title}</h3>
                <p className="wwb-feat-desc">{featuredCard.desc}</p>
              </div>

              <div className="wwb-feat-right">
                <div className="grid-card-visual-wrapper feat-visual">
                  <IllustrativeMockup type={featuredCard.mockupType} />
                </div>
                <span className="card-caption-note">Illustrative system view</span>
              </div>
            </Link>
          ) : (
            <div className="what-we-build-featured-card">
              <div className="wwb-feat-left">
                <span className="grid-card-eyebrow">
                  {featuredCard.num} / {featuredCard.category}
                </span>
                <h3 className="wwb-feat-title">{featuredCard.title}</h3>
                <p className="wwb-feat-desc">{featuredCard.desc}</p>
              </div>

              <div className="wwb-feat-right">
                <div className="grid-card-visual-wrapper feat-visual">
                  <IllustrativeMockup type={featuredCard.mockupType} />
                </div>
                <span className="card-caption-note">Illustrative system view</span>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default WhatWeBuildSection;
