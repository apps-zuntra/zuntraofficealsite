import React, { useState } from "react";
import SideGridLines from "../../components/SideGridLines";
import HorizontalGridLine from "../../components/HorizontalGridLine";
import "./ZuntraLabs.css";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  "What We Build",
  "Products",
  "Solutions",
  "Industries",
  "Innovation",
  "Company",
];

const NAV_AUX_LINKS = ["Insights", "Careers"];

const FILTERS = [
  "All",
  "AI & Intelligence",
  "Robotics",
  "Automation",
  "Digital Products",
  "Human + AI",
  "Emerging Tech",
];

const EXPERIMENTS = [
  {
    id: "01",
    status: "Active",
    category: "AI & Intelligence",
    title: "Agent Workbench",
    tone: "purple",
    text: "An environment for designing, testing and evaluating AI agent behaviour across complex multi-step tasks.",
  },
  {
    id: "02",
    status: "Research",
    category: "AI & Intelligence",
    title: "Context Engine",
    tone: "blue",
    text: "Exploring how AI systems can understand and operate across structured organisational knowledge.",
  },
  {
    id: "03",
    status: "Prototype",
    category: "Emerging Tech",
    title: "Zuntra Vision",
    tone: "green",
    text: "Computer vision research applied to real-world recognition, classification and interactive tasks.",
  },
  {
    id: "04",
    status: "Research",
    category: "Robotics",
    title: "Robotic Interface",
    tone: "orange",
    text: "Interface primitives for human operators working alongside robotic systems in physical environments.",
  },
  {
    id: "05",
    status: "Beta",
    category: "AI & Intelligence",
    title: "Knowledge Graph",
    tone: "yellow",
    text: "Structured knowledge representation for AI systems that need to reason across domains.",
  },
  {
    id: "06",
    status: "Prototype",
    category: "Human + AI",
    title: "Adaptive UI",
    tone: "pink",
    text: "Interface systems that learn individual work patterns and adapt to how people actually work.",
  },
  {
    id: "07",
    status: "Active",
    category: "Automation",
    title: "Autonomous Workflow",
    tone: "blue",
    text: "Workflow primitives that can be assembled, executed and evaluated autonomously.",
  },
];

const FRONTIER = [
  {
    id: "01",
    title: "AI & Intelligence",
    text: "Reasoning systems, agents and multi-modal understanding for complex real-world tasks.",
  },
  {
    id: "02",
    title: "Robotics",
    text: "Physical systems, sensor integration and human-robot collaboration in dynamic environments.",
  },
  {
    id: "03",
    title: "Human + AI",
    text: "New interaction paradigms for humans working alongside intelligent systems.",
  },
  {
    id: "04",
    title: "Automation",
    text: "Workflow orchestration, decision systems and process intelligence at scale.",
  },
  {
    id: "05",
    title: "Digital Products",
    text: "Novel product forms that emerge from new technological capability.",
  },
  {
    id: "06",
    title: "Emerging Technology",
    text: "Early-stage exploration of technologies too new to yet have clear applications.",
  },
];

const FLOW_STEPS = [
  { id: "01", label: "Research Question" },
  { id: "02", label: "Data" },
  { id: "03", label: "Experiment" },
  { id: "04", label: "Evaluation" },
  { id: "05", label: "Prototype", accent: true },
  { id: "06", label: "Insight" },
];

const CAPABILITIES = [
  {
    icon: "◎",
    name: "Collaborative Research",
    text: "Working with internal teams and external researchers to frame and investigate open questions.",
  },
  { icon: "⊡", name: "Experiment Design" },
  { icon: "△", name: "Rapid Prototyping" },
  { icon: "⊞", name: "Knowledge Systems" },
  { icon: "◉", name: "Simulation & Testing" },
  { icon: "≋", name: "Data Exploration" },
  { icon: "◈", name: "Evaluation" },
  { icon: "⊟", name: "Artifact Generation" },
];

const FEATURED_POINTS = [
  "Contextual Retrieval",
  "Knowledge Mapping",
  "Multi-Agent Reasoning",
  "Traceable Outputs",
];

