const fs = require('fs');
const path = require('path');

const aboutPages = [
  { name: 'MissionVision', path: 'MissionVision.jsx', route: '/about/mission-vision', title: 'Mission & Vision' },
  { name: 'Team', path: 'Team.jsx', route: '/about/team', title: 'Team' },
  { name: 'Leadership', path: 'Leadership.jsx', route: '/about/leadership', title: 'Leadership' },
  { name: 'Cohort25', path: 'Cohort25.jsx', route: '/about/cohort-25', title: 'Cohort 25' },
  { name: 'Cohort26', path: 'Cohort26.jsx', route: '/about/cohort-26', title: 'Cohort 26' },
  { name: 'SustainabilityDEAI', path: 'SustainabilityDEAI.jsx', route: '/about/sustainability-deai', title: 'Sustainability & DEAI' },
];

const companyPages = [
  { name: 'Careers', path: 'Careers.jsx', route: '/company/careers', title: 'Careers' },
  { name: 'ResearchInsights', path: 'ResearchInsights.jsx', route: '/company/research-insights', title: 'Research Insights' },
  { name: 'ZuntraLabs', path: 'ZuntraLabs.jsx', route: '/company/zuntra-labs', title: 'Zuntra Labs' },
  { name: 'News', path: 'News.jsx', route: '/company/news', title: 'News' },
  { name: 'Events', path: 'Events.jsx', route: '/company/events', title: 'Events' },
  { name: 'Incubation', path: 'Incubation.jsx', route: '/company/incubation', title: 'Incubation' },
  { name: 'Competitions', path: 'Competitions.jsx', route: '/company/competitions', title: 'Competitions' },
];

const generateComponent = (name, title) => `import React from 'react';

const ${name} = () => {
  return (
    <div className="container" style={{ padding: '8rem 2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>${title}</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
        Content for the ${title} page goes here.
      </p>
    </div>
  );
};

export default ${name};
`;

const createPages = (pages, folder) => {
  const dir = path.join(__dirname, 'src', 'pages', folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  pages.forEach(p => {
    fs.writeFileSync(path.join(dir, p.path), generateComponent(p.name, p.title));
  });
};

createPages(aboutPages, 'about');
createPages(companyPages, 'company');

console.log('Pages generated successfully!');
