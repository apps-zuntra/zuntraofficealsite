import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';
import './Events.css';

const EventDetails = () => {
  const { slug } = useParams();
  
  // Find event in upcoming, featured or past events
  let event = eventsData.upcomingEvents.find(e => e.id === slug);
  if (!event && eventsData.featuredEvent.id === slug) {
    event = eventsData.featuredEvent;
  }
  if (!event) {
    event = eventsData.pastEvents.find(e => e.id === slug);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="events-page" style={{ padding: '8rem 2rem', textAlign: 'center', background: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Event not found</h2>
        <Link to="/company/events" className="btn-dark">← BACK TO EVENTS</Link>
      </div>
    );
  }

  const heroImage = event.heroImage || event.image;
  const pillars = event.pillars || [
    {
      title: "Research & Discovery",
      description: "Understanding audience needs and identifying opportunities to improve digital experiences through informed design decisions."
    },
    {
      title: "Hands-on Creation",
      description: "Wireframing, prototyping, and interface design concepts that transform ideas into functional user experiences."
    },
    {
      title: "Portfolio & Deployment",
      description: "Presenting projects effectively, creating case studies, and building professional portfolios that demonstrate real capabilities."
    }
  ];

  const bentoGrid = event.bentoGrid || {
    title: event.shortTitle || event.title,
    imgSpeaker: heroImage,
    imgPanel: heroImage,
    topicsList: [
      "UX Design Training",
      "Real-World UX Practices",
      "Portfolio Building for Designers",
      "UX Case Study Development",
      "Design Thinking Framework"
    ],
    imgAudienceWide: heroImage
  };

  const speakerSpotlight = event.speakerSpotlight || {
    imgSpeakerVertical: heroImage,
    heading: "Skills Developed Through Design",
    subheading: "Building Skills For Modern Careers:",
    bulletPoints: [
      "Understanding user experience principles",
      "Practical interface design exposure",
      "Building professional design portfolios",
      "Learning industry design workflows",
      "Creative problem solving techniques"
    ]
  };

  const highlights = event.highlights || {
    title: "Program Highlights",
    items: [
      "Figma for UI/UX",
      "Product Design Workshop",
      "UX Career Guidance",
      "Recruiter Portfolio Expectations",
      "Hands-on UX Challenge",
      "Industry-Oriented UI/UX Training",
      "UX Workflow & User Research",
      "UX Usability & Testing"
    ],
    imgHighlight1: heroImage,
    imgHighlight2: heroImage
  };

  return (
    <div className="events-page event-template-page" style={{ background: '#ffffff', color: '#000000' }}>
      
      {/* Top Breadcrumb Bar */}
      <div className="event-detail-topbar">
        <div className="event-detail-topbar-inner">
          <div className="event-breadcrumbs">
            <Link to="/company/events">EVENTS</Link>
            <span className="crumb-sep">›</span>
            <span className="crumb-current">{event.shortTitle || event.title}</span>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {event.status === 'REGISTRATION OPEN' && (
              <Link to={`/company/events/${event.id}/register`} className="btn-dark" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>
                REGISTER NOW
              </Link>
            )}
            <Link to="/company/events" className="event-back-link">
              ← ALL EVENTS
            </Link>
          </div>
        </div>
      </div>

      <div className="event-detail-container">
        
        {/* SECTION 1: HERO */}
        <section className="event-detail-hero">
          <div className="event-detail-hero-left">
            <span className="event-pill-tag">
              {event.status || `${event.category} • ${event.year || '2026'}`}
            </span>
            <h1 className="event-detail-hero-title">
              {event.title}
            </h1>
            <p className="event-detail-hero-desc">
              {event.heroDescription || event.description}
            </p>
            <p className="event-detail-hero-tagline">
              {event.heroTagline || "Transform ideas into meaningful user experiences"}
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#event-pillars" className="event-explore-pill-btn">
                Explore
              </a>
              {event.status === 'REGISTRATION OPEN' && (
                <Link to={`/company/events/${event.id}/register`} className="btn-dark" style={{ borderRadius: '9999px', padding: '0.65rem 2rem' }}>
                  Register Now →
                </Link>
              )}
            </div>
          </div>
          <div className="event-detail-hero-right">
            <div className="event-hero-img-frame">
              <img src={heroImage} alt={event.title} className="event-detail-hero-img" />
            </div>
          </div>
        </section>

        {/* SECTION 2: PRACTICAL LEARNING & 3 PILLARS */}
        <section id="event-pillars" className="event-detail-pillars-section">
          <div className="event-pillars-left">
            <h2 className="event-pillars-main-title">
              {event.pillarsHeading || "Practical Design Learning"}
            </h2>
          </div>
          <div className="event-pillars-right">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="event-pillar-block">
                <h3 className="event-pillar-title">{pillar.title}</h3>
                <p className="event-pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: BENTO GRID */}
        <section className="event-detail-bento-section">
          <div className="event-bento-top">
            <div className="event-bento-title-card">
              <h3>{bentoGrid.title}</h3>
            </div>
            <div className="event-bento-img-card">
              <img src={bentoGrid.imgSpeaker} alt="Speaker Session" />
            </div>
            <div className="event-bento-img-card">
              <img src={bentoGrid.imgPanel} alt="Panel & Mentors" />
            </div>
          </div>
          <div className="event-bento-bottom">
            <div className="event-bento-topics-card">
              {bentoGrid.topicsList?.map((topic, i) => (
                <div key={i} className="event-bento-topic-item">{topic}</div>
              ))}
            </div>
            <div className="event-bento-wide-img-card">
              <img src={bentoGrid.imgAudienceWide} alt="Audience & Workshop Hall" />
            </div>
          </div>
        </section>

        {/* Institution Collaboration Spotlight */}
        {event.institutionInfo && (
          <section className="event-detail-institution-section">
            <div className="institution-info-card">
              <span className="institution-badge">ACADEMIC & INDUSTRY PARTNERSHIP</span>
              <p className="institution-text">{event.institutionInfo}</p>
            </div>
          </section>
        )}

        {/* SECTION 4: SKILLS DEVELOPED & SPEAKER SPOTLIGHT */}
        <section className="event-detail-skills-section">
          <div className="event-skills-left">
            <div className="event-skills-img-wrapper">
              <img src={speakerSpotlight.imgSpeakerVertical} alt="Speaker Spotlight" className="event-skills-speaker-img" />
            </div>
          </div>
          <div className="event-skills-right">
            <h2 className="event-skills-main-title">
              {speakerSpotlight.heading}
            </h2>
            <p className="event-skills-sub">
              {speakerSpotlight.subheading}
            </p>
            <ul className="event-skills-bullet-list">
              {speakerSpotlight.bulletPoints?.map((bp, i) => (
                <li key={i}>{bp}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: PROGRAM HIGHLIGHTS & CURVED GALLERY */}
        <section className="event-detail-highlights-section">
          <h2 className="event-highlights-heading">
            {highlights.title || "Program Highlights"}
          </h2>
          
          <div className="event-highlights-grid">
            {highlights.items?.map((item, i) => (
              <div key={i} className="event-highlight-tag">
                {item}
              </div>
            ))}
          </div>

          <div className="event-highlights-photos">
            <div className="event-curved-img-wrapper left-curve">
              <img src={highlights.imgHighlight1} alt="Event Highlight Session" />
            </div>
            <div className="event-curved-img-wrapper right-curve">
              <img src={highlights.imgHighlight2} alt="Speaker Highlight" />
            </div>
          </div>
        </section>

        {/* Previous Collaborations Strip */}
        <section className="event-detail-collabs-section">
          <div className="collabs-header">
            <span className="collabs-subtitle">PARTNERSHIP NETWORK</span>
            <h3 className="collabs-title">Institutional Collaborations</h3>
          </div>
          <div className="collabs-grid">
            <div className="collab-item">
              <span className="collab-icon">🏛️</span>
              <h4>Vellore Institute of Technology</h4>
              <p>Chennai Campus</p>
            </div>
            <div className="collab-item">
              <span className="collab-icon">🎓</span>
              <h4>St Joseph’s Institute of Technology</h4>
              <p>Chennai</p>
            </div>
            <div className="collab-item">
              <span className="collab-icon">🏫</span>
              <h4>SRM University</h4>
              <p>Vadapalani City Campus</p>
            </div>
            <div className="collab-item">
              <span className="collab-icon">🏢</span>
              <h4>KCG College of Technology</h4>
              <p>Chennai</p>
            </div>
          </div>
        </section>

      </div>

      {/* Registration Banner */}
      <section className="registration-banner" style={{ background: '#0a0a0b', color: 'white' }}>
        <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '1rem', display: 'block' }}>
          ZUNTRA EVENTS
        </span>
        <h2 style={{ color: 'white' }}>STAY CONNECTED.</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Be the first to hear about upcoming hackathons, AI workshops, and design summits.
        </p>
        <Link to="/company/events/past" className="btn" style={{ background: 'white', color: 'black', padding: '1rem 2.5rem', fontWeight: 700, borderRadius: '4px', textDecoration: 'none' }}>
          VIEW PAST EVENTS ARCHIVE →
        </Link>
      </section>

    </div>
  );
};

export default EventDetails;
