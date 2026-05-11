import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import "./portfolio.css";
import { ExternalLink, Eye, X } from "lucide-react";
import jobPortalPoster from "../../assets/job-portal.jpg";
import adminDashboardPoster from "../../assets/admin-dashboard.jpg";
import studentPlatformPoster from "../../assets/dice-game.jpg";
import auraPoster from "../../assets/aura.png";

const data = [
  {
    id: 1,
    title: "Job Portal",
    description:
      "A focused job-search surface with clear listings, fast filtering, and calls to action that stay visible across screen sizes.",
    tags: ["React", "Vite", "Responsive"],
    metrics: ["Listing flow", "Apply path", "Mobile first"],
    palette: "teal",
    demo: "https://boarnergesjob.netlify.app/",
    poster: jobPortalPoster,
  },

  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "A dense operational dashboard shaped for scanning, comparison, and repeat use without burying the important numbers.",
    tags: ["Dashboard", "React", "Tailwind"],
    metrics: ["KPI views", "Records UI", "Data scanning"],
    palette: "amber",
    demo: "https://boarnergesdashboard.netlify.app/",
    poster: adminDashboardPoster,
  },
  {
    id: 3,
    title: "Student Management Platform",
    description:
      "A student-management system that organizes records, progress, and stakeholder communication into a calmer admin workflow.",
    tags: ["Management", "React", "Tailwind"],
    metrics: ["Records", "Progress", "Notices"],
    palette: "sky",
    demo: "https://studmanagement.netlify.app/",
    poster: studentPlatformPoster,
  },
  {
    id: 4,
    title: "Aura",
    description:
      "A Next.js SaaS project with authentication, profiles, dashboard surfaces, and dynamic Open Graph image generation.",
    tags: ["Next.js", "SaaS", "Supabase", "Clerk"],
    metrics: ["Auth", "Profiles", "OG images"],
    palette: "purple",
    demo: "https://boarnerges-aura.netlify.app/",
    poster: auraPoster,
  },
];

const canUsePreviewTransition = () =>
  "startViewTransition" in document &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewDelayed, setPreviewDelayed] = useState(false);
  const [transitionProjectId, setTransitionProjectId] = useState(null);

  const openPreview = useCallback((project) => {
    const showProject = () => {
      setPreviewLoaded(false);
      setPreviewDelayed(false);
      setActiveProject(project);
    };

    if (!canUsePreviewTransition()) {
      showProject();
      return;
    }

    flushSync(() => setTransitionProjectId(project.id));

    const transition = document.startViewTransition(() => {
      flushSync(showProject);
    });

    transition.finished.finally(() => setTransitionProjectId(null));
  }, []);

  const closePreview = useCallback(() => {
    if (!activeProject) return;

    const hideProject = () => {
      setActiveProject(null);
      setPreviewLoaded(false);
      setPreviewDelayed(false);
    };

    if (!canUsePreviewTransition()) {
      hideProject();
      return;
    }

    flushSync(() => setTransitionProjectId(activeProject.id));

    const transition = document.startViewTransition(() => {
      flushSync(hideProject);
    });

    transition.finished.finally(() => setTransitionProjectId(null));
  }, [activeProject]);

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
  }, [activeProject, closePreview]);

  useEffect(() => {
    if (!activeProject || previewLoaded) return undefined;

    const timer = setTimeout(() => {
      setPreviewDelayed(true);
    }, 6500);

    return () => clearTimeout(timer);
  }, [activeProject, previewLoaded]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <p className="section-kicker">Selected work</p>
          <div className="portfolio__heading-row">
            <h2>Live projects, built to be inspected.</h2>
            <p>
              Each preview opens the real hosted product, so the work can be
              judged by interaction, not just screenshots.
            </p>
          </div>
        </div>

        <div className="portfolio__container">
          {data.map((project) => {
            const { id, title, description, palette, demo, poster } = project;
            const isTransitionSource =
              transitionProjectId === id && !activeProject;

            return (
              <article
                key={id}
                className={`portfolio__item ${id === 1 ? "portfolio__item--featured" : ""}`}
              >
                <button
                  type="button"
                  className={`portfolio__item-visual palette-${palette} ${isTransitionSource ? "is-transition-source" : ""}`}
                  onClick={() => openPreview(project)}
                  aria-label={`Preview ${title}`}
                >
                  <div className="portfolio__visual-live-wrap">
                    <img
                      src={poster}
                      alt={`${title} poster preview`}
                      className="portfolio__visual-poster"
                      decoding="async"
                      fetchPriority="high"
                    />
                    <span className="portfolio__visual-badge">Open preview</span>
                  </div>
                </button>

                <div className="portfolio__item-body">
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                  <div className="portfolio__tags" aria-label={`${title} details`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    {project.metrics.map((metric) => (
                      <span key={metric}>{metric}</span>
                    ))}
                  </div>
                </div>

                <div className="portfolio__item-cta">
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => openPreview(project)}
                  >
                    <Eye size={16} strokeWidth={2.2} aria-hidden="true" />
                    <span>Preview</span>
                  </button>
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
                <div className="portfolio__modal-tags" aria-label="Project details">
                  {activeProject.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  {activeProject.metrics.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
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

            <div
              className={`portfolio__modal-frame-wrap ${transitionProjectId === activeProject.id ? "is-transition-target" : ""}`}
            >
              {!previewLoaded && (
                <div className="portfolio__modal-loading">
                  <span>
                    {previewDelayed
                      ? "Still waiting on the live site..."
                      : "Loading live preview..."}
                  </span>
                  <small>
                    {previewDelayed
                      ? "Some hosted demos wake up slowly. Open Live launches it directly."
                      : "If it does not appear, click Open Live."}
                  </small>
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