const LIFECYCLE = [
  { id: "01", title: "Research", tone: "purple", text: "Frame the question. Understand what exists." },
  { id: "02", title: "Experiment", tone: "blue", text: "Design the test. Run the first version." },
  { id: "03", title: "Prototype", tone: "green", text: "Build something tangible. Make it real." },
  { id: "04", title: "Evaluate", tone: "orange", text: "Test rigorously. Understand where it fails." },
  { id: "05", title: "Beta", tone: "yellow", text: "Real users. Real conditions. Real feedback." },
  { id: "06", title: "Product", tone: "pink", text: "Some experiments earn this. Most don't." },
];

const NOTEBOOK = [
  {
    id: "01",
    tag: "Research Note",
    title: "How we are exploring multi-agent systems for complex workflows",
    year: "2026",
  },
  {
    id: "02",
    tag: "Experiment",
    title: "Designing interfaces for human and AI collaboration",
    year: "2026",
  },
  {
    id: "03",
    tag: "Build Log",
    title: "From prototype to working system: lessons from the Agent Workbench",
    year: "2026",
  },
  {
    id: "04",
    tag: "Research Note",
    title: "Knowledge representation at the edge of what AI systems currently understand",
    year: "2026",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Who We Are",
    links: ["About", "Team & Culture", "Leadership", "Cohort 25/26", "DEAAI Policy", "Sustainability Goals"],
  },
  { title: "Careers", links: ["Open Positions", "Tech & AI Incubation", "Competitions"] },
  { title: "Business Verticals", links: ["Media — Z01 Studios", "Arts & Culture", "Robotics & IoT"] },
  { title: "Products", links: ["Huzzler", "Wiviy", "Rentit", "Z01 Crew", "Mungo", "Zuca"] },
  { title: "Enterprise Solutions", links: ["ENTWY DESIGN", "ENTWY AI"] },
  { title: "AI Solutions", links: ["Legyn AI", "HyreMind AI", "BizBy AI"] },
  {
    title: "Information",
    links: ["FAQ", "Events", "Webinars", "Privacy Policy", "Terms & Conditions"],
  },
  { title: "Resources", links: ["Resources", "Case Study"] },
];

/* ------------------------------------------------------------------ */
/* SVG DIAGRAMS (rebuilt from the Figma vectors, coloured from CSS)     */
/* ------------------------------------------------------------------ */

function ExperimentViz({ number }) {
  return (
    <svg
      className="viz"
      viewBox="0 0 278.4 160"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="viz__bg" x="0" y="0.5" width="278.4" height="159" />
      <g className="viz__lines">
        <line x1="69.6" y1="80" x2="139.2" y2="45" />
        <line x1="139.2" y1="45" x2="208.8" y2="80" />
        <line x1="208.8" y1="80" x2="139.2" y2="114.8" />
        <line x1="139.2" y1="114.8" x2="69.6" y2="80" />
      </g>
      <circle className="viz__ring viz__ring--lg" cx="69.6" cy="80" r="27.8" />
      <circle className="viz__ring viz__ring--sm" cx="208.8" cy="80" r="21.8" />
      <circle className="viz__halo viz__halo--top" cx="139.2" cy="45" r="17.9" />
      <circle className="viz__halo viz__halo--bottom" cx="139.2" cy="114.8" r="13.9" />
      <circle className="viz__dot" cx="69.6" cy="80" r="4" />
      <circle className="viz__dot" cx="139.2" cy="45" r="4" />
      <circle className="viz__dot" cx="208.8" cy="80" r="4" />
      <circle className="viz__dot" cx="139.2" cy="114.8" r="4" />
      <text className="viz__label" x="139.2" y="83" textAnchor="middle">
        {number}
      </text>
    </svg>
  );
}

const CAP_GRID_X = [36.1, 126.8, 217.5, 308.1, 398.8, 489.5];
const CAP_GRID_Y = [0.3, 85, 170, 255, 339.7];
const CAP_NODES = [
  { x: 126.8, y: 102 },
  { x: 262.8, y: 68 },
  { x: 398.8, y: 113.3 },
  { x: 194.8, y: 226.7 },
  { x: 330.8, y: 215 },
];
const CAP_EDGES = [
  [126.8, 102, 262.8, 68],
  [262.8, 68, 398.8, 113.3],
  [126.8, 102, 194.8, 226.7],
  [262.8, 68, 262.8, 170],
  [262.8, 170, 330.8, 215],
  [398.8, 113.3, 330.8, 215],
];

