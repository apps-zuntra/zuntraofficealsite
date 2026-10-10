import React from 'react';
import { Link } from 'react-router-dom';
import './AiProductsSection.css';

const aiProducts = [
  {
    id: 'entwy',
    tag: 'ENTWY',
    title: 'Intelligence that works alongside your team.',
    desc: 'An AI operations layer that connects to your existing tools, learns your team\'s workflows, and surfaces actionable insights without switching context.',
    features: ['Context-aware AI assistant', 'Tool integrations', 'Team knowledge base', 'Workflow automation'],
    color: '#8b5cf6',
    platformName: 'Entwy',
    link: '/enterprise/entwy'
  },
  {
    id: 'legynai',
    tag: 'LEGYNAI',
    title: 'Legal intelligence at the speed of business.',
    desc: 'AI-powered contract analysis, legal research and compliance monitoring built for legal teams that need to move fast without missing risk.',
    features: ['Contract review', 'Risk flagging', 'Compliance monitoring', 'Precedent search'],
    color: '#3b82f6',
    platformName: 'LegynAI',
    link: '/enterprise/legynai'
  },
  {
    id: 'workzi',
    tag: 'WORKZI',
    title: 'The intelligent work layer for enterprise teams.',
    desc: 'AI-native project management and collaboration platform that connects tasks, people, data and outcomes into a coherent operational picture.',
    features: ['Smart task routing', 'AI summaries', 'Cross-team visibility', 'Outcome tracking'],
    color: '#10b981',
    platformName: 'Workzi',
    link: '/enterprise/workzi'
  }
];

const AiProductsSection = () => {
  return (
    <section className="ai-products-section">
      <div className="container">
        <div className="ai-prod-header">
          <span className="eyebrow">AI PRODUCTS</span>
          <h2>PLATFORMS BUILT<br />FOR REAL WORK.</h2>
        </div>

        <div className="ai-prod-list">
          {aiProducts.map((prod) => (
            <div className="ai-prod-row" key={prod.id}>
              <div className="ai-prod-text">
                <span className="prod-tag" style={{ color: prod.color }}>{prod.tag}</span>
                <h3>{prod.title}</h3>
                <p>{prod.desc}</p>
                <ul className="prod-feature-list">
                  {prod.features.map((feat, i) => (
                    <li key={i}>
                      <span className="dot" style={{ backgroundColor: prod.color }}></span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to={prod.link} className="btn-explore">
                  EXPLORE {prod.tag} &rarr;
                </Link>
              </div>

              <div className="ai-prod-visual">
                <div className="prod-mockup" style={{ borderTopColor: prod.color }}>
                  <div className="mockup-header">
                    <div className="m-info">
                      <div className="m-name">{prod.platformName}</div>
                      <div className="m-sub">AI Platform</div>
                    </div>
                    <div className="m-dots">
                      <span style={{ background: prod.color }}></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="mockup-body">
                    {prod.features.map((feat, i) => (
                      <div className="m-row" key={i}>
                        <div className="m-row-left">
                          <div className="m-icon" style={{ background: `${prod.color}20` }}>
                            <div className="m-inner-icon" style={{ background: prod.color }}></div>
                          </div>
                          <span className="m-feat-text">{feat}</span>
                        </div>
                        <div className="m-status">Active</div>
                      </div>
                    ))}
                  </div>
                  <div className="mockup-footer" style={{ color: prod.color }}>
                    POWERED BY ZAI &rarr;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiProductsSection;
