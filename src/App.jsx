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
      <div data-reveal><About isSimple /></div>
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
      bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
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
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
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
      bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
    />
    <Portfolio withHeader />
  </>
);

const AiAutomationPage = () => (
  <>
    <PageHeader 
      title="The Agentic Shift." 
      subtitle="Designing intelligent systems that reason, use tools, and execute intent at scale."
      kicker="Capabilities"
      bgImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600"
    />
    <AiAutomation withHeader />
  </>
);

const ProcessPage = () => (
  <>
    <PageHeader 
      title="Execution Framework." 
      subtitle="My methodology for moving from ambiguous problems to production-ready products."
      kicker="Methodology"
      bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
    />
    <Process withHeader />
  </>
);

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
        <Route path="/ai-automation" element={<Layout><AiAutomationPage /></Layout>} />
        <Route path="/process" element={<Layout><ProcessPage /></Layout>} />
        <Route path="/contact" element={<Layout><Cta /></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
