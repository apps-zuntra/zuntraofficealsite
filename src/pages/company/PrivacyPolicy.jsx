import React, { useState, useEffect } from 'react';
import './PrivacyPolicy.css';

const sections = [
    { id: 'sec-01', num: '01', title: 'Introduction' },
    { id: 'sec-02', num: '02', title: 'Information We Collect' },
    { id: 'sec-03', num: '03', title: 'How We Use Information' },
    { id: 'sec-04', num: '04', title: 'How We Share Information' },
    { id: 'sec-05', num: '05', title: 'Cookies and Similar Technologies' },
    { id: 'sec-06', num: '06', title: 'Data Retention' },
    { id: 'sec-07', num: '07', title: 'Data Security' },
    { id: 'sec-08', num: '08', title: 'Your Privacy Rights' },
    { id: 'sec-09', num: '09', title: 'Third-Party Services and Links' },
    { id: 'sec-10', num: '10', title: "Children's Privacy" },
    { id: 'sec-11', num: '11', title: 'International Data Transfers' },
    { id: 'sec-12', num: '12', title: 'Changes to This Privacy Policy' },
    { id: 'sec-13', num: '13', title: 'Contact Us' },
];

const PrivacyPolicy = () => {
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
        <div className="privacy-policy-page">
            <div className="container privacy-container">
                {/* Top Header Section */}
                <header className="privacy-header">
                    <h1 className="privacy-title">Privacy Policy</h1>
                    <div className="privacy-meta">
                        <span>Last updated: <span className="meta-bracket">[DATE — TO BE CONFIRMED]</span></span>
                        <span className="meta-separator"></span>
                        <span>Effective date: <span className="meta-bracket">[DATE — TO BE CONFIRMED]</span></span>
                    </div>
                    <div className="privacy-header-line"></div>
                </header>

                {/* Main Body Grid */}
                <div className="privacy-body">
                    {/* Left Column: Sticky Sidebar */}
                    <aside className="privacy-sidebar">
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

                    {/* Right Column: Policy Content */}
                    <main className="privacy-content">
                        {/* Section 01 */}
                        <section id="sec-01" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">01</span>
                                <h2>INTRODUCTION</h2>
                            </div>
                            <p>
                                By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy. If you have questions about our privacy practices, please contact us at <span className="legal-badge">[PRIVACY CONTACT EMAIL]</span>
                            </p>
                            <p>
                                By accessing or using our website, you acknowledge that you have read and understood this Privacy Policy. If you have questions about our privacy practices, please contact us at <span className="legal-badge">[PRIVACY CONTACT EMAIL]</span>
                            </p>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 02 */}
                        <section id="sec-02" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">02</span>
                                <h2>INFORMATION WE COLLECT</h2>
                            </div>

                            <div className="sub-block">
                                <h3>Information You Provide</h3>
                                <p>
                                    We may collect information you provide directly, such as when you submit a form, register for an event, apply for a position, or contact us. This may include:
                                </p>
                                <ul className="policy-list">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company or organisation name</li>
                                    <li>Job title or role</li>
                                    <li>Content of messages or applications you submit</li>
                                    <li>Event registration details</li>
                                </ul>
                            </div>

                            <div className="sub-block">
                                <h3>Information Collected Automatically</h3>
                                <p>
                                    When you visit our website, certain information may be collected automatically, such as your IP address, browser type, device information, pages visited, and referring URLs. This is subject to confirmation by <span className="legal-badge">[LEGAL ENTITY NAME]</span>’s technical and legal teams.
                                </p>
                            </div>

                            <div className="sub-block">
                                <h3>Information From Third Parties</h3>
                                <div className="badge-block">
                                    <span className="legal-badge">[TO BE CONFIRMED — omit if ZUNTRA does not receive information from third-party sources]</span>
                                </div>
                            </div>

                            <div className="section-divider"></div>
                        </section>

                        {/* Section 03 */}
                        <section id="sec-03" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">03</span>
                                <h2>HOW WE USE INFORMATION</h2>
                            </div>
                            <p>We may use collected information to:</p>
                            <ul className="policy-list">
                                <li>Respond to enquiries and provide requested information</li>
                                <li>Process event registrations</li>
                                <li>Manage recruitment and application processes</li>
                                <li>Operate and maintain our website</li>
                                <li>Communicate with you about our services and activities</li>
                                <li>Analyse and improve our website and services</li>
                                <li>Comply with applicable legal obligations</li>
                            </ul>
                            <div className="badge-block" style={{ marginTop: '1rem' }}>
                                <span className="legal-badge">[FURTHER PURPOSES TO BE CONFIRMED AND APPROVED BY LEGAL TEAM]</span>
                            </div>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 04 */}
                        <section id="sec-04" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">04</span>
                                <h2>HOW WE SHARE INFORMATION</h2>
                            </div>

                            <div className="sub-block">
                                <h3>Service Providers</h3>
                                <p>
                                    We may share information with service providers who assist us in operating our website and delivering services. <span className="legal-badge">[SPECIFIC SERVICE PROVIDERS TO BE CONFIRMED]</span>
                                </p>
                            </div>

                            <div className="sub-block">
                                <h3>Legal Requirements</h3>
                                <p>
                                    We may disclose information where required to do so by law or in response to valid legal process.
                                </p>
                            </div>

                            <div className="sub-block">
                                <h3>Business Transfers</h3>
                                <div className="badge-block">
                                    <span className="legal-badge">[TO BE CONFIRMED — include only if applicable to ZUNTRA's corporate structure]</span>
                                </div>
                                <p style={{ marginTop: '1rem' }}>
                                    We do not sell personal information. <span className="legal-badge">[THIS STATEMENT MUST BE LEGALLY VERIFIED BEFORE PUBLICATION]</span>
                                </p>
                            </div>

                            <div className="section-divider"></div>
                        </section>

                        {/* Section 05 */}
                        <section id="sec-05" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">05</span>
                                <h2>COOKIES AND SIMILAR TECHNOLOGIES</h2>
                            </div>
                            <p>
                                Our website may use cookies and similar technologies. The types of cookies used and the purposes they serve are subject to confirm <span className="legal-badge">[COOKIE PRACTICES TO BE CONFIRMED — list actual cookie types used]</span>
                            </p>
                            <p>
                                You may be able to control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
                            </p>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 06 */}
                        <section id="sec-06" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">06</span>
                                <h2>DATA RETENTION</h2>
                            </div>
                            <p>
                                We retain information for as long as necessary to fulfil the purposes described in this Privacy Policy, or as otherwise required by applicable law.
                            </p>
                            <div className="badge-block" style={{ marginTop: '1rem' }}>
                                <span className="legal-badge">[SPECIFIC RETENTION PERIODS TO BE CONFIRMED BY LEGAL TEAM — do not publish without review]</span>
                            </div>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 07 */}
                        <section id="sec-07" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">07</span>
                                <h2>DATA SECURITY</h2>
                            </div>
                            <p>
                                We implement appropriate technical and organisational measures to protect information against unauthorised access, loss, or misuse.
                            </p>
                            <div className="badge-block" style={{ margin: '1rem 0' }}>
                                <span className="legal-badge">[SPECIFIC SECURITY PRACTICES TO BE CONFIRMED BEFORE PUBLICATION — do not include certifications or claims that are not verified]</span>
                            </div>
                            <p>
                                No method of transmission or storage is completely secure. We cannot guarantee the absolute security of information transmitted to or through our website.
                            </p>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 08 */}
                        <section id="sec-08" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">08</span>
                                <h2>YOUR PRIVACY RIGHTS</h2>
                            </div>
                            <p>
                                Depending on your location and applicable law, you may have certain rights relating to your personal information. These may include rights of access, correction, deletion, restriction, objection, and data portability.
                            </p>
                            <div className="badge-block" style={{ margin: '1rem 0' }}>
                                <span className="legal-badge">[APPLICABLE RIGHTS AND JURISDICTIONS TO BE CONFIRMED BY LEGAL TEAM BEFORE PUBLICATION]</span>
                            </div>
                            <p>
                                To exercise any applicable rights, please contact us at <span className="legal-badge">[PRIVACY CONTACT EMAIL]</span>
                            </p>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 09 */}
                        <section id="sec-09" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">09</span>
                                <h2>THIRD-PARTY SERVICES AND LINKS</h2>
                            </div>
                            <p>
                                Our website may contain links to third-party websites and services. These external sites have their own privacy policies, and we are not responsible for their practices or content. We encourage you to review their privacy policies before providing any information to them.
                            </p>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 10 */}
                        <section id="sec-10" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">10</span>
                                <h2>CHILDREN'S PRIVACY</h2>
                            </div>
                            <div className="badge-block">
                                <span className="legal-badge">[CHILDREN'S PRIVACY POLICY TO BE DETERMINED — age threshold and applicable requirements must be confirmed by legal counsel for each jurisdiction in which ZUNTRA operates]</span>
                            </div>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 11 */}
                        <section id="sec-11" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">11</span>
                                <h2>INTERNATIONAL DATA TRANSFERS</h2>
                            </div>
                            <div className="badge-block">
                                <span className="legal-badge">[INTERNATIONAL TRANSFER PRACTICES TO BE CONFIRMED — include only if applicable; specify hosting locations and applicable safeguards only when verified]</span>
                            </div>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 12 */}
                        <section id="sec-12" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">12</span>
                                <h2>CHANGES TO THIS PRIVACY POLICY</h2>
                            </div>
                            <p>
                                We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
                            </p>
                            <div className="badge-block" style={{ marginTop: '1rem' }}>
                                <span className="legal-badge">[METHOD OF NOTIFYING USERS OF CHANGES TO BE CONFIRMED BY LEGAL TEAM]</span>
                            </div>
                            <div className="section-divider"></div>
                        </section>

                        {/* Section 13 */}
                        <section id="sec-13" className="policy-section">
                            <div className="section-heading">
                                <span className="sec-big-num">13</span>
                                <h2>CONTACT US</h2>
                            </div>
                            <p>
                                For privacy-related questions, requests, or concerns, please contact:
                            </p>
                            <div className="contact-badges-card">
                                <div className="badge-row"><span className="legal-badge">[LEGAL ENTITY NAME]</span></div>
                                <div className="badge-row"><span className="legal-badge">[PRIVACY CONTACT EMAIL]</span></div>
                                <div className="badge-row"><span className="legal-badge">[REGISTERED BUSINESS ADDRESS]</span></div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