function CapabilityViz() {
  return (
    <svg
      className="capviz"
      viewBox="0 0 525.6 340"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="capviz__panel" x="36.1" y="0" width="453.4" height="340" />
      <g className="capviz__grid">
        {CAP_GRID_X.map((x) => (
          <line key={`x${x}`} x1={x} y1="0" x2={x} y2="340" />
        ))}
        {CAP_GRID_Y.map((y) => (
          <line key={`y${y}`} x1="36.1" y1={y} x2="489.5" y2={y} />
        ))}
      </g>
      <g className="capviz__edges">
        {CAP_EDGES.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      {CAP_NODES.map((n, i) => (
        <g key={i}>
          <circle className="capviz__node-halo" cx={n.x} cy={n.y} r="13.6" />
          <circle className="capviz__node-core" cx={n.x} cy={n.y} r="4.5" />
        </g>
      ))}
      <circle className="capviz__center-halo" cx="262.8" cy="170" r="27.2" />
      <circle className="capviz__node-core" cx="262.8" cy="170" r="9" />
    </svg>
  );
}

const DARK_NODES = [
  { label: "QUESTION", tone: "purple", x: 170, y: 50 },
  { label: "RESEARCH", tone: "blue", x: 80, y: 130 },
  { label: "INTELLIGENCE", tone: "green", x: 260, y: 130 },
  { label: "EXPERIMENT", tone: "orange", x: 60, y: 220 },
  { label: "SYSTEM", tone: "yellow", x: 170, y: 210 },
  { label: "IMPACT", tone: "pink", x: 280, y: 220 },
];
const DARK_EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 5],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 5],
];

