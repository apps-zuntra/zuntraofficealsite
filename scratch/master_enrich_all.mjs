import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/buildData.js');
const moduleUrl = 'file:///' + filePath.replace(/\\/g, '/');
const { buildData } = await import(moduleUrl);

// 1. Top Section Enhancements (Hero, Capability, Connected, Complexity, What We Build)
const topEnhancements = {
  "growth-marketing-tech": {
    eyebrowPill: "Growth & Marketing Tech",
    heroTitle: "Technology that turns marketing into measurable growth.",
    heroSubtitle: "Modern marketing needs more than campaigns. It needs connected customer data, intelligent engagement, measurable journeys, and technology that moves prospects from discovery to conversion.",
    heroButtons: [
      { text: "Explore Growth & Marketing Tech", type: "primary" },
      { text: "Let's talk", type: "outline" }
    ],
    floatingCards: [
      {
        category: "Customer intelligence",
        title: "One connected view",
        type: "sparkline",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Personalization",
        title: "Relevant by design",
        type: "donut",
        color: "blue",
        dotPosition: "bottom"
      },
      {
        category: "Marketing automation",
        title: "Journeys connected",
        type: "sparkline",
        color: "purple",
        dotPosition: "left"
      },
      {
        category: "Growth analytics",
        title: "Every signal, in context",
        type: "bar",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Digital commerce",
        title: "From discovery to conversion",
        type: "sparkline",
        color: "teal",
        dotPosition: "left"
      }
    ],
    capabilityStrip: [
      { icon: "user", title: "Customer Data & Intelligence" },
      { icon: "workflow", title: "Marketing & Sales Systems" },
      { icon: "commerce", title: "Digital Experiences & Commerce" },
      { icon: "analytics", title: "Growth, Analytics & Engagement" }
    ],
    connectedGrowth: {
      eyebrow: "Connected growth",
      titleBold: "Marketing is connected.",
      titleLight: "Your technology should be too.",
      desc: "Zuntra brings together CRM, marketing automation, customer data, e-commerce, SEO, analytics, conversational AI, loyalty, and MarTech systems to build growth infrastructure around your business."
    },
    complexity: {
      title: "Designed around real marketing complexity.",
      desc: "Marketing doesn't fail from lack of tools—it fails when systems don't talk to each other. Disconnected data, generic messaging, lost attribution, and manual work slow teams down. Zuntra builds the connections between customer data, marketing execution, and revenue measurement."
    },
    whatWeBuild: {
      eyebrow: "What we build",
      titleBold: "From customer data",
      titleLight: "to measurable growth.",
      cards: [
        {
          num: "01",
          category: "Marketing automation",
          title: "Turn customer journeys into intelligent workflows.",
          desc: "Connect CRM, lead scoring, segmentation, nurturing, and campaign workflows around the way your sales process actually works.",
          mockupType: "workflow",
          link: "/build/growth-marketing-tech/marketing-automation-crm-platforms"
        },
        {
          num: "02",
          category: "Customer intelligence",
          title: "Build one connected view of your customers.",
          desc: "Unify customer data across touchpoints and use it to create more relevant, personalized experiences.",
          mockupType: "profile",
          link: "/build/growth-marketing-tech/customer-data-platforms-personalization-engines"
        },
        {
          num: "03",
          category: "Digital commerce",
          title: "Build digital experiences designed to convert.",
          desc: "Create and optimize e-commerce platforms, customer journeys, checkout experiences, and product interactions.",
          mockupType: "commerce",
          link: "/build/growth-marketing-tech/e-commerce-platform-development-optimization"
        },
        {
          num: "04",
          category: "Search & content",
          title: "Make your brand easier to discover.",
          desc: "Build SEO and AEO strategies that help content perform across traditional search and AI-driven answer engines.",
          mockupType: "search",
          link: "/build/growth-marketing-tech/seo-aeo-strategy-content-engineering"
        }
      ],
      featuredCard: {
        num: "05",
        category: "Growth analytics",
        title: "Understand what actually drives results.",
        desc: "Connect customer journeys, attribution, marketing performance, and ROI into measurable growth intelligence.",
        mockupType: "attribution",
        link: "/build/growth-marketing-tech/marketing-analytics-attribution-modeling"
      }
    }
  },

  "ai-software-automation": {
    eyebrowPill: "AI Software & Automation",
    heroTitle: "Technology that turns intelligence into operational execution.",
    heroSubtitle: "Modern business needs more than AI demos. It needs purposeful AI agents, intelligent workflow automation, integrated models, and autonomous systems that execute tasks reliably.",
    heroButtons: [
      { text: "Explore AI Software & Automation", type: "primary" },
      { text: "Let's talk", type: "outline" }
    ],
    floatingCards: [
      {
        category: "Autonomous execution",
        title: "Multi-agent workflows",
        type: "sparkline",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Process automation",
        title: "Rules to intelligence",
        type: "donut",
        color: "blue",
        dotPosition: "bottom"
      },
      {
        category: "MLOps infrastructure",
        title: "Models in production",
        type: "sparkline",
        color: "purple",
        dotPosition: "left"
      },
      {
        category: "Document intelligence",
        title: "Unstructured to insight",
        type: "bar",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Conversational AI",
        title: "Intent-driven agents",
        type: "sparkline",
        color: "teal",
        dotPosition: "left"
      }
    ],
    capabilityStrip: [
      { icon: "agent", title: "AI Agents & Decision Systems" },
      { icon: "automation", title: "RPA & Process Automation" },
      { icon: "mlops", title: "MLOps & Model Deployment" },
      { icon: "document", title: "NLP & Document Intelligence" }
    ],
    connectedGrowth: {
      eyebrow: "Connected intelligence",
      titleBold: "AI is transformative.",
      titleLight: "Your systems should make it operational.",
      desc: "Zuntra brings together custom AI agents, RPA, MLOps pipelines, conversational AI, document intelligence, and enterprise integrations to build scalable intelligence across your operations."
    },
    complexity: {
      title: "Designed around real operational complexity.",
      desc: "AI value does not come from isolated prompts. Organizations need connected data pipelines, business logic guardrails, automated workflows, and auditable agents that work in sync. Zuntra connects these layers through purpose-built agents, secure model serving, and process automation designed around human-in-the-loop workflows."
    },
    whatWeBuild: {
      eyebrow: "What we build",
      titleBold: "From raw data",
      titleLight: "to autonomous execution.",
      cards: [
        {
          num: "01",
          category: "AI agents",
          title: "Turn operational tasks into autonomous workflows.",
          desc: "Build single-purpose and orchestrated AI agents that execute complex multi-step workflows with real memory, tool integrations, and safety guardrails.",
          mockupType: "ai-agent",
          link: "/build/ai-software-automation/custom-ai-agent-development"
        },
        {
          num: "02",
          category: "Process automation",
          title: "Automate repetitive enterprise workflows.",
          desc: "Combine RPA with business process management to connect systems, orchestrate approvals, and handle exceptions cleanly across your organization.",
          mockupType: "rpa-workflow",
          link: "/build/ai-software-automation/rpa-workflow-automation-bpm"
        },
        {
          num: "03",
          category: "MLOps & integration",
          title: "Bring AI models safely into production.",
          desc: "Deploy, monitor, and retrain machine learning models with robust MLOps infrastructure, automated drift detection, and reliable serving pipelines.",
          mockupType: "mlops-pipeline",
          link: "/build/ai-software-automation/ai-model-integration-mlops"
        },
        {
          num: "04",
          category: "Document intelligence",
          title: "Extract structured insight from unstructured data.",
          desc: "Build NLP and document intelligence pipelines that understand complex files, extract critical entities, and route actionable information instantly.",
          mockupType: "doc-intel",
          link: "/build/ai-software-automation/nlp-document-intelligence"
        }
      ],
      featuredCard: {
        num: "05",
        category: "Operational analytics",
        title: "Understand what drives automated efficiency.",
        desc: "Connect agent workflows, process throughput, error reduction, and operational metrics into measurable operational intelligence.",
        mockupType: "attribution",
        link: "/build/ai-software-automation/ai-powered-bi-analytics-dashboards"
      }
    }
  },

  "product-engineering": {
    eyebrowPill: "Product Engineering",
    heroTitle: "Engineering that turns ideas into resilient digital products.",
    heroSubtitle: "Modern digital products require more than clean code. They need scalable architecture, intuitive design systems, robust APIs, and disciplined engineering that scales from launch to millions of users.",
    heroButtons: [
      { text: "Explore Product Engineering", type: "primary" },
      { text: "Let's talk", type: "outline" }
    ],
    floatingCards: [
      {
        category: "SaaS architecture",
        title: "Multi-tenant scale",
        type: "sparkline",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Design systems",
        title: "Consistent by design",
        type: "donut",
        color: "blue",
        dotPosition: "bottom"
      },
      {
        category: "Mobile platforms",
        title: "Native performance",
        type: "sparkline",
        color: "purple",
        dotPosition: "left"
      },
      {
        category: "API gateways",
        title: "High-throughput flow",
        type: "bar",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "DevOps & QA",
        title: "Zero-downtime deploys",
        type: "sparkline",
        color: "teal",
        dotPosition: "left"
      }
    ],
    capabilityStrip: [
      { icon: "saas", title: "Custom SaaS & Web Platforms" },
      { icon: "design", title: "UI/UX & Design Systems" },
      { icon: "mobile", title: "Native & Mobile Engineering" },
      { icon: "api", title: "Cloud APIs & Microservices" }
    ],
    connectedGrowth: {
      eyebrow: "Engineered for scale",
      titleBold: "Software is foundational.",
      titleLight: "Your architecture should be built to last.",
      desc: "Zuntra brings together full-stack engineering, modern cloud architecture, intuitive UX design, secure API ecosystems, and DevOps pipelines to build high-performance products that drive business value."
    },
    complexity: {
      title: "Designed around real product complexity.",
      desc: "Great digital products don't happen by accident. They require balancing user expectations, technical debt, security compliance, multi-platform consistency, and architectural scalability. Zuntra builds software foundations that adapt to market shifts while maintaining rock-solid stability."
    },
    whatWeBuild: {
      eyebrow: "What we build",
      titleBold: "From initial concept",
      titleLight: "to scalable platforms.",
      cards: [
        {
          num: "01",
          category: "SaaS development",
          title: "Build resilient, multi-tenant cloud platforms.",
          desc: "Architect and develop modern web applications engineered for security, high availability, and effortless user onboarding across global regions.",
          mockupType: "saas-arch",
          link: "/build/product-engineering/custom-saas-product-development"
        },
        {
          num: "02",
          category: "Design systems & UI/UX",
          title: "Design consistent, human-centered interfaces.",
          desc: "Create cohesive design systems and frictionless user journeys that make complex workflows feel natural, responsive, and delightful.",
          mockupType: "design-system",
          link: "/build/product-engineering/ui-ux-design-product-design-systems"
        },
        {
          num: "03",
          category: "Mobile engineering",
          title: "Deliver high-performance cross-platform apps.",
          desc: "Develop fluid native and cross-platform applications for iOS and Android with offline-first capabilities and responsive touch experiences.",
          mockupType: "mobile-app",
          link: "/build/product-engineering/mobile-app-development"
        },
        {
          num: "04",
          category: "API & integration",
          title: "Connect services with high-throughput APIs.",
          desc: "Design RESTful and GraphQL APIs, integrate third-party platforms, and modernize legacy services without disruption to active operations.",
          mockupType: "api-gateway",
          link: "/build/product-engineering/api-development-third-party-integration"
        }
      ],
      featuredCard: {
        num: "05",
        category: "Product analytics",
        title: "Understand what drives user engagement.",
        desc: "Connect user cohorts, feature retention, conversion funnels, and performance telemetry into actionable product intelligence.",
        mockupType: "attribution",
        link: "/build/product-engineering/legacy-system-modernization"
      }
    }
  },

  "cloud-data": {
    eyebrowPill: "Cloud & Data",
    heroTitle: "Infrastructure that turns complex data into strategic velocity.",
    heroSubtitle: "Modern enterprises need more than storage. They need resilient cloud infrastructure, real-time data pipelines, enterprise-grade governance, and security foundations built for modern scale.",
    heroButtons: [
      { text: "Explore Cloud & Data", type: "primary" },
      { text: "Let's talk", type: "outline" }
    ],
    floatingCards: [
      {
        category: "Cloud architecture",
        title: "99.99% uptime target",
        type: "sparkline",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Streaming pipelines",
        title: "Sub-second latency",
        type: "donut",
        color: "blue",
        dotPosition: "bottom"
      },
      {
        category: "Data governance",
        title: "Auditable lineage",
        type: "sparkline",
        color: "purple",
        dotPosition: "left"
      },
      {
        category: "Cybersecurity",
        title: "Zero-trust posture",
        type: "bar",
        color: "blue",
        dotPosition: "right"
      },
      {
        category: "Modern warehouse",
        title: "Instant query execution",
        type: "sparkline",
        color: "teal",
        dotPosition: "left"
      }
    ],
    capabilityStrip: [
      { icon: "cloud", title: "Cloud Architecture & Migration" },
      { icon: "pipeline", title: "Real-Time Data Pipelines" },
      { icon: "warehouse", title: "Data Warehousing & Governance" },
      { icon: "security", title: "Cybersecurity & DevSecOps" }
    ],
    connectedGrowth: {
      eyebrow: "Data & cloud foundations",
      titleBold: "Infrastructure is critical.",
      titleLight: "Your data foundation should empower growth.",
      desc: "Zuntra brings together AWS, GCP, Azure, Snowflake, automated ETL/ELT pipelines, real-time streaming, and enterprise governance to transform disparate data into reliable intelligence."
    },
    complexity: {
      title: "Designed around real infrastructure complexity.",
      desc: "Data volume and velocity challenge every modern enterprise. Fragmented silos, compliance mandates, latency bottlenecks, and rising cloud costs demand disciplined architecture. Zuntra designs high-availability cloud platforms and clean data pipelines that ensure security, compliance, and instant accessibility."
    },
    whatWeBuild: {
      eyebrow: "What we build",
      titleBold: "From fragmented infrastructure",
      titleLight: "to reliable data intelligence.",
      cards: [
        {
          num: "01",
          category: "Cloud migration",
          title: "Migrate and modernize resilient cloud systems.",
          desc: "Transition legacy on-prem infrastructure to multi-cloud environments with zero downtime and automated cost optimization.",
          mockupType: "cloud-infra",
          link: "/build/cloud-data/cloud-migration-infrastructure-setup"
        },
        {
          num: "02",
          category: "Data engineering",
          title: "Build real-time ETL and event-driven pipelines.",
          desc: "Construct robust streaming and batch pipelines that ingest, transform, and deliver clean data to downstream analytics consumers.",
          mockupType: "data-pipeline",
          link: "/build/cloud-data/data-engineering-pipeline-architecture"
        },
        {
          num: "03",
          category: "Data warehousing",
          title: "Unify enterprise analytics in a trusted warehouse.",
          desc: "Centralize disparate datasets into Snowflake or BigQuery with role-based access, lineage tracking, and strict governance policies.",
          mockupType: "warehouse-schema",
          link: "/build/cloud-data/enterprise-data-warehousing-governance"
        },
        {
          num: "04",
          category: "Security & compliance",
          title: "Harden infrastructure with zero-trust security.",
          desc: "Implement automated compliance policies, vulnerability scanning, CI/CD security gates, and SOC2/HIPAA audit trails.",
          mockupType: "security-shield",
          link: "/build/cloud-data/cybersecurity-compliance-advisory"
        }
      ],
      featuredCard: {
        num: "05",
        category: "Cloud telemetry",
        title: "Understand what drives infrastructure reliability.",
        desc: "Connect cluster performance, pipeline latency, security posture, and FinOps costs into actionable operational intelligence.",
        mockupType: "attribution",
        link: "/build/cloud-data/digital-transformation-strategy-roadmapping"
      }
    }
  }
};

