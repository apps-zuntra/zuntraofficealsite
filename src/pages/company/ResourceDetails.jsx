import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { resourcesData } from '../../data/resourcesData';
import ReactMarkdown from 'react-markdown';
import './Events.css'; // Re-use the markdown styling

const ResourceDetails = () => {
  const { slug } = useParams();
  
  // Find resource
  let resource = resourcesData.featured.id === slug ? resourcesData.featured : null;
  if (!resource) {
    resource = resourcesData.industryInsights.find(r => r.id === slug);
  }
  if (!resource) {
    resource = resourcesData.featuresProduct.find(r => r.id === slug);
  }
  
  // Default fallback if hitting /company/research-insights/:slug blindly
  if (!resource) {
    resource = resourcesData.featured;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const related = resourcesData.featuresProduct.slice(1, 3); // Just grabbing some for "Read More"

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  const HeadingRenderer = ({ level, children, ...props }) => {
    const text = React.Children.toArray(children).join('');
    const id = text.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)+/g, '');
    
    if (level === 3) {
      return <h3 id={id} {...props}>{children}</h3>;
    }
    const Tag = `h${level}`;
    return <Tag id={id} {...props}>{children}</Tag>;
  };

  return (
    <div className="resource-details-page" style={{ background: 'white' }}>
      
      {/* Header Info */}
      <section style={{ padding: '6rem 5% 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#888', marginBottom: '2rem', letterSpacing: '1px' }}>
          <Link to="/company/research-insights" style={{ color: '#888', textDecoration: 'none' }}>Research Insights</Link> <span style={{ margin: '0 0.5rem', color: '#eaeaea' }}>/</span> <span style={{ color: resource.color || '#8b5cf6', textTransform: 'uppercase' }}>ARTICLE</span>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem', color: '#111', letterSpacing: '-1px', maxWidth: '900px' }}>
          {resource.title}
        </h1>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eaeaea', paddingTop: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
            <span style={{ fontWeight: 700, color: '#111' }}>{resource.author || 'Zuntra Editorial Team'}</span>
            <div style={{ width: '4px', height: '4px', background: '#ccc', borderRadius: '50%' }}></div>
            <span style={{ color: '#888', fontWeight: 600, letterSpacing: '1px' }}>{resource.time || '6 MIN READ'}</span>
            <div style={{ width: '4px', height: '4px', background: '#ccc', borderRadius: '50%' }}></div>
            <span style={{ color: '#888' }}>{resource.date}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #eaeaea', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', fontWeight: 'bold' }}>X</button>
            <button style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #eaeaea', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111', fontWeight: 'bold' }}>in</button>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section style={{ padding: '0 5%', maxWidth: '1200px', margin: '0 auto 4rem' }}>
        <img src={resource.image || "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} alt={resource.title} style={{ width: '100%', height: 'auto', maxHeight: '700px', objectFit: 'cover', borderRadius: '4px' }} />
      </section>

      {/* Article Content Layout */}
      <section style={{ padding: '0 5% 6rem', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '6rem' }}>
        
        {/* Main Content */}
        <div style={{ maxWidth: '800px', fontSize: '1.15rem', lineHeight: 1.8, color: '#333' }} className="article-body">
          <ReactMarkdown
            components={{
              h1: HeadingRenderer,
              h2: HeadingRenderer,
              h3: HeadingRenderer,
              h4: HeadingRenderer,
            }}
          >
            {resource.content || resourcesData.featured.content}
          </ReactMarkdown>

          {/* Tags */}
          <div style={{ marginTop: '4rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['AI', 'Teams', 'Product', 'Future'].map(tag => (
              <span key={tag} style={{ padding: '0.4rem 1rem', border: '1px solid #eaeaea', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, color: '#555', letterSpacing: '1px', textTransform: 'uppercase' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', letterSpacing: '1px', textTransform: 'uppercase' }}>SHARE</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Tweet</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>in</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>Email</span>
          </div>
        </div>

        {/* Right Sidebar TOC */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignSelf: 'start', position: 'sticky', top: '100px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            IN THIS ARTICLE
          </span>
          <a href="#introduction" onClick={(e) => scrollToSection(e, 'introduction')} style={{ fontSize: '0.9rem', color: '#111', fontWeight: 600, textDecoration: 'none' }}>Introduction</a>
          <a href="#the-problem-with-full-automation" onClick={(e) => scrollToSection(e, 'the-problem-with-full-automation')} style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500, textDecoration: 'none' }}>The problem with full automation</a>
          <a href="#designing-for-collaboration" onClick={(e) => scrollToSection(e, 'designing-for-collaboration')} style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500, textDecoration: 'none' }}>Designing for collaboration</a>
          <a href="#when-this-meets-in-practice" onClick={(e) => scrollToSection(e, 'when-this-meets-in-practice')} style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500, textDecoration: 'none' }}>When this meets in practice</a>
          <a href="#building-the-infrastructure" onClick={(e) => scrollToSection(e, 'building-the-infrastructure')} style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500, textDecoration: 'none' }}>Building the infrastructure</a>
          <a href="#the-long-view" onClick={(e) => scrollToSection(e, 'the-long-view')} style={{ fontSize: '0.9rem', color: '#888', fontWeight: 500, textDecoration: 'none' }}>The long view</a>
        </aside>

      </section>

      {/* Read More */}
      <section style={{ background: '#fafafa', padding: '6rem 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.5px' }}>Read More</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {related.map(item => (
              <Link to={`/company/research-insights/${item.id}`} key={item.id} style={{ textDecoration: 'none', color: 'inherit', background: 'white', border: '1px solid #eaeaea', display: 'flex', flexDirection: 'column' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem' }}>
                  <span style={{ color: item.color, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', display: 'block' }}>
                    {item.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1.4, margin: '0 0 1.5rem 0', color: '#111' }}>
                    {item.title}
                  </h3>
                  <span style={{ color: '#888', fontSize: '0.8rem' }}>{item.time}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceDetails;
