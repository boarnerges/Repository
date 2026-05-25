import { useEffect, useState } from "react";
import "./portfolio.css";
import { ArrowUpRight, ExternalLink, Eye, X } from "lucide-react";
import jobPortalPoster from "../../assets/job-portal.jpg";
import adminDashboardPoster from "../../assets/admin-dashboard.jpg";
import studentPlatformPoster from "../../assets/dice-game.jpg";
import auraPoster from "../../assets/aura.png";

const data = [
  {
    id: 4,
    title: "Aura",
    description:
      "Created a scalable SaaS application with robust user management and dynamic content generation. Developed with Next.js, Supabase, and Clerk, including Open Graph image generation.",
    role: "Solo Engineer",
    stack: ["Next.js", "SaaS", "Supabase", "Clerk"],
    impact:
      "Functional SaaS platform with secure user profiles and automated OG image generation.",
    isAI: false, // Assuming not an AI project, but could be if OG generation uses AI
    palette: "purple",
    demo: "https://aura-saas-j7pocvwbx-boarnerges-s-projects.vercel.app/",
    github: "https://github.com/boarnerges/aura",
    poster: auraPoster,
  },

  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Provided a centralized system for monitoring key metrics and managing operational records. Developed a responsive admin interface using React and Tailwind CSS.",
    role: "Solo Engineer",
    stack: ["Dashboard", "React", "Tailwind"],
    impact: "Enabled 24/7 monitoring with 42 widgets and 4 KPI panels.",
    isAI: false,
    palette: "amber",
    demo: "https://admin-dashboard-phi-navy-88.vercel.app/",
    github: "https://github.com/boarnerges/admin-dashboard",
    poster: adminDashboardPoster,
  },
  {
    id: 3,
    title: "Student Management Platform",
    description:
      "Addressed inefficient processes for managing student information and academic progress. Built a comprehensive solution with React and Tailwind for data tracking and notifications.",
    role: "Solo Engineer",
    stack: ["Management", "React", "Tailwind"],
    impact:
      "Successfully managed 2k students, 87% completion rates, real-time notices.",
    isAI: false,
    palette: "sky",
    demo: "https://student-management-beta-rouge.vercel.app/",
    github: "https://github.com/boarnerges/student-management-platform",
    poster: studentPlatformPoster,
  },

  {
    id: 1,
    title: "Job Portal",
    description:
      "Streamlined job discovery and application processes for users. Built a responsive platform with React and Vite, focusing on dynamic UI and efficient workflows.",
    role: "Solo Engineer",
    stack: ["React", "Vite", "Responsive UI"],
    impact:
      "Improved user engagement with 120+ roles listed, 3.2s application flow.",
    isAI: false,
    palette: "teal",
    demo: "https://job-application-nine-khaki.vercel.app/",
    github: "https://github.com/boarnerges/Job-Application",
    poster: jobPortalPoster,
  },
];

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const openPreview = (project) => {
    setPreviewLoaded(false);
    setActiveProject(project);
  };

  const closePreview = () => {
    setActiveProject(null);
    setPreviewLoaded(false);
  };

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePreview();
      }
    };

    document.body.classList.add("portfolio-modal-open");
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("portfolio-modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeProject]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__header" data-reveal>
          <p className="section-kicker">Selected work</p>
          <div>
            <h2>Deployments: Architecting for impact and scale.</h2>
            <a href="#cta">
              <span>Start a conversation</span>
              <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="portfolio__container">
          {data.map((project, index) => {
            const {
              id,
              title,
              role,
              description,
              impact,
              stack,
              isAI,
              palette,
              demo,
              github,
              poster,
            } = project;

            // Apply metric bolding
            const boldedImpact = impact.replace(
              /(\d+%|\d+\.\d+s|\d+k|\d+\+)/g,
              "<strong>$1</strong>",
            );

            return (
              <article
                key={id}
                className={`portfolio__item ${index === 0 ? "portfolio__item--featured" : ""}`}
                data-reveal
                style={{ "--reveal-delay": `${Math.min(index, 3) * 80}ms` }}
              >
                <button
                  type="button"
                  className={`portfolio__item-visual palette-${palette}`}
                  onClick={() => openPreview(project)}
                  aria-label={`Preview ${title}`}
                >
                  <div className="portfolio__visual-live-wrap">
                    <img
                      src={poster}
                      alt={`${title} poster preview`}
                      className="portfolio__visual-poster"
                      loading="lazy"
                    />
                    <span className="portfolio__visual-cue">
                      <Eye size={15} strokeWidth={2.2} aria-hidden="true" />
                      Preview site
                    </span>
                  </div>
                </button>

                <div className="portfolio__item-body">
                  <div className="portfolio__item-badges">
                    <span className="portfolio__item-role">{role}</span>
                    {isAI && (
                      <span className="portfolio__item-badge-ai">AI</span>
                    )}
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p className="portfolio__item-description">{description}</p>
                    <p
                      className="portfolio__item-impact"
                      dangerouslySetInnerHTML={{
                        __html: `Impact: ${boldedImpact}`,
                      }}
                    />
                  </div>
                  <div
                    className="portfolio__tags"
                    aria-label={`${title} technologies`}
                  >
                    {stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="portfolio__item-cta">
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                  {github && (
                    <a
                      href={github}
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>GitHub</span>
                      <ExternalLink
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <div
          className="portfolio__modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} live preview`}
        >
          <button
            type="button"
            className="portfolio__modal-backdrop"
            aria-label="Close preview"
            onClick={closePreview}
          />

          <div className="portfolio__modal-content">
            <div className="portfolio__modal-head">
              <div>
                <h3>{activeProject.title}</h3>
                <p>Live website preview</p>
              </div>
              <div className="portfolio__modal-actions">
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <span>Open Live</span>
                  <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
                </a>
                <button
                  type="button"
                  className="portfolio__modal-close"
                  onClick={closePreview}
                  aria-label="Close preview"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="portfolio__modal-frame-wrap">
              {!previewLoaded && (
                <div className="portfolio__modal-loading">
                  <span>Loading live preview...</span>
                  <small>If it does not appear, click Open Live.</small>
                </div>
              )}
              <iframe
                title={`${activeProject.title} live preview`}
                src={activeProject.demo}
                loading="lazy"
                className={`portfolio__modal-frame ${previewLoaded ? "is-ready" : ""}`}
                onLoad={() => setPreviewLoaded(true)}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
