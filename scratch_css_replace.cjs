const fs = require('fs');
let css = fs.readFileSync('src/components/VenturesShowcase.css', 'utf8');

const startStr = '/* 2-Column Cards Grid - Centered 940px width container */';
const endStr = '/* Footer Description */';

const startIndex = css.indexOf(startStr);
const endIndex = css.indexOf(endStr);

const newCss = `/* Feature Content - New Layout */
.vs-feature-content-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.vs-feature-grid {
  max-width: 940px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.vs-text-col {
  box-sizing: border-box;
}

.vs-text-left {
  padding: 2.5rem 3rem 2.5rem 0;
}

.vs-text-right {
  padding: 2.5rem 0 2.5rem 3rem;
  border-left: 1px solid #eaeaea;
}

.vs-text-col h4 {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.vs-text-col p {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 0.92rem;
  font-weight: 400;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.vs-img-col {
  width: 100%;
  display: flex;
  overflow: hidden;
}

.vs-feature-img-full {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: top center;
  display: block;
}

`;

const result = css.substring(0, startIndex) + newCss + css.substring(endIndex);
fs.writeFileSync('src/components/VenturesShowcase.css', result, 'utf8');
console.log('CSS updated');
