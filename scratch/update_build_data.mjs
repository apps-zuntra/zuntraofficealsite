import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDataPath = path.resolve(__dirname, '../src/data/buildData.js');
const rawContent = fs.readFileSync(buildDataPath, 'utf8');

// We can import the current buildData
import { buildData } from '../src/data/buildData.js';

const enhancements = {
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
      title: "Designed around real growth complexity.",
      desc: "Growth does not come from a single marketing channel. Businesses need customer data, campaigns, sales systems, digital experiences, analytics, and engagement tools to work together. Zuntra connects these layers through marketing technology, customer intelligence, automation, and digital growth systems designed around the complete customer journey."
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
      ]
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
      ]
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
      ]
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
      ]
    }
  }
};

const updatedBuildData = buildData.map(item => {
  const enh = enhancements[item.id];
  if (enh) {
    return {
      ...item,
      ...enh
    };
  }
  return item;
});

const output = `export const buildData = ${JSON.stringify(updatedBuildData, null, 2)};\n`;
fs.writeFileSync(buildDataPath, output, 'utf8');
console.log('Successfully updated src/data/buildData.js!');
