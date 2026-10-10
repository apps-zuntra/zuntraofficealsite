const fs = require('fs');

const text = fs.readFileSync('scratch/jds.txt', 'utf8');

const jobsRaw = text.split(/ZUNTRA DIGITAL PRIVATE LIMITED|Zuntra Digital Private Limited/).filter(t => t.trim().length > 0);

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const jobsData = {};

for (const raw of jobsRaw) {
    const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    let title = "Unknown Role";
    let location = "Chennai [Hybrid/On-Site]";
    let type = "Internship";
    let department = "Multiple";
    let summary = "";
    
    const about = [];
    const responsibilities = [];
    const required = [];
    const preferred = [];
    
    let section = 'header';
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lowerLine = line.toLowerCase();
        
        if (lowerLine.startsWith('role:') || lowerLine.startsWith('role title :') || lowerLine.startsWith('role title:')) {
            title = line.replace(/role:?\s*/i, '').replace(/role title ?:?\s*/i, '').trim();
        } else if (i === 0 && !lowerLine.includes('about')) {
            if (!title || title === "Unknown Role") {
                title = line;
            }
        }
        
        if (lowerLine.includes('full-time') || lowerLine.includes('full time')) type = 'Full-Time';
        
        if (lowerLine.includes('about zuntra digital') || lowerLine.includes('overview') || lowerLine.includes('role overview') || lowerLine.includes('job description')) {
            section = 'about';
            continue;
        } else if (lowerLine.includes('responsibilities') || lowerLine.includes('key responsibilities')) {
            section = 'responsibilities';
            continue;
        } else if (lowerLine.includes('qualifications') || lowerLine.includes('required skills')) {
            section = 'required';
            continue;
        } else if (lowerLine.includes('preferred skills') || lowerLine.includes('bonus') || lowerLine.includes('good to have')) {
            section = 'preferred';
            continue;
        } else if (lowerLine.includes('what we offer') || lowerLine.includes('opportunities & benefits') || lowerLine.includes('opportunities') || lowerLine.includes('location') || lowerLine.includes('contact') || lowerLine.includes('join us')) {
            section = 'other';
            continue;
        }
        
        if (section === 'about') {
            if (line.length > 20 && !line.startsWith('*') && !line.startsWith('•') && !line.startsWith('●')) {
                about.push(line);
                if (!summary) summary = line;
            }
        } else if (section === 'responsibilities') {
            if (line.startsWith('*') || line.startsWith('•') || line.startsWith('●') || line.startsWith('-')) {
                responsibilities.push(line.substring(1).trim());
            } else if (line.length > 10) {
                 responsibilities.push(line);
            }
        } else if (section === 'required') {
            if (line.startsWith('*') || line.startsWith('•') || line.startsWith('●') || line.startsWith('-')) {
                required.push(line.substring(1).trim());
            } else if (line.length > 10) {
                 required.push(line);
            }
        } else if (section === 'preferred') {
            if (line.startsWith('*') || line.startsWith('•') || line.startsWith('●') || line.startsWith('-')) {
                preferred.push(line.substring(1).trim());
            } else if (line.length > 10) {
                 preferred.push(line);
            }
        }
    }
    
    let cleanTitle = title.replace(/\([^)]+\)/g, '').trim();
    if (cleanTitle.toLowerCase().includes('associate intern – data analytics & ai-enabled learning systems')) {
       cleanTitle = 'associate intern data ai learning systems';
    }
    const slug = slugify(cleanTitle);
    
    if (slug.includes('design') || slug.includes('ui-ux')) department = "Design";
    else if (slug.includes('developer') || slug.includes('engineer') || slug.includes('qa') || slug.includes('testing')) department = "Engineering & QA";
    else if (slug.includes('data analyst') || slug.includes('data analytics')) department = "Data & Analytics";
    else if (slug.includes('marketing') || slug.includes('business development') || slug.includes('public relations')) department = "Marketing & Business";
    else if (slug.includes('project management') || slug.includes('product solution')) department = "Product & Project Management";
    else if (slug.includes('ai') || slug.includes('automation') || slug.includes('intelligence')) department = "AI & Automation";
    else if (slug.includes('finance') || slug.includes('video editor')) department = "Operations & Media";

    if (slug) {
        jobsData[slug] = {
            title,
            department,
            location,
            type,
            summary: summary || "Join Zuntra Digital.",
            about,
            responsibilities,
            required,
            preferred
        };
    }
}

jobsData["default"] = {
  title: "Open Position",
  department: "Multiple",
  location: "Chennai [Hybrid/On-Site]",
  type: "Full-Time / Internship",
  summary: "Join the people building intelligent systems, digital products, and technology ventures at Zuntra.",
  about: [
    "Zuntra Digital is currently seeking motivated individuals to join our team. We work across various disciplines — engineering, AI, design, enterprise solutions, and venture building.",
    "As a member of our team, you will collaborate with cross-functional peers to build technology that moves ideas into action."
  ],
  responsibilities: [
    "Contribute to core projects and initiatives within your department.",
    "Collaborate with cross-functional teams to deliver high-quality outcomes.",
    "Solve complex problems and adapt to an evolving technical environment.",
    "Communicate effectively and document your progress."
  ],
  required: [
    "Strong problem-solving skills and willingness to learn.",
    "Good communication and teamwork abilities.",
    "Relevant educational background or equivalent experience.",
    "Ability to work in a fast-paced, iterative environment."
  ],
  preferred: [
    "Prior internship or project experience in a related field.",
    "Familiarity with modern tools and methodologies in your domain."
  ]
};

const output = `export const jobsData = ${JSON.stringify(jobsData, null, 2)};`;
fs.writeFileSync('src/data/jobsData.js', output, 'utf8');
console.log('Successfully generated src/data/jobsData.js with ' + Object.keys(jobsData).length + ' jobs.');
