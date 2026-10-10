export const industriesData = [
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Advancing healthcare through data, AI, and intelligent systems",
    subtitle: "Zuntra Digital partners with healthcare providers, research institutions, and health technology companies to build secure, scalable, and intelligent systems that improve patient experiences, support clinical decision-making, and optimize operational efficiency.",
    outcomes: [
      { id: 1, title: "Healthcare AI platforms", desc: "AI models supporting clinical decision support and diagnostic assistance." },
      { id: 2, title: "Health technology development", desc: "End-to-end healthcare technology product design and engineering." },
      { id: 3, title: "Clinical workflow automation", desc: "Automating administrative and care coordination workflows." },
      { id: 4, title: "Healthcare data analytics", desc: "Unified data infrastructure for population health and operational insights." },
      { id: 5, title: "Digital health applications", desc: "Patient-facing and provider-facing digital health products." },
      { id: 6, title: "Learning and training platforms", desc: "Clinical education and staff training systems." },
      { id: 7, title: "Research intelligence systems", desc: "Data infrastructure supporting clinical and life sciences research." },
      { id: 8, title: "Operational optimization", desc: "Resource planning and operational performance tools." },
      { id: 9, title: "Knowledge management platforms", desc: "Centralized clinical knowledge and protocol systems." }
    ],
    problemsDesc: "Healthcare organizations face mounting pressure to modernize care delivery while managing data privacy, clinical accuracy, and operational cost.",
    problems: [
      { id: 1, title: "Fragmented patient data", desc: "Disconnected systems prevent a unified view of patient health and care history." },
      { id: 2, title: "Manual clinical workflows", desc: "Administrative and care coordination tasks consuming clinical capacity." },
      { id: 3, title: "Scaling research & training", desc: "Difficulty scaling research operations and clinical staff education programs." },
      { id: 4, title: "Digital health access", desc: "Increasing demand for telehealth infrastructure and digital patient access." },
      { id: 5, title: "Regulatory requirements", desc: "Strict data privacy obligations including HIPAA and equivalent frameworks." },
      { id: 6, title: "Operational visibility", desc: "Limited insight into clinical and operational performance across care settings." }
    ],
    featuresHeaderTitle: "Intelligent systems for clinical reality.",
    featuresHeaderDesc: "Zuntra Digital builds healthcare technology solutions tailored to providers, research institutions, and health technology companies. Every system is designed for clinical environments — meaning compliance, accuracy, and human factors are built in from day one.",
    featureBlocks: [
      {
        id: 1,
        eyebrow: "",
        title: "Clinical AI that supports decisions — not replaces them.",
        desc: "AI models that assist clinicians with diagnostic support, triage prioritization, and evidence-based recommendations. Every output is designed to augment clinical judgment, not override it.",
        btnText: "Discuss your use case",
        reverse: false,
        visualType: "dark-dashboard"
      },
      {
        id: 2,
        eyebrow: "HEALTHCARE DATA ANALYTICS",
        eyebrowColor: "blue",
        title: "Unified data infrastructure for healthcare insight.",
        desc: "Population health analytics, operational dashboards, and data pipelines that turn fragmented healthcare data into actionable intelligence for providers and administrators.",
        btnText: "EXPLORE DATA SOLUTIONS →",
        reverse: true,
        visualType: "light-dashboard"
      },
      {
        id: 3,
        eyebrow: "CLINICAL WORKFLOW AUTOMATION",
        eyebrowColor: "green",
        title: "Less admin. More care.",
        desc: "Automated intake, scheduling, referral management, and documentation workflows that reduce the administrative load on clinical staff and improve care coordination across care settings.",
        btnText: "SEE WORKFLOW SOLUTIONS →",
        reverse: false,
        visualType: "workflow-list"
      }
    ],
    whyZuntraTitle: "Why Zuntra for Healthcare",
    whyZuntraDesc: [
      "Zuntra Digital understands that healthcare technology must balance innovation with responsibility. Our teams design systems with privacy, security, and clinical accuracy built in from the start, ensuring solutions integrate cleanly with existing clinical workflows rather than disrupting care delivery.",
      "We work closely with healthcare and life sciences stakeholders to ensure every solution supports better patient outcomes, operational efficiency, and long-term compliance readiness."
    ],
    whyZuntraImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    howWeWork: [
      { id: 1, step: "01", title: "Discovery & Compliance Mapping", desc: "Understanding clinical workflows, data sensitivity, and regulatory obligations before a single line of code is written." },
      { id: 2, step: "02", title: "Solution Architecture", desc: "Designing AI and digital health systems aligned to privacy, security, and clinical accuracy standards." },
      { id: 3, step: "03", title: "Phased Implementation", desc: "Deploying solutions incrementally to minimize disruption to care delivery and validate outcomes at each stage." },
      { id: 4, step: "04", title: "Continuous Optimization", desc: "Ongoing monitoring, model refinement, and outcome tracking to improve system performance over time." }
    ],
    howWeWorkFooter: "This approach helps healthcare organizations modernize at a pace that protects both patients and operations.",
    faqs: [
      { q: "What AI solutions does Zuntra build for healthcare organizations?", a: "Zuntra builds healthcare AI platforms covering clinical decision support, diagnostic assistance, patient triage, predictive analytics, and AI-driven workflow automation. Each solution is designed for production environments with compliance requirements built in from the start." },
      { q: "Does Zuntra design healthcare solutions with privacy and compliance in mind?", a: "Yes, all our healthcare platforms are architected to adhere strictly to HIPAA and other global data privacy regulations." },
      { q: "Can Zuntra integrate with existing clinical systems?", a: "Absolutely. We specialize in seamless integrations with major EHR platforms and clinical workflows." },
      { q: "How long does a typical healthcare technology engagement take?", a: "Depending on complexity, an initial phase takes 12-16 weeks to reach a production-ready state." },
      { q: "Does Zuntra work with both large hospital networks and early-stage health technology companies?", a: "Yes, we partner across the entire healthcare ecosystem." },
      { q: "Can Zuntra build custom healthcare platforms rather than adapting generic software?", a: "We build bespoke software tailored to your clinical and operational needs." },
      { q: "What support does Zuntra provide after a healthcare solution is deployed?", a: "We offer ongoing monitoring, model refinement, and 24/7 technical support." },
      { q: "Does Zuntra have experience with research and life sciences organizations?", a: "Yes, we build platforms for clinical trials and research data management." },
      { q: "How does Zuntra ensure AI systems in healthcare are accurate and reliable?", a: "Our AI systems undergo rigorous clinical validation and continuous monitoring." },
      { q: "Why choose Zuntra over a traditional healthcare IT vendor?", a: "We bring specialized AI and modern engineering practices that traditional vendors often lack." }
    ]
  }
];

