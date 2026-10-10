import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CareerDetail.css";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app, storage } from '../../firebase';
import { jobsData } from '../../data/jobsData';

/* ------------------------------------------------------------------ */
/*  Static content                                                     */
/* ------------------------------------------------------------------ */

const ECOSYSTEM_TEXT =
  "Zuntra builds intelligent systems, digital products and technology ventures. We work across AI and intelligence, product engineering, enterprise solutions, robotics, design and venture building.";

const PERSONAL_FIELDS = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your@email.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "+91 00000 00000",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    type: "text",
    placeholder: "linkedin.com/in/yourname",
    required: true,
  },
  {
    name: "portfolio",
    label: "Portfolio / Website",
    type: "text",
    placeholder: "yourportfolio.com",
  },
  {
    name: "github",
    label: "GitHub",
    type: "text",
    placeholder: "github.com/yourname",
  },
];

const LONG_FIELDS = [
  {
    name: "coverLetter",
    label: "Cover letter",
    placeholder:
      "Tell us a bit about yourself and why you're interested in this role...",
  },
  {
    name: "whyZuntra",
    label: "Why are you interested in Zuntra?",
    placeholder: "What draws you to Zuntra's work specifically?",
  },
];

const RELATED_JOBS = [
  { title: "Frontend Engineer", department: "Engineering", location: "Chennai [Hybrid]" },
  { title: "AI Engineer", department: "AI & Intelligence", location: "Chennai [Hybrid]" },
  { title: "Product Analyst", department: "Product", location: "Chennai [Hybrid]" },
  {
    title: "Enterprise Solutions Consultant",
    department: "Enterprise",
    location: "Chennai [Hybrid]",
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

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  github: "",
  coverLetter: "",
  whyZuntra: "",
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function MetaItem({ label, value, variant }) {
  return (
    <div className={`meta-item meta-item--${variant}`}>
      <dt className="meta-item__label">{label}</dt>
      <dd className="meta-item__value">{value}</dd>
    </div>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art__card" />
      <span className="hero-art__tag">Design</span>
      <span className="hero-art__title">Product Designer</span>

      <svg
        className="hero-art__lines"
        viewBox="0 0 533.6 333.5"
        focusable="false"
      >
        <line
          className="hero-art__line hero-art__line--blue"
          x1="244.6"
          y1="133.4"
          x2="413.8"
          y2="91.1"
        />
        <line
          className="hero-art__line hero-art__line--green"
          x1="244.6"
          y1="155.6"
          x2="414.1"
          y2="219.2"
        />
        <circle
          className="hero-art__node hero-art__node--blue"
          cx="422.4"
          cy="88.9"
          r="8.35"
        />
        <circle
          className="hero-art__node hero-art__node--green"
          cx="422.4"
          cy="222.3"
          r="8.35"
        />
      </svg>
    </div>
  );
}

function TextField({ field, value, onChange }) {
  const id = `field-${field.name}`;
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {field.label}
        {field.required && <span className="field__required">*</span>}
      </label>
      <input
        id={id}
        name={field.name}
        type={field.type}
        className="input"
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        required={field.required}
      />
    </div>
  );
}

function TextAreaField({ field, value, onChange }) {
  const id = `field-${field.name}`;
  return (
    <div className="field field--textarea">
      <label htmlFor={id} className="field__label">
        {field.label}
      </label>
      <textarea
        id={id}
        name={field.name}
        className="textarea"
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function RequirementGroup({ label, items, variant }) {
  return (
    <div className={`requirement-group requirement-group--${variant}`}>
      <p className="requirement-group__label">{label}</p>
      <ul className="requirement-list">
        {items.map((item) => (
          <li key={item} className="requirement-list__item">
            <span className="requirement-list__dot" aria-hidden="true" />
            <p className="requirement-list__text">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CareerDetailPage({ onSubmit }) {
  const { slug } = useParams();
  const JOB = jobsData[slug] || jobsData["default"];

  const [values, setValues] = useState(INITIAL_VALUES);
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const db = getFirestore(app);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files && event.target.files[0] ? event.target.files[0] : null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      let resumeUrl = null;

      if (resume) {
        const resumeRef = ref(storage, `resumes/${Date.now()}_${resume.name}`);
        const snapshot = await uploadBytes(resumeRef, resume);
        resumeUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "applications"), {
        ...values,
        jobTitle: JOB.title,
        jobDepartment: JOB.department,
        resumeName: resume ? resume.name : null,
        resumeUrl: resumeUrl,
        timestamp: serverTimestamp()
      });
      setSubmitStatus('success');
      setValues(INITIAL_VALUES);
      setResume(null);
      if (onSubmit) {
        onSubmit({ ...values, resume });
      }
    } catch (error) {
      console.error("Error submitting application: ", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="job-page">
      <main>
        {/* ----------------------------- Hero ----------------------------- */}
        <section className="job-hero">
          <div className="shell job-hero__inner">
            <div className="job-hero__top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
              <nav className="breadcrumb" aria-label="Breadcrumb" style={{ display: 'flex', gap: '8px', paddingBottom: 0 }}>
                <Link to="/company/careers" className="breadcrumb__link" style={{ letterSpacing: '1.5px' }}>
                  CAREERS
                </Link>
                <span className="breadcrumb__separator" aria-hidden="true">
                  /
                </span>
                <span className="breadcrumb__current" aria-current="page" style={{ letterSpacing: '1.5px', color: '#9a9a9a' }}>
                  {JOB.department.toUpperCase()}
                </span>
              </nav>

              <Link to="/company/careers" className="back-link" style={{ textTransform: 'none', padding: '8px 16px', border: '1px solid #e5e5e5', borderRadius: '4px', color: '#5f5f5f', fontWeight: 500 }}>
                All positions
              </Link>
            </div>

            <div className="job-hero__body" style={{ display: 'block', paddingTop: 0 }}>
              <div className="job-hero__content" style={{ maxWidth: '800px' }}>
                <h2 className="job-hero__title" style={{ fontSize: '48px', textTransform: 'none', fontWeight: 500, letterSpacing: '-1px', marginBottom: '24px' }}>
                  {JOB.title}
                </h2>
                <p className="job-hero__summary" style={{ fontSize: '18px', maxWidth: '600px', lineHeight: '1.6', marginBottom: '40px' }}>
                  {JOB.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ padding: '10px 16px', border: '1px solid #e5e5e5', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>
                      {JOB.location}
                    </div>
                    <div style={{ padding: '10px 16px', border: '1px solid #e5e5e5', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>
                      {JOB.type}
                    </div>
                    <div style={{ padding: '10px 16px', border: '1px solid #e5e5e5', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>
                      {JOB.department}
                    </div>
                  </div>

                  <a href="#application" className="button button--hero" style={{ padding: '0 32px', height: '48px', borderRadius: '4px', textTransform: 'none', letterSpacing: 'normal', fontSize: '14px', background: '#09090b', color: '#fff' }}>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------- Job body ---------------------------- */}
        <section className="job-body">
          <div className="shell job-body__layout">
            {/* Sidebar summary card */}
            <aside className="summary-card" aria-label="Job summary">
              <h2 className="summary-card__title">{JOB.title}</h2>
              <p className="summary-card__text">{JOB.summary}</p>

              <dl className="summary-card__meta">
                <MetaItem label="Location" value={JOB.location} variant="card" />
                <MetaItem label="Type" value={JOB.type} variant="card" />
                <MetaItem label="Department" value={JOB.department} variant="card" />
              </dl>

              <a href="#application" className="button button--sidebar">
                Apply Now →
              </a>
            </aside>

            {/* Main content */}
            <div className="job-content">
              <section className="job-section" aria-labelledby="about-role-title">
                <h2 id="about-role-title" className="section-title">
                  About the role
                </h2>
                <div className="prose">
                  {JOB.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section className="job-section" aria-labelledby="what-youll-do-title">
                <h2 id="what-youll-do-title" className="section-title">
                  What you'll do
                </h2>
                <ol className="step-list">
                  {JOB.responsibilities.map((item, index) => (
                    <li key={item} className="step-list__item">
                      <span className="step-list__number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="step-list__text">{item}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="job-section" aria-labelledby="looking-for-title">
                <h2 id="looking-for-title" className="section-title">
                  What we're looking for
                </h2>
                <RequirementGroup
                  label="Required"
                  items={JOB.required}
                  variant="required"
                />
                <RequirementGroup
                  label="Preferred"
                  items={JOB.preferred}
                  variant="preferred"
                />
              </section>

              <section className="ecosystem" aria-labelledby="ecosystem-title">
                <div className="ecosystem__intro">
                  <p className="eyebrow eyebrow--muted">About Zuntra</p>
                  <h3 id="ecosystem-title" className="ecosystem__title">
                    The Zuntra ecosystem.
                  </h3>
                </div>
                <div className="ecosystem__details">
                  <p className="ecosystem__text">{ECOSYSTEM_TEXT}</p>
                  <a href="#" className="ecosystem__link">
                    Explore Zuntra →
                  </a>
                </div>
              </section>

              {/* Application form */}
              <section
                id="application"
                className="application"
                aria-labelledby="application-title"
              >
                <p className="eyebrow eyebrow--violet">Application</p>
                <h3 id="application-title" className="application__title">
                  Apply for Product Designer
                </h3>

                <form className="application__form" onSubmit={handleSubmit}>
                  <p className="form-group-heading">Personal information</p>

                  <div className="form-grid">
                    {PERSONAL_FIELDS.map((field) => (
                      <TextField
                        key={field.name}
                        field={field}
                        value={values[field.name]}
                        onChange={handleChange}
                      />
                    ))}
                  </div>

                  <div className="field field--upload">
                    <span className="field__label" id="resume-label">
                      Resume
                      <span className="field__required">*</span>
                    </span>
                    <label className="upload" aria-labelledby="resume-label">
                      <input
                        type="file"
                        name="resume"
                        className="upload__input"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        required
                      />
                      <span className="upload__title">
                        {resume ? resume.name : "Upload your resume"}
                      </span>
                      <span className="upload__hint">PDF, DOC, DOCX</span>
                    </label>
                  </div>

                  <p className="form-group-heading form-group-heading--spaced">
                    Additional information
                  </p>

                  {LONG_FIELDS.map((field) => (
                    <TextAreaField
                      key={field.name}
                      field={field}
                      value={values[field.name]}
                      onChange={handleChange}
                    />
                  ))}

                  <div className="notice">
                    <p className="notice__text">
                      By submitting this application, you acknowledge that your
                      information will be processed in accordance with{" "}
                      <a href="#" className="notice__link">
                        Zuntra's Privacy Policy
                      </a>
                      . This application is for consideration purposes only.
                    </p>
                  </div>

                  <button type="submit" className="button button--submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application \u2192"}
                  </button>

                  {submitStatus === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>Your application has been submitted successfully!</p>}
                  {submitStatus === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>There was an error submitting your application. Please try again later.</p>}
                </form>
              </section>
            </div>
          </div>
        </section>

        {/* -------------------------- Related jobs -------------------------- */}
        <section className="related-jobs" aria-labelledby="related-jobs-title">
          <div className="shell">
            <p id="related-jobs-title" className="eyebrow eyebrow--muted">
              More opportunities
            </p>
            <ul className="related-jobs__list">
              {RELATED_JOBS.map((job) => (
                <li key={job.title}>
                  <a href="#" className="related-job">
                    <span className="related-job__title">{job.title}</span>
                    <span className="related-job__meta">{job.department}</span>
                    <span className="related-job__meta">{job.location}</span>
                    <span className="related-job__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------- Footer CTA ---------------------------- */}
        <section className="footer-cta">
          <div className="shell footer-cta__inner">
            <div className="footer-cta__content">
              <p className="eyebrow eyebrow--green">Keep building</p>
              <h2 className="footer-cta__title">
                Explore more opportunities at Zuntra.
              </h2>
            </div>
            <Link to="/company/careers" className="footer-cta__link">
              View All Open Positions →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}