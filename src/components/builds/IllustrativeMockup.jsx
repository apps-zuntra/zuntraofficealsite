import React from 'react';

const IllustrativeMockup = ({ type }) => {
  // 1. Marketing Automation Workflow
  if (type === 'workflow') {
    return (
      <div className="mockup-workflow">
        <div className="wf-trigger-box">
          <div className="wf-trigger-left">
            <div className="wf-icon-badge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <div>
              <span className="wf-trigger-label">TRIGGER</span>
              <span className="wf-trigger-title">Customer signal received</span>
            </div>
          </div>
          <span className="wf-trigger-dots">···</span>
        </div>

        <div className="wf-connector-vertical"></div>

        <div className="wf-step-box">
          <svg className="wf-step-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <span>Match customer segment</span>
        </div>

        <svg className="wf-fork-svg" viewBox="0 0 290 22" fill="none">
          <path d="M145 0 V10 H72 V22 M145 10 H218 V22" stroke="#cbd5e1" strokeWidth="1.2" />
        </svg>

        <div className="wf-branches-row">
          <div className="wf-branch-box">
            <div className="branch-icon purple">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span>Personalize journey</span>
          </div>

          <div className="wf-branch-box">
            <div className="branch-icon green">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span>Update CRM</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Customer Profile
  if (type === 'profile') {
    return (
      <div className="mockup-profile">
        <div className="profile-card-header">
          <span className="profile-header-title">Customer profile</span>
          <span className="profile-badge-unified">Unified</span>
        </div>

        <div className="profile-main-user-row">
          <div className="profile-avatar-circle">C</div>
          <div>
            <div className="profile-user-name">Connected customer</div>
            <div className="profile-user-sub">One profile. Every touchpoint.</div>
          </div>
        </div>

        <div className="profile-fields-list">
          <div className="profile-field-row">
            <span className="pf-label">Source</span>
            <span className="pf-value">Web · CRM · Commerce</span>
          </div>
          <div className="profile-field-row">
            <span className="pf-label">Journey stage</span>
            <span className="pf-value">
              <span className="pf-dot-green"></span> Engaged
            </span>
          </div>
          <div className="profile-field-row">
            <span className="pf-label">Segment</span>
            <span className="pf-value">High intent</span>
          </div>
        </div>

        <div className="profile-bottom-tabs">
          <span className="profile-tab-pill">Behavior</span>
          <span className="profile-tab-pill">Preferences</span>
          <span className="profile-tab-pill">History</span>
        </div>
      </div>
    );
  }

  // 3. Commerce Journey
  if (type === 'commerce') {
    return (
      <div className="mockup-commerce">
        <div className="commerce-card-header">
          <span className="commerce-header-title">Commerce journey</span>
          <span className="commerce-badge-connected">Connected</span>
        </div>

        <div className="commerce-stepper-tabs">
          <span className="comm-step">Discover</span>
          <span className="comm-step">Explore</span>
          <span className="comm-step active">Convert</span>
        </div>

        <div className="commerce-split-body">
          <div className="comm-left-prod-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="comm-prod-label">Product experience</span>
          </div>

          <div className="comm-right-checkout">
            <span className="comm-checkout-title">Seamless checkout</span>
            <div className="comm-input-placeholder">Customer details</div>
            <div className="comm-input-placeholder">Payment integration</div>
            <button className="comm-btn-complete" type="button">Complete journey</button>
          </div>
        </div>

        <div className="commerce-footer-summary">
          Storefront · Checkout · Customer data
        </div>
      </div>
    );
  }

  // 4. Search & Content
  if (type === 'search') {
    return (
      <div className="mockup-search">
        <div className="search-input-pill-bar">
          <svg className="search-bar-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="search-placeholder-text">Your next customer's question</span>
        </div>

        <div className="search-inner-card-content">
          <span className="search-aeo-eyebrow">SEARCH & ANSWER ENGINES</span>
          <div className="search-aeo-title">Relevant answers. Discoverable content.</div>
          <div className="search-aeo-desc">Technical SEO, content architecture, and answer-ready experiences.</div>
          <div className="search-skeleton-lines">
            <div className="skeleton-bar w80"></div>
            <div className="skeleton-bar w50"></div>
          </div>
          <div className="search-tags-row">
            <span className="search-tag-pill">Technical SEO</span>
            <span className="search-tag-pill">Search intent</span>
            <span className="search-tag-pill">AEO</span>
          </div>
        </div>
      </div>
    );
  }

  // 5. Growth Intelligence / Attribution
  if (type === 'attribution') {
    return (
      <div className="mockup-attribution">
        <div className="attr-header">
          <span className="attr-title">Growth intelligence</span>
          <span className="attr-badge">Attribution</span>
        </div>

        <div className="attr-legend">
          <span className="legend-item"><span className="legend-dot solid"></span> Customer journey</span>
          <span className="legend-item"><span className="legend-dot dashed"></span> Channel performance</span>
        </div>

        <div className="attr-chart-wrapper">
          <svg width="100%" height="90" viewBox="0 0 280 90" fill="none">
            <defs>
              <linearGradient id="attrGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.12)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Area Fill */}
            <path
              d="M 10 70 Q 50 65 80 68 T 140 45 T 190 32 T 260 12 L 260 85 L 10 85 Z"
              fill="url(#attrGrad)"
            />
            {/* Solid Main Line */}
            <path
              d="M 10 70 Q 50 65 80 68 T 140 45 T 190 32 T 260 12"
              stroke="#2563eb"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Dashed Secondary Line */}
            <path
              d="M 10 76 Q 50 72 80 74 T 140 55 T 190 50 T 260 30"
              stroke="#93c5fd"
              strokeWidth="1.8"
              strokeDasharray="4 4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="attr-x-axis">
          <span>Discovery</span>
          <span>Engagement</span>
          <span>Conversion</span>
        </div>
      </div>
    );
  }

  // 6. Conversational Qualification (AI + CRM)
  if (type === 'chat-lead') {
    return (
      <div className="mockup-chat-lead">
        <div className="chat-lead-header">
          <span className="chat-lead-title">Conversational qualification</span>
          <span className="chat-lead-badge">AI + CRM</span>
        </div>

        <div className="chat-bubbles-list">
          <div className="chat-bubble bot">
            What are you looking to grow?
          </div>
          <div className="chat-bubble user">
            A more connected customer journey.
          </div>
          <div className="chat-bubble bot">
            Let's connect you with the right team.
          </div>
        </div>

        <div className="chat-route-status">
          <span className="route-check">✓</span> Route to sales workflow
        </div>
      </div>
    );
  }

  // 7. Customer Lifecycle (Retention)
  if (type === 'lifecycle') {
    return (
      <div className="mockup-lifecycle">
        <div className="lifecycle-header">
          <span className="lifecycle-title">Customer lifecycle</span>
          <span className="lifecycle-badge">Retention</span>
        </div>

        <div className="lifecycle-chart-row">
          <div className="lifecycle-donut-wrapper">
            <svg width="84" height="84" viewBox="0 0 84 84">
              <circle cx="42" cy="42" r="34" fill="none" stroke="#e0e7ff" strokeWidth="8" />
              <circle
                cx="42"
                cy="42"
                r="34"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="8"
                strokeDasharray="160 220"
                strokeLinecap="round"
                transform="rotate(-90 42 42)"
              />
            </svg>
            <div className="lifecycle-center-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          <div className="lifecycle-stages-list">
            <div className="lc-stage-item"><span className="lc-dot blue"></span> Engage</div>
            <div className="lc-stage-item"><span className="lc-dot purple"></span> Reward</div>
            <div className="lc-stage-item"><span className="lc-dot teal"></span> Retain</div>
          </div>
        </div>

        <div className="lifecycle-footer">
          Loyalty · Referrals · Memberships
        </div>
      </div>
    );
  }

  // 8. Connected Stack (Integration)
  if (type === 'stack') {
    const apps = [
      { name: 'CRM', color: '#3b82f6' },
      { name: 'CDP', color: '#8b5cf6' },
      { name: 'Web', color: '#0284c7' },
      { name: 'SEO', color: '#ec4899' },
      { name: 'Sales', color: '#f59e0b' },
      { name: 'BI', color: '#10b981' }
    ];

    return (
      <div className="mockup-stack">
        <div className="stack-header">
          <span className="stack-title">Connected stack</span>
          <span className="stack-badge">Integration</span>
        </div>

        <div className="stack-apps-grid">
          {apps.map((app, i) => (
            <div key={i} className="stack-app-box">
              <div className="stack-app-icon" style={{ color: app.color }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="3" y="3" width="7" height="7" rx="1.5" />
                  <rect x="14" y="3" width="7" height="7" rx="1.5" />
                  <rect x="3" y="14" width="7" height="7" rx="1.5" />
                  <rect x="14" y="14" width="7" height="7" rx="1.5" />
                </svg>
              </div>
              <span className="stack-app-name">{app.name}</span>
            </div>
          ))}
        </div>

        <div className="stack-footer">
          One connected architecture
        </div>
      </div>
    );
  }

  // 9. Partner Programs
  if (type === 'partners') {
    return (
      <div className="mockup-partners">
        <div className="partners-header">
          <span className="partners-title">Partner programs</span>
          <span className="partners-badge">Attribution</span>
        </div>

        <div className="partners-items-list">
          <div className="partner-check-item">
            <span className="p-check-icon green">✓</span>
            <span>Referral tracking</span>
          </div>
          <div className="partner-check-item">
            <span className="p-check-icon purple">✓</span>
            <span>Partner dashboards</span>
          </div>
          <div className="partner-check-item">
            <span className="p-check-icon green">✓</span>
            <span>Commission management</span>
          </div>
        </div>
      </div>
    );
  }

  // AI & Automation Mockups
  if (type === 'ai-agent') {
    return (
      <div className="mockup-workflow">
        <div className="wf-trigger-box">
          <div className="wf-trigger-left">
            <div className="wf-icon-badge" style={{ background: '#f5f3ff', color: '#8b5cf6' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
              </svg>
            </div>
            <div>
              <span className="wf-trigger-label">AGENT REASONING</span>
              <span className="wf-trigger-title">Intent parsed & plan formed</span>
            </div>
          </div>
          <span className="wf-trigger-dots">···</span>
        </div>

        <div className="wf-connector-vertical"></div>

        <div className="wf-step-box">
          <span>Evaluate policy & memory state</span>
        </div>

        <svg className="wf-fork-svg" viewBox="0 0 290 22" fill="none">
          <path d="M145 0 V10 H72 V22 M145 10 H218 V22" stroke="#cbd5e1" strokeWidth="1.2" />
        </svg>

        <div className="wf-branches-row">
          <div className="wf-branch-box">
            <div className="branch-icon purple">✓</div>
            <span>Execute API action</span>
          </div>
          <div className="wf-branch-box">
            <div className="branch-icon green">✓</div>
            <span>Human verification</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'rpa-workflow') {
    return (
      <div className="mockup-profile">
        <div className="profile-card-header">
          <span className="profile-header-title">Automation pipeline</span>
          <span className="profile-badge-unified" style={{ color: '#10b981', borderColor: '#a7f3d0', background: '#ecfdf5' }}>Active</span>
        </div>
        <div className="profile-main-user-row">
          <div className="profile-avatar-circle" style={{ background: '#f0fdf4', color: '#16a34a' }}>⚙️</div>
          <div>
            <div className="profile-user-name">BPM Orchestration Engine</div>
            <div className="profile-user-sub">Rule-based tasks across systems</div>
          </div>
        </div>
        <div className="profile-fields-list">
          <div className="profile-field-row">
            <span className="pf-label">Connected software</span>
            <span className="pf-value">ERP · CRM · Document DB</span>
          </div>
          <div className="profile-field-row">
            <span className="pf-label">Exception handling</span>
            <span className="pf-value"><span className="pf-dot-green"></span> Zero dropouts</span>
          </div>
        </div>
        <div className="profile-bottom-tabs">
          <span className="profile-tab-pill">Process map</span>
          <span className="profile-tab-pill">Queue status</span>
          <span className="profile-tab-pill">Audit logs</span>
        </div>
      </div>
    );
  }

  if (type === 'mlops-pipeline') {
    return (
      <div className="mockup-commerce">
        <div className="commerce-card-header">
          <span className="commerce-header-title">Model serving infrastructure</span>
          <span className="commerce-badge-connected" style={{ color: '#8b5cf6', borderColor: '#ddd6fe', background: '#f5f3ff' }}>v2.4 Deployed</span>
        </div>
        <div className="commerce-stepper-tabs">
          <span className="comm-step">Ingest</span>
          <span className="comm-step">Inference</span>
          <span className="comm-step active">Monitor & Retrain</span>
        </div>
        <div className="commerce-split-body">
          <div className="comm-left-prod-box">
            <span className="comm-prod-label">Drift detector</span>
          </div>
          <div className="comm-right-checkout">
            <span className="comm-checkout-title">Serving metrics</span>
            <div className="comm-input-placeholder">Latency: 18ms</div>
            <button className="comm-btn-complete" style={{ background: '#7c3aed' }} type="button">Model healthy</button>
          </div>
        </div>
        <div className="commerce-footer-summary">
          Serving container · Feature store · Drift alerts
        </div>
      </div>
    );
  }

  if (type === 'doc-intel') {
    return (
      <div className="mockup-search">
        <div className="search-input-pill-bar">
          <span className="search-placeholder-text">Parse contract or unstructured PDF</span>
        </div>
        <div className="search-inner-card-content">
          <span className="search-aeo-eyebrow">NLP & VISION PIPELINE</span>
          <div className="search-aeo-title" style={{ color: '#7c3aed' }}>Structured data extracted in real-time.</div>
          <div className="search-tags-row">
            <span className="search-tag-pill">OCR Engine</span>
            <span className="search-tag-pill">Entity NER</span>
            <span className="search-tag-pill">Classification</span>
          </div>
        </div>
      </div>
    );
  }

  // Product Engineering Mockups
  if (type === 'saas-arch') {
    return (
      <div className="mockup-workflow">
        <div className="wf-trigger-box">
          <div className="wf-trigger-left">
            <div className="wf-icon-badge" style={{ background: '#eff6ff', color: '#2563eb' }}>💻</div>
            <div>
              <span className="wf-trigger-label">MULTI-TENANCY</span>
              <span className="wf-trigger-title">Tenant isolation & auth token</span>
            </div>
          </div>
        </div>
        <div className="wf-connector-vertical"></div>
        <div className="wf-step-box"><span>Edge routing & rate limiter</span></div>
        <svg className="wf-fork-svg" viewBox="0 0 290 22" fill="none">
          <path d="M145 0 V10 H72 V22 M145 10 H218 V22" stroke="#cbd5e1" strokeWidth="1.2" />
        </svg>
        <div className="wf-branches-row">
          <div className="wf-branch-box"><span>Microservices</span></div>
          <div className="wf-branch-box"><span>Sharded DB</span></div>
        </div>
      </div>
    );
  }

  if (type === 'design-system') {
    return (
      <div className="mockup-profile">
        <div className="profile-card-header">
          <span className="profile-header-title">Design system tokens</span>
          <span className="profile-badge-unified">Accessible</span>
        </div>
        <div className="profile-main-user-row">
          <div className="profile-avatar-circle" style={{ background: '#fdf2f8', color: '#db2777' }}>🎨</div>
          <div>
            <div className="profile-user-name">Universal Component Tokens</div>
            <div className="profile-user-sub">Cohesive interfaces across web & mobile</div>
          </div>
        </div>
        <div className="profile-bottom-tabs">
          <span className="profile-tab-pill">Typography</span>
          <span className="profile-tab-pill">Primitives</span>
          <span className="profile-tab-pill">Interactions</span>
        </div>
      </div>
    );
  }

  if (type === 'mobile-app') {
    return (
      <div className="mockup-commerce">
        <div className="commerce-card-header">
          <span className="commerce-header-title">Mobile engineering</span>
          <span className="commerce-badge-connected">iOS · Android</span>
        </div>
        <div className="commerce-split-body">
          <div className="comm-left-prod-box"><span className="comm-prod-label">Offline sync</span></div>
          <div className="comm-right-checkout">
            <span className="comm-checkout-title">60 FPS Native UX</span>
            <button className="comm-btn-complete" type="button">Live preview</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'api-gateway') {
    return (
      <div className="mockup-search">
        <div className="search-input-pill-bar">
          <span className="search-placeholder-text">GET /v1/api/services/status</span>
        </div>
        <div className="search-inner-card-content">
          <span className="search-aeo-eyebrow">API GATEWAY & MESH</span>
          <div className="search-aeo-title">HTTP 200 OK · 14ms Latency</div>
          <div className="search-tags-row">
            <span className="search-tag-pill">GraphQL</span>
            <span className="search-tag-pill">REST</span>
            <span className="search-tag-pill">Webhooks</span>
          </div>
        </div>
      </div>
    );
  }

  // Cloud & Data Mockups
  if (type === 'cloud-infra') {
    return (
      <div className="mockup-workflow">
        <div className="wf-trigger-box">
          <div className="wf-trigger-left">
            <div className="wf-icon-badge" style={{ background: '#eff6ff', color: '#0284c7' }}>☁️</div>
            <div>
              <span className="wf-trigger-label">MULTI-REGION CLUSTER</span>
              <span className="wf-trigger-title">99.99% high-availability active</span>
            </div>
          </div>
        </div>
        <div className="wf-connector-vertical"></div>
        <div className="wf-step-box"><span>Kubernetes auto-scaler & load balancer</span></div>
      </div>
    );
  }

  if (type === 'data-pipeline') {
    return (
      <div className="mockup-profile">
        <div className="profile-card-header">
          <span className="profile-header-title">Real-time data streaming</span>
          <span className="profile-badge-unified" style={{ color: '#0284c7', borderColor: '#bae6fd', background: '#f0f9ff' }}>Sub-second</span>
        </div>
        <div className="profile-main-user-row">
          <div className="profile-avatar-circle" style={{ background: '#f0f9ff', color: '#0284c7' }}>⚡</div>
          <div>
            <div className="profile-user-name">Event-Driven Stream Pipeline</div>
            <div className="profile-user-sub">Continuous ETL & transform to lakehouse</div>
          </div>
        </div>
        <div className="profile-bottom-tabs">
          <span className="profile-tab-pill">Kafka broker</span>
          <span className="profile-tab-pill">Flink transforms</span>
          <span className="profile-tab-pill">Target sinks</span>
        </div>
      </div>
    );
  }

  if (type === 'warehouse-schema') {
    return (
      <div className="mockup-commerce">
        <div className="commerce-card-header">
          <span className="commerce-header-title">Enterprise warehouse</span>
          <span className="commerce-badge-connected">Snowflake · BigQuery</span>
        </div>
        <div className="commerce-split-body">
          <div className="comm-left-prod-box"><span className="comm-prod-label">Data catalog</span></div>
          <div className="comm-right-checkout">
            <span className="comm-checkout-title">Query accelerator</span>
            <button className="comm-btn-complete" style={{ background: '#0284c7' }} type="button">Execute query</button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'security-shield') {
    return (
      <div className="mockup-search">
        <div className="search-input-pill-bar">
          <span className="search-placeholder-text">Zero-Trust perimeter security scan</span>
        </div>
        <div className="search-inner-card-content">
          <span className="search-aeo-eyebrow">COMPLIANCE & DEVSECOPS</span>
          <div className="search-aeo-title" style={{ color: '#059669' }}>100% Passed · 0 Vulnerabilities</div>
          <div className="search-tags-row">
            <span className="search-tag-pill">SOC2 Type II</span>
            <span className="search-tag-pill">HIPAA</span>
            <span className="search-tag-pill">ISO 27001</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback to attribution
  return (
    <div className="mockup-attribution">
      <div className="attr-header">
        <span className="attr-title">Intelligence View</span>
        <span className="attr-badge">Active</span>
      </div>
      <div className="attr-legend">
        <span className="legend-item"><span className="legend-dot solid"></span> System performance</span>
      </div>
      <div className="attr-chart-wrapper">
        <svg width="100%" height="80" viewBox="0 0 280 80" fill="none">
          <path d="M 10 65 Q 60 60 90 62 T 160 40 T 210 25 T 270 10" stroke="#2563eb" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default IllustrativeMockup;
