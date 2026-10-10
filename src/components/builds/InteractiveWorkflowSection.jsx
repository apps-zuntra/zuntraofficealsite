import React, { useState } from 'react';

const InteractiveWorkflowSection = ({ data, build }) => {
  const currentBuild = build || {};
  const resolvedSteps = data?.steps || (currentBuild.workflowSteps || []).map((s, idx) => ({
    num: s.id || `0${idx + 1}`,
    title: s.title,
    subtitle: s.desc,
    status: s.status,
    dotColor: s.dotColor
  }));

  if (!resolvedSteps || resolvedSteps.length === 0) return null;

  const [activeStep, setActiveStep] = useState(0);
  const current = resolvedSteps[activeStep] || resolvedSteps[0];

  const eyebrow = data?.eyebrow || currentBuild.workflowEyebrow || 'WORKFLOW';
  const fullTitle = data?.titleBold ? `${data.titleBold} ${data.titleLight || ''}` : (currentBuild.workflowHeaderTitle || 'From signal to measurable growth.');
  const titleParts = fullTitle.split(' ');
  const titleBold = data?.titleBold || titleParts.slice(0, 2).join(' ');
  const titleLight = data?.titleLight || titleParts.slice(2).join(' ');

  return (
    <section className="interactive-workflow-section" id="workflow">
      <div className="workflow-interface-grid">
        {/* Left Column: Header + 6 Steps List */}
        <div className="workflow-left-column">
          <div className="workflow-header-inside">
            {eyebrow && (
              <span className="workflow-eyebrow">{eyebrow}</span>
            )}
            <h2 className="workflow-main-title">
              <span className="wf-title-bold">{titleBold} </span>
              <span className="wf-title-light">{titleLight}</span>
            </h2>
          </div>

          <div className="workflow-steps-list">
            {resolvedSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  className={`workflow-step-nav-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-nav-indicator"></div>
                  <div className="step-nav-content">
                    <span className="step-nav-num">{step.num}</span>
                    <div className="step-nav-text">
                      <h4 className="step-nav-title">{step.title}</h4>
                      <p className="step-nav-desc">{step.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Detail Card */}
        <div className="workflow-detail-column">
          <div className="workflow-system-card">
            <div className="wf-system-header">
              <span className="wf-sys-title">{currentBuild.workflowHeaderTitle || currentBuild.name || 'System Workflow'}</span>
              <span className="wf-sys-badge">{current.status || 'ACTIVE'}</span>
            </div>

            <div className="wf-sys-center">
              <div className="wf-sys-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <span className="wf-sys-eyebrow">STEP {current.num}{current.status ? ` · ${current.status}` : ''}</span>
              <h3 className="wf-sys-headline">{current.title}</h3>
              <p className="wf-sys-subtext">{current.subtitle || current.desc}</p>
            </div>

            {/* 6-Node Stepper Bar with dots and labels */}
            <div className="wf-sys-stepper">
              {resolvedSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const label = step.shortLabel || step.title.split(' ')[0];
                return (
                  <React.Fragment key={idx}>
                    <button
                      type="button"
                      className={`wf-stepper-node ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveStep(idx)}
                    >
                      {isActive ? (
                        <div className="node-active-wrap">
                          <span className="node-active-pill">{label}</span>
                        </div>
                      ) : (
                        <div className="node-inactive-wrap">
                          <span className="node-circle-dot"></span>
                          <span className="node-below-label">{label}</span>
                        </div>
                      )}
                    </button>
                    {idx < resolvedSteps.length - 1 && <span className="node-connector-line"></span>}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Dynamic Chart Display */}
            <div className="wf-sys-chart-box">
              <svg width="100%" height="90" viewBox="0 0 320 90" fill="none">
                <defs>
                  <linearGradient id="wfSysGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(37, 99, 235, 0.12)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  d={`M 10 ${75 - activeStep * 6} Q 70 ${65 - activeStep * 4} 120 ${68 - activeStep * 5} T 210 ${40 - activeStep * 4} T 310 ${15 - activeStep * 2} L 310 90 L 10 90 Z`}
                  fill="url(#wfSysGrad)"
                />
                <path
                  d={`M 10 ${75 - activeStep * 6} Q 70 ${65 - activeStep * 4} 120 ${68 - activeStep * 5} T 210 ${40 - activeStep * 4} T 310 ${15 - activeStep * 2}`}
                  stroke="#2563eb"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d={`M 10 ${80 - activeStep * 5} Q 70 ${72 - activeStep * 3} 120 ${75 - activeStep * 4} T 210 ${50 - activeStep * 3} T 310 ${30 - activeStep * 2}`}
                  stroke="#93c5fd"
                  strokeWidth="1.6"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="wf-sys-footer">
              Customer context · Connected systems · Measurable outcomes
            </div>
          </div>

          <span className="card-caption-note text-center">
            Illustrative workflow · select a step to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default InteractiveWorkflowSection;
