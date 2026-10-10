import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';
import './Events.css';

const PastEventDetails = () => {
  const { slug } = useParams();
  
  // Find event in past events, or fallback to upcoming/featured
  let event = eventsData.pastEvents.find(e => e.id === slug);
  if (!event) {
    if (eventsData.featuredEvent.id === slug) event = eventsData.featuredEvent;
    else event = eventsData.upcomingEvents.find(e => e.id === slug);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="events-page" style={{ padding: '8rem 2rem', textAlign: 'center', background: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Event Not Found</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>The event you are looking for does not exist or has been moved.</p>
        <Link to="/company/events/past" className="btn-dark">← BACK TO PAST EVENTS</Link>
      </div>
    );
  }

  // Fallback defaults if any field is missing
  const heroImage = event.heroImage || event.image;
  const pillars = event.pillars || [
    {
      title: "Research",
      description: "Participants learned user research techniques, understanding audience needs and identifying opportunities to improve digital experiences through informed design decisions."
    },
    {
      title: "Creation",
      description: "Hands-on activities introduced wireframing, prototyping, and interface design concepts that help transform ideas into functional user experiences."
    },
    {
      title: "Portfolio",
      description: "Students explored methods for presenting projects effectively, creating case studies, and building professional portfolios that demonstrate design capabilities."
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
    subheading: "Building Skills For Tech Careers:",
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

  // Other related past events
  const relatedEvents = eventsData.pastEvents.filter(e => e.id !== slug).slice(0, 3);

  return (
    <div className="events-page event-template-page" style={{ background: '#ffffff', color: '#000000' }}>
      
      {/* Top Breadcrumb Bar */}
      <div className="event-detail-topbar">
        <div className="event-detail-topbar-inner">
          <div className="event-breadcrumbs">
            <Link to="/company/events">EVENTS</Link>
            <span className="crumb-sep">›</span>
            <Link to="/company/events/past">PAST EVENTS</Link>
            <span className="crumb-sep">›</span>
            <span className="crumb-current">{event.shortTitle || event.title}</span>
          </div>
          <Link to="/company/events/past" className="event-back-link">
            ← ALL PAST EVENTS
          </Link>
        </div>
      </div>

      <div className="event-detail-container">
        
        {/* =========================================================================
            SECTION 1: HERO (Image 1 template)
            Left: Title, Description, Tagline, Explore pill button
            Right: Main featured photo
           ========================================================================= */}
        <section className="event-detail-hero">
          <div className="event-detail-hero-left">
            <span className="event-pill-tag">
              {event.category} • {event.year}
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
            <a href="#event-pillars" className="event-explore-pill-btn">
              Explore
            </a>
          </div>
          <div className="event-detail-hero-right">
            <div className="event-hero-img-frame">
              <img src={heroImage} alt={event.title} className="event-detail-hero-img" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PRACTICAL LEARNING & 3 PILLARS (Image 2 template)
            Left: Big bold heading
            Right: 3 stacked blocks with horizontal divider lines
           ========================================================================= */}
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

        {/* =========================================================================
            SECTION 3: BENTO GRID (Image 3 template)
            Top Row: Card 1 (Title box), Card 2 (Speaker photo), Card 3 (Panel photo)
            Bottom Row: Card 4 (Topics list box), Card 5 (Audience wide photo)
           ========================================================================= */}
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

        {/* =========================================================================
            SECTION 4: SKILLS DEVELOPED & SPEAKER SPOTLIGHT (Image 4 template)
            Left: Portrait speaker photo
            Right: Massive title, subtitle, bullet list
           ========================================================================= */}
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

        {/* =========================================================================
            SECTION 5: PROGRAM HIGHLIGHTS & CURVED GALLERY (Image 5 template)
            Top: "Program Highlights" + 8 Grid items (4x2)
            Bottom: 2 large curved cutout photos side-by-side
           ========================================================================= */}
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

      {/* More Past Events Section */}
      <section style={{ background: '#f9fafb', padding: '6rem 5%', borderTop: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#000', margin: 0 }}>
              MORE PAST EVENTS
            </h2>
            <Link to="/company/events/past" style={{ color: '#000', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '1px' }}>
              VIEW ARCHIVE →
            </Link>
          </div>
          
          <div className="events-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
            {relatedEvents.map(ev => (
              <Link 
                to={`/company/events/past/${ev.id}`} 
                key={ev.id} 
                className="event-card" 
                style={{ boxShadow: 'none', border: '1px solid #eaeaea', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={ev.image} alt={ev.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: ev.categoryId === 'design' ? '#2563eb' : '#8b5cf6', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block', letterSpacing: '1px' }}>
                    {ev.category} • {ev.year}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111' }}>{ev.shortTitle || ev.title}</h3>
                  <div style={{ color: '#000', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
                    <span>VIEW EVENT</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="registration-banner" style={{ background: '#0a0a0b', color: 'white' }}>
        <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem', display: 'block' }}>
          ZUNTRA ECOSYSTEM
        </span>
        <h2 style={{ color: 'white' }}>BUILD WHAT COMES NEXT.</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Join future hackathons, workshops, and innovation challenges shaping the next era of technology.
        </p>
        <Link to="/company/events" className="btn" style={{ background: 'white', color: 'black', padding: '1rem 2.5rem', fontWeight: 700, borderRadius: '4px', textDecoration: 'none' }}>
          EXPLORE UPCOMING EVENTS →
        </Link>
      </section>

    </div>
  );
};

export default PastEventDetails;
