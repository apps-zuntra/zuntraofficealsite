export const subtopicData = {
  "fallback": {
    hero: {
      title: "ZUNTRA BUILDS<br/>PURPOSE-BUILT<br/>SOLUTIONS.",
      desc: "Designed around real business workflows — not demos.<br/>Each solution handles research, task execution, and multi-step operations built around your actual operational logic.",
      buttonText: "TALK TO ZUNTRA &rarr;",
      secondaryButtonText: "EXPLORE OUR APPROACH &rarr;"
    },
    statement: {
      text: "Technology should do more<br/>than answer.",
      subText: "Zuntra designs and builds software tailored to specific business functions — research, task execution, multi-step workflows — rather than generic applications. Each system is built around your actual operational logic, not a generic template."
    },
    featuresGrid: {
      eyebrow: "WHAT WE BUILD",
      title: "Purpose-built solutions<br/>for real workflows.",
      features: [
        { num: "01", title: "Single-purpose task systems", desc: "Systems designed to execute one specific workflow — faster, more reliably, and more consistently than any manual process." },
        { num: "02", title: "Multi-system orchestration", desc: "Coordinated architectures where multiple systems hand off tasks to each other, maintaining context across the full workflow." },
        { num: "03", title: "Integration with existing tools", desc: "Software that connects to your databases, APIs, and internal systems — not isolated applications sitting alongside your real stack." },
        { num: "04", title: "Memory and context persistence", desc: "Architecture that allows systems to retain relevant context across sessions, improving performance over time." },
        { num: "05", title: "Guardrails, evaluation, and monitoring", desc: "Explicit scope boundaries, approval checkpoints, and real-time monitoring built into the system from day one." },
        { num: "06", title: "Ongoing tuning as workflows evolve", desc: "Systems that adapt as your processes change — not one-time deployments that degrade without maintenance." }
      ]
    },
    architecture: {
      title: "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      desc: "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      diagram: {
        node1: "BUSINESS CONTEXT",
        node2: "DATA",
        node3: "LOGIC ENGINES",
        node4: "MEMORY",
        node5: "TOOLS",
        node6: "KNOWLEDGE",
        node7: "SYSTEM",
        node8: "ORCHESTRATION",
        node9: "GUARDRAILS",
        node10: "HUMAN REVIEW"
      }
    },
    coreValues: {
      eyebrow: "HOW ZUNTRA APPROACHES IT",
      title: "We start with the work —<br/>not the software.",
      desc: "Zuntra starts by mapping the actual decision points and handoffs in the workflow you want automated, then designs the architecture around that.",
      values: [
        { num: "01", title: "MAP", desc: "Map the actual workflow and identify where automation creates real value.", color: "gray" },
        { num: "02", title: "DESIGN", desc: "Define decision points, edge cases, and handoffs the system must navigate.", color: "gray" },
        { num: "03", title: "BUILD", desc: "Build the architecture around your operational logic, not generic templates.", color: "gray" },
        { num: "04", title: "CONNECT", desc: "Connect to existing tools, databases, and APIs as a core part of the build.", color: "gray" },
        { num: "05", title: "EVALUATE", desc: "Define success metrics upfront and build evaluation into the system from day one.", color: "gray" },
        { num: "06", title: "EVOLVE", desc: "Tune the system as workflows change — deployment is the beginning, not the end.", color: "gray" }
      ]
    },
    // The following are sections 6-12 (kept from before, as no new screenshots were provided for them)
    complexity: {
      eyebrow: "WORKFLOW AUTOMATION",
      title: "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      items: [
        { title: "Clinical Triage", desc: "Routing patient inquiries to the right department based on urgency and symptom analysis." },
        { title: "Prior Auth", desc: "Compiling medical records and submitting structured requests to insurance providers." },
        { title: "Care Navigation", desc: "Guiding patients through complex treatment plans, appointments, and follow-ups." },
        { title: "Revenue Cycle", desc: "Automating claims processing, denial management, and billing reconciliation." }
      ]
    },
    successMetrics: {
      eyebrow: "PERFORMANCE",
      title: "DEFINE SUCCESS<br/>BEFORE WE<br/>START<br/>BUILDING.",
      desc: "We establish clear KPIs for every system we deploy, ensuring they deliver measurable ROI from day one.",
      metrics: [
        { label: "Accuracy", value: "99.9%", fill: "99.9%", color: "purple", desc: "Reduction in manual data entry errors." },
        { label: "Speed", value: "10x", fill: "85%", color: "blue", desc: "Faster resolution for standard patient inquiries." },
        { label: "Capacity", value: "+40%", fill: "60%", color: "green", desc: "Increase in provider capacity due to reduced admin burden." }
      ]
    },
    orchestration: {
      title: "ONE MODULE OR AN<br/>ORCHESTRATED<br/>SYSTEM.",
      desc: "Deploy a single module for a specific task, or orchestrate a multi-system architecture where specialized platforms collaborate.",
      buttonText: "Explore Architecture",
      mockup: {
        headerTag: "ROUTER SYSTEM",
        desc: "Evaluates incoming request and routes to the appropriate specialist system based on intent and required tools.",
        branches: [
          { num: "01", tag: "CLINICAL", color: "purple" },
          { num: "02", tag: "BILLING", color: "blue" },
          { num: "03", tag: "SCHEDULING", color: "green" }
        ]
      }
    },
    evolution: {
      eyebrow: "CONTINUOUS LEARNING",
      title: "WORKFLOWS<br/>CHANGE.<br/>SYSTEMS<br/>EVOLVE<br/>WITH THEM.",
      desc: "Our CI/CD pipelines ensure your systems learn from feedback, adapt to new rules, and improve their accuracy over time.",
      stats: [
        { value: "94%", label: "First-pass resolution" },
        { value: "2.4s", label: "Avg response time" },
        { value: "8M+", label: "API calls per month" },
        { value: "0.1%", label: "Escalation rate" }
      ]
    },
    rolesTable: {
      eyebrow: "SPECIALIZED MODULES",
      title: "SYSTEMS THAT MOVE<br/>WORK ACROSS<br/>THE ORGANIZATION.",
      desc: "Different tasks require different logic, integrations, and access. We build specialized modules for specific operational domains.",
      roles: [
        { title: "Triage", status: "Active", dotColor: "blue", desc: "Routes incoming patient inquiries to the correct department." },
        { title: "Copilot", status: "Beta", dotColor: "orange", desc: "Assists providers with chart summaries and draft notes." },
        { title: "Navigator", status: "Live", dotColor: "green", desc: "Guides patients through care plans and books appointments." },
        { title: "Coder", status: "Training", dotColor: "purple", desc: "Translates clinical notes into standard medical codes for billing." }
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "QUESTIONS,<br/>ANSWERED.",
      questions: [
        "What technology stack do you use?",
        "Are these systems HIPAA compliant?",
        "How long does a solution take to deploy?",
        "Can systems connect to our existing EHR?",
        "What happens if there is an error?"
      ]
    },
    cta: {
      title: "READY TO BUILD A<br/>SOLUTION FOR YOUR<br/>WORKFLOW?",
      buttonText: "Let's Talk"
    }
  },
  "custom-ai-agent-development": {
    "hero": {
      "title": "ZUNTRA builds purpose-built AI agents that handle real work — not demos.",
      "desc": "ZUNTRA designs and builds AI agents tailored to specific business functions — research, task execution, multi-step workflows — rather than generic assistants. Each agent is built around your actual operational logic.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA designs and builds AI agents tailored to specific business functions — research, task execution, multi-step workflows — rather than generic assistants. Each agent is built around your actual operational logic."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Single-purpose task agents",
          "desc": "Designed to execute one specific workflow with high precision, speed, and consistency."
        },
        {
          "num": "02",
          "title": "Multi-agent orchestration",
          "desc": "Coordinated architectures where multiple specialized agents hand off tasks and preserve context."
        },
        {
          "num": "03",
          "title": "Integration with existing tools and data sources",
          "desc": "Seamless connections to your enterprise databases, APIs, CRM, and internal software."
        },
        {
          "num": "04",
          "title": "Agent memory and context persistence design",
          "desc": "Stateful architecture that retains relevant context across sessions for continuous improvement."
        },
        {
          "num": "05",
          "title": "Guardrails, evaluation, and monitoring",
          "desc": "Explicit scope boundaries, approval checkpoints, and real-time monitoring built in from day one."
        },
        {
          "num": "06",
          "title": "Ongoing tuning as workflows evolve",
          "desc": "Adaptive maintenance and periodic tuning to ensure agents evolve alongside your business processes."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts by mapping the actual decision points and handoffs in the workflow you want automated, then design the agent architecture around that.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Automating financial research, compliance checks, fraud triage, and trading analysis workflows."
        },
        {
          "title": "Healthcare",
          "desc": "Clinical document synthesis, patient triage routing, prior authorization, and administrative support."
        },
        {
          "title": "Enterprise Technology",
          "desc": "DevOps automation, IT incident remediation, log intelligence, and internal helpdesk agents."
        },
        {
          "title": "Innovation Ecosystems",
          "desc": "Venture screening, portfolio intelligence, cohort matchmaking, and research synthesis."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between an AI agent and a chatbot?",
        "a": "At ZUNTRA, a chatbot responds to queries; an agent takes actions — it can retrieve data, make decisions within defined boundaries, and complete multi-step tasks."
      },
      {
        "q": "Do you build single agents or multi-agent systems?",
        "a": "Both — depending on the complexity of the workflow, ZUNTRA designs either a single-purpose agent or an orchestrated system of agents."
      },
      {
        "q": "How long does it take to build a custom AI agent?",
        "a": "At ZUNTRA, most single-purpose agents move from design to working prototype within a few weeks, with iteration after that."
      },
      {
        "q": "Can an AI agent integrate with our existing software?",
        "a": "At ZUNTRA, yes — agent integration with your existing tools, databases, and APIs is a core part of the build."
      },
      {
        "q": "How do you prevent an AI agent from making costly mistakes?",
        "a": "ZUNTRA designs explicit guardrails and approval checkpoints for high-stakes actions, and build in monitoring."
      },
      {
        "q": "What happens if the agent encounters something it wasn't trained for?",
        "a": "At ZUNTRA, agents are designed to recognize the edge of their scope and escalate to a human rather than guess."
      },
      {
        "q": "Do AI agents require ongoing maintenance?",
        "a": "At ZUNTRA, yes — workflows change, and agents need periodic tuning as your processes evolve."
      },
      {
        "q": "Can agents work across multiple departments or just one function?",
        "a": "At ZUNTRA, agents can be scoped narrowly or orchestrated to hand off work across departments."
      },
      {
        "q": "How do you measure whether an agent is performing well?",
        "a": "ZUNTRA defines success metrics upfront — completion rate, accuracy, time saved — and build evaluation in from day one."
      },
      {
        "q": "What industries benefit most from custom AI agents?",
        "a": "At ZUNTRA, research-heavy fields, financial operations, healthcare administration, and enterprise IT are common starting points."
      }
    ],
    "cta": {
      "title": "Ready to build an AI agent for your workflow?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "rpa-workflow-automation-bpm": {
    "hero": {
      "title": "ZUNTRA automates the repetitive work so your team can focus on what actually needs judgment.",
      "desc": "ZUNTRA builds automation for rule-based, repetitive processes — data entry, approvals, document routing, reconciliation — combining RPA with business process management.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds automation for rule-based, repetitive processes — data entry, approvals, document routing, reconciliation — combining RPA with business process management."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Process mapping and automation assessment",
          "desc": "Audit existing manual processes to identify high-ROI workflows suitable for robotic automation."
        },
        {
          "num": "02",
          "title": "Bot development for repetitive tasks",
          "desc": "Custom bots built to handle data entry, reconciliation, routine reporting, and structured extraction."
        },
        {
          "num": "03",
          "title": "Workflow orchestration across systems",
          "desc": "End-to-end business process management connecting legacy software, modern apps, and cloud tools."
        },
        {
          "num": "04",
          "title": "Exception handling and escalation",
          "desc": "Automated routing of edge cases to human reviewers with clear error flagging and logs."
        },
        {
          "num": "05",
          "title": "Integration with existing software",
          "desc": "Non-invasive automation across legacy ERPs, internal portals, mainframes, and modern APIs."
        },
        {
          "num": "06",
          "title": "Performance monitoring and optimization",
          "desc": "Continuous telemetry tracking bot execution volume, cycle times, throughput, and exception rates."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with a process audit to identify which workflows are genuinely automatable, then build automation that handles those cleanly.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Government",
          "desc": "Citizen services, license renewals, public document indexing, and regulatory compliance processing."
        },
        {
          "title": "Healthcare",
          "desc": "Claims processing, patient record reconciliation, billing audit automation, and appointment routing."
        },
        {
          "title": "Manufacturing",
          "desc": "Inventory reconciliation, purchase order processing, vendor management, and supply chain updates."
        },
        {
          "title": "Logistics",
          "desc": "Shipment tracking, customs documentation filing, bill of lading parsing, and dispatch coordination."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between RPA and BPM?",
        "a": "RPA automates individual tasks; BPM manages the broader process — ZUNTRA typicallies combine both."
      },
      {
        "q": "What kinds of tasks are good candidates for automation?",
        "a": "At ZUNTRA, high-volume, rule-based, repetitive tasks are strong candidates; judgment-call tasks are not."
      },
      {
        "q": "Will automation replace our staff?",
        "a": "At ZUNTRA, it typically shifts staff toward higher-judgment work rather than eliminating roles outright."
      },
      {
        "q": "How do you handle exceptions the bot can't process?",
        "a": "At ZUNTRA, exceptions are routed to a human reviewer automatically, with the bot flagging what it couldn't resolve."
      },
      {
        "q": "Can RPA work across multiple software systems?",
        "a": "At ZUNTRA, yes — bots can work across different applications and interfaces, even ones that don't natively integrate."
      },
      {
        "q": "How long does it take to automate a process?",
        "a": "At ZUNTRA, simple processes can be automated in weeks; complex multi-system workflows take longer."
      },
      {
        "q": "What happens if our underlying software changes?",
        "a": "At ZUNTRA, bots need updating when interfaces change — part of ongoing maintenance."
      },
      {
        "q": "Do you provide monitoring after deployment?",
        "a": "Yes — ZUNTRA sets up performance monitoring for automation volume and exception rates."
      },
      {
        "q": "Is RPA secure enough for sensitive data?",
        "a": "At ZUNTRA, yes, when properly configured — access controls and audit trails are built in."
      },
      {
        "q": "How do we know which processes to automate first?",
        "a": "ZUNTRA runs a process audit that scores candidates by volume, clarity, and business impact."
      }
    ],
    "cta": {
      "title": "Ready to automate a workflow?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "rpa-workflow-automation": {
    "hero": {
      "title": "ZUNTRA automates the repetitive work so your team can focus on what actually needs judgment.",
      "desc": "ZUNTRA builds automation for rule-based, repetitive processes — data entry, approvals, document routing, reconciliation — combining RPA with business process management.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds automation for rule-based, repetitive processes — data entry, approvals, document routing, reconciliation — combining RPA with business process management."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Process mapping and automation assessment",
          "desc": "Audit existing manual processes to identify high-ROI workflows suitable for robotic automation."
        },
        {
          "num": "02",
          "title": "Bot development for repetitive tasks",
          "desc": "Custom bots built to handle data entry, reconciliation, routine reporting, and structured extraction."
        },
        {
          "num": "03",
          "title": "Workflow orchestration across systems",
          "desc": "End-to-end business process management connecting legacy software, modern apps, and cloud tools."
        },
        {
          "num": "04",
          "title": "Exception handling and escalation",
          "desc": "Automated routing of edge cases to human reviewers with clear error flagging and logs."
        },
        {
          "num": "05",
          "title": "Integration with existing software",
          "desc": "Non-invasive automation across legacy ERPs, internal portals, mainframes, and modern APIs."
        },
        {
          "num": "06",
          "title": "Performance monitoring and optimization",
          "desc": "Continuous telemetry tracking bot execution volume, cycle times, throughput, and exception rates."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with a process audit to identify which workflows are genuinely automatable, then build automation that handles those cleanly.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Government",
          "desc": "Citizen services, license renewals, public document indexing, and regulatory compliance processing."
        },
        {
          "title": "Healthcare",
          "desc": "Claims processing, patient record reconciliation, billing audit automation, and appointment routing."
        },
        {
          "title": "Manufacturing",
          "desc": "Inventory reconciliation, purchase order processing, vendor management, and supply chain updates."
        },
        {
          "title": "Logistics",
          "desc": "Shipment tracking, customs documentation filing, bill of lading parsing, and dispatch coordination."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between RPA and BPM?",
        "a": "RPA automates individual tasks; BPM manages the broader process — ZUNTRA typicallies combine both."
      },
      {
        "q": "What kinds of tasks are good candidates for automation?",
        "a": "At ZUNTRA, high-volume, rule-based, repetitive tasks are strong candidates; judgment-call tasks are not."
      },
      {
        "q": "Will automation replace our staff?",
        "a": "At ZUNTRA, it typically shifts staff toward higher-judgment work rather than eliminating roles outright."
      },
      {
        "q": "How do you handle exceptions the bot can't process?",
        "a": "At ZUNTRA, exceptions are routed to a human reviewer automatically, with the bot flagging what it couldn't resolve."
      },
      {
        "q": "Can RPA work across multiple software systems?",
        "a": "At ZUNTRA, yes — bots can work across different applications and interfaces, even ones that don't natively integrate."
      },
      {
        "q": "How long does it take to automate a process?",
        "a": "At ZUNTRA, simple processes can be automated in weeks; complex multi-system workflows take longer."
      },
      {
        "q": "What happens if our underlying software changes?",
        "a": "At ZUNTRA, bots need updating when interfaces change — part of ongoing maintenance."
      },
      {
        "q": "Do you provide monitoring after deployment?",
        "a": "Yes — ZUNTRA sets up performance monitoring for automation volume and exception rates."
      },
      {
        "q": "Is RPA secure enough for sensitive data?",
        "a": "At ZUNTRA, yes, when properly configured — access controls and audit trails are built in."
      },
      {
        "q": "How do we know which processes to automate first?",
        "a": "ZUNTRA runs a process audit that scores candidates by volume, clarity, and business impact."
      }
    ],
    "cta": {
      "title": "Ready to automate a workflow?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "ai-model-integration-mlops": {
    "hero": {
      "title": "ZUNTRA gets AI models into production, and keep them working once they're there.",
      "desc": "ZUNTRA integrates AI and machine learning models into your existing systems, and build the MLOps infrastructure to monitor, retrain, and maintain those models reliably.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA integrates AI and machine learning models into your existing systems, and build the MLOps infrastructure to monitor, retrain, and maintain those models reliably."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Model integration into applications",
          "desc": "Embedding trained predictive, generative, or classification models into production application pipelines."
        },
        {
          "num": "02",
          "title": "MLOps pipeline setup",
          "desc": "Automated CI/CD pipelines for ML models with versioning, artifact registries, and test suites."
        },
        {
          "num": "03",
          "title": "Performance monitoring and drift detection",
          "desc": "Real-time telemetry tracking prediction latency, data drift, concept drift, and accuracy decay."
        },
        {
          "num": "04",
          "title": "Retraining pipelines",
          "desc": "Scheduled and triggered pipelines that automatically ingest new ground truth data and retrain models."
        },
        {
          "num": "05",
          "title": "Model serving infrastructure",
          "desc": "Scalable containerized serving endpoints utilizing Triton, FastAPI, or cloud-managed GPU/CPU clusters."
        },
        {
          "num": "06",
          "title": "Third-party model API integration",
          "desc": "Enterprise integration and optimization for external foundation models like GPT, Claude, and Gemini."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA treats model deployment as the start, not the finish, building monitoring and retraining pipelines alongside the initial integration.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Embedding machine learning into enterprise software products, devtools, and internal infrastructure."
        },
        {
          "title": "Financial Services",
          "desc": "Real-time credit scoring, algorithmic risk management, fraud scoring, and portfolio optimization."
        },
        {
          "title": "Healthcare",
          "desc": "Diagnostic assistance models, clinical workflow prediction, patient length-of-stay forecasting, and lab analytics."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's MLOps and why does it matter?",
        "a": "At ZUNTRA, mLOps manages ML models in production — versioning, monitoring, retraining — the same way DevOps manages software."
      },
      {
        "q": "Can you integrate third-party AI models like GPT or Claude?",
        "a": "At ZUNTRA, yes — integrating external model APIs into your systems is a core part of this service."
      },
      {
        "q": "Do you build custom models or use existing ones?",
        "a": "Both, depending on the use case — ZUNTRA assesses this case by case."
      },
      {
        "q": "How do you know if a model's performance is degrading?",
        "a": "ZUNTRA sets up drift detection that flags when output quality shifts from baseline."
      },
      {
        "q": "What happens when a model needs retraining?",
        "a": "ZUNTRA builds retraining pipelines triggered on a schedule or by performance monitoring."
      },
      {
        "q": "How do you handle scaling if usage grows?",
        "a": "At ZUNTRA, model serving infrastructure is designed with scale in mind from the start."
      },
      {
        "q": "Is our data secure when integrating with third-party models?",
        "a": "At ZUNTRA, data handling is designed to align with your compliance requirements."
      },
      {
        "q": "Can you integrate AI models with legacy systems?",
        "a": "Yes — this is one of the more common integration challenges ZUNTRA handles."
      },
      {
        "q": "How much ongoing maintenance does a deployed model need?",
        "a": "At ZUNTRA, monitoring and periodic retraining are standard parts of keeping a model reliable."
      },
      {
        "q": "What's the biggest mistake companies make deploying AI models?",
        "a": "At ZUNTRA, treating deployment as the finish line rather than the start."
      }
    ],
    "cta": {
      "title": "Ready to deploy an AI model reliably?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "generative-ai-content-knowledge-tooling": {
    "hero": {
      "title": "ZUNTRA turns your organization's knowledge into something your team can actually query and use.",
      "desc": "ZUNTRA builds generative AI tools for content creation and knowledge management — from internal knowledge bases to content generation tools tailored to your brand.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds generative AI tools for content creation and knowledge management — from internal knowledge bases to content generation tools tailored to your brand."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Internal knowledge base / Q&A tooling (RAG)",
          "desc": "Retrieval-augmented generation grounding AI answers in your verified internal documentation."
        },
        {
          "num": "02",
          "title": "Content generation tools",
          "desc": "Tailored generative interfaces that produce on-brand documentation, marketing collateral, and proposals."
        },
        {
          "num": "03",
          "title": "Document summarization",
          "desc": "Automated multi-page document synthesis extracting core findings, key takeaways, and action items."
        },
        {
          "num": "04",
          "title": "Search and retrieval systems",
          "desc": "Semantic vector search that understands intent and context beyond simple keyword matching."
        },
        {
          "num": "05",
          "title": "Content workflow integration",
          "desc": "Plugging generation directly into Slack, Notion, CMS, Google Workspace, and Microsoft 365."
        },
        {
          "num": "06",
          "title": "Custom prompt engineering",
          "desc": "Systematic prompt architecture, few-shot templates, and evaluation benchmarks for consistent output."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds knowledge tooling around your actual content and terminology, grounding outputs in your real documents.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Media",
          "desc": "Automating draft generation, article research synthesis, metadata tagging, and multimedia script drafting."
        },
        {
          "title": "Education",
          "desc": "Course content generation, interactive tutoring assistants, curriculum mapping, and student Q&A tools."
        },
        {
          "title": "Museums and Culture",
          "desc": "Exhibition narrative writing, archive exploration tools, visitor guide assistants, and artifact cataloging."
        },
        {
          "title": "Enterprise Technology",
          "desc": "Engineering documentation generation, customer support response drafting, and API guide synthesis."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's a RAG-based knowledge system?",
        "a": "At ZUNTRA, retrieval-augmented generation grounds AI responses in your actual documents rather than general training alone."
      },
      {
        "q": "Can this replace our internal wiki?",
        "a": "At ZUNTRA, it can sit on top of existing documentation, making it searchable in natural language."
      },
      {
        "q": "How do you keep the AI from generating inaccurate information?",
        "a": "At ZUNTRA, grounding responses in retrieved documents reduces this risk, with source-referencing built in."
      },
      {
        "q": "Can content generation tools match our brand voice?",
        "a": "At ZUNTRA, yes — tools are tuned using your existing content and style guidelines."
      },
      {
        "q": "What kinds of content can this generate?",
        "a": "At ZUNTRA, marketing copy, internal documentation, summaries, reports — tailored to your workflow."
      },
      {
        "q": "How does this handle sensitive documents?",
        "a": "At ZUNTRA, access controls are built in so sensitive information is only surfaced to authorized users."
      },
      {
        "q": "Do employees need training to use these tools?",
        "a": "At ZUNTRA, most tools use natural-language interfaces, minimizing the learning curve."
      },
      {
        "q": "Can this integrate with tools we already use?",
        "a": "At ZUNTRA, yes — integration with communication and content platforms is standard."
      },
      {
        "q": "How do you handle updates when documents change?",
        "a": "At ZUNTRA, the knowledge base is designed to be refreshed or synced as source documents update."
      },
      {
        "q": "Is this only useful for large organizations?",
        "a": "At ZUNTRA, it scales to organization size — smaller teams often see faster ROI."
      }
    ],
    "cta": {
      "title": "Ready to put your knowledge to work?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "ai-powered-bi-analytics-dashboards": {
    "hero": {
      "title": "ZUNTRA turns raw data into decisions your team can act on, not just charts to look at.",
      "desc": "ZUNTRA builds business intelligence dashboards powered by AI — surfacing metrics that matter and flagging anomalies automatically.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds business intelligence dashboards powered by AI — surfacing metrics that matter and flagging anomalies automatically."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Custom dashboard design",
          "desc": "Tailored executive and operational interfaces built around specific business decisions and KPIs."
        },
        {
          "num": "02",
          "title": "AI-driven anomaly detection",
          "desc": "Automated statistical algorithms that alert teams to sudden shifts, outliers, and trend reversals."
        },
        {
          "num": "03",
          "title": "Multi-source data integration",
          "desc": "Consolidating data from ERPs, CRMs, marketing platforms, cloud databases, and external APIs."
        },
        {
          "num": "04",
          "title": "Automated reporting",
          "desc": "Scheduled and event-driven report generation delivering synthesized executive summaries directly to inboxes."
        },
        {
          "num": "05",
          "title": "Role-based access",
          "desc": "Granular permissions and data governance ensuring stakeholders only view data relevant to their role."
        },
        {
          "num": "06",
          "title": "Natural-language querying",
          "desc": "Text-to-SQL capabilities allowing non-technical leaders to ask complex business questions in plain English."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with the decisions your team actually needs to make, then design dashboards around those.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Portfolio performance tracking, capital allocation modeling, liquidity monitoring, and compliance metrics."
        },
        {
          "title": "Retail",
          "desc": "Omnichannel sales analysis, inventory velocity tracking, customer lifetime value, and promotional efficacy."
        },
        {
          "title": "Energy",
          "desc": "Consumption forecasting, grid asset performance monitoring, emission tracking, and price arbitrage analytics."
        },
        {
          "title": "Enterprise Technology",
          "desc": "SaaS metrics tracking (ARR, churn, CAC, LTV), infrastructure cost monitoring, and product telemetry."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "How is an AI-powered dashboard different from standard BI?",
        "a": "At ZUNTRA, aI-powered ones can flag anomalies and answer natural-language questions without manual digging."
      },
      {
        "q": "Can dashboards pull data from multiple systems?",
        "a": "At ZUNTRA, yes — integrating data from various sources into a unified view is core to the build."
      },
      {
        "q": "Do we need a data team to maintain this?",
        "a": "At ZUNTRA, dashboards are built to be self-service, though pipeline maintenance benefits from technical ownership."
      },
      {
        "q": "How quickly can anomalies be detected?",
        "a": "At ZUNTRA, anomaly detection can run near real-time or on scheduled intervals depending on configuration."
      },
      {
        "q": "Can non-technical staff query the data directly?",
        "a": "At ZUNTRA, yes — natural-language querying lets team members ask questions without SQL."
      },
      {
        "q": "How customizable are dashboards to our specific KPIs?",
        "a": "At ZUNTRA, fully customizable around your metrics rather than generic templates."
      },
      {
        "q": "What happens if data sources change or grow?",
        "a": "At ZUNTRA, the integration accommodates new data sources as your business evolves."
      },
      {
        "q": "Can different teams see different views?",
        "a": "At ZUNTRA, yes — role-based access lets teams see relevant views only."
      },
      {
        "q": "How do you ensure data accuracy?",
        "a": "At ZUNTRA, validation and integrity checks are built into the feeding pipeline."
      },
      {
        "q": "Is this suitable for small businesses?",
        "a": "At ZUNTRA, it scales to business size — smaller teams often benefit from simpler dashboards."
      }
    ],
    "cta": {
      "title": "Ready for a dashboard your team will actually use?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "predictive-analytics-forecasting": {
    "hero": {
      "title": "ZUNTRA helps you know what's likely to happen next, not just what already did.",
      "desc": "ZUNTRA builds predictive models that forecast demand, risk, churn, and other outcomes using historical data.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds predictive models that forecast demand, risk, churn, and other outcomes using historical data."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Demand and revenue forecasting",
          "desc": "Machine learning models predicting future sales volume, customer demand, and revenue cycles."
        },
        {
          "num": "02",
          "title": "Churn and retention prediction",
          "desc": "Early-warning scoring identifying at-risk accounts before cancellations occur."
        },
        {
          "num": "03",
          "title": "Risk and trend forecasting",
          "desc": "Multivariate time-series models projecting operational, market, and credit risk exposures."
        },
        {
          "num": "04",
          "title": "Scenario modeling",
          "desc": "Interactive simulation tools allowing leaders to model 'what-if' business and economic scenarios."
        },
        {
          "num": "05",
          "title": "Model validation and accuracy tracking",
          "desc": "Backtesting against historical data and continuous evaluation against realized outcomes."
        },
        {
          "num": "06",
          "title": "Integration into planning workflows",
          "desc": "Feeding predictions directly into ERP, procurement, financial planning, and staffing systems."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds models around the specific outcome you're predicting, validating against historical accuracy before deployment.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Logistics",
          "desc": "Route demand forecasting, warehouse capacity planning, freight rate projections, and fuel cost modeling."
        },
        {
          "title": "Manufacturing",
          "desc": "Preventative maintenance scheduling, component demand forecasting, and yield optimization."
        },
        {
          "title": "Energy",
          "desc": "Load demand prediction, peak consumption modeling, renewable generation output, and grid stress forecasting."
        },
        {
          "title": "Retail",
          "desc": "Seasonal inventory demand forecasting, store foot traffic modeling, and promotion sensitivity analysis."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "How accurate are predictive models typically?",
        "a": "ZUNTRA validates model performance against historical data and communicate confidence levels rather than certainties."
      },
      {
        "q": "What data do you need to build a forecasting model?",
        "a": "At ZUNTRA, historical data relevant to the outcome — sales history, past behavior, and so on."
      },
      {
        "q": "Can models account for unusual events or disruptions?",
        "a": "At ZUNTRA, models can flag deviation from historical patterns, though novel disruptions are harder to predict."
      },
      {
        "q": "How often do forecasting models need updating?",
        "a": "At ZUNTRA, retraining is built into the process rather than treating it as a one-time build."
      },
      {
        "q": "Can we run different scenarios through the model?",
        "a": "At ZUNTRA, yes — scenario modeling lets you test assumptions and see projected outcomes."
      },
      {
        "q": "How is this different from traditional statistical forecasting?",
        "a": "At ZUNTRA, aI-driven models capture more complex, non-linear patterns."
      },
      {
        "q": "Can forecasts integrate with our planning tools?",
        "a": "At ZUNTRA, yes — integrating outputs into existing workflows is part of the build."
      },
      {
        "q": "What happens if the forecast turns out to be wrong?",
        "a": "ZUNTRA tracks accuracy over time and use results to refine and retrain."
      },
      {
        "q": "Do you forecast financial metrics, or also operational ones?",
        "a": "At ZUNTRA, both — revenue forecasting as well as inventory or staffing needs."
      },
      {
        "q": "How long does it take to build a working model?",
        "a": "At ZUNTRA, an initial model is typically achievable within several weeks."
      }
    ],
    "cta": {
      "title": "Ready to forecast with confidence?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "ai-driven-recommendation-engines": {
    "hero": {
      "title": "ZUNTRA helps you show the right thing to the right person, automatically.",
      "desc": "ZUNTRA builds recommendation systems that personalize what users see based on behavior and preference data.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds recommendation systems that personalize what users see based on behavior and preference data."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Product and content recommendations",
          "desc": "Deep learning algorithms suggesting relevant products, courses, articles, or services."
        },
        {
          "num": "02",
          "title": "Behavior-based personalization",
          "desc": "Dynamic tailoring based on real-time browsing paths, clickstreams, and dwell time."
        },
        {
          "num": "03",
          "title": "Collaborative and content-based filtering",
          "desc": "Hybrid recommendation architectures combining peer similarity and item feature attributes."
        },
        {
          "num": "04",
          "title": "A/B testing infrastructure",
          "desc": "Built-in multi-armed bandit testing to validate algorithmic variations against conversion lift."
        },
        {
          "num": "05",
          "title": "Platform integration",
          "desc": "Low-latency APIs easily embedded into web stores, mobile apps, email engines, and portals."
        },
        {
          "num": "06",
          "title": "Real-time recommendation updates",
          "desc": "Streaming updates recalculating recommendations within milliseconds of user actions."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds recommendation logic around your actual user data and business goals, with testing infrastructure to measure results.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "Product cross-sell, up-sell, personalized homepages, and cart recommendation widgets."
        },
        {
          "title": "Media",
          "desc": "Personalized news feeds, video streaming suggestions, curated playlists, and newsletter items."
        },
        {
          "title": "Education",
          "desc": "Adaptive learning paths, recommended coursework, study material suggestions, and mentor matching."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What data is needed to build a recommendation engine?",
        "a": "At ZUNTRA, user behavior data — browsing, purchase history, engagement patterns."
      },
      {
        "q": "How is this different from a basic 'customers also bought' feature?",
        "a": "At ZUNTRA, aI-driven systems incorporate many more signals for more accurate personalization."
      },
      {
        "q": "Can recommendations update in real time?",
        "a": "At ZUNTRA, yes — real-time updates based on live activity are part of the design."
      },
      {
        "q": "How do you measure whether recommendations are working?",
        "a": "ZUNTRA builds in A/B testing to compare strategies against conversion metrics."
      },
      {
        "q": "Does this work for content platforms, not just e-commerce?",
        "a": "At ZUNTRA, yes — the same approach applies to article, video, or course recommendations."
      },
      {
        "q": "What happens with new users with no history?",
        "a": "At ZUNTRA, cold-start strategies using demographic or onboarding data are built in."
      },
      {
        "q": "Can this integrate with our existing platform?",
        "a": "At ZUNTRA, yes — integration into your existing platform is part of implementation."
      },
      {
        "q": "How much does personalization improve conversion?",
        "a": "Impact varies, but results are measured through the testing infrastructure ZUNTRA sets up."
      },
      {
        "q": "Is user data kept private and secure?",
        "a": "At ZUNTRA, data handling is designed around your privacy requirements."
      },
      {
        "q": "How long until we see results after launch?",
        "a": "At ZUNTRA, initial performance is visible quickly, with optimization over following weeks."
      }
    ],
    "cta": {
      "title": "Ready to personalize at scale?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "ai-powered-fraud-detection-risk-scoring": {
    "hero": {
      "title": "ZUNTRA helps you catch risk before it becomes a loss.",
      "desc": "ZUNTRA builds fraud detection and risk scoring systems that flag suspicious activity in real time.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds fraud detection and risk scoring systems that flag suspicious activity in real time."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Real-time transaction monitoring",
          "desc": "Millisecond-level risk scoring on incoming payments, transfers, and account interactions."
        },
        {
          "num": "02",
          "title": "Custom risk scoring models",
          "desc": "Supervised and unsupervised models trained specifically on your historic loss and attack patterns."
        },
        {
          "num": "03",
          "title": "Anomaly detection",
          "desc": "Behavioral profiling flagging abnormal IP clusters, device spoofing, velocity surges, and geographical jumps."
        },
        {
          "num": "04",
          "title": "Underwriting and claims risk tooling",
          "desc": "Automated risk assessment for loan applications, credit issuance, and insurance claim filings."
        },
        {
          "num": "05",
          "title": "False-positive reduction",
          "desc": "Precision tuning to minimize customer friction and prevent erroneous account lockouts."
        },
        {
          "num": "06",
          "title": "Compliance workflow integration",
          "desc": "Seamless integration with AML, KYC, SAR reporting, and compliance audit logging."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds risk models around your specific fraud patterns, tuning carefully to minimize false positives.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Payment fraud, credit card takeover, money laundering prevention, and lending default scoring."
        },
        {
          "title": "Retail",
          "desc": "Card-not-present fraud, promotion abuse, account hijacking, and return policy fraud."
        },
        {
          "title": "Government",
          "desc": "Tax refund fraud, unemployment benefits abuse, vendor contract vetting, and identity theft prevention."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "How does AI fraud detection differ from rule-based systems?",
        "a": "At ZUNTRA, aI models identify subtler, evolving patterns that static rules miss."
      },
      {
        "q": "What's a false positive and why does it matter?",
        "a": "At ZUNTRA, legitimate activity flagged as fraudulent — too many erode trust, so tuning is core to the build."
      },
      {
        "q": "Can this be used for insurance underwriting and claims?",
        "a": "At ZUNTRA, yes — the same risk-scoring approach applies to underwriting and claims fraud."
      },
      {
        "q": "How quickly can suspicious activity be flagged?",
        "a": "At ZUNTRA, systems are typically designed for real-time or near-real-time flagging."
      },
      {
        "q": "Does this replace human review entirely?",
        "a": "At ZUNTRA, no — it prioritizes and flags activity for human review on ambiguous cases."
      },
      {
        "q": "How does the model learn what counts as fraud for our business?",
        "a": "At ZUNTRA, models are trained on your historical transaction and fraud data."
      },
      {
        "q": "Can fraud patterns change over time, and does the model keep up?",
        "a": "At ZUNTRA, yes — ongoing monitoring and retraining are part of maintaining the system."
      },
      {
        "q": "How does this integrate with our compliance processes?",
        "a": "At ZUNTRA, integration with existing review workflows is part of implementation."
      },
      {
        "q": "Is this compliant with financial services regulations?",
        "a": "At ZUNTRA, systems are designed with your regulatory requirements in mind, reviewed with your compliance team."
      },
      {
        "q": "What industries benefit most from this service?",
        "a": "At ZUNTRA, financial services and insurance most commonly, but any industry handling transactions at volume."
      }
    ],
    "cta": {
      "title": "Ready to reduce fraud losses?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "enterprise-chatbot-conversational-ai": {
    "hero": {
      "title": "ZUNTRA handles the conversations that don't need a human, so your team can focus on the ones that do.",
      "desc": "ZUNTRA builds conversational AI systems tailored to your business — customer support, internal helpdesk, visitor engagement.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds conversational AI systems tailored to your business — customer support, internal helpdesk, visitor engagement."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Custom chatbot design",
          "desc": "Tailored conversation personalities, intent maps, and structured dialogue trees."
        },
        {
          "num": "02",
          "title": "Knowledge base integration",
          "desc": "Real-time retrieval from knowledge documents, product guides, FAQs, and ticket archives."
        },
        {
          "num": "03",
          "title": "Multi-turn conversation handling",
          "desc": "Context-aware dialog managers that track state and parameters across extended discussions."
        },
        {
          "num": "04",
          "title": "Escalation logic",
          "desc": "Seamless handoff to live agents with complete chat summary, sentiment, and user metadata."
        },
        {
          "num": "05",
          "title": "Multi-channel deployment",
          "desc": "Omnichannel rollout across web chat, WhatsApp, SMS, mobile apps, and enterprise intranets."
        },
        {
          "num": "06",
          "title": "Ongoing tuning",
          "desc": "Continuous review of unresolved queries and conversation analytics to improve resolution rates."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA maps the actual questions your users bring, design conversation flows around those, and build in clear escalation paths.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "Order tracking, product discovery, return processing, and round-the-clock customer support."
        },
        {
          "title": "Education",
          "desc": "Student admissions guidance, campus service navigation, course inquiries, and financial aid FAQs."
        },
        {
          "title": "Museums and Culture",
          "desc": "Visitor orientation, exhibition details, ticket booking assistance, and multilingual interpretation."
        },
        {
          "title": "Real Estate",
          "desc": "Lead qualification, property scheduling, tenant maintenance requests, and amenity booking."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "How is this different from a basic FAQ chatbot?",
        "a": "At ZUNTRA, conversational AI understands context across a multi-turn conversation rather than matching keywords."
      },
      {
        "q": "Can the chatbot access our existing knowledge base?",
        "a": "At ZUNTRA, yes — integrating with your knowledge base is a core part of the build."
      },
      {
        "q": "What happens when the chatbot can't answer a question?",
        "a": "At ZUNTRA, escalation logic routes to a human agent with conversation context passed along."
      },
      {
        "q": "Can it be deployed across multiple channels?",
        "a": "At ZUNTRA, yes — multi-channel deployment across web, app, and messaging is part of implementation."
      },
      {
        "q": "How much does the chatbot improve over time?",
        "a": "At ZUNTRA, real conversation data is used to tune and improve responses."
      },
      {
        "q": "Will customers be able to tell they're talking to AI?",
        "a": "This depends on your preference — ZUNTRA builds to your requirements either way."
      },
      {
        "q": "Can the chatbot handle multiple languages?",
        "a": "At ZUNTRA, multi-language support can be built in depending on your user base."
      },
      {
        "q": "How long does it take to launch a custom chatbot?",
        "a": "At ZUNTRA, an initial version is typically achievable within a few weeks."
      },
      {
        "q": "Is conversation data kept private and secure?",
        "a": "At ZUNTRA, data handling is designed around your privacy requirements."
      },
      {
        "q": "Can the chatbot handle transactions, not just questions?",
        "a": "At ZUNTRA, yes — bookings, form submissions, or purchases can be built in."
      }
    ],
    "cta": {
      "title": "Ready to launch a smarter chatbot?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "nlp-document-intelligence": {
    "hero": {
      "title": "ZUNTRA extracts what matters from documents, without someone reading every page.",
      "desc": "ZUNTRA builds NLP systems that extract, classify, and summarize information from documents, turning unstructured text into structured data.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds NLP systems that extract, classify, and summarize information from documents, turning unstructured text into structured data."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Document extraction and capture",
          "desc": "Extracting key-value pairs, tables, and entities from PDFs, invoices, forms, and contracts."
        },
        {
          "num": "02",
          "title": "Contract review and clause identification",
          "desc": "Pinpointing non-standard terms, liability limits, renewal dates, and indemnity clauses."
        },
        {
          "num": "03",
          "title": "Document classification and routing",
          "desc": "Categorizing incoming emails, filings, claims, and correspondence to appropriate departments."
        },
        {
          "num": "04",
          "title": "Summarization",
          "desc": "Condensing hundred-page disclosures, regulatory filings, and academic briefs into executive summaries."
        },
        {
          "num": "05",
          "title": "Sentiment and intent analysis",
          "desc": "Evaluating feedback, customer communications, and transcripts for tone and urgent intent."
        },
        {
          "num": "06",
          "title": "Document management integration",
          "desc": "Automating indexing and metadata population in SharePoint, Google Drive, Box, and ERPs."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with the specific document types you need extracted, train on real examples, and validate accuracy before production use.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Healthcare",
          "desc": "Clinical note parsing, lab report extraction, discharge summary synthesis, and medical coding."
        },
        {
          "title": "Financial Services",
          "desc": "Loan application processing, KYC document verification, annual report parsing, and portfolio filings."
        },
        {
          "title": "Education",
          "desc": "Student record indexing, transcript validation, research paper summarization, and grading assistance."
        },
        {
          "title": "Government",
          "desc": "Freedom of information requests redaction, permit application review, and legislative tracking."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What kinds of documents can this process?",
        "a": "At ZUNTRA, contracts, forms, records, reports — trained around your specific document types."
      },
      {
        "q": "How accurate is automated document extraction?",
        "a": "Accuracy depends on document quality; ZUNTRA validates against real examples before production use."
      },
      {
        "q": "Can this review contracts and flag specific clauses?",
        "a": "At ZUNTRA, yes — contract review and clause identification is a common use case."
      },
      {
        "q": "Does this replace the need for human review entirely?",
        "a": "At ZUNTRA, no — it accelerates review by surfacing relevant information for human judgment."
      },
      {
        "q": "Can it handle handwritten or scanned documents?",
        "a": "At ZUNTRA, this depends on quality; scanned documents typically need additional OCR processing."
      },
      {
        "q": "How does this integrate with our document management system?",
        "a": "At ZUNTRA, integration is part of implementation, so extracted data flows into existing workflows."
      },
      {
        "q": "Can it summarize long documents automatically?",
        "a": "At ZUNTRA, yes — summarization into shorter, usable summaries is a core capability."
      },
      {
        "q": "Is this suitable for regulated industries?",
        "a": "At ZUNTRA, yes, though systems are designed around your specific compliance requirements."
      },
      {
        "q": "How long does it take to train on our document types?",
        "a": "At ZUNTRA, this varies, but initial versions are typically achievable within several weeks."
      },
      {
        "q": "What happens when document formats change over time?",
        "a": "At ZUNTRA, the system can be retrained as formats evolve."
      }
    ],
    "cta": {
      "title": "Ready to make your documents searchable?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "voice-ai-speech-to-text-solutions": {
    "hero": {
      "title": "ZUNTRA turns spoken conversations into searchable, actionable data.",
      "desc": "ZUNTRA builds voice AI systems for transcription, IVR, and voice-driven interfaces.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds voice AI systems for transcription, IVR, and voice-driven interfaces."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Speech-to-text transcription",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "02",
          "title": "IVR system design",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "03",
          "title": "Voice-driven interfaces",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "04",
          "title": "Call analytics and sentiment analysis",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "05",
          "title": "Multi-language and accent handling",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "06",
          "title": "Telephony integration",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA designs around the specific voice interaction and tune against real audio samples from your context.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "ZUNTRA applies this across Telecommunications",
          "desc": "Optimized for the specific operational logic of this sector."
        },
        {
          "title": "Healthcare",
          "desc": "Optimized for the specific operational logic of this sector."
        },
        {
          "title": "Financial Services",
          "desc": "Optimized for the specific operational logic of this sector."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE AGENT STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion without human intervention."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE AGENT OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single-purpose agent or an orchestrated multi-agent system.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER AGENT",
        "desc": "Evaluates incoming tasks and delegates to specialized sub-agents based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "AGENT A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "AGENT B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "AGENT C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>AGENTS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "AGENTS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Agents are designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "How accurate is speech-to-text transcription?",
        "a": "Accuracy depends on audio quality and accents; ZUNTRA tunes systems against real samples."
      },
      {
        "q": "Can this handle multiple languages and accents?",
        "a": "At ZUNTRA, yes — multi-language handling can be built in depending on your user base."
      },
      {
        "q": "What’s the difference between this and off-the-shelf tools?",
        "a": "ZUNTRA tunes systems to your specific domain vocabulary and audio conditions."
      },
      {
        "q": "Can voice AI integrate with our existing phone systems?",
        "a": "At ZUNTRA, yes — integration with existing telephony infrastructure is part of implementation."
      },
      {
        "q": "What is IVR and how does AI improve it?",
        "a": "At ZUNTRA, aI-driven IVR understands natural spoken requests rather than rigid menu trees."
      },
      {
        "q": "Can this analyze the sentiment of a call, not just transcribe it?",
        "a": "At ZUNTRA, yes — call analytics including sentiment analysis can be layered on top."
      },
      {
        "q": "How is sensitive voice data handled?",
        "a": "At ZUNTRA, data handling is designed around your specific privacy requirements."
      },
      {
        "q": "Does background noise significantly affect accuracy?",
        "a": "At ZUNTRA, yes; systems are tuned with real-world audio conditions in mind to minimize impact."
      },
      {
        "q": "Can this power a voice-driven interface, not just transcription?",
        "a": "At ZUNTRA, yes — voice-driven interfaces and commands are part of this service."
      }
    ],
    "cta": {
      "title": "Ready to make your calls actionable data?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "computer-vision-solutions": {
    "hero": {
      "title": "ZUNTRA gives your systems the ability to see and interpret the physical world.",
      "desc": "ZUNTRA builds computer vision systems for quality control, inventory tracking, security, and visual inspection tasks.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds computer vision systems for quality control, inventory tracking, security, and visual inspection tasks."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Quality control and defect detection",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "02",
          "title": "Inventory and shelf monitoring",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "03",
          "title": "Security and surveillance analytics",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "04",
          "title": "Object detection and tracking",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "05",
          "title": "Image classification",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "06",
          "title": "Camera and sensor integration",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with the specific visual inspection task and train the system on real examples from your environment.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "ZUNTRA applies this across Manufacturing",
          "desc": "Optimized for the specific operational logic of this sector."
        },
        {
          "title": "Retail",
          "desc": "Optimized for the specific operational logic of this sector."
        },
        {
          "title": "Logistics",
          "desc": "Optimized for the specific operational logic of this sector."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE AGENT STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion without human intervention."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE AGENT OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single-purpose agent or an orchestrated multi-agent system.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER AGENT",
        "desc": "Evaluates incoming tasks and delegates to specialized sub-agents based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "AGENT A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "AGENT B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "AGENT C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>AGENTS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "AGENTS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Agents are designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What kinds of tasks can computer vision automate?",
        "a": "At ZUNTRA, quality inspection, inventory counting, security monitoring, and object tracking."
      },
      {
        "q": "How accurate is defect detection compared to human inspection?",
        "a": "ZUNTRA validates performance against real examples before it’s relied on in production."
      },
      {
        "q": "Do we need special cameras or can this work with our existing setup?",
        "a": "At ZUNTRA, this depends on the use case, but integration with existing infrastructure is preferred."
      },
      {
        "q": "Can this work in real time?",
        "a": "At ZUNTRA, yes — real-time detection is common for quality control and inventory use cases."
      },
      {
        "q": "How does the system handle lighting changes?",
        "a": "At ZUNTRA, systems are trained on examples including varied lighting to improve robustness."
      },
      {
        "q": "Can computer vision be used for security, not just quality control?",
        "a": "At ZUNTRA, yes — surveillance analytics is part of this service."
      },
      {
        "q": "How long does it take to train for our use case?",
        "a": "At ZUNTRA, initial systems are typically achievable within several weeks."
      },
      {
        "q": "What happens when the item being inspected changes?",
        "a": "At ZUNTRA, the system can be retrained on new examples as criteria change."
      },
      {
        "q": "Is this only useful for manufacturing?",
        "a": "At ZUNTRA, it applies broadly — retail shelf monitoring and logistics tracking are common uses."
      }
    ],
    "cta": {
      "title": "Ready to automate visual inspection?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "ai-driven-hr-recruitment-tech": {
    "hero": {
      "title": "ZUNTRA helps you find and evaluate candidates faster, without losing the judgment",
      "desc": "ZUNTRA builds AI-powered tools for recruitment and HR — resume screening, candidate matching, interview scheduling.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds AI-powered tools for recruitment and HR — resume screening, candidate matching, interview scheduling."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Resume screening and matching",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "02",
          "title": "Automated interview scheduling",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "03",
          "title": "Candidate skill assessment",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "04",
          "title": "Internal talent mobility matching",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "05",
          "title": "Onboarding workflow automation",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        },
        {
          "num": "06",
          "title": "Bias monitoring and fairness auditing",
          "desc": "Tailored to your specific operational logic and integrated with your systems."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds screening tools that surface strong candidates faster, with visibility into scoring so hiring teams retain oversight.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "ZUNTRA applies this across Enterprise Technology",
          "desc": "Optimized for the specific operational logic of this sector."
        },
        {
          "title": "Education",
          "desc": "Optimized for the specific operational logic of this sector."
        },
        {
          "title": "Government",
          "desc": "Optimized for the specific operational logic of this sector."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE AGENT STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion without human intervention."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE AGENT OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single-purpose agent or an orchestrated multi-agent system.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER AGENT",
        "desc": "Evaluates incoming tasks and delegates to specialized sub-agents based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "AGENT A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "AGENT B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "AGENT C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>AGENTS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "AGENTS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Agents are designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "Can AI screening tools introduce bias into hiring?",
        "a": "At ZUNTRA, this is a real risk, which is why bias monitoring is a core part of the tool."
      },
      {
        "q": "Does this replace human decision-making in hiring?",
        "a": "At ZUNTRA, no — it surfaces and ranks candidates, with final decisions remaining human."
      },
      {
        "q": "How does resume screening actually work?",
        "a": "At ZUNTRA, the system matches resume content against role requirements and past hire patterns."
      },
      {
        "q": "Can this integrate with our existing ATS?",
        "a": "At ZUNTRA, yes — integration with existing HR software is part of implementation."
      },
      {
        "q": "What about internal talent mobility, not just external hiring?",
        "a": "At ZUNTRA, internal matching for open internal roles is part of this service."
      },
      {
        "q": "How do you audit the system for fairness?",
        "a": "At ZUNTRA, bias monitoring tracks outcomes across candidate groups, flagging disparities."
      },
      {
        "q": "Can this handle high-volume hiring?",
        "a": "At ZUNTRA, yes — automated screening is particularly useful at volume."
      },
      {
        "q": "Does this help with skill assessment, not just resume matching?",
        "a": "At ZUNTRA, yes — skill assessment tooling can be built in alongside screening."
      },
      {
        "q": "How is candidate data privacy handled?",
        "a": "At ZUNTRA, data handling is designed around your privacy and employment regulations."
      }
    ],
    "cta": {
      "title": "Ready to hire faster and fairer?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "custom-saas-product-development": {
    "hero": {
      "title": "ZUNTRA designs and builds custom SaaS products end-to-end.",
      "desc": "ZUNTRA designs and builds custom SaaS products from architecture through launch, for companies that need software built around their specific business model.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA designs and builds custom SaaS products from architecture through launch, for companies that need software built around their specific business model."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Product architecture and planning",
          "desc": "Foundational architecture, domain modeling, and technical roadmapping designed for scalability."
        },
        {
          "num": "02",
          "title": "Full-stack development",
          "desc": "Modern frontend and backend engineering delivering performant, maintainable software."
        },
        {
          "num": "03",
          "title": "Multi-tenant SaaS infrastructure",
          "desc": "Secure data isolation, role-based access, and scalable multi-tenant cloud architecture."
        },
        {
          "num": "04",
          "title": "Subscription and billing integration",
          "desc": "Automated recurring billing, invoicing, Stripe/payment integrations, and tier management."
        },
        {
          "num": "05",
          "title": "Scalability engineering",
          "desc": "Elastic compute, database indexing, caching strategies, and load handling for rapid growth."
        },
        {
          "num": "06",
          "title": "Post-launch support",
          "desc": "Ongoing feature iteration, bug resolution, infrastructure monitoring, and performance tuning."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with your business model and growth plans, not just the feature list.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "B2B SaaS platforms, workflow tools, and specialized developer infrastructure."
        },
        {
          "title": "Innovation Ecosystems",
          "desc": "Venture platforms, portfolio management systems, and community networks."
        },
        {
          "title": "Financial Services",
          "desc": "Fintech applications, wealth management portals, and automated reporting SaaS."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "How long does it take to build a custom SaaS product?",
        "a": "At ZUNTRA, an MVP is typically achievable in a few months, with a fuller build taking longer."
      },
      {
        "q": "Do you build from scratch or use existing frameworks?",
        "a": "ZUNTRA uses established frameworks where it speeds development, reserving custom code for what's differentiating."
      },
      {
        "q": "What is multi-tenant architecture and do we need it?",
        "a": "At ZUNTRA, it lets one application serve multiple customers securely — standard for most B2B SaaS."
      },
      {
        "q": "Can you integrate subscription billing and payments?",
        "a": "At ZUNTRA, yes — billing integration is a standard part of SaaS development."
      },
      {
        "q": "How do you ensure the product can scale as we grow?",
        "a": "At ZUNTRA, scalability is factored into architecture decisions from the start."
      },
      {
        "q": "Do you provide support after launch?",
        "a": "At ZUNTRA, yes — post-launch support and iteration is part of the engagement."
      },
      {
        "q": "Can you build on top of an existing product?",
        "a": "Yes — ZUNTRA cans assess your existing codebase and build additional functionality."
      },
      {
        "q": "What technology stack do you use?",
        "a": "At ZUNTRA, stack choices are made based on your requirements and long-term maintainability."
      },
      {
        "q": "How involved do we need to be during development?",
        "a": "At ZUNTRA, regular check-ins keep the product aligned without requiring constant involvement."
      },
      {
        "q": "What happens if requirements change midway?",
        "a": "At ZUNTRA, iterative checkpoints allow changes without derailing the timeline."
      }
    ],
    "cta": {
      "title": "Ready to build your product?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "ui-ux-design-product-design-systems": {
    "hero": {
      "title": "ZUNTRA designs products that are usable, not just visually polished.",
      "desc": "ZUNTRA designs user interfaces and build reusable design systems, ensuring products stay intuitive and consistent as they grow.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA designs user interfaces and build reusable design systems, ensuring products stay intuitive and consistent as they grow."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "User research and journey mapping",
          "desc": "In-depth user interviews, persona modeling, and friction point discovery."
        },
        {
          "num": "02",
          "title": "Wireframing and prototyping",
          "desc": "Interactive low and high-fidelity prototypes validating workflows before code is written."
        },
        {
          "num": "03",
          "title": "Visual design",
          "desc": "Modern, elevated aesthetic execution aligned with brand guidelines and UX best practices."
        },
        {
          "num": "04",
          "title": "Design system creation",
          "desc": "Tokenized, reusable component libraries in Figma and code for engineering consistency."
        },
        {
          "num": "05",
          "title": "Usability testing",
          "desc": "Empirical user validation testing hypotheses and catching design flaws early."
        },
        {
          "num": "06",
          "title": "Accessibility-focused design",
          "desc": "WCAG 2.1 compliant contrast, typography, and keyboard navigation for all users."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with how real users actually move through the product, testing assumptions with prototypes before full builds.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "High-converting e-commerce layouts, frictionless checkout, and mobile discovery flows."
        },
        {
          "title": "Healthcare",
          "desc": "Intuitive patient portals, clinician dashboards, and clear diagnostic visualization."
        },
        {
          "title": "Real Estate",
          "desc": "Property discovery interfaces, virtual viewing tools, and seamless application forms."
        },
        {
          "title": "Museums and Culture",
          "desc": "Immersive storytelling portals, interactive exhibition guides, and digital archives."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between UI and UX design?",
        "a": "UX focuses on function and flow; UI focuses on the visual interface — ZUNTRA handles both together."
      },
      {
        "q": "What is a design system and why do we need one?",
        "a": "At ZUNTRA, a reusable component library that keeps a product consistent as it grows."
      },
      {
        "q": "Do you conduct user research before designing?",
        "a": "At ZUNTRA, yes — user research typically informs the design process."
      },
      {
        "q": "How do you test whether a design actually works?",
        "a": "At ZUNTRA, usability testing with prototypes catches problems early, when cheap to fix."
      },
      {
        "q": "Can you redesign an existing product, or only build new ones?",
        "a": "At ZUNTRA, both — redesigning an existing product's UI/UX is a common engagement."
      },
      {
        "q": "How do you ensure designs are accessible?",
        "a": "At ZUNTRA, accessibility is built into the design process rather than added afterward."
      },
      {
        "q": "Will the design system work across web and mobile?",
        "a": "At ZUNTRA, yes — typically consistent across platforms, with platform-specific adaptations."
      },
      {
        "q": "How much input does our team have?",
        "a": "At ZUNTRA, design is collaborative, with regular review checkpoints."
      },
      {
        "q": "Can you match our existing brand guidelines?",
        "a": "At ZUNTRA, yes — design aligns with your existing brand identity."
      },
      {
        "q": "How long does a typical design engagement take?",
        "a": "At ZUNTRA, initial direction and prototypes are usually achievable within a few weeks."
      }
    ],
    "cta": {
      "title": "Ready for a design that scales with your product?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "mobile-app-development": {
    "hero": {
      "title": "ZUNTRA builds native or cross-platform apps for how your users actually use their phones.",
      "desc": "ZUNTRA builds mobile applications for iOS and Android, choosing native or cross-platform based on your product's needs.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds mobile applications for iOS and Android, choosing native or cross-platform based on your product's needs."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "iOS and Android development",
          "desc": "Native Swift and Kotlin engineering built for platform-specific capabilities."
        },
        {
          "num": "02",
          "title": "Cross-platform development",
          "desc": "Efficient React Native and Flutter builds sharing business logic across operating systems."
        },
        {
          "num": "03",
          "title": "App architecture and backend integration",
          "desc": "Clean architecture patterns, secure API clients, offline data sync, and cloud integration."
        },
        {
          "num": "04",
          "title": "Push notifications and offline functionality",
          "desc": "Segmented messaging triggers, background sync, and resilient offline persistence."
        },
        {
          "num": "05",
          "title": "App store submission",
          "desc": "Compliance reviews, metadata optimization, and end-to-end publishing on Apple App Store & Google Play."
        },
        {
          "num": "06",
          "title": "Post-launch maintenance",
          "desc": "OS version upgrades, device testing, crash diagnostics, and continuous improvements."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA assesses whether native or cross-platform better fits your performance needs, budget, and timeline.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "Omnichannel shopping apps, loyalty rewards, in-store scanning, and contactless checkout."
        },
        {
          "title": "Real Estate",
          "desc": "Agent communication tools, property browsing, mapping, and instant tour booking."
        },
        {
          "title": "Healthcare",
          "desc": "Telehealth video consultations, appointment scheduling, and patient symptom trackers."
        },
        {
          "title": "Education",
          "desc": "Interactive learning apps, assignment submission, student messaging, and progress tracking."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "Should we build native apps or a cross-platform app?",
        "a": "This depends on performance needs, budget, and timeline — ZUNTRA helps assess the fit."
      },
      {
        "q": "How long does mobile app development take?",
        "a": "At ZUNTRA, an initial version is typically achievable within a few months."
      },
      {
        "q": "Do you handle app store submission?",
        "a": "At ZUNTRA, yes — submission and optimization for both major app stores is part of the service."
      },
      {
        "q": "Can the app work offline?",
        "a": "At ZUNTRA, offline functionality can be built in depending on requirements."
      },
      {
        "q": "How do you handle push notifications?",
        "a": "At ZUNTRA, push notification infrastructure is set up as part of development."
      },
      {
        "q": "What happens after the app launches?",
        "a": "At ZUNTRA, post-launch maintenance, including OS compatibility updates, is part of the engagement."
      },
      {
        "q": "Can you integrate the app with our existing backend?",
        "a": "At ZUNTRA, yes — backend integration is part of the development process."
      },
      {
        "q": "How much does cross-platform save compared to building separately?",
        "a": "At ZUNTRA, cross-platform typically reduces cost and timeline compared to two native builds."
      },
      {
        "q": "Do you design the app's UI, or do we need that separately?",
        "a": "At ZUNTRA, uI/UX design can be included as part of the engagement."
      },
      {
        "q": "What happens if Apple or Google changes platform requirements?",
        "a": "At ZUNTRA, ongoing maintenance includes keeping the app compliant with changes."
      }
    ],
    "cta": {
      "title": "Ready to launch your app?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "api-development-third-party-integration": {
    "hero": {
      "title": "ZUNTRA connects your systems so data flows where it needs to, automatically.",
      "desc": "ZUNTRA builds custom APIs and integrate third-party services so different tools can share data without manual workarounds.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds custom APIs and integrate third-party services so different tools can share data without manual workarounds."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Custom API design and development",
          "desc": "RESTful and GraphQL service architecture designed for high throughput and clean developer experience."
        },
        {
          "num": "02",
          "title": "Third-party service integration",
          "desc": "Connecting payment gateways, CRMs, marketing engines, ERPs, and external SaaS platforms."
        },
        {
          "num": "03",
          "title": "Webhook and event-driven setup",
          "desc": "Real-time asynchronous pub/sub messaging and webhook listeners for instantaneous syncing."
        },
        {
          "num": "04",
          "title": "API documentation and versioning",
          "desc": "OpenAPI/Swagger specifications, developer sandboxes, and smooth backward-compatible versioning."
        },
        {
          "num": "05",
          "title": "Authentication and security",
          "desc": "OAuth2, JWT, API key management, rate limiting, and zero-trust data protection."
        },
        {
          "num": "06",
          "title": "Legacy system API wrapping",
          "desc": "Modern API layers that unlock mainframe, SOAP, and legacy database assets without full rewrites."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA maps how data actually needs to move between your systems before writing any integration code.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Unified SaaS ecosystems, developer platforms, and multi-tenant integrations."
        },
        {
          "title": "Financial Services",
          "desc": "Banking APIs, payment processing, accounting syncing, and automated reconciliation."
        },
        {
          "title": "Logistics",
          "desc": "Carrier shipping APIs, customs data feeds, inventory sync, and real-time route telemetry."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between custom APIs and existing integration tools?",
        "a": "At ZUNTRA, off-the-shelf tools work for standard connections; custom APIs handle non-standard requirements."
      },
      {
        "q": "Can you integrate with any third-party service?",
        "a": "At ZUNTRA, feasibility depends on what the third-party service itself supports."
      },
      {
        "q": "How do you handle authentication and security for integrations?",
        "a": "At ZUNTRA, authentication and access controls are a core part of the build."
      },
      {
        "q": "What happens if a third-party service changes their API?",
        "a": "At ZUNTRA, ongoing maintenance includes adapting to third-party API changes."
      },
      {
        "q": "Can you connect our legacy systems without modern APIs?",
        "a": "At ZUNTRA, yes — legacy API wrapping lets older systems participate in integrations."
      },
      {
        "q": "Do you provide documentation for the APIs you build?",
        "a": "At ZUNTRA, yes — documentation and versioning is standard practice."
      },
      {
        "q": "What is webhook-based integration and when is it used?",
        "a": "At ZUNTRA, webhooks notify systems in real time rather than requiring constant polling."
      },
      {
        "q": "How long does a typical integration project take?",
        "a": "At ZUNTRA, individual integrations are often achievable within a few weeks."
      },
      {
        "q": "Can integrations handle high volumes of data?",
        "a": "At ZUNTRA, integrations are architected with your expected volume in mind."
      },
      {
        "q": "What happens if an integration fails or data doesn't sync?",
        "a": "At ZUNTRA, monitoring and error-handling logic flag failures so issues are caught quickly."
      }
    ],
    "cta": {
      "title": "Ready to connect your systems?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "legacy-system-modernization": {
    "hero": {
      "title": "ZUNTRA brings old systems up to modern standards without starting from zero.",
      "desc": "ZUNTRA modernizes legacy software — outdated codebases, unsupported platforms, brittle infrastructure — improving performance and security.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA modernizes legacy software — outdated codebases, unsupported platforms, brittle infrastructure — improving performance and security."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Legacy codebase assessment",
          "desc": "Static code analysis, architectural debt profiling, and technical feasibility evaluation."
        },
        {
          "num": "02",
          "title": "Incremental modernization planning",
          "desc": "Strangler fig patterns and modular refactoring strategies that avoid risky big-bang rewrites."
        },
        {
          "num": "03",
          "title": "Database and infrastructure migration",
          "desc": "Relocating on-premises databases to modern cloud-native managed databases safely."
        },
        {
          "num": "04",
          "title": "Security vulnerability remediation",
          "desc": "Patching legacy vulnerabilities, updating obsolete dependencies, and hardening access controls."
        },
        {
          "num": "05",
          "title": "Performance optimization",
          "desc": "Modern caching, code refactoring, query tuning, and infrastructure modernization."
        },
        {
          "num": "06",
          "title": "Full rebuild options where needed",
          "desc": "Targeted ground-up microservice builds for unsalvageable legacy bottlenecks."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with an honest audit of what's actually salvageable, defaulting to incremental modernization where viable.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Government",
          "desc": "Digitizing public agency portals, licensing databases, and case management systems."
        },
        {
          "title": "Manufacturing",
          "desc": "Connecting legacy SCADA equipment to modern analytics, inventory, and ERP systems."
        },
        {
          "title": "Financial Services",
          "desc": "Modernizing core banking layers, statement generation, and loan calculation engines."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "Do we need a full rebuild, or can our system be modernized incrementally?",
        "a": "ZUNTRA assesses this with an audit first, defaulting to incremental modernization where viable."
      },
      {
        "q": "How risky is modernizing a system still in active use?",
        "a": "At ZUNTRA, risk is managed through incremental changes and careful testing."
      },
      {
        "q": "What are the signs a system needs modernization?",
        "a": "At ZUNTRA, frequent bugs, security vulnerabilities, and inability to add features."
      },
      {
        "q": "Can you migrate our data without losing anything?",
        "a": "At ZUNTRA, yes — data migration is validated carefully to ensure integrity."
      },
      {
        "q": "How long does legacy modernization typically take?",
        "a": "At ZUNTRA, this varies by system size and complexity; an estimate follows the initial audit."
      },
      {
        "q": "Will modernization disrupt our current operations?",
        "a": "At ZUNTRA, incremental modernization is designed to minimize disruption."
      },
      {
        "q": "What happens to security vulnerabilities during the process?",
        "a": "At ZUNTRA, remediation is typically prioritized early in the process."
      },
      {
        "q": "Do you work with any specific legacy technologies?",
        "a": "At ZUNTRA, feasibility is assessed based on the specific legacy technology involved."
      },
      {
        "q": "How do you decide what to keep versus replace?",
        "a": "At ZUNTRA, the audit assesses what's stable versus what's genuinely holding the business back."
      },
      {
        "q": "What's the cost difference between incremental and a full rebuild?",
        "a": "Incremental is generally less costly upfront; ZUNTRA provides a comparison after assessment."
      }
    ],
    "cta": {
      "title": "Ready to modernize your systems?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "qa-testing-devops-automation": {
    "hero": {
      "title": "ZUNTRA catches problems before your users do, and ship with confidence.",
      "desc": "ZUNTRA builds automated testing and DevOps pipelines that catch bugs early and streamline deployments.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds automated testing and DevOps pipelines that catch bugs early and streamline deployments."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Automated test suite development",
          "desc": "Unit, integration, contract, and end-to-end testing frameworks using Cypress, Playwright, and Jest."
        },
        {
          "num": "02",
          "title": "CI/CD pipeline setup",
          "desc": "Automated GitHub Actions, GitLab CI, or Jenkins pipelines verifying code on every push."
        },
        {
          "num": "03",
          "title": "Performance and load testing",
          "desc": "Simulating heavy traffic spikes with k6 and Locust to identify bottlenecks before launch."
        },
        {
          "num": "04",
          "title": "Test coverage assessment",
          "desc": "Auditing gaps in regression suites to protect high-impact business workflows."
        },
        {
          "num": "05",
          "title": "Deployment automation and rollback",
          "desc": "Zero-downtime blue/green or canary deployments with automated healthcheck rollbacks."
        },
        {
          "num": "06",
          "title": "Monitoring and alerting setup",
          "desc": "Real-time error tracking with Datadog, Sentry, and Prometheus paired with actionable alerts."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds pipelines around your actual release cadence and risk tolerance, prioritizing coverage where bugs are most costly.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Continuous delivery for fast-moving multi-tenant SaaS platforms and developer APIs."
        },
        {
          "title": "Financial Services",
          "desc": "Rigorous compliance testing, deterministic audit trails, and zero-defect deployment pipelines."
        },
        {
          "title": "Manufacturing",
          "desc": "High-reliability industrial systems testing and operational uptime validation."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between QA testing and DevOps automation?",
        "a": "At ZUNTRA, qA verifies the software works; DevOps automation streamlines building, testing, and deploying it."
      },
      {
        "q": "Do we need 100% test coverage?",
        "a": "At ZUNTRA, coverage should be prioritized where bugs would be most costly."
      },
      {
        "q": "What is CI/CD and why does it matter?",
        "a": "At ZUNTRA, it automates testing and releasing code changes, reducing manual errors."
      },
      {
        "q": "Can you set this up for an existing codebase?",
        "a": "At ZUNTRA, yes — adding automated testing to an existing codebase is a common engagement."
      },
      {
        "q": "How does automated testing reduce the risk of bugs reaching production?",
        "a": "At ZUNTRA, automated tests catch regressions before deployment."
      },
      {
        "q": "What is load testing and do we need it?",
        "a": "At ZUNTRA, it verifies performance under high traffic — important for products expecting scale."
      },
      {
        "q": "Can deployments be rolled back automatically if something goes wrong?",
        "a": "At ZUNTRA, yes — rollback strategies are typically built into the pipeline."
      },
      {
        "q": "How much does this slow down our development process?",
        "a": "At ZUNTRA, well-designed automation typically speeds up development over time."
      },
      {
        "q": "Do you set up monitoring so we know when something breaks?",
        "a": "At ZUNTRA, yes — monitoring and alerting is part of this service."
      },
      {
        "q": "How long does it take to set up a full pipeline?",
        "a": "At ZUNTRA, initial pipelines are typically achievable within a few weeks."
      }
    ],
    "cta": {
      "title": "Ready to ship with confidence?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "low-code-no-code-platform-development": {
    "hero": {
      "title": "ZUNTRA gets you functional software faster, without a full engineering build for every internal tool.",
      "desc": "ZUNTRA builds applications using low-code and no-code platforms, delivering functional tools faster than a full custom build.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds applications using low-code and no-code platforms, delivering functional tools faster than a full custom build."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Internal tool and workflow app development",
          "desc": "Rapid creation of admin dashboards, customer portals, and internal task trackers."
        },
        {
          "num": "02",
          "title": "Low-code platform selection",
          "desc": "Objective evaluation and selection across Retool, Bubble, FlutterFlow, Appsmith, and Make."
        },
        {
          "num": "03",
          "title": "Custom logic and integration",
          "desc": "Extending visual platforms with custom JavaScript, database queries, and secure API links."
        },
        {
          "num": "04",
          "title": "Migration from manual processes",
          "desc": "Transforming fragile spreadsheets and email chains into structured, relational web apps."
        },
        {
          "num": "05",
          "title": "Team training",
          "desc": "Hands-on enablement workshops empowering your staff to manage and adapt the application."
        },
        {
          "num": "06",
          "title": "Scaling assessment",
          "desc": "Clear architectural roadmaps identifying when and how to transition to full custom code."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA assesses whether low-code is actually the right fit before committing, and are upfront when it isn't.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Innovation Ecosystems",
          "desc": "Startup applications intake, mentor matching directories, and investor pitch portals."
        },
        {
          "title": "Education",
          "desc": "Admissions tracking, event registration tools, and student community portals."
        },
        {
          "title": "Museums and Culture",
          "desc": "Donor management apps, exhibit booking systems, and volunteer shift organizers."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between low-code and no-code?",
        "a": "At ZUNTRA, no-code requires no programming; low-code allows custom logic where needed."
      },
      {
        "q": "When does low-code make sense versus a full custom build?",
        "a": "At ZUNTRA, low-code suits internal tools and simpler workflows; complex products usually need custom development."
      },
      {
        "q": "Can low-code apps integrate with our existing systems?",
        "a": "At ZUNTRA, yes — integration is part of the build, though extent depends on the platform."
      },
      {
        "q": "Will our team be able to maintain the app afterward?",
        "a": "At ZUNTRA, training is part of the engagement so non-developers can make small changes."
      },
      {
        "q": "What happens if we outgrow the low-code platform later?",
        "a": "ZUNTRA assesses scalability upfront and can help plan a migration to custom development."
      },
      {
        "q": "How much faster is low-code development compared to custom code?",
        "a": "At ZUNTRA, significantly faster for well-suited use cases, depending on complexity."
      },
      {
        "q": "Can low-code apps replace manual processes like spreadsheets?",
        "a": "At ZUNTRA, yes — this is a common and high-value use case."
      },
      {
        "q": "Which low-code platforms do you work with?",
        "a": "At ZUNTRA, platform choice depends on your requirements and existing tech stack."
      },
      {
        "q": "Are low-code apps secure enough for business-critical use?",
        "a": "Security depends on proper configuration, which ZUNTRA implements appropriately."
      },
      {
        "q": "How much does low-code development typically cost compared to custom software?",
        "a": "At ZUNTRA, generally more cost-effective than full custom builds for suitable use cases."
      }
    ],
    "cta": {
      "title": "Ready to move faster on internal tools?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "enterprise-software-integration-erp-crm": {
    "hero": {
      "title": "ZUNTRA makes your core business systems actually talk to each other.",
      "desc": "ZUNTRA integrates and customizes enterprise software like ERP and CRM systems, connecting them to the rest of your tech stack.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA integrates and customizes enterprise software like ERP and CRM systems, connecting them to the rest of your tech stack."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "ERP and CRM integration",
          "desc": "Connecting Salesforce, HubSpot, NetSuite, SAP, or Microsoft Dynamics to your proprietary systems."
        },
        {
          "num": "02",
          "title": "Custom module and workflow development",
          "desc": "Building specialized business logic, triggers, and custom interface components inside your ERP/CRM."
        },
        {
          "num": "03",
          "title": "Data migration",
          "desc": "Clean extraction, schema transformation, and validated loading from legacy databases to modern platforms."
        },
        {
          "num": "04",
          "title": "Cross-platform synchronization",
          "desc": "Bidirectional or unidirectional synchronization preserving truth across marketing, sales, and ops."
        },
        {
          "num": "05",
          "title": "User access configuration",
          "desc": "Role-based permission sets, team hierarchy mapping, and data visibility rules."
        },
        {
          "num": "06",
          "title": "Ongoing system administration",
          "desc": "Scheduled maintenance, optimization audits, license tuning, and integration monitoring."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA maps how data currently moves across your systems, then design integrations that eliminate manual re-entry.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Aligning product telemetry with customer success CRM and billing ERP."
        },
        {
          "title": "Manufacturing",
          "desc": "Syncing supply chain ERP inventory with sales pipeline and customer orders."
        },
        {
          "title": "Financial Services",
          "desc": "Connecting compliance registries, customer KYC databases, and portfolio CRM systems."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's involved in integrating an ERP or CRM with our other systems?",
        "a": "At ZUNTRA, mapping data flows and building connections so information updates consistently."
      },
      {
        "q": "Can you customize our existing ERP or CRM, or only integrate it?",
        "a": "At ZUNTRA, both — customizing modules is often part of the engagement."
      },
      {
        "q": "How do you handle data migration when moving to a new system?",
        "a": "At ZUNTRA, migration is planned carefully with validation to preserve data integrity."
      },
      {
        "q": "Will our team need retraining after integration?",
        "a": "At ZUNTRA, this depends on how much the integration changes existing workflows."
      },
      {
        "q": "Can different departments have different levels of system access?",
        "a": "At ZUNTRA, yes — access configuration ensures teams see only what's relevant."
      },
      {
        "q": "How do you prevent data from getting out of sync between systems?",
        "a": "At ZUNTRA, synchronization uses real-time or scheduled sync depending on your needs."
      },
      {
        "q": "Which ERP and CRM platforms do you work with?",
        "a": "ZUNTRA works with the platforms your organization already uses or is considering."
      },
      {
        "q": "How long does an enterprise integration project typically take?",
        "a": "This varies by complexity; ZUNTRA provides an estimate after initial assessment."
      },
      {
        "q": "Do you provide ongoing support after integration is live?",
        "a": "At ZUNTRA, yes — ongoing system administration support is available."
      },
      {
        "q": "What happens if we later switch to a different platform?",
        "a": "At ZUNTRA, well-architected integrations are generally easier to adapt when switching platforms."
      }
    ],
    "cta": {
      "title": "Ready to unify your systems?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "enterprise-software-integration": {
    "hero": {
      "title": "ZUNTRA makes your core business systems actually talk to each other.",
      "desc": "ZUNTRA integrates and customizes enterprise software like ERP and CRM systems, connecting them to the rest of your tech stack.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA integrates and customizes enterprise software like ERP and CRM systems, connecting them to the rest of your tech stack."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "ERP and CRM integration",
          "desc": "Connecting Salesforce, HubSpot, NetSuite, SAP, or Microsoft Dynamics to your proprietary systems."
        },
        {
          "num": "02",
          "title": "Custom module and workflow development",
          "desc": "Building specialized business logic, triggers, and custom interface components inside your ERP/CRM."
        },
        {
          "num": "03",
          "title": "Data migration",
          "desc": "Clean extraction, schema transformation, and validated loading from legacy databases to modern platforms."
        },
        {
          "num": "04",
          "title": "Cross-platform synchronization",
          "desc": "Bidirectional or unidirectional synchronization preserving truth across marketing, sales, and ops."
        },
        {
          "num": "05",
          "title": "User access configuration",
          "desc": "Role-based permission sets, team hierarchy mapping, and data visibility rules."
        },
        {
          "num": "06",
          "title": "Ongoing system administration",
          "desc": "Scheduled maintenance, optimization audits, license tuning, and integration monitoring."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA maps how data currently moves across your systems, then design integrations that eliminate manual re-entry.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Aligning product telemetry with customer success CRM and billing ERP."
        },
        {
          "title": "Manufacturing",
          "desc": "Syncing supply chain ERP inventory with sales pipeline and customer orders."
        },
        {
          "title": "Financial Services",
          "desc": "Connecting compliance registries, customer KYC databases, and portfolio CRM systems."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's involved in integrating an ERP or CRM with our other systems?",
        "a": "At ZUNTRA, mapping data flows and building connections so information updates consistently."
      },
      {
        "q": "Can you customize our existing ERP or CRM, or only integrate it?",
        "a": "At ZUNTRA, both — customizing modules is often part of the engagement."
      },
      {
        "q": "How do you handle data migration when moving to a new system?",
        "a": "At ZUNTRA, migration is planned carefully with validation to preserve data integrity."
      },
      {
        "q": "Will our team need retraining after integration?",
        "a": "At ZUNTRA, this depends on how much the integration changes existing workflows."
      },
      {
        "q": "Can different departments have different levels of system access?",
        "a": "At ZUNTRA, yes — access configuration ensures teams see only what's relevant."
      },
      {
        "q": "How do you prevent data from getting out of sync between systems?",
        "a": "At ZUNTRA, synchronization uses real-time or scheduled sync depending on your needs."
      },
      {
        "q": "Which ERP and CRM platforms do you work with?",
        "a": "ZUNTRA works with the platforms your organization already uses or is considering."
      },
      {
        "q": "How long does an enterprise integration project typically take?",
        "a": "This varies by complexity; ZUNTRA provides an estimate after initial assessment."
      },
      {
        "q": "Do you provide ongoing support after integration is live?",
        "a": "At ZUNTRA, yes — ongoing system administration support is available."
      },
      {
        "q": "What happens if we later switch to a different platform?",
        "a": "At ZUNTRA, well-architected integrations are generally easier to adapt when switching platforms."
      }
    ],
    "cta": {
      "title": "Ready to unify your systems?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "it-consulting-bpo-managed-services": {
    "hero": {
      "title": "ZUNTRA extends your team's capacity without extending your headcount.",
      "desc": "ZUNTRA provides IT consulting and managed services support for organizations needing extended technical capacity.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA provides IT consulting and managed services support for organizations needing extended technical capacity."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Technology strategy and advisory",
          "desc": "Executive fractional CTO leadership, architectural roadmaps, and modernization planning."
        },
        {
          "num": "02",
          "title": "Managed IT infrastructure support",
          "desc": "24/7 server monitoring, cloud resource optimization, database tuning, and backups."
        },
        {
          "num": "03",
          "title": "Outsourced technical operations",
          "desc": "Handling tier-2/3 technical support, recurring maintenance, and engineering backlog execution."
        },
        {
          "num": "04",
          "title": "Vendor and stack evaluation",
          "desc": "RFP management, vendor benchmarking, cost optimization, and contract negotiations."
        },
        {
          "num": "05",
          "title": "Ongoing system monitoring",
          "desc": "Proactive uptime tracking, performance telemetry, and incident response SLAs."
        },
        {
          "num": "06",
          "title": "Scalable support models",
          "desc": "Flexible capacity agreements that scale up or down to align with seasonal business demands."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA scopes engagements around what genuinely needs outside support versus what's better built in-house.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Supplemental site reliability engineering, cloud cost audits, and fractional architecture support."
        },
        {
          "title": "Government",
          "desc": "Compliant technical support, legacy modernization advisory, and secure infrastructure operations."
        },
        {
          "title": "Financial Services",
          "desc": "Auditable IT governance, disaster recovery orchestration, and cybersecurity advisory."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between IT consulting and managed services?",
        "a": "At ZUNTRA, consulting is advisory; managed services involves actively operating systems ongoing."
      },
      {
        "q": "Is this a replacement for our internal IT team, or a supplement?",
        "a": "At ZUNTRA, typically a supplement, though the right model depends on your organization's needs."
      },
      {
        "q": "What kind of technical operations can be outsourced?",
        "a": "At ZUNTRA, this varies, but commonly includes monitoring, maintenance, and specific technical functions."
      },
      {
        "q": "How do you determine what should stay in-house versus be outsourced?",
        "a": "ZUNTRA assesses this together during scoping, based on what's core versus operational overhead."
      },
      {
        "q": "Can this scale up or down based on our needs?",
        "a": "At ZUNTRA, yes — support models are designed to be scalable."
      },
      {
        "q": "Do you provide technology vendor evaluation and selection help?",
        "a": "At ZUNTRA, yes — vendor evaluation is part of the consulting service."
      },
      {
        "q": "How is pricing typically structured for managed services?",
        "a": "This varies by scope; something ZUNTRA works through based on your needs."
      },
      {
        "q": "What level of response time can we expect for support issues?",
        "a": "At ZUNTRA, response expectations are defined as part of the engagement scope."
      },
      {
        "q": "Is this suitable for organizations without an internal IT team?",
        "a": "At ZUNTRA, yes — this model can work for organizations at various stages."
      },
      {
        "q": "How do we know if we need consulting, managed services, or both?",
        "a": "At ZUNTRA, this depends on whether your primary need is strategic guidance or operational support."
      }
    ],
    "cta": {
      "title": "Ready to extend your team's capacity?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "it-consulting-managed-services": {
    "hero": {
      "title": "ZUNTRA extends your team's capacity without extending your headcount.",
      "desc": "ZUNTRA provides IT consulting and managed services support for organizations needing extended technical capacity.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA provides IT consulting and managed services support for organizations needing extended technical capacity."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Technology strategy and advisory",
          "desc": "Executive fractional CTO leadership, architectural roadmaps, and modernization planning."
        },
        {
          "num": "02",
          "title": "Managed IT infrastructure support",
          "desc": "24/7 server monitoring, cloud resource optimization, database tuning, and backups."
        },
        {
          "num": "03",
          "title": "Outsourced technical operations",
          "desc": "Handling tier-2/3 technical support, recurring maintenance, and engineering backlog execution."
        },
        {
          "num": "04",
          "title": "Vendor and stack evaluation",
          "desc": "RFP management, vendor benchmarking, cost optimization, and contract negotiations."
        },
        {
          "num": "05",
          "title": "Ongoing system monitoring",
          "desc": "Proactive uptime tracking, performance telemetry, and incident response SLAs."
        },
        {
          "num": "06",
          "title": "Scalable support models",
          "desc": "Flexible capacity agreements that scale up or down to align with seasonal business demands."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA scopes engagements around what genuinely needs outside support versus what's better built in-house.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Supplemental site reliability engineering, cloud cost audits, and fractional architecture support."
        },
        {
          "title": "Government",
          "desc": "Compliant technical support, legacy modernization advisory, and secure infrastructure operations."
        },
        {
          "title": "Financial Services",
          "desc": "Auditable IT governance, disaster recovery orchestration, and cybersecurity advisory."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between IT consulting and managed services?",
        "a": "At ZUNTRA, consulting is advisory; managed services involves actively operating systems ongoing."
      },
      {
        "q": "Is this a replacement for our internal IT team, or a supplement?",
        "a": "At ZUNTRA, typically a supplement, though the right model depends on your organization's needs."
      },
      {
        "q": "What kind of technical operations can be outsourced?",
        "a": "At ZUNTRA, this varies, but commonly includes monitoring, maintenance, and specific technical functions."
      },
      {
        "q": "How do you determine what should stay in-house versus be outsourced?",
        "a": "ZUNTRA assesses this together during scoping, based on what's core versus operational overhead."
      },
      {
        "q": "Can this scale up or down based on our needs?",
        "a": "At ZUNTRA, yes — support models are designed to be scalable."
      },
      {
        "q": "Do you provide technology vendor evaluation and selection help?",
        "a": "At ZUNTRA, yes — vendor evaluation is part of the consulting service."
      },
      {
        "q": "How is pricing typically structured for managed services?",
        "a": "This varies by scope; something ZUNTRA works through based on your needs."
      },
      {
        "q": "What level of response time can we expect for support issues?",
        "a": "At ZUNTRA, response expectations are defined as part of the engagement scope."
      },
      {
        "q": "Is this suitable for organizations without an internal IT team?",
        "a": "At ZUNTRA, yes — this model can work for organizations at various stages."
      },
      {
        "q": "How do we know if we need consulting, managed services, or both?",
        "a": "At ZUNTRA, this depends on whether your primary need is strategic guidance or operational support."
      }
    ],
    "cta": {
      "title": "Ready to extend your team's capacity?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "cloud-migration-infrastructure-setup": {
    "hero": {
      "title": "ZUNTRA moves you to the cloud without moving your problems with it.",
      "desc": "ZUNTRA plans and executes cloud migrations and set up cloud infrastructure designed around your actual workload needs.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA plans and executes cloud migrations and set up cloud infrastructure designed around your actual workload needs."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Cloud readiness assessment",
          "desc": "Comprehensive workload profiling, dependency mapping, and cloud cost estimations."
        },
        {
          "num": "02",
          "title": "Infrastructure setup (AWS/Azure/GCP)",
          "desc": "Multi-region cloud infrastructure designed for high availability, security, and low latency."
        },
        {
          "num": "03",
          "title": "Application and database migration",
          "desc": "Zero-data-loss database cutovers and containerized application migrations."
        },
        {
          "num": "04",
          "title": "Cost optimization and right-sizing",
          "desc": "Reserved instances, spot compute strategies, and automated scaling to keep cloud spend efficient."
        },
        {
          "num": "05",
          "title": "Disaster recovery architecture",
          "desc": "Active-passive and active-active failover mechanisms ensuring business continuity."
        },
        {
          "num": "06",
          "title": "Post-migration monitoring",
          "desc": "Telemetry tracking system health, performance baselines, and cloud resource consumption."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA assesses your workloads before choosing a migration strategy.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Migrating legacy software suites and monolithic databases to modern cloud architectures."
        },
        {
          "title": "Telecommunications",
          "desc": "High-volume data processing workloads, cloud switching, and scalable network backbones."
        },
        {
          "title": "Innovation Ecosystems",
          "desc": "Rapid spin-up of cloud sandboxes, developer environments, and scalable incubation tech."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "Which cloud provider should we use?",
        "a": "This depends on your existing tech stack and workload needs; ZUNTRA helps assess the right fit."
      },
      {
        "q": "Is a full migration risky for systems currently in production?",
        "a": "At ZUNTRA, risk is managed through staged migration and testing."
      },
      {
        "q": "What's the difference between lift-and-shift and re-architecting?",
        "a": "At ZUNTRA, lift-and-shift moves applications as-is; re-architecting redesigns for cloud-native capabilities."
      },
      {
        "q": "How do you keep cloud costs from spiraling?",
        "a": "At ZUNTRA, cost optimization and right-sizing are part of the initial setup."
      },
      {
        "q": "What happens to our data during migration — is it safe?",
        "a": "At ZUNTRA, migration is validated carefully, with backup architecture in place throughout."
      },
      {
        "q": "How long does a typical cloud migration take?",
        "a": "This varies significantly; ZUNTRA provides an estimate after readiness assessment."
      },
      {
        "q": "Do we need disaster recovery planning as part of this?",
        "a": "At ZUNTRA, generally recommended and included in the infrastructure design."
      },
      {
        "q": "Will our team need training to manage cloud infrastructure afterward?",
        "a": "At ZUNTRA, this depends on your team's existing cloud experience."
      },
      {
        "q": "Can you migrate only part of our infrastructure?",
        "a": "At ZUNTRA, migrations can be phased rather than requiring an all-at-once approach."
      },
      {
        "q": "What ongoing support is available after migration?",
        "a": "At ZUNTRA, post-migration monitoring and support helps catch issues and optimize."
      }
    ],
    "cta": {
      "title": "Ready to move to the cloud?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "data-engineering-pipeline-architecture": {
    "hero": {
      "title": "ZUNTRA gets your data flowing reliably from source to where it's actually needed.",
      "desc": "ZUNTRA designs and builds data pipelines that move, transform, and prepare data reliably across your systems.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA designs and builds data pipelines that move, transform, and prepare data reliably across your systems."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Data pipeline design (ETL/ELT)",
          "desc": "High-throughput extraction, transformation, and loading pipelines using Spark, dbt, and Airflow."
        },
        {
          "num": "02",
          "title": "Data source integration",
          "desc": "Consolidating databases, third-party APIs, clickstreams, and IoT feeds into unified data lakes."
        },
        {
          "num": "03",
          "title": "Transformation and cleaning logic",
          "desc": "Automated deduplication, schema normalization, and data validation rules."
        },
        {
          "num": "04",
          "title": "Pipeline monitoring and error handling",
          "desc": "Automated alerting on pipeline stalls, dead-letter queue routing, and self-healing retries."
        },
        {
          "num": "05",
          "title": "Scalable data infrastructure",
          "desc": "Serverless and auto-scaling compute architectures that expand dynamically during peak data influx."
        },
        {
          "num": "06",
          "title": "Batch and real-time processing",
          "desc": "Hybrid streaming architectures supporting both micro-batching and low-latency continuous data flows."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA designs pipelines around your actual data quality and volume challenges, building in monitoring from the start.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Reconciliation feeds, market data ingestion, fraud telemetry, and automated transaction settlement."
        },
        {
          "title": "Energy",
          "desc": "Smart grid telemetry processing, consumption data streams, and predictive equipment logging."
        },
        {
          "title": "Logistics",
          "desc": "Fleet GPS tracking feeds, warehouse inventory updates, and supply chain telemetry pipelines."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between ETL and ELT?",
        "a": "At ZUNTRA, eTL transforms before loading; ELT loads raw data first — the right choice depends on your infrastructure."
      },
      {
        "q": "Can you pull data from multiple sources into one pipeline?",
        "a": "At ZUNTRA, yes — consolidating multiple sources is core to this service."
      },
      {
        "q": "How do you handle messy or inconsistent data?",
        "a": "At ZUNTRA, transformation and cleaning logic handles inconsistencies before data reaches its destination."
      },
      {
        "q": "What happens if a pipeline fails or breaks?",
        "a": "At ZUNTRA, monitoring and error handling catch failures immediately."
      },
      {
        "q": "Do you build pipelines for real-time data, or only batch?",
        "a": "At ZUNTRA, both — depending on how quickly your use case needs the data."
      },
      {
        "q": "How do you ensure pipelines can handle growing volumes?",
        "a": "At ZUNTRA, pipelines are architected with scalability in mind."
      },
      {
        "q": "Can this integrate with our existing BI dashboards?",
        "a": "At ZUNTRA, yes — pipelines typically feed directly into existing analytics tooling."
      },
      {
        "q": "How long does it take to build a data pipeline?",
        "a": "At ZUNTRA, this depends on complexity; initial pipelines are often achievable within weeks."
      },
      {
        "q": "Who maintains the pipeline after it's built?",
        "a": "At ZUNTRA, maintenance can be handled internally or supported externally, depending on your needs."
      },
      {
        "q": "What tools or platforms do you use for data pipelines?",
        "a": "At ZUNTRA, tooling is selected based on your existing infrastructure and requirements."
      }
    ],
    "cta": {
      "title": "Ready to fix your data pipelines?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "enterprise-data-warehousing-governance": {
    "hero": {
      "title": "ZUNTRA builds a single, trustworthy source of truth for your organization's data.",
      "desc": "ZUNTRA designs and implements enterprise data warehouses along with the governance policies that keep data accurate and secure.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA designs and implements enterprise data warehouses along with the governance policies that keep data accurate and secure."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Data warehouse architecture",
          "desc": "Modern cloud warehouse designs across Snowflake, BigQuery, and Databricks lakehouses."
        },
        {
          "num": "02",
          "title": "Data governance policy design",
          "desc": "Cataloging, lineage tracking, and data ownership frameworks ensuring compliance."
        },
        {
          "num": "03",
          "title": "Data quality monitoring",
          "desc": "Continuous automated data testing and anomaly detection before reports reach stakeholders."
        },
        {
          "num": "04",
          "title": "Access control and security",
          "desc": "Role-based column and row-level security protecting sensitive corporate and customer information."
        },
        {
          "num": "05",
          "title": "Master data management",
          "desc": "Unified master records for customer entities, product catalogs, and operational assets."
        },
        {
          "num": "06",
          "title": "Compliance-aligned data handling",
          "desc": "GDPR, HIPAA, and CCPA aligned data retention, tokenization, and deletion workflows."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA designs warehouse architecture around how your organization actually needs to query and report on data.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Auditable accounting ledgers, regulatory capital reporting, and risk aggregation warehouses."
        },
        {
          "title": "Healthcare",
          "desc": "HIPAA-compliant clinical research repositories, patient outcomes data, and operational warehouses."
        },
        {
          "title": "Government",
          "desc": "Secure public sector data repositories, multi-agency data sharing, and compliance frameworks."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between a data warehouse and a regular database?",
        "a": "At ZUNTRA, a warehouse is structured for analysis across large volumes of historical data."
      },
      {
        "q": "What is data governance and why does it matter?",
        "a": "At ZUNTRA, policies and processes that keep data accurate and consistently defined across an organization."
      },
      {
        "q": "How do you ensure data quality in the warehouse?",
        "a": "At ZUNTRA, quality monitoring catches inconsistencies before they undermine trust."
      },
      {
        "q": "Can you help us comply with data regulations?",
        "a": "At ZUNTRA, yes — compliance-aligned data handling is part of the governance design."
      },
      {
        "q": "What is master data management?",
        "a": "At ZUNTRA, maintaining a single consistent version of core business data across systems."
      },
      {
        "q": "How do you control who has access to sensitive data?",
        "a": "At ZUNTRA, access control defines who can see and act on specific data based on role."
      },
      {
        "q": "Can this integrate with our existing BI and analytics tools?",
        "a": "At ZUNTRA, yes — the warehouse typically feeds directly into existing reporting infrastructure."
      },
      {
        "q": "How long does it take to implement an enterprise data warehouse?",
        "a": "At ZUNTRA, this depends on scope; an estimate follows initial assessment."
      },
      {
        "q": "What happens as our data volume and sources grow?",
        "a": "At ZUNTRA, architecture is designed with scalability, extending governance to new sources."
      },
      {
        "q": "Do we need a dedicated data team to maintain this?",
        "a": "At ZUNTRA, ongoing maintenance benefits from some dedicated ownership."
      }
    ],
    "cta": {
      "title": "Ready for a trustworthy data foundation?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "cybersecurity-compliance-advisory": {
    "hero": {
      "title": "ZUNTRA helps you reduce risk and meet the standards your industry actually requires.",
      "desc": "ZUNTRA provides cybersecurity assessment and compliance advisory services, identifying vulnerabilities and hardening systems.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA provides cybersecurity assessment and compliance advisory services, identifying vulnerabilities and hardening systems."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Vulnerability assessment and pen testing",
          "desc": "Simulated adversary attacks and infrastructure scans identifying exploitable vulnerabilities."
        },
        {
          "num": "02",
          "title": "Compliance gap analysis",
          "desc": "Benchmarking current controls against SOC 2, ISO 27001, HIPAA, PCI DSS, and GDPR."
        },
        {
          "num": "03",
          "title": "Security policy development",
          "desc": "Drafting pragmatic security manuals, acceptable use policies, and employee security guidelines."
        },
        {
          "num": "04",
          "title": "Access control and identity review",
          "desc": "Zero-trust architecture, multi-factor authentication enforcement, and least-privilege audits."
        },
        {
          "num": "05",
          "title": "Incident response planning",
          "desc": "Playbooks, escalation paths, and tabletop exercises preparing your organization for breach containment."
        },
        {
          "num": "06",
          "title": "Ongoing security monitoring recommendations",
          "desc": "Evaluating SIEM tools, managed detection & response (MDR), and SOC integration options."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with an honest assessment of your current security posture against relevant compliance standards.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Fintech security reviews, bank-grade encryption audits, and financial regulatory filings."
        },
        {
          "title": "Healthcare",
          "desc": "Electronic health record security, HIPAA breach prevention, and medical device security."
        },
        {
          "title": "Government",
          "desc": "FedRAMP alignment, defense supply chain compliance, and public sector threat defense."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between a security assessment and a compliance audit?",
        "a": "An assessment looks for vulnerabilities; an audit checks adherence to regulatory standards — ZUNTRA addresses both together."
      },
      {
        "q": "What compliance standards can you help us meet?",
        "a": "This depends on your industry and jurisdiction, which ZUNTRA assesses against your specific situation."
      },
      {
        "q": "Do you perform penetration testing?",
        "a": "At ZUNTRA, yes — assessment and penetration testing is part of identifying real exposure."
      },
      {
        "q": "How do you prioritize which vulnerabilities to fix first?",
        "a": "At ZUNTRA, prioritization is based on actual risk rather than treating findings equally."
      },
      {
        "q": "What happens if we're already out of compliance?",
        "a": "ZUNTRA identifies gaps through analysis and build a remediation plan."
      },
      {
        "q": "Can you help develop internal security policies, not just fix technical issues?",
        "a": "At ZUNTRA, yes — policy development is part of this service."
      },
      {
        "q": "Do you provide ongoing monitoring, or just a one-time assessment?",
        "a": "ZUNTRA provides recommendations; whether managed internally or externally depends on your needs."
      },
      {
        "q": "What is incident response planning?",
        "a": "At ZUNTRA, preparing a defined process for how the organization responds to a breach."
      },
      {
        "q": "How often should security assessments be repeated?",
        "a": "At ZUNTRA, this depends on your industry and risk profile; periodic reassessment is generally recommended."
      },
      {
        "q": "Is this only relevant for large enterprises?",
        "a": "At ZUNTRA, requirements apply regardless of size, though scope typically scales with the organization."
      }
    ],
    "cta": {
      "title": "Ready to close your security gaps?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "digital-transformation-strategy-roadmapping": {
    "hero": {
      "title": "ZUNTRA gives you a clear plan for modernizing your organization, not just a stack of new tools.",
      "desc": "ZUNTRA works with organizations to build a digital transformation strategy and roadmap, sequencing initiatives for manageable change.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA works with organizations to build a digital transformation strategy and roadmap, sequencing initiatives for manageable change."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Current-state assessment",
          "desc": "Comprehensive review of legacy systems, organizational bottlenecks, and manual workflows."
        },
        {
          "num": "02",
          "title": "Digital maturity benchmarking",
          "desc": "Comparing your technology capabilities against industry benchmarks and modern leaders."
        },
        {
          "num": "03",
          "title": "Roadmap development and prioritization",
          "desc": "A phased multi-quarter implementation plan balancing quick wins with long-term foundations."
        },
        {
          "num": "04",
          "title": "Change management planning",
          "desc": "Strategies to ensure teams adopt new technology willingly with minimal friction."
        },
        {
          "num": "05",
          "title": "Technology investment recommendations",
          "desc": "Pragmatic build-vs-buy evaluations, vendor comparisons, and budget modeling."
        },
        {
          "num": "06",
          "title": "Stakeholder alignment workshops",
          "desc": "Facilitated executive sessions ensuring technical goals align with business revenue goals."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts by understanding where the organization actually is today, not where leadership assumes it is.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Government",
          "desc": "Modernizing public service delivery, digital identity initiatives, and civic engagement platforms."
        },
        {
          "title": "Manufacturing",
          "desc": "Industry 4.0 adoption, connected factory floors, smart inventory, and digital supply networks."
        },
        {
          "title": "Innovation Ecosystems",
          "desc": "Scaling incubator infrastructure, research collaboration platforms, and ecosystem growth tech."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between a technology strategy and a roadmap?",
        "a": "Strategy sets direction; a roadmap sequences specific initiatives over time — ZUNTRA typicallies build both."
      },
      {
        "q": "How do you assess where our organization currently stands?",
        "a": "At ZUNTRA, a current-state assessment establishes an honest starting point."
      },
      {
        "q": "Will this roadmap require replacing all our existing systems?",
        "a": "At ZUNTRA, not necessarily — recommendations are prioritized by impact and feasibility."
      },
      {
        "q": "How long does a transformation roadmap typically span?",
        "a": "At ZUNTRA, commonly one to several years, broken into phased initiatives."
      },
      {
        "q": "What is change management and why is it part of this?",
        "a": "At ZUNTRA, it addresses how people and processes adapt to new technology."
      },
      {
        "q": "How do you decide which initiatives to prioritize first?",
        "a": "At ZUNTRA, prioritization is based on expected impact relative to effort and readiness."
      },
      {
        "q": "Do you help align different stakeholders?",
        "a": "At ZUNTRA, yes — alignment workshops help reconcile different priorities."
      },
      {
        "q": "Does this include specific technology investment recommendations?",
        "a": "At ZUNTRA, yes — the roadmap includes specific investment recommendations."
      },
      {
        "q": "Can you help implement the roadmap, or is this purely advisory?",
        "a": "At ZUNTRA, this is advisory work, though it maps directly to other services for implementation."
      },
      {
        "q": "How do we measure whether the transformation is succeeding?",
        "a": "At ZUNTRA, success metrics are defined as part of the roadmap itself."
      }
    ],
    "cta": {
      "title": "Ready to plan your transformation?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "devsecops-ci-cd-pipeline-setup": {
    "hero": {
      "title": "ZUNTRA builds security into your development pipeline, not bolted on at the end.",
      "desc": "ZUNTRA sets up DevSecOps practices and CI/CD pipelines that integrate security checks into the development process.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA sets up DevSecOps practices and CI/CD pipelines that integrate security checks into the development process."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "CI/CD pipeline design and implementation",
          "desc": "Automated test, build, and deploy workflows delivering code changes safely to production."
        },
        {
          "num": "02",
          "title": "Automated security scanning",
          "desc": "SAST, DAST, and container vulnerability scanning catching vulnerabilities pre-merge."
        },
        {
          "num": "03",
          "title": "Infrastructure-as-code setup",
          "desc": "Terraform, Pulumi, and CloudFormation templates managing environments consistently."
        },
        {
          "num": "04",
          "title": "Secrets management automation",
          "desc": "HashiCorp Vault, AWS Secrets Manager, and Doppler integration eliminating plaintext credentials."
        },
        {
          "num": "05",
          "title": "Embedded compliance checks",
          "desc": "Automated policy-as-code (OPA) enforcing security and governance rules on every commit."
        },
        {
          "num": "06",
          "title": "Pipeline monitoring and alerting",
          "desc": "Real-time metrics on build failure rates, deployment frequencies, and security scan alerts."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA integrates security scanning and compliance checks directly into your existing development workflow.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Enterprise Technology",
          "desc": "Securing multi-tenant SaaS build pipelines, cloud microservices, and release trains."
        },
        {
          "title": "Financial Services",
          "desc": "Strict separation of duties, automated audit trail generation, and verified binary signing."
        },
        {
          "title": "Telecommunications",
          "desc": "Continuous delivery for mission-critical carrier applications with zero downtime requirements."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What is DevSecOps and how is it different from regular DevOps?",
        "a": "At ZUNTRA, it integrates security directly into the pipeline rather than as a separate review step."
      },
      {
        "q": "Will adding security checks slow down our deployment process?",
        "a": "At ZUNTRA, well-integrated scanning typically adds minimal delay compared to manual review."
      },
      {
        "q": "What is infrastructure-as-code and why does it matter?",
        "a": "At ZUNTRA, it manages infrastructure through version-controlled code, making deployments more consistent."
      },
      {
        "q": "How do you handle secrets like API keys and passwords securely?",
        "a": "At ZUNTRA, secrets management ensures credentials aren't hardcoded or exposed."
      },
      {
        "q": "Can this integrate with our existing CI/CD tools?",
        "a": "At ZUNTRA, integration with existing tooling is generally preferred where feasible."
      },
      {
        "q": "What kinds of security issues does automated scanning catch?",
        "a": "At ZUNTRA, known vulnerability patterns, dependency issues, and common misconfigurations."
      },
      {
        "q": "Can compliance requirements be built directly into the pipeline?",
        "a": "At ZUNTRA, yes — compliance checks can be embedded so violations are caught automatically."
      },
      {
        "q": "How do you monitor for issues once the pipeline is live?",
        "a": "At ZUNTRA, pipeline monitoring and alerting flag failures or anomalies."
      },
      {
        "q": "Does our team need specialized training for a DevSecOps pipeline?",
        "a": "At ZUNTRA, some familiarity is needed; training can be factored into implementation."
      },
      {
        "q": "How long does it take to set up a DevSecOps pipeline?",
        "a": "At ZUNTRA, initial pipelines are often achievable within several weeks."
      }
    ],
    "cta": {
      "title": "Ready to build security into your pipeline?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "real-time-data-streaming-event-driven-architecture": {
    "hero": {
      "title": "ZUNTRA helps you react to what's happening now, not what happened in yesterday's batch job.",
      "desc": "ZUNTRA designs event-driven systems and real-time streaming infrastructure for processing data as it happens.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA designs event-driven systems and real-time streaming infrastructure for processing data as it happens."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Event-driven architecture design",
          "desc": "Decoupled microservice architectures communicating through events and domain event streams."
        },
        {
          "num": "02",
          "title": "Real-time streaming pipeline setup",
          "desc": "Kafka, Apache Flink, AWS Kinesis, and Redpanda clusters processing millions of events per second."
        },
        {
          "num": "03",
          "title": "Message queue and event broker implementation",
          "desc": "Reliable pub/sub message brokers with at-least-once or exactly-once delivery guarantees."
        },
        {
          "num": "04",
          "title": "Real-time analytics and alerting",
          "desc": "Sliding window aggregations and anomaly alerts triggering automated interventions instantly."
        },
        {
          "num": "05",
          "title": "Scalable stream processing infrastructure",
          "desc": "Resilient consumer groups and partition scaling that dynamically adjust to traffic surges."
        },
        {
          "num": "06",
          "title": "Integration for event triggers",
          "desc": "Connecting event brokers directly to serverless functions, webhooks, and downstream databases."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA assesses whether your use case genuinely needs real-time processing or whether batch processing is sufficient.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Telecommunications",
          "desc": "Live network telemetry, subscriber bandwidth usage tracking, and automated traffic routing."
        },
        {
          "title": "Logistics",
          "desc": "Real-time shipment GPS updates, geofencing triggers, and dynamic ETA recalculations."
        },
        {
          "title": "Energy",
          "desc": "Grid load telemetry, sensor fluctuation alerts, and real-time generation balance control."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Accuracy",
          "value": "99.9%",
          "fill": "85%",
          "color": "blue",
          "desc": "Task completion and operational precision."
        },
        {
          "label": "Speed",
          "value": "3.2s",
          "fill": "92%",
          "color": "orange",
          "desc": "Average time to execute end-to-end task."
        },
        {
          "label": "Capacity",
          "value": "5x",
          "fill": "75%",
          "color": "green",
          "desc": "Volume increase handled by existing teams."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "MODULE A",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MODULE B",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "MODULE C",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "94%",
          "label": "First-pass resolution"
        },
        {
          "value": "2.4s",
          "label": "Average latency"
        },
        {
          "value": "8M+",
          "label": "Tasks executed"
        },
        {
          "value": "99%",
          "label": "Uptime SLA"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Research",
          "status": "Analysis",
          "dotColor": "blue",
          "desc": "Gathers and synthesizes required context."
        },
        {
          "title": "Triage",
          "status": "Routing",
          "dotColor": "orange",
          "desc": "Categorizes and directs tasks to appropriate handlers."
        },
        {
          "title": "Execution",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Completes multi-step transactions securely."
        },
        {
          "title": "Review",
          "status": "Quality",
          "dotColor": "purple",
          "desc": "Evaluates outputs against predefined standards."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between batch processing and real-time streaming?",
        "a": "At ZUNTRA, batch handles data in intervals; streaming processes continuously as it arrives."
      },
      {
        "q": "Do we actually need real-time processing, or would batch work?",
        "a": "ZUNTRA assesses whether your business need genuinely requires real-time response."
      },
      {
        "q": "What is event-driven architecture?",
        "a": "At ZUNTRA, a design where system parts communicate by reacting to events rather than direct calls."
      },
      {
        "q": "What are message queues and event brokers, and why do we need them?",
        "a": "At ZUNTRA, infrastructure that manages event flow reliably, ensuring events aren't lost under load."
      },
      {
        "q": "Can real-time streaming handle high volumes of data?",
        "a": "At ZUNTRA, yes — stream processing infrastructure is architected to be scalable."
      },
      {
        "q": "How does this integrate with our existing systems?",
        "a": "At ZUNTRA, integration for triggering and consuming events connects real-time infrastructure to your stack."
      },
      {
        "q": "Can we get real-time alerts based on streaming data?",
        "a": "At ZUNTRA, yes — real-time analytics and alerting lets you respond immediately."
      },
      {
        "q": "How reliable is real-time data streaming — can events get lost?",
        "a": "At ZUNTRA, message broker infrastructure is designed to handle events reliably."
      },
      {
        "q": "What industries typically need this kind of infrastructure?",
        "a": "At ZUNTRA, industries where timing matters — telecom, logistics, energy grid monitoring."
      },
      {
        "q": "How complex is it to maintain real-time infrastructure compared to batch?",
        "a": "At ZUNTRA, real-time systems generally require more operational sophistication."
      }
    ],
    "cta": {
      "title": "Ready to go real-time?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
  "marketing-automation-crm-platforms": {
    "hero": {
      "title": "ZUNTRA automates the follow-up, so no lead falls through the cracks.",
      "desc": "ZUNTRA builds and implements marketing automation and CRM systems that manage lead nurturing and pipeline tracking.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds and implements marketing automation and CRM systems that manage lead nurturing and pipeline tracking."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "CRM setup and customization",
          "desc": "Custom pipeline stages, field mapping, and bespoke CRM architecture configured to your exact sales model."
        },
        {
          "num": "02",
          "title": "Marketing automation workflow design",
          "desc": "Multi-channel trigger sequences, automated drip campaigns, and timed follow-ups that run autonomously."
        },
        {
          "num": "03",
          "title": "Lead scoring and pipeline tracking",
          "desc": "Behavioral and demographic scoring algorithms that surface high-intent prospects to sales instantly."
        },
        {
          "num": "04",
          "title": "Sales and marketing integration",
          "desc": "Bi-directional data sync connecting lead generation channels with sales enablement and reps' daily tools."
        },
        {
          "num": "05",
          "title": "Customer segmentation",
          "desc": "Dynamic cohorts and real-time audience tagging based on engagement, lifecycle stage, and purchase history."
        },
        {
          "num": "06",
          "title": "Campaign performance dashboards",
          "desc": "Unified reporting tracking conversion rates, pipeline velocity, CAC, and channel effectiveness in real time."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA maps your actual sales and customer journey before building automation around it.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Real Estate",
          "desc": "Automated lead intake from property portals, showing schedules, and agent dispatch."
        },
        {
          "title": "Education",
          "desc": "Prospective student enrollment funnels, deadline reminders, and admissions tracking."
        },
        {
          "title": "Retail",
          "desc": "Omnichannel lifecycle engagement, cart recovery triggers, and repeat customer promotions."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Follow-Up Rate",
          "value": "100%",
          "fill": "95%",
          "color": "blue",
          "desc": "Lead response coverage with zero missed inquiries."
        },
        {
          "label": "Speed to Lead",
          "value": "<1m",
          "fill": "92%",
          "color": "orange",
          "desc": "Automated instant first-touch response time."
        },
        {
          "label": "Conversion Lift",
          "value": "+34%",
          "fill": "85%",
          "color": "green",
          "desc": "Increase in lead-to-opportunity pipeline velocity."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "CRM SYNC",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "NURTURE ENGINE",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "PIPELINE ROUTER",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "99.8%",
          "label": "Data sync integrity"
        },
        {
          "value": "3.1x",
          "label": "Pipeline throughput"
        },
        {
          "value": "100%",
          "label": "Lead routing accuracy"
        },
        {
          "value": "99.9%",
          "label": "Platform uptime"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Lead Capture",
          "status": "Intake",
          "dotColor": "blue",
          "desc": "Ingests and parses leads from web forms, ads, and external listings."
        },
        {
          "title": "Scoring Engine",
          "status": "Qualification",
          "dotColor": "orange",
          "desc": "Scores lead actions and intent against historical closing data."
        },
        {
          "title": "Pipeline Router",
          "status": "Dispatch",
          "dotColor": "green",
          "desc": "Assigns qualified leads directly to the appropriate sales representative."
        },
        {
          "title": "Nurture Bot",
          "status": "Engagement",
          "dotColor": "purple",
          "desc": "Maintains cadence through personalized content and re-engagement triggers."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between a CRM and marketing automation?",
        "a": "A CRM tracks relationships and pipeline; automation handles nurturing tasks — ZUNTRA sets these up together."
      },
      {
        "q": "Which CRM platform should we use?",
        "a": "This depends on team size and sales process; ZUNTRA helps assess the right fit."
      },
      {
        "q": "How does lead scoring work?",
        "a": "At ZUNTRA, it assigns value based on behavior and fit, helping prioritize follow-up."
      },
      {
        "q": "Can this integrate with our existing sales and marketing tools?",
        "a": "At ZUNTRA, yes — integration with your tech stack is part of implementation."
      },
      {
        "q": "How do you customize automation workflows to our sales process?",
        "a": "ZUNTRA maps your actual journey first, then build workflows that reflect it."
      },
      {
        "q": "Can we segment our audience for more targeted campaigns?",
        "a": "At ZUNTRA, yes — segmentation and targeting logic is part of the setup."
      },
      {
        "q": "How do we know if the automation is actually working?",
        "a": "At ZUNTRA, performance dashboards let you track and adjust based on real data."
      },
      {
        "q": "Will our sales team need training on the new CRM?",
        "a": "At ZUNTRA, this depends on current familiarity; training can be factored in."
      },
      {
        "q": "How long does it take to set up marketing automation and a CRM?",
        "a": "At ZUNTRA, a working initial setup is typically achievable within a few weeks."
      },
      {
        "q": "Can this scale as our customer base and team grow?",
        "a": "At ZUNTRA, yes — systems are set up with growth in mind."
      }
    ],
    "cta": {
      "title": "Ready to automate your pipeline?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "customer-data-platforms-personalization-engines": {
    "hero": {
      "title": "ZUNTRA gives you one unified view of every customer, powering personalization everywhere.",
      "desc": "ZUNTRA builds customer data platforms that unify data across touchpoints, powering personalization based on a complete view.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds customer data platforms that unify data across touchpoints, powering personalization based on a complete view."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "CDP architecture and setup",
          "desc": "Centralized customer data foundation aggregating first-party events, identifiers, and cross-platform actions."
        },
        {
          "num": "02",
          "title": "Data unification across touchpoints",
          "desc": "Identity resolution stitching anonymous web visits, mobile apps, CRM contacts, and in-store actions."
        },
        {
          "num": "03",
          "title": "Personalization engine design",
          "desc": "Rule-based and algorithmic recommendation logic tailoring messaging, products, and user experiences."
        },
        {
          "num": "04",
          "title": "Real-time profile updates",
          "desc": "Sub-second event ingestion and profile recalculation ensuring interactions reflect the user's latest actions."
        },
        {
          "num": "05",
          "title": "Privacy-compliant data management",
          "desc": "Robust governance framework ensuring full compliance with GDPR, CCPA, consent management, and data hygiene."
        },
        {
          "num": "06",
          "title": "Marketing and product platform integration",
          "desc": "Continuous data activation streaming enriched customer attributes into ads, email, web, and product apps."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA consolidates fragmented customer data into a single reliable view first, since personalization is only as good as the data feeding it.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "Omnichannel customer profiles syncing online browses with in-store purchases and personalized offers."
        },
        {
          "title": "Media",
          "desc": "Audience affinity grouping, dynamic paywall triggers, and personalized content feeds."
        },
        {
          "title": "Telecommunications",
          "desc": "Account lifecycle monitoring, real-time churn risk detection, and plan upgrade personalization."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Profile Unification",
          "value": "360°",
          "fill": "94%",
          "color": "blue",
          "desc": "Complete multi-touchpoint audience identity resolution."
        },
        {
          "label": "Event Ingestion",
          "value": "<100ms",
          "fill": "90%",
          "color": "orange",
          "desc": "Real-time streaming event processing latency."
        },
        {
          "label": "Engagement Lift",
          "value": "2.8x",
          "fill": "88%",
          "color": "green",
          "desc": "Higher conversion through contextual personalization."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "INGESTION PIPELINE",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "IDENTITY GRAPH",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "ACTIVATION HUB",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "100%",
          "label": "Privacy governance compliance"
        },
        {
          "value": "12M+",
          "label": "Daily events processed"
        },
        {
          "value": "4.2x",
          "label": "Audience segment precision"
        },
        {
          "value": "99.9%",
          "label": "Pipeline reliability"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Event Listener",
          "status": "Ingestion",
          "dotColor": "blue",
          "desc": "Captures behavioral clickstreams across web, mobile, and backend APIs."
        },
        {
          "title": "Identity Stitcher",
          "status": "Resolution",
          "dotColor": "orange",
          "desc": "Unifies cookies, device IDs, emails, and account numbers into one person."
        },
        {
          "title": "Recommendation Core",
          "status": "Intelligence",
          "dotColor": "green",
          "desc": "Generates personalized dynamic suggestions based on real-time behavior."
        },
        {
          "title": "Channel Dispatcher",
          "status": "Activation",
          "dotColor": "purple",
          "desc": "Pushes audiences and calculated traits to marketing and product tools."
        }
      ]
    },
    "faqs": [
      {
        "q": "What is a customer data platform and how is it different from a CRM?",
        "a": "At ZUNTRA, a CDP unifies data from all touchpoints; a CRM primarily tracks sales relationships."
      },
      {
        "q": "How does personalization actually work with a CDP in place?",
        "a": "At ZUNTRA, the engine uses the unified profile to tailor content based on a fuller picture of behavior."
      },
      {
        "q": "Is customer data collection compliant with privacy regulations?",
        "a": "At ZUNTRA, yes — privacy-compliant management is built into the platform design."
      },
      {
        "q": "Can this integrate with the marketing and product tools we already use?",
        "a": "At ZUNTRA, yes — integration is part of implementation."
      },
      {
        "q": "How real-time is the customer profile?",
        "a": "At ZUNTRA, real-time updates are part of the design so personalization reflects recent behavior."
      },
      {
        "q": "Do we need a data engineering team to maintain a CDP?",
        "a": "At ZUNTRA, ongoing maintenance benefits from some dedicated ownership, depending on complexity."
      },
      {
        "q": "How is this different from basic website personalization tools?",
        "a": "At ZUNTRA, a CDP draws on a unified view across all touchpoints for more accurate personalization."
      },
      {
        "q": "Can this work across multiple channels, like email, app, and website?",
        "a": "At ZUNTRA, yes — personalization is designed to be consistent across channels."
      },
      {
        "q": "How long does it take to unify our customer data into a CDP?",
        "a": "At ZUNTRA, initial implementation is typically achievable within several weeks to months."
      },
      {
        "q": "What kind of businesses benefit most from a CDP?",
        "a": "At ZUNTRA, businesses with customers across multiple touchpoints — retail, media, telecom."
      }
    ],
    "cta": {
      "title": "Ready to unify your customer data?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "e-commerce-platform-development-optimization": {
    "hero": {
      "title": "ZUNTRA builds and tunes the storefront that actually converts.",
      "desc": "ZUNTRA builds and optimizes e-commerce platforms, from storefront development to ongoing conversion rate optimization.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds and optimizes e-commerce platforms, from storefront development to ongoing conversion rate optimization."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Custom e-commerce platform development",
          "desc": "High-speed headless or monolithic storefronts engineered for high throughput and flawless UI/UX."
        },
        {
          "num": "02",
          "title": "Platform migration and optimization",
          "desc": "Seamless catalog, order, and customer migrations with zero data loss or search ranking disruption."
        },
        {
          "num": "03",
          "title": "Checkout and cart optimization",
          "desc": "Friction-free single-page or stepped checkout flows designed to minimize abandoned carts."
        },
        {
          "num": "04",
          "title": "Product catalog and inventory integration",
          "desc": "Real-time bi-directional sync across ERPs, warehouse management systems, and multiple store locations."
        },
        {
          "num": "05",
          "title": "Payment gateway integration",
          "desc": "Secure multi-currency payment infrastructure supporting global cards, digital wallets, and BNPL."
        },
        {
          "num": "06",
          "title": "Conversion rate optimization and A/B testing",
          "desc": "Continuous data-driven experiments on landing pages, product pages, and conversion funnels."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA looks at the actual points where customers drop off in your funnel and optimize those specifically.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "High-volume direct-to-consumer and omnichannel retail stores with complex multi-SKU catalogs."
        },
        {
          "title": "Media",
          "desc": "Digital subscription checkouts, paywalled content billing, and digital asset marketplaces."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Conversion Rate",
          "value": "+42%",
          "fill": "92%",
          "color": "blue",
          "desc": "Benchmark conversion lift following checkout redesign."
        },
        {
          "label": "Page Load Speed",
          "value": "0.8s",
          "fill": "95%",
          "color": "orange",
          "desc": "Mobile performance score optimized for Core Web Vitals."
        },
        {
          "label": "Cart Abandonment",
          "value": "-28%",
          "fill": "85%",
          "color": "green",
          "desc": "Reduction in dropped checkouts via streamlined flows."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "HEADLESS FRONTEND",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "CHECKOUT ENGINE",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "ERP INVENTORY",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "99.99%",
          "label": "Black Friday availability"
        },
        {
          "value": "0.8s",
          "label": "Average page response"
        },
        {
          "value": "100%",
          "label": "Payment PCI compliance"
        },
        {
          "value": "3.5x",
          "label": "A/B test iteration pace"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Storefront UI",
          "status": "Presentation",
          "dotColor": "blue",
          "desc": "Fast, responsive web and mobile shopping experience."
        },
        {
          "title": "Cart & Checkout",
          "status": "Conversion",
          "dotColor": "orange",
          "desc": "Streamlined single-page checkout flow with frictionless payment methods."
        },
        {
          "title": "Inventory Connector",
          "status": "Operations",
          "dotColor": "green",
          "desc": "Real-time stock reservation and warehouse fulfillment sync."
        },
        {
          "title": "CRO Analyzer",
          "status": "Optimization",
          "dotColor": "purple",
          "desc": "Monitors funnel friction points and automated A/B test splits."
        }
      ]
    },
    "faqs": [
      {
        "q": "Should we build a custom e-commerce platform or use something like Shopify?",
        "a": "This depends on your needs and growth plans; ZUNTRA helps assess the right fit."
      },
      {
        "q": "Can you migrate our existing store to a new platform?",
        "a": "At ZUNTRA, yes — platform migration is part of this service."
      },
      {
        "q": "What is checkout optimization and why does it matter?",
        "a": "At ZUNTRA, it reduces friction in the purchase process, where cart abandonment often happens."
      },
      {
        "q": "How do you integrate payment gateways?",
        "a": "At ZUNTRA, payment integration is a standard part of e-commerce development."
      },
      {
        "q": "What is A/B testing and how does it help our store?",
        "a": "At ZUNTRA, it compares versions of a page so decisions are based on actual behavior."
      },
      {
        "q": "Can this integrate with our existing inventory management system?",
        "a": "At ZUNTRA, yes — integration keeps stock levels and product data in sync."
      },
      {
        "q": "How long does it take to build or optimize an e-commerce platform?",
        "a": "This depends on scope; ZUNTRA provides a timeline for your specific project."
      },
      {
        "q": "Do you handle mobile optimization for the storefront?",
        "a": "At ZUNTRA, yes — mobile-responsive design is a standard part of development."
      },
      {
        "q": "Can you help increase our conversion rate on an existing store?",
        "a": "At ZUNTRA, yes — optimizing an existing store is a common, lower-cost starting point."
      },
      {
        "q": "How do you measure whether optimization changes are actually working?",
        "a": "At ZUNTRA, changes are measured against defined conversion metrics through testing."
      }
    ],
    "cta": {
      "title": "Ready to increase conversion?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "seo-aeo-strategy-content-engineering": {
    "hero": {
      "title": "ZUNTRA gets you found by search engines and AI answer engines alike.",
      "desc": "ZUNTRA builds SEO and AEO strategy and content, optimizing for both traditional search and AI-driven answer engines.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds SEO and AEO strategy and content, optimizing for both traditional search and AI-driven answer engines."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "SEO audit and strategy development",
          "desc": "Deep analysis of technical foundations, crawl budgets, backlink profiles, and competitive rank gaps."
        },
        {
          "num": "02",
          "title": "AEO content structuring",
          "desc": "Formatting data, direct-answer schemas, and Q&A structures optimized for citation by ChatGPT, Perplexity, and Claude."
        },
        {
          "num": "03",
          "title": "Keyword and search intent research",
          "desc": "Mapping high-intent commercial queries, informational topics, and semantic entity clusters."
        },
        {
          "num": "04",
          "title": "On-page and technical SEO",
          "desc": "Core Web Vitals acceleration, canonical handling, schema markup, and responsive page hierarchy."
        },
        {
          "num": "05",
          "title": "Content architecture and internal linking",
          "desc": "Topic clusters, semantic link networks, and hub-and-spoke content structures that distribute topical authority."
        },
        {
          "num": "06",
          "title": "Ongoing content performance monitoring",
          "desc": "Real-time rank tracking, impression analytics, organic traffic trends, and AI answer engine share-of-voice."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds content structured to perform well in both traditional search results and AI-generated answers.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Media",
          "desc": "Editorial workflow optimization, news schema structuring, and high-volume topical authority."
        },
        {
          "title": "Enterprise Technology",
          "desc": "High-value B2B buyer intent targeting, category creation, and product documentation discovery."
        },
        {
          "title": "Innovation Ecosystems",
          "desc": "Thought leadership indexing, ecosystem directory visibility, and founder resource distribution."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Organic Traffic",
          "value": "+180%",
          "fill": "94%",
          "color": "blue",
          "desc": "Search visibility growth across high-intent topic clusters."
        },
        {
          "label": "AEO Citations",
          "value": "Top 3",
          "fill": "89%",
          "color": "orange",
          "desc": "Direct answer engine mention and citation rate."
        },
        {
          "label": "Crawl Index Rate",
          "value": "99.4%",
          "fill": "92%",
          "color": "green",
          "desc": "Error-free search indexation across high-priority pages."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "TECHNICAL AUDITOR",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "TOPIC GRAPH",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "AEO CITATION ENGINE",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "85+",
          "label": "Target search terms on Page 1"
        },
        {
          "value": "4.8x",
          "label": "AI engine answer inclusion"
        },
        {
          "value": "98/100",
          "label": "Core Web Vitals health"
        },
        {
          "value": "100%",
          "label": "Schema validation score"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Intent Researcher",
          "status": "Research",
          "dotColor": "blue",
          "desc": "Maps user search intent, query phrasing, and LLM prompt patterns."
        },
        {
          "title": "Technical Architect",
          "status": "Optimization",
          "dotColor": "orange",
          "desc": "Resolves crawl bottlenecks, accelerates load speeds, and secures canonicals."
        },
        {
          "title": "Content Engineer",
          "status": "Structuring",
          "dotColor": "green",
          "desc": "Builds schema markup, entity relationships, and structured answer blocks."
        },
        {
          "title": "Authority Tracker",
          "status": "Analytics",
          "dotColor": "purple",
          "desc": "Monitors search position movements and AI engine citation share."
        }
      ]
    },
    "faqs": [
      {
        "q": "What is AEO and how is it different from SEO?",
        "a": "At ZUNTRA, aEO optimizes content to be surfaced by AI answer engines; SEO optimizes for search rankings."
      },
      {
        "q": "How long does it take to see SEO results?",
        "a": "At ZUNTRA, results typically take months as search engines crawl and re-rank content."
      },
      {
        "q": "What does a technical SEO audit actually check?",
        "a": "At ZUNTRA, site speed, mobile-friendliness, crawlability, and structured data."
      },
      {
        "q": "How do you decide which keywords or topics to target?",
        "a": "At ZUNTRA, keyword and intent research identifies what your audience searches for."
      },
      {
        "q": "Can you optimize our existing content, or only create new content?",
        "a": "At ZUNTRA, both — optimizing existing content is often a faster win."
      },
      {
        "q": "What is internal linking and why does it matter for SEO?",
        "a": "At ZUNTRA, it connects related pages, helping users and search engines understand site structure."
      },
      {
        "q": "How is content structured differently for AI answer engines?",
        "a": "At ZUNTRA, aI engines favor clearly structured, direct, well-organized content."
      },
      {
        "q": "Do you track how our content is performing over time?",
        "a": "At ZUNTRA, yes — ongoing performance monitoring lets strategy be adjusted."
      },
      {
        "q": "How competitive does our industry need to be before SEO investment makes sense?",
        "a": "At ZUNTRA, most industries with organic search demand benefit, though competition affects timeline."
      },
      {
        "q": "Can AEO and SEO strategies work together, or do they conflict?",
        "a": "At ZUNTRA, they largely complement each other, though some tactical choices differ."
      }
    ],
    "cta": {
      "title": "Ready to be found and cited?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "marketing-analytics-attribution-modeling": {
    "hero": {
      "title": "ZUNTRA shows you which marketing actually drives results, not just which looks good on a report.",
      "desc": "ZUNTRA builds marketing analytics and attribution models that show which channels are actually driving conversions.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds marketing analytics and attribution models that show which channels are actually driving conversions."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Multi-touch attribution model setup",
          "desc": "Linear, time-decay, position-based, and data-driven models assigning real value to each interaction."
        },
        {
          "num": "02",
          "title": "Marketing dashboard and reporting",
          "desc": "Executive and tactical dashboards providing real-time visibility into pipeline, spend, and CAC."
        },
        {
          "num": "03",
          "title": "Channel performance analysis",
          "desc": "Cross-channel campaign evaluation uncovering true incremental ROI and underperforming spend."
        },
        {
          "num": "04",
          "title": "Customer journey tracking",
          "desc": "Granular journey stitching from first anonymous touch through deal closure and account renewal."
        },
        {
          "num": "05",
          "title": "Compliance-aware analytics",
          "desc": "Server-side tracking and privacy-preserving analytics resilient to cookie deprecation and tracking blocks."
        },
        {
          "num": "06",
          "title": "Marketing ROI measurement frameworks",
          "desc": "Unified financial models connecting marketing acquisition costs directly to bottom-line revenue."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds attribution models around your actual customer journey and channel mix.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Audited attribution tracking compliant with financial advertising and consumer privacy standards."
        },
        {
          "title": "Healthcare",
          "desc": "HIPAA-compliant de-identified patient journey analytics and provider conversion measurement."
        },
        {
          "title": "Retail",
          "desc": "Omnichannel marketing mix modeling connecting digital ad spend with both online and in-store transactions."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Attribution Accuracy",
          "value": "96%",
          "fill": "92%",
          "color": "blue",
          "desc": "Confidence score in touchpoint value distribution."
        },
        {
          "label": "Wasted Spend Eliminated",
          "value": "25-35%",
          "fill": "88%",
          "color": "orange",
          "desc": "Reallocated budget from non-converting vanity channels."
        },
        {
          "label": "Data Latency",
          "value": "<15m",
          "fill": "85%",
          "color": "green",
          "desc": "Reporting refresh cycle from campaign interaction to BI board."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "JOURNEY COLLECTOR",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "MTA ALGORITHM",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "ROI DASHBOARD",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "100%",
          "label": "Privacy compliance tracking"
        },
        {
          "value": "3.4x",
          "label": "Better capital allocation"
        },
        {
          "value": "15+",
          "label": "Integrated ad & CRM platforms"
        },
        {
          "value": "99.9%",
          "label": "Pipeline uptime"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Touchpoint Ingester",
          "status": "Data",
          "dotColor": "blue",
          "desc": "Tracks paid, organic, email, and offline customer interactions."
        },
        {
          "title": "Attribution Engine",
          "status": "Modeling",
          "dotColor": "orange",
          "desc": "Calculates fractional conversion credit across touchpoints."
        },
        {
          "title": "Anomaly Sentinel",
          "status": "Quality",
          "dotColor": "green",
          "desc": "Detects spend spikes, pixel drops, and attribution variance."
        },
        {
          "title": "Executive Reporter",
          "status": "Insights",
          "dotColor": "purple",
          "desc": "Synthesizes acquisition cost and ROI for leadership teams."
        }
      ]
    },
    "faqs": [
      {
        "q": "What is attribution modeling and why does it matter?",
        "a": "At ZUNTRA, it determines which touchpoints get credit for a conversion, showing what's actually working."
      },
      {
        "q": "What's the difference between single-touch and multi-touch attribution?",
        "a": "At ZUNTRA, single-touch credits one touchpoint; multi-touch distributes credit across the journey."
      },
      {
        "q": "Can this work for regulated industries like healthcare or financial services?",
        "a": "At ZUNTRA, yes — compliance-aware analytics is part of this service."
      },
      {
        "q": "How do you track a customer's full journey across multiple touchpoints?",
        "a": "At ZUNTRA, journey tracking connects interactions across channels into a single view."
      },
      {
        "q": "Can this integrate with our existing marketing and analytics tools?",
        "a": "At ZUNTRA, yes — integration is part of implementation."
      },
      {
        "q": "How do you measure marketing ROI accurately?",
        "a": "At ZUNTRA, rOI frameworks tie spend directly to attributed conversions and revenue."
      },
      {
        "q": "What if our customer journey spans a long time before converting?",
        "a": "At ZUNTRA, models can account for longer consideration cycles."
      },
      {
        "q": "Do we need a data team to interpret the analytics?",
        "a": "At ZUNTRA, dashboards are designed to be usable directly by marketing teams."
      },
      {
        "q": "How is this different from what our current platform's built-in analytics show?",
        "a": "At ZUNTRA, a broader model connects data across all channels for a fuller picture."
      },
      {
        "q": "How long does it take to set up attribution modeling?",
        "a": "At ZUNTRA, an initial working model is typically achievable within several weeks."
      }
    ],
    "cta": {
      "title": "Ready to see what's actually working?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "conversational-commerce-ai-driven-lead-qualification": {
    "hero": {
      "title": "ZUNTRA qualifies and engages prospects the moment they show interest.",
      "desc": "ZUNTRA builds conversational commerce tools and AI-driven lead qualification systems that engage prospects in real time.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds conversational commerce tools and AI-driven lead qualification systems that engage prospects in real time."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Conversational commerce chat integration",
          "desc": "Interactive conversational widgets embedded across web, mobile apps, and customer portals."
        },
        {
          "num": "02",
          "title": "AI-driven lead qualification logic",
          "desc": "Natural conversational flows assessing budget, timeline, authority, and specific solution needs."
        },
        {
          "num": "03",
          "title": "Real-time lead scoring and routing",
          "desc": "Instant prioritization and routing of hot prospects directly to ready sales reps or calendar booking."
        },
        {
          "num": "04",
          "title": "CRM and sales workflow integration",
          "desc": "Automatic creation of enriched CRM records complete with conversation transcripts and buyer intent signals."
        },
        {
          "num": "05",
          "title": "Multi-channel deployment",
          "desc": "Unified assistant workflows active across Web Chat, WhatsApp, SMS, and Instagram Direct."
        },
        {
          "num": "06",
          "title": "Conversation analytics",
          "desc": "Sentiment tracking, drop-off analysis, objection logging, and continuous conversation refinement."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA designs qualification logic around the questions your sales team actually needs answered.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Real Estate",
          "desc": "Instantly answering buyer queries on listings, qualifying mortgage readiness, and booking private viewings."
        },
        {
          "title": "Retail",
          "desc": "Personalized shopping assistants guiding product discovery, sizing advice, and in-chat checkout."
        },
        {
          "title": "Education",
          "desc": "Guiding applicants through course options, prerequisites, tuition estimates, and advisor scheduling."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Instant Response",
          "value": "<3s",
          "fill": "96%",
          "color": "blue",
          "desc": "24/7 engagement time from first visitor touchpoint."
        },
        {
          "label": "Qualified Lead Rate",
          "value": "+48%",
          "fill": "91%",
          "color": "orange",
          "desc": "Higher percentage of sales-ready opportunities passed to reps."
        },
        {
          "label": "Meeting Bookings",
          "value": "3.2x",
          "fill": "85%",
          "color": "green",
          "desc": "Calendar meetings scheduled directly via conversation flows."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "NATURAL DIALOGUE",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "QUALIFICATION ENGINE",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "CALENDAR & CRM DISPATCH",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "98.5%",
          "label": "Intent recognition accuracy"
        },
        {
          "value": "0 human wait",
          "label": "24/7 availability"
        },
        {
          "value": "4.7/5",
          "label": "Customer satisfaction rating"
        },
        {
          "value": "99.9%",
          "label": "Uptime guarantee"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Concierge Agent",
          "status": "Engagement",
          "dotColor": "blue",
          "desc": "Greets visitors and answers questions about products and pricing."
        },
        {
          "title": "Qualifier",
          "status": "Assessment",
          "dotColor": "orange",
          "desc": "Asks gentle screening questions to evaluate timeline, budget, and need."
        },
        {
          "title": "Scheduler",
          "status": "Booking",
          "dotColor": "green",
          "desc": "Syncs directly with sales calendars to book verified buyer appointments."
        },
        {
          "title": "CRM Syncer",
          "status": "Operations",
          "dotColor": "purple",
          "desc": "Populates contact notes and qualification score directly into CRM."
        }
      ]
    },
    "faqs": [
      {
        "q": "What is conversational commerce?",
        "a": "At ZUNTRA, using chat interfaces to guide prospects through discovery and even purchases in real time."
      },
      {
        "q": "How does AI-driven lead qualification actually work?",
        "a": "At ZUNTRA, the system asks relevant questions, scores responses, and routes qualified leads to sales."
      },
      {
        "q": "Can this integrate with our existing CRM?",
        "a": "At ZUNTRA, yes — integration is part of implementation, feeding qualified leads directly into your pipeline."
      },
      {
        "q": "What channels can this work across?",
        "a": "At ZUNTRA, multi-channel deployment across web, WhatsApp, SMS, and more can be built."
      },
      {
        "q": "How quickly can leads be engaged after they show interest?",
        "a": "At ZUNTRA, real-time engagement is the core value proposition."
      },
      {
        "q": "Does this replace our sales team, or just support them?",
        "a": "At ZUNTRA, it's designed to support by pre-qualifying leads, not replace the human conversation."
      },
      {
        "q": "How do you decide what questions the system asks to qualify a lead?",
        "a": "At ZUNTRA, logic is developed collaboratively around your sales team's actual criteria."
      },
      {
        "q": "Can we see analytics on how conversations are performing?",
        "a": "At ZUNTRA, yes — conversation analytics is part of the service."
      },
      {
        "q": "Is this suitable for high-consideration purchases like real estate?",
        "a": "At ZUNTRA, yes — flow is adapted to the complexity of your sales process."
      },
      {
        "q": "How long does it take to set up conversational commerce and lead qualification?",
        "a": "At ZUNTRA, initial deployment for a core use case is typically achievable within a few weeks."
      }
    ],
    "cta": {
      "title": "Ready to qualify leads faster?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "loyalty-retention-platform-development": {
    "hero": {
      "title": "ZUNTRA helps you keep the customers you've already earned coming back.",
      "desc": "ZUNTRA builds loyalty and retention platforms — points systems, referral programs, membership tiers.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds loyalty and retention platforms — points systems, referral programs, membership tiers."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Loyalty program design and development",
          "desc": "Custom reward architectures configured with meaningful incentives, milestones, and brand value."
        },
        {
          "num": "02",
          "title": "Points and rewards system setup",
          "desc": "Real-time accrual, redemption rules, expiration logic, and digital rewards catalog management."
        },
        {
          "num": "03",
          "title": "Referral program tooling",
          "desc": "Unique tracking links, automated double-sided rewards, and frictionless viral loop mechanics."
        },
        {
          "num": "04",
          "title": "Membership tier management",
          "desc": "Tiered status progression (Silver/Gold/VIP) with dynamic privilege gating and anniversary perks."
        },
        {
          "num": "05",
          "title": "Retention analytics and churn prediction",
          "desc": "Predictive behavioral models identifying disengaging accounts before churn occurs."
        },
        {
          "num": "06",
          "title": "E-commerce/CRM integration",
          "desc": "Unified sync connecting loyalty points with POS, e-commerce checkouts, and customer service tools."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA designs loyalty mechanics around what actually motivates your specific customer base to return.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "Omnichannel rewards redeemable both online and in-store with instant mobile wallet integration."
        },
        {
          "title": "Real Estate",
          "desc": "Client referral reward programs, VIP investor clubs, and vendor partner privileges."
        },
        {
          "title": "Media",
          "desc": "Subscriber perk tiers, exclusive access events, and community member badges."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Repeat Purchase Rate",
          "value": "+38%",
          "fill": "92%",
          "color": "blue",
          "desc": "Increase in 90-day repeat customer purchase frequency."
        },
        {
          "label": "Churn Reduction",
          "value": "-22%",
          "fill": "86%",
          "color": "orange",
          "desc": "Retention improvement among loyalty tier members."
        },
        {
          "label": "Referral Growth",
          "value": "3.5x",
          "fill": "90%",
          "color": "green",
          "desc": "New customer acquisition driven by member invitations."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "POINTS LEDGER",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "TIER ENGINE",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "REFERRAL TRACKER",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "100%",
          "label": "Points balance reconciliation"
        },
        {
          "value": "+54%",
          "label": "Average lifetime value"
        },
        {
          "value": "0.2s",
          "label": "Checkout reward redemption"
        },
        {
          "value": "99.99%",
          "label": "Ledger uptime"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Points Custodian",
          "status": "Ledger",
          "dotColor": "blue",
          "desc": "Accrues, validates, and debits points across customer actions."
        },
        {
          "title": "Tier Manager",
          "status": "Advancement",
          "dotColor": "orange",
          "desc": "Evaluates annual spend and automatically unlocks tiered perks."
        },
        {
          "title": "Referral Attributor",
          "status": "Viral",
          "dotColor": "green",
          "desc": "Tracks shared links and pays double-sided rewards upon qualifying purchase."
        },
        {
          "title": "Churn Predictor",
          "status": "Retention",
          "dotColor": "purple",
          "desc": "Flags declining frequency and triggers win-back offers."
        }
      ]
    },
    "faqs": [
      {
        "q": "What's the difference between a loyalty program and a referral program?",
        "a": "At ZUNTRA, loyalty rewards repeat behavior; referral incentivizes bringing in new customers — both can be built together."
      },
      {
        "q": "How do you design a points and rewards system that customers actually value?",
        "a": "At ZUNTRA, based on understanding what genuinely motivates your specific customer base."
      },
      {
        "q": "Can this integrate with our existing e-commerce or CRM platform?",
        "a": "At ZUNTRA, yes — integration is part of implementation."
      },
      {
        "q": "What are membership tiers and how do they work?",
        "a": "At ZUNTRA, escalating benefits based on engagement or spend, incentivizing increased engagement."
      },
      {
        "q": "How do you measure whether a loyalty program is actually working?",
        "a": "At ZUNTRA, retention analytics tie program membership to actual business impact."
      },
      {
        "q": "Can this predict which customers are at risk of churning?",
        "a": "At ZUNTRA, yes — churn prediction can be built in to flag at-risk customers."
      },
      {
        "q": "Is this only relevant for e-commerce, or does it work for service businesses too?",
        "a": "At ZUNTRA, it applies broadly — real estate referral programs and media memberships are examples."
      },
      {
        "q": "How long does it take to launch a loyalty program?",
        "a": "At ZUNTRA, initial versions are typically achievable within a few weeks to months."
      },
      {
        "q": "Can loyalty program rules change over time as we learn what works?",
        "a": "At ZUNTRA, yes — the platform allows adjustment as you gather data."
      },
      {
        "q": "What happens to customer data collected through the loyalty program?",
        "a": "At ZUNTRA, data handling is designed around your privacy requirements."
      }
    ],
    "cta": {
      "title": "Ready to boost retention?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "marketing-tech-stack-audits-consolidation": {
    "hero": {
      "title": "ZUNTRA finds out what your MarTech stack is actually costing you, and fix it.",
      "desc": "ZUNTRA audits existing marketing technology stacks and consolidate them into a leaner, more effective setup.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA audits existing marketing technology stacks and consolidate them into a leaner, more effective setup."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Full MarTech stack inventory and audit",
          "desc": "Exhaustive discovery cataloging every tool, license, cost, API integration, and active user across marketing."
        },
        {
          "num": "02",
          "title": "Redundancy and cost analysis",
          "desc": "Identifying overlapping software capabilities, underutilized seats, and unneeded SaaS subscriptions."
        },
        {
          "num": "03",
          "title": "Integration gap identification",
          "desc": "Uncovering data silos, failed syncs, and manual export/import bottlenecks between tools."
        },
        {
          "num": "04",
          "title": "Tool consolidation and migration planning",
          "desc": "Structured phase-out plans, contract renewal alignments, and risk-free data migration workflows."
        },
        {
          "num": "05",
          "title": "Vendor evaluation and recommendation",
          "desc": "Independent assessment of modern, all-in-one or best-of-breed alternatives matching your tech roadmap."
        },
        {
          "num": "06",
          "title": "Post-consolidation documentation",
          "desc": "Clean operational architecture blueprints, standard operating procedures, and team training guides."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA starts with a full inventory of what's actually in use versus what's paid for but forgotten.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Financial Services",
          "desc": "Consolidating siloed compliance, email, and analytics systems into a secure, audited stack."
        },
        {
          "title": "Manufacturing",
          "desc": "Streamlining legacy distributor portals, marketing databases, and fragmented CRM instances."
        },
        {
          "title": "Enterprise Technology",
          "desc": "Eliminating multi-region tool duplication across acquired business units and global marketing teams."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Tooling Cost Savings",
          "value": "30-50%",
          "fill": "92%",
          "color": "blue",
          "desc": "Reduction in annual software licenses and redundant seats."
        },
        {
          "label": "Data Silos Removed",
          "value": "100%",
          "fill": "95%",
          "color": "orange",
          "desc": "Consolidated databases feeding into single source of truth."
        },
        {
          "label": "Team Adoption",
          "value": "92%",
          "fill": "88%",
          "color": "green",
          "desc": "Post-migration team satisfaction and daily system usage."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "INVENTORY AUDIT",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "REDUNDANCY PRUNING",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "CONSOLIDATED STACK",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "$120k+",
          "label": "Average annual license savings"
        },
        {
          "value": "0 downtime",
          "label": "Migration execution"
        },
        {
          "value": "1 unified",
          "label": "Centralized marketing source of truth"
        },
        {
          "value": "100%",
          "label": "Post-audit documentation complete"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Stack Auditor",
          "status": "Discovery",
          "dotColor": "blue",
          "desc": "Uncovers shadow IT, unused software accounts, and redundant capabilities."
        },
        {
          "title": "Cost Modeler",
          "status": "Finance",
          "dotColor": "orange",
          "desc": "Projects contract renewal costs, tiered seats, and consolidation ROI."
        },
        {
          "title": "Migration Engineer",
          "status": "Execution",
          "dotColor": "green",
          "desc": "Safely migrates marketing lists, workflow rules, and historical records."
        },
        {
          "title": "Enablement Coach",
          "status": "Training",
          "dotColor": "purple",
          "desc": "Builds workflows, documentation, and team adoption training."
        }
      ]
    },
    "faqs": [
      {
        "q": "How do we know if our marketing tech stack actually needs an audit?",
        "a": "At ZUNTRA, signs include overlapping tools and data that doesn't sync — an audit clarifies the actual state."
      },
      {
        "q": "What does a MarTech audit actually involve?",
        "a": "At ZUNTRA, a full inventory, redundancy and cost analysis, and integration gap identification."
      },
      {
        "q": "How much can consolidation typically save on tooling costs?",
        "a": "At ZUNTRA, savings vary, but the audit quantifies actual potential savings for your stack."
      },
      {
        "q": "Will consolidation disrupt workflows our team already relies on?",
        "a": "At ZUNTRA, planning is designed to minimize disruption, migrating workflows carefully."
      },
      {
        "q": "Do you recommend specific replacement tools, or just identify problems?",
        "a": "At ZUNTRA, both — vendor evaluation and recommendation is part of the service."
      },
      {
        "q": "How long does a MarTech audit take?",
        "a": "At ZUNTRA, an initial audit is typically achievable within a few weeks."
      },
      {
        "q": "What happens to our data during a platform consolidation?",
        "a": "At ZUNTRA, migration planning includes careful data handling to ensure continuity."
      },
      {
        "q": "Will our team need retraining after consolidation?",
        "a": "At ZUNTRA, this depends on how much tool changes affect workflows."
      },
      {
        "q": "How often should a MarTech stack audit be repeated?",
        "a": "At ZUNTRA, periodic review, every year or two, is generally a reasonable practice."
      },
      {
        "q": "Is this relevant for smaller organizations?",
        "a": "At ZUNTRA, tool sprawl happens at any scale, often with a lighter-weight version of the audit."
      }
    ],
    "cta": {
      "title": "Ready to fix your MarTech stack?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },

  "influencer-affiliate-program-tooling": {
    "hero": {
      "title": "ZUNTRA helps you manage partners and track performance without a spreadsheet held together with hope.",
      "desc": "ZUNTRA builds tooling for influencer and affiliate programs — tracking referrals, managing partners, automating payouts.",
      "buttonText": "TALK TO ZUNTRA &rarr;",
      "secondaryButtonText": "EXPLORE OUR APPROACH &rarr;"
    },
    "statement": {
      "text": "Technology should do more<br/>than answer.",
      "subText": "ZUNTRA builds tooling for influencer and affiliate programs — tracking referrals, managing partners, automating payouts."
    },
    "featuresGrid": {
      "eyebrow": "WHAT'S INCLUDED",
      "title": "Purpose-built solutions<br/>for real workflows.",
      "features": [
        {
          "num": "01",
          "title": "Affiliate and influencer tracking setup",
          "desc": "Custom tracking pixel and server-side tracking architecture capturing every click, lead, and sale."
        },
        {
          "num": "02",
          "title": "Referral link and commission tracking",
          "desc": "Automated vanity URLs, coupon code attribution, and tiered commission rules engine."
        },
        {
          "num": "03",
          "title": "Partner dashboard and self-service portal",
          "desc": "Dedicated creator portals with live earnings visibility, asset libraries, and link generators."
        },
        {
          "num": "04",
          "title": "Automated commission calculation and payout",
          "desc": "Hands-off invoice generation, tax handling, and batch payments via Stripe, PayPal, or Wise."
        },
        {
          "num": "05",
          "title": "Per-partner performance analytics",
          "desc": "Deep reporting highlighting top affiliates, conversion benchmarks, and lifetime customer value."
        },
        {
          "num": "06",
          "title": "Fraud detection for referral activity",
          "desc": "Automated detection of self-referrals, bot clicks, spoofed traffic, and coupon site leakage."
        }
      ]
    },
    "architecture": {
      "title": "A SOLUTION IS A<br/>SYSTEM, NOT<br/>A TEMPLATE.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic application template.",
      "diagram": {
        "node1": "BUSINESS CONTEXT",
        "node2": "DATA",
        "node3": "LOGIC ENGINES",
        "node4": "MEMORY",
        "node5": "TOOLS",
        "node6": "KNOWLEDGE",
        "node7": "SYSTEM",
        "node8": "ORCHESTRATION",
        "node9": "GUARDRAILS",
        "node10": "HUMAN REVIEW"
      }
    },
    "coreValues": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br/>not the software.",
      "desc": "ZUNTRA builds tracking and payout infrastructure that removes the manual reconciliation work most affiliate programs run on.",
      "values": [
        {
          "num": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value.",
          "color": "gray"
        },
        {
          "num": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the system must navigate.",
          "color": "gray"
        },
        {
          "num": "03",
          "title": "BUILD",
          "desc": "Build the architecture around your operational logic, not generic templates.",
          "color": "gray"
        },
        {
          "num": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build.",
          "color": "gray"
        },
        {
          "num": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one.",
          "color": "gray"
        },
        {
          "num": "06",
          "title": "EVOLVE",
          "desc": "Tune the system as workflows change — deployment is the beginning, not the end.",
          "color": "gray"
        }
      ]
    },
    "complexity": {
      "eyebrow": "INDUSTRY APPLICATIONS",
      "title": "BUILT FOR WORKFLOWS<br/>WHERE COMPLEXITY<br/>MATTERS.",
      "items": [
        {
          "title": "Retail",
          "desc": "Empowering ambassador programs, micro-influencers, and affiliate publishers with real-time attribution."
        },
        {
          "title": "Media",
          "desc": "Monetizing co-branded content, affiliate product reviews, and syndication partner referrals."
        },
        {
          "title": "Education",
          "desc": "Alumni referral networks, education consultant commissions, and ambassador incentives."
        }
      ]
    },
    "successMetrics": {
      "eyebrow": "PERFORMANCE",
      "title": "DEFINE SUCCESS BEFORE<br/>THE SYSTEM STARTS<br/>WORKING.",
      "desc": "We establish clear KPIs upfront and build evaluation into the system from day one, so you can measure actual value rather than just activity.",
      "metrics": [
        {
          "label": "Attribution Precision",
          "value": "99.8%",
          "fill": "95%",
          "color": "blue",
          "desc": "First-click and last-click attribution tracking confidence."
        },
        {
          "label": "Payout Time",
          "value": "Automated",
          "fill": "92%",
          "color": "orange",
          "desc": "Zero hours spent on manual end-of-month spreadsheet reconciliation."
        },
        {
          "label": "Partner Growth",
          "value": "4.5x",
          "fill": "88%",
          "color": "green",
          "desc": "Active affiliate scaling unlocked by self-serve partner portals."
        }
      ]
    },
    "orchestration": {
      "title": "ONE MODULE OR AN<br/>ORCHESTRATED SYSTEM.",
      "desc": "Depending on the complexity of the workflow, we deploy either a targeted single module or an orchestrated multi-system architecture.",
      "buttonText": "EXPLORE ARCHITECTURE",
      "mockup": {
        "headerTag": "ROUTER SYSTEM",
        "desc": "Evaluates incoming tasks and delegates to specialized components based on context.",
        "branches": [
          {
            "num": "01",
            "tag": "LINK GENERATOR",
            "color": "blue"
          },
          {
            "num": "02",
            "tag": "COMMISSION ENGINE",
            "color": "green"
          },
          {
            "num": "03",
            "tag": "FRAUD DEFENDER",
            "color": "purple"
          }
        ]
      }
    },
    "evolution": {
      "eyebrow": "CONTINUOUS LEARNING",
      "title": "WORKFLOWS CHANGE.<br/>SYSTEMS EVOLVE<br/>WITH THEM.",
      "desc": "We don't just deploy and walk away. Our systems are built to adapt as your processes change, ensuring they don't degrade over time.",
      "stats": [
        {
          "value": "0 fraud",
          "label": "Fake conversion leakage"
        },
        {
          "value": "100%",
          "label": "On-time partner payout rate"
        },
        {
          "value": "2.8x",
          "label": "Affiliate GMV growth"
        },
        {
          "value": "99.9%",
          "label": "Portal availability"
        }
      ]
    },
    "rolesTable": {
      "eyebrow": "SPECIALIZED MODELS",
      "title": "SYSTEMS THAT MOVE WORK<br/>ACROSS THE<br/>ORGANIZATION.",
      "desc": "Systems designed to hand off work seamlessly across departments, maintaining context from research to final execution.",
      "roles": [
        {
          "title": "Referral Tracker",
          "status": "Attribution",
          "dotColor": "blue",
          "desc": "Logs vanity link clicks, coupon entries, and converts sales."
        },
        {
          "title": "Commission Calculator",
          "status": "Accounting",
          "dotColor": "orange",
          "desc": "Applies tiered rates, deducts refunds, and schedules batch disbursements."
        },
        {
          "title": "Fraud Sentinel",
          "status": "Protection",
          "dotColor": "green",
          "desc": "Filters bot impressions, fake accounts, and self-referral attempts."
        },
        {
          "title": "Partner Portal",
          "status": "Self-Service",
          "dotColor": "purple",
          "desc": "Supplies creators with marketing assets, performance stats, and payout history."
        }
      ]
    },
    "faqs": [
      {
        "q": "How is affiliate tracking different from just giving partners a discount code?",
        "a": "At ZUNTRA, dedicated tracking attributes referrals accurately and automates commission calculation."
      },
      {
        "q": "Can partners see their own performance data?",
        "a": "At ZUNTRA, yes — a partner dashboard gives visibility into referrals and earnings."
      },
      {
        "q": "How are commissions calculated and paid out?",
        "a": "At ZUNTRA, automated calculation and payout is built into the system based on your rules."
      },
      {
        "q": "How do you prevent fraudulent referral activity?",
        "a": "At ZUNTRA, fraud detection specific to referral activity flags suspicious patterns."
      },
      {
        "q": "Can this integrate with our existing e-commerce or CRM platform?",
        "a": "At ZUNTRA, yes — integration connects referral data with your broader customer data."
      },
      {
        "q": "How do we recruit and onboard new affiliates or influencers through this system?",
        "a": "At ZUNTRA, onboarding workflows can be built into the platform."
      },
      {
        "q": "Can we track performance by individual partner or channel?",
        "a": "At ZUNTRA, yes — analytics broken down by partner or channel is part of the reporting."
      },
      {
        "q": "What happens if a referral is disputed or unclear?",
        "a": "At ZUNTRA, tracking provides clear attribution data, with a review process for edge cases."
      },
      {
        "q": "Is this suitable for a small affiliate program, or only large-scale ones?",
        "a": "At ZUNTRA, it scales to program size, with a lighter-weight version for smaller programs."
      },
      {
        "q": "How long does it take to set up affiliate and influencer tracking?",
        "a": "At ZUNTRA, an initial working system is typically achievable within a few weeks."
      }
    ],
    "cta": {
      "title": "Ready to track your partner program properly?",
      "subtitle": "Talk to ZUNTRA.",
      "buttonText": "SCHEDULE A CONSULTATION"
    }
  },
};

subtopicData['rpa-workflow-automation'] = subtopicData['rpa-workflow-automation-bpm'];
subtopicData['enterprise-software-integration'] = subtopicData['enterprise-software-integration-erp-crm'];
subtopicData['it-consulting-managed-services'] = subtopicData['it-consulting-bpo-managed-services'];
subtopicData['ecommerce-platform-development-optimization'] = subtopicData['e-commerce-platform-development-optimization'];
