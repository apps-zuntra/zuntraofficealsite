import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
  return (
    <section className="stats-section" style={{ borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea', paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: '#fff', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', gap: '5rem', textAlign: 'left' }}>
        <div className="stat-item">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111', letterSpacing: '-0.02em' }}>20+</h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.85rem', fontWeight: 500 }}>Products Built</p>
        </div>
        <div className="stat-item">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111', letterSpacing: '-0.02em' }}>9+</h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.85rem', fontWeight: 500 }}>Industries Served</p>
        </div>
        <div className="stat-item">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111', letterSpacing: '-0.02em' }}>40+</h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.85rem', fontWeight: 500 }}>Technologies</p>
        </div>
        <div className="stat-item">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#111', letterSpacing: '-0.02em' }}>6+</h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.85rem', fontWeight: 500 }}>Ventures Launched</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
