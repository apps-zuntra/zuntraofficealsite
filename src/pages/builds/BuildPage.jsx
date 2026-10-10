import React, { useState, useEffect } from 'react';
import { useParams, Navigate, useLocation, Link } from 'react-router-dom';
import { buildData } from '../../data/buildData';
import SideGridLines from '../../components/SideGridLines';
import ConcentricHero from '../../components/builds/ConcentricHero';
import CapabilityStrip from '../../components/builds/CapabilityStrip';
import ConnectedGrowth from '../../components/builds/ConnectedGrowth';
import ComplexityBox from '../../components/builds/ComplexityBox';
import WhatWeBuildSection from '../../components/builds/WhatWeBuildSection';
import InteractiveWorkflowSection from '../../components/builds/InteractiveWorkflowSection';
import UseCasesGridSection from '../../components/builds/UseCasesGridSection';
import PhilosophySection from '../../components/builds/PhilosophySection';
import ImpactOutcomesSection from '../../components/builds/ImpactOutcomesSection';
import ArchitectureCoreSection from '../../components/builds/ArchitectureCoreSection';
import EmergingTechnologySection from '../../components/builds/EmergingTechnologySection';
import '../../components/builds/BuildSections.css';
import './BuildPage.css';

const BuildPage = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const build = buildData.find(ind => ind.id === slug);

  if (!build) {
    return <Navigate to="/" replace />;
  }

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const impactData = build.impactData || (build.impactStats ? {
    eyebrow: build.impactStatsEyebrow,
    titleBold: build.impactStatsTitle,
    items: build.impactStats.map(s => ({ title: s.value, desc: s.label }))
  } : (build.heroMockup?.items ? {
    eyebrow: 'BUILT TO MAKE AN IMPACT',
    titleBold: 'Systems designed around measurable outcomes.',
    items: build.heroMockup.items.slice(0, 4).map(it => ({ title: it.name, desc: it.desc }))
  } : null));

  const philosophyData = build.philosophyData || {
    eyebrow: build.whyZuntraEyebrow || 'HUMAN + TECHNOLOGY',
    titleBold: build.whyZuntraTitle || 'Technology should support people.',
    paragraphs: build.whyZuntraDesc || []
  };

  return (
    <div className="build-page" style={{ position: 'relative' }}>
      {/* Side grid lines start after the hero section (at capability strip) */}
      <SideGridLines startSelector=".capability-strip-container" />

      {/* 1. Concentric Radial Hero with Floating Orbits & Cards */}
      <ConcentricHero build={build} />

      {/* 2. 4-Column Horizontal Capability Strip */}
      <CapabilityStrip build={build} items={build.capabilityStrip} />

      {/* 3. Connected Section */}
      <ConnectedGrowth data={build.statement} />

      {/* 4. Complexity 2-Column Framed Box */}
      <ComplexityBox data={build.systemDesign} />

      {/* 5. What We Build 2x2 Grid + Card 05 Wide with Interactive System Views */}
      <WhatWeBuildSection build={build} data={build.whatWeBuild} slug={slug} />

      {/* 6. Interactive Workflow Section (6 steps selector + detail card) */}
      <InteractiveWorkflowSection build={build} data={build.workflowData} />

      {/* 7. Use Cases 3-Column Grid (9 cards with illustrative mockups) */}
      <UseCasesGridSection build={build} data={build.useCasesData} slug={slug} />

      {/* 8. Philosophy Section (Human + technology split) */}
      <PhilosophySection data={philosophyData} />

      {/* 9. Impact Outcomes Section (4-column card) */}
      <ImpactOutcomesSection data={impactData} />

      {/* 10. Architecture Core Section (Two-Way Symmetrical Tree with Top & Bottom Nodes) */}
      <ArchitectureCoreSection build={build} data={build.architectureCore} />

      {/* 11. Emerging Technology Section (4-Column x 2-Row Bordered Grid) */}
      <EmergingTechnologySection build={build} data={build.emergingTechData} />

      {/* 12. FAQ Section (Split 2-Column: A little more clarity) */}
      <section className="build-faq">
        <div className="container build-faq-container">
          <div className="faq-left">
            <span className="faq-eyebrow">FAQ</span>
            <h2 className="faq-main-title">
              <span className="faq-title-bold">A little more</span>
              <span className="faq-title-light">clarity.</span>
            </h2>
          </div>
          <div className="faq-right">
            <div className="faq-minimal-list">
              {build.faqs && build.faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={`faq-minimal-item ${isOpen ? 'active' : ''}`} key={index}>
                    <div className="faq-minimal-question" onClick={() => toggleFaq(index)}>
                      <h4>{faq.q || faq}</h4>
                      <span className="faq-minimal-toggle">{isOpen ? '×' : '+'}</span>
                    </div>
                    {isOpen && (
                      <div className="faq-minimal-answer">
                        <p>{faq.a || `Detailed answer regarding "${faq}" goes here.`}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA Section (Full-Width Dark Centered Card) */}
      {build.cta && (
        <section className="build-cta-dark">
          <div className="container">
            <div className="build-cta-inner">
              <h2 className="cta-dark-headline">
                <span>{build.cta.titleLine1 || build.cta.title}</span>
                {build.cta.titleLine2 && <span>{build.cta.titleLine2}</span>}
              </h2>
              <p className="cta-dark-subtext">{build.cta.subtitle}</p>
              <div className="cta-dark-buttons-row">
                <Link to="/contact" className="cta-btn-white">
                  {build.cta.buttons?.[0]?.text || "Let's talk"}
                </Link>
                <Link to="/work" className="cta-btn-dark-outline">
                  {build.cta.buttons?.[1]?.text || "Explore Zuntra"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BuildPage;
