import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ThreeDCard from '../../components/ThreeDCard';
import SideGridLines from '../../components/SideGridLines';
import AccordionGallery from '../../components/AccordionGallery';
import './Cohort26.css';

import cohort1 from '../../assets/product-ui-img/team1.avif';
import cohort2 from '../../assets/product-ui-img/team2.avif';
import cohort3 from '../../assets/product-ui-img/team3.avif';
import cohort4 from '../../assets/product-ui-img/team4.avif';
import cohort5 from '../../assets/product-ui-img/team5.avif';
import cohort6 from '../../assets/product-ui-img/team1.avif';
import cohort7 from '../../assets/product-ui-img/team2.avif';
import cohort8 from '../../assets/product-ui-img/team3.avif';

const COHORT_GALLERY_ITEMS = [
  {
    image: cohort1,
    label: 'Team Collaboration',
    alt: 'Team working together',
  },
  {
    image: cohort2,
    label: 'Workshop Session',
    alt: 'Workshop session',
  },
  {
    image: cohort3,
    label: 'Collaborative Project',
    alt: 'Collaborative project work',
  },
  {
    image: cohort4,
    label: 'Learning & Research',
    alt: 'Learning session',
  },
  {
    image: cohort5,
    label: 'Product Discussion',
    alt: 'Product discussion',
  },
];

import img1 from '../../assets/cohort26/GOWTHAM_edited_edited_edited_edited.avif';
import img2 from '../../assets/cohort26/IMG_6741_heic.avif';
import img3 from '../../assets/cohort26/IMG_6809_heic.avif';
import img4 from '../../assets/cohort26/JAGAN PARTHIBAN_edited.avif';
import img5 from '../../assets/cohort26/NANDHINI (1)_edited.avif';
import img6 from '../../assets/cohort26/SFS09852_edited.avif';
import img7 from '../../assets/cohort26/VENITH (2)_edited_edited_edited_edited.avif';
import img8 from '../../assets/cohort26/VISHNUJITH_edited.avif';

import prodImg1 from '../../assets/cohort26/IMG_6463_heic.avif';
import prodImg2 from '../../assets/cohort26/IMG_6763_heic.avif';
import prodImg3 from '../../assets/cohort26/IMG_6765_heic.avif';
import prodImg4 from '../../assets/cohort26/IMG_6769_heic.avif';
import prodImg5 from '../../assets/cohort26/IMG_6771_heic.avif';
import prodImg6 from '../../assets/cohort26/IMG_6806 (1)_heic.avif';
import prodImg7 from '../../assets/cohort26/8167.avif';
import prodImg8 from '../../assets/cohort26/MAGESHWAI M (1)_edited_edited_edited.avif';

/* --------------------------------------------------------------------------
   People
   -------------------------------------------------------------------------- */

const UIUX_PEOPLE = [
  {
    initials: 'GR',
    name: 'Gokul Ram J',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img1,
  },
  {
    initials: 'CX',
    name: 'Cyril Xavier Alvin Fernando',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img2,
  },
  {
    initials: 'BA',
    name: 'Barath Ananth S G',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img3,
  },
  {
    initials: 'MP',
    name: 'Madhumithaa P',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img4,
  },
  {
    initials: 'RE',
    name: 'Ramya Ethirajulu',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img5,
  },
  {
    initials: 'JT',
    name: 'Jeevitha TG',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img6,
  },
  {
    initials: 'VK',
    name: 'Vimal Kannan KR',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img7,
  },
  {
    initials: 'D',
    name: 'Dhanush',
    tag: 'INTERN',
    role: 'UI/UX + App Development Intern',
    image: img8,
  },
];

const PRODUCT_PEOPLE = [
  {
    initials: 'SR',
    name: 'Sugan Raj S',
    tag: 'FELLOW',
    role: 'Product Development Fellow',
    image: prodImg1,
  },
  {
    initials: 'VT',
    name: 'Vignesh T',
    tag: 'FELLOW',
    role: 'Product Development Fellow',
    image: prodImg2,
  },
  {
    initials: 'A',
    name: 'Aadhijah',
    tag: 'INTERN',
    role: 'Product Development Intern',
    image: prodImg3,
  },
  {
    initials: 'BZ',
    name: 'Beryl Zionah',
    tag: 'INTERN',
    role: 'Product Development Intern',
    image: prodImg4,
  },
  {
    initials: 'KN',
    name: 'Keerthika N',
    tag: 'FELLOW',
    role: 'Product Development Fellow',
    image: prodImg5,
  },
  {
    initials: 'AA',
    name: 'Abdul Aziz MA',
    tag: 'FELLOW',
    role: 'Product Development Fellow',
    image: prodImg6,
  },
  {
    initials: 'JA',
    name: 'Jai Aithiya A',
    tag: 'FELLOW',
    role: 'Product Development Fellow',
    image: prodImg7,
  },
  {
    initials: 'HS',
    name: 'Harini S',
    tag: 'FELLOW',
    role: 'Product Development Fellow',
    image: prodImg8,
  },
];

