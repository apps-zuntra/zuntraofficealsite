import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './VenturesShowcase.css';

// Import product UI images from src/assets/product-ui-img
import huzzlerImg1 from '../assets/homescreenmockup/huzzlermockup1.png';
import huzzlerImg2 from '../assets/homescreenmockup/huzzlermockup2.png';
import huzzlerBg1 from '../assets/huzzler-banner-img/huzzler1.jpeg';
import huzzlerBg2 from '../assets/huzzler-banner-img/huzzler2.jpeg';

import wiviyImg1 from '../assets/homescreenmockup/wiviymockup1.png';
import wiviyImg2 from '../assets/homescreenmockup/wiviymockup2.png';
import wiviyBg1 from '../assets/wiviy-banner/640c7567-9871-4e67-b412-c32d0693f617.jpg';
import wiviyBg2 from '../assets/wiviy-banner/WhatsApp Image 2026-10-05 at 2.58.03 PM.jpeg';

import rentitImg1 from '../assets/homescreenmockup/rentitmockup1.png';
import rentitImg2 from '../assets/homescreenmockup/rentitmockup2.png';
import rentitBg1 from '../assets/rentit-banner-img/WhatsApp Image 2026-09-22 at 2.38.16 PM.jpeg';
import rentitBg2 from '../assets/rentit-banner-img/WhatsApp Image 2026-09-22 at 2.38.26 PM.jpeg';

import mungoImg1 from '../assets/homescreenmockup/mungomockup1.png';
import mungoImg2 from '../assets/homescreenmockup/mungomockup2.png';
import mungoBg1 from '../assets/mungo-banner-img/WhatsApp Image 2026-09-22 at 3.10.01 PM.jpeg';
import mungoBg2 from '../assets/mungo-banner-img/WhatsApp Image 2026-09-22 at 3.10.21 PM.jpeg';

import zucaImg1 from '../assets/homescreenmockup/zucamockup1.png';
import zucaImg2 from '../assets/homescreenmockup/zucamockup2.png';
import zucaBg1 from '../assets/rentit-banner-img/WhatsApp Image 2026-09-22 at 2.38.37 PM.jpeg';
import zucaBg2 from '../assets/huzzler-banner-img/huzzler1.jpeg';

const productsList = [
  { id: 'huzzler', label: 'Huzzler' },
  { id: 'wiviy', label: 'Wiviy' },
  { id: 'rentit', label: 'Rentit' },
  { id: 'mungo', label: 'Mungo' },
  { id: 'zuca', label: 'Zuca' }
];

