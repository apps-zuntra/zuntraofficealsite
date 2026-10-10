import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import IndustryPage from './pages/IndustryPage';
import VerticalPage from './pages/VerticalPage';
import ProductPage from './pages/ProductPage';
import EnterprisePage from './pages/EnterprisePage';
import BuildPage from './pages/builds/BuildPage';
import SubtopicPage from './pages/builds/SubtopicPage';

// About Pages
import MissionVision from './pages/about/MissionVision';
import Team from './pages/about/Team';
import Leadership from './pages/about/Leadership';
import Cohort25 from './pages/about/Cohort25';
import Cohort26 from './pages/about/Cohort26';
import SustainabilityDEAI from './pages/about/SustainabilityDEAI';

// Company imports
import ContactPage from './pages/ContactPage';
import Careers from './pages/company/Careers';
import CareerDetail from './pages/company/CareerDetail';
import ResearchInsights from './pages/company/ResearchInsights';
import ResourceDetails from './pages/company/ResourceDetails';
import ZuntraLabs from './pages/company/ZuntraLabs';
import News from './pages/company/News';
import NewsArticle from './pages/company/NewsArticle';
import Events from './pages/company/Events';
import EventDetails from './pages/company/EventDetails';
import EventRegister from './pages/company/EventRegister';
import PastEvents from './pages/company/PastEvents';
import PastEventDetails from './pages/company/PastEventDetails';
import Incubation from './pages/company/Incubation';
import Competitions from './pages/company/Competitions';
import IncubationApply from "./pages/company/IncubationApply";
import PrivacyPolicy from './pages/company/PrivacyPolicy';
import TermsConditions from './pages/company/TermsConditions';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
          <Route path="/build/:slug" element={<BuildPage />} />
          <Route path="/build/:slug/:subtopicSlug" element={<SubtopicPage />} />

          {/* Business Verticals Routes */}
          <Route path="/verticals/ai-saas" element={<Navigate to="/build/ai-software-automation" replace />} />
          <Route path="/verticals/:slug" element={<VerticalPage />} />
          <Route path="/media" element={<VerticalPage slug="media" />} />
          <Route path="/art-culture" element={<VerticalPage slug="art-culture" />} />
          <Route path="/robotics" element={<VerticalPage slug="robotics" />} />

          {/* Products Routes */}
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/huzzler" element={<ProductPage slug="huzzler" />} />
          <Route path="/wiviy" element={<ProductPage slug="wiviy" />} />
          <Route path="/rentit" element={<ProductPage slug="rentit" />} />
          <Route path="/z01-crew" element={<ProductPage slug="z01-crew" />} />
          <Route path="/mungo" element={<ProductPage slug="mungo" />} />
          <Route path="/zuca" element={<ProductPage slug="zuca" />} />

          {/* Enterprise Solutions Routes */}
          <Route path="/enterprise" element={<EnterprisePage slug="talvivo" />} />
          <Route path="/enterprises" element={<EnterprisePage slug="talvivo" />} />
          <Route path="/enterprise/:slug" element={<EnterprisePage />} />
          <Route path="/enterprises/:slug" element={<EnterprisePage />} />
          <Route path="/talvivo" element={<EnterprisePage slug="talvivo" />} />
          <Route path="/workzi" element={<EnterprisePage slug="workzi" />} />
          <Route path="/cubeforge" element={<EnterprisePage slug="cubeforge" />} />

          {/* About Routes */}
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/about/cohort-25" element={<Cohort25 />} />
          <Route path="/about/cohort-26" element={<Cohort26 />} />
          <Route path="/about/sustainability-deai" element={<SustainabilityDEAI />} />

          {/* Company Routes */}
          <Route path="/incubation" element={<Navigate to="/company/incubation" replace />} />
          <Route path="/career" element={<Navigate to="/company/careers" replace />} />
          <Route path="/careers" element={<Navigate to="/company/careers" replace />} />
          <Route path="/blog" element={<Navigate to="/company/news" replace />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/careers/:slug" element={<CareerDetail />} />
          <Route path="/company/research-insights" element={<ResearchInsights />} />
          <Route path="/company/research-insights/:slug" element={<ResourceDetails />} />
          <Route path="/company/zuntra-labs" element={<ZuntraLabs />} />
          <Route path="/company/news" element={<News />} />
          <Route path="/company/news/:slug" element={<NewsArticle />} />
          <Route path="/company/events" element={<Events />} />
          <Route path="/company/events/past" element={<PastEvents />} />
          <Route path="/company/events/past/:slug" element={<PastEventDetails />} />
          <Route path="/company/events/:slug" element={<EventDetails />} />
          <Route path="/company/events/:slug/register" element={<EventRegister />} />
          <Route path="/company/incubation" element={<Incubation />} />
          <Route path="/company/incubationApply" element={<IncubationApply />} />
          <Route path="/company/competitions" element={<Competitions />} />

          {/* Legal Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
