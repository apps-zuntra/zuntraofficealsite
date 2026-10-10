import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import footerLogo from '../assets/footerlogo.png';
import CursorGrid from './CursorGrid';

const Footer = () => {
  return (
    <footer className="footer-zuntra">
      {/* Animated Gradient Bar */}
      <div className="footer-animated-bar"></div>

      {/* Background Interactive Animation */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <CursorGrid
          cellSize={38}
          shape="circle"
          color="#c0c0c0" /* Elegant silver color */
          radius={75}
          falloff="smooth"
          holdTime={350}
          fadeDuration={700}
          lineWidth={1}
          maxOpacity={0.45}
          fillOpacity={0.04}
          gridOpacity={0.02}
          clickPulse={true}
          pulseSpeed={500}
        />
      </div>

      <div className="footer-container">
        <div className="footer-main-layout">
          {/* Left Brand & Contact Sidebar */}
          <aside className="footer-sidebar">
            <div className="footer-logo-row">
              <img src={footerLogo} alt="Zuntra Logo" className="footer-logo-img" />
              <span className="footer-logo-text">ZUNTRA</span>
            </div>

            <p className="footer-ai-tag">Ask AI for a summary about Zuntra</p>

            <div className="footer-ai-row">
              <a
                href="https://chatgpt.com/?q=Tell+me+about+Zuntra,+a+technology+company+based+in+Perungudi,+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-chatgpt-btn"
                aria-label="Ask ChatGPT about Zuntra"
                title="Ask ChatGPT about Zuntra"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.5045 4.5045 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.0201-1.1685a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6726a.79.79 0 0 0-.4019-.6859zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.807 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813v6.7227zm1.145-1.6784l2.5534-1.4746 2.5534 1.4746v2.9492l-2.5534 1.4746-2.5534-1.4746v-2.9492z" />
                </svg>
              </a>
            </div>

            <div className="footer-info-block">
              <h5>Contact Us</h5>
              <a href="tel:+919150236930" className="footer-contact-link">+91 91502 36930</a>
              <a href="mailto:info@zuntra.com" className="footer-contact-link">info@zuntra.com</a>
              <a href="mailto:info@zuntradigital.com" className="footer-contact-link">info@zuntradigital.com</a>
            </div>

            <div className="footer-info-block">
              <h5>Reach Us</h5>
              <p className="footer-address-text">
                No 61, 3rd Floor,<br />
                Estate Main Rd,<br />
                Industrial Estate, Perungudi,<br />
                Chennai, 600096
              </p>
            </div>

            <div className="footer-social-row">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="X (Twitter)">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/zuntra-digital/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z" />
                </svg>
              </a>
            </div>
          </aside>

          {/* Right Navigation Area */}
          <div className="footer-nav-area">
            {/* Top 4 Columns */}
            <div className="footer-nav-grid-top">
              <div className="footer-col">
                <h4>PRODUCT</h4>
                <ul>
                  <li><Link to="/products/huzzler">Huzzler</Link></li>
                  <li><Link to="/products/mungo">Mungo</Link></li>
                  <li><Link to="/products/wiviy">Wiviy</Link></li>
                  <li><Link to="/products/zuca">Zuca</Link></li>
                  <li><Link to="/products/z01-crew">Z01</Link></li>
                  <li><Link to="/products/rentit">Rentit</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>ENTERPRISE</h4>
                <ul>
                  <li><Link to="/enterprise/talvivo">Talvivo</Link></li>
                  <li><Link to="/enterprise/workzi">Workzi</Link></li>
                  <li><Link to="/enterprise/CubeForge">CubeForge</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>BUSINESS VERTICALS</h4>
                <ul>
                  <li><Link to="/verticals/media">Media</Link></li>
                  <li><Link to="/verticals/art-culture">Art & Culture</Link></li>
                  <li><Link to="/verticals/robotics">Robotics</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>WHAT ZUNTRA BUILDS</h4>
                <ul>
                  <li><Link to="/build/ai-software-automation">AI Software & Automation</Link></li>
                  <li><Link to="/build/product-engineering">Product Engineering</Link></li>
                  <li><Link to="/build/cloud-data">Cloud & Data</Link></li>
                  <li><Link to="/build/growth-marketing-tech">Growth & Marketing Tech</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Columns (Separated by Divider) */}
            <div className="footer-nav-grid-bottom">
              <div className="footer-col">
                <h4>INDUSTRIES</h4>
                <ul>
                  <li><Link to="/industry/healthcare">Healthcare</Link></li>
                  <li><Link to="/industry/logistics">Logistics</Link></li>
                  <li><Link to="/industry/enterprise-technology-professional-services">Enterprise Technology & Professional Services</Link></li>
                  <li><Link to="/industry/education">Education</Link></li>
                  <li><Link to="/industry/innovation-ecosystems-venture-development">Innovation Ecosystems & Venture Development</Link></li>
                  <li><Link to="/industry/financial-services">Financial Services</Link></li>
                  <li><Link to="/industry/media">Media</Link></li>
                  <li><Link to="/industry/government-public-sector-smart-cities">Government, Public Sector & Smart Cities</Link></li>
                  <li><Link to="/industry/energy">Energy</Link></li>
                  <li><Link to="/industry/telecommunications-connectivity-digital-infrastructure">Telecommunications, Connectivity & Digital Infrastructure</Link></li>
                  <li><Link to="/industry/manufacturing-industrial-innovation">Manufacturing & Industrial Innovation</Link></li>
                  <li><Link to="/industry/culture-heritage">Culture & Heritage</Link></li>
                  <li><Link to="/industry/retail-e-commerce-consumer-experience">Retail, E-Commerce & Consumer Experience</Link></li>
                  <li><Link to="/industry/real-estate-property-technology">Real Estate & Property Technology</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>ABOUT</h4>
                <ul>
                  <li><Link to="/about/mission-vision">Mission & Vision</Link></li>
                  <li><Link to="/about/team">Team</Link></li>
                  <li><Link to="/about/leadership">Leadership</Link></li>
                  <li><Link to="/about/cohort-25">Cohort 25</Link></li>
                  <li><Link to="/about/cohort-26">Cohort 26</Link></li>
                  <li><Link to="/about/sustainability-deai">Sustainability & DEAI</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>COMPANY</h4>
                <ul>
                  <li><Link to="/company/careers">Careers</Link></li>
                  <li><Link to="/company/research-insights">Research Insights</Link></li>
                  <li><Link to="/company/zuntra-labs">Zuntra Labs</Link></li>
                  <li><Link to="/company/news">News</Link></li>
                  <li><Link to="/company/events">Events</Link></li>
                  <li><Link to="/company/incubation">Incubation</Link></li>
                  <li><Link to="/company/competitions">Competitions</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Terms&privacy</h4>
                <ul>
                  <li><Link to="/terms">Terms</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">&copy; 2026 Zuntra. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
