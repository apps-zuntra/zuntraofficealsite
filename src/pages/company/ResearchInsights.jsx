import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { resourcesData } from '../../data/resourcesData';
import './Events.css';

const ResearchInsights = () => {
  const { featured, industryInsights, featuresProduct } = resourcesData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="resources-page" style={{ background: 'white' }}>
      {/* Header Section */}
      <section style={{ padding: '6rem 5% 4rem', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', color: '#888', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block' }}>
            RESOURCES
          </span>
          <h1 style={{ fontSize: '4rem', fontWeight: 600, lineHeight: 1.1, color: '#111', letterSpacing: '-1px' }}>
            Insights, ideas, stories and practical knowledge from Zuntra.
          </h1>
        </div>
        <div style={{ paddingTop: '2.5rem' }}>
          <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: 1.7, marginBottom: '3rem' }}>
            We write about AI systems, product engineering, enterprise technology, and the practices that make a digital venture successful. Ideas, not just coding.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.8rem 1.5rem', border: '1px solid #eaeaea', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: '#111', letterSpacing: '1px' }}>ARTICLES</span>
            <span style={{ padding: '0.8rem 1.5rem', border: '1px solid #eaeaea', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: '#111', letterSpacing: '1px' }}>USE CASES</span>
            <span style={{ padding: '0.8rem 1.5rem', border: '1px solid #eaeaea', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', color: '#111', letterSpacing: '1px' }}>INDUSTRY INSIGHT</span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: '2rem 5% 6rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #eaeaea', paddingBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', letterSpacing: '1px', textTransform: 'uppercase' }}>FEATURED ARTICLE</span>
          <Link to="/company/research-insights" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111', textDecoration: 'none', letterSpacing: '1px' }}>ALL ARTICLES →</Link>
        </div>

        <Link to={`/company/research-insights/${featured.id}`} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', textDecoration: 'none', color: 'inherit', alignItems: 'center' }}>
          <img src={featured.image} alt="Featured" style={{ width: '100%', height: 'auto', borderRadius: '4px', objectFit: 'cover', aspectRatio: '16/10' }} />
          <div>
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '2rem' }}>
              <span style={{ background: '#f5f3ff', color: featured.color, padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>{featured.category}</span>
              <span style={{ color: '#888', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px' }}>{featured.time}</span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem', color: '#111', letterSpacing: '-0.5px' }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6, marginBottom: '3rem' }}>
              {featured.subtitle}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111', marginBottom: '0.3rem' }}>{featured.author}</div>
                <div style={{ fontSize: '0.8rem', color: '#888' }}>{featured.date} · {featured.time}</div>
              </div>
              <span style={{ fontSize: '1.5rem', color: '#111' }}>→</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Industry Insights Collection */}
      <section style={{ padding: '6rem 5%', background: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>COLLECTION</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111', letterSpacing: '-0.5px' }}>Industry Insights</h2>
              <Link to="/company/research-insights" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111', textDecoration: 'none', letterSpacing: '1px' }}>VIEW ALL 4 INSIGHTS →</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {industryInsights.map(item => (
                <Link to={`/company/research-insights/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1.5rem' }} />
                  <span style={{ color: item.color, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>{item.category}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '1rem', color: '#111' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, marginBottom: '1.5rem' }}>{item.subtitle}</p>
                  <span style={{ fontSize: '0.8rem', color: '#888', marginTop: 'auto' }}>{item.date} · {item.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Product Collection */}
      <section style={{ padding: '6rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
            <div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#888', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>COLLECTION</span>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#111', letterSpacing: '-0.5px' }}>Features & Product</h2>
              <Link to="/company/research-insights" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#111', textDecoration: 'none', letterSpacing: '1px' }}>VIEW ALL 6 RESULTS →</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {featuresProduct.map(item => (
                <Link to={`/company/research-insights/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1.5rem' }} />
                  <span style={{ color: item.color, fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>{item.category}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '1rem', color: '#111' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.5, marginBottom: '1.5rem' }}>{item.subtitle}</p>
                  <span style={{ fontSize: '0.8rem', color: '#888', marginTop: 'auto' }}>{item.date} · {item.time}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ background: '#0a0a0b', color: 'white', padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 600, letterSpacing: '-1px', marginBottom: '0.5rem' }}>Thinking worth sharing.</h2>
            <p style={{ color: '#888', fontSize: '1.1rem' }}>Ideas and issues on AI, products, and technology. No noise.</p>
          </div>
          <div style={{ display: 'flex', width: '100%', maxWidth: '500px' }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '1.2rem', background: '#111', border: '1px solid #333', color: 'white', borderRight: 'none', borderRadius: '4px 0 0 4px', outline: 'none' }} />
            <button style={{ padding: '1.2rem 2rem', background: 'white', color: 'black', border: 'none', borderRadius: '0 4px 4px 0', fontWeight: 800, cursor: 'pointer', fontSize: '0.9rem' }}>SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchInsights;
