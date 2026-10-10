import React from 'react';
import HeroSection from '../components/HeroSection';
import HomeFeatures from '../components/HomeFeatures';
import ImpactStatsSection from '../components/ImpactStatsSection';
import EcosystemSection from '../components/EcosystemSection';
import EnterprisePlatformsSection from '../components/EnterprisePlatformsSection';
import VenturesSection from '../components/VenturesSection';
import IntelligenceCoreSection from '../components/IntelligenceCoreSection';
import AiProductsSection from '../components/AiProductsSection';
import RealProblemsSection from '../components/RealProblemsSection';
import ComplexitySection from '../components/ComplexitySection';
import InnovationSection from '../components/InnovationSection';
import TestimonialSection from '../components/TestimonialSection';
import InsightsSection from '../components/InsightsSection';
import CtaSection from '../components/CtaSection';
import SideGridLines from '../components/SideGridLines';
import HorizontalGridLine from '../components/HorizontalGridLine';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page-main">
      {/* Interactive Side Grid Lines starting below header */}
      <SideGridLines />
      <HeroSection />
      <HorizontalGridLine />
      <HomeFeatures />
      <HorizontalGridLine />
      <EnterprisePlatformsSection />
      <HorizontalGridLine />
      <VenturesSection />
      <HorizontalGridLine />
      <ImpactStatsSection />
      {/* <InnovationSection /> */}
      <HorizontalGridLine />
      <TestimonialSection />
      <HorizontalGridLine />
      <InsightsSection />
      <HorizontalGridLine />
      <CtaSection />
      <HorizontalGridLine />
    </main>
  );
};

export default Home;
