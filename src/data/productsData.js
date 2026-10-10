
import huzzlerImg1 from '../assets/huzzler-banner-img/huzzler1.jpeg';
import huzzlerImg2 from '../assets/huzzler-banner-img/huzzler2.jpeg';
import huzzlerImg3 from '../assets/huzzler-banner-img/huzzler3.jpeg';

import rentitImg1 from '../assets/rentit-banner-img/WhatsApp Image 2026-09-22 at 2.38.16 PM.jpeg';
import rentitImg2 from '../assets/rentit-banner-img/WhatsApp Image 2026-09-22 at 2.38.26 PM.jpeg';
import rentitImg3 from '../assets/rentit-banner-img/WhatsApp Image 2026-09-22 at 2.38.37 PM.jpeg';

import mungoImg1 from '../assets/mungo-banner-img/WhatsApp Image 2026-09-22 at 3.09.38 PM.jpeg';
import mungoImg2 from '../assets/mungo-banner-img/WhatsApp Image 2026-09-22 at 3.10.21 PM.jpeg';
import mungoImg3 from '../assets/mungo-banner-img/WhatsApp Image 2026-09-22 at 3.10.01 PM.jpeg';

import huzzler1 from '../assets/product-ui-img/image.png';
import huzzler2 from '../assets/product-ui-img/image copy.png';
import huzzler3 from '../assets/product-ui-img/image copy 2.png';
import huzzler4 from '../assets/product-ui-img/image copy 3.png';
import huzzler5 from '../assets/product-ui-img/image copy 4.png';
import rentit1 from '../assets/product-ui-img/3615c738770351d36c7720a3a2a4f1769dc36a81.png';
import rentit2 from '../assets/product-ui-img/83d25aa1532d0f96b15e99d0243bba6616c8d26a.png';
import rentit3 from '../assets/product-ui-img/b51dc314e1ce84007ac609dc1181ef63ee8d2919.png';
import rentit4 from '../assets/product-ui-img/ca60fa137c791026d45ca43b79d14fa8e4c076ba.png';
import rentit5 from '../assets/product-ui-img/f9e077bd7d48e8e26e05987ae30a7a245310060b.png';


import wiviyheader1 from '../assets/Wiviy_hero/Frame 1984079524.png';
import wiviyheader2 from '../assets/Wiviy_hero/Frame 1984079525.png';
import wiviyheader3 from '../assets/Wiviy_hero/Frame 1984079526.png';




