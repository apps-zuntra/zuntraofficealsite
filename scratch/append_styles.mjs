import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cssPath = path.resolve(__dirname, '../src/components/builds/BuildSections.css');
const existing = fs.readFileSync(cssPath, 'utf8');

const newStyles = `
/* --------------------------------------------------------------------------
   What We Build Featured Card 05
   -------------------------------------------------------------------------- */
.what-we-build-grid-container {
  max-width: 1266px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  background: #ffffff;
}

.what-we-build-grid-container .what-we-build-grid {
  border: none;
  max-width: 100%;
}

.what-we-build-featured-card {
  border-top: 1px solid #e5e7eb;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 44px 42px;
  box-sizing: border-box;
  align-items: center;
  gap: 40px;
}

.wwb-feat-left {
  display: flex;
  flex-direction: column;
}

.wwb-feat-title {
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.3;
  margin: 10px 0 14px;
}

.wwb-feat-desc {
  font-size: 14.5px;
  line-height: 1.65;
  color: #475569;
  margin: 0;
}

.wwb-feat-right {
  display: flex;
  flex-direction: column;
}

.feat-visual {
  min-height: 220px;
}

@media (max-width: 900px) {
  .what-we-build-featured-card {
    grid-template-columns: 1fr;
    padding: 28px 20px;
  }
}

/* --------------------------------------------------------------------------
   Interactive Workflow Section
   -------------------------------------------------------------------------- */
.interactive-workflow-section {
  width: 100%;
  padding: 80px 24px 90px;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;
  box-sizing: border-box;
}

.workflow-section-header {
  text-align: left;
  margin-bottom: 48px;
  max-width: 1266px;
  margin-left: auto;
  margin-right: auto;
}

.workflow-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  text-transform: capitalize;
}

.workflow-main-title {
  font-size: 38px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
}

.wf-title-bold {
  font-weight: 700;
  color: #0f172a;
  display: block;
}

.wf-title-light {
  font-weight: 400;
  color: #64748b;
  display: block;
}

.workflow-interface-grid {
  max-width: 1266px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 48px;
  align-items: start;
}

.workflow-steps-list {
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  background: #ffffff;
}

.workflow-step-nav-item {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.workflow-step-nav-item:last-child {
  border-bottom: none;
}

.workflow-step-nav-item:hover {
  background: #f8fafc;
}

.step-nav-indicator {
  width: 4px;
  background: transparent;
  flex-shrink: 0;
  transition: background 0.2s ease;
}

.workflow-step-nav-item.is-active .step-nav-indicator {
  background: #2563eb;
}

.workflow-step-nav-item.is-active {
  background: #ffffff;
}

.step-nav-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  width: 100%;
}

.step-nav-num {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  padding-top: 2px;
}

.workflow-step-nav-item.is-active .step-nav-num {
  color: #2563eb;
}

.step-nav-text {
  display: flex;
  flex-direction: column;
}

.step-nav-title {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 4px;
}

.step-nav-desc {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}

/* Workflow System Card (Right) */
.workflow-detail-column {
  display: flex;
  flex-direction: column;
}

.workflow-system-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 26px 28px;
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
  box-sizing: border-box;
}

.wf-system-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #f1f5f9;
}

.wf-sys-title {
  font-size: 12.5px;
  font-weight: 600;
  color: #0f172a;
}

.wf-sys-badge {
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
}

.wf-sys-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 0 16px;
}

.wf-sys-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
}

.wf-sys-eyebrow {
  font-size: 11px;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 4px;
}

.wf-sys-headline {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px;
}

.wf-sys-subtext {
  font-size: 13.5px;
  color: #475569;
  max-width: 380px;
  margin: 0;
  line-height: 1.5;
}

.wf-sys-stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 0;
}

.wf-stepper-node {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
}

.node-pill-label {
  font-size: 10.5px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background: #f1f5f9;
  color: #64748b;
  transition: all 0.2s;
}

.wf-stepper-node.active .node-pill-label {
  background: #2563eb;
  color: #ffffff;
}

.node-bar-line {
  width: 14px;
  height: 2px;
  background: #e2e8f0;
}

.wf-sys-chart-box {
  width: 100%;
  padding: 10px 0;
}

.wf-sys-footer {
  font-size: 11px;
  color: #94a3b8;
  text-align: center;
  padding-top: 14px;
  border-top: 1px solid #f1f5f9;
}

@media (max-width: 900px) {
  .workflow-interface-grid {
    grid-template-columns: 1fr;
  }
}

/* --------------------------------------------------------------------------
   3-Column Use Cases Grid Section
   -------------------------------------------------------------------------- */
.use-cases-grid-section {
  width: 100%;
  padding: 80px 24px 100px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
}

.use-cases-section-header {
  text-align: left;
  margin-bottom: 50px;
  max-width: 1266px;
  margin-left: auto;
  margin-right: auto;
}

.use-cases-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  text-transform: capitalize;
}

.use-cases-main-title {
  font-size: 38px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
}

.uc-title-bold {
  font-weight: 700;
  color: #0f172a;
  display: block;
}

.uc-title-light {
  font-weight: 400;
  color: #64748b;
  display: block;
}

.use-cases-3col-grid {
  max-width: 1266px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  box-sizing: border-box;
}

.use-case-card-item {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
}

.use-case-card-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.06);
  border-color: #cbd5e1;
}

.use-case-card-item .grid-card-visual-wrapper {
  min-height: 190px;
  padding: 16px;
}

@media (max-width: 1024px) {
  .use-cases-3col-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .use-cases-3col-grid {
    grid-template-columns: 1fr;
  }
}

/* --------------------------------------------------------------------------
   Philosophy Section (Human + Technology)
   -------------------------------------------------------------------------- */
.philosophy-section {
  width: 100%;
  padding: 40px 24px 80px;
  box-sizing: border-box;
  background: #ffffff;
}

.philosophy-card-split {
  max-width: 1266px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
  box-sizing: border-box;
}

.phil-left-col {
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.phil-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.phil-main-title {
  font-size: 34px;
  line-height: 1.25;
  margin: 0;
  letter-spacing: -0.02em;
}

.phil-title-bold {
  font-weight: 700;
  color: #0f172a;
  display: block;
}

.phil-title-light {
  font-weight: 400;
  color: #64748b;
  display: block;
}

.phil-right-col {
  padding: 48px;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.phil-paragraph {
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
  margin: 0;
}

.phil-tags-row {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.phil-tag-pill {
  font-size: 11px;
  font-weight: 500;
  color: #64748b;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 4px 10px;
}

@media (max-width: 900px) {
  .philosophy-card-split {
    grid-template-columns: 1fr;
  }
  .phil-right-col {
    border-left: none;
    border-top: 1px solid #e5e7eb;
    padding: 32px 28px;
  }
  .phil-left-col {
    padding: 32px 28px;
  }
}

/* --------------------------------------------------------------------------
   Impact Outcomes Section (4 Columns)
   -------------------------------------------------------------------------- */
.impact-outcomes-section {
  width: 100%;
  padding: 60px 24px 80px;
  background: #ffffff;
  box-sizing: border-box;
}

.impact-outcomes-header {
  text-align: center;
  margin-bottom: 48px;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;
}

.impact-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.impact-main-title {
  font-size: 38px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
}

.impact-title-bold {
  font-weight: 700;
  color: #0f172a;
  display: block;
}

.impact-title-light {
  font-weight: 400;
  color: #64748b;
  display: block;
}

.impact-outcomes-card {
  max-width: 1266px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-sizing: border-box;
}

.impact-outcomes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.impact-outcome-col {
  padding: 38px 30px;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.impact-outcome-col:last-child {
  border-right: none;
}

.outcome-icon-box {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #2563eb;
}

.outcome-col-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 10px;
}

.outcome-col-desc {
  font-size: 13.5px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

@media (max-width: 960px) {
  .impact-outcomes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .impact-outcome-col:nth-child(2) {
    border-right: none;
  }
  .impact-outcome-col:nth-child(1),
  .impact-outcome-col:nth-child(2) {
    border-bottom: 1px solid #e5e7eb;
  }
}

@media (max-width: 600px) {
  .impact-outcomes-grid {
    grid-template-columns: 1fr;
  }
  .impact-outcome-col {
    border-right: none !important;
    border-bottom: 1px solid #e5e7eb;
    padding: 24px 20px;
  }
}

/* --------------------------------------------------------------------------
   Architecture Core Section (Tree Diagram)
   -------------------------------------------------------------------------- */
.architecture-core-section {
  width: 100%;
  padding: 80px 24px 100px;
  background: #ffffff;
  box-sizing: border-box;
  border-top: 1px solid #e5e7eb;
}

.arch-core-header {
  text-align: center;
  margin-bottom: 50px;
}

.arch-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.arch-core-title {
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.02em;
}

.arch-core-diagram-container {
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arch-top-nodes-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

.arch-node-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.arch-node-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.arch-node-title {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px;
}

.arch-node-desc {
  font-size: 11.5px;
  color: #64748b;
  margin: 0;
}

.arch-connector-svg-wrapper {
  width: 100%;
  max-width: 700px;
  height: 60px;
}

.arch-center-core-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.arch-core-node-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 4px 14px -2px rgba(15, 23, 42, 0.05);
}

.arch-z-logo {
  font-size: 18px;
  font-weight: 800;
  color: #2563eb;
  font-family: inherit;
}

.arch-core-text {
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.arch-core-title-text {
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
}

.arch-core-subtitle-text {
  font-size: 12px;
  color: #64748b;
}

@media (max-width: 768px) {
  .arch-top-nodes-row {
    grid-template-columns: 1fr;
  }
  .arch-connector-svg-wrapper {
    display: none;
  }
}

/* --------------------------------------------------------------------------
   Additional Mockup Styles (Attribution, Chat Lead, Lifecycle, Stack, Partners)
   -------------------------------------------------------------------------- */

/* Attribution Mockup */
.mockup-attribution {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.attr-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.attr-title {
  font-size: 12.5px;
  font-weight: 600;
  color: #0f172a;
}

.attr-badge {
  font-size: 10.5px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 9999px;
  background: #f8fafc;
}

.attr-legend {
  display: flex;
  gap: 14px;
  padding: 10px 0 4px;
}

.legend-item {
  font-size: 10.5px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 4px;
}

.legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.legend-dot.solid { background: #2563eb; }
.legend-dot.dashed { background: #93c5fd; }

.attr-chart-wrapper {
  width: 100%;
  padding: 4px 0;
}

.attr-x-axis {
  display: flex;
  justify-content: space-between;
  font-size: 10.5px;
  color: #94a3b8;
  padding-top: 6px;
  border-top: 1px solid #f1f5f9;
}

/* Chat Lead Mockup */
.mockup-chat-lead {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.chat-lead-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.chat-lead-title {
  font-size: 12.5px;
  font-weight: 600;
  color: #0f172a;
}

.chat-lead-badge {
  font-size: 10.5px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 9999px;
  background: #f8fafc;
}

.chat-bubbles-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
}

.chat-bubble {
  padding: 7px 12px;
  border-radius: 10px;
  font-size: 11px;
  max-width: 85%;
  line-height: 1.35;
}

.chat-bubble.bot {
  background: #f1f5f9;
  color: #1e293b;
  align-self: flex-start;
  border-bottom-left-radius: 2px;
}

.chat-bubble.user {
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #dbeafe;
  align-self: flex-end;
  border-bottom-right-radius: 2px;
}

.chat-route-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 500;
  color: #10b981;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
}

.route-check {
  font-weight: 700;
}

/* Lifecycle Mockup */
.mockup-lifecycle {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.lifecycle-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.lifecycle-title {
  font-size: 12.5px;
  font-weight: 600;
  color: #0f172a;
}

.lifecycle-badge {
  font-size: 10.5px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 9999px;
  background: #f8fafc;
}

.lifecycle-chart-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 14px 0;
}

.lifecycle-donut-wrapper {
  position: relative;
  width: 84px;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lifecycle-center-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.lifecycle-stages-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lc-stage-item {
  font-size: 11.5px;
  font-weight: 500;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 6px;
}

.lc-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.lc-dot.blue { background: #3b82f6; }
.lc-dot.purple { background: #8b5cf6; }
.lc-dot.teal { background: #10b981; }

.lifecycle-footer {
  font-size: 10.5px;
  color: #94a3b8;
  text-align: center;
  padding-top: 10px;
  border-top: 1px solid #f1f5f9;
}

/* Stack Mockup */
.mockup-stack {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.stack-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.stack-title {
  font-size: 12.5px;
  font-weight: 600;
  color: #0f172a;
}

.stack-badge {
  font-size: 10.5px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 9999px;
  background: #f8fafc;
}

.stack-apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 14px 0;
}

.stack-app-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stack-app-name {
  font-size: 10px;
  font-weight: 600;
  color: #334155;
}

.stack-footer {
  font-size: 10.5px;
  color: #94a3b8;
  text-align: center;
  padding-top: 8px;
  border-top: 1px solid #f1f5f9;
}

/* Partners Mockup */
.mockup-partners {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.partners-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;
}

.partners-title {
  font-size: 12.5px;
  font-weight: 600;
  color: #0f172a;
}

.partners-badge {
  font-size: 10.5px;
  font-weight: 500;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 2px 8px;
  border-radius: 9999px;
  background: #f8fafc;
}

.partners-items-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 0 10px;
}

.partner-check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11.5px;
  font-weight: 500;
  color: #334155;
}

.p-check-icon {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
}

.p-check-icon.green {
  background: #ecfdf5;
  color: #10b981;
}

.p-check-icon.purple {
  background: #f5f3ff;
  color: #8b5cf6;
}
`;

fs.writeFileSync(cssPath, existing + newStyles, 'utf8');
console.log('Appended styles to BuildSections.css successfully!');