// Helper to generate the other 13 industries with generic content based on their names
const otherIndustries = [
  "logistics", "enterprise-technology-professional-services", "education", "innovation-ecosystems-venture-development",
  "financial-services", "media", "government-public-sector-smart-cities", "energy", "telecommunications-connectivity-digital-infrastructure",
  "manufacturing-industrial-innovation", "culture-heritage", "retail-e-commerce-consumer-experience", "real-estate-property-technology"
];

const industryImages = {
  "logistics": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "enterprise-technology-professional-services": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "education": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "innovation-ecosystems-venture-development": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "financial-services": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "media": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "government-public-sector-smart-cities": "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "energy": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "telecommunications-connectivity-digital-infrastructure": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "manufacturing-industrial-innovation": "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "culture-heritage": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "retail-e-commerce-consumer-experience": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "real-estate-property-technology": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const formatName = (slug) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

otherIndustries.forEach(slug => {
  const name = formatName(slug);
  industriesData.push({
    id: slug,
    name: name,
    title: `Advancing ${name} Through Data, AI and Intelligent Systems`,
    subtitle: `Transform your operations, drive innovation, and stay ahead in the ${name} sector with our platform.`,
    outcomes: [
      { id: 1, title: "Improved Efficiency", desc: `Optimize workflows specifically for ${name}.` },
      { id: 2, title: "Data-Driven Decisions", desc: "Leverage advanced analytics." },
      { id: 3, title: "Enhanced Security", desc: "Protect your critical assets." },
      { id: 4, title: "Cost Reduction", desc: "Identify areas for savings." },
      { id: 5, title: "Customer Experience", desc: "Deliver personalized interactions." },
      { id: 6, title: "Scalability", desc: "Grow without technical limitations." },
      { id: 7, title: "Automation", desc: "Reduce manual, repetitive tasks." },
      { id: 8, title: "Predictive Insights", desc: "Anticipate market trends." },
      { id: 9, title: "Compliance", desc: "Meet industry-specific regulations." }
    ],
    problems: [
      { id: 1, icon: "🏢", title: "Legacy Systems", desc: "Outdated technology holding you back." },
      { id: 2, icon: "📉", title: "Data Fragmentation", desc: "Inability to get a unified view." },
      { id: 3, icon: "⚙️", title: "Process Inefficiency", desc: "Too much time spent on manual work." },
      { id: 4, icon: "🛡️", title: "Security Vulnerabilities", desc: "Exposure to modern cyber threats." },
      { id: 5, icon: "💰", title: "High Overhead", desc: "Rising costs impacting margins." },
      { id: 6, icon: "🚀", title: "Slow Innovation", desc: "Difficulty adapting to market changes." }
    ],
    feature1Title: `Intelligent systems for ${name}.`,
    feature1Desc: `Our platform is designed to handle the specific complexities of ${name}, empowering your team.`,
    feature2Title: `Built for modern ${name} challenges.`,
    feature2Desc: "Robust, scalable, and secure architecture tailored for your needs.",
    whyZuntraTitle: `Why Zuntra for ${name}`,
    whyZuntraDesc: `We have deep expertise in ${name}. Our solutions are trusted by industry leaders to drive digital transformation and unlock new value from their data.`,
    whyZuntraImage: industryImages[slug] || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    howWeWork: [
      { id: 1, step: "01", title: "Assessment", desc: "Evaluate your current infrastructure." },
      { id: 2, step: "02", title: "Strategy", desc: "Develop a tailored roadmap." },
      { id: 3, step: "03", title: "Implementation", desc: "Deploy solutions seamlessly." },
      { id: 4, step: "04", title: "Optimization", desc: "Continuous refinement." }
    ],
    faqs: [
      `How does your solution integrate with existing ${name} tools?`,
      "What is the implementation timeline?",
      "Can we customize the analytics dashboards?",
      "How do you ensure data security?",
      "What kind of support do you offer?",
      "Is the platform scalable?",
      "Do you have case studies in our industry?",
      "How is pricing structured?"
    ]
  });
});
