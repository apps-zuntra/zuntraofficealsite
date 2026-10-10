import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/buildData.js');
const moduleUrl = 'file:///' + filePath.replace(/\\/g, '/');
const { buildData } = await import(moduleUrl);

const updates = {
  'growth-marketing-tech': {
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
      },
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
        {
          icon: "branch",
          title: "AI-Driven Marketing",
          desc: "Intelligent systems for customer engagement."
        },
        {
          icon: "user",
          title: "Customer Data Platforms",
          desc: "Unified customer intelligence across touchpoints."
        },
        {
          icon: "chat",
          title: "Conversational Commerce",
          desc: "Real-time engagement and AI-driven qualification."
        },
        {
          icon: "search",
          title: "AI Answer Engine Optimization",
          desc: "Content designed for emerging AI search experiences."
        },
        {
          icon: "trend",
          title: "Predictive Analytics",
          desc: "Identify patterns across customer and marketing data."
        },
        {
          icon: "grid",
          title: "Personalization Engines",
          desc: "Deliver relevant experiences using unified customer profiles."
        },
        {
          icon: "trend",
          title: "Marketing Intelligence",
          desc: "Connect campaigns to measurable business outcomes."
        },
        {
          icon: "cart",
          title: "Digital Commerce",
          desc: "Build experiences around changing customer expectations."
        }
      ]
    },
    faqs: [
      {
        q: "What does Zuntra's Growth & Marketing Tech service include?",
        a: "We engineer complete growth platforms, covering marketing automation, CDP integrations, e-commerce optimization, SEO/AEO engineering, attribution modeling, and conversational qualification tools."
      },
      {
        q: "Can Zuntra integrate our existing CRM and marketing tools?",
        a: "Yes. We connect and harmonize HubSpot, Salesforce, Klaviyo, custom CRMs, data warehouses, and e-commerce platforms into a single synchronized data layer."
      },
      {
        q: "What is the difference between a CRM and a Customer Data Platform?",
        a: "A CRM primarily tracks direct sales interactions and customer relationship stages, while a Customer Data Platform (CDP) aggregates raw event-level behavioral data across all touchpoints (web, apps, ads, offline) to enable real-time audience segmentation."
      },
      {
        q: "Can Zuntra personalize customer experiences?",
        a: "Yes. We build dynamic personalization engines that adapt storefront content, messaging, and recommendation logic based on real-time customer behavior, segments, and lifecycle stage."
      },
      {
        q: "Does Zuntra provide SEO and AEO services?",
        a: "Yes. We architect content structures, technical schemas, and knowledge graphs engineered for traditional search engines as well as generative AI answer engines like Perplexity, ChatGPT, and Google Gemini."
      },
      {
        q: "Can Zuntra improve an existing e-commerce platform?",
        a: "Yes. We optimize headless storefronts, checkout flow latency, payment gateway routing, and conversion funnels to dramatically reduce cart abandonment."
      },
      {
        q: "Can Zuntra help us understand which marketing channels drive conversions?",
        a: "Yes. We build custom multi-touch attribution models and unified ROI dashboards that connect spend to closed-loop pipeline revenue across all touchpoints."
      },
      {
        q: "Can AI qualify leads automatically?",
        a: "Yes. We implement conversational AI qualification that engages incoming visitors, scores lead intent, and automatically books sales meetings or routes context directly into your CRM."
      },
      {
        q: "Can Zuntra help consolidate our MarTech stack?",
        a: "Yes. We audit your existing software subscriptions, eliminate redundant tooling, plug data silos, and engineer a streamlined, lower-cost technology stack."
      }
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
    architectureCore: {
      eyebrow: "Architecture",
      title: "Intelligent automation at the core.",
      topNodes: [
        { title: "Data & Signals", desc: "Unstructured Data · Events · Records" },
        { title: "Knowledge Base", desc: "Vector Embeddings · Context · SOPs" },
        { title: "Model Infrastructure", desc: "LLMs · SLMs · Custom Classifiers" }
      ],
      coreNode: {
        title: "Agentic Intelligence Engine",
        desc: "One connected system"
      },
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
        {
          icon: "branch",
          title: "Autonomous Multi-Agent Swarms",
          desc: "Distributed reasoning agents coordinating complex tasks."
        },
        {
          icon: "search",
          title: "Multimodal Vision & NLP",
          desc: "Extracting actionable intelligence from unstructured assets."
        },
        {
          icon: "user",
          title: "Enterprise Memory & RAG",
          desc: "Grounding AI generations in secure private institutional knowledge."
        },
        {
          icon: "grid",
          title: "Self-Healing RPA",
          desc: "Workflow automation that dynamically adapts to UI changes."
        },
        {
          icon: "trend",
          title: "Predictive Operational AI",
          desc: "Forecasting demand, bottlenecks, and maintenance needs."
        },
        {
          icon: "chat",
          title: "Edge Model Deployment",
          desc: "Low-latency inference running directly on local infrastructure."
        },
        {
          icon: "trend",
          title: "Continuous MLOps Pipelines",
          desc: "Automated retraining, drift detection, and evaluation gates."
        },
        {
          icon: "cart",
          title: "Human-in-the-Loop Orchestration",
          desc: "Safe delegation of high-stakes workflows with policy checks."
        }
      ]
    },
    faqs: [
      {
        q: "What is the difference between an AI agent and a standard chatbot?",
        a: "A chatbot responds to queries with static text; an autonomous AI agent has goals, persistent memory, and tool-calling capabilities to execute multi-step workflows across your business applications."
      },
      {
        q: "Can AI agents integrate with our legacy software and databases?",
        a: "Yes. We engineer secure connectors, API gateways, and RPA bridges that allow AI agents to safely read and write to legacy databases and ERP systems."
      },
      {
        q: "How do you prevent hallucinations and costly autonomous errors?",
        a: "We embed strict validation boundaries, confidence scoring gates, human-in-the-loop checkpoints for sensitive actions, and continuous evaluation suites."
      },
      {
        q: "How long does it take to deploy a custom AI agent into production?",
        a: "Most scoped single-purpose agents move from architectural specification to working MVP within 3 to 5 weeks, followed by iterative refinement in staging."
      },
      {
        q: "What is the role of RPA alongside Generative AI?",
        a: "Generative AI handles reasoning, classification, and language interpretation, while RPA provides the mechanical reliability to interact with external software interfaces."
      },
      {
        q: "Do you fine-tune open-source models or use commercial APIs?",
        a: "We evaluate your security, latency, and cost requirements. We deploy open-source models (such as LLaMA or Mistral) on private VPCs, or orchestrate commercial models through secure endpoints."
      },
      {
        q: "How do you measure ROI from an AI automation engagement?",
        a: "We establish upfront operational KPIs: hours saved per process, reduction in exception rates, acceleration of turnaround cycle times, and operational cost savings."
      }
    ],
    cta: {
      titleLine1: "Have an operation",
      titleLine2: "worth automating?",
      subtitle: "Let's build the intelligent systems behind your next stage of efficiency.",
      buttons: [
        { text: "Let's talk", type: "primary" },
        { text: "Explore Zuntra", type: "outline" }
      ]
    }
  },

  'product-engineering': {
    architectureCore: {
      eyebrow: "Architecture",
      title: "Modern product engineering at the core.",
      topNodes: [
        { title: "Interface Layer", desc: "Web Apps · Mobile · Design Systems" },
        { title: "API Gateway", desc: "GraphQL · REST Mesh · Event Broker" },
        { title: "Business Services", desc: "Domain Microservices · Multi-Tenancy" }
      ],
      coreNode: {
        title: "Product Foundation",
        desc: "One connected system"
      },
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
        {
          icon: "grid",
          title: "Universal Component Systems",
          desc: "Design tokens shared seamlessly across web and mobile."
        },
        {
          icon: "branch",
          title: "Event-Driven Microfrontends",
          desc: "Decoupled modular frontends running at high performance."
        },
        {
          icon: "trend",
          title: "Edge Computing & CDN SSR",
          desc: "Sub-second page loads served from the closest edge node."
        },
        {
          icon: "search",
          title: "Automated Test Suites",
          desc: "Zero-regression end-to-end testing embedded in CI/CD."
        },
        {
          icon: "user",
          title: "Multi-Tenant SaaS Architecture",
          desc: "Scalable tenant isolation and flexible permission meshes."
        },
        {
          icon: "chat",
          title: "AI-Assisted User Experiences",
          desc: "Intelligent contextual prompts and predictive interactions."
        },
        {
          icon: "trend",
          title: "Real-Time Websocket Mesh",
          desc: "Instant collaborative multi-user synchronization."
        },
        {
          icon: "cart",
          title: "Cross-Platform Native Apps",
          desc: "Single-codebase iOS and Android apps with 60 FPS fluidity."
        }
      ]
    },
    faqs: [
      {
        q: "What types of digital products does Zuntra build?",
        a: "We engineer multi-tenant SaaS platforms, enterprise portals, cross-platform mobile applications, internal business tools, and developer APIs."
      },
      {
        q: "How does Zuntra handle design systems and UX?",
        a: "We build unified design token architectures in Figma and code, ensuring all UI primitives, typography, accessibility standards, and components remain consistent."
      },
      {
        q: "Can you modernize a legacy codebase without downtime?",
        a: "Yes. We employ the strangler-fig pattern, incrementally extracting legacy monolith services into decoupled microservices or serverless functions."
      },
      {
        q: "What tech stack do you recommend for high-scale products?",
        a: "We tailor stack decisions to technical requirements—typically React, Next.js, TypeScript on the frontend, with Go, Node.js, Python, PostgreSQL, Redis, and Kafka."
      },
      {
        q: "Do you provide automated testing and CI/CD pipelines?",
        a: "Yes. Every product we build includes comprehensive test coverage (unit, integration, E2E with Playwright/Cypress) and automated deployment gates."
      },
      {
        q: "Do you build native or cross-platform mobile apps?",
        a: "We build with React Native and Flutter for single-codebase efficiency, as well as native Swift/Kotlin where hardware-specific performance demands it."
      }
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
    architectureCore: {
      eyebrow: "Architecture",
      title: "Resilient cloud at the core.",
      topNodes: [
        { title: "Data Ingestion", desc: "Streaming Pipelines · CDC · Event Hubs" },
        { title: "Storage & Lakehouse", desc: "Snowflake · BigQuery · S3 Storage" },
        { title: "Compute Clusters", desc: "Kubernetes · Multi-Region Mesh" }
      ],
      coreNode: {
        title: "Cloud Data Core",
        desc: "One connected system"
      },
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
        {
          icon: "grid",
          title: "Zero-Trust Cloud Mesh",
          desc: "Identity-first security perimeter protecting every micro-service."
        },
        {
          icon: "trend",
          title: "Streaming Lakehouse Architecture",
          desc: "Real-time data processing without batch latency."
        },
        {
          icon: "branch",
          title: "Serverless Event Meshes",
          desc: "Instant auto-scaling compute responding directly to traffic spikes."
        },
        {
          icon: "search",
          title: "Automated FinOps Governance",
          desc: "Intelligent instance rightsizing and idle resource termination."
        },
        {
          icon: "user",
          title: "Immutable Infrastructure as Code",
          desc: "Declarative Terraform and GitOps configuration tracking."
        },
        {
          icon: "chat",
          title: "AI-Ready Data Curations",
          desc: "Clean feature stores structured for continuous machine learning."
        },
        {
          icon: "trend",
          title: "Active-Active Multi-Region",
          desc: "Instant disaster recovery failover with zero downtime."
        },
        {
          icon: "cart",
          title: "Automated Compliance Scanning",
          desc: "Real-time continuous audits for SOC2, HIPAA, and ISO 27001."
        }
      ]
    },
    faqs: [
      {
        q: "Which cloud providers does Zuntra support?",
        a: "We architect, migrate, and optimize across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, and hybrid cloud environments."
      },
      {
        q: "How do you ensure zero data loss during cloud migration?",
        a: "We execute phased data replication using Change Data Capture (CDC), run dual-write validation in parallel, and switch DNS only after complete data reconciliation."
      },
      {
        q: "What is your approach to modern data warehousing?",
        a: "We design modern lakehouses using Snowflake, Databricks, or BigQuery, implementing automated ingestion, dbt transformation pipelines, and fine-grained data governance."
      },
      {
        q: "Can you help reduce our monthly cloud bill (FinOps)?",
        a: "Yes. We conduct in-depth compute and storage audits, right-size over-provisioned instances, configure spot/reserved pricing, and eliminate orphaned cloud resources."
      },
      {
        q: "How do you handle cybersecurity and regulatory compliance?",
        a: "We enforce zero-trust security postures, automated secret rotation, immutable audit logging, and continuous compliance posture management for SOC2, HIPAA, and GDPR."
      },
      {
        q: "Do you build real-time event streaming architectures?",
        a: "Yes. We build high-throughput event meshes powered by Apache Kafka, AWS Kinesis, and Flink capable of processing millions of events per second with sub-second latency."
      }
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
  const updateData = updates[item.id];
  if (updateData) {
    Object.assign(item, updateData);
  }
});

const fileOutput = `export const buildData = ${JSON.stringify(buildData, null, 2)};\n`;
fs.writeFileSync(filePath, fileOutput, 'utf8');
console.log('Successfully enriched continuation data in buildData.js!');
