import fs from 'fs';

const content = fs.readFileSync('scratch/master_enrich_all.mjs', 'utf8');

const topStartIndex = content.indexOf('const topEnhancements =');
const midStartIndex = content.indexOf('const midEnhancements =');
const endIterIndex = content.indexOf('buildData.forEach(');

if (topStartIndex !== -1 && midStartIndex !== -1 && endIterIndex !== -1) {
  const topCode = content.substring(topStartIndex, midStartIndex).trim();
  const midCode = content.substring(midStartIndex, endIterIndex).trim();

  const fullCode = `// Auto-generated build enrichments for all 4 pillars
${topCode}

${midCode}

export const buildEnrichments = {};
['growth-marketing-tech', 'ai-software-automation', 'product-engineering', 'cloud-data'].forEach(id => {
  buildEnrichments[id] = {
    ...(topEnhancements[id] || {}),
    ...(midEnhancements[id] || {})
  };
});
`;

  fs.writeFileSync('src/data/buildEnrichments.js', fullCode, 'utf8');
  console.log('src/data/buildEnrichments.js successfully created!');
} else {
  console.error('Indices not found:', { topStartIndex, midStartIndex, endIterIndex });
}
