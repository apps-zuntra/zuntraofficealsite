import { useEffect, useState } from "react";
import "./IncubationApply.css";

/* ------------------------------------------------------------------ */
/*  Static content                                                     */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  "What We Build",
  "Products",
  "Solutions",
  "Industries",
  "Innovation",
  "Company",
];

const NAV_SECONDARY_LINKS = ["Insights", "Careers"];

const NEEDS_OPTIONS = [
  "Product",
  "Design",
  "Engineering",
  "AI",
  "Automation",
  "Strategy",
  "Mentorship",
  "Go-to-market",
  "Other",
];

const FORM_SECTIONS = [
  {
    id: "about-you",
    number: "01",
    title: "About You",
    layout: "grid",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "Your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email address",
        type: "email",
        placeholder: "you@example.com",
        required: true,
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+1 000 000 0000",
      },
      {
        name: "linkedin",
        label: "LinkedIn",
        type: "text",
        placeholder: "linkedin.com/in/yourprofile",
      },
      {
        name: "portfolio",
        label: "Portfolio / Website",
        type: "text",
        placeholder: "yoursite.com",
      },
      {
        name: "location",
        label: "Location",
        type: "text",
        placeholder: "City, Country",
      },
    ],
  },
  {
    id: "your-idea",
    number: "02",
    title: "Your Idea",
    layout: "stack",
    fields: [
      {
        name: "projectName",
        label: "Project / Venture name",
        type: "text",
        placeholder: "What are you calling it?",
        required: true,
      },
      {
        name: "oneLine",
        label: "One-line description",
        type: "text",
        placeholder: "Describe it in one sentence.",
      },
      {
        name: "problem",
        label: "What problem are you solving?",
        type: "textarea",
        size: "lg",
        hint: "Describe the specific problem or opportunity you've identified.",
        placeholder: "The problem I'm solving is...",
        required: true,
      },
      {
        name: "audience",
        label: "Who is this for?",
        type: "textarea",
        size: "sm",
        placeholder: "Describe your target user or customer.",
      },
      {
        name: "stage",
        label: "Current stage",
        type: "select",
        hint: "Where are you in the process?",
        placeholder: "Select one...",
        options: [
          "Just an idea",
          "Researching",
          "Prototype",
          "MVP built",
          "Live with users",
          "Generating revenue",
        ],
      },
    ],
  },
  {
    id: "your-product",
    number: "03",
    title: "Your Product",
    layout: "stack",
    fields: [
      {
        name: "building",
        label: "What are you building?",
        type: "textarea",
        size: "md",
        placeholder: "Describe the product or system.",
      },
      {
        name: "existing",
        label: "What exists today?",
        type: "textarea",
        size: "sm",
        hint: "Have you built anything yet? A prototype, a spec, a landing page?",
        placeholder: "So far I have...",
      },
      {
        name: "validated",
        label: "What have you already validated?",
        type: "textarea",
        size: "sm",
        placeholder: "Users I have spoken to, tests I have run, feedback I have received...",
      },
      {
        name: "different",
        label: "What makes this different?",
        type: "textarea",
        size: "sm",
        placeholder: "What gives this idea a real chance?",
      },
    ],
  },
  {
    id: "your-team",
    number: "04",
    title: "Your Team",
    layout: "stack",
    fields: [
      {
        name: "teamType",
        label: "Building alone or with a team?",
        type: "select",
        placeholder: "Select one...",
        options: ["Building alone", "With a team"],
      },
      {
        name: "teamSize",
        label: "Team size",
        type: "text",
        placeholder: "e.g. 1, 2, 4",
      },
      {
        name: "teamMembers",
        label: "Team members",
        type: "textarea",
        size: "sm",
        hint: "Who is on the team? List names and roles if comfortable.",
        placeholder: "Name — Role, Name — Role...",
      },
      {
        name: "experience",
        label: "Relevant experience",
        type: "textarea",
        size: "md",
        placeholder: "What relevant experience does the team bring?",
      },
    ],
  },
  {
    id: "what-you-need",
    number: "05",
    title: "What You Need",
    layout: "stack",
    fields: [
      {
        name: "needs",
        label: "What are you looking for from Zuntra?",
        type: "chips",
        options: NEEDS_OPTIONS,
      },
    ],
  },
  {
    id: "vision",
    number: "06",
    title: "Vision",
    layout: "stack",
    fields: [
      {
        name: "vision",
        label: "Where do you want to take this?",
        type: "textarea",
        size: "md",
        placeholder: "In 3 years, I want this to be...",
      },
      {
        name: "success",
        label: "What would success look like?",
        type: "textarea",
        size: "sm",
        placeholder: "Success for this venture means...",
      },
      {
        name: "notes",
        label: "Anything else we should know?",
        type: "textarea",
        size: "sm",
        placeholder: "Add anything relevant that wasn't covered above.",
      },
    ],
  },
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
    links: ["Open Positions", "Tech & AI Incubation", "Competitions"],
  },
  {
    title: "Business Verticals",
    links: ["Media — Z01 Studios", "Arts & Culture", "Robotics & IoT"],
  },
  {
    title: "Products",
    links: ["Huzzler", "Wiviy", "Rentit", "Z01 Crew", "Mungo", "Zuca"],
  },
  {
    title: "Enterprise Solutions",
    links: ["ENTWY DESIGN", "ENTWY AI"],
  },
  {
    title: "AI Solutions",
    links: ["Legyn AI", "HyreMind AI", "BizBy AI"],
  },
  {
    title: "Information",
    links: ["FAQ", "Events", "Webinars", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Resources",
    links: ["Resources", "Case Study"],
  },
];