export const productsData = {

  "huzzler": {
    id: "huzzler",
    name: "Huzzler",
    bannerImages: [huzzlerImg1, huzzlerImg2, huzzlerImg3],
    hero: {
      image: huzzler1,
      titlePrimary: "Freelance smarter.",
      titleAccent: "Hire faster.",
      subtitle: "An AI-powered freelance platform connecting skilled talent with businesses and opportunities — built for how professional work moves today.",
      primaryBtnText: "EXPLORE HUZZLER",
      primaryBtnLink: "#product-story",
      secondaryBtnText: "VISIT HUZZLER",
      secondaryBtnLink: "https://www.huzzler.io/",
      browserUrl: "huzzler.io / discover",
      mockupNav: ["Discover", "Opportunities", "Network", "Messages", "Profile"],
      mockupTitle: "Discover talent",
      mockupTalent: [
        {
          initial: "A",
          avatarBg: "#8b5cf6",
          name: "Aarav Mehta",
          role: "Product Designer",
          statusColor: "#10b981",
          skills: ["UI/UX", "Systems"]
        },
        {
          initial: "P",
          avatarBg: "#2563eb",
          name: "Priya Sharma",
          role: "Full Stack Dev",
          statusColor: "#10b981",
          skills: ["React", "Node"]
        },
        {
          initial: "R",
          avatarBg: "#059669",
          name: "Rohan Kapoor",
          role: "Brand Strategist",
          statusColor: "#9ca3af",
          skills: ["Brand", "Growth"]
        },
        {
          initial: "M",
          avatarBg: "#ea580c",
          name: "Meera Nair",
          role: "Data Scientist",
          statusColor: "#10b981",
          skills: ["ML", "Python"]
        }
      ]
    },
    statement: {
      bold: "Built for the way work moves now.",
      muted: "Freelancing is no longer just about finding a gig — it’s about finding the right people, the right opportunities, and the right connections at the right moment."
    },
    storyHeader: {
      tag: "PRODUCT STORY",
      title: "From intelligence to connection."
    },
    features: [
      {
        id: "discovery",
        image: huzzler2,
        tag: "01 / AI-POWERED TALENT DISCOVERY",
        title: "Find the right talent. Without the noise.",
        description: "Huzzler helps businesses discover skilled freelancers through AI-powered talent matching, connecting project requirements with relevant skills, expertise, and experience.",
        type: "ai-match",
        matchData: {
          topTag: "AI-POWERED MATCH",
          reqLabel: "PROJECT REQUIREMENT",
          projectTitle: "Brand Identity System",
          tags: ["Branding", "UI", "Strategy"],
          listLabel: "MATCHED PROFESSIONALS",
          candidates: [
            { initial: "A", bg: "#10b981", name: "Aarav Mehta", badge: "High relevance", badgeClass: "high" },
            { initial: "N", bg: "#3b82f6", name: "Nisha Verma", badge: "Strong match", badgeClass: "strong" },
            { initial: "D", bg: "#8b5cf6", name: "Dev Malhotra", badge: "Good fit", badgeClass: "good" }
          ]
        }
      },
      {
        id: "networking",
        image: huzzler3,
        tag: "02 / PROFESSIONAL NETWORKING",
        title: "Connections that go beyond a single project.",
        description: "Huzzler creates a professional networking ecosystem where freelancers, creators, businesses, and collaborators can build meaningful professional relationships, discover new opportunities, and grow their network over time.",
        type: "network-dark",
        networkData: {
          topTag: "PROFESSIONAL NETWORK",
          initial: "A",
          avatarBg: "#8b5cf6",
          name: "Aarav Mehta",
          role: "Product Designer · 42 connections",
          actionBtn: "Connect",
          feed: [
            { text: "Completed brand system for Fintech startup", time: "2d ago", dot: "#10b981" },
            { text: "Connected with Priya Sharma", time: "4d ago", dot: "#3b82f6" },
            { text: "Added 3 new portfolio pieces", time: "1w ago", dot: "#8b5cf6" }
          ]
        }
      },
      {
        id: "opportunities",
        image: huzzler4,
        tag: "03 / OPPORTUNITY DISCOVERY",
        title: "Discover opportunities that actually fit.",
        description: "Freelancers should not have to search endlessly through irrelevant projects. Huzzler surfaces freelance opportunities aligned with professional skills, expertise, interests, and project history.",
        type: "opportunities",
        oppTag: "OPPORTUNITY DISCOVERY",
        oppData: [
          {
            title: "Brand Identity System",
            badge: "High relevance",
            badgeClass: "high",
            tags: ["Branding", "Strategy"],
            budget: "₹XX,XXX",
            label: "Budget"
          },
          {
            title: "React Dashboard Build",
            badge: "Strong match",
            badgeClass: "strong",
            tags: ["React", "TypeScript"],
            budget: "₹XX,XXX",
            label: "Budget"
          },
          {
            title: "Content Strategy — SaaS",
            badge: "Good fit",
            badgeClass: "good",
            tags: ["Content", "Growth"],
            budget: "₹XX,XXX",
            label: "Budget"
          }
        ]
      },
      {
        id: "presence",
        image: huzzler5,
        tag: "04 / PROFESSIONAL PRESENCE",
        title: "Build your professional presence.",
        description: "Showcase your skills, expertise, portfolio, achievements, and professional experience in one place — making it easier for businesses to discover your capabilities and understand the value you bring.",
        type: "profile-card",
        profileData: {
          initial: "A",
          avatarBg: "#8b5cf6",
          name: "Aarav Mehta",
          status: "Product Designer · Available for projects",
          tags: ["UI/UX", "Design Systems", "Product Strategy", "Prototyping"],
          stats: [
            { value: "12+", label: "Projects" },
            { value: "40+", label: "Connections" },
            { value: "XX", label: "Reviews" }
          ]
        }
      }
    ],
    intelligence: {
      tag: "INTELLIGENCE",
      title: "Intelligence that connects the right people.",
      description: "Huzzler brings together professional profiles, skills, opportunities, project requirements, and experience to make relevant connections easier to discover.",
      layers: [
        { name: "PROFILE", color: "#3b82f6", detail: "Skills · Experience · Portfolio" },
        { name: "SKILLS", color: "#8b5cf6", detail: "Expertise · Verified capabilities" },
        { name: "CONTEXT", color: "#10b981", detail: "Project history · Preferences" },
        { name: "MATCHING", color: "#a855f7", detail: "Relevance · Fit · Alignment" },
        { name: "OPPORTUNITY", color: "#f97316", detail: "Projects · Roles · Collaborations" },
        { name: "CONNECTION", color: "#10b981", detail: "Discovered · Introduced · Active" }
      ]
    },
    gridFeatures: {
      tag: "FEATURES",
      title: "Everything you need to move work forward.",
      items: [
        { dotColor: "#8b5cf6", title: "AI Project Matching", desc: "Connect with relevant professionals based on project requirements, skills, and expertise." },
        { dotColor: "#3b82f6", title: "Verified Professional Profiles", desc: "Explore profiles, portfolios, experience, skills, and professional achievements." },
        { dotColor: "#10b981", title: "Opportunity Discovery", desc: "Discover freelance projects and opportunities aligned with your professional interests." },
        { dotColor: "#f97316", title: "Professional Networking", desc: "Build meaningful professional relationships beyond a single project." },
        { dotColor: "#eab308", title: "Portfolio & Expertise", desc: "Showcase your work, skills, experience, and professional achievements." },
        { dotColor: "#ec4899", title: "Client Discovery", desc: "Help businesses discover skilled professionals suited to their specific project needs." }
      ]
    },
    bothSides: {
      tag: "BUILT FOR BOTH SIDES",
      title: "Built for both sides of the network.",
      businessCard: {
        tag: "FOR BUSINESSES",
        title: "Find skilled professionals faster.",
        description: "Discover talent that fits your project, review relevant expertise and portfolio work, and build the right team without the noise.",
        bullets: [
          "Discover talent",
          "Review expertise",
          "Shortlist professionals",
          "Connect directly",
          "Collaborate"
        ]
      },
      freelancerCard: {
        tag: "FOR FREELANCERS",
        title: "Turn expertise into opportunity.",
        description: "Build your professional presence, discover opportunities that match your skills, and grow a network that works for you.",
        bullets: [
          "Build profile",
          "Showcase work",
          "Discover projects",
          "Connect with businesses",
          "Grow your network"
        ]
      }
    },
    closing: {
      title: "Work is changing.",
      subtitle: "The way we connect should too.",
      description: "Huzzler is designed for a professional world where talent, businesses, and opportunities can connect beyond traditional hiring models."
    },
    faqs: {
      tag: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Questions about the Huzzler platform and how it works.",
      items: [
        {
          q: "What is Huzzler?",
          a: "Huzzler is an AI-powered freelance networking platform that helps businesses discover skilled professionals while helping freelancers showcase their expertise, build professional connections, and discover relevant opportunities."
        },
        {
          q: "How does Huzzler help businesses find freelancers?",
          a: "Huzzler helps businesses discover skilled freelancers based on project requirements, skills, expertise, and professional experience, making it easier to find relevant talent for their projects."
        },
        {
          q: "Can freelancers use Huzzler to find opportunities?",
          a: "Yes. Freelancers can discover projects and freelance opportunities aligned with their skills, professional expertise, interests, and experience."
        },
        {
          q: "Is Huzzler only for hiring?",
          a: "No. Huzzler goes beyond hiring by combining talent discovery, freelance opportunities, professional networking, portfolio showcasing, and business–freelancer connections."
        },
        {
          q: "What can freelancers showcase on their profile?",
          a: "Freelancers can showcase their skills, expertise, portfolio, professional experience, achievements, and project history to help businesses understand their capabilities."
        },
        {
          q: "How does Huzzler use AI?",
          a: "Huzzler uses AI-powered matching to connect project requirements with relevant professional skills, expertise, experience, and context, helping businesses and freelancers discover more relevant connections."
        },
        {
          q: "Is Huzzler available now?",
          a: "Huzzler is being developed as part of the Zuntra product ecosystem. Availability and access details will be shared as the platform progresses."
        }
      ]
    },
    cta: {
      title: "Ready to find the right connection?",
      subtitle: "Discover talent. Find opportunities. Build meaningful professional connections.",
      primaryBtnText: "EXPLORE HUZZLER",
      primaryBtnLink: "#",
      secondaryBtnText: "TALK TO ZUNTRA",
      secondaryBtnLink: "#contact"
    },
    ecosystemGrid: {
      tag: "ZUNTRA ECOSYSTEM",
      title: "Huzzler is one of the products we're building.",
      subtitle: "Explore more from the Zuntra product ecosystem.",
      btnText: "VIEW ALL PRODUCTS",
      btnLink: "/products/huzzler"
    },
    newsletter: {
      title: "Stay close to what we're building.",
      subtitle: "Updates from Zuntra and the Huzzler product team."
    }
  },

  // =========================================================================
  // 2. WIVIY (Official Wiviy Product Design & Data)
  // =========================================================================
  "wiviy": {
    id: "wiviy",
    name: "Wiviy",
    bannerImages: [
      wiviyheader1, wiviyheader2, wiviyheader3
    ],
    hero: {
      titlePrimary: "Date meaningfully.",
      titleAccent: "Connect genuinely.",
      subtitle: "A relationship-focused dating app helping people discover authentic connections through shared interests, values, compatibility, and meaningful conversations.",
      primaryBtnText: "EXPLORE WIVIY",
      primaryBtnLink: "#product-story",
      secondaryBtnText: "VISIT WIVIY",
      secondaryBtnLink: "https://www.wiviy.com/",
      browserUrl: "wiviy.com / discover",
      mockupNav: ["Discover", "Matches", "Conversations", "Values", "Profile"],
      mockupTitle: "Discover genuine connections",
      mockupTalent: [
        {
          initial: "M",
          avatarBg: "#ec4899",
          name: "Maya Sharma",
          role: "Creative Strategist",
          statusColor: "#10b981",
          skills: ["Art & Travel", "Mindfulness", "Design"]
        },
        {
          initial: "K",
          avatarBg: "#8b5cf6",
          name: "Kabir Roy",
          role: "Environmental Architect",
          statusColor: "#10b981",
          skills: ["Outdoors", "Sustainability", "Jazz"]
        },
        {
          initial: "T",
          avatarBg: "#3b82f6",
          name: "Tara Menon",
          role: "Philosophy Researcher",
          statusColor: "#9ca3af",
          skills: ["Philosophy", "Cinema", "Reading"]
        },
        {
          initial: "N",
          avatarBg: "#059669",
          name: "Neil Verma",
          role: "Sound Designer",
          statusColor: "#10b981",
          skills: ["Acoustics", "Cooking", "Trail Run"]
        }
      ]
    },
    statement: {
      bold: "Built for the way connection should feel.",
      muted: "Dating is no longer just about finding a match — it’s about discovering someone who shares your values, interests, intentions, and vision for a meaningful relationship."
    },
    storyHeader: {
      tag: "PRODUCT STORY",
      title: "From compatibility to connection."
    },
    features: [
      {
        id: "discovery",
        tag: "01 / SMART COMPATIBILITY MATCHING",
        title: "Find connections that actually align.",
        description: "Wiviy helps people discover meaningful matches based on personality, interests, lifestyle, values, goals, and relationship intentions — going beyond surface-level profiles to focus on genuine compatibility.",
        type: "ai-match",
        matchData: {
          topTag: "SMART COMPATIBILITY MATCH",
          reqLabel: "ALIGNMENT & VALUES PREFERENCE",
          projectTitle: "Values, Intentions & Lifestyle Match",
          tags: ["Authenticity", "Shared Vision", "Long-term"],
          listLabel: "COMPATIBLE PROFILES",
          candidates: [
            { initial: "M", bg: "#ec4899", name: "Maya Sharma", badge: "96% Compatibility", badgeClass: "high" },
            { initial: "K", bg: "#8b5cf6", name: "Kabir Roy", badge: "92% Compatibility", badgeClass: "strong" },
            { initial: "T", bg: "#3b82f6", name: "Tara Menon", badge: "88% Compatibility", badgeClass: "good" }
          ]
        }
      },
      {
        id: "networking",
        tag: "02 / MEANINGFUL CONVERSATIONS",
        title: "Start conversations that go beyond a swipe.",
        description: "Wiviy encourages authentic conversations through shared interests, thoughtful icebreakers, and natural conversation starters — helping people move from matching to genuinely getting to know each other.",
        type: "network-dark",
        networkData: {
          topTag: "AUTHENTIC CONVERSATION",
          initial: "M",
          avatarBg: "#ec4899",
          name: "Maya Sharma",
          role: "Shared Interests: Art, Architecture, Nature",
          actionBtn: "Say Hello",
          feed: [
            { text: "Answered prompt: 'My ideal Sunday morning...'", time: "2h ago", dot: "#ec4899" },
            { text: "Shared favourite book recommendation", time: "5h ago", dot: "#8b5cf6" },
            { text: "Unlocked mutual conversation starter", time: "1d ago", dot: "#10b981" }
          ]
        }
      },
      {
        id: "opportunities",
        tag: "03 / INTEREST-BASED CONNECTIONS",
        title: "Discover people who share your world.",
        description: "Shared interests can be the beginning of something meaningful. Wiviy helps people connect through common interests, lifestyle preferences, values, and experiences that create natural points of connection.",
        type: "opportunities",
        oppTag: "INTEREST-BASED CONNECTIONS",
        oppData: [
          {
            title: "Art Gallery & Indie Coffee Exploration",
            badge: "High resonance",
            badgeClass: "high",
            tags: ["Visual Art", "Coffee", "Books"],
            budget: "Shared Passions",
            label: "Interest"
          },
          {
            title: "Weekend Mountain Hiking & Photography",
            badge: "Strong match",
            badgeClass: "strong",
            tags: ["Hiking", "Nature", "Film"],
            budget: "Active Lifestyle",
            label: "Interest"
          },
          {
            title: "Acoustic Live Music & Vinyl Evenings",
            badge: "Great fit",
            badgeClass: "good",
            tags: ["Music", "Concerts", "Vinyl"],
            budget: "Creative Culture",
            label: "Interest"
          }
        ]
      },
      {
        id: "presence",
        tag: "04 / VERIFIED PROFILES",
        title: "Know who you’re connecting with.",
        description: "Wiviy uses profile verification and safety-focused features to create a more trusted dating environment, helping people connect with genuine profiles and build relationships with greater confidence.",
        type: "profile-card",
        profileData: {
          initial: "M",
          avatarBg: "#ec4899",
          name: "Maya Sharma",
          status: "Verified Member · Looking for something meaningful",
          tags: ["Design Thinker", "Coffee Enthusiast", "Weekend Hiker", "Indie Music"],
          stats: [
            { value: "100%", label: "Verified Profile" },
            { value: "96%", label: "Compatibility" },
            { value: "Real", label: "Intentions" }
          ]
        }
      }
    ],
    intelligence: {
      tag: "INTELLIGENCE",
      title: "Intelligence that looks beyond the profile.",
      description: "Wiviy brings together personality, interests, lifestyle, values, goals, and relationship intentions to help people discover connections based on what genuinely matters.",
      layers: [
        { name: "PERSONALITY", color: "#ec4899", detail: "Traits · Communication style · Temperament" },
        { name: "VALUES", color: "#8b5cf6", detail: "Core beliefs · Life ethics · Vision" },
        { name: "INTERESTS", color: "#3b82f6", detail: "Passions · Activities · Hobbies" },
        { name: "LIFESTYLE", color: "#10b981", detail: "Daily habits · Preferences · Outlook" },
        { name: "INTENTIONS", color: "#f97316", detail: "Relationship goals · Sincerity · Clarity" },
        { name: "CONNECTION", color: "#a855f7", detail: "Authentic · Aligned · Lasting" }
      ]
    },
    gridFeatures: {
      tag: "FEATURES",
      title: "Everything you need for meaningful connection.",
      items: [
        { dotColor: "#ec4899", title: "Smart Compatibility Matching", desc: "Discover people based on personality, interests, lifestyle, values, goals, and relationship intentions." },
        { dotColor: "#8b5cf6", title: "Interest-Based Connections", desc: "Connect with people who share your interests, preferences, experiences, and lifestyle." },
        { dotColor: "#3b82f6", title: "Meaningful Conversations", desc: "Start natural conversations with thoughtful icebreakers, shared interests, and conversation prompts." },
        { dotColor: "#10b981", title: "Verified Profiles", desc: "Connect with genuine people through profile verification designed to build greater trust." },
        { dotColor: "#f97316", title: "Safe Dating", desc: "Built-in safety features and community guidelines support a respectful and more secure dating experience." },
        { dotColor: "#a855f7", title: "Relationship Discovery", desc: "Move beyond endless swiping and discover connections with potential for genuine, meaningful relationships." }
      ]
    },
    bothSides: {
      tag: "BUILT FOR REAL CONNECTION",
      title: "Built for people looking for something real.",
      businessCard: {
        tag: "FOR CONNECTION SEEKERS",
        title: "Find people who align with you.",
        description: "Discover genuine people who share your interests, values, lifestyle, and relationship intentions — and explore connections that feel more meaningful.",
        bullets: [
          "Create your profile",
          "Share your interests",
          "Discover compatible people",
          "Start meaningful conversations",
          "Build genuine connections"
        ]
      },
      freelancerCard: {
        tag: "FOR RELATIONSHIP BUILDERS",
        title: "Turn compatibility into connection.",
        description: "Move beyond surface-level matching, discover shared interests, start authentic conversations, and build relationships around what genuinely matters to you.",
        bullets: [
          "Discover compatibility",
          "Explore shared interests",
          "Start conversations",
          "Build trust",
          "Grow meaningful relationships"
        ]
      }
    },
    closing: {
      title: "Dating is changing.",
      subtitle: "The way we connect should too.",
      description: "Wiviy is designed for a dating world where people can move beyond endless swiping and discover authentic connections built around compatibility, shared interests, values, and meaningful conversations."
    },
    faqs: {
      tag: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Questions about Wiviy, meaningful connections, and how the dating platform works.",
      items: [
        {
          q: "What is Wiviy?",
          a: "Wiviy is a relationship-focused dating app designed to help people discover authentic connections through shared interests, values, compatibility, and meaningful interactions."
        },
        {
          q: "How does Wiviy help people find compatible matches?",
          a: "Wiviy looks beyond photos and basic profile information by considering factors such as personality, interests, lifestyle, values, goals, and relationship intentions to help surface more compatible connections."
        },
        {
          q: "How is Wiviy different from traditional dating apps?",
          a: "Wiviy focuses on meaningful relationships and genuine compatibility rather than relying only on surface-level matching. The platform combines shared interests, values, lifestyle, thoughtful prompts, and conversations to encourage deeper connections."
        },
        {
          q: "Can I connect with people who share my interests?",
          a: "Yes. Wiviy helps people discover connections through shared interests, lifestyle preferences, values, experiences, and other compatibility factors."
        },
        {
          q: "How does Wiviy encourage meaningful conversations?",
          a: "Wiviy supports conversations through icebreakers, shared interests, and conversation prompts designed to make it easier to move beyond small talk and get to know someone naturally."
        },
        {
          q: "Are Wiviy profiles verified?",
          a: "Wiviy includes profile verification features designed to help users connect with genuine profiles and create a more trusted dating environment."
        },
        {
          q: "Is Wiviy safe to use?",
          a: "Wiviy is designed with safety features and community guidelines that support respectful interactions and a more secure dating experience."
        }
      ]
    },
    cta: {
      title: "Ready to find a meaningful connection?",
      subtitle: "Discover compatible people. Start genuine conversations. Build meaningful relationships.",
      primaryBtnText: "EXPLORE WIVIY",
      primaryBtnLink: "#",
      secondaryBtnText: "TALK TO ZUNTRA",
      secondaryBtnLink: "#contact"
    },
    ecosystemGrid: {
      tag: "ZUNTRA ECOSYSTEM",
      title: "Wiviy is one of the products we're building.",
      subtitle: "Explore more from the Zuntra product ecosystem.",
      btnText: "VIEW ALL PRODUCTS",
      btnLink: "/products/huzzler"
    },
    newsletter: {
      title: "Stay close to what we're building.",
      subtitle: "Updates from Zuntra and the Wiviy product team."
    }
  },

  // =========================================================================
  // 3. RENTIT (Official Rentit Product Design & Data)
  // =========================================================================
  "rentit": {
    id: "rentit",
    name: "Rentit",
    bannerImages: [rentitImg1, rentitImg2, rentitImg3],
    hero: {
      image: rentit1,
      titlePrimary: "Find the right space.",
      titleAccent: "Rent with confidence.",
      subtitle: "An intelligent rental marketplace helping users discover PGs, apartments, homes, and commercial spaces through smart matching, personalized recommendations, and location-based search.",
      primaryBtnText: "EXPLORE RENTIT",
      primaryBtnLink: "#product-story",
      secondaryBtnText: "VISIT RENTIT",
      secondaryBtnLink: "https://myrentitapp.com/",
      browserUrl: "myrentitapp.com / spaces",
      mockupNav: ["Discover", "PG Stays", "Apartments", "Commercial", "Saved"],
      mockupTitle: "Discover spaces & accommodations",
      mockupTalent: [
        {
          initial: "P",
          avatarBg: "#8b5cf6",
          name: "Premium PG Residency",
          role: "Koramangala · Students & Pros",
          statusColor: "#10b981",
          skills: ["WiFi & Meals", "AC", "Gym"]
        },
        {
          initial: "A",
          avatarBg: "#2563eb",
          name: "Modern 2BHK Apartment",
          role: "Indiranagar · Families",
          statusColor: "#10b981",
          skills: ["Furnished", "Gated", "Balcony"]
        },
        {
          initial: "C",
          avatarBg: "#059669",
          name: "Commercial Office Studio",
          role: "HSR Layout · 12-25 Desks",
          statusColor: "#10b981",
          skills: ["High-speed", "Conference", "Parking"]
        },
        {
          initial: "V",
          avatarBg: "#ea580c",
          name: "Independent Luxury Villa",
          role: "Whitefield · Long-term",
          statusColor: "#9ca3af",
          skills: ["Private Garden", "Pet Friendly", "Security"]
        }
      ]
    },
    statement: {
      bold: "Built for the way people find spaces today.",
      muted: "Finding the right rental should not mean searching through endless listings. Rentit brings PGs, residential properties, and commercial spaces together with smarter discovery, personalized recommendations, and an easier rental search experience."
    },
    storyHeader: {
      tag: "PRODUCT STORY",
      title: "From search to the right space."
    },
    features: [
      {
        id: "discovery",
        image: rentit2,
        tag: "01 / SMART PROPERTY MATCHING",
        title: "Find a space that fits your needs.",
        description: "Rentit helps users discover properties based on their preferred location, budget, lifestyle, and requirements — making it easier to find relevant rental options without endless searching.",
        type: "ai-match",
        matchData: {
          topTag: "SMART PROPERTY MATCH",
          reqLabel: "SEARCH & LIFESTYLE REQUIREMENTS",
          projectTitle: "2BHK / Fully Furnished Near Tech Park",
          tags: ["Under ₹35k", "Metro Proximity", "Gated Society"],
          listLabel: "RECOMMENDED PROPERTIES",
          candidates: [
            { initial: "S", bg: "#10b981", name: "Skyline Greenview Apartments", badge: "98% Match", badgeClass: "high" },
            { initial: "E", bg: "#3b82f6", name: "Elite Urban Co-living PG", badge: "94% Match", badgeClass: "strong" },
            { initial: "M", bg: "#8b5cf6", name: "Maple Heights Residences", badge: "89% Fit", badgeClass: "good" }
          ]
        }
      },
      {
        id: "networking",
        image: rentit3,
        tag: "02 / PG-FOCUSED DISCOVERY",
        title: "Find a PG that feels right.",
        description: "Rentit helps students and working professionals discover comfortable and budget-friendly PG accommodations through location-based search and personalized recommendations.",
        type: "network-dark",
        networkData: {
          topTag: "PG & CO-LIVING DISCOVERY",
          initial: "P",
          avatarBg: "#8b5cf6",
          name: "Stanza Urban Living PG",
          role: "Verified Stay · Single & Twin Sharing",
          actionBtn: "View Stay",
          feed: [
            { text: "Location: 500m from Tech Park & Metro Station", time: "Verified", dot: "#10b981" },
            { text: "Amenities: 3 meals/day, High-speed WiFi, Daily housekeeping", time: "Included", dot: "#3b82f6" },
            { text: "Flexible monthly rental terms with zero brokerage", time: "Exclusive", dot: "#8b5cf6" }
          ]
        }
      },
      {
        id: "opportunities",
        image: rentit4,
        tag: "03 / RESIDENTIAL & COMMERCIAL SPACES",
        title: "One platform. Spaces for every need.",
        description: "From apartments and individual houses to offices and commercial properties, Rentit brings different rental options together for living, working, and business needs.",
        type: "opportunities",
        oppTag: "SPACES FOR LIVING & WORKING",
        oppData: [
          {
            title: "2 & 3 BHK Premium Gated Apartments",
            badge: "Verified Owner",
            badgeClass: "high",
            tags: ["Furnished", "Pool", "Parking"],
            budget: "Residential",
            label: "Category"
          },
          {
            title: "Plug-and-Play Coworking & Private Offices",
            badge: "Instant Move-in",
            badgeClass: "strong",
            tags: ["High-speed Net", "Meeting Rooms", "Power Backup"],
            budget: "Commercial",
            label: "Category"
          },
          {
            title: "Spacious Independent Gated Houses",
            badge: "Direct Listing",
            badgeClass: "good",
            tags: ["Private Lawn", "Pet Friendly", "Quiet Locality"],
            budget: "Long-term",
            label: "Category"
          }
        ]
      },
      {
        id: "presence",
        image: rentit5,
        tag: "04 / EASY PROPERTY DISCOVERY",
        title: "Search less. Discover better.",
        description: "Smart filters and a simplified browsing experience help users narrow down relevant properties and find suitable spaces faster.",
        type: "profile-card",
        profileData: {
          initial: "R",
          avatarBg: "#3b82f6",
          name: "Smart Property Search Engine",
          status: "Filter by Budget, Proximity, Type & Amenities",
          tags: ["PG Stays", "Flats", "Offices", "Zero Brokerage", "Instant Visit Booking"],
          stats: [
            { value: "5,000+", label: "Verified Listings" },
            { value: "100%", label: "Verified Hosts" },
            { value: "< 2 mins", label: "Discovery Time" }
          ]
        }
      }
    ],
    intelligence: {
      tag: "INTELLIGENCE",
      title: "Intelligence that helps you find the right space.",
      description: "Rentit brings together location, budget, lifestyle preferences, property requirements, and available listings to deliver more relevant rental recommendations and a simpler property discovery experience.",
      layers: [
        { name: "LOCATION", color: "#3b82f6", detail: "Proximity · Commute · Neighbourhood safety" },
        { name: "BUDGET", color: "#10b981", detail: "Price range · Deposit clarity · Utilities" },
        { name: "LIFESTYLE", color: "#ec4899", detail: "Sharing type · Food preferences · Amenities" },
        { name: "PREFERENCES", color: "#8b5cf6", detail: "Furnished status · Move-in date · Pet friendly" },
        { name: "PROPERTY MATCHING", color: "#f97316", detail: "Algorithmic relevance · Availability check" },
        { name: "DISCOVERY", color: "#a855f7", detail: "Direct host connect · Instant visits · Booking" }
      ]
    },
    gridFeatures: {
      tag: "FEATURES",
      title: "Everything you need to find your next space.",
      items: [
        { dotColor: "#8b5cf6", title: "01 — Smart Property Matching", desc: "Discover rental properties tailored to your location, budget, lifestyle, and preferences." },
        { dotColor: "#3b82f6", title: "02 — PG Discovery", desc: "Explore PG accommodations designed for students and working professionals." },
        { dotColor: "#10b981", title: "03 — Residential Property Search", desc: "Find apartments, flats, and individual houses suited to different living requirements." },
        { dotColor: "#f97316", title: "04 — Commercial Space Listings", desc: "Discover offices, commercial properties, and workspaces for your business needs." },
        { dotColor: "#eab308", title: "05 — Smart Filters & Search", desc: "Simplify property discovery with easy browsing and filters that help narrow down relevant listings." },
        { dotColor: "#ec4899", title: "06 — Location-Based Discovery", desc: "Explore rental options based on preferred locations and find spaces that fit your requirements." }
      ]
    },
    bothSides: {
      tag: "BUILT FOR EVERY RENTAL NEED",
      title: "One platform for every kind of space.",
      cards: [
        {
          tag: "FOR STUDENTS & PROFESSIONALS",
          title: "Find a place that fits your lifestyle.",
          description: "Discover PG accommodations based on your preferred location, budget, and living requirements.",
          theme: "dark",
          bullets: [
            "Discover PGs",
            "Explore locations",
            "Compare suitable options",
            "Find budget-friendly stays",
            "Choose what fits your needs"
          ]
        },
        {
          tag: "FOR HOME SEEKERS",
          title: "Find a home that feels right.",
          description: "Explore apartments and individual houses for long-term living, with options aligned to your lifestyle, budget, and preferred location.",
          theme: "light",
          bullets: [
            "Search apartments",
            "Explore houses",
            "Set preferences",
            "Discover relevant properties",
            "Find long-term rental options"
          ]
        },
        {
          tag: "FOR BUSINESSES",
          title: "Find the right space to work and grow.",
          description: "Discover commercial properties, office spaces, and work environments suited to your operational and business requirements.",
          theme: "dark",
          bullets: [
            "Explore commercial spaces",
            "Search office properties",
            "Discover suitable locations",
            "Match business requirements",
            "Find workspace options"
          ]
        }
      ]
    },
    closing: {
      title: "Finding a space is changing.",
      subtitle: "The way we search should too.",
      description: "Rentit is designed to make property discovery simpler by connecting people with PGs, homes, apartments, and commercial spaces through intelligent matching, personalized recommendations, and easy search."
    },
    faqs: {
      tag: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Questions about Rentit, property discovery, and how the rental platform works.",
      items: [
        {
          q: "What is Rentit?",
          a: "Rentit is a smart rental marketplace that helps users discover PG accommodations, apartments, flats, houses, and commercial spaces through intelligent matching and personalized recommendations."
        },
        {
          q: "Who is Rentit designed for?",
          a: "Rentit is designed for students and working professionals looking for PGs, individuals and families searching for residential properties, and businesses seeking commercial spaces."
        },
        {
          q: "How does Rentit help users find properties faster?",
          a: "Rentit combines smart property matching with location-based search, filters, and personalized recommendations based on factors such as budget, location, and lifestyle preferences."
        },
        {
          q: "Does Rentit only offer PG accommodations?",
          a: "No. Rentit includes PG accommodations as well as apartments, individual houses, and commercial properties, providing rental options for different living and business needs."
        },
        {
          q: "Can businesses use Rentit to find commercial spaces?",
          a: "Yes. Rentit includes commercial property listings, helping businesses discover office spaces and work environments suited to their requirements."
        },
        {
          q: "What makes Rentit different from traditional property listing platforms?",
          a: "Rentit focuses on simplifying property discovery through smart matching, personalized recommendations, location-based search, and easy-to-use filters rather than relying only on generic property listings."
        },
        {
          q: "Is Rentit available now?",
          a: "Yes. According to Zuntra's current product page, Rentit is available to download on the Play Store, allowing users to browse PG accommodations, apartments, houses, and commercial listings."
        }
      ]
    },
    cta: {
      title: "Ready to find the right space?",
      subtitle: "Discover suitable properties. Explore better options. Find a space that fits your needs.",
      primaryBtnText: "EXPLORE RENTIT",
      primaryBtnLink: "#",
      secondaryBtnText: "TALK TO ZUNTRA",
      secondaryBtnLink: "#contact"
    },
    ecosystemGrid: {
      tag: "ZUNTRA ECOSYSTEM",
      title: "Rentit is one of the products we're building.",
      subtitle: "Explore more from the Zuntra product ecosystem.",
      btnText: "VIEW ALL PRODUCTS",
      btnLink: "/products/huzzler"
    },
    newsletter: {
      title: "Stay close to what we're building.",
      subtitle: "Updates from Zuntra and the Rentit product team."
    }
  },

  // =========================================================================
  // 4. Z01 CREW (Official Z01 Crew Product Design & Data)
  // =========================================================================
  "z01-crew": {
    id: "z01-crew",
    name: "Z01 Crew",
    bannerImages: [
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
    ],
    hero: {
      titlePrimary: "Create more.",
      titleAccent: "Own less.",
      subtitle: "A unified production resource platform giving creators, filmmakers, studios, and production teams access to professional equipment, studio spaces, and skilled crew through one seamless ecosystem.",
      primaryBtnText: "EXPLORE Z01 CREW",
      primaryBtnLink: "#product-story",
      secondaryBtnText: "VISIT Z01 CREW",
      secondaryBtnLink: "https://z01crew.com",
      browserUrl: "z01crew.com / resources",
      mockupNav: ["Discover", "Equipment", "Studios", "Crew", "Projects"],
      mockupTitle: "Discover production resources & crew",
      mockupTalent: [
        {
          initial: "C",
          avatarBg: "#8b5cf6",
          name: "Cinema Camera Package",
          role: "RED V-Raptor 8K + Cookes",
          statusColor: "#10b981",
          skills: ["8K Cinema", "Full Frame", "Anamorphic"]
        },
        {
          initial: "S",
          avatarBg: "#2563eb",
          name: "Soundstage Stage 01",
          role: "4,000 sq ft Cyclorama",
          statusColor: "#10b981",
          skills: ["Acoustic", "Drive-in", "Grid Power"]
        },
        {
          initial: "D",
          avatarBg: "#059669",
          name: "Director of Photography",
          role: "WICA / Guild Certified",
          statusColor: "#10b981",
          skills: ["Feature Film", "Steadicam", "Commercials"]
        },
        {
          initial: "G",
          avatarBg: "#ea580c",
          name: "Chief Lighting Technician",
          role: "Master Gaffer & Rigging",
          statusColor: "#9ca3af",
          skills: ["Aputure", "ARRI SkyPanels", "Generators"]
        }
      ]
    },
    statement: {
      bold: "Built for the way production works today.",
      muted: "Great production does not always require owning everything. Z01 Crew brings equipment, studio spaces, and skilled production professionals together, making it easier to access the resources you need for your next project."
    },
    storyHeader: {
      tag: "PRODUCT STORY",
      title: "From resources to production."
    },
    features: [
      {
        id: "discovery",
        tag: "01 / PROFESSIONAL EQUIPMENT RENTALS",
        title: "Get the gear your project needs.",
        description: "Access professional cameras, lighting, audio equipment, and other production gear for filmmaking, photography, content creation, and studio projects without the need to own everything yourself.",
        type: "ai-match",
        matchData: {
          topTag: "PRODUCTION EQUIPMENT RENTAL",
          reqLabel: "PROJECT GEAR SPECIFICATION",
          projectTitle: "Commercial Film Camera & Lighting Package",
          tags: ["RED Raptor 8K", "Cooke Anamorphics", "ARRI Skypanel Kit"],
          listLabel: "VERIFIED GEAR PACKAGES",
          candidates: [
            { initial: "R", bg: "#10b981", name: "RED V-Raptor 8K Cinema Package", badge: "Insured & Tested", badgeClass: "high" },
            { initial: "A", bg: "#3b82f6", name: "ARRI Master Grips & Skypanels", badge: "Ready for Pickup", badgeClass: "strong" },
            { initial: "S", bg: "#8b5cf6", name: "Sound Devices 833 Audio Bag", badge: "Available Now", badgeClass: "good" }
          ]
        }
      },
      {
        id: "networking",
        tag: "02 / STUDIO SPACE BOOKING",
        title: "Find the right space for your production.",
        description: "Discover and book studio environments designed for video shoots, photography sessions, creative campaigns, and professional production requirements.",
        type: "network-dark",
        networkData: {
          topTag: "STUDIO SPACE DISPATCH",
          initial: "Z",
          avatarBg: "#8b5cf6",
          name: "Stage 01 Infinity Cyclorama",
          role: "4,000 sq ft · Drive-in Access · Soundproofed",
          actionBtn: "Reserve Stage",
          feed: [
            { text: "Dimensions: 50ft x 80ft with 22ft ceiling clearance", time: "Grid Ready", dot: "#10b981" },
            { text: "Amenities: Makeup rooms, green rooms, production offices", time: "Included", dot: "#3b82f6" },
            { text: "High-voltage 3-phase power distribution on-site", time: "Powered", dot: "#8b5cf6" }
          ]
        }
      },
      {
        id: "opportunities",
        tag: "03 / SKILLED CREW ACCESS",
        title: "Build the right team for the job.",
        description: "Connect with experienced technicians, crew members, and production professionals who can support your project and help bring your creative vision to life.",
        type: "opportunities",
        oppTag: "CREW & TECHNICIAN HIRING",
        oppData: [
          {
            title: "Director of Photography (DP) — Feature Shoot",
            badge: "WICA Certified",
            badgeClass: "high",
            tags: ["Cinematography", "Lighting Design"],
            budget: "Crew Booking",
            label: "Role"
          },
          {
            title: "Location Sound Recordist & Boom Operator",
            badge: "Industry Veteran",
            badgeClass: "strong",
            tags: ["Multi-track", "RF Wireless", "Timecode"],
            budget: "Crew Booking",
            label: "Role"
          },
          {
            title: "Gaffer & Chief Lighting Electrician",
            badge: "Master Certified",
            badgeClass: "good",
            tags: ["High Voltage", "Console Control", "Rigging"],
            budget: "Crew Booking",
            label: "Role"
          }
        ]
      },
      {
        id: "presence",
        tag: "04 / PRODUCTION SUPPORT",
        title: "Bring every production resource together.",
        description: "Z01 Crew connects essential production resources through one centralized platform, helping creators and production teams simplify the process of finding equipment, spaces, and people.",
        type: "profile-card",
        profileData: {
          initial: "Z",
          avatarBg: "#8b5cf6",
          name: "Production Resource Dashboard",
          status: "Centralized Planning · Equipment, Spaces & Crew",
          tags: ["Cameras & Grip", "Soundstages", "Guild Technicians", "Unified Invoicing", "Instant Verification"],
          stats: [
            { value: "100%", label: "Verified Gear" },
            { value: "500+", label: "Skilled Crew" },
            { value: "All-in-One", label: "Ecosystem" }
          ]
        }
      }
    ],
    intelligence: {
      tag: "INTELLIGENCE",
      title: "Intelligence that connects production needs.",
      description: "Z01 Crew brings together project requirements, equipment, studio spaces, production professionals, and creative resources to make production planning and resource discovery simpler.",
      layers: [
        { name: "PROJECT NEEDS", color: "#3b82f6", detail: "Scope · Script breakdown · Technical requirements" },
        { name: "EQUIPMENT", color: "#8b5cf6", detail: "Cameras · Lenses · Lighting · Audio kits" },
        { name: "STUDIO", color: "#10b981", detail: "Soundstages · Cycloramas · Acoustic spaces" },
        { name: "CREW", color: "#a855f7", detail: "DPs · Sound mixers · Gaffers · Technicians" },
        { name: "PRODUCTION", color: "#f97316", detail: "Shoot execution · Logistics sync · Call sheets" },
        { name: "DELIVERY", color: "#10b981", detail: "Wrap · Asset return · Frictionless handover" }
      ]
    },
    gridFeatures: {
      tag: "FEATURES",
      title: "Everything you need to move production forward.",
      items: [
        { dotColor: "#8b5cf6", title: "01 — Professional Equipment Rental", desc: "Access cameras, lighting, audio gear, and other production equipment for creative and professional projects." },
        { dotColor: "#3b82f6", title: "02 — Studio Space Booking", desc: "Discover and book studio spaces for filmmaking, photography, content creation, and creative productions." },
        { dotColor: "#10b981", title: "03 — Crew & Technician Hiring", desc: "Connect with experienced crew members, technicians, and production professionals for your project." },
        { dotColor: "#f97316", title: "04 — Production Resource Discovery", desc: "Find essential production resources through one centralized platform instead of coordinating multiple vendors." },
        { dotColor: "#eab308", title: "05 — Flexible Production Access", desc: "Access professional-grade resources without the need to purchase and maintain every piece of equipment yourself." },
        { dotColor: "#ec4899", title: "06 — End-to-End Production Support", desc: "Bring equipment, spaces, crew, and production resources together to simplify project execution." }
      ]
    },
    bothSides: {
      tag: "BUILT FOR CREATORS & PRODUCTION TEAMS",
      title: "One platform for every production resource.",
      cards: [
        {
          tag: "FOR CREATORS & FILMMAKERS",
          title: "Get the resources behind your next idea.",
          description: "Discover professional equipment, studio spaces, and skilled production support without the overhead of owning every resource.",
          theme: "dark",
          bullets: [
            "Find production equipment",
            "Discover studio spaces",
            "Build your crew",
            "Access technical support",
            "Bring your ideas to life"
          ]
        },
        {
          tag: "FOR STUDIOS & PRODUCTION TEAMS",
          title: "Scale production without the extra overhead.",
          description: "Access the equipment, spaces, and skilled professionals needed to support productions of different sizes and requirements.",
          theme: "light",
          bullets: [
            "Source production equipment",
            "Find suitable studios",
            "Hire skilled crew",
            "Coordinate production resources",
            "Scale projects efficiently"
          ]
        }
      ]
    },
    closing: {
      title: "Production is changing.",
      subtitle: "The way we access it should too.",
      description: "Z01 Crew is designed for a production world where creators and teams can access the equipment, spaces, and people they need without being limited by ownership."
    },
    faqs: {
      tag: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Questions about Z01 Crew, production equipment, studio spaces, and crew access.",
      items: [
        {
          q: "What is Z01 Crew?",
          a: "Z01 Crew is a unified production resource platform that helps creators, filmmakers, and production teams access professional equipment, studio spaces, and skilled crew through one ecosystem."
        },
        {
          q: "What kind of equipment can I rent through Z01 Crew?",
          a: "Z01 Crew provides access to professional production equipment including cameras, lighting, audio gear, and other equipment used for photography, filmmaking, and content creation."
        },
        {
          q: "Can I book a studio through Z01 Crew?",
          a: "Yes. Z01 Crew includes studio space booking, allowing users to discover and reserve spaces for creative shoots, video production, photography, and professional projects."
        },
        {
          q: "Can Z01 Crew help me find production crew?",
          a: "Yes. The platform provides access to experienced technicians, crew members, and production professionals who can support different production requirements."
        },
        {
          q: "Who is Z01 Crew designed for?",
          a: "Z01 Crew is designed for filmmakers, content creators, photographers, studios, production teams, and event teams that need access to professional production resources."
        },
        {
          q: "Why use Z01 Crew instead of separate rental vendors?",
          a: "Z01 Crew brings equipment, studio booking, and crew access together through one centralized platform, reducing the need to coordinate multiple production resource providers separately."
        },
        {
          q: "Is Z01 Crew available now?",
          a: "Z01 Crew is currently listed as Coming Soon on Zuntra's product lineup."
        }
      ]
    },
    cta: {
      title: "Ready to bring your production together?",
      subtitle: "Find the gear. Book the space. Build the crew. Make it happen.",
      primaryBtnText: "EXPLORE Z01 CREW",
      primaryBtnLink: "#",
      secondaryBtnText: "TALK TO ZUNTRA",
      secondaryBtnLink: "#contact"
    },
    ecosystemGrid: {
      tag: "ZUNTRA ECOSYSTEM",
      title: "Z01 Crew is one of the products we're building.",
      subtitle: "Explore more from the Zuntra product ecosystem.",
      btnText: "VIEW ALL PRODUCTS",
      btnLink: "/products/huzzler"
    },
    newsletter: {
      title: "Stay close to what we're building.",
      subtitle: "Updates from Zuntra and the Z01 Crew product team."
    }
  },

  // =========================================================================
  // 5. MUNGO (Official Mungo Product Design & Data)
  // =========================================================================
  "mungo": {
    id: "mungo",
    name: "Mungo",
    bannerImages: [mungoImg1, mungoImg2, mungoImg3],
    hero: {
      titlePrimary: "Better pet care.",
      titleAccent: "All in one place.",
      subtitle: "An all-in-one pet care platform helping pet parents discover trusted services, connect with verified providers, access veterinary support, and shop for pet essentials through one seamless ecosystem.",
      primaryBtnText: "EXPLORE MUNGO",
      primaryBtnLink: "#product-story",
      secondaryBtnText: "VISIT MUNGO",
      secondaryBtnLink: "https://www.mungo.app/",
      browserUrl: "mungo.app / care",
      mockupNav: ["Discover", "Grooming", "Boarding", "Vets", "Shop"],
      mockupTitle: "Discover trusted pet care services",
      mockupTalent: [
        {
          initial: "P",
          avatarBg: "#10b981",
          name: "Paws & Fur Spa",
          role: "Certified Grooming & Bathing",
          statusColor: "#10b981",
          skills: ["Hydrobath", "Haircut", "Nail Care"]
        },
        {
          initial: "H",
          avatarBg: "#3b82f6",
          name: "Happy Tails Boarding",
          role: "Cage-free Resort & Daycare",
          statusColor: "#10b981",
          skills: ["24/7 Care", "Play Area", "Live Cam"]
        },
        {
          initial: "V",
          avatarBg: "#8b5cf6",
          name: "VetCare Animal Hospital",
          role: "Senior Veterinary Surgeon",
          statusColor: "#10b981",
          skills: ["Vaccinations", "Wellness", "Surgery"]
        },
        {
          initial: "C",
          avatarBg: "#f97316",
          name: "City Hound Walkers",
          role: "Certified Canine Exercisers",
          statusColor: "#9ca3af",
          skills: ["GPS Tracked", "Solo Walks", "Daily"]
        }
      ]
    },
    statement: {
      bold: "Built for the way modern pet parents care.",
      muted: "Pet care is more than feeding and grooming. It means finding the right services, trusted professionals, healthcare support, and everyday essentials. Mungo brings them together in one convenient platform, making pet care simpler to manage."
    },
    storyHeader: {
      tag: "PRODUCT STORY",
      title: "From everyday care to complete pet wellness."
    },
    features: [
      {
        id: "discovery",
        tag: "01 / PET GROOMING",
        title: "Keep every pet looking and feeling their best.",
        description: "Mungo connects pet parents with trusted grooming professionals for bathing, hair trimming, nail care, hygiene treatments, and complete grooming services designed around pet comfort.",
        type: "ai-match",
        matchData: {
          topTag: "VERIFIED GROOMING CARE",
          reqLabel: "PET PROFILE & GROOMING REQUEST",
          projectTitle: "Full Grooming Spa + De-shedding Treatment",
          tags: ["Golden Retriever", "Gentle Care", "At-Home or Salon"],
          listLabel: "AVAILABLE GROOMING EXPERTS",
          candidates: [
            { initial: "P", bg: "#10b981", name: "Paws & Fur Studio", badge: "★ 4.9 Top Rated", badgeClass: "high" },
            { initial: "B", bg: "#3b82f6", name: "Bark & Bath Mobile Van", badge: "Doorstep Service", badgeClass: "strong" },
            { initial: "F", bg: "#8b5cf6", name: "Fluffy Paws Salon", badge: "Certified Stylist", badgeClass: "good" }
          ]
        }
      },
      {
        id: "networking",
        tag: "02 / PET BOARDING & SITTING",
        title: "Trusted care when you can't be there.",
        description: "Find boarding facilities and pet sitting services that provide attentive care and comfortable environments for pets while their owners are travelling, working, or away.",
        type: "network-dark",
        networkData: {
          topTag: "TRUSTED PET BOARDING",
          initial: "M",
          avatarBg: "#10b981",
          name: "Happy Tails Resort & Stay",
          role: "Cage-free · 24/7 CCTV & Attendant",
          actionBtn: "Book Stay",
          feed: [
            { text: "Daily routine: Morning lawn play, nutritional meal, rest", time: "Attentive", dot: "#10b981" },
            { text: "Photo & video check-ins shared twice daily with pet parent", time: "Real-time", dot: "#3b82f6" },
            { text: "On-call veterinary access and emergency readiness", time: "Safe", dot: "#8b5cf6" }
          ]
        }
      },
      {
        id: "opportunities",
        tag: "03 / PET WALKING",
        title: "Keep their days active and happy.",
        description: "Mungo helps pet parents access trusted pet walking services, making it easier to maintain regular activity and care routines even when schedules get busy.",
        type: "opportunities",
        oppTag: "ACTIVE CARE & ROUTINES",
        oppData: [
          {
            title: "Daily Morning & Evening Dog Walking",
            badge: "GPS Tracked",
            badgeClass: "high",
            tags: ["Solo / Pack", "30-60 Mins", "Exercise"],
            budget: "Daily Care",
            label: "Service"
          },
          {
            title: "Weekend Adventure & Park Playgroups",
            badge: "Socialization",
            badgeClass: "strong",
            tags: ["Canine Agility", "Trainer Guided"],
            budget: "Weekend",
            label: "Service"
          },
          {
            title: "Puppy & Senior Dog Gentle Strolls",
            badge: "Paced Walk",
            badgeClass: "good",
            tags: ["Careful Handling", "Medication Support"],
            budget: "Special Care",
            label: "Service"
          }
        ]
      },
      {
        id: "presence",
        tag: "04 / VETERINARY & WELLNESS SUPPORT",
        title: "Better access to the care they need.",
        description: "Discover and connect with veterinary clinics for consultations, health checkups, treatments, and wellness support to help pets stay healthy and well cared for.",
        type: "profile-card",
        profileData: {
          initial: "M",
          avatarBg: "#10b981",
          name: "Pet Wellness & Health Record",
          status: "Connected Veterinary Network · Digital Records",
          tags: ["Vaccination Track", "Dental Checkup", "Nutrition Guide", "Annual Physical", "De-worming"],
          stats: [
            { value: "100%", label: "Verified Vets" },
            { value: "24/7", label: "Emergency Support" },
            { value: "All-in-One", label: "Pet Records" }
          ]
        }
      }
    ],
    intelligence: {
      tag: "INTELLIGENCE",
      title: "Intelligence that brings pet care together.",
      description: "Mungo brings together pet profiles, service needs, trusted providers, veterinary support, and pet products to create a more connected way for pet parents to manage everyday care.",
      layers: [
        { name: "PET NEEDS", color: "#10b981", detail: "Breed · Age · Health history · Temperament" },
        { name: "SERVICES", color: "#3b82f6", detail: "Grooming · Boarding · Walking · Sitting" },
        { name: "PROVIDERS", color: "#8b5cf6", detail: "Verified credentials · Ratings · Proximity" },
        { name: "HEALTHCARE", color: "#ec4899", detail: "Veterinary clinics · Tele-consults · Checkups" },
        { name: "PRODUCTS", color: "#f97316", detail: "Dietary food · Toys · Healthcare essentials" },
        { name: "PET WELLNESS", color: "#a855f7", detail: "Happy · Healthy · Thriving lifecycle" }
      ]
    },
    gridFeatures: {
      tag: "FEATURES",
      title: "Everything you need for better pet care.",
      items: [
        { dotColor: "#10b981", title: "01 — Trusted Pet Service Providers", desc: "Connect with verified grooming centers, pet sitters, walkers, and boarding facilities." },
        { dotColor: "#3b82f6", title: "02 — Pet Grooming Services", desc: "Discover professional grooming solutions including bathing, hair trimming, nail care, and hygiene treatments." },
        { dotColor: "#8b5cf6", title: "03 — Boarding & Pet Sitting", desc: "Find comfortable boarding facilities and trusted caregivers for pets when owners are away." },
        { dotColor: "#ec4899", title: "04 — Veterinary Support", desc: "Discover veterinary clinics for consultations, checkups, treatments, and pet wellness support." },
        { dotColor: "#f97316", title: "05 — Pet Products Marketplace", desc: "Explore pet food, accessories, toys, grooming essentials, and healthcare products in one place." },
        { dotColor: "#a855f7", title: "06 — All-in-One Pet Care", desc: "Manage multiple pet care needs through one connected digital ecosystem instead of switching between separate services." }
      ]
    },
    bothSides: {
      tag: "BUILT FOR EVERY PET CARE NEED",
      title: "One platform for every part of their journey.",
      cards: [
        {
          tag: "FOR PET PARENTS",
          title: "Make everyday pet care easier.",
          description: "Discover trusted services, healthcare support, and pet products in one place, giving pet parents a simpler way to manage their pets' everyday needs.",
          theme: "dark",
          bullets: [
            "Create your pet's care routine",
            "Discover trusted services",
            "Find veterinary support",
            "Shop pet essentials",
            "Manage everyday pet needs"
          ]
        },
        {
          tag: "FOR PET CARE PROVIDERS",
          title: "Bring your services closer to pet parents.",
          description: "Connect with pet owners looking for professional care and become part of a connected pet services ecosystem.",
          theme: "light",
          bullets: [
            "Showcase your services",
            "Connect with pet parents",
            "Offer professional care",
            "Build trusted relationships",
            "Grow your service presence"
          ]
        }
      ]
    },
    closing: {
      title: "Pet care is changing.",
      subtitle: "The way we manage it should too.",
      description: "Mungo is designed to simplify pet care by bringing grooming, boarding, walking, sitting, veterinary support, and pet products together through one connected digital platform."
    },
    faqs: {
      tag: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Questions about Mungo, pet services, veterinary support, and the pet care platform.",
      items: [
        {
          q: "What is Mungo?",
          a: "Mungo is an all-in-one digital pet care platform that helps pet owners access trusted services, connect with verified providers, find veterinary support, and shop for pet products through one ecosystem."
        },
        {
          q: "What services does Mungo offer?",
          a: "Mungo includes pet grooming, boarding, pet walking and sitting, veterinary support, and access to pet products such as food, accessories, toys, grooming essentials, and healthcare products."
        },
        {
          q: "Can I find pet grooming services through Mungo?",
          a: "Yes. Mungo connects pet owners with grooming professionals offering services such as bathing, hair trimming, nail care, hygiene treatments, and other grooming solutions."
        },
        {
          q: "Does Mungo provide veterinary support?",
          a: "Yes. Mungo provides access to veterinary clinics for consultations, health checkups, treatments, and pet wellness support."
        },
        {
          q: "Can I find boarding and pet sitting services?",
          a: "Yes. Mungo helps pet owners discover boarding facilities and pet sitting services for pets that need care while their owners are travelling or away."
        },
        {
          q: "Can I buy pet products through Mungo?",
          a: "Yes. Mungo includes a pet products marketplace where users can explore pet food, accessories, toys, grooming essentials, and healthcare products."
        },
        {
          q: "Is Mungo available now?",
          a: "Mungo is currently listed as Coming Soon on Zuntra's product page."
        }
      ]
    },
    cta: {
      title: "Ready to make pet care simpler?",
      subtitle: "Discover trusted services. Find better care. Give your pet everything they need.",
      primaryBtnText: "EXPLORE MUNGO",
      primaryBtnLink: "#",
      secondaryBtnText: "TALK TO ZUNTRA",
      secondaryBtnLink: "#contact"
    },
    ecosystemGrid: {
      tag: "ZUNTRA ECOSYSTEM",
      title: "Mungo is one of the products we're building.",
      subtitle: "Explore more from the Zuntra product ecosystem.",
      btnText: "VIEW ALL PRODUCTS",
      btnLink: "/products/huzzler"
    },
    newsletter: {
      title: "Stay close to what we're building.",
      subtitle: "Updates from Zuntra and the Mungo product team."
    }
  },

  // =========================================================================
  // 6. ZUCA (Official Zuca Product Design & Data)
  // =========================================================================
  "zuca": {
    id: "zuca",
    name: "Zuca",
    bannerImages: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=1200"
    ],
    hero: {
      titlePrimary: "Beauty care.",
      titleAccent: "Brought to you.",
      subtitle: "An on-demand beauty and grooming platform connecting you with certified professionals for personalized beauty services, easy appointment booking, and convenient care at home or in-salon.",
      primaryBtnText: "EXPLORE ZUCA",
      primaryBtnLink: "#product-story",
      secondaryBtnText: "VISIT ZUCA",
      secondaryBtnLink: "https://www.zucabooking.com/",
      browserUrl: "zucabooking.com / services",
      mockupNav: ["Discover", "At-Home", "In-Salon", "Specialists", "Bookings"],
      mockupTitle: "Discover certified beauty specialists",
      mockupTalent: [
        {
          initial: "A",
          avatarBg: "#ec4899",
          name: "Ananya Sen",
          role: "Master Hair Stylist & Colorist",
          statusColor: "#10b981",
          skills: ["Hair Care", "Styling", "Bridal"]
        },
        {
          initial: "R",
          avatarBg: "#8b5cf6",
          name: "Rhea Kapoor",
          role: "Certified Aesthetician & Skincare",
          statusColor: "#10b981",
          skills: ["Facials", "Skincare", "At-Home"]
        },
        {
          initial: "V",
          avatarBg: "#3b82f6",
          name: "Vikram Malhotra",
          role: "Men's Grooming Specialist",
          statusColor: "#10b981",
          skills: ["Beard Design", "Haircut", "Grooming"]
        },
        {
          initial: "S",
          avatarBg: "#f97316",
          name: "Sanya Mir",
          role: "Celebrity Makeup Artist",
          statusColor: "#9ca3af",
          skills: ["Editorial", "Party Makeup", "Occasion"]
        }
      ]
    },
    statement: {
      bold: "Built for the way beauty care should feel.",
      muted: "Beauty appointments should be convenient, reliable, and tailored to you. Zuca brings professional beauty and grooming services together in one seamless platform, making it easier to discover specialists, book appointments, and enjoy personalized care."
    },
    storyHeader: {
      tag: "PRODUCT STORY",
      title: "From discovery to beauty experience."
    },
    features: [
      {
        id: "discovery",
        tag: "01 / CERTIFIED BEAUTY PROFESSIONALS",
        title: "Find professionals you can trust.",
        description: "Zuca connects users with trained and verified beauty professionals offering professional beauty and grooming services for both men and women.",
        type: "ai-match",
        matchData: {
          topTag: "CERTIFIED EXPERTS",
          reqLabel: "SERVICE & APPOINTMENT REQUEST",
          projectTitle: "Signature Hydrating Facial & Hair Spa",
          tags: ["At-Home", "Verified Expert", "Organic Products"],
          listLabel: "AVAILABLE SPECIALISTS",
          candidates: [
            { initial: "R", bg: "#ec4899", name: "Rhea Kapoor", badge: "Top Rated ★ 4.9", badgeClass: "high" },
            { initial: "A", bg: "#8b5cf6", name: "Ananya Sen", badge: "Certified Pro", badgeClass: "strong" },
            { initial: "S", bg: "#3b82f6", name: "Sanya Mir", badge: "Available Today", badgeClass: "good" }
          ]
        }
      },
      {
        id: "networking",
        tag: "02 / EASY APPOINTMENT BOOKING",
        title: "Book your beauty appointment with ease.",
        description: "Discover professionals, select the service you need, and schedule an appointment through a simple and user-friendly booking experience.",
        type: "network-dark",
        networkData: {
          topTag: "INSTANT DIGITAL BOOKING",
          initial: "Z",
          avatarBg: "#ec4899",
          name: "Zuca Express Booking",
          role: "Instant Confirmation · Choose Time & Place",
          actionBtn: "Book Slot",
          feed: [
            { text: "Selected: Deep Cleansing Facial + Scalp Treatment", time: "At-Home", dot: "#ec4899" },
            { text: "Time Slot: Today, 3:30 PM — Confirmed with Rhea K.", time: "Scheduled", dot: "#10b981" },
            { text: "Sanitized kit & single-use consumables guaranteed", time: "Safety First", dot: "#3b82f6" }
          ]
        }
      },
      {
        id: "opportunities",
        tag: "03 / AT-HOME & IN-SALON SERVICES",
        title: "Beauty care, wherever you need it.",
        description: "Zuca brings professional beauty services closer to you with options designed for convenient at-home appointments as well as in-salon experiences.",
        type: "opportunities",
        oppTag: "FLEXIBLE SERVICE OPTIONS",
        oppData: [
          {
            title: "At-Home Pampering & Grooming Sessions",
            badge: "Doorstep Care",
            badgeClass: "high",
            tags: ["Home Comfort", "Full Setup", "Sanitized"],
            budget: "At-Home",
            label: "Mode"
          },
          {
            title: "Partner Premium Salon Appointments",
            badge: "Express Priority",
            badgeClass: "strong",
            tags: ["Luxury Ambience", "Hair Color", "Spa"],
            budget: "In-Salon",
            label: "Mode"
          },
          {
            title: "Bridal & Occasion Full Makeup Packages",
            badge: "Custom Itinerary",
            badgeClass: "good",
            tags: ["Trial Included", "Styling", "Group"],
            budget: "Event / Studio",
            label: "Mode"
          }
        ]
      },
      {
        id: "presence",
        tag: "04 / PERSONALIZED BEAUTY & GROOMING",
        title: "Make your beauty routine your own.",
        description: "From makeup and hairstyling to skincare and grooming, Zuca helps users access services tailored to their individual preferences, routines, and needs.",
        type: "profile-card",
        profileData: {
          initial: "Z",
          avatarBg: "#ec4899",
          name: "Personalized Beauty Profile",
          status: "Custom Routine · Tailored to Skin & Hair Type",
          tags: ["Sensitive Skin Care", "Keratin Care", "Clean Beauty", "Precision Beard", "Organic"],
          stats: [
            { value: "100%", label: "Certified Pros" },
            { value: "4.9★", label: "Client Rating" },
            { value: "Both", label: "Home & Salon" }
          ]
        }
      }
    ],
    intelligence: {
      tag: "INTELLIGENCE",
      title: "Intelligence that makes beauty booking simpler.",
      description: "Zuca brings together user preferences, service requirements, professional expertise, appointment availability, and service options to create a smoother beauty and grooming booking experience.",
      layers: [
        { name: "PREFERENCES", color: "#ec4899", detail: "Skin/hair type · Service category · Location" },
        { name: "SERVICES", color: "#8b5cf6", detail: "At-home or in-salon · Service duration · Custom add-ons" },
        { name: "PROFESSIONALS", color: "#3b82f6", detail: "Verified credentials · Client ratings · Specializations" },
        { name: "AVAILABILITY", color: "#10b981", detail: "Real-time calendar · Instant confirmation" },
        { name: "BOOKING", color: "#f97316", detail: "Transparent pricing · Zero hidden fees" },
        { name: "EXPERIENCE", color: "#a855f7", detail: "Personalized care · Hygienic kit · Follow-up" }
      ]
    },
    gridFeatures: {
      tag: "FEATURES",
      title: "Everything you need for your beauty routine.",
      items: [
        { dotColor: "#ec4899", title: "01 — Certified Beauty Professionals", desc: "Connect with trained and verified beauty experts offering professional services for men and women." },
        { dotColor: "#8b5cf6", title: "02 — Smart Appointment Booking", desc: "Discover services, choose professionals, and schedule appointments through a simple digital booking experience." },
        { dotColor: "#3b82f6", title: "03 — At-Home Beauty Services", desc: "Enjoy professional beauty and grooming services from the comfort and convenience of your home." },
        { dotColor: "#10b981", title: "04 — In-Salon Services", desc: "Discover beauty professionals and services for customers who prefer an in-salon experience." },
        { dotColor: "#f97316", title: "05 — Personalized Grooming", desc: "Access beauty, wellness, and grooming services based on your individual preferences and requirements." },
        { dotColor: "#a855f7", title: "06 — Diverse Beauty Services", desc: "Explore services including makeup, hairstyling, skincare, beauty treatments, and professional grooming." }
      ]
    },
    bothSides: {
      tag: "BUILT FOR EVERY BEAUTY NEED",
      title: "One platform for your beauty experience.",
      cards: [
        {
          tag: "FOR BEAUTY & GROOMING CUSTOMERS",
          title: "Find care that fits your routine.",
          description: "Discover certified professionals and beauty services that match your preferences, whether you want professional care at home or an in-salon appointment.",
          theme: "dark",
          bullets: [
            "Discover beauty services",
            "Find certified professionals",
            "Choose your preferred service",
            "Book appointments",
            "Enjoy personalized care"
          ]
        },
        {
          tag: "FOR BEAUTY PROFESSIONALS",
          title: "Bring your expertise closer to customers.",
          description: "Connect with customers looking for professional beauty and grooming services and deliver your expertise through a convenient booking ecosystem.",
          theme: "light",
          bullets: [
            "Showcase your services",
            "Connect with customers",
            "Manage appointments",
            "Deliver professional care",
            "Build your service presence"
          ]
        }
      ]
    },
    closing: {
      title: "Beauty care is changing.",
      subtitle: "The way we experience it should too.",
      description: "Zuca is designed to make beauty and grooming more convenient by connecting customers with certified professionals through seamless booking, personalized services, and flexible at-home and in-salon experiences."
    },
    faqs: {
      tag: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Questions about Zuca, beauty services, professionals, and appointment booking.",
      items: [
        {
          q: "What is Zuca?",
          a: "Zuca is an on-demand beauty and grooming platform that connects users with certified professionals for personalized beauty services delivered through convenient booking options."
        },
        {
          q: "What services does Zuca offer?",
          a: "Zuca supports a range of beauty and grooming services, including makeup, hairstyling, skincare, beauty treatments, and professional grooming for both men and women."
        },
        {
          q: "Are Zuca professionals certified?",
          a: "Yes. Zuca connects users with trained and verified beauty professionals, helping create a more reliable professional service experience."
        },
        {
          q: "How does booking work on Zuca?",
          a: "Users can discover professionals, select the beauty or grooming service they need, and schedule an appointment through Zuca's digital booking experience."
        },
        {
          q: "Does Zuca offer at-home beauty services?",
          a: "Yes. Zuca is designed to provide professional beauty and grooming services at home, while Zuntra also describes the platform as supporting both at-home and in-salon services."
        },
        {
          q: "Is Zuca available for men and women?",
          a: "Yes. Zuca provides beauty and grooming services for both men and women, with services tailored to individual preferences and needs."
        },
        {
          q: "Is Zuca available now?",
          a: "Zuca is currently listed as Coming Soon on Zuntra's product page."
        }
      ]
    },
    cta: {
      title: "Ready for a better beauty experience?",
      subtitle: "Discover professionals. Book your service. Enjoy beauty care your way.",
      primaryBtnText: "EXPLORE ZUCA",
      primaryBtnLink: "#",
      secondaryBtnText: "TALK TO ZUNTRA",
      secondaryBtnLink: "#contact"
    },
    ecosystemGrid: {
      tag: "ZUNTRA ECOSYSTEM",
      title: "Zuca is one of the products we're building.",
      subtitle: "Explore more from the Zuntra product ecosystem.",
      btnText: "VIEW ALL PRODUCTS",
      btnLink: "/products/huzzler"
    },
    newsletter: {
      title: "Stay close to what we're building.",
      subtitle: "Updates from Zuntra and the Zuca product team."
    }
  }
};