// 2. Mid Section Enhancements (Workflow, Use Cases, Philosophy, Impact, Architecture)
const midEnhancements = {
  'growth-marketing-tech': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From customer signal ",
      titleLight: "to measurable growth.",
      steps: [
        { num: "01", title: "Understand the Audience", subtitle: "Customer & Market", headline: "Audience signals", summary: "Bring customer behavior and market context into one view.", shortLabel: "Audience" },
        { num: "02", title: "Connect the Data", subtitle: "Profiles & Platforms", headline: "Unified data layer", summary: "Unify customer touchpoints across web, CRM, and commerce into single source of truth.", shortLabel: "Data" },
        { num: "03", title: "Design the Journey", subtitle: "Experience & Engagement", headline: "Journey orchestration", summary: "Map dynamic customer pathways that adapt based on real-time behavior and lifecycle stage.", shortLabel: "Journey" },
        { num: "04", title: "Activate the System", subtitle: "Marketing & Sales", headline: "Multi-channel activation", summary: "Trigger personalized messaging, programmatic ads, and CRM sync seamlessly.", shortLabel: "Activate" },
        { num: "05", title: "Measure the Outcome", subtitle: "Analytics & Attribution", headline: "Attribution & ROI modeling", summary: "Connect cross-channel campaigns to pipeline conversion and bottom-line revenue.", shortLabel: "Measure" },
        { num: "06", title: "Optimize & Grow", subtitle: "Continuous Improvement", headline: "Continuous loop optimization", summary: "Iterate machine learning rules, audience segments, and content models over time.", shortLabel: "Grow" }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "Growth technology built for ",
      titleLight: "real marketing challenges.",
      items: [
        { id: "01", title: "Marketing Automation & CRM Platforms", desc: "Connect CRM systems and marketing automation to manage lead nurturing, lead scoring, customer segmentation, pipeline tracking, and campaign performance.", mockupType: "workflow", slug: "marketing-automation-crm-platforms" },
        { id: "02", title: "Customer Data Platforms & Personalization Engines", desc: "Unify customer information across touchpoints and build personalization engines that use a more complete view of customer behavior.", mockupType: "profile", slug: "customer-data-platforms-personalization-engines" },
        { id: "03", title: "E-Commerce Platform Development & Optimization", desc: "Build and optimize e-commerce experiences through storefront development, platform migration, checkout optimization, payment integration, and conversion rate.", mockupType: "commerce", slug: "e-commerce-platform-development-optimization" },
        { id: "04", title: "SEO/AEO Strategy & Content Engineering", desc: "Develop search and content strategies designed for both traditional search engines and AI answer engines through technical SEO, content architecture, keyword research, and AEO.", mockupType: "search", slug: "seo-aeo-strategy-content-engineering" },
        { id: "05", title: "Marketing Analytics & Attribution Modeling", desc: "Connect customer journeys and marketing channels through attribution models, performance dashboards, ROI measurement, and cross-channel analytics.", mockupType: "attribution", slug: "marketing-analytics-attribution-modeling" },
        { id: "06", title: "Conversational Commerce & AI-Driven Lead Qualification", desc: "Engage prospects in real time through conversational interfaces, AI-driven qualification, lead scoring, CRM integration, and multi-channel deployment.", mockupType: "chat-lead", slug: "conversational-commerce-ai-driven-lead-qualification" },
        { id: "07", title: "Loyalty & Retention Platform Development", desc: "Build loyalty programs, referral systems, membership tiers, rewards infrastructure, retention analytics, and churn prediction capabilities.", mockupType: "lifecycle", slug: "loyalty-retention-platform-development" },
        { id: "08", title: "Marketing Tech Stack Audits & Consolidation", desc: "Audit your existing MarTech stack, identify redundancy and integration gaps, evaluate vendors, and plan technology consolidation around a leaner setup.", mockupType: "stack", slug: "marketing-tech-stack-audits-consolidation" },
        { id: "09", title: "Influencer & Affiliate Program Tooling", desc: "Build systems for partner tracking, referral attribution, commission management, partner dashboards, automated payouts, and referral fraud detection.", mockupType: "partners", slug: "influencer-affiliate-program-tooling" }
      ]
    },
    philosophyData: {
      eyebrow: "Human + technology",
      titleBold: "Technology should make marketing ",
      titleLight: "more human.",
      paragraphs: [
        "The best marketing technology does not replace customer relationships. It gives teams better context, better timing, and better tools to create meaningful interactions.",
        "Zuntra combines marketing technology, customer data, automation, analytics, and digital experiences to help businesses build stronger connections throughout the customer journey."
      ],
      tags: ["Context", "Timing", "Connection"]
    },
    impactData: {
      eyebrow: "Built to make an impact",
      titleBold: "Growth systems designed around ",
      titleLight: "measurable outcomes.",
      items: [
        { icon: "connected", title: "Connected", desc: "Customer, marketing, and sales data working together." },
        { icon: "personalized", title: "Personalized", desc: "Experiences shaped around real customer context." },
        { icon: "measurable", title: "Measurable", desc: "Marketing performance connected to meaningful outcomes." },
        { icon: "scalable", title: "Scalable", desc: "Technology built to support growing audiences and operations." }
      ]
    },
    architectureCore: {
      eyebrow: "Architecture",
      title: "Growth intelligence at the core.",
      topNodes: [
        { title: "Customers", desc: "Profiles · Behavior · Journeys" },
        { title: "Data", desc: "CDP · Segmentation · Personalization" },
        { title: "Marketing", desc: "CRM · Automation · Campaigns" }
      ],
      coreNode: { title: "Growth intelligence", desc: "One connected system" },
      bottomNodes: [
        { title: "Experience", desc: "Web · Commerce · Conversational" },
        { title: "Analytics", desc: "Attribution · Performance · ROI" },
        { title: "Growth", desc: "Conversion · Retention · Expansion" }
      ]
    },
    emergingTechData: {
      eyebrow: "Emerging technology",
      titleBold: "Built for what marketing ",
      titleLight: "becomes next.",
      items: [
        { icon: "branch", title: "AI-Driven Marketing", desc: "Intelligent systems for customer engagement." },
        { icon: "user", title: "Customer Data Platforms", desc: "Unified customer intelligence across touchpoints." },
        { icon: "chat", title: "Conversational Commerce", desc: "Real-time engagement and AI-driven qualification." },
        { icon: "search", title: "AI Answer Engine Optimization", desc: "Content designed for emerging AI search experiences." },
        { icon: "trend", title: "Predictive Analytics", desc: "Identify patterns across customer and marketing data." },
        { icon: "grid", title: "Personalization Engines", desc: "Deliver relevant experiences using unified customer profiles." },
        { icon: "trend", title: "Marketing Intelligence", desc: "Connect campaigns to measurable business outcomes." },
        { icon: "cart", title: "Digital Commerce", desc: "Build experiences around changing customer expectations." }
      ]
    },
    faqs: [
      { q: "What does Zuntra's Growth & Marketing Tech service include?", a: "We engineer complete growth platforms, covering marketing automation, CDP integrations, e-commerce optimization, SEO/AEO engineering, attribution modeling, and conversational qualification tools." },
      { q: "Can Zuntra integrate our existing CRM and marketing tools?", a: "Yes. We connect and harmonize HubSpot, Salesforce, Klaviyo, custom CRMs, data warehouses, and e-commerce platforms into a single synchronized data layer." },
      { q: "What is the difference between a CRM and a Customer Data Platform?", a: "A CRM primarily tracks direct sales interactions and customer relationship stages, while a Customer Data Platform (CDP) aggregates raw event-level behavioral data across all touchpoints (web, apps, ads, offline) to enable real-time audience segmentation." },
      { q: "Can Zuntra personalize customer experiences?", a: "Yes. We build dynamic personalization engines that adapt storefront content, messaging, and recommendation logic based on real-time customer behavior, segments, and lifecycle stage." },
      { q: "Does Zuntra provide SEO and AEO services?", a: "Yes. We architect content structures, technical schemas, and knowledge graphs engineered for traditional search engines as well as generative AI answer engines like Perplexity, ChatGPT, and Google Gemini." },
      { q: "Can Zuntra improve an existing e-commerce platform?", a: "Yes. We optimize headless storefronts, checkout flow latency, payment gateway routing, and conversion funnels to dramatically reduce cart abandonment." },
      { q: "Can Zuntra help us understand which marketing channels drive conversions?", a: "Yes. We build custom multi-touch attribution models and unified ROI dashboards that connect spend to closed-loop pipeline revenue across all touchpoints." },
      { q: "Can AI qualify leads automatically?", a: "Yes. We implement conversational AI qualification that engages incoming visitors, scores lead intent, and automatically books sales meetings or routes context directly into your CRM." },
      { q: "Can Zuntra help consolidate our MarTech stack?", a: "Yes. We audit your existing software subscriptions, eliminate redundant tooling, plug data silos, and engineer a streamlined, lower-cost technology stack." }
    ],
    cta: {
      titleLine1: "Have something",
      titleLine2: "worth growing?",
      subtitle: "Let's build the technology behind your next stage of growth.",
      buttons: [
        { text: "Let's talk", type: "primary" },
        { text: "Explore Zuntra", type: "outline" }
      ]
    }
  },

  'ai-software-automation': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From operational complexity ",
      titleLight: "to autonomous execution.",
      steps: [
        { num: "01", title: "Identify & Audit", subtitle: "Process Mapping", headline: "Operational audit", summary: "Identify high-volume decision bottlenecks and routine workflows ready for AI.", shortLabel: "Audit" },
        { num: "02", title: "Model Architecture", subtitle: "Context & Memory", headline: "Agent reasoning design", summary: "Design domain-specific agents with guardrails, memory persistence, and tool access.", shortLabel: "Reasoning" },
        { num: "03", title: "Integrate & Connect", subtitle: "APIs & Databases", headline: "Deep system connectivity", summary: "Integrate AI workflows with enterprise ERP, CRM, document stores, and legacy software.", shortLabel: "Connect" },
        { num: "04", title: "Orchestrate Execution", subtitle: "BPM & Multi-Agent", headline: "Autonomous execution", summary: "Coordinate multi-agent swarms with strict policy adherence and human-in-the-loop fallback.", shortLabel: "Execute" },
        { num: "05", title: "Monitor & Guardrail", subtitle: "MLOps & Evaluation", headline: "Real-time safety checks", summary: "Continuously detect drift, latency outliers, and enforce safety guardrails.", shortLabel: "Monitor" },
        { num: "06", title: "Scale & Automate", subtitle: "Self-Improving Loops", headline: "Compounding efficiency", summary: "Retrain models and expand agent capability boundaries as operations evolve.", shortLabel: "Scale" }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "AI & automation built for ",
      titleLight: "mission-critical operations.",
      items: [
        { id: "01", title: "Custom AI Agent Development", desc: "Design and build purpose-built AI agents tailored to specific business functions with persistent memory and guardrails.", mockupType: "ai-agent", slug: "custom-ai-agent-development" },
        { id: "02", title: "RPA & Workflow Automation (BPM)", desc: "Automate rule-based, repetitive processes across ERP, CRM, and disparate systems with zero-dropout exception handling.", mockupType: "rpa-workflow", slug: "rpa-workflow-automation-bpm" },
        { id: "03", title: "AI Model Integration & MLOps", desc: "Deploy proprietary and open-source models to production with robust serving infrastructure and drift monitoring.", mockupType: "mlops-pipeline", slug: "ai-model-integration-mlops" },
        { id: "04", title: "Generative AI Content & Knowledge Tooling", desc: "Build internal knowledge retrieval engines, semantic search, and generative copilots tuned to your institutional memory.", mockupType: "doc-intel", slug: "generative-ai-content-knowledge-tooling" },
        { id: "05", title: "AI-Powered BI & Analytics Dashboards", desc: "Transform complex operational metrics into real-time natural language queryable dashboards and proactive forecasting.", mockupType: "attribution", slug: "ai-powered-bi-analytics-dashboards" },
        { id: "06", title: "Predictive Analytics & Forecasting", desc: "Anticipate market trends, customer churn, and demand fluctuations with custom predictive machine learning pipelines.", mockupType: "attribution", slug: "predictive-analytics-forecasting" },
        { id: "07", title: "Enterprise Chatbot & Conversational AI", desc: "Deploy omni-channel conversational interfaces that autonomously resolve customer inquiries and route complex cases.", mockupType: "chat-lead", slug: "enterprise-chatbot-conversational-ai" },
        { id: "08", title: "NLP / Document Intelligence", desc: "Extract structured data from unstructured contracts, invoices, and clinical records using multimodal OCR and NLP.", mockupType: "doc-intel", slug: "nlp-document-intelligence" },
        { id: "09", title: "AI-Powered Fraud Detection & Risk Scoring", desc: "Identify anomalous transactions and policy violations in real-time with sub-millisecond fraud scoring models.", mockupType: "partners", slug: "ai-powered-fraud-detection-risk-scoring" }
      ]
    },
    philosophyData: {
      eyebrow: "Human + intelligence",
      titleBold: "Automation should make teams ",
      titleLight: "more capable, not obsolete.",
      paragraphs: [
        "The best AI systems do not replace human judgment. They remove friction, eliminate repetitive cognitive drag, and amplify domain experts with precise context.",
        "Zuntra engineers intelligent agents, robust MLOps, and enterprise automation that work alongside your team to elevate operational speed and decision quality."
      ],
      tags: ["Reasoning", "Guardrails", "Autonomy"]
    },
    impactData: {
      eyebrow: "Built to make an impact",
      titleBold: "Automated systems designed around ",
      titleLight: "operational velocity.",
      items: [
        { icon: "connected", title: "Autonomous", desc: "End-to-end workflows executing with minimal manual intervention." },
        { icon: "personalized", title: "Context-Aware", desc: "Agents that understand company data, history, and domain rules." },
        { icon: "measurable", title: "Quantifiable", desc: "Drastic reductions in cycle time, error rates, and operational overhead." },
        { icon: "scalable", title: "Enterprise-Ready", desc: "Battle-tested security, audit trails, and multi-tenant reliability." }
      ]
    },
    architectureCore: {
      eyebrow: "Architecture",
      title: "Intelligent automation at the core.",
      topNodes: [
        { title: "Data & Signals", desc: "Unstructured Data · Events · Records" },
        { title: "Knowledge Base", desc: "Vector Embeddings · Context · SOPs" },
        { title: "Model Infrastructure", desc: "LLMs · SLMs · Custom Classifiers" }
      ],
      coreNode: { title: "Agentic Intelligence Engine", desc: "One connected system" },
      bottomNodes: [
        { title: "Reasoning", desc: "Autonomous Planning · Memory · Tool Use" },
        { title: "Execution", desc: "RPA · API Triggers · System Handoffs" },
        { title: "Safety & MLOps", desc: "Guardrails · Drift Monitoring · Human Loop" }
      ]
    },
    emergingTechData: {
      eyebrow: "Emerging technology",
      titleBold: "Built for what automation ",
      titleLight: "becomes next.",
      items: [
        { icon: "branch", title: "Autonomous Multi-Agent Swarms", desc: "Distributed reasoning agents coordinating complex tasks." },
        { icon: "search", title: "Multimodal Vision & NLP", desc: "Extracting actionable intelligence from unstructured assets." },
        { icon: "user", title: "Enterprise Memory & RAG", desc: "Grounding AI generations in secure private institutional knowledge." },
        { icon: "grid", title: "Self-Healing RPA", desc: "Workflow automation that dynamically adapts to UI changes." },
        { icon: "trend", title: "Predictive Operational AI", desc: "Forecasting demand, bottlenecks, and maintenance needs." },
        { icon: "chat", title: "Edge Model Deployment", desc: "Low-latency inference running directly on local infrastructure." },
        { icon: "trend", title: "Continuous MLOps Pipelines", desc: "Automated retraining, drift detection, and evaluation gates." },
        { icon: "cart", title: "Human-in-the-Loop Orchestration", desc: "Safe delegation of high-stakes workflows with policy checks." }
      ]
    },
    faqs: [
      { q: "What AI solutions does Zuntra build?", a: "Zuntra builds custom AI agents, RPA automation workflows, enterprise MLOps pipelines, document intelligence, and predictive decision systems tailored to your operational logic." },
      { q: "Can Zuntra build custom AI software?", a: "Yes. We build bespoke software and agents from the ground up, engineering the frontend, backend microservices, and AI inference layers around your domain logic." },
      { q: "What business processes can be automated with AI?", a: "High-volume rule-based workflows, document parsing, invoice reconciliation, customer support triage, report generation, exception routing, and cross-system data sync." },
      { q: "Can Zuntra integrate AI with existing business systems?", a: "Yes. We integrate AI workflows seamlessly into existing ERPs, CRMs (Salesforce, HubSpot), relational databases, cloud storage, and legacy software interfaces." },
      { q: "What are AI agents used for?", a: "AI agents take autonomous goal-oriented actions—querying databases, synthesizing cross-system context, making policy-bounded decisions, and triggering APIs without manual babysitting." },
      { q: "Does Zuntra provide end-to-end AI development?", a: "Yes. From workflow audits and architecture design to model deployment, guardrail implementation, MLOps monitoring, and continuous tuning." },
      { q: "Can AI automation scale with a growing business?", a: "Yes. Our cloud-native architectures and containerized microservices scale elastically with event volume while maintaining predictable compute costs." }
    ],
    cta: {
      titleLine1: "Have something",
      titleLine2: "worth automating?",
      subtitle: "Let's turn complexity into intelligent action.",
      buttons: [
        { text: "Let's talk", type: "primary" },
        { text: "Explore Zuntra", type: "outline" }
      ]
    }
  },

  'product-engineering': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From product vision ",
      titleLight: "to scalable enterprise software.",
      steps: [
        { num: "01", title: "Discovery & Architecture", subtitle: "Scoping & Specs", headline: "Product blueprint", summary: "Define core user stories, tech stack selection, and distributed system architecture.", shortLabel: "Discovery" },
        { num: "02", title: "UX & Design Systems", subtitle: "Figma to Code", headline: "Design system tokens", summary: "Build accessible, cohesive design systems with reusable components and micro-interactions.", shortLabel: "Design" },
        { num: "03", title: "Core Engineering", subtitle: "Frontend & Backend", headline: "High-velocity development", summary: "Develop scalable microservices, clean APIs, and responsive high-performance interfaces.", shortLabel: "Build" },
        { num: "04", title: "Integration & Testing", subtitle: "QA & Automation", headline: "Automated test coverage", summary: "Execute rigorous unit, integration, end-to-end, and security testing in CI/CD pipelines.", shortLabel: "Test" },
        { num: "05", title: "Deployment & Scaling", subtitle: "Cloud & DevOps", headline: "Production deployment", summary: "Deploy across multi-cloud environments with auto-scaling, monitoring, and zero downtime.", shortLabel: "Deploy" },
        { num: "06", title: "Iterate & Modernize", subtitle: "Product Evolution", headline: "Continuous delivery", summary: "Refactor legacy components, roll out feature updates, and track user adoption metrics.", shortLabel: "Iterate" }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "Product engineering built for ",
      titleLight: "complex digital products.",
      items: [
        { id: "01", title: "Custom SaaS Product Development", desc: "Architect and build multi-tenant SaaS platforms with secure authentication, subscription billing, and elastic scalability.", mockupType: "saas-arch", slug: "custom-saas-product-development" },
        { id: "02", title: "UI/UX Design & Product Design Systems", desc: "Design intuitive digital experiences and create reusable design tokens that keep product interfaces consistent and fast.", mockupType: "design-system", slug: "ui-ux-design-product-design-systems" },
        { id: "03", title: "Mobile App Development", desc: "Build native and cross-platform mobile apps for iOS and Android with smooth 60fps animations and offline capability.", mockupType: "mobile-app", slug: "mobile-app-development" },
        { id: "04", title: "API Development & Third-Party Integration", desc: "Build secure REST and GraphQL APIs that seamlessly connect internal services with external ecosystems and partners.", mockupType: "api-gateway", slug: "api-development-third-party-integration" },
        { id: "05", title: "Legacy System Modernization", desc: "Decompose monolithic legacy architectures into resilient microservices without interrupting active business operations.", mockupType: "stack", slug: "legacy-system-modernization" },
        { id: "06", title: "QA, Testing & DevOps Automation", desc: "Accelerate release cycles with automated testing, continuous integration, and rock-solid deployment pipelines.", mockupType: "workflow", slug: "qa-testing-devops-automation" },
        { id: "07", title: "Low-Code/No-Code Platform Development", desc: "Empower business teams by building custom internal tooling, admin portals, and extensible low-code workflows.", mockupType: "profile", slug: "low-code-no-code-platform-development" },
        { id: "08", title: "Enterprise Software Integration (ERP/CRM)", desc: "Synchronize data and operations across major enterprise systems like Salesforce, SAP, and custom internal platforms.", mockupType: "stack", slug: "enterprise-software-integration-erp-crm" },
        { id: "09", title: "IT Consulting & Managed Services", desc: "Provide strategic technical guidance, code audits, architecture reviews, and ongoing 24/7 product maintenance.", mockupType: "partners", slug: "it-consulting-bpo-managed-services" }
      ]
    },
    philosophyData: {
      eyebrow: "Craft + engineering",
      titleBold: "Software should feel intuitive, ",
      titleLight: "performant, and unbreakable.",
      paragraphs: [
        "Great software is not just about clean code. It is about understanding user psychology, reducing cognitive load, and engineering architectures that never fail under stress.",
        "Zuntra pairs elite product design with robust distributed engineering to build digital applications that users love and enterprises depend on."
      ],
      tags: ["Usability", "Performance", "Resilience"]
    },
    impactData: {
      eyebrow: "Built to make an impact",
      titleBold: "Software products designed around ",
      titleLight: "exceptional user experience.",
      items: [
        { icon: "connected", title: "Modular", desc: "Clean service boundaries that enable rapid feature iteration." },
        { icon: "personalized", title: "Human-Centric", desc: "Interfaces tailored to user workflows and behavioral patterns." },
        { icon: "measurable", title: "Performant", desc: "Sub-second load times, high conversion, and flawless responsiveness." },
        { icon: "scalable", title: "Elastic", desc: "Engineered to scale effortlessly from early traction to millions of users." }
      ]
    },
    architectureCore: {
      eyebrow: "Architecture",
      title: "Modern product engineering at the core.",
      topNodes: [
        { title: "Interface Layer", desc: "Web Apps · Mobile · Design Systems" },
        { title: "API Gateway", desc: "GraphQL · REST Mesh · Event Broker" },
        { title: "Business Services", desc: "Domain Microservices · Multi-Tenancy" }
      ],
      coreNode: { title: "Product Foundation", desc: "One connected system" },
      bottomNodes: [
        { title: "Performance", desc: "Edge Caching · Sub-second Latency · 60 FPS" },
        { title: "Reliability", desc: "Automated CI/CD · Microservice Resiliency" },
        { title: "Scalability", desc: "Elastic Auto-Scale · Distributed Sharding" }
      ]
    },
    emergingTechData: {
      eyebrow: "Emerging technology",
      titleBold: "Built for what software ",
      titleLight: "becomes next.",
      items: [
        { icon: "grid", title: "Universal Component Systems", desc: "Design tokens shared seamlessly across web and mobile." },
        { icon: "branch", title: "Event-Driven Microfrontends", desc: "Decoupled modular frontends running at high performance." },
        { icon: "trend", title: "Edge Computing & CDN SSR", desc: "Sub-second page loads served from the closest edge node." },
        { icon: "search", title: "Automated Test Suites", desc: "Zero-regression end-to-end testing embedded in CI/CD." },
        { icon: "user", title: "Multi-Tenant SaaS Architecture", desc: "Scalable tenant isolation and flexible permission meshes." },
        { icon: "chat", title: "AI-Assisted User Experiences", desc: "Intelligent contextual prompts and predictive interactions." },
        { icon: "trend", title: "Real-Time Websocket Mesh", desc: "Instant collaborative multi-user synchronization." },
        { icon: "cart", title: "Cross-Platform Native Apps", desc: "Single-codebase iOS and Android apps with 60 FPS fluidity." }
      ]
    },
    faqs: [
      { q: "What types of digital products does Zuntra build?", a: "We engineer multi-tenant SaaS platforms, enterprise portals, cross-platform mobile applications, internal business tools, and developer APIs." },
      { q: "How does Zuntra handle design systems and UX?", a: "We build unified design token architectures in Figma and code, ensuring all UI primitives, typography, accessibility standards, and components remain consistent." },
      { q: "Can you modernize a legacy codebase without downtime?", a: "Yes. We employ the strangler-fig pattern, incrementally extracting legacy monolith services into decoupled microservices or serverless functions." },
      { q: "What tech stack do you recommend for high-scale products?", a: "We tailor stack decisions to technical requirements—typically React, Next.js, TypeScript on the frontend, with Go, Node.js, Python, PostgreSQL, Redis, and Kafka." },
      { q: "Do you provide automated testing and CI/CD pipelines?", a: "Yes. Every product we build includes comprehensive test coverage (unit, integration, E2E with Playwright/Cypress) and automated deployment gates." },
      { q: "Do you build native or cross-platform mobile apps?", a: "We build with React Native and Flutter for single-codebase efficiency, as well as native Swift/Kotlin where hardware-specific performance demands it." }
    ],
    cta: {
      titleLine1: "Have a product",
      titleLine2: "worth building?",
      subtitle: "Let's build the software behind your next stage of scale.",
      buttons: [
        { text: "Let's talk", type: "primary" },
        { text: "Explore Zuntra", type: "outline" }
      ]
    }
  },

  'cloud-data': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From fragmented data ",
      titleLight: "to resilient cloud infrastructure.",
      steps: [
        { num: "01", title: "Audit & Architecture", subtitle: "Cloud Assessment", headline: "Cloud readiness audit", summary: "Assess legacy workloads, security vulnerabilities, and design target cloud architectures.", shortLabel: "Audit" },
        { num: "02", title: "Data Pipeline Engineering", subtitle: "ETL & Streaming", headline: "Event-driven pipelines", summary: "Build scalable data pipelines that ingest, clean, and transform data in real time.", shortLabel: "Pipelines" },
        { num: "03", title: "Cloud Migration & Setup", subtitle: "AWS, GCP & Azure", headline: "Zero-downtime migration", summary: "Migrate applications, databases, and workloads to high-availability multi-cloud clusters.", shortLabel: "Migration" },
        { num: "04", title: "Warehousing & Governance", subtitle: "Snowflake & BigQuery", headline: "Unified data lakehouse", summary: "Structure enterprise warehouses with granular role-based access control and governance.", shortLabel: "Warehouse" },
        { num: "05", title: "DevSecOps & Compliance", subtitle: "Security & CI/CD", headline: "Automated compliance", summary: "Implement automated infrastructure-as-code, SOC2/HIPAA compliance, and security scanning.", shortLabel: "Security" },
        { num: "06", title: "FinOps & Optimization", subtitle: "Cost & Performance", headline: "Continuous cost control", summary: "Optimize compute allocation, storage tiers, and cluster efficiency to maximize cloud ROI.", shortLabel: "Optimize" }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "Cloud & data systems built for ",
      titleLight: "enterprise-scale infrastructure.",
      items: [
        { id: "01", title: "Cloud Migration & Infrastructure Setup", desc: "Migrate legacy systems to AWS, GCP, or Azure with zero downtime and automated infrastructure-as-code.", mockupType: "cloud-infra", slug: "cloud-migration-infrastructure-setup" },
        { id: "02", title: "Data Engineering & Pipeline Architecture", desc: "Build resilient ETL and real-time streaming data pipelines that feed operational applications and analytics.", mockupType: "data-pipeline", slug: "data-engineering-pipeline-architecture" },
        { id: "03", title: "Enterprise Data Warehousing & Governance", desc: "Design unified lakehouses in Snowflake, BigQuery, and Databricks with centralized metadata and governance.", mockupType: "warehouse-schema", slug: "enterprise-data-warehousing-governance" },
        { id: "04", title: "Cybersecurity & Compliance Advisory", desc: "Fortify cloud environments with zero-trust architectures, automated penetration testing, and SOC2/HIPAA adherence.", mockupType: "security-shield", slug: "cybersecurity-compliance-advisory" },
        { id: "05", title: "Digital Transformation Strategy & Roadmapping", desc: "Develop strategic technology roadmaps that modernize enterprise stacks and retire expensive legacy debt.", mockupType: "stack", slug: "digital-transformation-strategy-roadmapping" },
        { id: "06", title: "DevSecOps & CI/CD Pipeline Setup", desc: "Automate delivery pipelines with containerized Kubernetes workflows, vulnerability gates, and fast rollbacks.", mockupType: "workflow", slug: "devsecops-ci-cd-pipeline-setup" },
        { id: "07", title: "Real-Time Data Streaming & Event Architecture", desc: "Process millions of events per second with Apache Kafka, Flink, and pub/sub event meshes.", mockupType: "data-pipeline", slug: "real-time-data-streaming-event-driven-architecture" },
        { id: "08", title: "Cloud Cost Optimization & FinOps", desc: "Analyze cloud spending, eliminate idle compute resources, and right-size reserved instances for maximum efficiency.", mockupType: "attribution", slug: "cloud-cost-optimization-finops" },
        { id: "09", title: "Disaster Recovery & High-Availability Clusters", desc: "Engineer multi-region active-active failover mechanisms ensuring 99.999% uptime and zero data loss.", mockupType: "partners", slug: "disaster-recovery-high-availability-clusters" }
      ]
    },
    philosophyData: {
      eyebrow: "Resilience + speed",
      titleBold: "Infrastructure should be invisible, ",
      titleLight: "bulletproof, and elastic.",
      paragraphs: [
        "The best cloud architecture is one you never have to worry about. It scales instantly with demand, protects mission-critical data, and runs with predictable cost.",
        "Zuntra designs modern cloud infrastructure and data pipelines that unlock real-time intelligence while maintaining uncompromising security and uptime."
      ],
      tags: ["Reliability", "Zero-Trust", "Scalability"]
    },
    impactData: {
      eyebrow: "Built to make an impact",
      titleBold: "Data platforms designed around ",
      titleLight: "uncompromised reliability.",
      items: [
        { icon: "connected", title: "Integrated", desc: "All data stores, streaming queues, and analytics engines synchronized." },
        { icon: "personalized", title: "Governed", desc: "Fine-grained access controls ensuring privacy and regulatory compliance." },
        { icon: "measurable", title: "Real-Time", desc: "Sub-second event ingestion and actionable operational telemetry." },
        { icon: "scalable", title: "Resilient", desc: "Multi-region failover and elastic compute scaling with 99.999% uptime." }
      ]
    },
    architectureCore: {
      eyebrow: "Architecture",
      title: "Resilient cloud at the core.",
      topNodes: [
        { title: "Data Ingestion", desc: "Kafka · IoT · Event Hubs · Webhooks" },
        { title: "Processing & Storage", desc: "Snowflake · Databricks · S3 Data Lake" },
        { title: "Cloud Mesh", desc: "Kubernetes · Multi-Region · Zero-Trust" }
      ],
      coreNode: { title: "Cloud Data Core", desc: "One connected system" },
      bottomNodes: [
        { title: "Governance", desc: "RBAC · Zero-Trust Security · Audit Compliance" },
        { title: "Real-Time Analytics", desc: "Sub-Second Querying · Data Telemetry" },
        { title: "FinOps & Scale", desc: "Auto-Scaling · 99.999% High Availability" }
      ]
    },
    emergingTechData: {
      eyebrow: "Emerging technology",
      titleBold: "Built for what cloud ",
      titleLight: "becomes next.",
      items: [
        { icon: "grid", title: "Zero-Trust Cloud Mesh", desc: "Identity-first security perimeter protecting every micro-service." },
        { icon: "trend", title: "Streaming Lakehouse Architecture", desc: "Real-time data processing without batch latency." },
        { icon: "branch", title: "Serverless Event Meshes", desc: "Instant auto-scaling compute responding directly to traffic spikes." },
        { icon: "search", title: "Automated FinOps Governance", desc: "Intelligent instance rightsizing and idle resource termination." },
        { icon: "user", title: "Immutable Infrastructure as Code", desc: "Declarative Terraform and GitOps configuration tracking." },
        { icon: "chat", title: "AI-Ready Data Curations", desc: "Clean feature stores structured for continuous machine learning." },
        { icon: "trend", title: "Active-Active Multi-Region", desc: "Instant disaster recovery failover with zero downtime." },
        { icon: "cart", title: "Automated Compliance Scanning", desc: "Real-time continuous audits for SOC2, HIPAA, and ISO 27001." }
      ]
    },
    faqs: [
      { q: "Which cloud providers does Zuntra support?", a: "We architect, migrate, and optimize across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, and hybrid cloud environments." },
      { q: "How do you ensure zero data loss during cloud migration?", a: "We execute phased data replication using Change Data Capture (CDC), run dual-write validation in parallel, and switch DNS only after complete data reconciliation." },
      { q: "What is your approach to modern data warehousing?", a: "We design modern lakehouses using Snowflake, Databricks, or BigQuery, implementing automated ingestion, dbt transformation pipelines, and fine-grained data governance." },
      { q: "Can you help reduce our monthly cloud bill (FinOps)?", a: "Yes. We conduct in-depth compute and storage audits, right-size over-provisioned instances, configure spot/reserved pricing, and eliminate orphaned cloud resources." },
      { q: "How do you handle cybersecurity and regulatory compliance?", a: "We enforce zero-trust security postures, automated secret rotation, immutable audit logging, and continuous compliance posture management for SOC2, HIPAA, and GDPR." },
      { q: "Do you build real-time event streaming architectures?", a: "Yes. We build high-throughput event meshes powered by Apache Kafka, AWS Kinesis, and Flink capable of processing millions of events per second with sub-second latency." }
    ],
    cta: {
      titleLine1: "Have infrastructure",
      titleLine2: "worth modernizing?",
      subtitle: "Let's build the cloud foundation behind your next stage of growth.",
      buttons: [
        { text: "Let's talk", type: "primary" },
        { text: "Explore Zuntra", type: "outline" }
      ]
    }
  }
};

buildData.forEach(item => {
  const top = topEnhancements[item.id] || {};
  const mid = midEnhancements[item.id] || {};
  Object.assign(item, top, mid);
});

const fileOutput = `export const buildData = ${JSON.stringify(buildData, null, 2)};\n`;
fs.writeFileSync(filePath, fileOutput, 'utf8');
console.log('Successfully written master buildData.js with ALL sections for ALL 4 pillars!');
