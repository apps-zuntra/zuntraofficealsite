import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import GlareHover from './GlareHover';
import footerLogo from '../assets/footerlogo.png';

const ChevronDown = () => (
  <svg
    className="dropdown-chevron"
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 4.5L6 8L9.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveDropdown(null);
  };

  const toggleDropdown = (menu, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" aria-label="ZUNTRA Home" onClick={closeMenu}>
            <img src={footerLogo} alt="ZUNTRA Logo" className="navbar-logo-img" />
            <h2>ZUNTRA</h2>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div id="navbar-secondary-portal" className="navbar-secondary-portal"></div>

        <div className={`navbar-main-content ${isMobileMenuOpen ? 'mobile-open' : ''}`} id="navbar-main-content">
          <nav className="navbar-links">
            {/* 1. Product */}
            <div className={`nav-item has-dropdown ${activeDropdown === 'product' ? 'dropdown-active' : ''}`}>
              <button
                type="button"
                className="nav-link-btn"
                onClick={(e) => toggleDropdown('product', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'product'}
              >
                <span>Product</span>
                <ChevronDown />
              </button>
              <div className="dropdown-menu">
                <Link to="/products/huzzler" onClick={closeMenu}>Huzzler</Link>
                <Link to="/products/mungo" onClick={closeMenu}>Mungo</Link>
                <Link to="/products/wiviy" onClick={closeMenu}>Wiviy</Link>
                <Link to="/products/zuca" onClick={closeMenu}>Zuca</Link>
                <Link to="/products/z01-crew" onClick={closeMenu}>Z01</Link>
                <Link to="/products/rentit" onClick={closeMenu}>Rentit</Link>
              </div>
            </div>

            {/* 2. Enterprise */}
            <div className={`nav-item has-dropdown ${activeDropdown === 'enterprise' ? 'dropdown-active' : ''}`}>
              <button
                type="button"
                className="nav-link-btn"
                onClick={(e) => toggleDropdown('enterprise', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'enterprise'}
              >
                <span>Enterprise</span>
                <ChevronDown />
              </button>
              <div className="dropdown-menu">
                <Link to="/enterprise/talvivo" onClick={closeMenu}>Talvivo</Link>
                <Link to="/enterprise/workzi" onClick={closeMenu}>Workzi</Link>
                <Link to="/enterprise/CubeForge" onClick={closeMenu}>CubeForge</Link>
              </div>
            </div>

            {/* 3. Business Verticals */}
            <div className={`nav-item has-dropdown ${activeDropdown === 'verticals' ? 'dropdown-active' : ''}`}>
              <button
                type="button"
                className="nav-link-btn"
                onClick={(e) => toggleDropdown('verticals', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'verticals'}
              >
                <span>Business Verticals</span>
                <ChevronDown />
              </button>
              <div className="dropdown-menu">
                <Link to="/verticals/media" onClick={closeMenu}>Media</Link>
                <Link to="/verticals/art-culture" onClick={closeMenu}>Art & Culture</Link>
                <Link to="/verticals/robotics" onClick={closeMenu}>Robotics</Link>
              </div>
            </div>

            {/* 4. What ZUNTRA Builds */}
            <div className={`nav-item has-dropdown ${activeDropdown === 'builds' ? 'dropdown-active' : ''}`}>
              <button
                type="button"
                className="nav-link-btn"
                onClick={(e) => toggleDropdown('builds', e)}
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'builds'}
              >
                <span>What ZUNTRA Builds</span>
                <ChevronDown />
              </button>
              <div className="dropdown-menu">
                <Link to="/build/ai-software-automation" onClick={closeMenu}>AI Software & Automation</Link>
                <Link to="/build/product-engineering" onClick={closeMenu}>Product Engineering</Link>
                <Link to="/build/cloud-data" onClick={closeMenu}>Cloud & Data</Link>
                <Link to="/build/growth-marketing-tech" onClick={closeMenu}>Growth & Marketing Tech</Link>
              </div>
            </div>
          </nav>

          {/* Right Action */}
          <div className="navbar-actions btn-wrapper">
            <Link to="/contact" className="letstalk-link" onClick={closeMenu}>
              <GlareHover
                width="auto"
                height="38px"
                background="var(--button-color, #000)"
                borderRadius="0"
                glareOpacity={0.6}
                className="letstalk-glare-wrapper"
              >
                <button
                  className="letstalk btn"
                  type="button"
                  style={{ background: 'transparent', color: '#ffffff', position: 'relative', zIndex: 2 }}
                >
                  LET'S TALK
                </button>
              </GlareHover>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