function DarkViz() {
  return (
    <svg
      className="dviz"
      viewBox="0 0 340 280"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <g className="dviz__lines">
        {DARK_EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={DARK_NODES[a].x}
            y1={DARK_NODES[a].y}
            x2={DARK_NODES[b].x}
            y2={DARK_NODES[b].y}
          />
        ))}
      </g>
      {DARK_NODES.map((n) => (
        <g key={n.label} className={`dviz__node tone--${n.tone}`}>
          <circle className="dviz__cover" cx={n.x} cy={n.y} r="14" />
          <circle className="dviz__ring" cx={n.x} cy={n.y} r="14" />
          <circle className="dviz__dot" cx={n.x} cy={n.y} r="4" />
          <text className="dviz__label" x={n.x} y={n.y + 26} textAnchor="middle">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function ZuntraLabs() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [slide, setSlide] = useState(0);
  const [openCapability, setOpenCapability] = useState(0);

  const visibleExperiments =
    activeFilter === "All"
      ? EXPERIMENTS
      : EXPERIMENTS.filter((item) => item.category === activeFilter);

  const maxSlide = Math.max(0, visibleExperiments.length - 4);
  const currentSlide = Math.min(slide, maxSlide);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setSlide(0);
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentSlide < maxSlide) {
      setSlide((prev) => Math.min(maxSlide, prev + 1));
    }
    if (isRightSwipe && currentSlide > 0) {
      setSlide((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <div className="zl">
      {/* Interactive Side Grid Lines matching Homepage */}
      <SideGridLines />

      <main>
        {/* ------------------------------ HERO ------------------------------ */}
        <section className="hero">
          <span className="shape hero__shape hero__shape--purple" />
          <span className="shape hero__shape hero__shape--blue-ring" />
          <span className="shape hero__shape hero__shape--yellow" />
          <span className="shape hero__shape hero__shape--green" />

          <div className="hero__content">
            <h1 className="hero__title">
              Where Ideas Become<br />Experiments.
            </h1>
            <p className="hero__text">
              Researching emerging technologies, testing new ideas, and prototyping systems that
              may become the next generation of Zuntra products.
            </p>
            <div className="hero__actions">
              <a className="btn btn--dark" href="#experiments">
                Explore The Lab →
              </a>
              <a className="btn btn--outline" href="#intro">
                About The Lab
              </a>
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ------------------------------ INTRO ------------------------------ */}
        <section className="intro" id="intro">
          <div className="container intro__grid">
            <div className="intro__body">
              <h2 className="title-xl intro__title">
                Not everything we built is read to<br />be a product.
              </h2>
              <p className="intro__text">
                Zuntra Labs is where we explore ideas before they become products — from
                intelligent systems and new interfaces to automation, robotics and emerging
                technologies.
              </p>
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* -------------------------- EXPERIMENTS -------------------------- */}
        <section className="experiments" id="experiments">
          <div className="container">
            <h2 className="title-lg">Be the first to experiment.</h2>
            <p className="experiments__text">
              Placeholder experiment concepts. These represent the types of explorations we pursue
              — replace with actual Zuntra Labs content when available.
            </p>

            <div className="experiments__toolbar">
              <div className="filters" role="tablist" aria-label="Experiment filters">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === filter}
                    className={`filter${activeFilter === filter ? " is-active" : ""}`}
                    onClick={() => handleFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="carousel__controls">
                <button
                  type="button"
                  className="carousel__btn carousel__btn--prev"
                  aria-label="Previous experiments"
                  disabled={currentSlide === 0}
                  onClick={() => setSlide(Math.max(0, currentSlide - 1))}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="carousel__btn carousel__btn--next"
                  aria-label="Next experiments"
                  disabled={currentSlide >= maxSlide}
                  onClick={() => setSlide(Math.min(maxSlide, currentSlide + 1))}
                >
                  →
                </button>
              </div>
            </div>

            <div className="carousel">
              <div
                className="carousel__stage"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="carousel__track"
                  style={{
                    transform: `translateX(calc(-${currentSlide} * ((100% + 20px) / 4)))`
                  }}
                >
                  {visibleExperiments.map((item, index) => (
                    <div className="exp-slot" key={item.id}>
                      <article
                        className={`exp-card exp-card--tilt-${index % 7} tone--${item.tone}`}
                      >
                        <div className="exp-card__visual">
                          <ExperimentViz number={item.id} />
                        </div>
                        <div className="exp-card__body">
                          <div className="exp-card__meta">
                            <span className="exp-card__number">Experiment {item.id}</span>
                            <span className="exp-card__badge">{item.status}</span>
                          </div>
                          <p className="exp-card__category">{item.category}</p>
                          <h3 className="exp-card__title">{item.title}</h3>
                          <p className="exp-card__text">{item.text}</p>
                          <a className="exp-card__link" href="#">
                            Explore →
                          </a>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel__dots">
                {visibleExperiments.map((item, index) => {
                  const targetSlide = Math.min(index, maxSlide);
                  const isActive = index === currentSlide;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Go to experiment ${item.id}`}
                      className={`carousel__dot${isActive ? " is-active" : ""}`}
                      onClick={() => setSlide(targetSlide)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ------------------------------ FRONTIER ------------------------------ */}
        <section className="frontier">
          <div className="container">
            <h2 className="title-lg frontier__main-title">Exploring The Fronter.</h2>
            <div className="list">
              {FRONTIER.map((item) => (
                <a key={item.id} className="list__row list__row--frontier" href="#">
                  <span className="list__num">{item.id}</span>
                  <h3 className="list__title">{item.title}</h3>
                  <p className="list__desc">{item.text}</p>
                  <span className="list__arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* --------------------------- RESEARCH FLOW --------------------------- */}
        <section className="research">
          <div className="container research__grid">
            <div className="research__copy">
              <h2 className="title-xl title-xl--medium research__title">
                Researching What’s Next.
              </h2>
              <p className="research__text">
                Every experiment starts with a question. Our research process is designed to move
                quickly from curiosity to working system — rigorously but without unnecessary
                process overhead.
              </p>
              <a className="text-link" href="#experiments">
                SEE THE EXPERIMENTS →
              </a>
            </div>

            <div className="flow" aria-hidden="true">
              <div className="flow__panel">
                {FLOW_STEPS.map((step) => (
                  <div
                    key={step.id}
                    className={`flow__step${step.accent ? " flow__step--accent" : ""}`}
                  >
                    <span className="flow__label">{step.label}</span>
                    <span className="flow__num">{step.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* --------------------------- CAPABILITIES --------------------------- */}
        <section className="capabilities">
          <div className="container">
            <div className="capabilities__body">
              <div className="capabilities__visual">
                <CapabilityViz />
              </div>

              <div className="capabilities__right">
                <div className="capabilities__lead">
                  <div className="capabilities__lead-title">
                    <span className="cap-purple-bullet"></span>
                    <h3>Collaborative Research</h3>
                  </div>
                  <p className="capabilities__lead-text">
                    Working with internal teams and external researchers to frame and investigate open questions.
                  </p>
                </div>

                <div className="cap-list">
                  {CAPABILITIES.slice(1).map((item, index) => {
                    const isOpen = openCapability === index + 1;
                    return (
                      <div key={item.name} className={`cap-item${isOpen ? " is-open" : ""}`}>
                        <button
                          type="button"
                          className="cap-item__head"
                          aria-expanded={isOpen}
                          onClick={() => setOpenCapability(index + 1)}
                        >
                          <span className="cap-item__icon">{item.icon}</span>
                          <span className="cap-item__name">{item.name}</span>
                        </button>
                        {isOpen && item.text && <p className="cap-item__text">{item.text}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ----------------------------- FEATURED (Context Engine) ----------------------------- */}
        <section className="featured">
          <div className="container featured__grid">
            <div className="featured__copy">
              <h2 className="title-xl featured__title">Context Engine</h2>
              <p className="featured__text">
                Exploring how AI systems can understand and operate across structured
                organisational knowledge. This is placeholder content — replace with actual
                experiment details when Zuntra Labs content is available.
              </p>
              <ul className="featured__list">
                {FEATURED_POINTS.map((point) => (
                  <li key={point} className="featured__item">
                    <span className="featured__bullet" />
                    <span className="featured__item-text">{point}</span>
                  </li>
                ))}
              </ul>
              <a className="btn btn--dark" href="#experiments">
                Explore Experiment →
              </a>
            </div>

            <div className="featured__visual tone--blue">
              <ExperimentViz number="02" />
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ---------------------------- LIFECYCLE (From Question To Possibility) ---------------------------- */}
        <section className="lifecycle">
          <div className="container">
            <h2 className="title-lg lifecycle__main-title">From Question To Possibility</h2>
            <div className="steps-container">
              <div className="steps-timeline-line"></div>
              <div className="steps">
                {LIFECYCLE.map((step) => (
                  <div key={step.id} className={`step tone--${step.tone}`}>
                    <div className="step__dot-wrapper">
                      <span className="step__dot">{step.id}</span>
                    </div>
                    <h4 className="step__title">{step.title.toUpperCase()}</h4>
                    <p className="step__text">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ---------------------------- NOTEBOOK (From The Lab) ---------------------------- */}
        <section className="notebook">
          <div className="container">
            <h2 className="title-lg">From The Lab</h2>
            <div className="list">
              {NOTEBOOK.map((item) => (
                <a key={item.id} className="list__row list__row--notebook" href="#">
                  <span className="list__num">{item.id}</span>
                  <span className="list__tag">{item.tag}</span>
                  <h3 className="list__headline">{item.title}</h3>
                  <span className="list__year">{item.year}</span>
                  <span className="list__arrow list__arrow--small">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ------------------------- EXPERIMENT TO PRODUCT ------------------------- */}
        <section className="to-product">
          <div className="container to-product__container">
            <div className="to-product__copy">
              <h2 className="title-xl to-product__title">
                SOME EXPERIMENTS<br />GO FURTHER.
              </h2>
              <p className="to-product__text">
                The lab is not the destination. Some ideas stay experiments. Some become
                prototypes. Some evolve into products.
              </p>
            </div>
            <a className="btn btn--outline to-product__btn" href="/products/huzzler">
              EXPLORE ZUNTRA PRODUCTS →
            </a>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ------------------------------ DARK ------------------------------ */}
        <section className="dark">
          <div className="container dark__inner">
            <div className="dark__copy">
              <p className="eyebrow eyebrow--light">THE LAB SYSTEM</p>
              <h2 className="dark__title">
                THE NEXT IDEA<br />
                STARTS WITH<br />
                A QUESTION.
              </h2>
              <p className="dark__text">
                Every experiment in the lab traces back to a question worth asking. The systems we
                build are only as interesting as the problems they address.
              </p>
            </div>
            <div className="dark__visual">
              <DarkViz />
            </div>
          </div>
        </section>

        <HorizontalGridLine maxWidth="1266px" />

        {/* ------------------------------ CTA ------------------------------ */}
        <section className="cta">
          <span className="shape cta__shape cta__shape--green" />
          <span className="shape cta__shape cta__shape--orange-ring" />
          <span className="shape cta__shape cta__shape--purple" />

          <div className="cta__content">
            <h2 className="cta__title">
              HAVE AN IDEA<br />
              WORTH EXPLORING?
            </h2>
            <p className="cta__text">Research with us. Experiment with us. Build what comes next.</p>
            <div className="cta__actions">
              <a className="btn btn--dark btn--lg" href="#experiments">
                ENTER THE LAB
              </a>
              <a className="btn btn--outline btn--lg" href="/contact">
                LET'S TALK
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}