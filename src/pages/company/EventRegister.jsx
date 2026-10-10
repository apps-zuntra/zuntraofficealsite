import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';
import './Events.css';

const EventRegister = () => {
  const { slug } = useParams();
  
  let event = eventsData.upcomingEvents.find(e => e.id === slug);
  if (!event && eventsData.featuredEvent.id === slug) {
    event = eventsData.featuredEvent;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!event) {
    return (
      <div className="events-page" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h2>Event not found</h2>
        <Link to="/company/events" className="btn">← BACK TO EVENTS</Link>
      </div>
    );
  }

  // Tags based on event title/category for the pills
  const getTags = () => {
    if (event.category.toLowerCase().includes('design')) return ['design', 'ui/ux', 'creative', 'technology'];
    if (event.category.toLowerCase().includes('ai')) return ['ai', 'hackathon', 'building', 'agents'];
    if (event.category.toLowerCase().includes('product')) return ['product', 'strategy', 'discovery'];
    return ['technology', 'innovation', 'community'];
  };

  const tags = getTags();

  return (
    <div className="events-page" style={{ background: '#f5f3ff', minHeight: '100vh', paddingBottom: '6rem' }}>
      {/* Top Nav */}
      <div className="details-nav" style={{ background: 'transparent', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <Link to="/company/events">Events</Link> <span style={{ margin: '0 0.5rem', color: '#999' }}>›</span> <Link to={`/company/events/${event.id}`}>{event.title}</Link> <span style={{ margin: '0 0.5rem', color: '#999' }}>›</span> <strong style={{ color: '#111' }}>Register</strong>
      </div>

      <div style={{ maxWidth: '1200px', margin: '4rem auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '0 5%' }} className="register-grid">
        {/* Left Column: Event Details */}
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem', display: 'block' }}>
            {event.format || 'IN-PERSON'} - {event.type || event.category}
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', color: '#111' }}>{event.title}</h1>
          
          <div style={{ color: '#555', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            {event.date}<br/>
            {event.time}<br/>
            {event.location}
          </div>
          
          <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            {event.description || event.longDescription}
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {tags.map((tag, i) => (
              <span key={i} style={{ background: '#e5e7eb', color: '#374151', padding: '0.3rem 1rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Registration Form */}
        <div style={{ background: 'white', borderRadius: '12px', padding: '3rem', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', display: 'block' }}>REGISTRATION</span>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem', color: '#111' }}>REGISTER FOR THIS EVENT</h2>

          <form className="register-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>FIRST NAME<span>*</span></label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>LAST NAME<span>*</span></label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS<span>*</span></label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input type="tel" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>COMPANY / ORGANIZATION</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>JOB TITLE</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-group">
              <label>CITY</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>WHAT ARE YOU HOPING TO LEARN?</label>
              <textarea rows="4"></textarea>
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I agree to receive event-related communications from ZUNTRA. <a href="#">Privacy Policy</a></span>
              </label>
            </div>
            
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I would like to receive updates about future ZUNTRA events, products and opportunities.</span>
              </label>
            </div>

            <button type="submit" className="btn-register-submit">REGISTER NOW →</button>
            
            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.75rem', marginTop: '1rem' }}>
              Information you provide will be used in accordance with ZUNTRA's <a href="#" style={{ color: '#555', textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegister;
