import { useState } from "react";
import { Link } from "react-router-dom";

import "./Careers.css";

import careers1 from "../../assets/png/careers1.png";
import careers2 from "../../assets/png/careers2.png";
import careers3 from "../../assets/png/careers3.png";
import careers4 from "../../assets/png/careers4.png";
import careers5 from "../../assets/png/careers5.png";

/* ---------------------------------------------------------
   Data
   --------------------------------------------------------- */

/* [row, column, tone, opacity] — matches the Figma HeroGeometric grid */
const HERO_DOTS = [
  [0, 3, "dark", 14],
  [0, 7, "dark", 17],
  [0, 8, "dark", 18],
  [0, 9, "blue"],
  [0, 11, "purple"],
  [1, 3, "dark", 13],
  [1, 4, "dark", 14],
  [1, 5, "dark", 15],
  [1, 7, "dark", 16],
  [1, 9, "blue"],
  [1, 11, "purple"],
  [1, 12, "blue"],
  [2, 3, "dark", 13],
  [2, 7, "dark", 16],
  [2, 10, "green"],
  [2, 11, "purple"],
  [2, 12, "blue"],
  [3, 0, "dark", 10],
  [3, 1, "dark", 11],
  [3, 4, "dark", 13],
  [3, 7, "dark", 15],
  [3, 9, "dark", 17],
  [3, 10, "dark", 18],
  [3, 12, "dark", 19],
  [4, 2, "dark", 11],
  [4, 5, "dark", 13],
  [4, 8, "dark", 16],
  [4, 10, "dark", 17],
  [4, 12, "dark", 19],
  [5, 5, "dark", 13],
  [5, 10, "dark", 17],
  [5, 11, "dark", 18],
  [5, 12, "dark", 18],
  [6, 6, "dark", 13],
  [6, 8, "dark", 15],
  [6, 9, "dark", 16],
  [6, 10, "dark", 16],
  [6, 12, "dark", 18],
  [7, 2, "dark", 10],
  [7, 6, "dark", 13],
  [7, 7, "dark", 14],
  [7, 10, "dark", 16],
  [7, 12, "dark", 17],
];

const PRINCIPLES = [
  {
    name: "Build with curiosity.",
    desc: "Explore problems before jumping to solutions.",
  },
  {
    name: "Make complexity clear.",
    desc: "Turn difficult systems into understandable experiences.",
  },
  {
    name: "Learn by building.",
    desc: "Experiment, ship, evaluate, improve.",
  },
  {
    name: "Challenge the idea.",
    desc: "Good work comes from questioning assumptions, not protecting them.",
  },
  {
    name: "Own the outcome.",
    desc: "Take responsibility beyond your individual task.",
  },
  {
    name: "Build together.",
    desc: "Different disciplines create stronger products when they work together.",
  },
];

const FILTERS = [
  "All",
  "Design",
  "Engineering & QA",
  "Data & Analytics",
  "Marketing & Business",
  "Product & Project Management",
  "AI & Automation",
  "Operations & Media",
];

const JOB_LOCATION = "Chennai [Hybrid/On-Site]";

