import React, { useState } from 'react';
import './EcosystemSection.css';

const ecosystemTabs = [
  { id: 'ai', label: 'AI & Intelligence' },
  { id: 'products', label: 'Products' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'robotics', label: 'Robotics' }
];

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState('ai');

  return (
    <section className="ecosystem-section">
      <div className="container">
        <h2 className="eco-title">
          ONE ECOSYSTEM.<br />MANY POSSIBILITIES.
        </h2>
        
        <div className="eco-layout">
          {/* Sidebar */}
          <div className="eco-sidebar">
            {ecosystemTabs.map(tab => (
              <button 
                key={tab.id}
                className={`eco-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="eco-content">
            {activeTab === 'ai' && (
              <div className="eco-panel">
                <h3>Systems that think, learn and act.</h3>
                <p>We build production AI — agents, fine-tuned models, RAG pipelines, and intelligent automation that solves real operational problems in finance, logistics, healthcare and more.</p>
                
                <div className="eco-tags">
                  <span>LLM Integration</span>
                  <span>Custom Agents</span>
                  <span>RAG Systems</span>
                  <span>Model Fine-tuning</span>
                </div>

                <div className="eco-grid">
                  <div className="eco-card">
                    <div className="eco-icon"></div>
                    <h5>LLM Integration</h5>
                    <p>Integrated capability within the Zuntra stack</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon"></div>
                    <h5>Custom Agents</h5>
                    <p>Integrated capability within the Zuntra stack</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon"></div>
                    <h5>RAG Systems</h5>
                    <p>Integrated capability within the Zuntra stack</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon"></div>
                    <h5>Model Fine-tuning</h5>
                    <p>Integrated capability within the Zuntra stack</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'products' && (
              <div className="eco-panel">
                <h3>Digital products designed for scale.</h3>
                <p>We architect, design and engineer digital products that scale. From mobile apps to complex web platforms, every product is built with the users at the center.</p>
                
                <div className="eco-tags eco-tags-blue">
                  <span>Web Platforms</span>
                  <span>Mobile Apps</span>
                  <span>SaaS Solutions</span>
                  <span>UI/UX Design</span>
                </div>

                <div className="eco-grid eco-grid-blue">
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-blue"></div>
                    <h5>Web Platforms</h5>
                    <p>High-performance web applications</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-blue"></div>
                    <h5>Mobile Apps</h5>
                    <p>Native and cross-platform mobile experiences</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-blue"></div>
                    <h5>SaaS Solutions</h5>
                    <p>Scalable cloud-based software</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-blue"></div>
                    <h5>UI/UX Design</h5>
                    <p>User-centric design systems</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ventures' && (
              <div className="eco-panel">
                <h3>Ideas we turned into products.</h3>
                <p>We build our own products and technology ventures. By experimenting with emerging technologies, we solve niche problems and validate new business models.</p>
                
                <div className="eco-tags eco-tags-teal">
                  <span>Incubation</span>
                  <span>Startup Studio</span>
                  <span>Product Strategy</span>
                  <span>Growth</span>
                </div>

                <div className="eco-grid eco-grid-teal">
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-teal"></div>
                    <h5>Incubation</h5>
                    <p>Fostering early-stage ideas</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-teal"></div>
                    <h5>Startup Studio</h5>
                    <p>Rapid prototyping and validation</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-teal"></div>
                    <h5>Product Strategy</h5>
                    <p>Go-to-market planning</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-teal"></div>
                    <h5>Growth</h5>
                    <p>Scaling user acquisition</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'enterprise' && (
              <div className="eco-panel">
                <h3>Systems that connect information and action.</h3>
                <p>End-to-end data pipelines, automation workflows, and integrations that eliminate friction and create compounding operational advantages for large organizations.</p>
                
                <div className="eco-tags eco-tags-orange">
                  <span>Data Pipelines</span>
                  <span>Automation</span>
                  <span>Cloud Architecture</span>
                  <span>Security</span>
                </div>

                <div className="eco-grid eco-grid-orange">
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-orange"></div>
                    <h5>Data Pipelines</h5>
                    <p>Robust ETL and data integration</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-orange"></div>
                    <h5>Automation</h5>
                    <p>Streamlined business processes</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-orange"></div>
                    <h5>Cloud Architecture</h5>
                    <p>Scalable cloud infrastructure</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-orange"></div>
                    <h5>Security</h5>
                    <p>Enterprise-grade data protection</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'innovation' && (
              <div className="eco-panel">
                <h3>Exploring the frontier of technology.</h3>
                <p>Our research and development arm dedicated to exploring emerging technologies, novel architectures, and experimental paradigms.</p>
                
                <div className="eco-tags eco-tags-pink">
                  <span>R&D</span>
                  <span>Blockchain</span>
                  <span>AR/VR</span>
                  <span>Quantum Computing</span>
                </div>

                <div className="eco-grid eco-grid-pink">
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-pink"></div>
                    <h5>R&D</h5>
                    <p>Applied research projects</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-pink"></div>
                    <h5>Blockchain</h5>
                    <p>Decentralized systems and smart contracts</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-pink"></div>
                    <h5>AR/VR</h5>
                    <p>Immersive digital experiences</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-pink"></div>
                    <h5>Future Tech</h5>
                    <p>Exploring next-gen compute paradigms</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'robotics' && (
              <div className="eco-panel">
                <h3>Intelligence that moves beyond the screen.</h3>
                <p>Hardware systems, IoT infrastructure and edge intelligence that bring digital capabilities into the physical world.</p>
                
                <div className="eco-tags eco-tags-green">
                  <span>Hardware Design</span>
                  <span>IoT Systems</span>
                  <span>Edge Computing</span>
                  <span>Automation</span>
                </div>

                <div className="eco-grid eco-grid-green">
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-green"></div>
                    <h5>Hardware Design</h5>
                    <p>Custom embedded systems</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-green"></div>
                    <h5>IoT Systems</h5>
                    <p>Connected device networks</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-green"></div>
                    <h5>Edge Computing</h5>
                    <p>On-device intelligence processing</p>
                  </div>
                  <div className="eco-card">
                    <div className="eco-icon eco-icon-green"></div>
                    <h5>Physical Automation</h5>
                    <p>Robotic process control</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
