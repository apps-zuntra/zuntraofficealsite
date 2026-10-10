import React from 'react';
import SideGridLines from '../../components/SideGridLines';
import './MissionVision.css';

const LAYERS = [
  { label: 'IDEAS', variant: 'amber' },
  { label: 'DESIGN', variant: 'pink' },
  { label: 'TECHNOLOGY', variant: 'blue' },
  { label: 'PRODUCTS', variant: 'violet' },
  { label: ['ENTERPRISE', 'SYSTEMS'], variant: 'orange' },
  { label: 'VENTURES', variant: 'green' },
  { label: 'IMPACT', variant: 'blue' },
];

const CAPABILITIES = [
  {
    variant: 'violet',
    title: 'AI & Intelligence',
    text: 'AI systems, agents and intelligent workflows built around real business problems.',
  },
  {
    variant: 'blue',
    title: 'Product Engineering',
    text: 'Digital products designed and engineered from concept through production.',
  },
  {
    variant: 'orange',
    title: 'Automation & Data',
    text: 'Systems that connect information, people and actions across organisations.',
  },
  {
    variant: 'green',
    title: 'Digital Experiences',
    text: 'Enterprise platforms and experiences designed around the people who use them.',
  },
  {
    variant: 'amber',
    title: 'Robotics & IoT',
    text: 'Connected systems that extend intelligence beyond the screen.',
  },
  {
    variant: 'pink',
    title: 'Venture Building',
    text: 'New products and technology ventures built from emerging opportunities.',
  },
];

const FLOW = [
  { label: 'IDEA', variant: 'amber' },
  { label: 'INTELLIGENCE', variant: 'violet' },
  { label: 'SYSTEM', variant: 'blue' },
  { label: 'PRODUCT', variant: 'green' },
  { label: 'ACTION', variant: 'orange' },
];

const VALUES = [
  {
    num: '01',
    variant: 'violet',
    title: 'Technology should be useful.',
    text: 'Technology should solve meaningful problems rather than exist for technology’s sake.',
  },
  {
    num: '02',
    variant: 'blue',
    title: 'Complexity should become clarity.',
    text: 'The best systems make complicated things easier to understand and use.',
  },
  {
    num: '03',
    variant: 'green',
    title: 'Great products connect people and systems.',
    text: 'Technology becomes more valuable when people, information and actions work together.',
  },
  {
    num: '04',
    variant: 'orange',
    title: 'Innovation should become something real.',
    text: 'Ideas matter most when they become products, systems or experiences people can actually use.',
  },
  {
    num: '05',
    variant: 'pink',
    title: 'Build for what comes next.',
    text: 'We design with today’s problems in mind while creating systems that can evolve with tomorrow.',
  },
];

const DISCIPLINES = [
  { label: 'AI & INTELLIGENCE', variant: 'violet' },
  { label: 'PRODUCT ENGINEERING', variant: 'blue' },
  { label: 'AUTOMATION & DATA', variant: 'orange' },
  { label: 'DIGITAL EXPERIENCES', variant: 'green' },
  { label: 'ROBOTICS & IoT', variant: 'amber' },
  { label: 'VENTURE BUILDING', variant: 'pink' },
];

const STACK = [
  { label: 'DATA', variant: 'blue' },
  { label: 'INTELLIGENCE', variant: 'violet' },
  { label: 'AGENTS', variant: 'green' },
  { label: 'AUTOMATION', variant: 'orange' },
  { label: 'PRODUCTS', variant: 'amber' },
  { label: 'IMPACT', variant: 'pink' },
];

const ECOSYSTEM = [
  {
    label: 'PRODUCTS',
    variant: 'violet',
    items: ['Huzzler', 'Wiviy', 'Rentit'],
  },
  {
    label: 'ENTERPRISE',
    variant: 'blue',
    items: ['Entwy Design', 'Entwy AI'],
  },
  {
    label: 'VENTURES',
    variant: 'green',
    items: ['Z01 Crew', 'Mungo', 'Zuca'],
  },
  {
    label: 'INNOVATION',
    variant: 'orange',
    items: ['Robotics', 'IoT', 'Automation'],
  },
  {
    label: 'RESEARCH',
    variant: 'amber',
    items: ['Applied AI', 'Systems design'],
  },
];

function edgeLine(x1, y1, r1, x2, y2, r2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;

  const ux = dx / len;
  const uy = dy / len;

  return {
    x1: x1 + ux * r1,
    y1: y1 + uy * r1,
    x2: x2 - ux * r2,
    y2: y2 - uy * r2,
  };
}

/* -------------------------------------------------------------------------- */
/* Hero: layered architecture sketch                                         */
/* -------------------------------------------------------------------------- */

