const fs = require('fs');

const content = fs.readFileSync('src/data/buildData.js', 'utf8');

const newData = `  {
    "id": "ai-software-automation",
    "name": "AI Software & Automation",
    "eyebrow": "AI SOFTWARE & AUTOMATION",
    "title": "ZUNTRA BUILDS PURPOSE-BUILT AI AGENTS.",
    "subtitle": "Designed around real business workflows — not demos. Each agent handles research, task execution, and multi-step operations built around your actual operational logic.",
    "heroButtons": [
      {
        "text": "TALK TO ZUNTRA →",
        "type": "primary"
      },
      {
        "text": "EXPLORE OUR APPROACH →",
        "type": "outline"
      }
    ],
    "manifesto": {
      "title": "AI should do more<br />than answer.",
      "desc": "Zuntra designs and builds AI agents tailored to specific business functions — research, task execution, multi-step workflows — rather than generic assistants.<br /><br />Each agent is built around your actual operational logic, not a generic prompt template."
    },
    "whatWeBuild": {
      "eyebrow": "WHAT WE BUILD",
      "title": "Purpose-built agents<br />for real workflows.",
      "cards": [
        {
          "id": "01",
          "title": "Single-purpose task agents",
          "desc": "Agents designed to execute one specific workflow — faster, more reliably, and more consistently than any manual process."
        },
        {
          "id": "02",
          "title": "Multi-agent orchestration",
          "desc": "Coordinated systems where multiple agents hand off tasks to each other, maintaining context across the full workflow."
        },
        {
          "id": "03",
          "title": "Integration with existing tools",
          "desc": "Agents that connect to your databases, APIs, and internal systems — not isolated software sitting alongside your real stack."
        },
        {
          "id": "04",
          "title": "Agent memory and context persistence",
          "desc": "Architecture that allows agents to retain relevant context across sessions, improving performance over time."
        },
        {
          "id": "05",
          "title": "Guardrails, evaluation, and monitoring",
          "desc": "Explicit scope boundaries, approval checkpoints, and real-time monitoring built into the agent from day one."
        },
        {
          "id": "06",
          "title": "Ongoing tuning as workflows evolve",
          "desc": "Agents that adapt as your processes change — not one-time deployments that degrade without maintenance."
        }
      ]
    },
    "architecture": {
      "title": "AN AGENT IS A<br />SYSTEM, NOT<br />A PROMPT.",
      "desc": "Zuntra builds the architecture around the actual operational logic of the workflow. Every component — memory, tools, knowledge, guardrails — is designed to serve the specific task, not a generic AI template."
    },
    "workflow": {
      "eyebrow": "HOW ZUNTRA APPROACHES IT",
      "title": "We start with the work —<br />not the AI model.",
      "desc": "Zuntra starts by mapping the actual decision points and handoffs in the workflow you want automated, then designs the agent architecture around that.",
      "steps": [
        {
          "id": "01",
          "title": "MAP",
          "desc": "Map the actual workflow and identify where automation creates real value."
        },
        {
          "id": "02",
          "title": "DESIGN",
          "desc": "Define decision points, edge cases, and handoffs the agent must navigate."
        },
        {
          "id": "03",
          "title": "BUILD",
          "desc": "Build the agent architecture around your operational logic, not generic templates."
        },
        {
          "id": "04",
          "title": "CONNECT",
          "desc": "Connect to existing tools, databases, and APIs as a core part of the build."
        },
        {
          "id": "05",
          "title": "EVALUATE",
          "desc": "Define success metrics upfront and build evaluation into the system from day one."
        },
        {
          "id": "06",
          "title": "EVOLVE",
          "desc": "Tune the agent as workflows change — deployment is the beginning, not the end."
        }
      ]
    },
    "faqs": [
      {
        "q": "What can Zuntra build for healthcare organizations?",
        "a": "Zuntra builds AI systems, digital health products, automation workflows, data platforms, and connected technology solutions for healthcare organizations across the full care journey — from patient engagement to clinical operations."
      },
      { "q": "Can Zuntra integrate with existing healthcare systems?" },
      { "q": "How does Zuntra approach AI in healthcare?" },
      { "q": "Can Zuntra build custom healthcare products?" },
      { "q": "What types of healthcare workflows can be automated?" },
      { "q": "Does Zuntra work with existing data infrastructure?" },
      { "q": "Can Zuntra help take an idea from concept to production?" }
    ],
    "cta": {
      "title": "Have something worth building?",
      "subtitle": "Let's turn the complexity into something useful.",
      "buttons": [
        {
          "text": "LET'S TALK →",
          "type": "text-link"
        }
      ]
    },`;

const regex = /\{\s*"id":\s*"ai-software-automation"[\s\S]*?\n  },/;
if (regex.test(content)) {
    const newContent = content.replace(regex, newData);
    fs.writeFileSync('src/data/buildData.js', newContent, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Could not find ai-software-automation');
}