const FOOTER_DOT_COUNT = 6;

/* ------------------------------------------------------------------ */
/*  Initial form values                                                */
/* ------------------------------------------------------------------ */

const buildInitialValues = () => {
  const values = {};
  FORM_SECTIONS.forEach((section) => {
    section.fields.forEach((field) => {
      values[field.name] = field.type === "chips" ? [] : "";
    });
  });
  return values;
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function FieldLabel({ id, required, hasHint, isGroup, children }) {
  const className = [
    "field__label",
    hasHint || isGroup ? "field__label--flush" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (isGroup) {
    return (
      <p id={id} className={className}>
        {children}
      </p>
    );
  }

  return (
    <label htmlFor={id} className={className}>
      {children}
      {required && <span className="field__required">*</span>}
    </label>
  );
}

function FormField({ field, value, onChange, onToggleChip }) {
  const inputId = `field-${field.name}`;
  const labelId = `label-${field.name}`;

  if (field.type === "chips") {
    return (
      <div className="field" role="group" aria-labelledby={labelId}>
        <FieldLabel id={labelId} isGroup>
          {field.label}
        </FieldLabel>
        <div className="chips">
          {field.options.map((option) => {
            const isSelected = value.includes(option);
            return (
              <button
                key={option}
                type="button"
                className={`chip${isSelected ? " chip--selected" : ""}`}
                aria-pressed={isSelected}
                onClick={() => onToggleChip(field.name, option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="field">
      <FieldLabel
        id={inputId}
        required={field.required}
        hasHint={Boolean(field.hint)}
      >
        {field.label}
      </FieldLabel>

      {field.hint && <p className="field__hint">{field.hint}</p>}

      {field.type === "textarea" && (
        <textarea
          id={inputId}
          name={field.name}
          className={`textarea textarea--${field.size}`}
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      )}

      {field.type === "select" && (
        <select
          id={inputId}
          name={field.name}
          className={`select${value === "" ? " select--placeholder" : ""}`}
          value={value}
          onChange={onChange}
          required={field.required}
        >
          <option value="">{field.placeholder}</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {(field.type === "text" ||
        field.type === "email" ||
        field.type === "tel") && (
        <input
          id={inputId}
          name={field.name}
          type={field.type}
          className="input"
          placeholder={field.placeholder}
          value={value}
          onChange={onChange}
          required={field.required}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function IncubationApplyPage({ onSubmit }) {
  const [values, setValues] = useState(buildInitialValues);
  const [consent, setConsent] = useState(false);
  const [activeSection, setActiveSection] = useState(FORM_SECTIONS[0].id);

  /* Highlight the current section in the progress sidebar */
  useEffect(() => {
    const elements = FORM_SECTIONS.map((section) =>
      document.getElementById(section.id)
    ).filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleToggleChip = (name, option) => {
    setValues((previous) => {
      const current = previous[name];
      const next = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...previous, [name]: next };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit({ ...values, consent });
    }
  };

  return (
    <div className="incubation-page">
      {/* ---------------------------- Navbar ---------------------------- */}
      <header className="navbar">
        <div className="container navbar__inner">
          <a href="#" className="brand">
            ZUNTRA
          </a>

          <nav className="navbar__links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="navbar__link">
                {link}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            {NAV_SECONDARY_LINKS.map((link) => (
              <a key={link} href="#" className="navbar__link navbar__link--muted">
                {link}
              </a>
            ))}
            <a href="#" className="navbar__cta">
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* ----------------------------- Hero ----------------------------- */}
        <section className="hero">
          <div className="container">
            <h1 className="hero__title">
              Let's build
              <br />
              what's next.
            </h1>
            <p className="hero__text">
              Tell us about your idea, your team and what you're building. We
              review applications to understand where Zuntra can help.
            </p>
          </div>
        </section>

        {/* ------------------------- Application ------------------------- */}
        <section className="apply">
          <div className="shell apply__layout">
            {/* Progress sidebar */}
            <aside className="progress-sidebar" aria-label="Application progress">
              <p className="progress-sidebar__title">Zuntra Incubation</p>
              <nav className="progress-sidebar__nav">
                {FORM_SECTIONS.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`progress-link${isActive ? " progress-link--active" : ""}`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span className="progress-link__number">{section.number}</span>
                      <span className="progress-link__label">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </aside>

            {/* Form */}
            <form className="apply-form" onSubmit={handleSubmit}>
              {FORM_SECTIONS.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="form-section"
                  aria-labelledby={`${section.id}-title`}
                >
                  <header className="section-heading">
                    <span className="section-heading__number">{section.number}</span>
                    <h2 id={`${section.id}-title`} className="section-heading__title">
                      {section.title}
                    </h2>
                  </header>

                  <div
                    className={`form-section__body${
                      section.layout === "grid" ? " form-section__body--grid" : ""
                    }`}
                  >
                    {section.fields.map((field) => (
                      <FormField
                        key={field.name}
                        field={field}
                        value={values[field.name]}
                        onChange={handleChange}
                        onToggleChip={handleToggleChip}
                      />
                    ))}
                  </div>
                </section>
              ))}

              <div className="form-footer">
                <div className="form-footer__inner">
                  <label className="consent">
                    <input
                      type="checkbox"
                      className="consent__checkbox"
                      checked={consent}
                      onChange={(event) => setConsent(event.target.checked)}
                      required
                    />
                    <span className="consent__text">
                      By submitting this application, you agree that Zuntra may
                      use the information provided to review your application
                      and contact you regarding incubation opportunities.{" "}
                      <a href="#" className="consent__link">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <button type="submit" className="submit-button">
                    Submit Application →
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}