const JOB_GROUPS = [
  {
    name: "Design",
    jobs: [
      { title: "UI/UX Design Intern", type: "Internship", slug: "ui-ux-design-intern" },
      { title: "Graphic Designer Intern", type: "Internship", slug: "graphic-designer-intern" },
    ],
  },
  {
    name: "Engineering & QA",
    jobs: [
      { title: "Full Stack Developer Intern", type: "Internship", slug: "full-stack-developer-intern" },
      { title: "Flutter Developer Intern (Fresher)", type: "Internship", slug: "flutter-developer-intern" },
      { title: "Product Development Intern", type: "Internship", slug: "product-development-intern" },
      { title: "No-Code Web Development Associate – Wix", type: "Internship", slug: "no-code-web-development-associate" },
      { title: "Frontend Developer Intern", type: "Internship", slug: "frontend-developer-intern" },
      { title: "Forward Deployed Engineer Intern", type: "Internship", slug: "forward-deployed-engineer-intern" },
      { title: "Software QA Engineer", type: "Full-Time", slug: "software-qa-engineer" },
      { title: "Software QA Engineer Intern", type: "Internship", slug: "software-qa-engineer-intern" },
      { title: "Product Testing Executive", type: "Full-Time", slug: "product-testing-executive" },
      { title: "Product Testing Intern", type: "Internship", slug: "product-testing-intern" },
    ],
  },
  {
    name: "Data & Analytics",
    jobs: [
      { title: "Data Analyst – Technical", type: "Internship", slug: "data-analyst-technical" },
      { title: "Data Analytics Engineer", type: "Full-Time", slug: "data-analytics-engineer" },
      { title: "Data Analytics Engineer Intern", type: "Internship", slug: "data-analytics-engineer-intern" },
    ],
  },
  {
    name: "Marketing & Business",
    jobs: [
      { title: "Marketing Intern", type: "Internship", slug: "marketing-intern" },
      { title: "Social Media Marketing Intern", type: "Internship", slug: "social-media-marketing-intern" },
      { title: "Business Development Executive", type: "Full-Time", slug: "business-development-executive" },
      { title: "Business Development Intern", type: "Internship", slug: "business-development-intern" },
      { title: "Outreach & Public Relations Intern", type: "Internship", slug: "outreach-public-relations-intern" },
    ],
  },
  {
    name: "Product & Project Management",
    jobs: [
      { title: "Project Management Intern", type: "Internship", slug: "project-management-intern" },
      { title: "Product Solutions Associate – Intern", type: "Internship", slug: "product-solutions-associate-intern" },
    ],
  },
  {
    name: "AI & Automation",
    jobs: [
      { title: "Associate Intern – Data & AI Learning Systems", type: "Internship", slug: "associate-intern-data-ai-learning-systems" },
      { title: "AI Agent & Automation Intern", type: "Internship", slug: "ai-agent-automation-intern" },
      { title: "AI Content Generation Intern", type: "Internship", slug: "ai-content-generation-intern" },
      { title: "AI Marketing & Automation Intern", type: "Internship", slug: "ai-marketing-automation-intern" },
      { title: "AI Marketing Strategist Intern", type: "Internship", slug: "ai-marketing-strategist-intern" },
      { title: "AI GTM Strategist Intern", type: "Internship", slug: "ai-gtm-strategist-intern" },
      { title: "AI Business Operations Intern", type: "Internship", slug: "ai-business-operations-intern" },
      { title: "AI Product Strategy Intern", type: "Internship", slug: "ai-product-strategy-intern" },
      { title: "AI Product Scalability Strategist Intern", type: "Internship", slug: "ai-product-scalability-strategist-intern" },
      { title: "AI Growth Marketing Intern", type: "Internship", slug: "ai-growth-marketing-intern" },
      { title: "AI Revenue Operations Intern", type: "Internship", slug: "ai-revenue-operations-intern" },
      { title: "AI Market Intelligence Intern", type: "Internship", slug: "ai-market-intelligence-intern" },
      { title: "AI Workflow Automation Intern", type: "Internship", slug: "ai-workflow-automation-intern" },
      { title: "AI Sales Enablement Intern", type: "Internship", slug: "ai-sales-enablement-intern" },
      { title: "AI Business Intelligence Intern", type: "Internship", slug: "ai-business-intelligence-intern" },
      { title: "AI Customer Success Intern", type: "Internship", slug: "ai-customer-success-intern" },
      { title: "AI Product Marketing Intern", type: "Internship", slug: "ai-product-marketing-intern" },
      { title: "AI Innovation & Strategy Intern", type: "Internship", slug: "ai-innovation-strategy-intern" },
    ],
  },
  {
    name: "Operations & Media",
    jobs: [
      { title: "Finance and HR Intern", type: "Internship", slug: "finance-and-hr-intern" },
      { title: "Video Editor", type: "Internship", slug: "video-editor" },
    ],
  }
];

const FOOTER_DOTS = [
  "purple",
  "blue",
  "green",
  "orange",
  "amber",
  "pink",
];

const FOOTER_COLUMNS = [
  {
    title: "Who We Are",
    links: [
      "About",
      "Team & Culture",
      "Leadership",
      "Cohort 25/26",
      "DEAAI Policy",
      "Sustainability Goals",
    ],
  },
  {
    title: "Careers",
    links: [
      "Open Positions",
      "Tech & AI Incubation",
      "Competitions",
    ],
  },
  {
    title: "Business Verticals",
    links: [
      "Media — Z01 Studios",
      "Arts & Culture",
      "Robotics & IoT",
    ],
  },
  {
    title: "Products",
    links: [
      "Huzzler",
      "Wiviy",
      "Rentit",
      "Z01 Crew",
      "Mungo",
      "Zuca",
    ],
  },
  {
    title: "Enterprise Solutions",
    links: [
      "ENTWY DESIGN",
      "ENTWY AI",
    ],
  },
  {
    title: "AI Solutions",
    links: [
      "Legyn AI",
      "HyreMind AI",
      "BizBy AI",
    ],
  },
  {
    title: "Information",
    links: [
      "FAQ",
      "Events",
      "Webinars",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Resources",
    links: [
      "Resources",
      "Case Study",
    ],
  },
];

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */

const pad = (n) => String(n).padStart(2, "0");

const dotClass = ([row, col, tone, opacity]) =>
  [
    "careers-hero-geo__dot",
    `careers-hero-geo__dot--r${row}`,
    `careers-hero-geo__dot--c${col}`,
    `careers-hero-geo__dot--${tone}`,
    tone === "dark"
      ? `careers-hero-geo__dot--o${opacity}`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      className={`careers-icon-arrow careers-icon-arrow--${direction}`}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      {direction === "down" ? (
        <path d="M8 2v12M3 9l5 5 5-5" />
      ) : (
        <path d="M2 8h12M9 3l5 5-5 5" />
      )}
    </svg>
  );
}

