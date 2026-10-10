import React, { useState } from 'react';
import './Team.css';

import team1 from '../../assets/product-ui-img/team1.avif';
import team2 from '../../assets/product-ui-img/team2.avif';
import team3 from '../../assets/product-ui-img/team3.avif';
import team4 from '../../assets/product-ui-img/team4.avif';

import DomeGallery from '../../components/DomeGallery';

// Load all full team images dynamically
const imageModules = import.meta.glob('../../assets/fullteam/*', { eager: true, import: 'default' });
const fullTeamImages = Object.values(imageModules).map(src => src);

import deva from '../../assets/teams/deva.png';
import hari from '../../assets/teams/hari.png';
import vignesh from '../../assets/teams/vignesh.jpeg';
import kumudapriya from '../../assets/teams/Kumudapriya V.jpg';
import Sreeshaa from '../../assets/teams/srisha.jpeg';
import jana from '../../assets/teams/jana.png';
import preneeth from '../../assets/teams/preneeth.jpeg';
import indhumeenakshi from '../../assets/teams/meena.png';
/* --------------------------------------------------------------------------
   Visuals
   -------------------------------------------------------------------------- */

/* ---------- Hero: people converging on the hub ---------- */

function HeroPeopleVisual() {
  const hub = { x: 266.8, y: 266.8, r: 34.3 };

  const nodes = [
    { x: 76.25, y: 57.15, variant: 'violet' },
    { x: 190.5, y: 28.5, variant: 'blue' },
    { x: 304.9, y: 76.2, variant: 'green' },
    { x: 419.2, y: 19, variant: 'orange' },
    { x: 133.4, y: 152.4, variant: 'amber' },
    { x: 266.8, y: 133.4, variant: 'pink' },
    { x: 381.1, y: 114.4, variant: 'violet' },
    { x: 485.9, y: 85.8, variant: 'blue' },
    { x: 57.15, y: 190.5, variant: 'green' },
    { x: 343, y: 190.5, variant: 'orange' },
  ];

  const r = 13.35;

  return (
    <svg
      viewBox="0 0 533.6 304.91"
      role="img"
      aria-label="People connected across Zuntra"
    >
      {nodes.map((n, i) => {
        const dx = hub.x - n.x;
        const dy = hub.y - n.y;
        const len = Math.hypot(dx, dy) || 1;

        return (
          <line
            key={`l-${i}`}
            className={`tm-hero-node-line tm-color-${n.variant}`}
            x1={n.x + (dx / len) * r}
            y1={n.y + (dy / len) * r}
            x2={hub.x - (dx / len) * hub.r}
            y2={hub.y - (dy / len) * hub.r}
            strokeWidth="0.76"
            strokeDasharray="3 3"
            opacity="0.35"
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={`n-${i}`} className={`tm-hero-node tm-color-${n.variant}`}>
          <circle
            cx={n.x}
            cy={n.y}
            r={r}
            fill="#FFFFFF"
            strokeWidth="1.43"
          />

          <circle
            cx={n.x}
            cy={n.y - 2.4}
            r="3.2"
            opacity="0.5"
          />

          <path
            d={`M ${n.x - 5.2} ${n.y + 5.4} a 5.2 4.6 0 0 1 10.4 0`}
            fill="none"
            strokeWidth="1.14"
            opacity="0.5"
          />
        </g>
      ))}

      <circle
        cx={hub.x}
        cy={hub.y}
        r={hub.r}
        fill="#FFFFFF"
        className="tm-hero-hub"
        strokeWidth="1.43"
      />

      <circle
        cx={hub.x}
        cy={hub.y}
        r="22.9"
        className="tm-hero-hub-inner"
        fillOpacity="0.04"
        strokeWidth="0.48"
      />

      <text
        x={hub.x}
        y={hub.y + 0.5}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Lato, sans-serif"
        fontSize="8.58"
        fontWeight="700"
        className="tm-hero-hub-text"
      >
        ZUNTRA
      </text>
    </svg>
  );
}

/* ---------- Leadership: portrait placeholder ---------- */

function PortraitPlaceholder({ variant }) {
  return (
    <svg
      viewBox="0 0 354 425"
      role="img"
      aria-label="Portrait placeholder"
      className={`tm-portrait tm-color-${variant}`}
    >
      <rect
        x="0"
        y="0"
        width="354"
        height="425"
        className="tm-portrait__bg"
      />

      <rect
        x="0.6"
        y="0.6"
        width="352.8"
        height="423.8"
        fill="none"
        className="tm-portrait__border"
        strokeWidth="1.26"
      />

      <circle
        cx="177"
        cy="113"
        r="49.5"
        className="tm-portrait__head"
      />

      <path
        d="M 78 319 v -14 a 99 99 0 0 1 198 0 v 14 Z"
        className="tm-portrait__body"
      />

      <rect
        x="71"
        y="372"
        width="212"
        height="10"
        className="tm-portrait__line"
      />
    </svg>
  );
}

/* ---------- Disciplines: radial map ---------- */

function DisciplineDiagram({ activeIndex = 0 }) {
  const center = { x: 262.8, y: 197.1 };

  const nodes = [
    { x: 262.8, y: 65.75, r: 23.65 },
    { x: 376.6, y: 131.4, r: 15.75 },
    { x: 376.6, y: 262.9, r: 15.75 },
    { x: 262.8, y: 328.5, r: 15.75 },
    { x: 149, y: 262.9, r: 15.75 },
    { x: 149, y: 131.4, r: 15.75 },
  ];

  return (
    <svg
      viewBox="0 0 525.6 394.2"
      role="img"
      aria-label="Disciplines connected to AI and intelligence"
    >
      {nodes.map((n, i) => {
        const dx = n.x - center.x;
        const dy = n.y - center.y;
        const len = Math.hypot(dx, dy) || 1;
        const active = i === activeIndex;

        return (
          <line
            key={`c-${i}`}
            x1={center.x + (dx / len) * 57.8}
            y1={center.y + (dy / len) * 57.8}
            x2={n.x - (dx / len) * n.r}
            y2={n.y - (dy / len) * n.r}
            className={
              active
                ? 'tm-disc-line tm-disc-line--active'
                : 'tm-disc-line'
            }
            strokeWidth={active ? 1.97 : 1.05}
            strokeDasharray={active ? '0' : '4 4'}
          />
        );
      })}

      <circle
        cx={center.x}
        cy={center.y}
        r="57.8"
        fill="#FFFFFF"
        className="tm-disc-center"
        strokeWidth="2.63"
      />

      <circle
        cx={center.x}
        cy={center.y}
        r="47.3"
        className="tm-disc-center-inner"
      />

      <text
        x={center.x}
        y={center.y - 8}
        textAnchor="middle"
        fontFamily="Lato, sans-serif"
        fontSize="10.51"
        fontWeight="700"
        className="tm-disc-center-number"
      >
        01
      </text>

      <text
        x={center.x}
        y={center.y + 12}
        textAnchor="middle"
        fontFamily="Lato, sans-serif"
        fontSize="9.2"
        fontWeight="700"
        className="tm-disc-center-label"
      >
        AI
      </text>

      {nodes.map((n, i) => {
        const active = i === activeIndex;

        return (
          <g key={`n-${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              className={
                active
                  ? 'tm-disc-node tm-disc-node--active'
                  : 'tm-disc-node'
              }
              strokeWidth="1.97"
            />

            <text
              x={n.x}
              y={n.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Lato, sans-serif"
              fontSize="9.2"
              fontWeight="700"
              className={
                active
                  ? 'tm-disc-node-text tm-disc-node-text--active'
                  : 'tm-disc-node-text'
              }
            >
              {String(i + 1).padStart(2, '0')}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- Ecosystem: node strip ---------- */

function EcosystemStrip() {
  const nodes = [
    'violet',
    'blue',
    'green',
    'orange',
    'amber',
    'pink',
    'violet',
  ];

  const first = 80.2;
  const pitch = 161.4;
  const cy = 82.27;

  return (
    <svg
      viewBox="0 0 1131.2 164.54"
      role="img"
      aria-label="Teams across the ecosystem"
    >
      <line
        x1="0"
        y1={cy}
        x2="1131.2"
        y2={cy}
        className="tm-eco-base-line"
        strokeWidth="1.03"
      />

      {nodes.map((variant, i) => {
        const cx = first + i * pitch;

        return (
          <g
            key={`e-${i}`}
            className={`tm-eco-node tm-color-${variant}`}
          >
            <circle
              cx={cx}
              cy={cy}
              r="16.45"
              fill="#FFFFFF"
              strokeWidth="1.54"
            />

            <circle
              cx={cx}
              cy={cy}
              r="6.15"
              opacity="0.5"
            />

            <rect
              x={cx - 24.65}
              y="102.8"
              width="49.3"
              height="20.6"
              fill="#FFFFFF"
              className="tm-eco-card"
              strokeWidth="0.51"
            />

            <rect
              x={cx - 20.6}
              y="109"
              width="41.2"
              height="4.1"
              opacity="0.3"
            />

            <rect
              x={cx - 20.6}
              y="115.2"
              width="28.8"
              height="4.1"
              className="tm-eco-card-line"
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- Careers: background arc fan ---------- */

function CareersArt() {
  const arcs = Array.from({ length: 10 }, (_, i) => i);

  const accents = [
    'violet',
    'blue',
    'green',
    'orange',
    'amber',
    'pink',
  ];

  return (
    <svg
      viewBox="0 0 597.6 650.65"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g opacity="0.04">
        {arcs.map((i) => {
          const cy = 325 - i * 6.4;
          const rx = 60 + i * 42;

          return (
            <ellipse
              key={i}
              cx={-40}
              cy={cy}
              rx={rx}
              ry={rx * 0.64}
              fill="none"
              className="tm-careers-arc"
              strokeWidth="0.53"
            />
          );
        })}
      </g>

      <g opacity="0.4">
        {accents.map((variant, i) => (
          <line
            key={`${variant}-${i}`}
            x1={72 + i * 85}
            y1={312}
            x2={112 + i * 85}
            y2={312}
            className={`tm-careers-accent tm-color-${variant}`}
            strokeWidth="1.07"
          />
        ))}
      </g>
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Page
   -------------------------------------------------------------------------- */

const Team = () => {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  const disciplines = [
    {
      num: '01',
      title: 'AI & INTELLIGENCE',
      desc: 'Researchers, engineers and builders creating intelligent systems and AI-powered experiences.',
    },
    {
      num: '02',
      title: 'PRODUCT & DESIGN',
      desc: 'Designers and product thinkers shaping how people experience what we build.',
    },
    {
      num: '03',
      title: 'ENGINEERING',
      desc: 'Engineers building the platforms, services and infrastructure behind every product.',
    },
    {
      num: '04',
      title: 'ENTERPRISE SOLUTIONS',
      desc: 'Teams designing systems that organisations depend on every day.',
    },
    {
      num: '05',
      title: 'ROBOTICS & IoT',
      desc: 'Builders extending intelligence into physical, connected environments.',
    },
    {
      num: '06',
      title: 'VENTURES & INNOVATION',
      desc: 'Operators turning early ideas into products and new technology ventures.',
    },
  ];

  const active = disciplines[activeDiscipline];

  return (
    <div className="tm-page">

      {/* ============================== HERO ============================== */}

      <header className="tm-hero">
        <div className="tm-container tm-hero__inner">
          <div className="tm-hero__grid">

            <div>
              <p className="tm-eyebrow tm-eyebrow--violet">
                Our People
              </p>

              <h1 className="tm-h1">
                THE PEOPLE
                <br />
                BUILDING
                <br />
                WHAT&rsquo;S NEXT.
              </h1>

              <p className="tm-body tm-body--hero tm-hero__text">
                Behind every product, system and venture at Zuntra is a team
                of people bringing different disciplines, perspectives and
                ideas together.
              </p>

              <p className="tm-note tm-hero__note">
                Different minds. Different disciplines. One ecosystem.
              </p>

              <div className="tm-hero__actions">
                <a className="tm-btn tm-btn--solid" href="#careers">
                  Join the Team &rarr;
                </a>

                <a className="tm-btn tm-btn--ghost" href="#leadership">
                  Explore Zuntra
                </a>
              </div>
            </div>

            <div className="tm-hero__visual">
              <HeroPeopleVisual />
            </div>

          </div>
        </div>
      </header>

      <div className="tm-hairline" />

      {/* ========================= EDITORIAL STATEMENT ==================== */}

      <section className="tm-section tm-section--light">
        <div className="tm-container tm-split">

          <div className="tm-editorial__title">
            <h2 className="tm-h2 tm-h2--md">
              GREAT TECHNOLOGY IS BUILT BY GREAT TEAMS.
            </h2>
          </div>

          <div className="tm-editorial__right">
            <div className="tm-rule" />

            <p className="tm-body">
              Zuntra brings together people working across intelligence,
              design, engineering, product, enterprise technology, robotics
              and ventures.
            </p>

            <p className="tm-body">
              We believe different disciplines become more powerful when they
              work together around meaningful problems.
            </p>

            <a className="tm-btn tm-btn--solid tm-btn--sm" href="#leadership">
              Meet the Team &darr;
            </a>
          </div>

        </div>
      </section>

      {/* ============================ LEADERSHIP ========================== */}

      <section
        className="tm-section tm-section--tint"
        id="leadership"
      >
        <div className="tm-container">

          <p className="tm-eyebrow">
            Leadership
          </p>

          <div className="tm-lead__head">

            <div className="tm-lead__title">
              <h2 className="tm-h2 tm-h2--xs">
                THE PEOPLE SETTING THE DIRECTION.
              </h2>
            </div>

            <div>
              <p className="tm-body--sm">
                The leadership team bringing Zuntra&rsquo;s products,
                technology and ventures together.
              </p>

              <p className="tm-lead__aside-note">
                Leadership profiles are placeholders. Replace with verified
                Zuntra team information.
              </p>
            </div>

          </div>

          <div className="tm-leaders">
            <article className="tm-leader tm-leader--violet">

              <div className="tm-leader__frame">
                <img src={deva} alt="Deva" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Deva</h3>
                <p className="tm-leader__role">
                  {/* [FOUNDER / CEO] */}
                </p>
              </div>
            </article>

            <article className="tm-leader tm-leader--blue">

              <div className="tm-leader__frame">
                <img src={hari} alt="Hari" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Hari</h3>
                <p className="tm-leader__role">
                  {/* [CO-FOUNDER / CTO] */}
                </p>
              </div>
            </article>

            <article className="tm-leader tm-leader--ink">

              <div className="tm-leader__frame">
                <img src={vignesh} alt="Vignesh" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Vignesh</h3>
                <p className="tm-leader__role">
                  {/* [HEAD OF PRODUCT] */}
                </p>
              </div>
            </article>

            <article className="tm-leader tm-leader--green">

              <div className="tm-leader__frame">
                <img src={kumudapriya} alt="Kumudapriya" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Kumudapriya</h3>
                <p className="tm-leader__role">
                  {/* [HEAD OF AI & INTELLIGENCE] */}
                </p>
              </div>
            </article>


            <article className="tm-leader tm-leader--ink">

              <div className="tm-leader__frame">
                <img src={indhumeenakshi} alt="indhumeenakshi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Indhumeenaakshi</h3>
                <p className="tm-leader__role">
                  {/* [HEAD OF ENTERPRISE] */}
                </p>
              </div>
            </article>

            <article className="tm-leader tm-leader--ink">

              <div className="tm-leader__frame">
                <img src={Sreeshaa} alt="Sreesha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Sirisha</h3>
                <p className="tm-leader__role">
                  {/* [HEAD OF ENTERPRISE] */}
                </p>
              </div>
            </article>

            <article className="tm-leader tm-leader--orange">

              <div className="tm-leader__frame">
                <img src={jana} alt="Jana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Jana</h3>
                <p className="tm-leader__role">
                  {/* [HEAD OF VENTURES] */}
                </p>
              </div>
            </article>

            <article className="tm-leader tm-leader--violet">

              <div className="tm-leader__frame">
                <img src={preneeth} alt="Preneeth" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <ul className="tm-leader__social">
                <li>
                  <a href="#">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div className="tm-leader__details">
                <h3 className="tm-leader__name" style={{ textTransform: 'uppercase' }}>Preneeth</h3>
                <p className="tm-leader__role">
                  {/* [LEAD DESIGNER] */}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =========================== DISCIPLINES ========================== */}

      <section className="tm-section tm-section--light">
        <div className="tm-container">

          <p className="tm-eyebrow">
            The Team
          </p>

          <div className="tm-disc__grid">

            <div>
              <h2 className="tm-h2 tm-h2--sm tm-disc__h2">
                MANY DISCIPLINES.
              </h2>

              <h2 className="tm-h2 tm-h2--sm tm-disc__h2">
                ONE DIRECTION.
              </h2>

              <p className="tm-body--sm tm-disc__text">
                Our teams bring together different ways of thinking &mdash;
                from engineering and artificial intelligence to design,
                product, operations and venture building.
              </p>

              <div className="tm-disc__list">

                {disciplines.map((d, i) => {
                  const isActive = i === activeDiscipline;

                  return (
                    <button
                      type="button"
                      key={d.num}
                      className={`tm-disc__item${isActive ? ' is-active' : ''
                        }`}
                      onClick={() => setActiveDiscipline(i)}
                      aria-expanded={isActive}
                    >
                      <span className="tm-disc__num">
                        {d.num}
                      </span>

                      <span className="tm-disc__body">
                        <span className="tm-disc__title">
                          {d.title}
                        </span>

                        {isActive && (
                          <span className="tm-disc__desc">
                            {d.desc}
                          </span>
                        )}
                      </span>

                      <span
                        className="tm-disc__arrow"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            <div>
              <div className="tm-disc__diagram">
                <DisciplineDiagram
                  activeIndex={activeDiscipline}
                />
              </div>

              <div className="tm-disc__legend">
                <p className="tm-disc__legendNum">
                  {active.num}
                </p>

                <p className="tm-disc__legendLabel">
                  {active.title}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================== LIFE AT ZUNTRA ======================= */}

      <section className="tm-section tm-section--tint">
        <div className="tm-container">

          <p className="tm-eyebrow">
            Life at Zuntra
          </p>

          <div className="tm-life__head">

            <div className="tm-life__title">
              <h2 className="tm-h2 tm-h2--sm">
                WE BUILD TOGETHER.
              </h2>
            </div>

            <div className="tm-life__lines">
              <p className="tm-body--loose">
                The work matters.
              </p>

              <p className="tm-body--loose">
                So does the way we work together.
              </p>
            </div>

          </div>
        </div>

        <div
          className="tm-gallery-wrapper"
          style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            marginTop: '4rem',
            background: '#F7F7F5'
          }}
        >
          <DomeGallery images={fullTeamImages} fit={0.8} grayscale={false} overlayBlurColor="#F7F7F5" />
        </div>


      </section>

      {/* ========================= CULTURE STATEMENT ====================== */}

      <section className="tm-section tm-section--light">
        <div className="tm-container tm-split">

          <div>
            <h2 className="tm-h2 tm-h2--sm">
              HOW WE WORK MATTERS AS MUCH AS WHAT WE BUILD.
            </h2>

            <p className="tm-body--loose tm-culture__text">
              We work across disciplines, challenge assumptions, share ideas
              openly and stay focused on building things that create real
              value.
            </p>
          </div>

          <div>

            <div className="tm-culture__row tm-culture--violet">
              <span className="tm-culture__num">
                01
              </span>

              <h3 className="tm-culture__title">
                Think deeply.
              </h3>

              <span className="tm-culture__dot" />
            </div>

            <div className="tm-culture__row tm-culture--blue">
              <span className="tm-culture__num">
                02
              </span>

              <h3 className="tm-culture__title">
                Build together.
              </h3>

              <span className="tm-culture__dot" />
            </div>

            <div className="tm-culture__row tm-culture--green">
              <span className="tm-culture__num">
                03
              </span>

              <h3 className="tm-culture__title">
                Stay curious.
              </h3>

              <span className="tm-culture__dot" />
            </div>

            <div className="tm-culture__row tm-culture--orange">
              <span className="tm-culture__num">
                04
              </span>

              <h3 className="tm-culture__title">
                Make it real.
              </h3>

              <span className="tm-culture__dot" />
            </div>

          </div>

        </div>
      </section>

      {/* ======================== ECOSYSTEM CONNECTION ==================== */}

      <section className="tm-section tm-section--tint">
        <div className="tm-container">

          <div className="tm-eco__head">

            <p className="tm-eyebrow tm-eyebrow--center">
              One Team. Many Ways to Build.
            </p>

            <h2 className="tm-h2 tm-h2--sm">
              PEOPLE POWER THE ECOSYSTEM.
            </h2>

            <p className="tm-eco__text">
              Every product, enterprise system, and venture at Zuntra starts
              with people &mdash; different disciplines, working together
              toward the same direction.
            </p>

          </div>

          <div className="tm-eco__flow">

            <span className="tm-eco__pill tm-eco--blue">
              PEOPLE
            </span>

            <span className="tm-eco__connector" />

            <span className="tm-eco__pill tm-eco--violet">
              IDEAS
            </span>

            <span className="tm-eco__connector" />

            <span className="tm-eco__pill tm-eco--green">
              AI &amp; TECHNOLOGY
            </span>

            <span className="tm-eco__connector" />

            <span className="tm-eco__pill tm-eco--orange">
              PRODUCTS
            </span>

            <span className="tm-eco__connector" />

            <span className="tm-eco__pill tm-eco--amber">
              ENTERPRISE SYSTEMS
            </span>

            <span className="tm-eco__connector" />

            <span className="tm-eco__pill tm-eco--pink">
              VENTURES
            </span>

            <span className="tm-eco__connector" />

            <span className="tm-eco__pill tm-eco--blue">
              IMPACT
            </span>

          </div>

          <div className="tm-eco__strip">
            <EcosystemStrip />
          </div>

        </div>
      </section>

      {/* ============================ CAREERS CTA ========================= */}

      <section className="tm-careers" id="careers">

        <div
          className="tm-careers__art"
          aria-hidden="true"
        >
          <CareersArt />
        </div>

        <div className="tm-container">

          <div className="tm-careers__inner">

            <p className="tm-eyebrow tm-eyebrow--green">
              Careers at Zuntra
            </p>

            <h2 className="tm-h2 tm-h2--lg">
              BUILD WHAT&rsquo;S NEXT.
              <br />
              WITH US.
            </h2>

            <p className="tm-careers__text">
              We&rsquo;re always looking for curious people who want to work
              across technology, products, intelligence and new ideas.
            </p>

            <div className="tm-careers__actions">

              <a
                className="tm-btn tm-btn--onDark"
                href="#0"
              >
                View Open Positions &rarr;
              </a>

              <a
                className="tm-btn tm-btn--onDark"
                href="#0"
              >
                Life at Zuntra
              </a>

            </div>

            <p className="tm-careers__fine">
              No exaggerated claims about culture. No invented benefits.
              Just the work and the people doing it.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;