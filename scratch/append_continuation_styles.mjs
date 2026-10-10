import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('src/components/builds/BuildSections.css');
const existing = fs.readFileSync(cssPath, 'utf8');

const newStyles = `
/* --------------------------------------------------------------------------
   Architecture Core Section (Two-Way Symmetrical Tree)
   -------------------------------------------------------------------------- */
.architecture-core-section {
  width: 100%;
  padding: 85px 24px 95px;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;
  box-sizing: border-box;
}

.arch-core-header {
  text-align: center;
  margin-bottom: 52px;
}

.arch-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  text-transform: capitalize;
}

.arch-core-title {
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin: 0;
}

.arch-core-diagram-container {
  max-width: 980px;
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
  padding: 26px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}

.arch-node-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.arch-node-icon {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  color: #2563eb;
}

.arch-node-title {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 6px;
}

.arch-node-desc {
  font-size: 12px;
  color: #64748b;
  line-height: 1.4;
  margin: 0;
}

.arch-connector-svg-wrapper {
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  overflow: visible;
}

.arch-connector-svg-wrapper.arch-bottom-connector {
  height: 52px;
}

.arch-center-core-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2px 0;
}

.arch-core-node-card {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 13px 26px;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
}

.arch-z-logo {
  font-size: 17px;
  font-weight: 800;
  color: #2563eb;
  font-family: inherit;
  font-style: italic;
  display: flex;
  align-items: center;
}

.arch-core-text {
  display: flex;
  align-items: center;
  gap: 12px;
}

.arch-core-title-text {
  font-size: 14.5px;
  font-weight: 700;
  color: #0f172a;
}

.arch-core-subtitle-text {
  font-size: 12px;
  color: #64748b;
  border-left: 1px solid #cbd5e1;
  padding-left: 12px;
}

.arch-bottom-nodes-row {
  margin-top: 0;
}

@media (max-width: 768px) {
  .arch-top-nodes-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .arch-connector-svg-wrapper {
    display: none;
  }
  .arch-center-core-wrapper {
    margin: 16px 0;
  }
}

/* --------------------------------------------------------------------------
   Emerging Technology Section (4-Column x 2-Row Bordered Grid)
   -------------------------------------------------------------------------- */
.emerging-tech-section {
  width: 100%;
  padding: 85px 24px 100px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
}

.emerging-tech-header {
  text-align: center;
  margin-bottom: 54px;
}

.emerging-tech-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  text-transform: capitalize;
}

.emerging-tech-main-title {
  font-size: 38px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin: 0;
}

.et-title-bold {
  font-weight: 700;
  color: #0f172a;
  display: block;
}

.et-title-light {
  font-weight: 400;
  color: #64748b;
  display: block;
}

.emerging-tech-grid-card {
  max-width: 1266px;
  margin: 0 auto;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  box-sizing: border-box;
}

.emerging-tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.emerging-tech-item-col {
  padding: 38px 30px;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  transition: background 0.2s ease;
}

.emerging-tech-item-col:hover {
  background: #fafafa;
}

.emerging-tech-item-col:nth-child(4n) {
  border-right: none;
}

.emerging-tech-item-col:nth-child(n+5) {
  border-bottom: none;
}

.emerging-item-icon {
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.emerging-item-title {
  font-size: 15.5px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 10px;
  line-height: 1.35;
}

.emerging-item-desc {
  font-size: 13.5px;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

@media (max-width: 1024px) {
  .emerging-tech-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .emerging-tech-item-col:nth-child(4n) {
    border-right: 1px solid #e5e7eb;
  }
  .emerging-tech-item-col:nth-child(2n) {
    border-right: none;
  }
  .emerging-tech-item-col:nth-child(n+5) {
    border-bottom: 1px solid #e5e7eb;
  }
  .emerging-tech-item-col:nth-child(n+7) {
    border-bottom: none;
  }
}

@media (max-width: 640px) {
  .emerging-tech-cards-grid {
    grid-template-columns: 1fr;
  }
  .emerging-tech-item-col {
    border-right: none !important;
    border-bottom: 1px solid #e5e7eb !important;
    padding: 28px 22px;
  }
  .emerging-tech-item-col:last-child {
    border-bottom: none !important;
  }
}

/* --------------------------------------------------------------------------
   FAQ Section (Split 2-Column with Minimal Accordion)
   -------------------------------------------------------------------------- */
.build-faq {
  width: 100%;
  padding: 95px 24px 110px;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  box-sizing: border-box;
}

.build-faq-container {
  max-width: 1266px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.35fr 0.65fr;
  gap: 60px;
  align-items: start;
}

.faq-left {
  display: flex;
  flex-direction: column;
}

.faq-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.faq-main-title {
  font-size: 42px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
}

.faq-title-bold {
  font-weight: 700;
  color: #0f172a;
  display: block;
}

.faq-title-light {
  font-weight: 400;
  color: #94a3b8;
  display: block;
}

.faq-right {
  display: flex;
  flex-direction: column;
}

.faq-minimal-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e5e7eb;
}

.faq-minimal-item {
  border-bottom: 1px solid #e5e7eb;
}

.faq-minimal-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
  cursor: pointer;
  user-select: none;
  gap: 20px;
  transition: color 0.2s ease;
}

.faq-minimal-question h4 {
  font-size: 15px;
  font-weight: 500;
  color: #1e293b;
  margin: 0;
  line-height: 1.45;
}

.faq-minimal-question:hover h4 {
  color: #2563eb;
}

.faq-minimal-toggle {
  font-size: 18px;
  font-weight: 400;
  color: #94a3b8;
  flex-shrink: 0;
  width: 20px;
  text-align: right;
  transition: transform 0.2s ease, color 0.2s ease;
}

.faq-minimal-item.active .faq-minimal-toggle {
  color: #0f172a;
}

.faq-minimal-answer {
  padding: 0 0 22px 0;
  animation: faqFadeIn 0.2s ease;
}

.faq-minimal-answer p {
  font-size: 14.5px;
  line-height: 1.65;
  color: #64748b;
  margin: 0;
}

@keyframes faqFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .build-faq-container {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .faq-main-title {
    font-size: 32px;
  }
}

/* --------------------------------------------------------------------------
   CTA Section (Full Dark Centered Card)
   -------------------------------------------------------------------------- */
.build-cta-dark {
  width: 100%;
  padding: 120px 24px 130px;
  background: #000000;
  box-sizing: border-box;
  text-align: center;
}

.build-cta-inner {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-dark-headline {
  font-size: 46px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: #ffffff;
  margin: 0 0 20px;
}

.cta-dark-headline span {
  display: block;
}

.cta-dark-subtext {
  font-size: 16px;
  line-height: 1.6;
  color: #94a3b8;
  margin: 0 0 36px;
  max-width: 540px;
}

.cta-dark-buttons-row {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn-white {
  background: #ffffff;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  padding: 11px 24px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #ffffff;
}

.cta-btn-white:hover {
  background: #f1f5f9;
  transform: translateY(-1px);
}

.cta-btn-dark-outline {
  background: #111827;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 11px 24px;
  border-radius: 6px;
  text-decoration: none;
  border: 1px solid #374151;
  transition: all 0.2s ease;
}

.cta-btn-dark-outline:hover {
  background: #1f2937;
  border-color: #4b5563;
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .build-cta-dark {
    padding: 80px 20px 90px;
  }
  .cta-dark-headline {
    font-size: 34px;
  }
}
`;

fs.writeFileSync(cssPath, existing + newStyles, 'utf8');
console.log('Appended continuation styles to BuildSections.css successfully!');
