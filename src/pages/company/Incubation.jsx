import { useState } from "react";
import { Link } from "react-router-dom";
import "./Incubation.css";

const IMAGE_URLS = {
  heroLeft: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  heroTop: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  heroRight: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  helpMain: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  helpSub: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  program1: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  program2: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
  program3: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85",
  program4: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
  story1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
  story2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  story3: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  community1: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  community2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85",
  community3: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
  community4: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
};

/* ------------------------------ Data ------------------------------ */

const HELP_TABS = [
  {
    id: "ideas",
    label: "Ideas",
    heading: "Start with the problem.",
    text: "We help shape early ideas into clear opportunities by exploring the problem space, potential users, market context and a genuinely important question.",
  },
  {
    id: "product",
    label: "Product",
    heading: "Shape what people will use.",
    text: "We turn validated opportunities into a clear product direction, defining the experience, the scope and the roadmap for a strong first version.",
  },
  {
    id: "technology",
    label: "Technology",
    heading: "Build on solid foundations.",
    text: "Our engineers and AI specialists design the architecture and build the working systems your product depends on, from first prototype to production.",
  },
  {
    id: "people",
    label: "People",
    heading: "Bring the right people in.",
    text: "We connect builders with designers, engineers, mentors and operators who have taken ideas from zero to launch before.",
  },
  {
    id: "growth",
    label: "Growth",
    heading: "Launch, learn, grow.",
    text: "We help ventures reach their first users, measure what works and build the momentum needed to keep growing.",
  },
];

const CAPABILITIES = [
  { name: "Product", tags: ["Product strategy", "UX design", "UI design", "Validation"] },
  { name: "Engineering", tags: ["Web", "Mobile", "Backend", "Infrastructure"] },
  { name: "AI", tags: ["AI systems", "Agents", "Intelligent workflows"] },
  { name: "Design", tags: ["Brand", "Experience", "Interaction"] },
  { name: "Automation", tags: ["Data pipelines", "Workflows", "Integrations"] },
  { name: "Go-to-market", tags: ["Positioning", "Launch", "Growth"] },
];

const JOURNEY = [
  { key: "idea", name: "Idea", text: "A meaningful problem or opportunity worth pursuing." },
  { key: "validate", name: "Validate", text: "Understand users, market and real feasibility." },
  { key: "design", name: "Design", text: "Shape the product experience and direction." },
  { key: "build", name: "Build", text: "Create the technology and first working product." },
  { key: "test", name: "Test", text: "Put it in front of real users and learn." },
  { key: "launch", name: "Launch", text: "Bring it into the world." },
  { key: "grow", name: "Grow", text: "Iterate and build the venture forward." },
];

const PROGRAMS = [
  {
    key: "incubation",
    eyebrow: "Incubation program",
    title: "Zuntra Incubation",
    text: "For early-stage ideas that need product thinking, design and technology development to move from concept toward something real.",
    href: "/company/incubationApply",
  },
];

const STORIES = [
  {
    size: "large",
    title: "The next story",
    text: "The next Zuntra venture story starts with an idea.",
    href: "/company/incubationApply",
  },
  {
    size: "small",
    title: "Could start",
    text: "Tell us what you are building.",
    href: "/company/incubationApply",
  },
  {
    size: "small",
    title: "Right here.",
    text: "Apply to Zuntra Incubation.",
    href: "/company/incubationApply",
  },
];

