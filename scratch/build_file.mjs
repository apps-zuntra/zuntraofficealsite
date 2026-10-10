import fs from 'fs';

const userBuildData = fs.readFileSync('scratch/user_build_data.js', 'utf8');
const arrayContent = userBuildData.replace('export const buildData =', '').trim();

const fileContent = `import { buildEnrichments } from './buildEnrichments.js';
import { subtopicData } from './subtopicData.js';

export { subtopicData };

const rawBuildData = ${arrayContent}

export const buildData = rawBuildData.map(item => {
  const enrich = buildEnrichments[item.id] || {};
  return {
    ...enrich,
    ...item,
    capabilityStrip: enrich.capabilityStrip || item.capabilityStrip,
    connectedGrowth: enrich.connectedGrowth || item.connectedGrowth,
    complexity: enrich.complexity || item.complexity,
    whatWeBuild: enrich.whatWeBuild || item.whatWeBuild,
    workflowData: enrich.workflowData || item.workflowData,
    useCasesData: enrich.useCasesData || item.useCasesData,
    philosophyData: enrich.philosophyData || item.philosophyData,
    impactData: enrich.impactData || item.impactData,
    architectureCore: enrich.architectureCore || item.architectureCore,
    emergingTechData: enrich.emergingTechData || item.emergingTechData,
    floatingCards: enrich.floatingCards || item.floatingCards,
    faqs: item.faqs || enrich.faqs,
    cta: item.cta || enrich.cta
  };
});
`;

fs.writeFileSync('src/data/buildData.js', fileContent, 'utf8');
console.log('Successfully written src/data/buildData.js! Size:', fileContent.length);