const VenturesShowcase = () => {
  const [activeId, setActiveId] = useState('huzzler');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -50% 0px',
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    productsList.forEach((prod) => {
      const el = document.getElementById(prod.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToProduct = (id) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="vs-showcase-wrapper">
      <div className="vs-layout">
        {/* Sticky Left Sidebar */}
        <aside className="vs-sidebar">
          <ul className="vs-nav-list">
            {productsList.map((prod) => {
              const isActive = activeId === prod.id;
              return (
                <li key={prod.id} className="vs-nav-item">
                  <button
                    className={`vs-nav-btn ${isActive ? 'active' : ''}`}
                    onClick={() => scrollToProduct(prod.id)}
                  >
                    <span>{prod.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Scrolling Right Content */}
        <main className="vs-content">
          {/* 1. Huzzler */}
          <section id="huzzler" className="vs-product-block">
            <div className="vs-prod-header">
              <div className="vs-title-row">
                <h2 className="vs-prod-title">
                  AI Freelance Marketplace for Businesses and Independent Professionals
                </h2>
              </div>
            </div>

            <div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>Find work that fits.</h4>
                  <p>Discover projects matched to your skills, experience, and interests. Explore relevant opportunities, apply faster, and manage your freelance work in one place.</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>Connect with the right people.</h4>
                  <p>Build your professional presence, showcase your work, discover businesses, and connect with potential clients through a personalised professional network.</p>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${huzzlerBg1})` }}>
                    <img src={huzzlerImg1} alt="Find work that fits." className="animated-mockup-img" />
                  </figure>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${huzzlerBg2})` }}>
                    <img src={huzzlerImg2} alt="Connect with the right people." className="animated-mockup-img" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="vs-prod-footer">
              <div className="vs-prod-footer-inner">
                <p>
                  Huzzler is an AI powered freelance platform that connects businesses with skilled independent professionals for projects, consulting, and on demand services. It helps organizations discover the right talent while giving freelancers a smarter way to find relevant opportunities, showcase their capabilities, and grow their professional network.
                </p>
                <Link to="/products/huzzler" className="vs-btn-learn">
                  Learn more →
                </Link>
              </div>
            </div>
          </section>

          {/* 2. Wiviy */}
          <section id="wiviy" className="vs-product-block">
            <div className="vs-prod-header">
              <div className="vs-title-row">
                <h2 className="vs-prod-title">
                  Intentional Dating Platform for Authentic Relationships and Meaningful Connections
                </h2>
              </div>
            </div>

            <div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>Connect beyond the profile.</h4>
                  <p>Discover people based on shared values, interests, personality, and what genuinely matters to you. Wiviy encourages meaningful conversations instead of superficial interactions.</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>Experience more together.</h4>
                  <p>Explore curated experiences, activities, and services that give people opportunities to meet, connect, and build relationships through shared interests.</p>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${wiviyBg1})` }}>
                    <img src={wiviyImg1} alt="Connect beyond the profile." className="animated-mockup-img" />
                  </figure>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${wiviyBg2})` }}>
                    <img src={wiviyImg2} alt="Experience more together." className="animated-mockup-img" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="vs-prod-footer">
              <div className="vs-prod-footer-inner">
                <p>
                  Wiviy is an intentional dating platform designed to help people build authentic relationships through shared interests, values, and meaningful conversations. By moving beyond traditional swipe based dating, Wiviy creates a more thoughtful space where people can discover genuine connections and turn digital interactions into real experiences.
                </p>
                <Link to="/products/wiviy" className="vs-btn-learn">
                  Learn more →
                </Link>
              </div>
            </div>
          </section>

          {/* 3. Rentit */}
          <section id="rentit" className="vs-product-block">
            <div className="vs-prod-header">
              <div className="vs-title-row">
                <h2 className="vs-prod-title">
                  Property Rental Marketplace for Residential and Commercial Spaces
                </h2>
              </div>
            </div>

            <div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>Find a space that fits.</h4>
                  <p>Discover apartments, homes, PGs, flatmates, and commercial spaces based on your location, preferences, and requirements. Compare options and explore properties that match what you are looking for.</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>List and manage with ease.</h4>
                  <p>Property owners and agents can showcase spaces, manage listings, connect with interested renters, and simplify the rental process from discovery to decision.</p>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${rentitBg1})` }}>
                    <img src={rentitImg1} alt="Find a space that fits." className="animated-mockup-img" />
                  </figure>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${rentitBg2})` }}>
                    <img src={rentitImg2} alt="List and manage with ease." className="animated-mockup-img" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="vs-prod-footer">
              <div className="vs-prod-footer-inner">
                <p>
                  Rentit is a comprehensive property rental platform designed to simplify the way people discover and manage rental spaces. From homes and apartments to PGs, flatmates, and commercial properties, Rentit brings property discovery, listings, and rental opportunities together in one connected marketplace.
                </p>
                <Link to="/products/rentit" className="vs-btn-learn">
                  Learn more →
                </Link>
              </div>
            </div>
          </section>

          {/* 4. Mungo */}
          <section id="mungo" className="vs-product-block">
            <div className="vs-prod-header">
              <div className="vs-title-row">
                <h2 className="vs-prod-title">
                  Pet Care Platform for Services, Products and Veterinary Support
                </h2>
              </div>
            </div>

            <div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>Everything your pet needs.</h4>
                  <p>Find and book trusted pet services including grooming, walking, boarding, sitting, and other everyday care services, all from one convenient platform.</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>Find trusted veterinary care.</h4>
                  <p>Discover veterinarians and clinics, explore available services, compare options, and book appointments to give pets access to the care they need.</p>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${mungoBg1})` }}>
                    <img src={mungoImg1} alt="Everything your pet needs." className="animated-mockup-img" />
                  </figure>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${mungoBg2})` }}>
                    <img src={mungoImg2} alt="Find trusted veterinary care." className="animated-mockup-img" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="vs-prod-footer">
              <div className="vs-prod-footer-inner">
                <p>
                  Mungo is an integrated pet care platform designed to bring everyday pet services, products, and veterinary support into one place. From routine grooming and walking to boarding, sitting, healthcare, and pet essentials, Mungo makes it easier for pet parents to manage their pets' needs while helping them provide healthier and happier lives.
                </p>
                <Link to="/products/mungo" className="vs-btn-learn">
                  Learn more →
                </Link>
              </div>
            </div>
          </section>

          {/* 5. Zuca */}
          <section id="zuca" className="vs-product-block">
            <div className="vs-prod-header">
              <div className="vs-title-row">
                <h2 className="vs-prod-title">
                  Beauty and Wellness Booking Platform for Services and Experiences
                </h2>
              </div>
            </div>

            <div className="vs-feature-content-wrapper">
              <div className="vs-feature-grid">
                <div className="vs-text-col vs-text-left">
                  <h4>Discover services around you.</h4>
                  <p>Find beauty and wellness professionals based on your location, preferences, availability, and service requirements. Explore trusted providers and discover experiences that fit your needs.</p>
                </div>
                <div className="vs-text-col vs-text-right">
                  <h4>Book your experience with ease.</h4>
                  <p>Browse services, view professional profiles, compare options, check availability, and book appointments through one simple platform.</p>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${zucaBg1})` }}>
                    <img src={zucaImg1} alt="Discover services around you." className="animated-mockup-img" />
                  </figure>
                </div>
                <div className="vs-img-col">
                  <figure className="animated-mockup-figure" style={{ '--bg-image': `url(${zucaBg2})` }}>
                    <img src={zucaImg2} alt="Book your experience with ease." className="animated-mockup-img" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="vs-prod-footer">
              <div className="vs-prod-footer-inner">
                <p>
                  Zuca is a digital beauty and wellness marketplace that connects customers with professionals and service providers for personalised experiences. From hair and makeup to skincare, facial, massage, and other wellness services, Zuca makes discovering and booking the right service simple and convenient.
                </p>
                <Link to="/products/zuca" className="vs-btn-learn">
                  Learn more →
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default VenturesShowcase;
