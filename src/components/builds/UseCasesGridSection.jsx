import React from 'react';
import { Link } from 'react-router-dom';
import IllustrativeMockup from './IllustrativeMockup';

const UseCasesGridSection = ({ data, build, slug }) => {
  const currentBuild = build || {};
  const currentSlug = slug || currentBuild.id;

  const getMockupType = (slugKey, idx) => {
    const map = {
      'custom-ai-agent-development': 'ai-agent',
      'rpa-workflow-automation-bpm': 'rpa-workflow',
      'ai-model-integration-mlops': 'mlops-pipeline',
      'generative-ai-content-knowledge-tooling': 'doc-intel',
      'ai-powered-bi-analytics-dashboards': 'attribution',
      'predictive-analytics-forecasting': 'attribution',
      'ai-driven-recommendation-engines': 'commerce',
      'ai-powered-fraud-detection-risk-scoring': 'security-shield',
      'enterprise-chatbot-conversational-ai': 'chat-lead',
      'nlp-document-intelligence': 'doc-intel',
      'custom-saas-product-development': 'saas-arch',
      'ui-ux-design-product-design-systems': 'design-system',
      'mobile-app-development': 'mobile-app',
      'api-development-third-party-integration': 'api-gateway',
      'legacy-system-modernization': 'stack',
      'qa-testing-devops-automation': 'workflow',
      'low-code-no-code-platform-development': 'profile',
      'enterprise-software-integration-erp-crm': 'stack',
      'it-consulting-bpo-managed-services': 'partners',
      'cloud-migration-infrastructure-setup': 'cloud-infra',
      'data-engineering-pipeline-architecture': 'data-pipeline',
      'enterprise-data-warehousing-governance': 'warehouse-schema',
      'cybersecurity-compliance-advisory': 'security-shield',
      'digital-transformation-strategy-roadmapping': 'stack',
      'devsecops-ci-cd-pipeline-setup': 'workflow',
      'real-time-data-streaming-event-driven-architecture': 'data-pipeline',
      'marketing-automation-crm-platforms': 'workflow',
      'customer-data-platforms-personalization-engines': 'profile',
      'e-commerce-platform-development-optimization': 'commerce',
      'seo-aeo-strategy-content-engineering': 'search',
      'marketing-analytics-attribution-modeling': 'attribution',
      'conversational-commerce-ai-driven-lead-qualification': 'chat-lead',
      'loyalty-retention-platform-development': 'lifecycle',
      'marketing-tech-stack-audits-consolidation': 'stack',
      'influencer-affiliate-program-tooling': 'partners'
    };
    return map[slugKey] || ['attribution', 'workflow', 'profile', 'search', 'commerce'][idx % 5];
  };

  const resolvedItems = data?.items || (currentBuild.useCases || []).map((uc, idx) => ({
    id: uc.id || `0${idx + 1}`,
    title: uc.title,
    desc: uc.desc,
    slug: uc.slug,
    mockupType: getMockupType(uc.slug, idx)
  }));

  if (!resolvedItems || resolvedItems.length === 0) return null;

  const eyebrow = data?.eyebrow || currentBuild.useCasesEyebrow || 'USE CASES';
  const fullTitle = data?.titleBold ? `${data.titleBold} ${data.titleLight || ''}` : (currentBuild.useCasesTitle || 'Solutions built for real business challenges.');
  const titleParts = fullTitle.split(' ');
  const titleBold = data?.titleBold || titleParts.slice(0, 2).join(' ');
  const titleLight = data?.titleLight || titleParts.slice(2).join(' ');

  return (
    <section className="use-cases-grid-section">
      <div className="container">
        {/* Header */}
        <div className="use-cases-section-header">
          {eyebrow && (
            <span className="use-cases-eyebrow">{eyebrow}</span>
          )}
          <h2 className="use-cases-main-title">
            <span className="uc-title-bold">{titleBold} </span>
            <span className="uc-title-light">{titleLight}</span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="use-cases-3col-grid">
          {resolvedItems.map((item, idx) => {
            const subtopicSlug = item.slug || item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const linkUrl = `/build/${slug}/${subtopicSlug}`;

            return (
              <Link
                key={idx}
                to={linkUrl}
                className="use-case-card-item"
              >
                <div className="grid-card-visual-wrapper">
                  <IllustrativeMockup type={item.mockupType || 'attribution'} />
                </div>

                <span className="card-caption-note">Illustrative system view</span>

                <div className="grid-card-info">
                  <span className="grid-card-eyebrow">
                    {item.id} / Use case
                  </span>
                  <h4 className="grid-card-title">{item.title}</h4>
                  <p className="grid-card-desc">{item.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGridSection;
