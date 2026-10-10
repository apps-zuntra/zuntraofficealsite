import huzzler1 from '../assets/huzzler-banner-img/huzzler1.jpeg';
import huzzler2 from '../assets/huzzler-banner-img/huzzler2.jpeg';
import huzzler3 from '../assets/huzzler-banner-img/huzzler3.jpeg';

export const verticalsData = {
  // =========================================================================
  // 1. MEDIA VERTICAL (Official Zuntra Media Content)
  // =========================================================================
  "media": {
    id: "media",
    name: "Media",
    hero: {
      title: "Building the Future of Media Through Technology, Creativity & Storytelling",
      subtitle: "Integrated media solutions that bring together content production, digital storytelling, media technology, and creative infrastructure to help ideas move from concept to audience.",
      primaryBtnText: "EXPLORE MEDIA",
      primaryBtnLink: "#ecosystem",
      secondaryBtnText: "WORK WITH US",
      secondaryBtnLink: "#contact"
    },
    intro: {
      title: "Where Creativity Meets Technology",
      paragraphs: [
        "The media landscape is evolving rapidly. Audiences expect richer experiences, brands need content across more platforms, and creators require access to better production infrastructure.",
        "Zuntra Media brings these worlds together.",
        "We combine creative production, digital media, technology, and strategic thinking to build media experiences designed for today's audiences and tomorrow's platforms.",
        "From developing original content and producing films to enabling creators with professional infrastructure, we support the complete media journey—from idea and production to post-production, distribution, and audience engagement."
      ],
      leadParagraphIndex: 1
    },
    process: {
      title: "From Idea to Audience.",
      steps: [
        { num: "01", label: "IDEA" },
        { num: "02", label: "DEVELOPMENT" },
        { num: "03", label: "PRODUCTION" },
        { num: "04", label: "POST-PRODUCTION" },
        { num: "05", label: "DISTRIBUTION" },
        { num: "06", label: "AUDIENCE" }
      ]
    },
    ecosystem: {
      title: "Our Media Ecosystem",
      subtitle: "Four connected ways ZUNTRA helps ideas move from creation to audience.",
      cards: [
        {
          num: "01",
          name: "Z01 Studios",
          tagline: "Integrated Audio-Visual Production",
          tagColor: "#7c3aed",
          description: "Z01 Studios is Zuntra's media production division, bringing together professional production and post-production capabilities for films, branded content, digital media, music, and visual storytelling.",
          linkText: "Explore Z01 Studios",
          linkUrl: "#z01-studios",
          image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "02",
          name: "Z01 Crew",
          tagline: "Production Resources, Equipment & Talent",
          tagColor: "#2563eb",
          description: "A unified production ecosystem connecting creators and production teams with studio spaces, professional equipment, and skilled crew members. From studio booking to production resources.",
          linkText: "Explore Z01 Crew",
          linkUrl: "#z01-crew",
          image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "03",
          name: "Artist Residency",
          tagline: "A Space for Artists to Create",
          tagColor: "#16a34a",
          description: "Our Artist Residency provides musicians and creative professionals with access to professional environments, production support, mentorship, and opportunities to collaborate.",
          linkText: "Explore Residency",
          linkUrl: "#artist-residency",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "04",
          name: "Media Incubator",
          tagline: "From Creative Ideas to Market-Ready Projects",
          tagColor: "#ea580c",
          description: "The Zuntra Media Incubator supports filmmakers, producers, content creators, and digital storytellers at different stages of their projects — from infrastructure to strategic support.",
          linkText: "Explore Incubator",
          linkUrl: "#media-incubator",
          image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    spotlights: [
      {
        id: "z01-studios",
        tag: "01 / Z01 STUDIOS",
        title: "Production built around the story.",
        description: "Z01 Studios is Zuntra's media production division, bringing together professional production and post-production capabilities for films, branded content, digital media, music, and visual storytelling.",
        btnText: "EXPLORE Z01 STUDIOS",
        btnLink: "#",
        image: huzzler1,
        imagePosition: "left",
        theme: "light"
      },
      {
        id: "z01-crew",
        tag: "02 / Z01 CREW",
        title: "The people, places & tools behind production.",
        description: "A unified production ecosystem connecting creators and production teams with studio spaces, professional equipment, and skilled crew members.\n\nFrom studio booking to production resources, Z01 Crew helps simplify the process of bringing creative projects to life.",
        badges: ["SPACES", "EQUIPMENT", "CREW"],
        btnText: "EXPLORE Z01 CREW",
        btnLink: "#",
        image: huzzler2,
        imagePosition: "right",
        theme: "light"
      },
      {
        id: "artist-residency",
        tag: "03 / ARTIST RESIDENCY",
        title: "A Space for Artists to Create.",
        description: "Our Artist Residency provides musicians and creative professionals with access to professional environments, production support, mentorship, and opportunities to collaborate.\n\nWe create the space and ecosystem for artists to focus on their craft while developing new work.",
        btnText: "EXPLORE ARTIST RESIDENCY",
        btnLink: "#",
        image: huzzler3,
        imagePosition: "right",
        theme: "tint"
      },
      {
        id: "media-incubator",
        tag: "04 / MEDIA INCUBATOR",
        title: "From Creative Ideas to Market-Ready Projects.",
        description: "The Zuntra Media Incubator supports filmmakers, producers, content creators, and digital storytellers at different stages of their projects.\n\nParticipants can access production infrastructure, technical expertise, mentorship, marketing guidance, and strategic support to develop ideas into audience-ready media projects.",
        btnText: "EXPLORE MEDIA INCUBATOR",
        btnLink: "#",
        theme: "dark",
        listItems: [
          { num: "01", dotColor: "#a855f7", title: "IDEA", detail: "Concept ideation, creative direction, narrative structuring, and initial feasibility research." },
          { num: "02", dotColor: "#3b82f6", title: "DEVELOP", detail: "Scriptwriting, storyboarding, talent scouting, packaging, and strategic financing frameworks." },
          { num: "03", dotColor: "#10b981", title: "PRODUCE", detail: "Full studio access, advanced camera & lighting equipment, and on-location production crews." },
          { num: "04", dotColor: "#f97316", title: "REFINE", detail: "Editing, Foley sound design, color grading, VFX rendering, and quality optimization." },
          { num: "05", dotColor: "#eab308", title: "POSITION", detail: "Audience segmentation, festival runs, digital marketing campaigns, and press relations." },
          { num: "06", dotColor: "#ec4899", title: "AUDIENCE", detail: "Multi-platform distribution, streaming deployment, analytics tracking, and monetization." }
        ]
      }
    ],
    capabilities: {
      title: "Everything that moves a story forward",
      items: [
        { num: "01", title: "Film Production", desc: "Film production and visual storytelling." },
        { num: "02", title: "Video Production", desc: "Video and branded content production." },
        { num: "03", title: "Digital Content", desc: "Digital media and content development." },
        { num: "04", title: "Audio Production", desc: "Audio production and music-related capabilities." },
        { num: "05", title: "Sound Design", desc: "Sound design and Foley." },
        { num: "06", title: "Music Composition", desc: "Music composition and creative audio." },
        { num: "07", title: "Editing", desc: "Video editing and content refinement." },
        { num: "08", title: "Post-Production", desc: "Colour grading, motion graphics and audio mixing." },
        { num: "09", title: "Media Technology", desc: "AI and emerging technology across media workflows." },
        { num: "10", title: "Creative Infrastructure", desc: "Studios, equipment, professional environments and production resources." }
      ]
    },
    technology: {
      tag: "MEDIA TECHNOLOGY",
      title: "Technology is changing how stories are made.",
      description: "Zuntra explores the use of artificial intelligence and emerging technologies across media workflows, content development, production, operations, and digital distribution.",
      layers: [
        { name: "MEDIA", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
        { name: "CONTENT", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
        { name: "AI", color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
        { name: "PRODUCTION", color: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
        { name: "DISTRIBUTION", color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" }
      ]
    },
    ecosystemWays: {
      title: "One ecosystem.\nDifferent ways to create.",
      badge: "ZUNTRA MEDIA",
      cards: [
        { dotColor: "#7c3aed", title: "Z01 Studios", subtitle: "Production" },
        { dotColor: "#2563eb", title: "Z01 Crew", subtitle: "Infrastructure & Resources" },
        { dotColor: "#059669", title: "Artist Residency", subtitle: "Creators & Collaboration" },
        { dotColor: "#ea580c", title: "Media Incubator", subtitle: "Development & Support" }
      ]
    },
    whatWeCreate: {
      tag: "WHAT WE CREATE",
      title: "Stories in\nmany forms.",
      items: [
        { num: "01", title: "Films" },
        { num: "02", title: "Branded Videos" },
        { num: "03", title: "Digital Content" },
        { num: "04", title: "Music" },
        { num: "05", title: "Audio Productions" },
        { num: "06", title: "Documentaries" },
        { num: "07", title: "Creative Campaigns" },
        { num: "08", title: "Visual Storytelling" }
      ]
    },
    ctaBanner: {
      tag: "WORK WITH ZUNTRA MEDIA",
      title: "Let's Create\nWhat Comes Next.",
      p1: "Have a media project, production requirement, or creative idea?",
      p2: "Let's explore how Zuntra's media ecosystem can help bring it to life.",
      btnText: "START A CONVERSATION",
      btnLink: "#contact"
    },
    faqs: [
      {
        q: "What does Zuntra Media do?",
        a: "Zuntra Media brings together media production, digital content, storytelling, post-production, media technology, and creative infrastructure. We support projects from concept development and production through post-production and distribution."
      },
      {
        q: "What media production services does Zuntra offer?",
        a: "Zuntra supports a range of media production requirements, including film production, video production, branded content, digital content, audio production, sound design, music composition, editing, and post-production."
      },
      {
        q: "Does Zuntra provide video production services for brands?",
        a: "Yes. Zuntra works with brands and organisations to develop and produce video content aligned with their communication goals, audiences, and digital platforms."
      },
      {
        q: "What is Z01 Studios?",
        a: "Z01 Studios is Zuntra's audio-visual production ecosystem, supporting film, video, music, sound, and post-production requirements. It brings creative and technical capabilities together under one production environment."
      },
      {
        q: "What is Z01 Crew?",
        a: "Z01 Crew connects creators and production teams with production resources, equipment, spaces, and creative talent. It is designed to make access to professional media production resources more streamlined."
      },
      {
        q: "Does Zuntra offer post-production services?",
        a: "Yes. Zuntra's media ecosystem supports post-production capabilities including video editing, sound design, Foley, music composition, colour grading, motion graphics, and audio mixing."
      },
      {
        q: "Does Zuntra use AI and technology in media production?",
        a: "Yes. Zuntra explores the use of artificial intelligence and emerging technologies across media workflows, content development, production, operations, and digital distribution."
      },
      {
        q: "Can independent filmmakers and content creators work with Zuntra?",
        a: "Yes. Zuntra's media ecosystem is designed to support filmmakers, creators, artists, producers, and emerging media professionals through production resources, infrastructure, expertise, and collaboration opportunities."
      },
      {
        q: "What is the Zuntra Media Incubator?",
        a: "The Zuntra Media Incubator supports emerging media projects and creative ideas with resources such as production infrastructure, mentorship, technical expertise, marketing guidance, and strategic support."
      },
      {
        q: "Does Zuntra support artists and musicians?",
        a: "Yes. Through its creative ecosystem and Artist Residency initiatives, Zuntra provides opportunities for artists and musicians to develop creative work, access professional environments, and collaborate with other creative professionals."
      },
      {
        q: "What types of content can Zuntra produce?",
        a: "Zuntra's media ecosystem can support different formats including films, branded videos, digital content, music, audio productions, documentaries, creative campaigns, and other visual storytelling projects."
      },
      {
        q: "How can I work with Zuntra Media?",
        a: "You can connect with Zuntra to discuss a media production project, content requirement, creative collaboration, or partnership. Our team can help identify the appropriate capabilities and resources for your project."
      }
    ],
    darkCta: {
      tag: "ZUNTRA MEDIA",
      title: "Let's Create\nWhat Comes Next",
      desc: "Have a media project, production requirement, or creative idea? Let's explore how Zuntra's media ecosystem can help bring it to life.",
      btnText: "START A CONVERSATION",
      btnLink: "#contact"
    }
  },

  // =========================================================================
  // 2. ART & CULTURE VERTICAL (Official Zuntra Art & Culture Content)
  // =========================================================================
  "art-culture": {
    id: "art-culture",
    name: "Art & Culture",
    hero: {
      title: "Where Culture Meets Technology",
      subtitle: "Zuntra brings together art, culture, heritage, and technology to create digital platforms and experiences that make culture more accessible, engaging, and future-ready.",
      primaryBtnText: "EXPLORE OUR PLATFORMS",
      primaryBtnLink: "#ecosystem",
      secondaryBtnText: "WORK WITH US",
      secondaryBtnLink: "#contact"
    },
    intro: {
      title: "Reimagining How Culture Is Experienced",
      paragraphs: [
        "Culture is more than what we preserve. It is what we continue to learn, experience, and share.",
        "Zuntra's Art & Culture vertical develops technology-driven platforms and experiences for museums, cultural institutions, educators, creators, and audiences.",
        "From digital heritage and museum technology to cultural education and immersive experiences, we use technology to connect people with art and culture in new ways."
      ],
      leadParagraphIndex: 1
    },
    process: {
      title: "Preserve. Educate. Experience.",
      steps: [
        { num: "01", label: "PRESERVE" },
        { num: "02", label: "EDUCATE" },
        { num: "03", label: "EXPERIENCE" },
        { num: "04", label: "DIGITIZE" },
        { num: "05", label: "CURATE" },
        { num: "06", label: "ENGAGE" }
      ]
    },
    ecosystem: {
      title: "Our Platforms",
      subtitle: "Technology-enabled platforms bringing culture and audiences closer together.",
      cards: [
        {
          num: "01",
          name: "MUSEOEDU",
          tagline: "Education | Curation | Museum Experiences",
          tagColor: "#7c3aed",
          description: "MuseoEdu brings together education, curation, and experiential learning to create deeper engagement with museums and cultural content. The platform explores how digital technology can help museums and cultural organisations create more meaningful learning experiences for visitors, students, educators, and cultural professionals.",
          linkText: "Explore MuseoEdu",
          linkUrl: "#museoedu",
          image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "02",
          name: "CURATO",
          tagline: "Art Discovery | Digital Experiences | Cultural Engagement",
          tagColor: "#2563eb",
          description: "Curato is part of our exploration into technology-enabled art and cultural experiences, connecting audiences with artworks, stories, and cultural knowledge through digital experiences. It represents a more accessible approach to discovering and engaging with art—helping audiences move beyond simply viewing an artwork to understanding its context, story, and cultural significance.",
          linkText: "Explore Curato",
          linkUrl: "#curato",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "03",
          name: "Digital Heritage Lab",
          tagline: "Archiving | 3D Scanning | Cultural Assets",
          tagColor: "#059669",
          description: "Technology-driven approaches to documenting, preserving, and providing access to cultural and heritage assets through ultra-high resolution scanning and volumetric photogrammetry.",
          linkText: "Explore Heritage Lab",
          linkUrl: "#heritage",
          image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "04",
          name: "Cultural Fellowships",
          tagline: "Artists, Creators & Institutions",
          tagColor: "#ea580c",
          description: "Connecting cultural content with learning, research, and experiential education to support the long-term preservation and global accessibility of artistic traditions.",
          linkText: "Explore Fellowships",
          linkUrl: "#fellowships",
          image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    spotlights: [
      {
        id: "museoedu",
        tag: "01 / MUSEOEDU",
        title: "Making Museum Learning More Engaging.",
        description: "MuseoEdu brings together education, curation, and experiential learning to create deeper engagement with museums and cultural content.\n\nThe platform explores how digital technology can help museums and cultural organisations create more meaningful learning experiences for visitors, students, educators, and cultural professionals.",
        badges: ["EDUCATION", "CURATION", "MUSEUM EXPERIENCES"],
        btnText: "EXPLORE MUSEOEDU",
        btnLink: "#",
        image: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=1000&q=80",
        imagePosition: "left",
        theme: "light"
      },
      {
        id: "curato",
        tag: "02 / CURATO",
        title: "Bringing Art Closer to Audiences.",
        description: "Curato is part of our exploration into technology-enabled art and cultural experiences, connecting audiences with artworks, stories, and cultural knowledge through digital experiences.\n\nIt represents a more accessible approach to discovering and engaging with art—helping audiences move beyond simply viewing an artwork to understanding its context, story, and cultural significance.",
        badges: ["ART DISCOVERY", "DIGITAL EXPERIENCES", "CULTURAL ENGAGEMENT"],
        btnText: "EXPLORE CURATO",
        btnLink: "#",
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80",
        imagePosition: "right",
        theme: "light"
      },
      {
        id: "why-art-culture",
        tag: "03 / WHY ZUNTRA ART & CULTURE?",
        title: "Technology + Culture for Lasting Impact.",
        description: "Technology + Culture: Bringing technological capabilities into cultural and creative environments.\n\nExperience-Driven & Preservation-Focused: Designing digital experiences around how people learn, explore, and engage while supporting long-term accessibility of cultural assets.",
        btnText: "EXPLORE INITIATIVES",
        btnLink: "#",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80",
        imagePosition: "right",
        theme: "tint"
      },
      {
        id: "who-we-work-with",
        tag: "04 / WHO WE WORK WITH",
        title: "The Future of Culture Is Connected.",
        description: "We believe technology can help culture travel further, reach wider audiences, and remain accessible for generations to come.\n\nZuntra is building platforms and experiences that connect art, education, heritage, technology, and people.",
        btnText: "EXPLORE OUR PLATFORMS",
        btnLink: "#",
        theme: "dark",
        listItems: [
          { num: "01", dotColor: "#a855f7", title: "MUSEUMS & GALLERIES", detail: "Digital collections, interactive exhibitions, and immersive visitor experiences." },
          { num: "02", dotColor: "#3b82f6", title: "CULTURAL INSTITUTIONS", detail: "Digital transformation and end-to-end cultural technology solutions." },
          { num: "03", dotColor: "#10b981", title: "EDUCATORS & UNIVERSITIES", detail: "Technology-enabled cultural learning, curriculum modules, and research archives." },
          { num: "04", dotColor: "#f97316", title: "ARTISTS & CREATORS", detail: "New digital formats for creative expression, interactive media, and audience engagement." },
          { num: "05", dotColor: "#eab308", title: "HERITAGE ORGANISATIONS", detail: "Digital preservation, 3D scanning, historical documentation, and heritage experiences." }
        ]
      }
    ],
    capabilities: {
      title: "What We Build",
      items: [
        { num: "01", title: "Digital Heritage", desc: "Technology-driven approaches to documenting, preserving, and providing access to cultural and heritage assets." },
        { num: "02", title: "Museum Technology", desc: "Digital solutions for collections management, visitor engagement, cultural data, and modern museum operations." },
        { num: "03", title: "Virtual & Interactive Experiences", desc: "Digital and immersive experiences that help audiences explore exhibitions, collections, and cultural stories." },
        { num: "04", title: "Cultural Education", desc: "Platforms that connect cultural content with learning, research, and experiential education." },
        { num: "05", title: "Digital Preservation", desc: "Infrastructure and systems that support the long-term preservation and accessibility of cultural assets." },
        { num: "06", title: "Immersive Audio & Spatial", desc: "Atmospheric acoustic and spatial media environments for historical and modern spaces." },
        { num: "07", title: "Photogrammetry & 3D Scanning", desc: "High-resolution non-contact scanning and digital twin preservation for delicate artifacts." },
        { num: "08", title: "Curatorial Platforms", desc: "Digital tools for context exploration, storytelling, and cultural significance mapping." },
        { num: "09", title: "Accessibility Frameworks", desc: "Helping cultural organisations extend their reach to broader global audiences." },
        { num: "10", title: "Connected Heritage Systems", desc: "Bridging physical museum environments with web, mobile, and interactive digital interfaces." }
      ]
    },
    technology: {
      tag: "TECHNOLOGY FOR CULTURE",
      title: "Preserve. Educate. Experience.",
      description: "We combine technology and cultural knowledge across three core areas: Digitising and protecting cultural collections, making knowledge accessible through learning, and creating interactive discovery.",
      layers: [
        { name: "PRESERVE", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
        { name: "EDUCATE", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
        { name: "EXPERIENCE", color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
        { name: "DIGITAL HERITAGE", color: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
        { name: "ACCESSIBILITY", color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" }
      ]
    },
    ecosystemWays: {
      title: "One ecosystem.\nDifferent ways to experience.",
      badge: "ZUNTRA ART & CULTURE",
      cards: [
        { dotColor: "#7c3aed", title: "MuseoEdu", subtitle: "Education & Museum Curation" },
        { dotColor: "#2563eb", title: "Curato", subtitle: "Art Discovery & Engagement" },
        { dotColor: "#059669", title: "Digital Heritage", subtitle: "Preservation & 3D Scanning" },
        { dotColor: "#ea580c", title: "Cultural Fellowships", subtitle: "Artists & Creative Grants" }
      ]
    },
    whatWeCreate: {
      tag: "WHAT WE BUILD",
      title: "Culture in\nmany forms.",
      items: [
        { num: "01", title: "Digital Heritage" },
        { num: "02", title: "Museum Technology" },
        { num: "03", title: "Virtual Experiences" },
        { num: "04", title: "Cultural Education" },
        { num: "05", title: "Digital Preservation" },
        { num: "06", title: "Interactive Exhibits" },
        { num: "07", title: "Immersive Audio" },
        { num: "08", title: "Digital Archives" }
      ]
    },
    ctaBanner: {
      tag: "WORK WITH ZUNTRA ART & CULTURE",
      title: "The Future of Culture\nIs Connected.",
      p1: "We believe technology can help culture travel further, reach wider audiences, and remain accessible for generations to come.",
      p2: "Zuntra is building platforms and experiences that connect art, education, heritage, technology, and people.",
      btnText: "EXPLORE OUR PLATFORMS",
      btnLink: "#contact"
    },
    faqs: [
      {
        q: "What is Art & Culture Technology?",
        a: "Art & Culture Technology refers to the use of digital and emerging technologies to support artistic expression, cultural preservation, heritage documentation, storytelling, exhibitions, and audience experiences."
      },
      {
        q: "What does Zuntra's Art & Culture vertical do?",
        a: "Zuntra's Art & Culture vertical explores the intersection of art, culture, heritage, technology, and storytelling. Our work includes digital heritage, immersive experiences, interactive exhibitions, cultural technology, and technology-enabled creative experiences."
      },
      {
        q: "How does technology help preserve cultural heritage?",
        a: "Technology can help document, digitise, archive, and provide new ways to access cultural assets, historical information, traditional knowledge, and heritage environments."
      },
      {
        q: "What are immersive cultural experiences?",
        a: "Immersive cultural experiences use technologies such as interactive media, spatial technology, projection, augmented reality, virtual reality, sound, and digital storytelling to create more engaging ways of experiencing culture."
      },
      {
        q: "Does Zuntra work with museums and galleries?",
        a: "Yes. Zuntra explores technology-driven solutions for museums, galleries, cultural institutions, and heritage organisations, including interactive exhibitions, digital collections, visitor experiences, and cultural storytelling."
      },
      {
        q: "What is digital heritage?",
        a: "Digital heritage refers to cultural and historical information that is created, documented, preserved, or made accessible using digital technologies. It can include digitised objects, archives, historical records, 3D models, virtual environments, and multimedia cultural content."
      },
      {
        q: "Does Zuntra work with artists?",
        a: "Yes. Zuntra's Art & Culture ecosystem creates opportunities to explore the intersection of artistic practice and emerging technology, including digital art, interactive installations, immersive media, and technology-enabled creative experiences."
      },
      {
        q: "What technologies are used in cultural experiences?",
        a: "Depending on the project, cultural experiences can incorporate technologies such as AI, AR, VR, 3D visualisation, projection technology, interactive media, spatial computing, and digital platforms."
      },
      {
        q: "Can cultural organisations digitise their collections with Zuntra?",
        a: "Zuntra explores digital documentation, digitisation, digital archives, interactive experiences, and technology-enabled approaches for cultural collections and heritage assets."
      },
      {
        q: "How can organisations collaborate with Zuntra Art & Culture?",
        a: "Museums, cultural institutions, heritage organisations, artists, educational institutions, governments, and brands can connect with Zuntra to explore cultural technology, digital heritage, immersive experiences, and creative technology projects."
      }
    ],
    darkCta: {
      tag: "ZUNTRA ART & CULTURE",
      title: "The Future of Culture\nIs Connected",
      desc: "We believe technology can help culture travel further, reach wider audiences, and remain accessible for generations to come. Zuntra is building platforms and experiences that connect art, education, heritage, technology, and people.",
      btnText: "EXPLORE OUR PLATFORMS",
      btnLink: "#contact"
    }
  },

  // =========================================================================
  // 3. ROBOTICS VERTICAL (Official Zuntra Robotics Content)
  // =========================================================================
  "robotics": {
    id: "robotics",
    name: "Robotics",
    hero: {
      title: "Building Intelligent Robots for the Real World",
      subtitle: "Zuntra develops autonomous robotic systems that combine AI, computer vision, navigation, and robotics engineering to transform real-world operations.",
      primaryBtnText: "EXPLORE ZATOMO",
      primaryBtnLink: "#ecosystem",
      secondaryBtnText: "WORK WITH US",
      secondaryBtnLink: "#contact"
    },
    intro: {
      title: "From AI to Physical Intelligence",
      paragraphs: [
        "Automation is moving beyond software and into the physical world.",
        "Zuntra's Robotics & Intelligent Automation vertical focuses on autonomous robotics, intelligent navigation, computer vision, and physical AI for logistics and operational environments.",
        "Our goal is to build robotic systems that can perceive, navigate, and act with greater intelligence and efficiency."
      ],
      leadParagraphIndex: 1
    },
    process: {
      title: "Intelligence That Moves.",
      steps: [
        { num: "01", label: "AI NAVIGATION" },
        { num: "02", label: "COMPUTER VISION" },
        { num: "03", label: "AUTONOMOUS SYSTEMS" },
        { num: "04", label: "PHYSICAL AI" },
        { num: "05", label: "HARDWARE + SOFTWARE" },
        { num: "06", label: "DEPLOYMENT" }
      ]
    },
    ecosystem: {
      title: "Our Robotics Ecosystem",
      subtitle: "Autonomous platforms and technologies engineering the future of physical intelligence.",
      cards: [
        {
          num: "01",
          name: "Zatomo",
          tagline: "Autonomous Robotics for Last-Mile Logistics",
          tagColor: "#7c3aed",
          description: "Zatomo is Zuntra's autonomous robotics platform focused on intelligent delivery solutions for urban, commercial, and campus environments. By combining AI navigation, computer vision, robotics engineering, and route optimisation, Zatomo explores scalable solutions for last-mile logistics.",
          linkText: "Explore Zatomo",
          linkUrl: "#zatomo",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "02",
          name: "Warehouse & Logistics",
          tagline: "Material Movement & Inventory Automation",
          tagColor: "#2563eb",
          description: "Automating the movement of materials, components, inventory, and goods across manufacturing plants, sorting facilities, and industrial warehouses with high-precision autonomous mobile robots.",
          linkText: "Explore Logistics",
          linkUrl: "#logistics",
          image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "03",
          name: "Campus & Healthcare AMRs",
          tagline: "Healthcare Facilities & Campus Logistics",
          tagColor: "#059669",
          description: "Autonomous movement of medicines, supplies, samples, and materials within healthcare facilities, university campuses, and residential developments.",
          linkText: "Explore Healthcare AMRs",
          linkUrl: "#healthcare-amrs",
          image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80"
        },
        {
          num: "04",
          name: "Physical AI & IoT",
          tagline: "Perception, Sensors & Embedded Systems",
          tagColor: "#ea580c",
          description: "Integrating robotics hardware, AI, sensors, and software into intelligent systems that connect physical operations with real-time cloud monitoring and automated decision-making.",
          linkText: "Explore Physical AI",
          linkUrl: "#physical-ai",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    spotlights: [
      {
        id: "zatomo",
        tag: "01 / ZATOMO",
        title: "Autonomous Robotics for Last-Mile Logistics.",
        description: "Zatomo is Zuntra's autonomous robotics platform focused on intelligent delivery solutions for urban, commercial, and campus environments.\n\nBy combining AI navigation, computer vision, robotics engineering, and route optimisation, Zatomo explores scalable solutions for last-mile logistics.",
        badges: ["AI NAVIGATION", "COMPUTER VISION", "ROUTE OPTIMISATION"],
        btnText: "EXPLORE ZATOMO",
        btnLink: "#",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
        imagePosition: "left",
        theme: "light"
      },
      {
        id: "our-technology",
        tag: "02 / OUR TECHNOLOGY",
        title: "Intelligence That Moves.",
        description: "AI Navigation: Real-time route planning and adaptive navigation.\n\nComputer Vision: Helping robots understand and respond to their surroundings.\n\nAutonomous Systems & Physical AI: Enabling robotic systems to perform tasks with minimal human intervention, combining perception, intelligence, and action in the physical world.",
        badges: ["AI NAVIGATION", "COMPUTER VISION", "AUTONOMOUS SYSTEMS", "PHYSICAL AI"],
        btnText: "EXPLORE TECHNOLOGY",
        btnLink: "#",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
        imagePosition: "right",
        theme: "light"
      },
      {
        id: "why-zuntra-robotics",
        tag: "03 / WHY ZUNTRA ROBOTICS?",
        title: "AI-Driven, Real-World Focus, End-to-End Engineering.",
        description: "AI-Driven: Combining artificial intelligence with robotics and automation.\n\nReal-World Focus & Scalable: Building solutions for practical operational environments, bringing hardware, software, AI, navigation, and computer vision together into adaptable systems.",
        btnText: "EXPLORE ENGINEERING",
        btnLink: "#",
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80",
        imagePosition: "right",
        theme: "tint"
      },
      {
        id: "where-robotics-works",
        tag: "04 / APPLICATIONS & INDUSTRIES",
        title: "The Future of Automation Is Physical.",
        description: "The next generation of automation will not just process information—it will perceive, decide, and act in the real world.\n\nZuntra is building toward this future through autonomous robotics, physical AI, and intelligent logistics.",
        btnText: "EXPLORE ZATOMO",
        btnLink: "#",
        theme: "dark",
        listItems: [
          { num: "01", dotColor: "#a855f7", title: "HEALTHCARE", detail: "Autonomous movement of medicines, supplies, samples, and materials within healthcare facilities." },
          { num: "02", dotColor: "#3b82f6", title: "CAMPUSES", detail: "Moving food, documents, books, equipment, and other materials across large campuses." },
          { num: "03", dotColor: "#10b981", title: "RESIDENTIAL COMMUNITIES", detail: "Supporting deliveries within gated communities and residential developments." },
          { num: "04", dotColor: "#f97316", title: "WAREHOUSES & MANUFACTURING", detail: "Automating the movement of materials, components, inventory, and goods." },
          { num: "05", dotColor: "#eab308", title: "CORPORATE & COMMERCIAL SPACES", detail: "Supporting internal deliveries across offices, hotels, retail spaces, and commercial facilities." }
        ]
      }
    ],
    capabilities: {
      title: "Where Robotics Can Make a Difference",
      items: [
        { num: "01", title: "Healthcare", desc: "Autonomous movement of medicines, supplies, samples, and materials within healthcare facilities." },
        { num: "02", title: "Campuses", desc: "Moving food, documents, books, equipment, and other materials across large campuses." },
        { num: "03", title: "Residential Communities", desc: "Supporting deliveries within gated communities and residential developments." },
        { num: "04", title: "Warehouses & Manufacturing", desc: "Automating the movement of materials, components, inventory, and goods." },
        { num: "05", title: "Corporate & Commercial Spaces", desc: "Supporting internal deliveries across offices, hotels, retail spaces, and commercial facilities." },
        { num: "06", title: "AI Navigation", desc: "Real-time route planning, dynamic obstacle avoidance, and adaptive navigation." },
        { num: "07", title: "Computer Vision", desc: "Helping robots understand, perceive, and respond to their physical surroundings." },
        { num: "08", title: "Autonomous Systems", desc: "Enabling robotic systems to perform complex physical tasks with minimal human intervention." },
        { num: "09", title: "Physical AI", desc: "Combining perception, intelligence, and physical action in the real world." },
        { num: "10", title: "Hardware + Software", desc: "Integrating robotics hardware, AI, sensors, and software into unified intelligent systems." }
      ]
    },
    technology: {
      tag: "OUR TECHNOLOGY",
      title: "Intelligence That Moves.",
      description: "Combining artificial intelligence with robotics and automation. Integrating robotics hardware, AI, sensors, and software into intelligent systems designed for practical operational environments.",
      layers: [
        { name: "PHYSICAL AI", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe" },
        { name: "AI NAVIGATION", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
        { name: "COMPUTER VISION", color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
        { name: "AUTONOMOUS SYSTEMS", color: "#ea580c", bg: "#fff7ed", border: "#fed7aa" },
        { name: "HARDWARE + SOFTWARE", color: "#db2777", bg: "#fdf2f8", border: "#fbcfe8" }
      ]
    },
    ecosystemWays: {
      title: "One ecosystem.\nDifferent ways to automate.",
      badge: "ZUNTRA ROBOTICS",
      cards: [
        { dotColor: "#7c3aed", title: "Zatomo", subtitle: "Autonomous Last-Mile Logistics" },
        { dotColor: "#2563eb", title: "Warehouse Logistics", subtitle: "Material & Inventory Movement" },
        { dotColor: "#059669", title: "Healthcare AMRs", subtitle: "Medical Supplies & Facilities" },
        { dotColor: "#ea580c", title: "Physical AI & IoT", subtitle: "Sensors & Embedded Hardware" }
      ]
    },
    whatWeCreate: {
      tag: "APPLICATIONS & AREAS",
      title: "Autonomy in\nmany forms.",
      items: [
        { num: "01", title: "Healthcare" },
        { num: "02", title: "Campuses" },
        { num: "03", title: "Residential" },
        { num: "04", title: "Warehouses" },
        { num: "05", title: "Commercial Spaces" },
        { num: "06", title: "Last-Mile Delivery" },
        { num: "07", title: "Physical AI" },
        { num: "08", title: "Robotics & IoT" }
      ]
    },
    ctaBanner: {
      tag: "WORK WITH ZUNTRA ROBOTICS",
      title: "The Future of Automation\nIs Physical.",
      p1: "The next generation of automation will not just process information—it will perceive, decide, and act in the real world.",
      p2: "Businesses, institutions, and organisations interested in autonomous robotics, intelligent automation, or physical AI can contact Zuntra to discuss potential applications and collaborations.",
      btnText: "EXPLORE ZATOMO",
      btnLink: "#contact"
    },
    faqs: [
      {
        q: "What does Zuntra's Robotics & Intelligent Automation division do?",
        a: "Zuntra develops autonomous robotics and intelligent automation systems that combine AI, computer vision, robotics engineering, and software to support real-world operations."
      },
      {
        q: "What is Zatomo?",
        a: "Zatomo is Zuntra's autonomous robotics platform focused on intelligent delivery robots and last-mile logistics across urban, commercial, and campus environments."
      },
      {
        q: "What are autonomous delivery robots?",
        a: "Autonomous delivery robots are robotic systems designed to transport goods or materials with limited human intervention using technologies such as AI navigation, sensors, computer vision, and autonomous control."
      },
      {
        q: "What industries can use autonomous robotics?",
        a: "Autonomous robotics can support healthcare, residential communities, educational institutions, manufacturing, warehouses, corporate campuses, retail, commercial facilities, and smart-city infrastructure."
      },
      {
        q: "How does AI help autonomous robots?",
        a: "AI enables robots to interpret their surroundings, optimise routes, identify obstacles, make navigation decisions, and adapt to changing environments."
      },
      {
        q: "What is physical AI?",
        a: "Physical AI refers to intelligent systems that can perceive and interact with the physical world. In robotics, this can involve AI, sensors, computer vision, navigation, and autonomous decision-making."
      },
      {
        q: "Does Zuntra build robotics and IoT solutions?",
        a: "Yes. Zuntra's robotics and IoT capabilities connect physical operations with intelligent software through connected sensors, monitoring, and automated hardware-software systems."
      },
      {
        q: "Can Zuntra develop robotics solutions for businesses?",
        a: "Zuntra's robotics vertical is focused on developing and deploying intelligent robotic systems for real-world operational environments. Organisations can contact Zuntra to explore potential robotics and automation applications."
      },
      {
        q: "What is last-mile logistics?",
        a: "Last-mile logistics refers to the final stage of delivering goods or materials from a distribution point to their destination. Autonomous robotics can help automate this stage in suitable environments."
      },
      {
        q: "How can I work with Zuntra Robotics?",
        a: "Businesses, institutions, and organisations interested in autonomous robotics, intelligent automation, or physical AI can contact Zuntra to discuss potential applications and collaborations."
      }
    ],
    darkCta: {
      tag: "ZUNTRA ROBOTICS",
      title: "The Future of Automation\nIs Physical",
      desc: "The next generation of automation will not just process information—it will perceive, decide, and act in the real world. Zuntra is building toward this future through autonomous robotics, physical AI, and intelligent logistics.",
      btnText: "EXPLORE ZATOMO",
      btnLink: "#contact"
    }
  }
};
