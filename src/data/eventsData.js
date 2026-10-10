// Import all event images using Vite's eager glob import
const images = import.meta.glob('../assets/eventsimages/**/*.{avif,png,jpg,jpeg,webp,JPG,jpeg,HEIC,jfif}', {
  eager: true,
  import: 'default'
});

// Helper function to safely get an image by substring match or fallback
const getImage = (subPath, fallbackIndex = 0) => {
  const keys = Object.keys(images);
  const found = keys.find(k => k.toLowerCase().includes(subPath.toLowerCase()));
  if (found) return images[found];
  if (keys.length > 0) return images[keys[fallbackIndex % keys.length]];
  return 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
};

// Helper function to get multiple images from a folder
const getImagesFromFolder = (folderName) => {
  const keys = Object.keys(images).filter(k => k.toLowerCase().includes(folderName.toLowerCase()));
  return keys.map(k => images[k]);
};

// Image assets mapping for each event folder
const uiux27Images = getImagesFromFolder('uiuxfeb27');
const uiux10Images = getImagesFromFolder('uiuxfeb10');
const designPac1Images = getImagesFromFolder('Design Pac 1.0 x CATALYZT-2024');
const code4changeImages = getImagesFromFolder('Code4Change');
const srmImages = getImagesFromFolder('Academic Industrial Visit SRM');
const vitImages = getImagesFromFolder('Academic Industrial Visit VIT');
const aiMarketingImages = getImagesFromFolder('AI & Marketing25');
const blazeImages = getImagesFromFolder('Blaze-A-Trail25');
const facultyImages = getImagesFromFolder('FacultyIndustryImmersionProgram2025');
const hackHorizon25Images = getImagesFromFolder('HacktheHorizon25');
const paradigmImages = getImagesFromFolder('Paradigm 2025');
const hackHorizon24Images = getImagesFromFolder('Hack the Horizon 1.0-2024');
const innothonImages = getImagesFromFolder('Innothon 2024');
const ubertechImages = getImagesFromFolder("Ubertech'24");
const eventhomeImages = getImagesFromFolder('eventhome');
const blazeTrail2026Images = getImagesFromFolder('Blazertraial2026');
const sheBuilds2026Images = getImagesFromFolder('shebuild2026');
const leadingAIImages = getImagesFromFolder('leadingaiage2026');
const resolve2026Images = getImagesFromFolder('resolve2026');

