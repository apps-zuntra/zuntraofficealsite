import fs from 'fs';

const userBuildData = fs.readFileSync('scratch/user_build_data.js', 'utf8').trim();

const fileContent = `import { subtopicData } from './subtopicData.js';

export { subtopicData };

${userBuildData}
`;

fs.writeFileSync('src/data/buildData.js', fileContent, 'utf8');
console.log('Successfully written clean src/data/buildData.js! Size:', fileContent.length);
