import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../../data/newsData';
import ReactMarkdown from 'react-markdown';
import './Events.css';

const NewsArticle = () => {
  const { slug } = useParams();
  
  // Find article
  let article = newsData.latest.find(a => a.id === slug) || newsData.featured.find(a => a.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Article not found</h2>
        <Link to="/company/news" style={{ color: 'blue', textDecoration: 'underline' }}>Back to News</Link>
      </div>
    );
  }

  // Related articles (just pick 3 random/first that aren't this one)
  const relatedArticles = newsData.latest.filter(a => a.id !== slug).slice(0, 3);

  return (
    <div className="news-article-page" style={{ background: 'white' }}>
      {/* Header Info */}
      <section style={{ padding: '6rem 5% 4rem', maxWidth: '1000px', margin: '0 auto', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#888', marginBottom: '2rem' }}>
          <Link to="/company/news" style={{ color: '#888', textDecoration: 'none' }}>News</Link> <span style={{ margin: '0 0.5rem', color: '#eaeaea' }}>/</span> <span style={{ color: article.color, textTransform: 'uppercase', fontWeight: 800 }}>{article.category}</span>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: 600, lineHeight: 1.1, marginBottom: '1.5rem', color: '#111', letterSpacing: '-1px' }}>
          {article.title}
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#666', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px' }}>
          {article.subtitle || "Entwy connects to existing tooling, learns team workflows, and surfaces actionable intelligence across the organisation."}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#888' }}>{article.date}</span>
          <div style={{ width: '1px', height: '16px', background: '#eaeaea' }}></div>
          <span style={{ color: article.color, fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {article.type || 'Announcement'}
          </span>
          <div style={{ marginLeft: '1rem', display: 'flex', gap: '0.5rem' }}>
            <button style={{ width: '32px', height: '32px', borderRadius: '4px', border: '1px solid #eaeaea', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', fontWeight: 'bold' }}>
              X
            </button>
            <button style={{ width: '32px', height: '32px', borderRadius: '4px', border: '1px solid #eaeaea', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', fontWeight: 'bold' }}>
              in
            </button>
          </div>
        </div>
      </section>

      {/* Main Layout (No massive image placeholder) */}
      <section style={{ padding: '4rem 5%', maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '5rem' }}>
        
        {/* Left Sidebar Metadata */}
        <aside>
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.4rem', fontWeight: 700 }}>PUBLISHED</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{article.date}</span>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.4rem', fontWeight: 700 }}>CATEGORY</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: article.color }}>{article.category}</span>
          </div>
          
          <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '0.65rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.4rem', fontWeight: 700 }}>TYPE</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111' }}>{article.type || 'Announcement'}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ width: '32px', height: '32px', borderRadius: '4px', border: '1px solid #eaeaea', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', fontWeight: 'bold' }}>X</button>
            <button style={{ width: '32px', height: '32px', borderRadius: '4px', border: '1px solid #eaeaea', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', fontWeight: 'bold' }}>in</button>
          </div>
        </aside>

        {/* Main Content */}
        <div style={{ maxWidth: '800px', fontSize: '1.05rem', lineHeight: 1.8, color: '#333' }} className="article-body">
          <ReactMarkdown>
            {article.content || "Article content is coming soon."}
          </ReactMarkdown>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>‹ Previous</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>Next ›</span>
          </div>
        </div>
      </section>

      {/* More from Zuntra */}
      <section style={{ background: '#f5f5f7', padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '-1px' }}>More from Zuntra</h2>
            <Link to="/company/news" style={{ color: '#888', fontWeight: 700, textDecoration: 'none', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>ALL NEWS →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {relatedArticles.map(item => (
              <Link to={`/company/news/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit', background: 'transparent', borderTop: `2px solid ${item.color}`, paddingTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: item.color, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5, margin: '0 0 1.5rem 0', color: '#111' }}>
                  {item.title}
                </h3>
                <span style={{ color: '#888', fontSize: '0.8rem', marginTop: 'auto' }}>{item.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#0a0a0b', color: 'white', padding: '8rem 5%', textAlign: 'center', position: 'relative' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem' }}>
          HAVE SOMETHING<br/>WORTH BUILDING?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Let's turn the idea into something real.
        </p>
        <Link to="/company/contact" style={{ display: 'inline-block', background: 'white', color: 'black', padding: '1rem 2rem', fontWeight: 800, borderRadius: '4px', textDecoration: 'none' }}>
          LET'S BUILD IT
        </Link>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, #8b5cf6, #10b981, #f97316, #3b82f6)' }}></div>
      </section>
    </div>
  );
};

export default NewsArticle;