/* --------------------------------------------------------------------------
   Stats
   -------------------------------------------------------------------------- */

const STATS = [
  {
    value: '16+',
    label: 'Cohort Members',
  },
  {
    value: '02',
    label: 'Disciplines',
  },
  {
    value: '2026',
    label: 'Active Cohort Year',
  },
];

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */

const FOOTER_COLS = [
  {
    title: 'Who We Are',
    links: [
      'About',
      'Team & Culture',
      'Leadership',
      'Cohort 25/26',
      'DEAAI Policy',
      'Sustainability Goals',
    ],
  },
  {
    title: 'Careers',
    links: [
      'Open Positions',
      'Tech & AI Incubation',
      'Competitions',
    ],
  },
  {
    title: 'Business Verticals',
    links: [
      'Media — Z01 Studios',
      'Arts & Culture',
      'Robotics & IoT',
    ],
  },
  {
    title: 'Products',
    links: [
      'Huzzler',
      'Wiviy',
      'Rentit',
      'Z01 Crew',
      'Mungo',
      'Zuca',
    ],
  },
  {
    title: 'Enterprise Solutions',
    links: [
      'ENTWY DESIGN',
      'ENTWY AI',
    ],
  },
  {
    title: 'AI Solutions',
    links: [
      'Legyn AI',
      'HyreMind AI',
      'BizBy AI',
    ],
  },
  {
    title: 'Information',
    links: [
      'FAQ',
      'Events',
      'Webinars',
      'Privacy Policy',
      'Terms & Conditions',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Resources',
      'Case Study',
    ],
  },
];

/* --------------------------------------------------------------------------
   Avatar
   -------------------------------------------------------------------------- */