function HeroArchVisual() {
  const [activeBranch, setActiveBranch] = React.useState(null);

  const branches = [
    {
      id: 'ai',
      label: 'AI & INTELLIGENCE',
      y: 42,
      color: '#8B5CF6',
      icon: 'ai',
      dur: '3.2s',
    },
    {
      id: 'products',
      label: 'DIGITAL PRODUCTS',
      y: 88,
      color: '#3B82F6',
      icon: 'products',
      dur: '3.6s',
    },
    {
      id: 'enterprise',
      label: 'ENTERPRISE SYSTEMS',
      y: 134,
      color: '#6366F1',
      icon: 'enterprise',
      dur: '3.0s',
    },
    {
      id: 'data',
      label: 'AUTOMATION & DATA',
      y: 180,
      color: '#F97316',
      icon: 'data',
      dur: '2.8s',
    },
    {
      id: 'design',
      label: 'DESIGN & EXPERIENCES',
      y: 226,
      color: '#F59E0B',
      icon: 'design',
      dur: '3.4s',
    },
    {
      id: 'robotics',
      label: 'ROBOTICS & IoT',
      y: 272,
      color: '#10B981',
      icon: 'robotics',
      dur: '3.7s',
    },
    {
      id: 'ventures',
      label: 'VENTURES & IMPACT',
      y: 318,
      color: '#EC4899',
      icon: 'ventures',
      dur: '3.3s',
    },
  ];

  const startX = 135;
  const startY = 180;
  const splitX = 180;
  const curveEndX = 255;
  const endX = 330;

  const getPath = (targetY) => {
    if (targetY === startY) {
      return `M ${startX} ${startY} L ${endX} ${startY}`;
    }
    return `M ${startX} ${startY} C ${splitX} ${startY}, ${splitX + 15} ${targetY}, ${curveEndX} ${targetY} L ${endX} ${targetY}`;
  };

  const renderIcon = (type, color) => {
    switch (type) {
      case 'ai':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
          </g>
        );
      case 'products':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
            <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
          </g>
        );
      case 'enterprise':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </g>
        );
      case 'data':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="12" cy="12" r="3" fill={color} />
            <circle cx="5" cy="7" r="2" />
            <circle cx="19" cy="7" r="2" />
            <circle cx="5" cy="17" r="2" />
            <circle cx="19" cy="17" r="2" />
            <path d="M12 9V7M12 15v2M8 10L6 8M16 14l2 2" strokeDasharray="1.5 1.5" />
          </g>
        );
      case 'design':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="9" cy="12" r="6" />
            <circle cx="15" cy="12" r="6" />
          </g>
        );
      case 'robotics':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <circle cx="9" cy="11" r="1.5" fill={color} />
            <circle cx="15" cy="11" r="1.5" fill={color} />
            <path d="M9 15h6M12 2v3" />
          </g>
        );
      case 'ventures':
        return (
          <g transform="translate(-8, -8) scale(0.68)" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 2l2.4 6.6L21 11l-5.4 4.4L17 22l-5-3.8-5 3.8 1.4-6.6L3 11l6.6-2.4L12 2z" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mv-hero-tree">
      <svg
        viewBox="0 0 540 360"
        className="mv-hero-tree__svg"
        role="img"
        aria-label="Zuntra architecture neural pipeline"
      >
        <defs>
          {/* Card shadow */}
          <filter id="mv-tree-card-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.28" />
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0F172A" floodOpacity="0.12" />
          </filter>

          {/* Glow filter for traveling pulse beads */}
          <filter id="mv-pulse-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for trunk/branches */}
          <linearGradient id="mv-tree-stem-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.35" />
          </linearGradient>

          {/* Card background gradient */}
          <linearGradient id="mv-tree-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E2028" />
            <stop offset="100%" stopColor="#0B0C10" />
          </linearGradient>
        </defs>

        {/* Background ambient trunk flare */}
        <path
          d={`M ${startX} ${startY} C ${splitX - 10} ${startY}, ${splitX} 42, ${curveEndX} 42 L ${endX} 42`}
          fill="none"
          stroke="rgba(139, 92, 246, 0.08)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d={`M ${startX} ${startY} C ${splitX - 10} ${startY}, ${splitX} 318, ${curveEndX} 318 L ${endX} 318`}
          fill="none"
          stroke="rgba(56, 189, 248, 0.08)"
          strokeWidth="18"
          strokeLinecap="round"
        />

        {/* Branch lines */}
        {branches.map((b) => {
          const pathD = getPath(b.y);
          const isActive = activeBranch === b.id;

          return (
            <g
              key={`branch-${b.id}`}
              className={`mv-hero-tree__branch ${isActive ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveBranch(b.id)}
              onMouseLeave={() => setActiveBranch(null)}
            >
              {/* Outer soft tube track */}
              <path
                d={pathD}
                fill="none"
                stroke={isActive ? b.color : 'url(#mv-tree-stem-gradient)'}
                strokeWidth={isActive ? '7' : '5'}
                strokeOpacity={isActive ? 0.9 : 0.35}
                strokeLinecap="round"
                className="mv-hero-tree__track"
              />

              {/* Inner core flow line */}
              <path
                d={pathD}
                fill="none"
                stroke={isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'}
                strokeWidth="1.5"
                strokeOpacity={isActive ? 1 : 0.5}
                className="mv-hero-tree__coreLine"
              />

              {/* Animated traveling pulse bead (Left to Right) */}
              <g className="mv-hero-tree__bead">
                <circle r="4.5" fill={b.color} filter="url(#mv-pulse-glow)">
                  <animateMotion
                    path={pathD}
                    dur={b.dur}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="2" fill="#FFFFFF">
                  <animateMotion
                    path={pathD}
                    dur={b.dur}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* Branch Output Target Item (Right) */}
              <g
                className="mv-hero-tree__target"
                transform={`translate(355, ${b.y})`}
              >
                {/* Icon Container Disc */}
                <circle
                  cx="0"
                  cy="0"
                  r="13"
                  fill="#FFFFFF"
                  stroke={isActive ? b.color : 'rgba(15, 23, 42, 0.08)'}
                  strokeWidth={isActive ? '1.8' : '1'}
                  filter="url(#mv-tree-card-shadow)"
                  className="mv-hero-tree__iconDisc"
                />

                {/* Render Custom Vector Icon */}
                <g className="mv-hero-tree__iconGlyph">
                  {renderIcon(b.icon, b.color)}
                </g>

                {/* Active Indicator Pulse Dot */}
                <circle
                  cx="22"
                  cy="0"
                  r="2.5"
                  fill={b.color}
                  className="mv-hero-tree__statusDot"
                />

                {/* Label Text */}
                <text
                  x="32"
                  y="3.5"
                  dominantBaseline="middle"
                  fontFamily="Lato, sans-serif"
                  fontSize="9.5"
                  fontWeight="700"
                  letterSpacing="0.8px"
                  fill={isActive ? '#0F172A' : '#475569'}
                  className="mv-hero-tree__label"
                >
                  {b.label}
                </text>
              </g>
            </g>
          );
        })}

        {/* Central Left Card: ZUNTRA HUB */}
        <g
          className="mv-hero-tree__cardGroup"
          transform="translate(20, 125)"
        >
          {/* Subtle Ambient Glow */}
          <rect
            x="-4"
            y="-4"
            width="118"
            height="118"
            rx="20"
            fill="rgba(139, 92, 246, 0.18)"
            filter="url(#mv-pulse-glow)"
          />

          {/* Card Body */}
          <rect
            x="0"
            y="0"
            width="110"
            height="110"
            rx="18"
            fill="url(#mv-tree-card-bg)"
            stroke="rgba(255, 255, 255, 0.14)"
            strokeWidth="1.2"
            filter="url(#mv-tree-card-shadow)"
            className="mv-hero-tree__card"
          />

          {/* Card Decorative Top Accent */}
          <rect
            x="35"
            y="0"
            width="40"
            height="2"
            fill="url(#mv-tree-stem-gradient)"
            rx="1"
          />

          {/* AI Neural / Constellation Logo Icon */}
          <g transform="translate(55, 42)">
            <circle cx="0" cy="-10" r="3" fill="#38BDF8" />
            <circle cx="-10" cy="8" r="3" fill="#818CF8" />
            <circle cx="10" cy="8" r="3" fill="#C084FC" />
            <line x1="0" y1="-10" x2="-10" y2="8" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="-10" y1="8" x2="10" y2="8" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.8" />
            <line x1="10" y1="8" x2="0" y2="-10" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.8" />
            <circle cx="0" cy="2" r="1.5" fill="#FFFFFF" />
          </g>

          {/* ZUNTRA Brand Text */}
          <text
            x="55"
            y="82"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Lato, sans-serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="2.5px"
            fill="#FFFFFF"
            className="mv-hero-tree__brandText"
          >
            ZUNTRA
          </text>
        </g>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Story: seven connected layers                                              */
/* -------------------------------------------------------------------------- */

function StoryLayerDiagram() {
  const r = 37.7;
  const cy = 48.5;
  const first = 80.8;
  const pitch = 161.6;

  return (
    <svg
      viewBox="0 0 1131.2 96.95"
      role="img"
      aria-label="From ideas to impact"
    >
      {LAYERS.map((node, index) => {
        const cx = first + index * pitch;
        const next = first + (index + 1) * pitch;
        const lines = Array.isArray(node.label)
          ? node.label
          : [node.label];

        return (
          <g
            key={lines.join(' ')}
            className={`mv-story-layer mv-color--${node.variant}`}
          >
            {index < LAYERS.length - 1 && (
              <line
                x1={cx + r}
                y1={cy}
                x2={next - r}
                y2={cy}
                className="mv-story-layer__line"
              />
            )}

            <circle
              cx={cx}
              cy={cy}
              r={r}
              className="mv-story-layer__circle"
            />

            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Lato, sans-serif"
              fontSize="10.1"
              fontWeight="700"
              className="mv-story-layer__text"
            >
              {lines.map((line, lineIndex) => (
                <tspan
                  key={line}
                  x={cx}
                  dy={
                    lineIndex === 0
                      ? lines.length > 1
                        ? -5
                        : 0
                      : 12
                  }
                >
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Mission: idea → action flow                                                */
/* -------------------------------------------------------------------------- */

function MissionFlowVisual() {
  const r = 52;
  const cy = 60;
  const first = 90;
  const pitch = 205;

  return (
    <div className="mv-mission-flow-wrap">
      <svg
        viewBox="0 0 1000 120"
        role="img"
        aria-label="Idea, intelligence, system, product, action"
      >
        {FLOW.map((node, index) => {
          const cx = first + index * pitch;
          const next = first + (index + 1) * pitch;

          return (
            <g
              key={node.label}
              className={`mv-mission-flow mv-color--${node.variant}`}
            >
              {index < FLOW.length - 1 && (
                <line
                  x1={cx + r}
                  y1={cy}
                  x2={next - r}
                  y2={cy}
                  className="mv-mission-flow__line"
                />
              )}

              <circle
                cx={cx}
                cy={cy}
                r={r}
                className="mv-mission-flow__circle"
              />

              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Lato, sans-serif"
                fontSize={node.label === 'INTELLIGENCE' ? 11.5 : 12.5}
                fontWeight="700"
                className="mv-mission-flow__text"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Dark section: stacked architecture                                         */
/* -------------------------------------------------------------------------- */

function DarkArchDiagram() {
  const rowTop = (index) => 24 + index * 70;
  const leftBar = [15, 22, 29, 36, 43, 50];
  const rightBar = [20, 25, 30, 35, 40, 45];

  return (
    <svg
      viewBox="0 0 480 440"
      role="img"
      aria-label="Zuntra intelligence stack"
    >
      {STACK.map((node, index) => {
        const y = rowTop(index);

        return (
          <g
            key={node.label}
            className={`mv-dark-stack mv-color--${node.variant}`}
          >
            {index > 0 && (
              <line
                x1="240"
                y1={y - 38}
                x2="240"
                y2={y}
                className="mv-dark-stack__connector"
              />
            )}

            <rect
              x="92"
              y={y + 8}
              width="70"
              height="16"
              className="mv-dark-stack__satellite"
            />

            <rect
              x="94"
              y={y + 12}
              width={leftBar[index]}
              height="8"
              className="mv-dark-stack__bar mv-dark-stack__bar--left"
            />

            <rect
              x="170"
              y={y}
              width="140"
              height="32"
              className="mv-dark-stack__core"
            />

            <rect
              x="170"
              y={y}
              width="4"
              height="32"
              className="mv-dark-stack__accent"
            />

            <text
              x="184"
              y={y + 17}
              dominantBaseline="middle"
              fontFamily="Lato, sans-serif"
              fontSize="10"
              fontWeight="700"
              className="mv-dark-stack__label"
            >
              {node.label}
            </text>

            <rect
              x="320"
              y={y + 8}
              width="60"
              height="16"
              className="mv-dark-stack__satellite"
            />

            <rect
              x="322"
              y={y + 12}
              width={rightBar[index]}
              height="8"
              className="mv-dark-stack__bar mv-dark-stack__bar--right"
            />
          </g>
        );
      })}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Vision: ecosystem map                                                      */
/* -------------------------------------------------------------------------- */

function VisionEcosystem() {
  const [activeNode, setActiveNode] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nodes = [
    {
      id: 'data',
      label: 'DATA',
      variant: 'orange',
      color: '#F97316',
      cx: 166,
      cy: 225,
      r: 32,
      icon: 'data',
      delay: '0s',
      subtitle: 'Intelligence & Flow',
    },
    {
      id: 'design',
      label: 'DESIGN',
      variant: 'amber',
      color: '#F59E0B',
      cx: 262,
      cy: 145,
      r: 32,
      icon: 'design',
      delay: '0.35s',
      subtitle: 'Experience Architecture',
    },
    {
      id: 'ai',
      label: 'AI',
      variant: 'violet',
      color: '#8B5CF6',
      cx: 376,
      cy: 94,
      r: 34,
      icon: 'ai',
      delay: '0.7s',
      subtitle: 'Cognitive & Agent Systems',
    },
    {
      id: 'impact',
      label: 'IMPACT',
      variant: 'blue',
      color: '#0284C7',
      cx: 500,
      cy: 76,
      r: 34,
      icon: 'impact',
      delay: '1.05s',
      subtitle: 'Real-World Outcomes',
    },
    {
      id: 'products',
      label: 'PRODUCTS',
      variant: 'blue',
      color: '#3B82F6',
      cx: 624,
      cy: 94,
      r: 34,
      icon: 'products',
      delay: '1.4s',
      subtitle: 'Digital Platforms',
    },
    {
      id: 'ventures',
      label: 'VENTURES',
      variant: 'green',
      color: '#10B981',
      cx: 738,
      cy: 145,
      r: 32,
      icon: 'ventures',
      delay: '1.75s',
      subtitle: 'High-Impact Ventures',
    },
    {
      id: 'enterprise',
      label: 'ENTERPRISE',
      variant: 'pink',
      color: '#EC4899',
      cx: 834,
      cy: 225,
      r: 32,
      icon: 'enterprise',
      delay: '2.1s',
      subtitle: 'Enterprise Solutions',
    },
  ];

  const core = {
    cx: 500,
    cy: 295,
    r: 44,
  };

  const renderIcon = (type, color) => {
    switch (type) {
      case 'ai':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14" />
            <circle cx="12" cy="12" r="3" fill={color} fillOpacity="0.15" />
          </g>
        );
      case 'products':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
            <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
          </g>
        );
      case 'data':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="12" cy="12" r="3" fill={color} />
            <circle cx="6" cy="7" r="2" />
            <circle cx="18" cy="7" r="2" />
            <circle cx="6" cy="17" r="2" />
            <circle cx="18" cy="17" r="2" />
            <path d="M12 9V7M12 15v2M9.5 10.5L7.5 8.5M14.5 13.5l2 2M14.5 10.5l2-2M9.5 13.5l-2 2" strokeDasharray="1.5 1.5" />
          </g>
        );
      case 'ventures':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 2l2.4 6.6L21 11l-5.4 4.4L17 22l-5-3.8-5 3.8 1.4-6.6L3 11l6.6-2.4L12 2z" />
          </g>
        );
      case 'design':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="10" cy="12" r="6" />
            <circle cx="14" cy="12" r="6" />
            <path d="M12 6.5v11" />
          </g>
        );
      case 'enterprise':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <rect x="4" y="4" width="6" height="6" rx="1.5" />
            <rect x="14" y="4" width="6" height="6" rx="1.5" />
            <rect x="4" y="14" width="6" height="6" rx="1.5" />
            <rect x="14" y="14" width="6" height="6" rx="1.5" />
            <path d="M10 7h4M7 10v4M17 10v4M10 17h4" />
          </g>
        );
      case 'impact':
        return (
          <g transform="translate(-11, -11) scale(0.92)" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 4a8 8 0 0 1 0 16" strokeDasharray="2 2" />
            <path d="M4 12h16" />
            <circle cx="12" cy="12" r="3" fill={color} />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`mv-arc-ecosystem ${isVisible ? 'is-visible' : ''}`}
    >
      <svg
        viewBox="0 0 1000 354"
        className="mv-arc-ecosystem__svg"
        role="img"
        aria-label="Zuntra ecosystem arc diagram"
      >
        <defs>
          {/* Clip path for sweeping left-to-right arc reveal */}
          <clipPath id="mv-arc-reveal-clip">
            <rect
              x="0"
              y="0"
              width="1000"
              height="360"
              className="mv-arc-ecosystem__clipRect"
            />
          </clipPath>

          {/* Node drop shadow */}
          <filter id="mv-pod-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0F172A" floodOpacity="0.08" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
          </filter>

          <filter id="mv-core-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor="#000000" floodOpacity="0.22" />
          </filter>

          <filter id="mv-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial ambient glow */}
          <radialGradient id="mv-ambient-glow" cx="50%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          {/* Arc gradient stroke */}
          <linearGradient id="mv-arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.6" />
            <stop offset="25%" stopColor="#8B5CF6" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
          </linearGradient>

          {/* Core gradient */}
          <radialGradient id="mv-core-gradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#2A2B32" />
            <stop offset="100%" stopColor="#0B0C10" />
          </radialGradient>
        </defs>

        {/* Ambient subtle backdrop */}
        <ellipse cx="500" cy="200" rx="450" ry="170" fill="url(#mv-ambient-glow)" className="mv-arc-ecosystem__ambientGlow" />

        {/* Outer concentric guide arc */}
        <path
          d="M 60 340 A 520 520 0 0 1 940 340"
          fill="none"
          stroke="rgba(15, 23, 42, 0.06)"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="mv-arc-ecosystem__guideArc"
        />

        {/* Inner concentric guide arc */}
        <path
          d="M 210 290 A 370 370 0 0 1 790 290"
          fill="none"
          stroke="rgba(15, 23, 42, 0.05)"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="mv-arc-ecosystem__guideArc"
        />

        {/* Connective dashed beams from Core to Nodes (sweeps left to right) */}
        {nodes.map((node, idx) => (
          <line
            key={`beam-${node.id}`}
            x1={core.cx}
            y1={core.cy}
            x2={node.cx}
            y2={node.cy}
            className="mv-arc-ecosystem__beam"
            stroke={node.color}
            strokeDasharray="3 4"
            style={{
              '--beam-delay': `${idx * 0.12 + 0.2}s`,
              opacity: activeNode === node.id ? 0.6 : undefined,
            }}
          />
        ))}

        {/* Sweeping Arc Group clipped for left-to-right reveal */}
        <g clipPath="url(#mv-arc-reveal-clip)">
          {/* Main Sweeping Orbital Dashed Arc */}
          <path
            id="mv-main-arc"
            d="M 100 320 A 450 450 0 0 1 900 320"
            fill="none"
            className="mv-arc-ecosystem__track"
          />

          {/* Dynamic Animated Pulse along Arc (Left to Right) */}
          <path
            d="M 100 320 A 450 450 0 0 1 900 320"
            fill="none"
            stroke="url(#mv-arc-gradient)"
            strokeWidth="2.5"
            strokeDasharray="14 14"
            className="mv-arc-ecosystem__flow"
          />

          {/* Traveling Photon Light Beam (Left to Right) */}
          <g className="mv-arc-ecosystem__photon">
            <circle r="4" fill="#38BDF8" filter="url(#mv-glow-filter)">
              <animateMotion
                path="M 100 320 A 450 450 0 0 1 900 320"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2" fill="#FFFFFF">
              <animateMotion
                path="M 100 320 A 450 450 0 0 1 900 320"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </g>

        {/* Central Core: ZUNTRA */}
        <g className="mv-arc-ecosystem__coreGroup">
          {/* Animated ripple rings */}
          <circle
            cx={core.cx}
            cy={core.cy}
            r={core.r + 14}
            fill="none"
            stroke="#0F172A"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="mv-arc-ecosystem__coreRing"
          />

          <circle
            cx={core.cx}
            cy={core.cy}
            r={core.r + 6}
            fill="none"
            stroke="rgba(139, 92, 246, 0.25)"
            strokeWidth="1.5"
            className="mv-arc-ecosystem__corePulse"
          />

          {/* Core Body */}
          <circle
            cx={core.cx}
            cy={core.cy}
            r={core.r}
            fill="url(#mv-core-gradient)"
            filter="url(#mv-core-shadow)"
            className="mv-arc-ecosystem__coreBody"
          />

          {/* Inner Accent Ring */}
          <circle
            cx={core.cx}
            cy={core.cy}
            r={core.r - 4}
            fill="none"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
          />

          {/* Core Text */}
          <text
            x={core.cx}
            y={core.cy + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Lato, sans-serif"
            fontSize="14"
            fontWeight="800"
            letterSpacing="2.5px"
            fill="#FFFFFF"
            className="mv-arc-ecosystem__coreText"
          >
            ZUNTRA
          </text>
        </g>

        {/* Interactive Floating Node Pods along the Arc (Revealed Left-to-Right) */}
        {nodes.map((node, idx) => {
          const isActive = activeNode === node.id;

          return (
            <g
              key={node.id}
              className={`mv-arc-ecosystem__node mv-color--${node.variant} ${isActive ? 'is-active' : ''}`}
              transform={`translate(${node.cx}, ${node.cy})`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              tabIndex={0}
              role="button"
              aria-label={`${node.label}: ${node.subtitle}`}
            >
              {/* Entrance reveal wrapper for Left-to-Right scroll stagger */}
              <g
                className="mv-arc-ecosystem__podReveal"
                style={{
                  '--enter-delay': `${idx * 0.14 + 0.2}s`,
                }}
              >
                {/* Inner floating container */}
                <g
                  className="mv-arc-ecosystem__podFloat"
                  style={{
                    '--node-delay': node.delay,
                    '--node-color': node.color,
                  }}
                >
                  {/* Colored ambient glow ring on hover/active */}
                  <circle
                    cx="0"
                    cy="0"
                    r={node.r + 8}
                    fill={node.color}
                    opacity={isActive ? 0.22 : 0}
                    className="mv-arc-ecosystem__podGlow"
                  />

                  {/* White Pod Disc Base */}
                  <circle
                    cx="0"
                    cy="0"
                    r={node.r}
                    fill="#FFFFFF"
                    stroke={isActive ? node.color : 'rgba(15, 23, 42, 0.1)'}
                    strokeWidth={isActive ? 2 : 1.2}
                    filter="url(#mv-pod-shadow)"
                    className="mv-arc-ecosystem__podDisc"
                  />

                  {/* Inner Accent Ring */}
                  <circle
                    cx="0"
                    cy="0"
                    r={node.r - 4}
                    fill="none"
                    stroke={node.color}
                    strokeOpacity={isActive ? 0.35 : 0.12}
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />

                  {/* Vector Icon */}
                  <g className="mv-arc-ecosystem__podIcon">
                    {renderIcon(node.icon, node.color)}
                  </g>

                  {/* Node Label underneath */}
                  <text
                    x="0"
                    y={node.r + 18}
                    textAnchor="middle"
                    fontFamily="Lato, sans-serif"
                    fontSize="11"
                    fontWeight="700"
                    letterSpacing="1.2px"
                    fill="#1E293B"
                    className="mv-arc-ecosystem__podLabel"
                  >
                    {node.label}
                  </text>

                  {/* Subtitle / Category indicator */}
                  <text
                    x="0"
                    y={node.r + 32}
                    textAnchor="middle"
                    fontFamily="Lato, sans-serif"
                    fontSize="9.5"
                    fontWeight="400"
                    fill="#64748B"
                    className="mv-arc-ecosystem__podSub"
                  >
                    {node.subtitle}
                  </text>
                </g>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

const MissionVision = () => {
  return (
    <div className="mv-page">
      <SideGridLines />
      {/* ============================== HERO ============================== */}

      <header className="mv-hero">
        <div className="mv-container mv-hero__inner">
          <div className="mv-hero__grid">
            <div className="mv-hero__copy">
              <p className="mv-eyebrow mv-eyebrow--violet">
                About Zuntra
              </p>

              <h1 className="mv-h1">
                BUILDING
                <br />
                WHAT&rsquo;S
                <br />
                NEXT.
              </h1>

              <p className="mv-body mv-hero__text">
                Zuntra builds intelligent systems, digital products and
                technology ventures that turn ambitious ideas into real-world
                impact.
              </p>

              <div className="mv-hero__actions">
                <a className="mv-btn mv-btn--solid" href="#contact">
                  Let&rsquo;s Talk &rarr;
                </a>

                <a className="mv-btn mv-btn--ghost" href="#capabilities">
                  Explore What We Build
                </a>
              </div>
            </div>

            <div className="mv-hero__visual">
              <HeroArchVisual />
            </div>
          </div>
        </div>
      </header>

      <div className="mv-hairline" />

      {/* ========================== WHY WE EXIST ========================== */}

      <section className="mv-section mv-section--light mv-why-section">
        <div className="mv-container mv-why__container">
          <h2 className="mv-why__centeredTitle">
            Technology is only powerful when it
            <br />
            becomes useful.
          </h2>

          <div className="mv-why__centeredBody">
            <p className="mv-why__text">
              Technology should not exist for technology&rsquo;s sake.
            </p>

            <p className="mv-why__text">
              It should make difficult things possible, make useful things
              better, and turn ambitious ideas into something real.
            </p>

            <p className="mv-why__text">
              That is the standard Zuntra holds every system, product, and
              venture to.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ OUR STORY =========================== */}

      <section
        className="mv-section mv-section--light mv-story-section"
        id="capabilities"
      >
        <div className="mv-container mv-story__container">
          <div className="mv-story__header">
            <h2 className="mv-story__title">
              From ideas to systems.
            </h2>

            <p className="mv-story__subtitle">
              Zuntra operates at every layer of technology &mdash; from the
              first idea through design, engineering, AI, enterprise systems,
              and new ventures. Each layer reinforces the others and all of
              them connect.
            </p>
          </div>

          <div className="mv-diagram">
            <StoryLayerDiagram />
          </div>

          <div className="mv-story-grid">
            {CAPABILITIES.map((capability) => (
              <article
                className={`mv-story-card mv-color--${capability.variant}`}
                key={capability.title}
              >
                <div className="mv-story-card__rule" />

                <h3 className="mv-story-card__title">
                  {capability.title}
                </h3>

                <p className="mv-story-card__text">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= MISSION ============================ */}

      {/* ============================= MISSION ============================ */}

      <section className="mv-section mv-section--light mv-mission-section">
        <div className="mv-container mv-mission__container">
          <div className="mv-mission__header">
            <h2 className="mv-mission__centeredTitle">
              Build technology that moves ideas into action.
            </h2>

            <p className="mv-mission__centeredSubtitle">
              We build intelligent systems, digital products and technology
              ventures that help people and organizations turn ideas into
              meaningful outcomes.
            </p>
          </div>

          <div className="mv-mission__flow">
            <MissionFlowVisual />
          </div>
        </div>
      </section>

      {/* ============================== VALUES ============================ */}

      <section className="mv-section mv-section--light mv-values-section">
        <div className="mv-container mv-values__container">
          <h2 className="mv-values__centeredTitle">
            How we think shapes what we build.
          </h2>

          <div className="mv-values__list">
            {VALUES.map((value) => (
              <div
                className={`mv-value mv-color--${value.variant}`}
                key={value.num}
              >
                <span className="mv-value__num">
                  {value.num}
                </span>

                <div className="mv-value__body">
                  <h3 className="mv-value__title">
                    {value.title}
                  </h3>

                  <p className="mv-value__text">
                    {value.text}
                  </p>
                </div>

                <span className="mv-value__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ HOW WE BUILD ======================== */}

      <section className="mv-section mv-section--light mv-build-section">
        <div className="mv-container mv-build__container">
          <div className="mv-build__header">
            <h2 className="mv-build__title">
              From Intelligence to Implementation.
            </h2>

            <p className="mv-build__subtitle">
              Zuntra brings strategy, design, engineering and intelligence
              together to create technology that works in the real world.
            </p>
          </div>

          <div className="mv-track">
            {DISCIPLINES.map((discipline, idx) => (
              <div
                className={`mv-track__item mv-color--${discipline.variant}`}
                key={discipline.label}
                style={{ '--track-delay': `${idx * 0.2}s` }}
              >
                <div className="mv-track__node">
                  <span className="mv-track__dot" />
                </div>

                <span className="mv-track__label">
                  {discipline.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== INTELLIGENCE ========================= */}

      <section className="mv-section mv-section--dark mv-dark">
        <div className="mv-container mv-dark__grid">
          <div>
            <p className="mv-eyebrow mv-eyebrow--violet">
              The System Behind Zuntra
            </p>

            <h2 className="mv-h2 mv-h2--sm">
              INTELLIGENCE AT THE CORE.
            </h2>

            <p className="mv-dark__text">
              Different technologies become more powerful when they work as
              one system. Zuntra connects data, intelligence, agents,
              automation and product together into a coherent architecture.
            </p>
          </div>

          <div className="mv-dark__visual">
            <DarkArchDiagram />
          </div>
        </div>
      </section>

      {/* ============================== VISION ============================ */}

      <section className="mv-section mv-section--light mv-section--vision">
        <div className="mv-container">

          <h2 className="mv-h2 mv-h2--lg mv-vision__title">
            A WORLD WHERE INTELLIGENCE, TECHNOLOGY AND HUMAN CREATIVITY WORK
            TOGETHER.
          </h2>

          <p className="mv-lead mv-vision__text">
            We envision a future where intelligent technology does more than
            automate tasks &mdash; it expands what people, teams and
            organizations can imagine, build and accomplish.
          </p>

          <div className="mv-vision__map">
            <VisionEcosystem />
          </div>
        </div>
      </section>

      {/* ============================== FUTURE ============================ */}

      <section className="mv-section mv-section--light mv-future-section">
        <div className="mv-container mv-future__container">
          <div className="mv-future__header">
            <h2 className="mv-future__title">
              One ecosystem.
              <br />
              Many possibilities.
            </h2>

            <p className="mv-future__subtitle">
              From enterprise systems to emerging products, from intelligent
              automation to new ventures, Zuntra brings different disciplines
              together to build what comes next.
            </p>
          </div>

          <div className="mv-future-grid">
            {ECOSYSTEM.map((ecosystem, idx) => (
              <article
                className={`mv-future-card mv-color--${ecosystem.variant}`}
                key={ecosystem.label}
                style={{ '--card-delay': `${idx * 0.1}s` }}
              >
                <div className="mv-future-card__rule" />

                <h3 className="mv-future-card__title">
                  {ecosystem.label}
                </h3>

                <ul className="mv-future-card__list">
                  {ecosystem.items.map((item) => (
                    <li key={item} className="mv-future-card__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA =========================== */}

      <section className="mv-cta" id="contact">
        <span className="mv-cta__grid" aria-hidden="true" />

        <div className="mv-container mv-cta__inner">
          <h2 className="mv-h2 mv-h2--lg">
            HAVE SOMETHING WORTH BUILDING?
          </h2>

          <p className="mv-cta__text">
            Let&rsquo;s turn the idea into something real.
          </p>

          <a
            className="mv-btn mv-btn--onDark"
            href="mailto:info@zuntra.com"
          >
            Let&rsquo;s Build It &rarr;
          </a>
        </div>
      </section>

      {/* ============================== FOOTER ============================ */}


    </div>
  );
};

export default MissionVision;