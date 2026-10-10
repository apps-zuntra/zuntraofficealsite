import React from 'react';
import './IntelligenceCoreSection.css';

const coreBlocks = [
  { id: 'ai', initials: 'AI', title: 'AI', desc: 'Foundation models & reasoning', color: '#8b5cf6' },
  { id: 'ag', initials: 'AG', title: 'Agents', desc: 'Autonomous decision-making', color: '#3b82f6' },
  { id: 'da', initials: 'DA', title: 'Data', desc: 'Knowledge & context', color: '#10b981' },
  { id: 'au', initials: 'AU', title: 'Automation', desc: 'Workflow execution', color: '#f97316' },
  { id: 'pr', initials: 'PR', title: 'Products', desc: 'User-facing interfaces', color: '#f59e0b' },
  { id: 'im', initials: 'IM', title: 'Impact', desc: 'Real-world outcomes', color: '#db2777' }
];

const IntelligenceCoreSection = () => {
  return (
    <section className="int-core-section">
      <div className="container">
        <div className="int-header">
          <h2>INTELLIGENCE<br />AT THE CORE.</h2>
          <p>Every Zuntra system is built on a coherent technical architecture — from foundational AI through to real-world impact.</p>
        </div>

        <div className="int-layout">
          <div className="int-list">
            <div className="int-line"></div>
            {coreBlocks.map((block, index) => (
              <div className="int-block" key={block.id}>
                <div className="int-icon" style={{color: block.color, borderColor: `${block.color}50`}}>
                  {block.initials}
                </div>
                <div className="int-text">
                  <h4>{block.title}</h4>
                  <p>{block.desc}</p>
                </div>
                <div className="int-dots">
                  <span style={{background: block.color}}></span>
                  <span style={{background: block.color}}></span>
                  <span style={{background: block.color}}></span>
                  <span style={{background: block.color}}></span>
                </div>
              </div>
            ))}
          </div>

          <div className="int-diagram">
            <div className="orbit-center">ZUNTRA</div>
            <div className="orbit-ring ring-1">
              <div className="orbit-node node-ai" style={{background: '#8b5cf620', color: '#8b5cf6', borderColor: '#8b5cf650'}}>AI</div>
              <div className="orbit-node node-ag" style={{background: '#3b82f620', color: '#3b82f6', borderColor: '#3b82f650'}}>AG</div>
              <div className="orbit-node node-da" style={{background: '#10b98120', color: '#10b981', borderColor: '#10b98150'}}>DA</div>
              <div className="orbit-node node-au" style={{background: '#f9731620', color: '#f97316', borderColor: '#f9731650'}}>AU</div>
              <div className="orbit-node node-pr" style={{background: '#f59e0b20', color: '#f59e0b', borderColor: '#f59e0b50'}}>PR</div>
              <div className="orbit-node node-im" style={{background: '#db277720', color: '#db2777', borderColor: '#db277750'}}>IM</div>
            </div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceCoreSection;
