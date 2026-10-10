import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { eventsData } from '../../data/eventsData';
import './Events.css';

const PastEvents = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam) {
      const lower = categoryParam.toLowerCase();
      if (lower === 'design') setActiveFilter('DESIGN');
      else if (lower === 'ai-intelligence' || lower === 'ai' || lower === 'ai & intelligence') setActiveFilter('AI & INTELLIGENCE');
      else if (lower === 'product') setActiveFilter('PRODUCT');
      else if (lower === 'automation') setActiveFilter('AUTOMATION');
      else if (lower === 'facilities-industrial-visit' || lower.includes('industrial') || lower.includes('facilit')) setActiveFilter('FACILITIES & INDUSTRIAL VISIT');
      else setActiveFilter('ALL');
    }
  }, [categoryParam]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'ALL') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else if (filter === 'DESIGN') {
      setSearchParams({ category: 'design' });
    } else if (filter === 'AI & INTELLIGENCE') {
      setSearchParams({ category: 'ai-intelligence' });
    } else if (filter === 'PRODUCT') {
      setSearchParams({ category: 'product' });
    } else if (filter === 'AUTOMATION') {
      setSearchParams({ category: 'automation' });
    } else if (filter === 'FACILITIES & INDUSTRIAL VISIT') {
      setSearchParams({ category: 'facilities-industrial-visit' });
    }
  };

  const { pastEvents } = eventsData;

  // Filter events based on active category & search query
  const filteredEvents = pastEvents.filter(event => {
    // Category match
    let matchesCategory = true;
    if (activeFilter === 'DESIGN') {
      matchesCategory = event.categoryId === 'design' || event.category.toUpperCase().includes('DESIGN');
    } else if (activeFilter === 'AI & INTELLIGENCE') {
      matchesCategory = event.categoryId === 'ai-intelligence' || event.category.toUpperCase().includes('AI');
    } else if (activeFilter === 'PRODUCT') {
      matchesCategory = event.categoryId === 'product' || event.category.toUpperCase().includes('PRODUCT');
    } else if (activeFilter === 'AUTOMATION') {
      matchesCategory = event.categoryId === 'automation' || event.category.toUpperCase().includes('AUTOMATION');
    } else if (activeFilter === 'FACILITIES & INDUSTRIAL VISIT') {
      matchesCategory = event.categoryId === 'facilities-industrial-visit' || event.category.toUpperCase().includes('INDUSTRIAL') || event.category.toUpperCase().includes('FACILIT');
    }

    // Search query match
    let matchesSearch = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      matchesSearch = (
        event.title.toLowerCase().includes(q) ||
        (event.shortTitle && event.shortTitle.toLowerCase().includes(q)) ||
        event.category.toLowerCase().includes(q) ||
        event.year.includes(q) ||
        (event.description && event.description.toLowerCase().includes(q))
      );
    }

    return matchesCategory && matchesSearch;
  });

  // Group filtered events by year
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {});

  // Sort years descending (2026, 2025, 2024)
  const years = Object.keys(groupedEvents).sort((a, b) => b - a);

  return (
    <div className="events-page" style={{ background: '#fafafa', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '6rem 5% 3rem', maxWidth: '1280px', margin: '0 auto' }}>
        <header>
          <span style={{ color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            ZUNTRA ARCHIVE
          </span>
          <h1 style={{ fontSize: '3.8rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#000' }}>
            WHERE THE COMMUNITY<br/>CAME TOGETHER.
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '650px', lineHeight: 1.6 }}>
            Explore past events, UI/UX masterclasses, developer hackathons, academic industrial immersion visits and startup conclaves.
          </p>
        </header>
      </div>

      {/* Filter and Search Bar */}
      <div style={{ background: '#f4f4f5', padding: '2rem 5%', borderBottom: '1px solid #eaeaea', borderTop: '1px solid #eaeaea', marginBottom: '4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', maxWidth: '500px', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Search past events by name, year, or topic..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flex: 1, padding: '1rem', border: '1px solid #ddd', borderRadius: '4px 0 0 4px', outline: 'none', fontSize: '0.95rem' }} 
            />
            <button 
              type="button"
              style={{ background: 'black', color: 'white', padding: '0 2rem', fontWeight: 700, border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
            >
              SEARCH
            </button>
          </div>
          
          <div className="filter-pills" style={{ justifyContent: 'flex-start', margin: 0 }}>
            <span 
              className={`filter-pill ${activeFilter === 'ALL' ? 'active' : ''}`}
              onClick={() => handleFilterClick('ALL')}
            >
              ALL
            </span>
            <span 
              className={`filter-pill ${activeFilter === 'AI & INTELLIGENCE' ? 'active' : ''}`}
              onClick={() => handleFilterClick('AI & INTELLIGENCE')}
            >
              AI & INTELLIGENCE
            </span>
            <span 
              className={`filter-pill ${activeFilter === 'DESIGN' ? 'active' : ''}`}
              onClick={() => handleFilterClick('DESIGN')}
            >
              DESIGN
            </span>
            <span 
              className={`filter-pill ${activeFilter === 'PRODUCT' ? 'active' : ''}`}
              onClick={() => handleFilterClick('PRODUCT')}
            >
              PRODUCT
            </span>
            <span 
              className={`filter-pill ${activeFilter === 'AUTOMATION' ? 'active' : ''}`}
              onClick={() => handleFilterClick('AUTOMATION')}
            >
              AUTOMATION
            </span>
            <span 
              className={`filter-pill ${activeFilter === 'FACILITIES & INDUSTRIAL VISIT' ? 'active' : ''}`}
              onClick={() => handleFilterClick('FACILITIES & INDUSTRIAL VISIT')}
            >
              FACILITIES & INDUSTRIAL VISIT
            </span>
          </div>
        </div>
      </div>

      {/* Events Listings / Empty States */}
      <div style={{ padding: '0 5% 6rem', maxWidth: '1280px', margin: '0 auto' }}>
        {filteredEvents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '6rem 2rem', background: '#fff', borderRadius: '12px', border: '1px solid #eaeaea', margin: '2rem 0' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📅</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem', color: '#111' }}>
              No events found for {activeFilter !== 'ALL' ? activeFilter : 'your search'}
            </h3>
            <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
              {activeFilter === 'PRODUCT' || activeFilter === 'AUTOMATION'
                ? `There are currently no recorded past events in the ${activeFilter.toLowerCase()} category. Stay tuned for upcoming events and workshops.`
                : 'No matching events found. Try adjusting your filters or search terms.'}
            </p>
            <button 
              onClick={() => { setActiveFilter('ALL'); setSearchQuery(''); searchParams.delete('category'); setSearchParams(searchParams); }}
              className="btn-dark"
              style={{ cursor: 'pointer' }}
            >
              VIEW ALL EVENTS
            </button>
          </div>
        ) : (
          years.map(year => (
            <section key={year} style={{ marginBottom: '5rem' }}>
              <div style={{ borderBottom: '1.5px solid #111', paddingBottom: '1rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <h2 style={{ fontSize: '3.2rem', fontWeight: 800, margin: 0, color: '#000', letterSpacing: '-1px' }}>
                  {year}
                </h2>
                <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 700, letterSpacing: '1px' }}>
                  {groupedEvents[year].length} {groupedEvents[year].length === 1 ? 'EVENT' : 'EVENTS'}
                </span>
              </div>
              
              <div className="events-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2.5rem' }}>
                {groupedEvents[year].map(event => (
                  <Link 
                    to={`/company/events/past/${event.id}`} 
                    key={event.id} 
                    className="event-card past-event-card-hover" 
                    style={{ boxShadow: 'none', border: '1px solid #eaeaea', background: '#fff', borderRadius: '8px', overflow: 'hidden' }}
                  >
                    <div className="past-event-card-img-wrap">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="past-event-card-img"
                      />
                    </div>
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span className="event-category" style={{ fontSize: '0.75rem', fontWeight: 700, color: event.categoryId === 'design' ? '#2563eb' : '#8b5cf6', textTransform: 'uppercase', marginBottom: '0.6rem', display: 'block', letterSpacing: '1px' }}>
                        {event.category}
                      </span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.6rem', lineHeight: 1.3, color: '#111' }}>
                        {event.shortTitle || event.title}
                      </h3>
                      <p className="event-date" style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                        {event.date} • {event.location}
                      </p>
                      <div className="event-footer" style={{ color: '#000', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #f0f0f0' }}>
                        <span>VIEW FULL DETAILS</span>
                        <span style={{ color: '#000', fontSize: '1.1rem' }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))
        )}
      </div>

      {/* Registration Banner */}
      <section className="registration-banner" style={{ background: '#0a0a0b', color: 'white' }}>
        <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1.5px', marginBottom: '1rem', display: 'block' }}>
          ZUNTRA EVENTS
        </span>
        <h2 style={{ color: 'white' }}>KEEP BUILDING<br/>WITH US.</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>
          Explore upcoming events and discover what's next at ZUNTRA.
        </p>
        <Link to="/company/events" className="btn" style={{ background: 'white', color: 'black', padding: '1rem 2.5rem', fontWeight: 700, borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.5px' }}>
          EXPLORE UPCOMING EVENTS →
        </Link>
      </section>
    </div>
  );
};

export default PastEvents;