export const eventsData = {
  hero: {
    heading: "IDEAS ARE BETTER WHEN THEY COME TOGETHER.",
    subheading: "Join builders, creators, and innovators across our global events."
  },
  featuredEvent: {
    id: "ui-ux-workshop-feb-27",
    title: "UX Workshop – Real-World UI/UX & Portfolio Building",
    shortTitle: "UI/UX WORKSHOP — FEB 27",
    date: "February 27, 2026",
    year: "2026",
    location: "Chennai, India",
    time: "10:00 AM – 5:00 PM IST",
    format: "IN PERSON",
    category: "DESIGN",
    categoryId: "design",
    type: "WORKSHOP",
    image: getImage('uiux_workshop_featured') || uiux27Images[0],
    heroImage: getImage('uiux_workshop_featured') || uiux27Images[0],
    heroTagline: "Transform ideas into meaningful user experiences",
    description: "This workshop is designed to bridge the gap between academic UI/UX learning and real-world industry practices. Students will gain a clear understanding of how UX works in live products, how recruiters evaluate portfolios, and how to build case studies that demonstrate strong problem-solving and design thinking skills.",
    longDescription: "This workshop is designed to bridge the gap between academic UI/UX learning and real-world industry practices. Students will gain a clear understanding of how UX works in live products, how recruiters evaluate portfolios, and how to build case studies that demonstrate strong problem-solving and design thinking skills.",
    pillarsHeading: "Practical Design Learning",
    pillars: [
      {
        title: "Research",
        description: "Participants learned user research techniques, understanding audience needs and identifying opportunities to improve digital experiences through informed design decisions."
      },
      {
        title: "Creation",
        description: "Hands-on activities introduced wireframing, prototyping, and interface design concepts that help transform ideas into functional user experiences."
      },
      {
        title: "Portfolio",
        description: "Students explored methods for presenting projects effectively, creating case studies, and building professional portfolios that demonstrate design capabilities."
      }
    ],
    bentoGrid: {
      title: "UI/UX Workshop",
      imgSpeaker: uiux27Images[1] || uiux27Images[0],
      imgPanel: uiux27Images[2] || uiux27Images[0],
      topicsList: [
        "UX Design Training",
        "Real-World UX Practices",
        "Portfolio Building for Designers",
        "UX Case Study Development",
        "Design Thinking Framework"
      ],
      imgAudienceWide: uiux27Images[3] || uiux27Images[0]
    },
    speakerSpotlight: {
      imgSpeakerVertical: uiux27Images[4] || uiux27Images[1],
      heading: "Skills Developed Through Design",
      subheading: "Building Skills For Design Careers:",
      bulletPoints: [
        "Understanding user experience principles",
        "Practical interface design exposure",
        "Building professional design portfolios",
        "Learning industry design workflows",
        "Creative problem solving techniques"
      ]
    },
    highlights: {
      title: "Program Highlights",
      items: [
        "Figma for UI/UX",
        "Product Design Workshop",
        "UX Career Guidance",
        "Recruiter Portfolio Expectations",
        "Hands-on UX Challenge",
        "Industry-Oriented UI/UX Training",
        "UX Workflow & User Research",
        "UX Usability & Testing"
      ],
      imgHighlight1: uiux27Images[5] || uiux27Images[3],
      imgHighlight2: uiux27Images[6] || uiux27Images[4]
    }
  },

  categories: [
    {
      id: "ai-intelligence",
      title: "AI & Intelligence",
      description: "Explore conversations and hands-on experiences around AI, agents and intelligent systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "design",
      title: "Design",
      description: "Where product design, UX research and creative technology meet the future.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "product",
      title: "Product",
      description: "Discovery, strategy and building — events for people who make products.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "automation",
      title: "Automation",
      description: "Build smarter systems, automate workflows and reduce friction at scale.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "facilities-industrial-visit",
      title: "Facilities & Industrial Visit",
      description: "Academic industrial immersion programs, campus technology visits, and real-world enterprise labs.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ],

  upcomingEvents: [
    {
      id: "ui-ux-workshop-feb-27",
      category: "DESIGN",
      categoryId: "design",
      title: "UI/UX WORKSHOP — FEB 27",
      description: "A comprehensive hands-on workshop focused on real-world UX design, modern UI workflows, and building industry-ready portfolios.",
      date: "February 27, 2026",
      time: "10:00 AM – 5:00 PM IST",
      location: "Chennai, India",
      image: getImage('eventhome3') || eventhomeImages[1] || uiux27Images[0],
      status: "REGISTRATION OPEN"
    },
    {
      id: "code4change-26",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      title: "CODE4CHANGE '26",
      description: "National hackathon focused on building high-impact AI agents and intelligent systems solving real societal challenges.",
      date: "March 15, 2026",
      time: "9:00 AM – 6:00 PM IST",
      location: "Chennai, India",
      image: getImage('eventhome4') || eventhomeImages[2] || code4changeImages[0],
      status: "UPCOMING"
    },
    {
      id: "academic-industrial-visit-vit-2026",
      category: "FACILITIES & INDUSTRIAL VISIT",
      categoryId: "facilities-industrial-visit",
      title: "ACADEMIC INDUSTRIAL VISIT — VIT",
      description: "Immersive industry exchange bringing academia and enterprise AI engineering teams together for deep technical sessions.",
      date: "January 28, 2026",
      time: "10:00 AM – 4:00 PM IST",
      location: "Vellore, India",
      image: getImage('eventhome5') || eventhomeImages[3] || vitImages[0],
      status: "UPCOMING"
    }
  ],

  pastEvents: [
    // =========================================================================
    // 1. LEADING IN THE AI AGE
    // =========================================================================
    {
      id: "leading-in-the-ai-age",
      title: "Leading in the AI Age: Digital Transformation for Modern Business",
      shortTitle: "LEADING IN THE AI AGE 2026",
      date: "2026",
      year: "2026",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: leadingAIImages[0] || getImage('Legal AI'),
      heroImage: leadingAIImages[0] || getImage('Legal AI'),
      heroTagline: "Building future-ready skills for AI-driven business",
      heroDescription: "Leading in the AI Age was a two-day workshop exploring digital transformation and the growing role of artificial intelligence across modern business functions. Students gained practical insights into HR, operations, marketing, and finance while understanding how AI is reshaping professional roles and workplaces.",
      institutionInfo: "Ethiraj College for Women encourages academic excellence, professional development, and industry engagement, providing students opportunities to explore emerging technologies and gain practical perspectives relevant to modern business environments.",
      pillarsHeading: "Modern Business Transformation",
      pillars: [
        {
          title: "HR & People",
          description: "Participants explored AI applications in recruitment, employee engagement, workforce planning, and other human resource functions shaping modern workplaces."
        },
        {
          title: "Operations",
          description: "Sessions examined how AI and digital tools can improve workflows, productivity, automation, decision-making, and operational efficiency."
        },
        {
          title: "Business Functions",
          description: "Participants discovered applications across marketing and finance, understanding how data, automation, and AI support smarter business strategies."
        }
      ],
      bentoGrid: {
        title: "Leading in the AI Age",
        imgSpeaker: leadingAIImages[1] || leadingAIImages[0],
        imgPanel: leadingAIImages[2] || leadingAIImages[0],
        topicsList: [
          "AI Transformation",
          "HR Innovation",
          "Smart Operations",
          "Digital Marketing",
          "Finance Technology"
        ],
        imgAudienceWide: leadingAIImages[3] || leadingAIImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: leadingAIImages[4] || leadingAIImages[1],
        heading: "Building Skills For Digital Transformation",
        subheading: "Learning Outcomes:",
        bulletPoints: [
          "Understanding AI-driven business transformation",
          "Exploring modern HR applications",
          "Learning smarter operational strategies",
          "Applying AI in marketing",
          "Understanding digital finance solutions"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "AI",
          "Transformation",
          "HR",
          "Operations",
          "Marketing",
          "Finance",
          "Innovation",
          "Leadership"
        ],
        imgHighlight1: leadingAIImages[5] || leadingAIImages[3],
        imgHighlight2: leadingAIImages[6] || leadingAIImages[4]
      },
      speakerDescription: "Industry professionals and business leaders shared practical insights into artificial intelligence, digital transformation, and evolving business functions. Their sessions helped participants understand how AI can enhance decision-making, improve operational efficiency, support marketing strategies, and transform human resource and financial management practices.",
      organizerInfo: "The two-day workshop was organized by Zuntra in collaboration with Ethiraj College for Women."
    },
    // =========================================================================
    // 2. BLAZE A TRAIL 4.0
    // =========================================================================
    {
      id: "blaze-a-trail-4",
      title: "Real-World & Portfolio Building - BLAZE A TRAIL 4.0",
      shortTitle: "BLAZE A TRAIL 4.0",
      date: "2026",
      year: "2026",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: blazeTrail2026Images[0] || getImage('Blazer trial'),
      heroImage: blazeTrail2026Images[0] || getImage('Blazer trial'),
      heroTagline: "Innovate, build, collaborate, and showcase real-world solutions",
      heroDescription: "BLAZE A TRAIL 4.0 is a dynamic hackathon designed to transform ideas into practical solutions through innovation, teamwork, and technology. Participants collaborate on real-world challenges, strengthen problem-solving abilities, and build meaningful projects that showcase their creativity, technical expertise, and readiness for future opportunities.",
      institutionInfo: "St. Joseph's Institute of Technology provides students opportunities to explore technology, innovation, teamwork, and practical problem-solving through engaging academic and industry-focused experiences.",
      pillarsHeading: "Hackathon Experience",
      pillars: [
        {
          title: "Innovation",
          description: "Participants developed creative ideas and technology-driven solutions addressing practical challenges through experimentation, teamwork, and innovative thinking."
        },
        {
          title: "Collaboration",
          description: "Teams worked together, combining diverse skills, perspectives, and expertise to transform concepts into meaningful and functional solutions."
        },
        {
          title: "Problem Solving",
          description: "The hackathon challenged participants to analyze real-world problems, develop effective approaches, and present solutions with clarity and confidence."
        }
      ],
      bentoGrid: {
        title: "BLAZE A TRAIL 4.0",
        imgSpeaker: blazeTrail2026Images[1] || blazeTrail2026Images[0],
        imgPanel: blazeTrail2026Images[2] || blazeTrail2026Images[0],
        topicsList: [
          "Real Challenges",
          "Team Innovation",
          "Creative Solutions",
          "Technical Skills",
          "Project Building"
        ],
        imgAudienceWide: blazeTrail2026Images[3] || blazeTrail2026Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: blazeTrail2026Images[4] || blazeTrail2026Images[1],
        heading: "Building Skills Through Innovation",
        subheading: "Learning Outcomes:",
        bulletPoints: [
          "Solving real-world challenges",
          "Developing innovative project ideas",
          "Strengthening technical problem-solving skills",
          "Collaborating within diverse teams",
          "Building stronger professional portfolios"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Innovation",
          "Hackathon",
          "Collaboration",
          "Technology",
          "Creativity",
          "Problem-Solving",
          "Teamwork",
          "Portfolio"
        ],
        imgHighlight1: blazeTrail2026Images[5] || blazeTrail2026Images[3],
        imgHighlight2: blazeTrail2026Images[6] || blazeTrail2026Images[4]
      },
      speakerDescription: "Industry professionals, mentors, and technology experts guided participants throughout the hackathon, sharing practical insights on innovation, problem-solving, teamwork, and emerging technologies. Their guidance encouraged participants to refine ideas, develop effective solutions, overcome challenges, and understand how real-world projects can strengthen technical skills and professional portfolios.",
      organizerInfo: "Zuntra organized BLAZE A TRAIL 4.0 with St. Joseph's Institute of Technology, encouraging innovation, collaboration, and practical learning."
    },
    // =========================================================================
    // 3. SHE BUILDS CHENNAI × CCCL
    // =========================================================================
    {
      id: "she-builds-chennai-cccl-hack",
      title: "She Builds Chennai × CCCL Hack Code & Challenge 3.0",
      shortTitle: "SHE BUILDS × CCCL 3.0",
      date: "2026",
      year: "2026",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: sheBuilds2026Images[0] || getImage('She builds'),
      heroImage: sheBuilds2026Images[0] || getImage('She builds'),
      heroTagline: "Building bold solutions through technology and collaboration",
      heroDescription: "She Builds Chennai × CCCL Hack Code & Challenge 3.0 was a national-level hackathon bringing together innovative minds to solve real-world challenges through technology. The inauguration featured Ms. Harini Thyagarajan, CEO and Co-Founder of Zuntra, who shared an inspiring address with participants.",
      institutionInfo: "The event brought together students, developers, and technology enthusiasts through a national-level platform focused on innovation, problem-solving, collaboration, and developing impactful solutions for real-world challenges.",
      pillarsHeading: "Hackathon Experience",
      pillars: [
        {
          title: "Innovation",
          description: "Participants explored real-world challenges, developed creative concepts, and applied technology to design solutions with meaningful potential impact."
        },
        {
          title: "Collaboration",
          description: "Teams worked together, combining diverse technical skills, ideas, and perspectives to strengthen their solutions and approaches."
        },
        {
          title: "Challenge",
          description: "The hackathon encouraged participants to think critically, experiment with ideas, and transform concepts into practical technology-driven solutions."
        }
      ],
      bentoGrid: {
        title: "She Builds Chennai × CCCL Hack Code & Challenge 3.0",
        imgSpeaker: sheBuilds2026Images[1] || sheBuilds2026Images[0],
        imgPanel: sheBuilds2026Images[2] || sheBuilds2026Images[0],
        topicsList: [
          "National Hackathon",
          "Team Collaboration",
          "Problem Solving",
          "Technology Innovation",
          "Solution Building"
        ],
        imgAudienceWide: sheBuilds2026Images[3] || sheBuilds2026Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: sheBuilds2026Images[4] || sheBuilds2026Images[1],
        heading: "Skills Developed Through Hackathon Participation",
        subheading: "Hackathon Learning Outcomes:",
        bulletPoints: [
          "Practical technology problem solving",
          "Collaborative solution development experience",
          "Creative thinking under challenges",
          "Exposure to innovation ecosystems",
          "Networking with fellow innovators"
        ]
      },
      highlights: {
        title: "Key Moments",
        about: "She Builds is a community-driven initiative empowering women in technology through collaboration, learning, innovation, mentorship, and opportunities to build meaningful solutions and grow within the technology ecosystem.",
        items: [
          "Women",
          "Technology",
          "Innovation",
          "Leadership",
          "Collaboration",
          "Hackathon",
          "Mentorship",
          "Empowerment"
        ],
        imgHighlight1: sheBuilds2026Images[5] || sheBuilds2026Images[3],
        imgHighlight2: sheBuilds2026Images[6] || sheBuilds2026Images[4]
      },
      speakerDescription: "Ms. Harini Thyagarajan, CEO and Co-Founder of Zuntra, addressed participants during the inauguration, sharing perspectives on innovation, technology, and building meaningful solutions. Her address encouraged participants to embrace challenges, think creatively, collaborate effectively, and explore opportunities within the evolving technology ecosystem.",
      organizerInfo: "The hackathon was organized by She Builds Chennai and CCCL, bringing innovators together nationally."
    },
    // =========================================================================
    // 4. RESOLVE'26
    // =========================================================================
    {
      id: "resolve-26",
      title: "Game Hackathon – Resolve'26",
      shortTitle: "RESOLVE'26",
      date: "2026",
      year: "2026",
      category: "DESIGN",
      categoryId: "design",
      location: "Chennai, India",
      image: resolve2026Images[0] || getImage('Resolve 26'),
      heroImage: resolve2026Images[0] || getImage('Resolve 26'),
      heroTagline: "Creating immersive games through innovation and teamwork",
      heroDescription: "Resolve'26 was an exciting game hackathon focused on creativity, technology, and problem-solving. Participants developed innovative game concepts, explored interactive experiences, collaborated with teammates, and transformed creative ideas into engaging solutions while gaining practical exposure to game development, design thinking, coding, and emerging digital technologies.",
      institutionInfo: "SRM Vadapalani provides students opportunities to explore technology, creativity, innovation, and practical learning through engaging academic and collaborative experiences.",
      pillarsHeading: "Building Games Through Innovation",
      pillars: [
        {
          title: "Game Design",
          description: "Participants explored creative game concepts, interactive experiences, gameplay mechanics, storytelling, and user engagement while developing innovative gaming ideas."
        },
        {
          title: "Development",
          description: "Teams applied coding, technology, and problem-solving skills to build functional game concepts and transform ideas into playable experiences."
        },
        {
          title: "Creativity",
          description: "Participants experimented with unique concepts, visual elements, challenges, and gameplay approaches to create engaging and memorable gaming experiences."
        }
      ],
      bentoGrid: {
        title: "Resolve'26",
        imgSpeaker: resolve2026Images[1] || resolve2026Images[0],
        imgPanel: resolve2026Images[2] || resolve2026Images[0],
        topicsList: [
          "Game Development",
          "Creative Thinking",
          "Interactive Design",
          "Technical Innovation",
          "Team Collaboration"
        ],
        imgAudienceWide: resolve2026Images[3] || resolve2026Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: resolve2026Images[1] || resolve2026Images[0],
        heading: "Developing Skills Through Game Innovation",
        subheading: "Learning Outcomes:",
        bulletPoints: [
          "Exploring creative game concepts",
          "Strengthening technical development skills",
          "Building interactive gaming experiences",
          "Enhancing collaborative problem-solving abilities",
          "Presenting innovative game solutions"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Gaming",
          "Innovation",
          "Creativity",
          "Development",
          "Coding",
          "Design",
          "Collaboration",
          "Prototyping"
        ],
        imgHighlight1: resolve2026Images[2] || resolve2026Images[0],
        imgHighlight2: resolve2026Images[3] || resolve2026Images[1]
      },
      speakerDescription: "Industry experts and mentors guided participants through game development, creative thinking, technology, and problem-solving. Their insights helped students understand game design principles, improve development strategies, explore innovative ideas, strengthen teamwork, and transform concepts into engaging gaming experiences while encouraging experimentation and practical learning throughout the hackathon.",
      organizerInfo: "The hackathon was organized by Zuntra in collaboration with SRM Vadapalani for aspiring student game developers."
    },
    // =========================================================================
    // 5. CODE4CHANGE 2026
    // =========================================================================
    {
      id: "code4change-26",
      title: "Code4Change",
      shortTitle: "CODE4CHANGE 2026",
      date: "15 March 2026",
      year: "2026",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: code4changeImages[0] || getImage('code4change26-1'),
      heroImage: code4changeImages[0] || getImage('code4change26-1'),
      heroTagline: "Coding innovative solutions for meaningful impact",
      heroDescription: "Code4Change – First National Level 24-Hours Hackathon 2026 is a national innovation event by CSE, ADS & MCA in association with CSI Region 7. It brings students together to solve real-world problems through technology, guided by industry leaders from Exafluence, Zuntra Digital, Outcomes Plus Consultancy, and Pi One Technologies.",
      institutionInfo: "Karpaga Vinayaga College is dedicated to academic excellence and innovation, providing students opportunities to develop technical skills, industry knowledge, and practical experience through collaborative learning initiatives.",
      pillarsHeading: "Technology Innovation Challenge",
      pillars: [
        {
          title: "Ideation",
          description: "Participants brainstormed innovative concepts and identified practical solutions to address challenges through technology and collaborative thinking."
        },
        {
          title: "Development",
          description: "Teams worked together to design, build, and refine technology solutions using coding, creativity, and problem-solving skills."
        },
        {
          title: "Presentation",
          description: "Participants showcased their projects, explaining concepts, implementation strategies, and the potential impact of their innovative solutions."
        }
      ],
      bentoGrid: {
        title: "Code4Change 2026",
        imgSpeaker: code4changeImages[1] || code4changeImages[0],
        imgPanel: code4changeImages[2] || code4changeImages[0],
        topicsList: [
          "Innovation Challenge",
          "AI & Data Science",
          "Tech Entrepreneurship",
          "Industry Mentorship",
          "Professional Networking"
        ],
        imgAudienceWide: code4changeImages[3] || code4changeImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: code4changeImages[4] || code4changeImages[1],
        heading: "Skills Developed Through Coding",
        subheading: "Learning Outcomes From Innovation Challenges:",
        bulletPoints: [
          "Practical coding experience gained",
          "Collaborative project development skills",
          "Creative problem solving approaches",
          "Exposure to technology innovation",
          "Presentation and communication skills"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Product Development",
          "AI Workforce",
          "AI-Driven Solutions",
          "Automation",
          "Strategic Thinking",
          "Startup Ecosystem",
          "Industry Interaction",
          "Future Skills"
        ],
        imgHighlight1: code4changeImages[5] || code4changeImages[3],
        imgHighlight2: code4changeImages[6] || code4changeImages[4]
      }
    },

    // =========================================================================
    // 2. VIT INDUSTRY VISIT 2026
    // =========================================================================
    {
      id: "academic-industrial-visit-vit-2026",
      title: "VIT Industry Visit",
      shortTitle: "VIT INDUSTRY VISIT",
      date: "28 January 2026",
      year: "2026",
      category: "FACILITIES & INDUSTRIAL VISIT",
      categoryId: "facilities-industrial-visit",
      location: "Vellore / Chennai, India",
      image: vitImages[0] || getImage('AcademicIndustrialVisitVIT-1'),
      heroImage: vitImages[0] || getImage('AcademicIndustrialVisitVIT-1'),
      heroTagline: "Bridging academics with real industry experience",
      heroDescription: "VIT Industry Visit provided students with valuable exposure to professional work environments, industry operations, and business processes. Participants gained practical insights into organizational functions, workplace culture, and emerging technologies while interacting with professionals and understanding real-world applications of academic concepts.",
      institutionInfo: "This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.",
      pillarsHeading: "Industry Learning Experience",
      pillars: [
        {
          title: "Exposure",
          description: "Students observed real workplace operations, gaining firsthand understanding of organizational structures, business functions, and professional environments."
        },
        {
          title: "Interaction",
          description: "Participants engaged with industry professionals, asking questions and learning about career pathways, workplace expectations, and industry practices."
        },
        {
          title: "Learning",
          description: "The visit connected academic concepts with practical applications, helping students understand how industries operate and innovate."
        }
      ],
      bentoGrid: {
        title: "VIT Industry Visit",
        imgSpeaker: vitImages[1] || vitImages[0],
        imgPanel: vitImages[2] || vitImages[0],
        topicsList: [
          "Industry Exposure",
          "Professional Insights",
          "Career Awareness",
          "Workplace Learning",
          "Expert Interaction"
        ],
        imgAudienceWide: vitImages[3] || vitImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: vitImages[4] || vitImages[1],
        heading: "Skills Developed Through Exposure",
        subheading: "Learning Outcomes From Industry Experience:",
        bulletPoints: [
          "Understanding workplace operations better",
          "Exposure to industry practices",
          "Interaction with experienced professionals",
          "Awareness of career opportunities",
          "Practical business learning experience"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "Industry",
          "Learning",
          "Exposure",
          "Innovation",
          "Insights",
          "Interaction",
          "Careers",
          "Networking"
        ],
        imgHighlight1: vitImages[5] || vitImages[3],
        imgHighlight2: vitImages[6] || vitImages[4]
      }
    },

    // =========================================================================
    // 3. SRM INDUSTRY VISIT 2026
    // =========================================================================
    {
      id: "academic-industrial-visit-srm-2026",
      title: "SRM Industry Visit",
      shortTitle: "SRM INDUSTRY VISIT",
      date: "12 January 2026",
      year: "2026",
      category: "FACILITIES & INDUSTRIAL VISIT",
      categoryId: "facilities-industrial-visit",
      location: "Chennai, India",
      image: srmImages[0] || getImage('academicindustriesvistsrm-1'),
      heroImage: srmImages[0] || getImage('academicindustriesvistsrm-1'),
      heroTagline: "Connecting classroom knowledge with industry insights",
      heroDescription: "SRM Industry Visit offered students an opportunity to experience real-world business environments and understand industry operations firsthand. Participants explored workplace practices, organizational processes, and emerging technologies while interacting with professionals, gaining practical knowledge that complemented their academic learning and career aspirations.",
      institutionInfo: "IV was conducted in collaboration with SRM, bringing together talented students and technology enthusiasts to explore innovation, digital transformation, and emerging technologies through engaging discussions and interactive learning experiences.",
      pillarsHeading: "Industry Exposure Experience",
      pillars: [
        {
          title: "Observation",
          description: "Students explored workplace environments, gaining practical understanding of organizational structures, operational workflows, and professional responsibilities across different departments."
        },
        {
          title: "Interaction",
          description: "Participants engaged with industry professionals, learning about career growth, workplace expectations, and the evolving demands of modern industries."
        },
        {
          title: "Understanding",
          description: "The visit helped bridge academic learning with practical applications, providing valuable exposure to real-world business and technology operations."
        }
      ],
      bentoGrid: {
        title: "SRM Industry Visit",
        imgSpeaker: srmImages[1] || srmImages[0],
        imgPanel: srmImages[2] || srmImages[0],
        topicsList: [
          "Tech Insights",
          "Innovation Talks",
          "Expert Sessions",
          "Student Interaction",
          "Future Trends"
        ],
        imgAudienceWide: srmImages[3] || srmImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: srmImages[4] || srmImages[1],
        heading: "Skills Developed Through Tech Exploration",
        subheading: "Learning Outcomes From Industry Experience:",
        bulletPoints: [
          "Understanding real workplace operations",
          "Exposure to industry environments",
          "Interaction with business professionals",
          "Awareness of career pathways",
          "Practical learning beyond academics"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Technology",
          "Learning",
          "Insights",
          "Networking",
          "Innovation",
          "Collaboration",
          "Trends",
          "Inspiration"
        ],
        imgHighlight1: srmImages[5] || srmImages[3],
        imgHighlight2: srmImages[6] || srmImages[4]
      }
    },

    // =========================================================================
    // 4. UI/UX WORKSHOP 2026 (Feb 27 & Feb 10)
    // =========================================================================
    {
      id: "ui-ux-workshop-feb-27",
      title: "UX Workshop – Real-World UI/UX & Portfolio Building",
      shortTitle: "UI/UX WORKSHOP — FEB 27",
      date: "27 February 2026",
      year: "2026",
      category: "DESIGN",
      categoryId: "design",
      location: "Chennai, India",
      image: uiux27Images[0] || getImage('uiuxworkshopfeb27-1'),
      heroImage: uiux27Images[0] || getImage('uiuxworkshopfeb27-1'),
      heroTagline: "Transform ideas into meaningful user experiences",
      heroDescription: "This workshop is designed to bridge the gap between academic UI/UX learning and real-world industry practices. Students will gain a clear understanding of how UX works in live products, how recruiters evaluate portfolios, and how to build case studies that demonstrate strong problem-solving and design thinking skills.",
      longDescription: "This workshop is designed to bridge the gap between academic UI/UX learning and real-world industry practices. Students will gain a clear understanding of how UX works in live products, how recruiters evaluate portfolios, and how to build case studies that demonstrate strong problem-solving and design thinking skills.",
      pillarsHeading: "Practical Design Learning",
      pillars: [
        {
          title: "Research",
          description: "Participants learned user research techniques, understanding audience needs and identifying opportunities to improve digital experiences through informed design decisions."
        },
        {
          title: "Creation",
          description: "Hands-on activities introduced wireframing, prototyping, and interface design concepts that help transform ideas into functional user experiences."
        },
        {
          title: "Portfolio",
          description: "Students explored methods for presenting projects effectively, creating case studies, and building professional portfolios that demonstrate design capabilities."
        }
      ],
      bentoGrid: {
        title: "UI/UX Workshop",
        imgSpeaker: uiux27Images[1] || uiux27Images[0],
        imgPanel: uiux27Images[2] || uiux27Images[0],
        topicsList: [
          "UX Design Training",
          "Real-World UX Practices",
          "Portfolio Building for Designers",
          "UX Case Study Development",
          "Design Thinking Framework"
        ],
        imgAudienceWide: uiux27Images[3] || uiux27Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: uiux27Images[4] || uiux27Images[1],
        heading: "Skills Developed Through Design",
        subheading: "Building Skills For Design Careers:",
        bulletPoints: [
          "Understanding user experience principles",
          "Practical interface design exposure",
          "Building professional design portfolios",
          "Learning industry design workflows",
          "Creative problem solving techniques"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "Figma for UI/UX",
          "Product Design Workshop",
          "UX Career Guidance",
          "Recruiter Portfolio Expectations",
          "Hands-on UX Challenge",
          "Industry-Oriented UI/UX Training",
          "UX Workflow & User Research",
          "UX Usability & Testing"
        ],
        imgHighlight1: uiux27Images[5] || uiux27Images[3],
        imgHighlight2: uiux27Images[6] || uiux27Images[4]
      }
    },
    {
      id: "ui-ux-workshop-feb-10",
      title: "UI/UX Workshop – Interface Design & Creative Problem Solving",
      shortTitle: "UI/UX WORKSHOP — FEB 10",
      date: "10 February 2026",
      year: "2026",
      category: "DESIGN",
      categoryId: "design",
      location: "Chennai, India",
      image: uiux10Images[0] || getImage('uiuxworkshopfeb10'),
      heroImage: uiux10Images[0] || getImage('uiuxworkshopfeb10'),
      heroTagline: "Bridging the gap between theory and real-world design",
      heroDescription: "An intensive interactive workshop focusing on design thinking fundamentals, UI typography, spacing systems, interactive prototypes, and design systems for scalable digital products.",
      pillarsHeading: "Practical Design Learning",
      pillars: [
        {
          title: "User Psychology & Empathy",
          description: "Understanding human-centered design principles, mental models, and user behavioral mapping."
        },
        {
          title: "Rapid Prototyping",
          description: "Building interactive high-fidelity clickable prototypes in modern design tooling."
        },
        {
          title: "Design Systems & Tokens",
          description: "Structuring scalable component libraries and tokens for seamless engineering handoff."
        }
      ],
      bentoGrid: {
        title: "UI/UX Masterclass",
        imgSpeaker: uiux10Images[1] || uiux10Images[0],
        imgPanel: uiux10Images[2] || uiux10Images[0],
        topicsList: [
          "Visual Hierarchy & Layout",
          "Figma Auto-Layout & Variables",
          "Design Systems Architecture",
          "Heuristic Usability Evaluation",
          "Interactive Micro-Interactions"
        ],
        imgAudienceWide: uiux10Images[3] || uiux10Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: uiux10Images[4] || uiux10Images[1],
        heading: "Skills Developed Through Design",
        subheading: "Building Skills For Product Designers:",
        bulletPoints: [
          "Advanced Figma component architecture",
          "Heuristic evaluation and usability auditing",
          "Creating high-impact portfolio case studies",
          "Collaborating with engineering teams",
          "Design token management"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "Figma Variables & Tokens",
          "UX Audit Frameworks",
          "Interactive Wireframing",
          "Portfolio Review Sessions",
          "Design Critique Sprints",
          "Live Case Study Tear-Downs",
          "User Testing Methodologies",
          "Accessibility & WCAG Standards"
        ],
        imgHighlight1: uiux10Images[5] || uiux10Images[3],
        imgHighlight2: uiux10Images[6] || uiux10Images[4]
      }
    },

    // =========================================================================
    // 5. DESIGN PAC 2.0 x CATALYZT (2025)
    // =========================================================================
    {
      id: "design-pac-2-catalyzt25",
      title: "Design Pac 2.0 x CATALYZT",
      shortTitle: "DESIGN PAC 2.0 X CATALYZT",
      date: "18 August 2025",
      year: "2025",
      category: "DESIGN",
      categoryId: "design",
      location: "Chennai, India",
      image: designPac1Images[0] || getImage('Designpac1.0xcatalyzt-1'),
      heroImage: designPac1Images[0] || getImage('Designpac1.0xcatalyzt-1'),
      heroTagline: "Creative design thinking meets collaborative innovation",
      heroDescription: "Design Pac 2.0 x CATALYZT brought together creative minds, aspiring designers, and innovators to explore modern design practices, branding strategies, and user experience principles. The event encouraged participants to experiment with ideas, collaborate on creative challenges, and build visually impactful design solutions.",
      pillarsHeading: "Creative Design Learning Experience",
      pillars: [
        {
          title: "Workshops",
          description: "Participants learned practical design techniques, explored creative tools, and practiced user-centered design methods through engaging workshops that encouraged experimentation and innovation."
        },
        {
          title: "Challenges",
          description: "Design challenges pushed participants to brainstorm ideas, develop visual concepts, and present creative solutions within structured timeframes."
        },
        {
          title: "Networking",
          description: "Attendees connected with mentors, designers, and fellow participants, exchanging ideas and building valuable relationships within the design and innovation community."
        }
      ],
      bentoGrid: {
        title: "Design Pac 2.0 x CATALYZT",
        imgSpeaker: designPac1Images[1] || designPac1Images[0],
        imgPanel: designPac1Images[2] || designPac1Images[0],
        topicsList: [
          "Design Thinking",
          "Creative Challenges",
          "UX Insights",
          "Branding Concepts",
          "Collaborative Learning"
        ],
        imgAudienceWide: designPac1Images[3] || designPac1Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: designPac1Images[4] || designPac1Images[1],
        heading: "Design Skills Developed Through Collaboration",
        subheading: "What You’ll Gain:",
        bulletPoints: [
          "Hands-on design thinking practice",
          "Creative problem solving experience",
          "Understanding modern UX principles",
          "Collaboration with fellow designers",
          "Insights from industry mentors"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Creativity",
          "Brainstorming",
          "Collaboration",
          "Presentation",
          "Design",
          "Prototyping",
          "Mentorship",
          "Inspiration"
        ],
        imgHighlight1: designPac1Images[5] || designPac1Images[3],
        imgHighlight2: designPac1Images[6] || designPac1Images[4]
      }
    },

    // =========================================================================
    // 6. AI MARKETING NEXUS (2025)
    // =========================================================================
    {
      id: "ai-marketing-25",
      title: "AI Marketing Nexus",
      shortTitle: "AI MARKETING NEXUS",
      date: "14 November 2025",
      year: "2025",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Bengaluru, India",
      image: aiMarketingImages[0] || getImage('AI & Marketing-1'),
      heroImage: aiMarketingImages[0] || getImage('AI & Marketing-1'),
      heroTagline: "AI transforming modern marketing strategies today",
      heroDescription: "AI Marketing Nexus was a forward-thinking event focused on exploring how artificial intelligence is transforming modern marketing strategies. Participants learned about AI-driven tools, automation, data insights, and creative campaigns while engaging in discussions, activities, and collaborative learning around the future of digital marketing.",
      pillarsHeading: "Creative Design Learning Experience",
      pillars: [
        {
          title: "Insights",
          description: "Participants explored how artificial intelligence supports marketing strategies through automation, predictive analytics, and personalized customer experiences in modern digital campaigns."
        },
        {
          title: "Tools",
          description: "Sessions introduced participants to AI-powered marketing tools that help optimize campaigns, analyze consumer behavior, and improve marketing efficiency."
        },
        {
          title: "Strategy",
          description: "Attendees learned how AI can support smarter marketing decisions, enabling businesses to create targeted campaigns and enhance customer engagement."
        }
      ],
      bentoGrid: {
        title: "AI Marketing Nexus",
        imgSpeaker: aiMarketingImages[1] || aiMarketingImages[0],
        imgPanel: aiMarketingImages[2] || aiMarketingImages[0],
        topicsList: [
          "AI Insights",
          "Marketing Tools",
          "Data Strategy",
          "Automation Learning",
          "Campaign Innovation"
        ],
        imgAudienceWide: aiMarketingImages[3] || aiMarketingImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: aiMarketingImages[4] || aiMarketingImages[1],
        heading: "Skills Developed Through Marketing Innovation",
        subheading: "What You’ll Gain:",
        bulletPoints: [
          "Understanding AI marketing tools",
          "Data-driven campaign insights",
          "Practical digital marketing exposure",
          "Collaboration with marketing enthusiasts",
          "Industry expert knowledge sharing"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "AI",
          "Automation",
          "Strategy",
          "Learning",
          "Marketing",
          "Analytics",
          "Innovation",
          "Collaboration"
        ],
        imgHighlight1: aiMarketingImages[5] || aiMarketingImages[3],
        imgHighlight2: aiMarketingImages[6] || aiMarketingImages[4]
      }
    },

    // =========================================================================
    // 7. HACK THE HORIZON 2.0 (2025)
    // =========================================================================
    {
      id: "hack-the-horizon-25",
      title: "Hack the Horizon 2.0",
      shortTitle: "HACK THE HORIZON 2.0",
      date: "12 May 2025",
      year: "2025",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: hackHorizon25Images[0] || getImage('HacktheHorizon2.0-1'),
      heroImage: hackHorizon25Images[0] || getImage('HacktheHorizon2.0-1'),
      heroTagline: "Innovation, coding, teamwork, and future technology",
      heroDescription: "Hack the Horizon 2.0 returned as an exciting innovation hackathon bringing together students, developers, and creative thinkers to solve real-world problems through technology. Participants collaborated in teams, built functional prototypes, and explored innovative ideas while learning from mentors and industry experts.",
      institutionInfo: "Hack the Horizon 2.0 was conducted in collaboration with VIT College, combining academic excellence and industry-driven innovation to provide students an opportunity to build impactful technology solutions.",
      pillarsHeading: "Creative Design Learning Experience",
      pillars: [
        {
          title: "Ideation",
          description: "Participants brainstormed ideas, explored innovative approaches, and collaborated with teammates to identify creative solutions for real-world problems through structured hackathon sessions."
        },
        {
          title: "Development",
          description: "Teams worked on building functional prototypes, applying coding skills, product thinking, and creative experimentation to transform ideas into practical solutions."
        },
        {
          title: "Presentation",
          description: "Final teams showcased their projects before mentors and judges, explaining their concepts, demonstrating prototypes, and highlighting the real-world impact of their solutions."
        }
      ],
      bentoGrid: {
        title: "Hack the Horizon 2.0",
        imgSpeaker: hackHorizon25Images[1] || hackHorizon25Images[0],
        imgPanel: hackHorizon25Images[2] || hackHorizon25Images[0],
        topicsList: [
          "Idea Development",
          "Team Collaboration",
          "Mentor Sessions",
          "Prototype Building",
          "Final Pitch"
        ],
        imgAudienceWide: hackHorizon25Images[3] || hackHorizon25Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: hackHorizon25Images[4] || hackHorizon25Images[1],
        heading: "Skills Gained Through Hackathon Experience",
        subheading: "What You’ll Gain:",
        bulletPoints: [
          "Real-world problem solving practice",
          "Hands-on prototype development experience",
          "Collaboration within diverse teams",
          "Mentorship from industry experts",
          "Innovative technology solutions created"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Coding",
          "Brainstorming",
          "Collaboration",
          "Achievement",
          "Innovation",
          "Prototyping",
          "Networking",
          "Pitching"
        ],
        imgHighlight1: hackHorizon25Images[5] || hackHorizon25Images[3],
        imgHighlight2: hackHorizon25Images[6] || hackHorizon25Images[4]
      }
    },

    // =========================================================================
    // 8. BLAZER TRAIL (2025)
    // =========================================================================
    {
      id: "blaze-a-trail-25",
      title: "BLAZER TRAIL",
      shortTitle: "BLAZER TRAIL",
      date: "5 October 2025",
      year: "2025",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: blazeImages[0] || getImage('blaze-a-trail25-1'),
      heroImage: blazeImages[0] || getImage('blaze-a-trail25-1'),
      heroTagline: "Innovation, leadership, creativity, and future thinking",
      heroDescription: "Blazer Trail was a dynamic innovation and leadership-focused event designed to inspire students to explore new ideas, challenge conventional thinking, and build impactful solutions. Participants collaborated in teams, engaged in creative challenges, and learned practical approaches to innovation, leadership, and problem solving.",
      institutionInfo: "Blazer Trail was conducted in collaboration with St. Joseph's Institute of Technology, bringing together enthusiastic students and innovators to participate in an engaging event supported by Zuntra.",
      pillarsHeading: "Creative Design Learning Experience",
      pillars: [
        {
          title: "Ideation",
          description: "Participants explored innovative ideas, brainstormed creative solutions, and collaborated in teams to address challenges while applying problem-solving and strategic thinking techniques."
        },
        {
          title: "Execution",
          description: "Teams worked together to develop structured approaches, build practical concepts, and refine their ideas through collaboration and mentorship."
        },
        {
          title: "Presentation",
          description: "Participants presented their ideas and solutions to mentors and judges, demonstrating creativity, teamwork, and the practical impact of their concepts."
        }
      ],
      bentoGrid: {
        title: "BLAZER Trail",
        imgSpeaker: blazeImages[1] || blazeImages[0],
        imgPanel: blazeImages[2] || blazeImages[0],
        topicsList: [
          "Idea Exploration",
          "Team Collaboration",
          "Leadership Skills",
          "Creative Thinking",
          "Final Presentation"
        ],
        imgAudienceWide: blazeImages[3] || blazeImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: blazeImages[4] || blazeImages[1],
        heading: "Learning Outcomes From Leadership Experience",
        subheading: "What You’ll Gain:",
        bulletPoints: [
          "Practical leadership development experience",
          "Collaborative team problem solving",
          "Creative idea generation practice",
          "Exposure to innovation frameworks",
          "Insights from industry mentors"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "Leadership",
          "Brainstorming",
          "Collaboration",
          "Achievement",
          "Innovation",
          "Prototyping",
          "Networking",
          "Pitching"
        ],
        imgHighlight1: blazeImages[5] || blazeImages[3],
        imgHighlight2: blazeImages[6] || blazeImages[4]
      }
    },

    // =========================================================================
    // 9. PARADIGM 2025 (2025)
    // =========================================================================
    {
      id: "paradigm-2025",
      title: "Paradigm 2025",
      shortTitle: "PARADIGM 2025",
      date: "18 February 2025",
      year: "2025",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: paradigmImages[0] || getImage('paradigm-1'),
      heroImage: paradigmImages[0] || getImage('paradigm-1'),
      heroTagline: "Innovate, integrate, and create impactful ideas",
      heroDescription: "Paradigm 2025 – Innovation Arena was a creative AI-themed event where students explored the intersection of technology, storytelling, and innovation. Participants created short concept videos based on AI topics, showcasing creativity, quick thinking, and teamwork within limited time.",
      institutionInfo: "Paradigm 2025 was conducted in collaboration with Ethiraj College for Women, bringing together creative students to explore innovation and storytelling through AI-driven themes and interactive participation supported by Zuntra.",
      pillarsHeading: "Creative Design Learning Experience",
      pillars: [
        {
          title: "Concept Creation",
          description: "Teams were assigned unique AI-related themes on the spot and challenged to conceptualize creative storylines that reflected innovation, imagination, and practical relevance."
        },
        {
          title: "Video Production",
          description: "Participants filmed and edited short videos within the college campus, transforming their ideas into engaging visual narratives within the limited timeframe."
        },
        {
          title: "Evaluation",
          description: "Judges interacted with teams, reviewed their videos, and discussed the creative approach, execution, and relevance of the selected AI theme."
        }
      ],
      bentoGrid: {
        title: "Paradigm 2025",
        imgSpeaker: paradigmImages[1] || paradigmImages[0],
        imgPanel: paradigmImages[2] || paradigmImages[0],
        topicsList: [
          "AI Themes",
          "Creative Videos",
          "Campus Filming",
          "Team Collaboration",
          "Interactive Evaluation"
        ],
        imgAudienceWide: paradigmImages[3] || paradigmImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: paradigmImages[4] || paradigmImages[1],
        heading: "Skills Developed Through Creative Innovation",
        subheading: "What You’ll Gain:",
        bulletPoints: [
          "Hands-on AI storytelling experience",
          "Creative video production practice",
          "Quick thinking under time",
          "Collaboration among student teams",
          "Insightful feedback from judges"
        ]
      },
      highlights: {
        title: "Key Moments",
        items: [
          "AI",
          "Filming",
          "Collaboration",
          "Evaluation",
          "Creativity",
          "Storytelling",
          "Innovation",
          "Presentation"
        ],
        imgHighlight1: paradigmImages[5] || paradigmImages[3],
        imgHighlight2: paradigmImages[6] || paradigmImages[4]
      }
    },

    // =========================================================================
    // 10. FACULTY VISIT (2025)
    // =========================================================================
    {
      id: "faculty-industry-immersion-2025",
      title: "Faculty Visit",
      shortTitle: "FACULTY VISIT",
      date: "20 July 2025",
      year: "2025",
      category: "FACILITIES & INDUSTRIAL VISIT",
      categoryId: "facilities-industrial-visit",
      location: "Chennai, India",
      image: facultyImages[0] || getImage('faculityindustry-1'),
      heroImage: facultyImages[0] || getImage('faculityindustry-1'),
      heroTagline: "Strengthening academic and industry collaboration opportunities",
      heroDescription: "Faculty Visit provided educators with an opportunity to engage with industry practices, innovation initiatives, and emerging technologies. The visit encouraged knowledge exchange, strengthened academic-industry collaboration, and offered valuable insights into real-world applications that can enhance teaching, research, and student development.",
      pillarsHeading: "Academic Industry Engagement",
      pillars: [
        {
          title: "Interaction",
          description: "Faculty members engaged with professionals, exchanging ideas and discussing opportunities for collaboration, innovation, and practical learning initiatives."
        },
        {
          title: "Insights",
          description: "Participants gained a deeper understanding of industry expectations, technological advancements, and evolving workforce requirements relevant to education."
        },
        {
          title: "Collaboration",
          description: "The visit encouraged partnerships between academia and industry, supporting future opportunities for research, learning, and development."
        }
      ],
      bentoGrid: {
        title: "Faculty Visit",
        imgSpeaker: facultyImages[1] || facultyImages[0],
        imgPanel: facultyImages[2] || facultyImages[0],
        topicsList: [
          "Industry Insights",
          "Academic Exchange",
          "Knowledge Sharing",
          "Professional Interaction",
          "Collaborative Opportunities"
        ],
        imgAudienceWide: facultyImages[3] || facultyImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: facultyImages[4] || facultyImages[1],
        heading: "Outcomes From Faculty Engagement",
        subheading: "Benefits Of Academic Industry Collaboration:",
        bulletPoints: [
          "Enhanced understanding of industry",
          "Knowledge exchange with professionals",
          "Exposure to emerging technologies",
          "Opportunities for future partnerships",
          "Support for student development"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "Industry",
          "Learning",
          "Exposure",
          "Innovation",
          "Insights",
          "Interaction",
          "Careers",
          "Networking"
        ],
        imgHighlight1: facultyImages[5] || facultyImages[3],
        imgHighlight2: facultyImages[6] || facultyImages[4]
      }
    },

    // =========================================================================
    // 11. DESIGN PAC 1.0 x CATALYZT (2024)
    // =========================================================================
    {
      id: "design-pac-1-catalyzt-2024",
      title: "Design PAC 1.0 × CATALYZT",
      shortTitle: "DESIGN PAC 1.0 × CATALYZT-2024",
      date: "22 September 2024",
      year: "2024",
      category: "DESIGN",
      categoryId: "design",
      location: "Chennai, India",
      image: designPac1Images[0] || getImage('Designpac1.0xcatalyzt-1'),
      heroImage: designPac1Images[0] || getImage('Designpac1.0xcatalyzt-1'),
      heroTagline: "Foundational product design and community building",
      heroDescription: "The inaugural edition of Design PAC in partnership with CATALYZT, introducing fundamental design thinking, usability heuristics, and interface craftsmanship to aspiring designers.",
      pillarsHeading: "Practical Design Learning",
      pillars: [
        {
          title: "Heuristic Evaluation",
          description: "Evaluating interfaces using standard usability heuristics to diagnose usability flaws."
        },
        {
          title: "Visual Hierarchy",
          description: "Mastering layout grid systems, typography scales, contrast, and color theory."
        },
        {
          title: "User Interviewing",
          description: "Conducting unbiased user interviews to extract actionable insights and pain points."
        }
      ],
      bentoGrid: {
        title: "Design PAC 1.0",
        imgSpeaker: designPac1Images[1] || designPac1Images[0],
        imgPanel: designPac1Images[2] || designPac1Images[0],
        topicsList: [
          "UI/UX Fundamentals",
          "Figma from Scratch",
          "Information Architecture",
          "Usability Testing Sessions",
          "Building Design Portfolios"
        ],
        imgAudienceWide: designPac1Images[3] || designPac1Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: designPac1Images[4] || designPac1Images[1],
        heading: "Skills Developed Through Design",
        subheading: "Building Core Design Competencies:",
        bulletPoints: [
          "Mastery of typography & color palettes",
          "Wireframing low to high fidelity",
          "User journey mapping",
          "Creating interactive prototypes",
          "Effective design presentation"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "UI/UX Foundations",
          "Interactive Figma Sessions",
          "User Journey Mapping",
          "Wireframing Challenges",
          "Portfolio Best Practices",
          "Live Usability Labs",
          "Peer Design Critiques",
          "Industry Mentor Feedback"
        ],
        imgHighlight1: designPac1Images[5] || designPac1Images[3],
        imgHighlight2: designPac1Images[6] || designPac1Images[4]
      }
    },

    // =========================================================================
    // 12. HACK THE HORIZON 1.0 (2024)
    // =========================================================================
    {
      id: "hack-the-horizon-2024",
      title: "Hack the Horizon 1.0",
      shortTitle: "HACK THE HORIZON 1.0-2024",
      date: "16 November 2024",
      year: "2024",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: hackHorizon24Images[0] || getImage('hackthehorizon-1'),
      heroImage: hackHorizon24Images[0] || getImage('hackthehorizon-1'),
      heroTagline: "The inaugural national hackathon igniting student innovation",
      heroDescription: "The launch edition of Hack the Horizon challenged over 400 collegiate developers to solve real-world industry problem statements within a 24-hour sprint.",
      pillarsHeading: "Practical Hackathon Learning",
      pillars: [
        {
          title: "Agile Development",
          description: "Rapidly iterating prototypes from conception to working software in 24 hours."
        },
        {
          title: "API Integration",
          description: "Connecting third-party services, databases, and microservices into cohesive apps."
        },
        {
          title: "Presentation Skills",
          description: "Pitching functional software solutions succinctly before an expert jury."
        }
      ],
      bentoGrid: {
        title: "Hack The Horizon 1.0",
        imgSpeaker: hackHorizon24Images[1] || hackHorizon24Images[0],
        imgPanel: hackHorizon24Images[2] || hackHorizon24Images[0],
        topicsList: [
          "Full-Stack Web Development",
          "Cloud Storage & DB Design",
          "API Security & Authentication",
          "Rapid UI Wireframing",
          "Hackathon Pitch Mastery"
        ],
        imgAudienceWide: hackHorizon24Images[3] || hackHorizon24Images[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: hackHorizon24Images[4] || hackHorizon24Images[1],
        heading: "Skills Developed In Hackathon Sprints",
        subheading: "Building Resilience & Practical Coding:",
        bulletPoints: [
          "Fast-paced problem decomposition",
          "Collaborative Git branching and merging",
          "Real-time bug diagnosis and fixing",
          "Product demo video creation",
          "Building confidence as a technical builder"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "24-Hour Building Challenge",
          "Industry Mentor Check-ins",
          "Cash Awards & Certificates",
          "Live Technical Evaluations",
          "Free Compute Resources",
          "Midnight Snacks & Coffee",
          "Team Building Activities",
          "ZUNTRA Community Onboarding"
        ],
        imgHighlight1: hackHorizon24Images[5] || hackHorizon24Images[3],
        imgHighlight2: hackHorizon24Images[6] || hackHorizon24Images[4]
      }
    },

    // =========================================================================
    // 13. INNOTHON 2024 (2024)
    // =========================================================================
    {
      id: "innothon-2024",
      title: "Innothon 2024",
      shortTitle: "INNOTHON 2024",
      date: "24 August 2024",
      year: "2024",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: innothonImages[0] || getImage('Innothon-1'),
      heroImage: innothonImages[0] || getImage('Innothon-1'),
      heroTagline: "Fostering unconstrained creative engineering and rapid prototyping",
      heroDescription: "A multi-track innovation marathon bringing together software engineers, hardware tinkerers, and UX researchers to create interdisciplinary prototypes solving urban mobility, healthcare, and education challenges.",
      pillarsHeading: "Practical Innovation Learning",
      pillars: [
        {
          title: "Cross-Disciplinary Thinking",
          description: "Merging hardware sensors, web dashboards, and mobile clients into integrated solutions."
        },
        {
          title: "User Testing",
          description: "Validating functional prototypes with test users during the build sprint."
        },
        {
          title: "Scalable Architecture",
          description: "Designing schemas and services ready for deployment and post-event continuation."
        }
      ],
      bentoGrid: {
        title: "Innothon 2024",
        imgSpeaker: innothonImages[1] || innothonImages[0],
        imgPanel: innothonImages[2] || innothonImages[0],
        topicsList: [
          "IoT & Hardware Interfacing",
          "Cloud Microservices",
          "User Centered Design Sprints",
          "Fast Prototyping Techniques",
          "Startup Incubation Readiness"
        ],
        imgAudienceWide: innothonImages[3] || innothonImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: innothonImages[4] || innothonImages[1],
        heading: "Skills Developed In Innovation Marathons",
        subheading: "Cultivating Inventive Mindsets:",
        bulletPoints: [
          "Bridging hardware and software protocols",
          "Testing user assumptions rapidly",
          "Creating high-impact functional demos",
          "Coordinating interdisciplinary teams",
          "Turning hackathon projects into startups"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "Hardware Tinkering Lab",
          "Expert Design Mentors",
          "Prototype Pitch Competition",
          "Incubation Track Invitations",
          "Trophies and Cash Rewards",
          "Interactive Innovation Workshops",
          "Networking with Tech Leaders",
          "ZUNTRA Labs Pre-Seed Grants"
        ],
        imgHighlight1: innothonImages[5] || innothonImages[3],
        imgHighlight2: innothonImages[6] || innothonImages[4]
      }
    },

    // =========================================================================
    // 14. UBERTECH '24 (2024)
    // =========================================================================
    {
      id: "ubertech-24",
      title: "Ubertech '24",
      shortTitle: "UBERTECH '24",
      date: "28 March 2024",
      year: "2024",
      category: "AI & INTELLIGENCE",
      categoryId: "ai-intelligence",
      location: "Chennai, India",
      image: ubertechImages[0] || getImage('ubertech24-1'),
      heroImage: ubertechImages[0] || getImage('ubertech24-1'),
      heroTagline: "A nationwide celebration of technical prowess, algorithms, and future systems",
      heroDescription: "One of South India’s premier collegiate technical festivals, hosted in collaboration with ZUNTRA, drawing over 1,200 participants for coding championships, paper presentations, web design showdowns, and robotics tournaments.",
      pillarsHeading: "Practical Technical Mastery",
      pillars: [
        {
          title: "Competitive Programming",
          description: "High-intensity algorithmic challenges testing data structures, dynamic programming, and optimization."
        },
        {
          title: "Research Presentations",
          description: "Peer-reviewed student research presentations across AI, cybersecurity, and distributed systems."
        },
        {
          title: "Creative Tech Challenges",
          description: "Live web development and interface design contests under tight time constraints."
        }
      ],
      bentoGrid: {
        title: "Ubertech '24",
        imgSpeaker: ubertechImages[1] || ubertechImages[0],
        imgPanel: ubertechImages[2] || ubertechImages[0],
        topicsList: [
          "Data Structures & Algorithms",
          "Cybersecurity & CTF Challenges",
          "Web & App Development",
          "Technical Paper Presentations",
          "Robotics Line Following & Combat"
        ],
        imgAudienceWide: ubertechImages[3] || ubertechImages[0]
      },
      speakerSpotlight: {
        imgSpeakerVertical: ubertechImages[4] || ubertechImages[1],
        heading: "Skills Developed At Technical Festivals",
        subheading: "Excelling In Competitive Engineering:",
        bulletPoints: [
          "Optimizing time and space complexity",
          "Conducting rigorous technical research",
          "Building under intense competitive time limits",
          "Public defense of technical papers",
          "Connecting with industry talent scouts"
        ]
      },
      highlights: {
        title: "Program Highlights",
        items: [
          "15+ Technical & Non-Tech Events",
          "Grand Cash Prizes & Shields",
          "Keynote by ZUNTRA Leadership",
          "On-the-spot Hiring Drives",
          "RoboWars & Drone Arenas",
          "Live Coding Arena Broadcast",
          "Tech Exhibit Showcase",
          "Valedictory Ceremony & Gala"
        ],
        imgHighlight1: ubertechImages[5] || ubertechImages[3],
        imgHighlight2: ubertechImages[6] || ubertechImages[4]
      }
    }
  ]
};