/* ---------------------------------------------------------
   Component
   --------------------------------------------------------- */

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleGroups =
    activeFilter === "All"
      ? JOB_GROUPS
      : JOB_GROUPS.filter(
          (group) => group.name === activeFilter
        );

  return (
    <div className="careers">
      <main className="careers__page">

        {/* ============ HERO ============ */}

        <section className="careers-hero" id="careers-hero">
          <div className="careers-container careers-hero__container">
            <div className="careers-hero__row">

              <div className="careers-hero__content">

                <p className="careers-eyebrow careers-eyebrow--purple">
                  Careers
                </p>

                <h1 className="careers-hero__title">
                  Build what&apos;s next.
                </h1>

                <p className="careers-hero__text">
                  Join the people building intelligent systems,
                  digital products, and technology ventures at Zuntra.
                </p>

                <div className="careers-hero__actions">

                  <a
                    href="#open-positions"
                    className="careers-btn careers-btn--solid"
                  >
                    <span>
                      Explore Open Positions
                    </span>

                    <ArrowIcon direction="down" />
                  </a>

                  <a
                    href="#people"
                    className="careers-btn careers-btn--outline"
                  >
                    Meet the Cohort
                  </a>

                </div>

                <p className="careers-note careers-hero__note">
                  Positions listed are structural placeholders —
                  replace with verified Zuntra open roles.
                </p>

              </div>

              <div
                className="careers-hero-geo"
                aria-hidden="true"
              >
                {HERO_DOTS.map((dot, index) => (
                  <span
                    key={index}
                    className={dotClass(dot)}
                  />
                ))}

                {/* dashed guide boxes from the Figma HeroGeometric */}
                <span className="careers-hero-geo__box careers-hero-geo__box--blue" />
                <span className="careers-hero-geo__box careers-hero-geo__box--green" />
                <span className="careers-hero-geo__box careers-hero-geo__box--orange" />
              </div>

            </div>
          </div>
        </section>

        <div className="careers-divider" />

        {/* ============ MISSION ============ */}

        <section className="careers-section careers-mission">

          <div className="careers-container">

            <div className="careers-mission__row">

              <div className="careers-mission__label">

                <p className="careers-eyebrow">
                  Why Zuntra
                </p>

              </div>

              <div className="careers-mission__content">

                <h2 className="careers-mission__title">
                  We build technology that moves ideas into action.
                </h2>

                <div className="careers-mission__rule" />

                <p className="careers-mission__text">
                  Zuntra brings together technology, product thinking,
                  design, research and experimentation to turn ambitious
                  ideas into useful systems and products. We work across
                  disciplines — engineering, AI, design, enterprise
                  solutions and venture building.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ============ PEOPLE ============ */}

        <section
          className="careers-section careers-section--surface careers-people"
          id="people"
        >

          <div className="careers-container">

            <div className="careers-people__header">

              <p className="careers-eyebrow">
                The People
              </p>

              <h2 className="careers-heading-lg careers-people__title">
                The people behind the build.
              </h2>

              <p className="careers-people__text">
                Different disciplines. Different perspectives.
                One ecosystem.
              </p>

            </div>

            <div className="careers-people__actions">

              <a
                href="#team"
                className="careers-btn careers-btn--outline careers-btn--small"
              >
                <span>
                  Meet the Team
                </span>

                <ArrowIcon />
              </a>

            </div>

          </div>

        </section>

        {/* ============ CULTURE ============ */}

        <section className="careers-section careers-culture">

          <div className="careers-container">

            <div className="careers-culture__head">

              <div>

                <p className="careers-eyebrow">
                  How We Work
                </p>

                <h2 className="careers-heading-lg careers-culture__title">
                  Build with curiosity. Work with intent.
                </h2>

              </div>

              <p className="careers-culture__text">
                These are the principles that shape how we think,
                how we build, and how we work together across Zuntra.
              </p>

            </div>

            <ul className="careers-principles">

              {PRINCIPLES.map((item, index) => (

                <li
                  key={item.name}
                  className="careers-principles__item"
                >

                  <span className="careers-principles__num">
                    {pad(index + 1)}
                  </span>

                  <h3 className="careers-principles__name">
                    {item.name}
                  </h3>

                  <p className="careers-principles__desc">
                    {item.desc}
                  </p>

                  <span className="careers-principles__arrow">
                    <ArrowIcon />
                  </span>

                </li>

              ))}

            </ul>

          </div>

        </section>

        {/* ============ LIFE AT ZUNTRA ============ */}

        <section className="careers-section careers-section--surface careers-life">

          <div className="careers-container">

            <div className="careers-life__head">

              <div>

                <p className="careers-eyebrow careers-eyebrow--orange">
                  Life at Zuntra
                </p>

                <h2 className="careers-heading-lg careers-life__title">
                  Building is better together.
                </h2>

              </div>

              <p className="careers-life__text">
                Real work. Real problems. Real collaboration.
              </p>

            </div>

            <div className="careers-life__gallery">

              <div className="careers-life__slot careers-life__slot--main">
                <img
                  src={careers1}
                  alt="Zuntra team collaborating on a project"
                />
              </div>

              <div className="careers-life__slot careers-life__slot--top-mid">
                <img
                  src={careers2}
                  alt="Workshop and product session"
                />
              </div>

              <div className="careers-life__slot careers-life__slot--top-right">
                <img
                  src={careers3}
                  alt="Office and collaborative space"
                />
              </div>

              <div className="careers-life__slot careers-life__slot--bottom-mid">
                <img
                  src={careers4}
                  alt="Product team discussion"
                />
              </div>

              <div className="careers-life__slot careers-life__slot--bottom-right">
                <img
                  src={careers5}
                  alt="Design and engineering review"
                />
              </div>

            </div>

            <p className="careers-note careers-life__note">
              Placeholder photography — replace with actual Zuntra
              team and event photography.
            </p>

          </div>

        </section>

        {/* ============ OPEN POSITIONS ============ */}

        <section
          className="careers-section careers-positions"
          id="open-positions"
        >

          <div className="careers-container--wide">

            <p className="careers-eyebrow">
              Open Positions
            </p>

            <h2 className="careers-positions__title">
              Find your place to build.
            </h2>

            <div
              className="careers-positions__filters"
              role="group"
              aria-label="Filter positions"
            >

              {FILTERS.map((filter) => (

                <button
                  key={filter}
                  type="button"
                  className={
                    filter === activeFilter
                      ? "careers-filter careers-filter--active"
                      : "careers-filter"
                  }
                  aria-pressed={
                    filter === activeFilter
                  }
                  onClick={() =>
                    setActiveFilter(filter)
                  }
                >
                  {filter}
                </button>

              ))}

            </div>

            <div className="careers-positions__list">

              {visibleGroups.map((group) => (

                <div
                  key={group.name}
                  className="careers-group"
                >

                  <div className="careers-group__head">

                    <span className="careers-group__name">
                      {group.name}
                    </span>

                    <span className="careers-group__count">
                      {group.jobs.length}{" "}
                      {group.jobs.length === 1
                        ? "position"
                        : "positions"}
                    </span>

                  </div>

                  <ul className="careers-group__jobs">

                    {group.jobs.map((job, index) => (

                      <li
                        key={`${group.name}-${index}`}
                        className="careers-job"
                      >

                        {/* Product Designer → CareerDetail */}

                        <Link
                          to={`/company/careers/${job.slug}`}
                          className="careers-job__link"
                        >

                          <span className="careers-job__num">
                            {pad(index + 1)}
                          </span>

                          <span className="careers-job__title">
                            {job.title}
                          </span>

                          <span className="careers-job__location">
                            {JOB_LOCATION}
                          </span>

                          <span className="careers-job__type">
                            {job.type}
                          </span>

                          <span className="careers-job__arrow">
                            <ArrowIcon />
                          </span>

                        </Link>

                      </li>

                    ))}

                  </ul>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* ============ CTA ============ */}

        <section className="careers-cta">

          <div className="careers-cta__panel">

            <div className="careers-cta__content">

              <p className="careers-eyebrow careers-eyebrow--green careers-cta__eyebrow">
                Always Building
              </p>

              <h2 className="careers-cta__title">
                Have something worth building?
              </h2>

              <p className="careers-cta__text">
                We&apos;re always interested in people who want to
                learn, experiment, and build meaningful technology.
              </p>

              <div className="careers-cta__actions">

                <a
                  href="#open-positions"
                  className="careers-btn careers-btn--light"
                >
                  Explore Open Positions
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}