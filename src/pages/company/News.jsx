import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import './Events.css';
import '../about/Cohort26.css'; // Reusing the same secondary nav CSS

const News = () => {
  const { featured, latest } = newsData;
  const [activeNav, setActiveNav] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mainContent = document.getElementById('navbar-main-content');
    const portal = document.getElementById('navbar-secondary-portal');
    if (mainContent && portal) {
      if (isScrolled) {
        mainContent.classList.add('hidden');
        portal.classList.add('active');
      } else {
        mainContent.classList.remove('hidden');
        portal.classList.remove('active');
      }
    }
    return () => {
      if (mainContent && portal) {
        mainContent.classList.remove('hidden');
        portal.classList.remove('active');
      }
    };
  }, [isScrolled]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portalElement = document.getElementById('navbar-secondary-portal');
  const secondaryNavLinks = (
    <div className="ch-sec-nav__inner" style={{width: '100%'}}>
      <a href="#overview" className={`ch-sec-nav__link ${activeNav === 'overview' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'overview')}>Overview</a>
      <a href="#news" className={`ch-sec-nav__link ${activeNav === 'news' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'news')}>News</a>
      <a href="#products" className={`ch-sec-nav__link ${activeNav === 'products' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'products')}>Products</a>
      <a href="#ventures" className={`ch-sec-nav__link ${activeNav === 'ventures' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'ventures')}>Ventures</a>
      <a href="#innovation" className={`ch-sec-nav__link ${activeNav === 'innovation' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'innovation')}>Innovation</a>
    </div>
  );

  return (
    <div className="news-page" style={{ background: 'white' }}>
      {portalElement && createPortal(secondaryNavLinks, portalElement)}
      {/* Hero Section */}
      <section id="overview" style={{ padding: '6rem 5% 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
          NEWSROOM
        </span>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', maxWidth: '800px', color: '#111' }}>
          WHAT'S HAPPENING AT ZUNTRA.
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#555', maxWidth: '600px', lineHeight: 1.6 }}>
          The latest announcements, launches, stories and developments from across the Zuntra ecosystem.
        </p>
      </section>

      <nav className={`ch-sec-nav ${isScrolled ? 'ch-sec-nav--hidden' : ''}`}>
        <div className="ch-container ch-sec-nav__inner">
          <a href="#overview" className={`ch-sec-nav__link ${activeNav === 'overview' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'overview')}>Overview</a>
          <a href="#news" className={`ch-sec-nav__link ${activeNav === 'news' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'news')}>News</a>
          <a href="#products" className={`ch-sec-nav__link ${activeNav === 'products' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'products')}>Products</a>
          <a href="#ventures" className={`ch-sec-nav__link ${activeNav === 'ventures' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'ventures')}>Ventures</a>
          <a href="#innovation" className={`ch-sec-nav__link ${activeNav === 'innovation' ? 'is-active' : ''}`} onClick={(e) => handleNavClick(e, 'innovation')}>Innovation</a>
        </div>
      </nav>

      {/* Featured News Section */}
      <section id="news" style={{ background: '#fafafa', padding: '4rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ width: '40px', height: '2px', background: '#f97316' }}></div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#333' }}>FEATURED NEWS</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {featured.map(item => (
              <Link to={`/company/news/${item.id}`} key={item.id} className="featured-news-card" style={{ textDecoration: 'none', color: 'inherit', background: 'white', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', borderBottom: `4px solid ${item.color}`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <span style={{ background: '#f3f4f6', color: '#555', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, alignSelf: 'flex-start', marginBottom: '1.5rem' }}>
                  {item.date}
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, lineHeight: 1.4, marginBottom: '3rem' }}>
                  {item.title}
                </h3>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.category}
                  </span>
                  <span style={{ color: item.color, fontWeight: 'bold' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="products" style={{ padding: '6rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid #eaeaea', flexWrap: 'wrap', gap: '1rem' }}>
          <input type="text" placeholder="Search news..." style={{ flex: 1, maxWidth: '500px', padding: '1rem 1.5rem', border: 'none', background: '#f5f5f5', outline: 'none', fontSize: '1rem' }} />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <span style={{ padding: '0.8rem 1.5rem', border: '1px solid #eaeaea', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}>Category</span>
            <span style={{ padding: '0.8rem 1.5rem', border: '1px solid #eaeaea', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}>Type</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-1px' }}>Latest News</h2>
          <span style={{ color: '#888', fontSize: '0.9rem' }}>{latest.length} stories</span>
        </div>

        <div className="latest-news-list">
          {latest.map((item, idx) => (
            <Link to={`/company/news/${item.id}`} key={item.id} className="latest-news-item" style={{ display: 'flex', textDecoration: 'none', color: 'inherit', padding: '2rem 0', borderTop: idx === 0 ? '1px solid #eaeaea' : 'none', borderBottom: '1px solid #eaeaea', gap: '3rem', alignItems: 'flex-start' }}>
              <div style={{ width: '150px', flexShrink: 0, color: '#888', fontSize: '0.9rem' }}>
                {item.date}
              </div>
              <div>
                <span style={{ color: item.color, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', display: 'block' }}>
                  • {item.category}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5, margin: 0, color: '#111' }}>
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore the Ecosystem */}
      <section id="ventures" style={{ background: '#f9f9fa', padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            EXPLORE THE ECOSYSTEM
          </span>
          <h2 style={{ fontSize: '3rem', fontWeight: 600, lineHeight: 1.1, marginBottom: '4rem', maxWidth: '600px', letterSpacing: '-1px' }}>
            FROM ZUNTRA<br/>NEWS TO THE REST.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', background: 'white', border: '1px solid #eaeaea' }}>
            <Link to="/company/events" style={{ textDecoration: 'none', color: 'inherit', padding: '3rem', borderRight: '1px solid #eaeaea' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Events</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>Conferences, workshops and Zuntra gatherings.</p>
              <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: '0.85rem' }}>Explore →</span>
            </Link>
            
            <Link to="/company/zuntra-labs" style={{ textDecoration: 'none', color: 'inherit', padding: '3rem', borderRight: '1px solid #eaeaea' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Labs</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>Experiments, R&D and technical research.</p>
              <span style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.85rem' }}>Explore →</span>
            </Link>
            
            <Link to="/company/incubation" style={{ textDecoration: 'none', color: 'inherit', padding: '3rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Incubation</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '2rem' }}>Ideas, builders and early-stage ventures.</p>
              <span style={{ color: '#10b981', fontWeight: 700, fontSize: '0.85rem' }}>Explore →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
