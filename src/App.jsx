import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Eye, Github, Linkedin, Mail, X } from "lucide-react";
import adminDashboardPoster from "./assets/admin-dashboard.jpg";
import auraPoster from "./assets/aura.png";
import studentPlatformPoster from "./assets/dice-game.jpg";
import jobPortalPoster from "./assets/job-portal.jpg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    title: "Aura",
    copy: "A SaaS profile engine with Clerk, Supabase, dashboards, and generated social previews.",
    demo: "https://boarnerges-aura.netlify.app/",
    poster: auraPoster,
    tone: "Launch system",
    stack: "Next.js / Supabase / Clerk",
    impact: "Auth, profiles, dashboards, and generated Open Graph images shaped into one SaaS flow.",
    span: "project-card--major",
  },
  {
    title: "Job Portal",
    copy: "A fast role discovery flow with clean listings, direct application paths, and responsive screens.",
    demo: "https://boarnergesjob.netlify.app/",
    poster: jobPortalPoster,
    tone: "Hiring flow",
    stack: "React / Vite / Responsive UI",
    impact: "A direct role-search path built for quick scanning, confident clicks, and clean conversion.",
    span: "project-card--side",
  },
  {
    title: "Admin Dashboard",
    copy: "A calm operations surface for scanning metrics, moving through records, and monitoring state.",
    demo: "https://boarnergesdashboard.netlify.app/",
    poster: adminDashboardPoster,
    tone: "Control room",
    stack: "React / Tailwind / Data UI",
    impact: "Dense operational views organized so the important state rises without visual noise.",
    span: "project-card--half",
  },
  {
    title: "Student Management",
    copy: "A stakeholder platform for academic records, communication, and structured progress tracking.",
    demo: "https://studmanagement.netlify.app/",
    poster: studentPlatformPoster,
    tone: "Academic platform",
    stack: "React / Tailwind / App UI",
    impact: "Student records, progress, and communication brought into a practical stakeholder workspace.",
    span: "project-card--half",
  },
];

const capabilities = [
  "React",
  "Next.js",
  "Tailwind",
  "Accessibility",
  "Motion",
  "Dashboards",
  "App Shells",
  "Product Polish",
];

const proofPoints = [
  "Product-minded frontend",
  "Responsive interaction polish",
  "Launch-ready implementation",
];

const methodLines = [
  {
    title: "Find the decisive screen",
    copy: "Every build starts by locating the view that makes the product understandable. Then the rest of the system earns its place around it.",
  },
  {
    title: "Make density feel calm",
    copy: "Dashboards, portals, and SaaS flows need hierarchy more than decoration. I shape content so scanning feels natural.",
  },
  {
    title: "Finish the touch points",
    copy: "Hover states, empty moments, responsive edges, preview flows, and motion get the same care as the first hero screenshot.",
  },
];

const emailAddress = "olujawo1996@gmail.com";
const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

