import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { subtopicData } from '../../data/subtopicData';
import SideGridLines from '../../components/SideGridLines';
import './SubtopicPage.css';

const SubtopicPage = () => {
  const { slug, subtopicSlug } = useParams();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Format the title for display from the slug
  const title = subtopicSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Look up data or use fallback
  const data = subtopicData[subtopicSlug] || subtopicData["fallback"];

  return (
    <div className="subtopic-page" style={{ position: 'relative' }}>
      <SideGridLines />
      {/* 1. Hero Section */}
      <section className="subtopic-hero">
        <div className="container">
          <div className="st-hero-content">
            <span className="eyebrow gray" style={{ letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af' }}>
              {data.hero.eyebrow || `WHAT WE BUILD / ${title.toUpperCase()}`}
            </span>
            <h1 className="st-main-title" dangerouslySetInnerHTML={{ __html: data.hero.title }}></h1>
            <p className="st-hero-desc" dangerouslySetInnerHTML={{ __html: data.hero.desc }}></p>
            <div className="st-hero-buttons">
              <button className="btn btn-black">{data.hero.buttonText}</button>
              {data.hero.secondaryButtonText && (
                <button className="btn btn-outline-black">{data.hero.secondaryButtonText}</button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Centered Statement */}
      <section className="st-statement">
        <div className="container st-statement-container text-center">
          <h2 className="st-statement-text" dangerouslySetInnerHTML={{ __html: data.statement.text }}></h2>
          <p className="st-statement-sub">{data.statement.subText}</p>
        </div>
      </section>

      {/* 3. Features Grid */}
      <section className="st-features-grid-section">
        <div className="container">
          <span className="eyebrow gray" style={{ letterSpacing: '0.1em', fontSize: '0.75rem', fontWeight: 600, color: '#9ca3af', marginBottom: '1rem', display: 'block' }}>{data.featuresGrid.eyebrow}</span>
          <h2 className="st-section-title" dangerouslySetInnerHTML={{ __html: data.featuresGrid.title }}></h2>
          <div className="st-grid">
            {data.featuresGrid.features.map((feature, i) => (
              <div className="st-grid-card" key={i}>
                <span className="st-card-num">{feature.num}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Architecture Graph (Dark) */}
      <section className="st-arch-section bg-black">
        <div className="container st-arch-container">
          <div className="st-arch-left">
            <h2 className="st-section-title text-white" dangerouslySetInnerHTML={{ __html: data.architecture.title }}></h2>
            <p className="st-arch-desc">{data.architecture.desc}</p>
          </div>
          <div className="st-arch-right">
            {/* Custom Diagram Mockup - Vertical Flow */}
            <div className="st-diagram-vertical">
              <div className="dia-node dark">{data.architecture.diagram.node1}</div>
              <div className="dia-line vertical"></div>

              <div className="dia-node dark blue-border">{data.architecture.diagram.node2}</div>
              <div className="dia-line vertical"></div>

              <div className="dia-node purple-bg">{data.architecture.diagram.node3}</div>

              <div className="dia-line vertical has-branches"></div>
              <div className="dia-row gap-row">
                <div className="dia-node dark orange-border">{data.architecture.diagram.node4}</div>
                <div className="dia-node dark green-border">{data.architecture.diagram.node5}</div>
                <div className="dia-node dark blue-border">{data.architecture.diagram.node6}</div>
              </div>
              <div className="dia-line vertical has-branches-bottom"></div>

              <div className="dia-node purple-bg large">{data.architecture.diagram.node7}</div>
              <div className="dia-line vertical"></div>

              <div className="dia-node dark">{data.architecture.diagram.node8}</div>

              <div className="dia-line vertical has-branches-small"></div>
              <div className="dia-row gap-row-small">
                <div className="dia-node dark orange-border">{data.architecture.diagram.node9}</div>
                <div className="dia-node dark green-border">{data.architecture.diagram.node10}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Horizontal Values */}
      <section className="st-values-section">
        <div className="container">
          <div className="st-values-header">
            <span className="eyebrow blue">{data.coreValues.eyebrow}</span>
            <h2 className="st-section-title" dangerouslySetInnerHTML={{ __html: data.coreValues.title }}></h2>
            <p className="st-values-desc">{data.coreValues.desc}</p>
          </div>
          <div className="st-values-row">
            {data.coreValues.values.map((val, i) => (
              <div className="st-value-item" key={i}>
                <span className={`v-num text-${val.color}`}>{val.num}</span>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Complexity Accordion/List */}
      <section className="st-complexity-section bg-gray">
        <div className="container">
          <div className="st-complexity-header">
            <span className="eyebrow gray">{data.complexity.eyebrow}</span>
            <h2 className="st-section-title" dangerouslySetInnerHTML={{ __html: data.complexity.title }}></h2>
          </div>
          <div className="st-complexity-list">
            {data.complexity.items.map((item, i) => (
              <div className="st-comp-item" key={i}>
                <span className="st-comp-num">0{i + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Success Metrics (Bars) */}
      <section className="st-success-section">
        <div className="container st-success-container">
          <div className="st-success-left">
            <span className="eyebrow gray">{data.successMetrics.eyebrow}</span>
            <h2 className="st-section-title" dangerouslySetInnerHTML={{ __html: data.successMetrics.title }}></h2>
            <p>{data.successMetrics.desc}</p>
          </div>
          <div className="st-success-right">
            <div className="st-bars">
              {data.successMetrics.metrics.map((metric, i) => (
                <div className="st-bar-card" key={i}>
                  <div className={`st-bar-accent bg-${metric.color}`}></div>
                  <div className="st-bar-content">
                    <h4>{metric.label}</h4>
                    <p className="st-bar-desc">{metric.desc}</p>
                    <span className="st-bar-eyebrow">MEASURED PER DEPLOYMENT</span>
                    <div className="st-bar-track">
                      <div className={`st-bar-fill bg-${metric.color}`} style={{ width: metric.fill }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Orchestration Visual */}
      <section className="st-orchestration-section bg-gray">
        <div className="container">
          <h2 className="st-section-title st-orch-title" dangerouslySetInnerHTML={{ __html: data.orchestration.title }}></h2>

          <div className="st-orch-split">
            {/* Left Column */}
            <div className="st-orch-col">
              <span className="orch-eyebrow">SINGLE-PURPOSE AGENT</span>
              <p className="orch-desc-text">{data.orchestration.desc}</p>
              <div className="orch-simple-box">
                <span className="orch-simple-text">INPUT <span className="arrow">→</span> AGENT <span className="arrow">→</span> ACTION</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="st-orch-col st-orch-col-right">
              <span className="orch-eyebrow text-purple">MULTI-AGENT SYSTEM</span>
              <p className="orch-desc-text">{data.orchestration.mockup.desc}</p>
              <div className="orch-system-box">
                <div className="orch-system-header text-purple">{data.orchestration.mockup.headerTag}</div>
                <div className="orch-system-agents">
                  {data.orchestration.mockup.branches.map((b, i) => (
                    <div className={`orch-agent-box text-${b.color}`} key={i}>
                      {b.tag}
                    </div>
                  ))}
                </div>
                <div className="orch-system-footer">OUTPUT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Evolution Metrics */}
      <section className="st-evolution-section">
        <div className="container st-evo-container">
          <div className="st-evo-left">
            <span className="eyebrow gray">{data.evolution.eyebrow}</span>
            <h2 className="st-section-title" dangerouslySetInnerHTML={{ __html: data.evolution.title }}></h2>
            <p className="evo-desc">{data.evolution.desc}</p>
          </div>
          <div className="st-evo-right">
            <div className="evo-grid">
              {data.evolution.stats.map((stat, i) => (
                <div className="evo-card" key={i}>
                  <span className="evo-card-num">0{i + 1}</span>
                  <h3>{stat.label}</h3>
                  <div className="evo-card-val">
                    <span>↓</span>
                    <span>{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Agent Roles Table */}
      <section className="st-roles-section">
        <div className="container">
          <div className="st-roles-header">
            <span className="eyebrow gray">{data.rolesTable.eyebrow}</span>
            <h2 className="st-section-title" dangerouslySetInnerHTML={{ __html: data.rolesTable.title }}></h2>
            <p className="st-roles-desc">{data.rolesTable.desc}</p>
          </div>

          <div className="st-roles-table">
            {data.rolesTable.roles.map((role, i) => (
              <div className="role-row" key={i}>
                <div className="r-col-from">
                  <span className="r-eyebrow">FROM</span>
                  <h4>{role.title}</h4>
                </div>
                <div className={`r-col-arrow text-${role.dotColor}`}>→</div>
                <div className="r-col-to">
                  <span className="r-eyebrow">TO</span>
                  <h4>{role.status}</h4>
                </div>
                <div className="r-col-desc"><p>{role.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="st-faq-section bg-gray">
        <div className="container st-faq-container">
          <div className="faq-left">
            <span className="eyebrow gray">{data.faq?.eyebrow || 'FAQ'}</span>
            <h2 className="faq-title" dangerouslySetInnerHTML={{ __html: data.faq?.title || 'QUESTIONS,<br/>ANSWERED.' }}></h2>
          </div>
          <div className="faq-right">
            <div className="faq-list">
              {(data.faqs || (data.faq && data.faq.questions ? data.faq.questions.map(q => ({ q, a: '' })) : [])).map((faq, i) => (
                <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i} onClick={() => toggleFaq(i)}>
                  <div className="faq-question">
                    <h4>{faq.q}</h4>
                    <span className="faq-toggle">{activeFaq === i ? '×' : '+'}</span>
                  </div>
                  {activeFaq === i && faq.a && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="st-cta-section">
        <div className="container">
          <div className="st-cta-content">
            <h2>{data.cta.title}</h2>
            {data.cta.subtitle && <p>{data.cta.subtitle}</p>}
            <div className="st-cta-links">
              <button className="btn btn-link-white">{data.cta.buttonText} &rarr;</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SubtopicPage;