function AvatarPlaceholder({ initials }) {
  return (
    <svg
      viewBox="0 0 240 300"
      role="img"
      aria-label={`${initials} avatar placeholder`}
    >
      <rect
        x="0"
        y="0"
        width="240"
        height="300"
        className="avatar-bg"
      />

      <rect
        x="0.6"
        y="0.6"
        width="238.8"
        height="298.8"
        fill="none"
        className="avatar-border"
      />

      <circle
        cx="120"
        cy="106"
        r="38"
        className="avatar-circle"
      />

      <path
        d="M 46 270 v -8 a 74 74 0 0 1 148 0 v 8 Z"
        className="avatar-body"
      />

      <text
        x="120"
        y="107"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Lato, sans-serif"
        fontSize="32"
        fontWeight="700"
        className="avatar-text"
      >
        {initials}
      </text>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Person Card
   -------------------------------------------------------------------------- */

function PersonCard({ person }) {
  return (
    <article className="ch-profile-card">
      <div className="ch-profile-card-image">
        {person.image ? (
          <img
            src={person.image}
            alt={`${person.name} portrait`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <AvatarPlaceholder initials={person.initials} />
        )}
      </div>

      <ul className="ch-social-icons">
        <li>
          <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </li>
      </ul>

      <div className="ch-profile-details">
        <h3 className="ch-person__name">
          {person.name}
        </h3>
        <p className="ch-person__tag">
          {person.tag}
        </p>
        <p className="ch-person__role">
          {person.role}
        </p>
      </div>
    </article>
  );
}

/* --------------------------------------------------------------------------
   Page
   -------------------------------------------------------------------------- */

const Cohort26 = () => {
  const [activeNav, setActiveNav] = useState('overview');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The hero section is usually around 500-600px tall. Adjust value as needed.
      if (window.scrollY > 400) {
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
    // Cleanup on unmount
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
      <a
        href="#overview"
        className={`ch-sec-nav__link ${activeNav === 'overview' ? 'is-active' : ''}`}
        onClick={(e) => handleNavClick(e, 'overview')}
      >
        Overview
      </a>
      <a
        href="#uiux"
        className={`ch-sec-nav__link ${activeNav === 'uiux' ? 'is-active' : ''}`}
        onClick={(e) => handleNavClick(e, 'uiux')}
      >
        UI/UX + App Development
      </a>
      <a
        href="#product"
        className={`ch-sec-nav__link ${activeNav === 'product' ? 'is-active' : ''}`}
        onClick={(e) => handleNavClick(e, 'product')}
      >
        Product Development & Research
      </a>
      <a
        href="#culture"
        className={`ch-sec-nav__link ${activeNav === 'culture' ? 'is-active' : ''}`}
        onClick={(e) => handleNavClick(e, 'culture')}
      >
        Culture
      </a>
    </div>
  );

  return (
    <div className="ch-page">
      <SideGridLines />
      {portalElement && createPortal(secondaryNavLinks, portalElement)}

      {/* ============================== HERO ============================== */}

      <header className="ch-hero">

        <div className="ch-container ch-hero__inner">

          <p className="ch-eyebrow ch-eyebrow--violet ch-eyebrow--center">
            Cohort 2026
          </p>

          <h1 className="ch-h1">
            MEET THE PEOPLE BUILDING WHAT&apos;S NEXT.
          </h1>

          <p className="ch-lead">
            Meet the diverse and talented people shaping ideas,
            products and experiments across Zuntra.
          </p>

          <div className="ch-hero__actions">

            <a
              className="ch-btn ch-btn--solid"
              href="#overview"
            >
              Explore the Cohort
            </a>

            <a
              className="ch-btn ch-btn--ghost"
              href="#careers"
            >
              Join Zuntra
            </a>

          </div>

        </div>

        {/* =========================== MOSAIC / ACCORDION GALLERY =========================== */}

        <div className="ch-mosaic">

          <AccordionGallery
            items={COHORT_GALLERY_ITEMS}
            defaultIndex={2}
            expandRatio={0.48}
            height={380}
            gap={12}
            radius={16}
            trigger="hover"
            accentColor="#7C3AED"
            textColor="#ffffff"
            overlayColor="#060010"
            grayscale={true}
            tilt={6}
            parallax={0.35}
          />

          <p className="ch-mosaic__caption">
            Cohort 2026 — Team, workshops, collaboration and product development.
          </p>

        </div>

      </header>

      <nav className={`ch-sec-nav ${isScrolled ? 'ch-sec-nav--hidden' : ''}`}>
        <div className="ch-container ch-sec-nav__inner">
          <a
            href="#overview"
            className={`ch-sec-nav__link ${activeNav === 'overview' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'overview')}
          >
            Overview
          </a>
          <a
            href="#uiux"
            className={`ch-sec-nav__link ${activeNav === 'uiux' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'uiux')}
          >
            UI/UX + App Development
          </a>
          <a
            href="#product"
            className={`ch-sec-nav__link ${activeNav === 'product' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'product')}
          >
            Product Development & Research
          </a>
          <a
            href="#culture"
            className={`ch-sec-nav__link ${activeNav === 'culture' ? 'is-active' : ''}`}
            onClick={(e) => handleNavClick(e, 'culture')}
          >
            Culture
          </a>
        </div>
      </nav>

      <div className="ch-hairline" />

      {/* ========================= EDITORIAL ============================= */}

      <section className="ch-section ch-section--light" id="overview">

        <div className="ch-container ch-editorial">

          <p className="ch-eyebrow ch-eyebrow--lg ch-eyebrow--faint">
            Cohort 2026
          </p>

          <div>

            <h2 className="ch-h2 ch-h2--editorial">
              A YEAR OF LEARNING, BUILDING, AND EXPLORING.
            </h2>

            <div className="ch-rule ch-editorial__rule" />

            <p className="ch-body ch-editorial__text">
              The Zuntra 2026 cohort brings together people working
              across product development, research, UI/UX and
              application development — different backgrounds
              converging around shared curiosity and a drive to
              build things that matter.
            </p>

          </div>

        </div>

      </section>

      {/* =========================== ABOUT =============================== */}

      <section className="ch-section ch-section--tint">

        <div className="ch-container ch-about">

          <div>

            <p className="ch-eyebrow">
              About the Cohort
            </p>

            <h2 className="ch-h2 ch-h2--about ch-about__title">
              Different backgrounds. Shared curiosity.
            </h2>

          </div>

          <div className="ch-about__col">

            <p className="ch-about__label ch-color-violet">
              WHAT SETS US APART
            </p>

            <p className="ch-body--sm">
              The cohort draws from diverse technical and creative
              backgrounds. We look for people who think deeply,
              question assumptions and take real ownership over
              their work.
            </p>

            <p className="ch-body--sm">
              Creativity and technical depth are not opposites
              at Zuntra — we value both, together.
            </p>

          </div>

          <div className="ch-about__col">

            <p className="ch-about__label ch-color-blue">
              HOW WE WORK
            </p>

            <p className="ch-body--sm">
              Collaboration and transparent communication shape
              how we learn. Fellows and interns work closely with
              the wider Zuntra team — on real products, real
              problems and real experiments.
            </p>

            <p className="ch-body--sm">
              The best ideas come from curiosity, not seniority.
            </p>

          </div>

        </div>

      </section>

      {/* ============================== UI/UX ============================= */}

      <section
        className="ch-section ch-section--uiux"
        id="uiux"
      >

        <div className="ch-container">

          <div className="ch-sectionHead">

            <p className="ch-eyebrow ch-eyebrow--lg ch-eyebrow--violet">
              Cohort 2026
            </p>

            <h2 className="ch-h2 ch-h2--section">
              UI/UX + APP DEVELOPMENT
            </h2>

            <p className="ch-sectionHead__sub ch-color-violet">
              FELLOWS &amp; INTERNS
            </p>

          </div>

          <div className="ch-people">

            {UIUX_PEOPLE.map((p) => (
              <PersonCard
                key={p.name}
                person={p}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ============================= PRODUCT ============================ */}

      <section className="ch-section ch-section--product" id="product">

        <div className="ch-container">

          <div className="ch-sectionHead">

            <p className="ch-eyebrow ch-eyebrow--lg ch-eyebrow--green">
              Cohort 2026
            </p>

            <h2 className="ch-h2 ch-h2--section">
              PRODUCT DEVELOPMENT &amp; RESEARCH
            </h2>

            <p className="ch-sectionHead__sub ch-color-green">
              FELLOWS &amp; INTERNS
            </p>

          </div>

          <div className="ch-people">

            {PRODUCT_PEOPLE.map((p) => (
              <PersonCard
                key={p.name}
                person={p}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ============================== STATS ============================= */}

      <section className="ch-stats">

        <div className="ch-container ch-stats__grid">

          {STATS.map((s) => (
            <div
              className="ch-stat"
              key={s.label}
            >

              <p className="ch-stat__value">
                {s.value}
              </p>

              <p className="ch-stat__label">
                {s.label}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* ============================= CULTURE ============================ */}

      <section className="ch-section ch-section--light" id="culture">

        <div className="ch-container">

          <div className="ch-culture__top">

            <div>

              <p className="ch-eyebrow ch-eyebrow--orange">
                Life at Zuntra
              </p>

              <h2 className="ch-h2 ch-h2--md">
                MORE THAN A
                <br />
                COHORT.
              </h2>

              <p className="ch-body ch-body--reg ch-culture__text">
                A place to learn, experiment, collaborate, and
                turn ideas into something real.
              </p>

              <p className="ch-body--xs ch-culture__note">
                The 2026 cohort worked across workshops, product
                sessions, hackathons and hands-on technology
                projects — learning by building, not just studying.
              </p>

            </div>

            {/* cohort6 */}

            <ThreeDCard
              className="ch-frame ch-frame--tall"
              data-slot="Workshop and collaboration"
            >
              <img
                src={cohort6}
                alt="Workshop and collaboration"
                className="ch-culture__image"
              />
            </ThreeDCard>

          </div>

          {/* cohort7 + cohort8 */}

          <div className="ch-culture__pair">

            <ThreeDCard
              className="ch-frame ch-frame--wide"
              data-slot="Team presentation"
            >
              <img
                src={cohort7}
                alt="Team presentation"
                className="ch-culture__image"
              />
            </ThreeDCard>

            <ThreeDCard
              className="ch-frame ch-frame--wide"
              data-slot="Product session"
            >
              <img
                src={cohort8}
                alt="Product session"
                className="ch-culture__image"
              />
            </ThreeDCard>

          </div>

          <p className="ch-caption">
            Cohort 2026 — Team, workshops, collaboration and product development.
          </p>

        </div>

      </section>

      {/* =========================== CAREERS CTA ========================== */}

      <section
        className="ch-careers"
        id="careers"
      >

        <div className="ch-careers__panel">

          <div className="ch-container">

            <p className="ch-eyebrow ch-eyebrow--green ch-eyebrow--center">
              Beyond the Cohort
            </p>

            <h2 className="ch-careers__title">
              READY TO BUILD
              <br />
              WHAT&apos;S NEXT?
            </h2>

            <p className="ch-careers__text">
              Explore opportunities to learn, build and grow
              with Zuntra.
            </p>

            <div className="ch-careers__actions">

              <a
                className="ch-btn ch-btn--light"
                href="#0"
              >
                Explore Careers
              </a>

            </div>

          </div>

        </div>

      </section>


    </div>
  );
};

export default Cohort26;
