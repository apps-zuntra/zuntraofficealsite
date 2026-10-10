import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Load existing buildData
const filePath = path.resolve('src/data/buildData.js');
const moduleUrl = 'file:///' + filePath.replace(/\\/g, '/');
const { buildData } = await import(moduleUrl);

const newSectionsMap = {
  'growth-marketing-tech': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From customer signal ",
      titleLight: "to measurable growth.",
      steps: [
        {
          num: "01",
          title: "Understand the Audience",
          subtitle: "Customer & Market",
          headline: "Audience signals",
          summary: "Bring customer behavior and market context into one view.",
          shortLabel: "Audience"
        },
        {
          num: "02",
          title: "Connect the Data",
          subtitle: "Profiles & Platforms",
          headline: "Unified data layer",
          summary: "Unify customer touchpoints across web, CRM, and commerce into single source of truth.",
          shortLabel: "Data"
        },
        {
          num: "03",
          title: "Design the Journey",
          subtitle: "Experience & Engagement",
          headline: "Journey orchestration",
          summary: "Map dynamic customer pathways that adapt based on real-time behavior and lifecycle stage.",
          shortLabel: "Journey"
        },
        {
          num: "04",
          title: "Activate the System",
          subtitle: "Marketing & Sales",
          headline: "Multi-channel activation",
          summary: "Trigger personalized messaging, programmatic ads, and CRM sync seamlessly.",
          shortLabel: "Activate"
        },
        {
          num: "05",
          title: "Measure the Outcome",
          subtitle: "Analytics & Attribution",
          headline: "Attribution & ROI modeling",
          summary: "Connect cross-channel campaigns to pipeline conversion and bottom-line revenue.",
          shortLabel: "Measure"
        },
        {
          num: "06",
          title: "Optimize & Grow",
          subtitle: "Continuous Improvement",
          headline: "Continuous loop optimization",
          summary: "Iterate machine learning rules, audience segments, and content models over time.",
          shortLabel: "Grow"
        }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "Growth technology built for ",
      titleLight: "real marketing challenges.",
      items: [
        {
          id: "01",
          title: "Marketing Automation & CRM Platforms",
          desc: "Connect CRM systems and marketing automation to manage lead nurturing, lead scoring, customer segmentation, pipeline tracking, and campaign performance.",
          mockupType: "workflow",
          slug: "marketing-automation-crm-platforms"
        },
        {
          id: "02",
          title: "Customer Data Platforms & Personalization Engines",
          desc: "Unify customer information across touchpoints and build personalization engines that use a more complete view of customer behavior.",
          mockupType: "profile",
          slug: "customer-data-platforms-personalization-engines"
        },
        {
          id: "03",
          title: "E-Commerce Platform Development & Optimization",
          desc: "Build and optimize e-commerce experiences through storefront development, platform migration, checkout optimization, payment integration, and conversion rate.",
          mockupType: "commerce",
          slug: "e-commerce-platform-development-optimization"
        },
        {
          id: "04",
          title: "SEO/AEO Strategy & Content Engineering",
          desc: "Develop search and content strategies designed for both traditional search engines and AI answer engines through technical SEO, content architecture, keyword research, and AEO.",
          mockupType: "search",
          slug: "seo-aeo-strategy-content-engineering"
        },
        {
          id: "05",
          title: "Marketing Analytics & Attribution Modeling",
          desc: "Connect customer journeys and marketing channels through attribution models, performance dashboards, ROI measurement, and cross-channel analytics.",
          mockupType: "attribution",
          slug: "marketing-analytics-attribution-modeling"
        },
        {
          id: "06",
          title: "Conversational Commerce & AI-Driven Lead Qualification",
          desc: "Engage prospects in real time through conversational interfaces, AI-driven qualification, lead scoring, CRM integration, and multi-channel deployment.",
          mockupType: "chat-lead",
          slug: "conversational-commerce-ai-driven-lead-qualification"
        },
        {
          id: "07",
          title: "Loyalty & Retention Platform Development",
          desc: "Build loyalty programs, referral systems, membership tiers, rewards infrastructure, retention analytics, and churn prediction capabilities.",
          mockupType: "lifecycle",
          slug: "loyalty-retention-platform-development"
        },
        {
          id: "08",
          title: "Marketing Tech Stack Audits & Consolidation",
          desc: "Audit your existing MarTech stack, identify redundancy and integration gaps, evaluate vendors, and plan technology consolidation around a leaner setup.",
          mockupType: "stack",
          slug: "marketing-tech-stack-audits-consolidation"
        },
        {
          id: "09",
          title: "Influencer & Affiliate Program Tooling",
          desc: "Build systems for partner tracking, referral attribution, commission management, partner dashboards, automated payouts, and referral fraud detection.",
          mockupType: "partners",
          slug: "influencer-affiliate-program-tooling"
        }
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
        {
          icon: "connected",
          title: "Connected",
          desc: "Customer, marketing, and sales data working together."
        },
        {
          icon: "personalized",
          title: "Personalized",
          desc: "Experiences shaped around real customer context."
        },
        {
          icon: "measurable",
          title: "Measurable",
          desc: "Marketing performance connected to meaningful outcomes."
        },
        {
          icon: "scalable",
          title: "Scalable",
          desc: "Technology built to support growing audiences and operations."
        }
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
      coreNode: {
        title: "Growth intelligence",
        desc: "One connected system"
      }
    }
  },

  'ai-software-automation': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From operational complexity ",
      titleLight: "to autonomous execution.",
      steps: [
        {
          num: "01",
          title: "Identify & Audit",
          subtitle: "Process Mapping",
          headline: "Operational audit",
          summary: "Identify high-volume decision bottlenecks and routine workflows ready for AI.",
          shortLabel: "Audit"
        },
        {
          num: "02",
          title: "Model Architecture",
          subtitle: "Context & Memory",
          headline: "Agent reasoning design",
          summary: "Design domain-specific agents with guardrails, memory persistence, and tool access.",
          shortLabel: "Reasoning"
        },
        {
          num: "03",
          title: "Integrate & Connect",
          subtitle: "APIs & Databases",
          headline: "Deep system connectivity",
          summary: "Integrate AI workflows with enterprise ERP, CRM, document stores, and legacy software.",
          shortLabel: "Connect"
        },
        {
          num: "04",
          title: "Orchestrate Execution",
          subtitle: "BPM & Multi-Agent",
          headline: "Autonomous execution",
          summary: "Coordinate multi-agent swarms with strict policy adherence and human-in-the-loop fallback.",
          shortLabel: "Execute"
        },
        {
          num: "05",
          title: "Monitor & Guardrail",
          subtitle: "MLOps & Evaluation",
          headline: "Real-time safety checks",
          summary: "Continuously detect drift, latency outliers, and enforce safety guardrails.",
          shortLabel: "Monitor"
        },
        {
          num: "06",
          title: "Scale & Automate",
          subtitle: "Self-Improving Loops",
          headline: "Compounding efficiency",
          summary: "Retrain models and expand agent capability boundaries as operations evolve.",
          shortLabel: "Scale"
        }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "AI & automation built for ",
      titleLight: "mission-critical operations.",
      items: [
        {
          id: "01",
          title: "Custom AI Agent Development",
          desc: "Design and build purpose-built AI agents tailored to specific business functions with persistent memory and guardrails.",
          mockupType: "ai-agent",
          slug: "custom-ai-agent-development"
        },
        {
          id: "02",
          title: "RPA & Workflow Automation (BPM)",
          desc: "Automate rule-based, repetitive processes across ERP, CRM, and disparate systems with zero-dropout exception handling.",
          mockupType: "rpa-workflow",
          slug: "rpa-workflow-automation-bpm"
        },
        {
          id: "03",
          title: "AI Model Integration & MLOps",
          desc: "Deploy proprietary and open-source models to production with robust serving infrastructure and drift monitoring.",
          mockupType: "mlops-pipeline",
          slug: "ai-model-integration-mlops"
        },
        {
          id: "04",
          title: "Generative AI Content & Knowledge Tooling",
          desc: "Build internal knowledge retrieval engines, semantic search, and generative copilots tuned to your institutional memory.",
          mockupType: "doc-intel",
          slug: "generative-ai-content-knowledge-tooling"
        },
        {
          id: "05",
          title: "AI-Powered BI & Analytics Dashboards",
          desc: "Transform complex operational metrics into real-time natural language queryable dashboards and proactive forecasting.",
          mockupType: "attribution",
          slug: "ai-powered-bi-analytics-dashboards"
        },
        {
          id: "06",
          title: "Predictive Analytics & Forecasting",
          desc: "Anticipate market trends, customer churn, and demand fluctuations with custom predictive machine learning pipelines.",
          mockupType: "attribution",
          slug: "predictive-analytics-forecasting"
        },
        {
          id: "07",
          title: "Enterprise Chatbot & Conversational AI",
          desc: "Deploy omni-channel conversational interfaces that autonomously resolve customer inquiries and route complex cases.",
          mockupType: "chat-lead",
          slug: "enterprise-chatbot-conversational-ai"
        },
        {
          id: "08",
          title: "NLP / Document Intelligence",
          desc: "Extract structured data from unstructured contracts, invoices, and clinical records using multimodal OCR and NLP.",
          mockupType: "doc-intel",
          slug: "nlp-document-intelligence"
        },
        {
          id: "09",
          title: "AI-Powered Fraud Detection & Risk Scoring",
          desc: "Identify anomalous transactions and policy violations in real-time with sub-millisecond fraud scoring models.",
          mockupType: "partners",
          slug: "ai-powered-fraud-detection-risk-scoring"
        }
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
        {
          icon: "connected",
          title: "Autonomous",
          desc: "End-to-end workflows executing with minimal manual intervention."
        },
        {
          icon: "personalized",
          title: "Context-Aware",
          desc: "Agents that understand company data, history, and domain rules."
        },
        {
          icon: "measurable",
          title: "Quantifiable",
          desc: "Drastic reductions in cycle time, error rates, and operational overhead."
        },
        {
          icon: "scalable",
          title: "Enterprise-Ready",
          desc: "Battle-tested security, audit trails, and multi-tenant reliability."
        }
      ]
    },
    architectureCore: {
      eyebrow: "Architecture",
      title: "Intelligent automation at the core.",
      topNodes: [
        { title: "Inputs & Data", desc: "Documents · APIs · Event Streams" },
        { title: "Reasoning Layer", desc: "LLMs · Custom Models · Guardrails" },
        { title: "Execution", desc: "RPA · Orchestration · Action APIs" }
      ],
      coreNode: {
        title: "Agentic Intelligence Engine",
        desc: "One unified cognitive system"
      }
    }
  },

  'product-engineering': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From product vision ",
      titleLight: "to scalable enterprise software.",
      steps: [
        {
          num: "01",
          title: "Discovery & Architecture",
          subtitle: "Scoping & Specs",
          headline: "Product blueprint",
          summary: "Define core user stories, tech stack selection, and distributed system architecture.",
          shortLabel: "Discovery"
        },
        {
          num: "02",
          title: "UX & Design Systems",
          subtitle: "Figma to Code",
          headline: "Design system tokens",
          summary: "Build accessible, cohesive design systems with reusable components and micro-interactions.",
          shortLabel: "Design"
        },
        {
          num: "03",
          title: "Core Engineering",
          subtitle: "Frontend & Backend",
          headline: "High-velocity development",
          summary: "Develop scalable microservices, clean APIs, and responsive high-performance interfaces.",
          shortLabel: "Build"
        },
        {
          num: "04",
          title: "Integration & Testing",
          subtitle: "QA & Automation",
          headline: "Automated test coverage",
          summary: "Execute rigorous unit, integration, end-to-end, and security testing in CI/CD pipelines.",
          shortLabel: "Test"
        },
        {
          num: "05",
          title: "Deployment & Scaling",
          subtitle: "Cloud & DevOps",
          headline: "Production deployment",
          summary: "Deploy across multi-cloud environments with auto-scaling, monitoring, and zero downtime.",
          shortLabel: "Deploy"
        },
        {
          num: "06",
          title: "Iterate & Modernize",
          subtitle: "Product Evolution",
          headline: "Continuous delivery",
          summary: "Refactor legacy components, roll out feature updates, and track user adoption metrics.",
          shortLabel: "Iterate"
        }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "Product engineering built for ",
      titleLight: "complex digital products.",
      items: [
        {
          id: "01",
          title: "Custom SaaS Product Development",
          desc: "Architect and build multi-tenant SaaS platforms with secure authentication, subscription billing, and elastic scalability.",
          mockupType: "saas-arch",
          slug: "custom-saas-product-development"
        },
        {
          id: "02",
          title: "UI/UX Design & Product Design Systems",
          desc: "Design intuitive digital experiences and create reusable design tokens that keep product interfaces consistent and fast.",
          mockupType: "design-system",
          slug: "ui-ux-design-product-design-systems"
        },
        {
          id: "03",
          title: "Mobile App Development",
          desc: "Build native and cross-platform mobile apps for iOS and Android with smooth 60fps animations and offline capability.",
          mockupType: "mobile-app",
          slug: "mobile-app-development"
        },
        {
          id: "04",
          title: "API Development & Third-Party Integration",
          desc: "Build secure REST and GraphQL APIs that seamlessly connect internal services with external ecosystems and partners.",
          mockupType: "api-gateway",
          slug: "api-development-third-party-integration"
        },
        {
          id: "05",
          title: "Legacy System Modernization",
          desc: "Decompose monolithic legacy architectures into resilient microservices without interrupting active business operations.",
          mockupType: "stack",
          slug: "legacy-system-modernization"
        },
        {
          id: "06",
          title: "QA, Testing & DevOps Automation",
          desc: "Accelerate release cycles with automated testing, continuous integration, and rock-solid deployment pipelines.",
          mockupType: "workflow",
          slug: "qa-testing-devops-automation"
        },
        {
          id: "07",
          title: "Low-Code/No-Code Platform Development",
          desc: "Empower business teams by building custom internal tooling, admin portals, and extensible low-code workflows.",
          mockupType: "profile",
          slug: "low-code-no-code-platform-development"
        },
        {
          id: "08",
          title: "Enterprise Software Integration (ERP/CRM)",
          desc: "Synchronize data and operations across major enterprise systems like Salesforce, SAP, and custom internal platforms.",
          mockupType: "stack",
          slug: "enterprise-software-integration-erp-crm"
        },
        {
          id: "09",
          title: "IT Consulting & Managed Services",
          desc: "Provide strategic technical guidance, code audits, architecture reviews, and ongoing 24/7 product maintenance.",
          mockupType: "partners",
          slug: "it-consulting-bpo-managed-services"
        }
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
        {
          icon: "connected",
          title: "Modular",
          desc: "Clean service boundaries that enable rapid feature iteration."
        },
        {
          icon: "personalized",
          title: "Human-Centric",
          desc: "Interfaces tailored to user workflows and behavioral patterns."
        },
        {
          icon: "measurable",
          title: "Performant",
          desc: "Sub-second load times, high conversion, and flawless responsiveness."
        },
        {
          icon: "scalable",
          title: "Elastic",
          desc: "Engineered to scale effortlessly from early traction to millions of users."
        }
      ]
    },
    architectureCore: {
      eyebrow: "Architecture",
      title: "Modern product engineering at the core.",
      topNodes: [
        { title: "User Interface", desc: "Design System · Web · Mobile" },
        { title: "API Gateway", desc: "GraphQL · REST · Event Mesh" },
        { title: "Microservices", desc: "Auth · Billing · Core Business Logic" }
      ],
      coreNode: {
        title: "Product Foundation",
        desc: "One unified digital ecosystem"
      }
    }
  },

  'cloud-data': {
    workflowData: {
      eyebrow: "Workflow",
      titleBold: "From fragmented data ",
      titleLight: "to resilient cloud infrastructure.",
      steps: [
        {
          num: "01",
          title: "Audit & Architecture",
          subtitle: "Cloud Assessment",
          headline: "Cloud readiness audit",
          summary: "Assess legacy workloads, security vulnerabilities, and design target cloud architectures.",
          shortLabel: "Audit"
        },
        {
          num: "02",
          title: "Data Pipeline Engineering",
          subtitle: "ETL & Streaming",
          headline: "Event-driven pipelines",
          summary: "Build scalable data pipelines that ingest, clean, and transform data in real time.",
          shortLabel: "Pipelines"
        },
        {
          num: "03",
          title: "Cloud Migration & Setup",
          subtitle: "AWS, GCP & Azure",
          headline: "Zero-downtime migration",
          summary: "Migrate applications, databases, and workloads to high-availability multi-cloud clusters.",
          shortLabel: "Migration"
        },
        {
          num: "04",
          title: "Warehousing & Governance",
          subtitle: "Snowflake & BigQuery",
          headline: "Unified data lakehouse",
          summary: "Structure enterprise warehouses with granular role-based access control and governance.",
          shortLabel: "Warehouse"
        },
        {
          num: "05",
          title: "DevSecOps & Compliance",
          subtitle: "Security & CI/CD",
          headline: "Automated compliance",
          summary: "Implement automated infrastructure-as-code, SOC2/HIPAA compliance, and security scanning.",
          shortLabel: "Security"
        },
        {
          num: "06",
          title: "FinOps & Optimization",
          subtitle: "Cost & Performance",
          headline: "Continuous cost control",
          summary: "Optimize compute allocation, storage tiers, and cluster efficiency to maximize cloud ROI.",
          shortLabel: "Optimize"
        }
      ]
    },
    useCasesData: {
      eyebrow: "Use cases",
      titleBold: "Cloud & data systems built for ",
      titleLight: "enterprise-scale infrastructure.",
      items: [
        {
          id: "01",
          title: "Cloud Migration & Infrastructure Setup",
          desc: "Migrate legacy systems to AWS, GCP, or Azure with zero downtime and automated infrastructure-as-code.",
          mockupType: "cloud-infra",
          slug: "cloud-migration-infrastructure-setup"
        },
        {
          id: "02",
          title: "Data Engineering & Pipeline Architecture",
          desc: "Build resilient ETL and real-time streaming data pipelines that feed operational applications and analytics.",
          mockupType: "data-pipeline",
          slug: "data-engineering-pipeline-architecture"
        },
        {
          id: "03",
          title: "Enterprise Data Warehousing & Governance",
          desc: "Design unified lakehouses in Snowflake, BigQuery, and Databricks with centralized metadata and governance.",
          mockupType: "warehouse-schema",
          slug: "enterprise-data-warehousing-governance"
        },
        {
          id: "04",
          title: "Cybersecurity & Compliance Advisory",
          desc: "Fortify cloud environments with zero-trust architectures, automated penetration testing, and SOC2/HIPAA adherence.",
          mockupType: "security-shield",
          slug: "cybersecurity-compliance-advisory"
        },
        {
          id: "05",
          title: "Digital Transformation Strategy & Roadmapping",
          desc: "Develop strategic technology roadmaps that modernize enterprise stacks and retire expensive legacy debt.",
          mockupType: "stack",
          slug: "digital-transformation-strategy-roadmapping"
        },
        {
          id: "06",
          title: "DevSecOps & CI/CD Pipeline Setup",
          desc: "Automate delivery pipelines with containerized Kubernetes workflows, vulnerability gates, and fast rollbacks.",
          mockupType: "workflow",
          slug: "devsecops-ci-cd-pipeline-setup"
        },
        {
          id: "07",
          title: "Real-Time Data Streaming & Event Architecture",
          desc: "Process millions of events per second with Apache Kafka, Flink, and pub/sub event meshes.",
          mockupType: "data-pipeline",
          slug: "real-time-data-streaming-event-driven-architecture"
        },
        {
          id: "08",
          title: "Cloud Cost Optimization & FinOps",
          desc: "Analyze cloud spending, eliminate idle compute resources, and right-size reserved instances for maximum efficiency.",
          mockupType: "attribution",
          slug: "cloud-cost-optimization-finops"
        },
        {
          id: "09",
          title: "Disaster Recovery & High-Availability Clusters",
          desc: "Engineer multi-region active-active failover mechanisms ensuring 99.999% uptime and zero data loss.",
          mockupType: "partners",
          slug: "disaster-recovery-high-availability-clusters"
        }
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
        {
          icon: "connected",
          title: "Integrated",
          desc: "All data stores, streaming queues, and analytics engines synchronized."
        },
        {
          icon: "personalized",
          title: "Governed",
          desc: "Fine-grained access controls ensuring privacy and regulatory compliance."
        },
        {
          icon: "measurable",
          title: "Real-Time",
          desc: "Sub-second event ingestion and actionable operational telemetry."
        },
        {
          icon: "scalable",
          title: "Resilient",
          desc: "Multi-region failover and elastic compute scaling with 99.999% uptime."
        }
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
      coreNode: {
        title: "Cloud Data Core",
        desc: "One resilient infrastructure"
      }
    }
  }
};

buildData.forEach(item => {
  const newSections = newSectionsMap[item.id];
  if (newSections) {
    Object.assign(item, newSections);
  }
});

const fileOutput = `export const buildData = ${JSON.stringify(buildData, null, 2)};\n`;
fs.writeFileSync(filePath, fileOutput, 'utf8');
console.log('Successfully enriched all 4 build sections in src/data/buildData.js!');
