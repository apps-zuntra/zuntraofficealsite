import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';
import eventHomeHeaderBg from '../../assets/eventsimages/eventhome/headersection.avif';
import eventhome5 from '../../assets/eventsimages/eventhome/eventhome5.avif';
import eventhome6 from '../../assets/eventsimages/eventhome/eventhome6.avif';
import eventhome7 from '../../assets/eventsimages/eventhome/eventhome7.avif';
import eventhome8 from '../../assets/eventsimages/eventhome/eventhome8.avif';
import './Events.css';

const Events = () => {
  const { hero, featuredEvent, upcomingEvents, categories, pastEvents } = eventsData;
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeCatTab, setActiveCatTab] = useState('TOPIC');

  const getPillClass = (category) => {
    switch (category.toLowerCase()) {
      case 'ai':
      case 'ai & intelligence':
        return 'ai';
      case 'design': 
        return 'design';
      case 'product': 
        return 'product';
      case 'community': 
        return 'community';
      case 'automation': 
        return 'automation';
      case 'robotics': 
        return 'robotics';
      default: 
        return '';
    }
  };

  const filteredUpcoming = upcomingEvents.filter(ev => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI') return ev.category.toUpperCase().includes('AI');
    if (activeFilter === 'DESIGN') return ev.category.toUpperCase().includes('DESIGN');
    if (activeFilter === 'PRODUCT') return ev.category.toUpperCase().includes('PRODUCT');
    if (activeFilter === 'AUTOMATION') return ev.category.toUpperCase().includes('AUTOMATION');
    if (activeFilter === 'WORKSHOPS') return ev.title.toUpperCase().includes('WORKSHOP');
    return ev.category.toUpperCase().includes(activeFilter);
  });

  return (
    <div className="events-page">
      {/* Sub Nav */}
      <nav className="events-subnav">
        <a href="#featured" className="active">FEATURED</a>
        <a href="#upcoming">UPCOMING</a>
        <a href="#categories">CATEGORIES</a>
        <Link to="/company/events/past" style={{ marginLeft: 'auto', color: '#8b5cf6' }}>PAST ARCHIVE →</Link>
      </nav>

      {/* Hero Section */}
      <section className="events-hero" style={{ backgroundImage: `url(${eventHomeHeaderBg})` }}>
        <div className="events-hero-content">
          <span className="hero-label">ZUNTRA EVENTS</span>
          <h1>{hero.heading}</h1>
          <p>Join ZUNTRA events, conversations and experiences exploring technology, AI, design, products, innovation and the future of building.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search events by topic, location, or keyword" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <a href="#upcoming" className="btn-explore">EXPLORE ALL EVENTS</a>
        </div>
      </section>

      {/* Featured Section */}
      <section id="featured" className="section-wrapper">
        <div className="section-center">
          <span className="section-label">FEATURED EVENTS</span>
          <h2 className="section-title">WHAT'S HAPPENING AT ZUNTRA</h2>
          <p className="section-subtitle">Discover conversations, workshops, showcases and experiences built around the ideas shaping what comes next.</p>
        </div>
        
        <div className="featured-card">
          <div className="featured-content">
            <span className="category">{featuredEvent.type || featuredEvent.category}</span>
            <h2>{featuredEvent.title}</h2>
            <p>{featuredEvent.longDescription || featuredEvent.description}</p>
            <div className="featured-meta">
              {featuredEvent.date}<br/>
              {featuredEvent.time}<br/>
              {featuredEvent.location}
            </div>
            <Link to={`/company/events/${featuredEvent.id}`} className="btn-dark">
              VIEW DETAILS & REGISTER
            </Link>
          </div>
          <div className="featured-image-wrapper">
            <img src={featuredEvent.heroImage || featuredEvent.image} alt={featuredEvent.title} />
            <span className="pill">FEATURED</span>
          </div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section id="upcoming" className="section-wrapper">
        <div className="section-center">
          <span className="section-label">UPCOMING EVENTS</span>
          <h2 className="section-title">JOIN WHAT'S NEXT.</h2>
          <p className="section-subtitle">Find an upcoming ZUNTRA event that matches your interests.</p>
        </div>
        
        <div className="filter-pills">
          {['ALL', 'AI', 'DESIGN', 'PRODUCT', 'AUTOMATION', 'WORKSHOPS'].map(filter => (
            <span 
              key={filter} 
              className={`filter-pill ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </span>
          ))}
        </div>
        
        <div className="events-grid">
          {filteredUpcoming.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', background: '#fff', borderRadius: '12px', border: '1px solid #eaeaea' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}>
                No events found for {activeFilter}
              </h3>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                There are currently no upcoming events scheduled for this category.
              </p>
              <Link to="/company/events/past" className="btn-dark">
                EXPLORE PAST EVENTS ARCHIVE
              </Link>
            </div>
          ) : (
            filteredUpcoming.map(event => (
              <Link to={`/company/events/${event.id}`} key={event.id} className="event-card">
                <div className="card-img-wrapper">
                  <img src={event.image} alt={event.title} />
                  <span className={`pill-top-left ${event.status === 'REGISTRATION OPEN' ? 'purple' : ''}`}>
                    {event.status}
                  </span>
                </div>
                <div className="card-content">
                  <span className={`card-cat ${getPillClass(event.category)}`}>{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="card-meta">
                    {event.date}<br/>
                    {event.time}<br/>
                    {event.location}
                  </div>
                  <div className="card-footer" style={{ color: getPillClass(event.category) === 'ai' ? '#db2777' : getPillClass(event.category) === 'design' ? '#2563eb' : getPillClass(event.category) === 'product' ? '#10b981' : '#000' }}>
                    <span>REGISTRATION & DETAILS</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="section-wrapper">
        <div className="section-center">
          <span className="section-label">EVENTS BY CATEGORY</span>
          <h2 className="section-title">FIND AN EVENT THAT SPEAKS TO YOU.</h2>
          <p className="section-subtitle">Explore events based on the ideas, technologies and communities you want to explore.</p>
        </div>
        
        <div className="cat-tabs">
          <span className={`cat-tab ${activeCatTab === 'TOPIC' ? 'active' : ''}`} onClick={() => setActiveCatTab('TOPIC')}>TOPIC</span>
          <span className={`cat-tab ${activeCatTab === 'AUDIENCE' ? 'active' : ''}`} onClick={() => setActiveCatTab('AUDIENCE')}>AUDIENCE</span>
          <span className={`cat-tab ${activeCatTab === 'FORMAT' ? 'active' : ''}`} onClick={() => setActiveCatTab('FORMAT')}>FORMAT</span>
        </div>

        <div className="events-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))' }}>
          {categories.map(cat => (
            <Link to={`/company/events/past?category=${cat.id}`} key={cat.id} className="cat-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={cat.image} alt={cat.title} />
              <div className="cat-content">
                <h3>{cat.title}</h3>
                <p>{cat.description}</p>
                <div className="cat-footer">
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>EXPLORE EVENTS</span>
                  <span className="btn-arrow">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Purple Banner Section */}
      <section className="purple-banner">
        <h2>FIND SOMETHING<br/>WORTH SHOWING<br/>UP FOR.</h2>
        <p>Meet people, exchange ideas, learn from others and get<br/>closer to the work shaping what's next.</p>
        <Link to="/company/events/past" className="btn-black-center">EXPLORE EVENTS ARCHIVE</Link>
      </section>

      {/* Collage Section */}
      <section className="section-wrapper collage-section">
        <div className="collage-header">
          <span className="section-label">COMMUNITY</span>
          <h2 className="section-title">MORE THAN AN EVENT.</h2>
          <p style={{ color: '#555' }}>The best events continue long after the stage lights go down.</p>
        </div>
        
        <div className="collage-grid">
          <img src={eventhome5} alt="Collage 1" className="collage-item item-1" />
          <img src={eventhome6} alt="Collage 2" className="collage-item item-2" />
          <img src={eventhome7} alt="Collage 3" className="collage-item item-3" />
          <img src={eventhome8} alt="Collage 4" className="collage-item item-4" />
          <div className="collage-item item-5">
            <span>ZUNTRA COMMUNITY</span>
            <h3>People.<br/>Ideas.<br/>Technology.</h3>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="events-ecosystem-section">
        <div className="ecosystem-content">
          <h2>EVENTS ARE WHERE THE ECOSYSTEM MEETS.</h2>
          <div className="ecosystem-divider"></div>
          <div className="ecosystem-grid">
            <Link to="/company/zuntra-labs" className="eco-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>LABS</h3>
              <p>Explore experiments.</p>
              <span className="btn-arrow-thin">→</span>
            </Link>
            <Link to="/company/incubation" className="eco-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>INCUBATION</h3>
              <p>Build ideas into ventures.</p>
              <span className="btn-arrow-thin">→</span>
            </Link>
            <Link to="/products/huzzler" className="eco-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>PRODUCTS</h3>
              <p>Explore what we've built.</p>
              <span className="btn-arrow-thin">→</span>
            </Link>
            <Link to="/enterprise" className="eco-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>ENTERPRISE</h3>
              <p>Build systems for real-world problems.</p>
              <span className="btn-arrow-thin">→</span>
            </Link>
            <Link to="/company/careers" className="eco-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h3>CAREERS</h3>
              <p>Build your next chapter with ZUNTRA.</p>
              <span className="btn-arrow-thin">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events Preview */}
      <section className="past-events-preview">
        <div className="past-events-preview-content">
          <h2>EVENTS THAT BROUGHT PEOPLE TOGETHER.</h2>
          
          <div className="events-grid">
            {pastEvents.slice(0, 4).map(event => (
              <Link to={`/company/events/past/${event.id}`} key={event.id} className="past-card">
                <div className="past-card-img-wrapper">
                  <img src={event.image} alt={event.title} />
                </div>
                <div style={{ padding: '0 0.5rem' }}>
                  <span className="past-card-cat" style={{ color: event.categoryId === 'design' ? '#3b82f6' : '#8b5cf6' }}>
                    {event.category} • {event.year}
                  </span>
                  <h3>{event.shortTitle || event.title}</h3>
                  <div className="past-card-footer">
                    <span>VIEW EVENT</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <Link to="/company/events/past" className="btn-black-center">VIEW ALL PAST EVENTS</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>HAVE SOMETHING<br/>WORTH SHARING?</h2>
        <p>Bring an idea, a challenge, a question or a new perspective<br/>to the ZUNTRA community.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-cta-primary">LET'S TALK →</Link>
          <Link to="/company/incubation" className="btn-cta-secondary">EXPLORE INCUBATION →</Link>
        </div>
      </section>

    </div>
  );
};

export default Events;
