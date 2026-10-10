import React, { useState, useEffect } from 'react';
import './SustainabilityDEAI.css';

const sections = [
  { id: 'sec-01', num: '01', title: 'Introduction & Vision' },
  { id: 'sec-02', num: '02', title: 'Environmental Sustainability' },
  { id: 'sec-03', num: '03', title: 'Green Computing & Cloud' },
  { id: 'sec-04', num: '04', title: 'Diversity, Equity & Inclusion (DEI)' },
  { id: 'sec-05', num: '05', title: 'Accessibility & Universal Design' },
  { id: 'sec-06', num: '06', title: 'Ethical & Responsible AI' },
  { id: 'sec-07', num: '07', title: 'Workplace Wellbeing & Fair Labor' },
  { id: 'sec-08', num: '08', title: 'Supply Chain Responsibility' },
  { id: 'sec-09', num: '09', title: 'Community Impact & Social Good' },
  { id: 'sec-10', num: '10', title: 'Governance & Compliance' },
  { id: 'sec-11', num: '11', title: 'Targets, Metrics & Reporting' },
  { id: 'sec-12', num: '12', title: 'Contact Us & Accountability' },
];

const SustainabilityDEAI = () => {
  const [activeId, setActiveId] = useState('sec-01');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sustainability-page">
      <div className="container sustainability-container">
        {/* Top Header Section */}
        <header className="sustainability-header">
          <h1 className="sustainability-title">Sustainability & DEAI</h1>
          <div className="sustainability-meta">
            <span>Last updated: <span className="meta-bracket">[DATE — TO BE CONFIRMED]</span></span>
            <span className="meta-separator"></span>
            <span>Effective date: <span className="meta-bracket">[DATE — TO BE CONFIRMED]</span></span>
          </div>
          <div className="sustainability-header-line"></div>
        </header>

        {/* Main Body Grid */}
        <div className="sustainability-body">
          {/* Left Column: Sticky Sidebar */}
          <aside className="sustainability-sidebar">
            <span className="sidebar-label">ON THIS PAGE</span>
            <nav className="sidebar-nav">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  className={`sidebar-link ${activeId === sec.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(sec.id)}
                >
                  <span className="link-num">{sec.num}</span>
                  <span className="link-text">{sec.title}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Column: Content */}
          <main className="sustainability-content">
            {/* Section 01 */}
            <section id="sec-01" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">01</span>
                <h2>INTRODUCTION & VISION</h2>
              </div>
              <p>
                At ZUNTRA, our commitment to pioneering technological innovation is inseparable from our responsibility to the planet and society. This Sustainability & DEAI Policy articulates our strategic framework for Environmental Sustainability, Diversity, Equity, Accessibility, and Inclusion (DEAI).
              </p>
              <p>
                We believe that sustainable growth and inclusive design drive resilience, foster groundbreaking innovation, and create equitable outcomes for our clients, partners, employees, and communities worldwide. For inquiries related to our ESG initiatives, please contact us at <span className="legal-badge">[ESG CONTACT EMAIL]</span>
              </p>
              <div className="section-divider"></div>
            </section>

            {/* Section 02 */}
            <section id="sec-02" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">02</span>
                <h2>ENVIRONMENTAL SUSTAINABILITY</h2>
              </div>

              <div className="sub-block">
                <h3>Climate Action & Carbon Footprint Reduction</h3>
                <p>
                  We are actively monitoring, mitigating, and reducing our direct and indirect carbon emissions across our facilities, operations, and business travel. Our environmental priorities include:
                </p>
                <ul className="policy-list">
                  <li>Transitioning office facilities and research hubs toward renewable electricity</li>
                  <li>Minimizing energy waste through intelligent building automation and energy-efficient hardware</li>
                  <li>Implementing comprehensive e-waste reduction, hardware refurbishment, and zero-landfill recycling policies</li>
                  <li>Promoting hybrid and remote working models to decrease commute-related emissions</li>
                  <li>Encouraging low-emission travel policies for domestic and international engagements</li>
                </ul>
              </div>

              <div className="sub-block">
                <h3>Net Zero Targets</h3>
                <div className="badge-block">
                  <span className="legal-badge">[NET ZERO TARGET TIMELINE — TO BE CONFIRMED BY ESG COMMITTEE]</span>
                </div>
              </div>

              <div className="section-divider"></div>
            </section>

            {/* Section 03 */}
            <section id="sec-03" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">03</span>
                <h2>GREEN COMPUTING & CLOUD</h2>
              </div>
              <p>
                As an engineering and AI-driven enterprise, our digital infrastructure represents our most significant operational footprint. We adhere to green computing principles:
              </p>
              <ul className="policy-list">
                <li>Prioritizing cloud service providers powered by 100% renewable energy and carbon-neutral data centers</li>
                <li>Architecting computational workloads and AI model inferences for optimal algorithmic efficiency and minimal energy draw</li>
                <li>Auditing server utilization and automating dynamic scale-down protocols to eliminate idle compute overhead</li>
                <li>Continuous optimization of client software builds to minimize client-side battery consumption and bandwidth usage</li>
              </ul>
              <div className="badge-block" style={{ marginTop: '1rem' }}>
                <span className="legal-badge">[GREEN COMPUTING ARCHITECTURE GUIDELINES — VERSION 2026]</span>
              </div>
              <div className="section-divider"></div>
            </section>

            {/* Section 04 */}
            <section id="sec-04" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">04</span>
                <h2>DIVERSITY, EQUITY & INCLUSION (DEI)</h2>
              </div>

              <div className="sub-block">
                <h3>Inclusive Culture & Workforce Representation</h3>
                <p>
                  We foster a culture where every voice is heard, valued, and empowered to succeed regardless of gender, race, ethnicity, age, sexual orientation, disability, neurodiversity, or background.
                </p>
              </div>

              <div className="sub-block">
                <h3>Equal Opportunity & Equitable Career Progression</h3>
                <p>
                  ZUNTRA ensures equitable compensation, unbiased recruitment practices, and clear pathways to leadership. We enact:
                </p>
                <ul className="policy-list">
                  <li>Standardized, structured interview practices designed to eliminate unconscious bias</li>
                  <li>Regular pay-equity audits to identify and rectify compensation disparities</li>
                  <li>Dedicated mentorship, sponsorship, and leadership development programs for underrepresented talent</li>
                  <li>Flexible working policies supporting parents, caregivers, and diverse personal lifestyles</li>
                </ul>
              </div>

              <div className="sub-block">
                <h3>DEI Metrics & Benchmarks</h3>
                <div className="badge-block">
                  <span className="legal-badge">[DEI WORKFORCE REPRESENTATION BENCHMARKS — SUBJECT TO VERIFICATION]</span>
                </div>
              </div>

              <div className="section-divider"></div>
            </section>

            {/* Section 05 */}
            <section id="sec-05" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">05</span>
                <h2>ACCESSIBILITY & UNIVERSAL DESIGN</h2>
              </div>
              <p>
                We believe digital technology should be universally usable by everyone. Our products, platforms, and public interfaces are developed adhering to digital accessibility standards.
              </p>
              <ul className="policy-list">
                <li>Alignment with Web Content Accessibility Guidelines (WCAG) 2.1 AA / 2.2 standards across digital products</li>
                <li>Support for screen readers, keyboard-only navigation, and high-contrast display modes</li>
                <li>Inclusive typography, responsive scaling, and assistive technology compatibility testing</li>
                <li>Ongoing automated and manual accessibility audits integrated into our product development life cycle</li>
              </ul>
              <div className="badge-block" style={{ marginTop: '1rem' }}>
                <span className="legal-badge">[ACCESSIBILITY CONFORMANCE STATEMENT — TO BE CONFIRMED]</span>
              </div>
              <div className="section-divider"></div>
            </section>

            {/* Section 06 */}
            <section id="sec-06" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">06</span>
                <h2>ETHICAL & RESPONSIBLE AI</h2>
              </div>
              <p>
                Artificial Intelligence is fundamental to ZUNTRA's solutions. We are dedicated to deploying AI models that adhere to the highest standards of safety, ethics, and fairness.
              </p>
              <div className="sub-block">
                <h3>Algorithmic Fairness & Bias Mitigation</h3>
                <p>
                  We evaluate training data pipelines to detect and mitigate historical biases, ensuring that machine learning systems do not perpetuate systemic inequalities.
                </p>
              </div>
              <div className="sub-block">
                <h3>Explainability & Human-in-the-Loop</h3>
                <p>
                  Critical business and automated decisions maintain transparent audit trails and human oversight mechanisms to guarantee accountability.
                </p>
              </div>
              <div className="badge-block">
                <span className="legal-badge">[RESPONSIBLE AI CHARTER & AUDIT PROCEDURES — LEGAL VERIFICATION PENDING]</span>
              </div>
              <div className="section-divider"></div>
            </section>

            {/* Section 07 */}
            <section id="sec-07" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">07</span>
                <h2>WORKPLACE WELLBEING & FAIR LABOR</h2>
              </div>
              <p>
                We maintain an environment that promotes mental and physical health, psychological safety, and professional growth for all team members.
              </p>
              <ul className="policy-list">
                <li>Zero-tolerance policy toward discrimination, harassment, retaliation, or bullying</li>
                <li>Comprehensive healthcare benefits, mental health resources, and wellness support programs</li>
                <li>Continuous professional development stipends and skill-enhancement opportunities</li>
                <li>Confidential whistleblowing and grievance redressal channels for all staff members</li>
              </ul>
              <div className="section-divider"></div>
            </section>

            {/* Section 08 */}
            <section id="sec-08" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">08</span>
                <h2>SUPPLY CHAIN RESPONSIBILITY</h2>
              </div>
              <p>
                We expect our vendors, contractors, and ecosystem partners to demonstrate shared dedication to ethical practices, human rights, and environmental standards.
              </p>
              <ul className="policy-list">
                <li>Prioritizing partnerships with diverse, minority-owned, and environmentally certified suppliers</li>
                <li>Mandatory adherence to fair wage laws, safe working conditions, and anti-forced-labor standards</li>
                <li>Periodic evaluation and review of vendor sustainability disclosures and compliance</li>
              </ul>
              <div className="badge-block" style={{ marginTop: '1rem' }}>
                <span className="legal-badge">[SUPPLIER CODE OF CONDUCT & DIVERSITY THRESHOLDS — TO BE CONFIRMED]</span>
              </div>
              <div className="section-divider"></div>
            </section>

            {/* Section 09 */}
            <section id="sec-09" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">09</span>
                <h2>COMMUNITY IMPACT & SOCIAL GOOD</h2>
              </div>
              <p>
                ZUNTRA actively gives back to the technological and local ecosystems in which we operate. We empower aspiring engineers, researchers, and early-stage entrepreneurs through our innovation ecosystem.
              </p>
              <ul className="policy-list">
                <li>Sponsorship of STEM educational programs, workshops, and hackathons for underrepresented youth</li>
                <li>Incubation and mentorship for sustainable and socially conscious tech startups</li>
                <li>Employee volunteer time off (VTO) programs supporting charitable and civic initiatives</li>
              </ul>
              <div className="section-divider"></div>
            </section>

            {/* Section 10 */}
            <section id="sec-10" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">10</span>
                <h2>GOVERNANCE & COMPLIANCE</h2>
              </div>
              <p>
                Accountability for our Sustainability & DEAI commitments rests with executive leadership and is overseen by our steering committees.
              </p>
              <div className="badge-block">
                <span className="legal-badge">[GOVERNANCE COMMITTEE CHARTER & COMPLIANCE MANDATES — TO BE CONFIRMED]</span>
              </div>
              <p style={{ marginTop: '1rem' }}>
                We comply with all applicable local, national, and international laws and environmental standards governing our business operations and facilities.
              </p>
              <div className="section-divider"></div>
            </section>

            {/* Section 11 */}
            <section id="sec-11" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">11</span>
                <h2>TARGETS, METRICS & REPORTING</h2>
              </div>
              <p>
                We believe transparency is vital to meaningful progress. We establish measurable, time-bound objectives across sustainability, accessibility, and diversity.
              </p>
              <p>
                ZUNTRA conducts periodic reviews and aims to release comprehensive annual sustainability and impact reporting highlighting key achievements, areas for progress, and roadmap updates.
              </p>
              <div className="badge-block" style={{ marginTop: '1rem' }}>
                <span className="legal-badge">[ANNUAL ESG & DEAI IMPACT REPORTING SCHEDULE — TO BE CONFIRMED]</span>
              </div>
              <div className="section-divider"></div>
            </section>

            {/* Section 12 */}
            <section id="sec-12" className="policy-section">
              <div className="section-heading">
                <span className="sec-big-num">12</span>
                <h2>CONTACT US & ACCOUNTABILITY</h2>
              </div>
              <p>
                We welcome inquiries, feedback, and collaboration opportunities regarding our Sustainability & DEAI programs. Please reach out to our dedicated committee:
              </p>
              <div className="contact-badges-card">
                <div className="badge-row"><span className="legal-badge">[LEGAL ENTITY NAME]</span></div>
                <div className="badge-row"><span className="legal-badge">[ESG & DEAI COMMITTEE CONTACT EMAIL]</span></div>
                <div className="badge-row"><span className="legal-badge">[REGISTERED BUSINESS ADDRESS]</span></div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityDEAI;
