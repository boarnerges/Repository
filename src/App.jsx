import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import AiAutomation from "./components/ai-automation/AiAutomation";
import Process from "./components/process/Process";
import Cta from "./components/cta/Cta";
import Header from "./components/newheader/Header";
import Footer from "./components/footer/Footer";
import CaseStudy from "./components/case-study/CaseStudy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RevealOnScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

    if (
      revealItems.length === 0 ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -14% 0px",
        threshold: 0.16,
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

import Expertise from "./components/expertise/Expertise";

const Home = () => {
  return (
    <>
      <Header />
      <div data-reveal><Expertise /></div>
      <div data-reveal><Cta /></div>
    </>
  );
};

import PageHeader from "./components/pageHeader/PageHeader";

const AboutPage = () => (
  <>
    <PageHeader 
      title="The Architect & Strategist." 
      subtitle="Engineering high-stakes systems with a product-first mindset. 5+ years of shipping software that works."
      kicker="About"
      bgImage="/images/hero/hero-1.jpg"
    />
    <About withHeader />
  </>
);

const ExperiencePage = () => (
  <>
    <PageHeader 
      title="Strategic History." 
      subtitle="A record of orchestrating growth across product and engineering in high-impact environments."
      kicker="History"
      bgImage="/images/hero/hero-2.jpg"
    />
    <Experience withHeader />
  </>
);

const PortfolioPage = () => (
  <>
    <PageHeader 
      title="Architecting for Impact." 
      subtitle="Selected deployments showcasing scalable architectures and dynamic user experiences."
      kicker="Deployments"
      bgImage="/images/hero/hero-3.jpg"
    />
    <Portfolio withHeader />
  </>
);

import Capabilities from "./components/capabilities/Capabilities";

const CapabilitiesPage = () => (
  <>
    <PageHeader 
      title="The Agentic Shift & Execution." 
      subtitle="Designing intelligent systems and the methodology for moving from ambiguous problems to production-ready products."
      kicker="Capabilities"
      bgImage="/images/hero/hero-4.jpg"
    />
    <Capabilities withHeader />
  </>
);

const CaseStudyPage = () => (
  <>
    <PageHeader 
      title="Case Studies." 
      subtitle="Deep dives into real product decisions under real constraints."
      kicker="Work"
      bgImage="/images/hero/hero-3.jpg"
    />
    <CaseStudy withHeader />
  </>
);

import NotFound from "./components/notFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RevealOnScroll />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/experience" element={<Layout><ExperiencePage /></Layout>} />
        <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
        <Route path="/capabilities" element={<Layout><CapabilitiesPage /></Layout>} />
        <Route path="/case-study" element={<Layout><CaseStudyPage /></Layout>} />
        <Route path="/contact" element={<Layout><Cta /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