const FLOW = [
  { key: "idea", name: "Idea", desc: "Where it begins" },
  { key: "labs", name: "Zuntra Labs", desc: "Research & experiment" },
  { key: "incubation", name: "Zuntra Incubation", desc: "Build & validate" },
  { key: "product", name: "Product", desc: "Launch & grow" },
  { key: "venture", name: "Venture", desc: "Scale & evolve" },
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

const pad = (n) => String(n).padStart(2, "0");

/* ------------------------ Small shared pieces ------------------------ */

/* Empty image slot. `hatch` = optional hatch-mark modifier class. */
function ImageSlot({ className = "", children }) {
  return <div className={`inc-image ${className}`.trim()}>{children}</div>;
}

/* ----------------------------- Sections ----------------------------- */

function HeroSection() {
  return (
    <section className="inc-hero">
      <ImageSlot className="inc-hero__img inc-hero__img--left">
        <img src={IMAGE_URLS.heroLeft} alt="Zuntra incubation team" />
      </ImageSlot>

      <ImageSlot className="inc-hero__img inc-hero__img--top">
        <img src={IMAGE_URLS.heroTop} alt="Modern workspace" />
      </ImageSlot>

      <ImageSlot className="inc-hero__img inc-hero__img--right">
        <img src={IMAGE_URLS.heroRight} alt="Startup collaboration" />
      </ImageSlot>

      <div className="inc-hero__content">
        <h1 className="inc-hero__title">From idea to venture.</h1>
        <p className="inc-hero__text">
          We help promising ideas and ambitious builders turn early-stage concepts into real
          products, ventures and businesses.
        </p>
        <div className="inc-hero__actions">
          <Link className="inc-btn inc-btn--dark" to="/company/incubationApply">
            Apply to incubate →
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="inc-section inc-why">
      <div className="inc-container inc-why__grid">
        <p className="inc-eyebrow inc-why__label">Why Zuntra Incubation</p>
        <div>
          <h2 className="inc-why__title">Great ideas need a way forward.</h2>
          <p className="inc-why__text">
            An idea is only the beginning. Zuntra brings together product, design, engineering, AI,
            business thinking and execution to help promising ideas move from concept toward
            something real.
          </p>
          <p className="inc-why__text">
            Ideas need people. Technology. Design. Product thinking. Execution. Guidance. Iteration.
            The environment matters as much as the idea itself.
          </p>
        </div>
      </div>
    </section>
  );
}

function HelpSection() {
  const [activeTab, setActiveTab] = useState(HELP_TABS[0].id);
  const tab = HELP_TABS.find((item) => item.id === activeTab);

  return (
    <section className="inc-section inc-help">
      <div className="inc-container">
        <h2 className="inc-help__title">
          How <span className="inc-ring">we help.</span>
        </h2>

        <div className="inc-tabs" role="tablist" aria-label="How we help">
          {HELP_TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={item.id === activeTab}
              className={`inc-tab${item.id === activeTab ? " is-active" : ""}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="inc-help__stage" role="tabpanel">
          <div className="inc-help__copy">
            <h3 className="inc-help__heading">{tab.heading}</h3>
            <p className="inc-help__text">{tab.text}</p>
            <Link className="inc-link" to="/company/incubationApply">
              Apply to incubate →
            </Link>
          </div>

          <div className="inc-help__visual">
            <ImageSlot className="inc-help__img inc-help__img--main">
              <img src={IMAGE_URLS.helpMain} alt="Team collaboration" />
            </ImageSlot>
            <ImageSlot className="inc-help__img inc-help__img--sub">
              <img src={IMAGE_URLS.helpSub} alt="Digital product workspace" />
            </ImageSlot>
            <span className="inc-help__line" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  return (
    <section className="inc-section inc-cap">
      <div className="inc-container">
        <div className="inc-cap__head">
          <h2 className="inc-cap__title">
            We don&apos;t just
            <br />
            have ideas.
            <br />
            We help build them.
          </h2>
          <p className="inc-cap__intro">
            Zuntra contributes across the full range of capabilities needed to turn an early-stage
            idea into a working product. These are the areas we can bring into an incubation
            venture.
          </p>
        </div>

        <ul className="inc-cap__list">
          {CAPABILITIES.map((item, index) => (
            <li className="inc-cap__row" key={item.name}>
              <span className="inc-cap__num">{pad(index + 1)}</span>
              <span className="inc-cap__name">{item.name}</span>
              <div className="inc-cap__tags">
                {item.tags.map((tag) => (
                  <span className="inc-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="inc-section inc-journey">
      <div className="inc-container">
        <p className="inc-eyebrow">The Journey</p>
        <h2 className="inc-journey__title">
          From idea
          <br />
          to something real.
        </h2>

        <ol className="inc-journey__steps">
          {JOURNEY.map((step, index) => (
            <li className={`inc-step inc-step--${step.key}`} key={step.key}>
              <span className="inc-step__badge">{pad(index + 1)}</span>
              <h4 className="inc-step__name">{step.name}</h4>
              <p className="inc-step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section className="inc-section inc-programs">
      <div className="inc-container">
        <div className="inc-programs__head">
          <h2 className="inc-programs__title">
            Ways to build
            <br />
            with Zuntra.
          </h2>
        </div>

        <div className="inc-programs__grid inc-programs__grid--single">
          {PROGRAMS.map((program, index) => (
            <article className={`inc-card inc-card--${program.key} inc-card--full`} key={program.key}>
              <ImageSlot className="inc-card__img inc-card__img--full">
                <img src={IMAGE_URLS[`program${index + 1}`]} alt={`${program.title} visual`} />
              </ImageSlot>
              <div className="inc-card__body">
                <p className="inc-card__eyebrow">{program.eyebrow}</p>
                <h3 className="inc-card__title">{program.title}</h3>
                <p className="inc-card__text">{program.text}</p>
                <Link className="inc-card__link" to="/company/incubationApply">
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoriesSection() {
  return (
    <section className="inc-section inc-stories">
      <div className="inc-container">
        <h2 className="inc-stories__title">
          Ideas that went <span className="inc-ring inc-ring--tight">further.</span>
        </h2>
        <p className="inc-stories__text">
          Stories and ventures taking shape inside the Zuntra ecosystem.
        </p>

        <div className="inc-stories__grid">
          {STORIES.map((story, index) => (
            <Link
              className={`inc-story inc-story--${story.size}`}
              to={story.href}
              key={story.title}
            >
              <ImageSlot className="inc-story__img">
                <img
                  src={IMAGE_URLS[`story${index + 1}`]}
                  alt={`${story.title} visual`}
                />
              </ImageSlot>
              <div className="inc-story__caption">
                <div>
                  <p className="inc-story__eyebrow">Zuntra venture</p>
                  <h3 className="inc-story__title">{story.title}</h3>
                  <p className="inc-story__desc">{story.text}</p>
                </div>
                <span className="inc-story__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="inc-section inc-community">
      <div className="inc-container inc-community__grid">
        <div>
          <h2 className="inc-community__title">
            <span className="inc-community__line-text">Build with</span>
            <span className="inc-community__line-text">
              <span className="inc-underline">people who build.</span>
            </span>
          </h2>
          <p className="inc-community__text">
            Ideas become stronger when different perspectives, skills and experiences come together.
            Incubation is a collective act.
          </p>
          <Link className="inc-btn inc-btn--light" to="/company/incubationApply">
            Join the community →
          </Link>
        </div>

        <div className="inc-community__collage">
          <ImageSlot className="inc-community__img inc-community__img--a">
            <img src={IMAGE_URLS.community1} alt="Analytics workspace" />
          </ImageSlot>
          <ImageSlot className="inc-community__img inc-community__img--b">
            <img src={IMAGE_URLS.community2} alt="Technology team" />
          </ImageSlot>
          <ImageSlot className="inc-community__img inc-community__img--c">
            <img src={IMAGE_URLS.community3} alt="Collaborative team" />
            <span className="inc-community__pin" aria-hidden="true" />
          </ImageSlot>
          <ImageSlot className="inc-community__img inc-community__img--d">
            <img src={IMAGE_URLS.community4} alt="Creative workspace" />
          </ImageSlot>
        </div>
      </div>
    </section>
  );
}

function EcosystemSection() {
  return (
    <section className="inc-section inc-ecosystem">
      <div className="inc-container inc-ecosystem__grid">
        <div>
          <p className="inc-eyebrow inc-ecosystem__eyebrow">The Zuntra Ecosystem</p>
          <h2 className="inc-ecosystem__title">
            Building
            <br />
            the next Zuntra.
          </h2>
          <p className="inc-ecosystem__text">
            Some ideas become experiments. Some experiments become products. Some products become
            ventures. The path is not linear — but the environment makes it possible.
          </p>
          <div className="inc-ecosystem__links">
            <a className="inc-ecosystem__link inc-ecosystem__link--accent" href="#">
              Explore Labs →
            </a>
            <a className="inc-ecosystem__link" href="#">
              Explore Products →
            </a>
          </div>
        </div>

        <ul className="inc-flow">
          {FLOW.map((item) => (
            <li className={`inc-flow__step inc-flow__step--${item.key}`} key={item.key}>
              <div className="inc-flow__item">
                <span className="inc-flow__marker" aria-hidden="true" />
                <div>
                  <p className="inc-flow__name">{item.name}</p>
                  <p className="inc-flow__desc">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ApplySection() {
  return (
    <section className="inc-cta" id="apply">
      <div className="inc-cta__inner">
        <h2 className="inc-cta__title">
          Ready to build
          <br />
          something real?
        </h2>
        <p className="inc-cta__text">
          Have an idea? Building something early? Looking for the right environment to take it
          further?
        </p>
        <p className="inc-cta__text">Tell us what you&apos;re building.</p>
        <div className="inc-cta__actions">
          <Link className="inc-btn inc-btn--white" to="/company/incubationApply">
            Apply to Zuntra Incubation →
          </Link>
          <a className="inc-btn inc-btn--ghost" href="#">
            Talk to us →
          </a>
        </div>
      </div>
    </section>
  );
}


/* ------------------------------ Page ------------------------------ */

export default function IncubationPage() {
  return (
    <div className="inc-page">
      <main>
        <HeroSection />
        <WhySection />
        <HelpSection />
        {/* <CapabilitySection /> */}
        <JourneySection />
        <ProgramsSection />
        <StoriesSection />
        <CommunitySection />
        <EcosystemSection />
        <ApplySection />
      </main>
    </div>
  );
}