function App() {
  const root = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView();
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) return;

      gsap.from(".nav-shell", {
        y: -24,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from([".hero-kicker", ".hero-title", ".hero-copy", ".hero-actions"], {
        y: 34,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.11,
        delay: 0.15,
      });

      gsap.utils.toArray(".motion-image").forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 0.82,
            opacity: 0.32,
            filter: "grayscale(1) brightness(0.55) contrast(1.25)",
          },
          {
            scale: 1,
            opacity: 1,
            filter: "grayscale(0.2) brightness(1) contrast(1.08)",
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top 82%",
              end: "bottom 24%",
              scrub: true,
            },
          },
        );
      });

      gsap.from(".capability-pill", {
        y: 12,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.035,
        delay: 0.15,
      });
    },
    { scope: root },
  );

  const openPreview = (project) => {
    setPreviewLoaded(false);
    setActiveProject(project);
  };

  return (
    <main ref={root} className="site-shell overflow-x-hidden w-full max-w-full">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="brand-mark" aria-label="Go to top">
          <span>Boarnerges</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-media motion-image" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-kicker">Frontend engineer for sharply built product experiences</p>
          <h1 className="hero-title max-w-6xl">
            <span className="desktop-title">
              Frontend work that feels finished before the code is inspected{" "}
              <span
                className="inline-type-image"
                aria-hidden="true"
                style={{
                  backgroundImage: "url(https://picsum.photos/seed/kinetic-interface/400/180)",
                }}
              />
            </span>
            <span className="mobile-title">
              Finished{" "}
              <span
                className="inline-type-image"
                aria-hidden="true"
                style={{
                  backgroundImage: "url(https://picsum.photos/seed/kinetic-interface/400/180)",
                }}
              /> frontend work.
            </span>
          </h1>
          <p className="hero-copy">
            Segun builds interfaces for teams that need the product to feel clear, fast, and credible from the first click.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              See the work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">
              Start a project
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-proof" aria-label="Portfolio proof points">
            {proofPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
      </header>

      <section className="signal-section reveal-item" aria-label="Current focus">
        <div className="signal-panel">
          <div>
            <p>Open for selective frontend work</p>
            <h2>Bring the product problem, not a perfect brief.</h2>
          </div>
          <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer" className="signal-link">
            <span className="signal-link-full">Start with the messy version</span>
            <span className="signal-link-short">Start the build</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="work" className="chapter chapter-work">
        <div className="chapter-heading">
          <p>Selected builds</p>
          <h2>Useful products, shaped with the care usually reserved for a launch.</h2>
        </div>

        <div className="bento-grid grid-flow-dense">
          {projects.map((project) => (
            <article key={project.title} className={`project-card group ${project.span}`}>
              <button
                type="button"
                className="project-visual"
                onClick={() => openPreview(project)}
                aria-label={`Preview ${project.title}`}
              >
                <img className="motion-image" src={project.poster} alt={`${project.title} preview`} loading="lazy" />
              </button>
              <div className="project-body">
                <div>
                  <p>{project.tone}</p>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.copy}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="project-foot">
                  <span>{project.stack}</span>
                  <div className="project-actions">
                    <button type="button" onClick={() => openPreview(project)} aria-label={`Preview ${project.title}`}>
                      <Eye size={17} aria-hidden="true" />
                    </button>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-section" aria-label="Capabilities">
        <div className="capability-heading">
          <p>Useful where teams feel the interface strain</p>
          <span>Frontend systems, product polish, and launch screens that need to hold together under real use.</span>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <span className="capability-pill" key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="process-intro reveal-item">
          <p>How it feels to work together</p>
          <h2>Calm execution, visible momentum, and interfaces that do not collapse under detail.</h2>
          <span>
            The work is structured enough to move quickly, but never so rigid that product nuance gets flattened.
          </span>
        </div>

        <div className="process-board">
          {methodLines.map((line, index) => (
            <article className="process-step reveal-item" key={line.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{line.title}</h3>
                <p>{line.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-chapter">
        <div className="contact-inner">
          <h2>Bring the rough idea. Leave with the interface people remember.</h2>
          <p>
            Available for frontend builds, product UI, design-system cleanup, and high-polish landing experiences.
          </p>
          <div className="contact-actions">
            <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">
              Email Segun
              <Mail size={18} aria-hidden="true" />
            </a>
            <a href="https://github.com/boarnerges" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub">
              <Github size={20} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/owolabi-olusegun/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn">
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>

      {activeProject && (
        <div className="preview-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.title} live preview`}>
          <button type="button" className="preview-backdrop" aria-label="Close preview" onClick={() => setActiveProject(null)} />
          <div className="preview-panel">
            <div className="preview-head">
              <div>
                <h3>{activeProject.title}</h3>
                <p>{activeProject.demo}</p>
              </div>
              <div>
                <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="button button-secondary">
                  Open live
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <button type="button" onClick={() => setActiveProject(null)} aria-label="Close preview">
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="preview-frame-wrap">
              {!previewLoaded && (
                <div className="preview-loading">
                  <span>Loading live preview</span>
                  <small>Open live if the embedded site blocks previews.</small>
                </div>
              )}
              <iframe
                title={`${activeProject.title} live preview`}
                src={activeProject.demo}
                loading="lazy"
                className={previewLoaded ? "is-ready" : ""}
                onLoad={() => setPreviewLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
