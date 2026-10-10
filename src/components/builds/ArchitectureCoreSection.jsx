import React from 'react';

const ArchitectureCoreSection = ({ data, build }) => {
  const currentBuild = build || {};
  const arch = data || currentBuild.architecture;
  if (!arch) return null;

  const cards = arch.cards || [];
  const topNodes = arch.topNodes || cards.slice(0, 3);

  const coreNode = arch.coreNode || {
    title: currentBuild.name || 'Platform Core',
    desc: currentBuild.title || 'One connected system'
  };

  const bottomNodes = arch.bottomNodes || (cards.length > 3 ? cards.slice(3, 6) : []);

  return (
    <section className="architecture-core-section">
      <div className="container">
        <div className="arch-core-header">
          {arch.eyebrow && (
            <span className="arch-eyebrow">{arch.eyebrow}</span>
          )}
          <h2 className="arch-core-title">{arch.title}</h2>
        </div>

        <div className="arch-core-diagram-container">
          {/* Top 3 Nodes */}
          <div className="arch-top-nodes-row">
            {topNodes.map((node, idx) => (
              <div key={idx} className="arch-node-card">
                <div className="arch-node-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <h4 className="arch-node-title">{node.title}</h4>
                <p className="arch-node-desc">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Top SVG Connecting Tree Lines (Top 3 down to center) */}
          <div className="arch-connector-svg-wrapper">
            <svg viewBox="0 0 700 60" width="100%" height="60" fill="none" preserveAspectRatio="none">
              <path d="M 115 0 V 30 H 350 V 60" stroke="#cbd5e1" strokeWidth="1.5" />
              <path d="M 350 0 V 60" stroke="#cbd5e1" strokeWidth="1.5" />
              <path d="M 585 0 V 30 H 350 V 60" stroke="#cbd5e1" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Center Core Node */}
          <div className="arch-center-core-wrapper">
            <div className="arch-core-node-card">
              <div className="arch-z-logo">Z</div>
              <div className="arch-core-text">
                <span className="arch-core-title-text">{coreNode.title}</span>
                <span className="arch-core-subtitle-text">{coreNode.desc}</span>
              </div>
            </div>
          </div>

          {/* Bottom SVG Connecting Tree Lines (Center down to bottom 3) */}
          {bottomNodes && bottomNodes.length > 0 && (
            <>
              <div className="arch-connector-svg-wrapper arch-bottom-connector">
                <svg viewBox="0 0 700 60" width="100%" height="60" fill="none" preserveAspectRatio="none">
                  <path d="M 350 0 V 30 H 115 V 60" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M 350 0 V 60" stroke="#cbd5e1" strokeWidth="1.5" />
                  <path d="M 350 0 V 30 H 585 V 60" stroke="#cbd5e1" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Bottom 3 Nodes */}
              <div className="arch-top-nodes-row arch-bottom-nodes-row">
                {bottomNodes.map((node, idx) => (
                  <div key={idx} className="arch-node-card">
                    <div className="arch-node-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="3" width="6" height="6" rx="1.5" />
                        <rect x="3" y="15" width="6" height="6" rx="1.5" />
                        <rect x="15" y="15" width="6" height="6" rx="1.5" />
                        <path d="M12 9v3m0 0H6v3m6-3h6v3" />
                      </svg>
                    </div>
                    <h4 className="arch-node-title">{node.title}</h4>
                    <p className="arch-node-desc">{node.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureCoreSection;
