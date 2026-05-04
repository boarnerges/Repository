import { useEffect, useState } from "react";
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
      "A job search experience with a clean listing flow, responsive pages, and focused calls to action.",
    tags: ["React", "Vite", "Responsive UI"],
    metrics: ["120+ Roles", "3.2s Apply Flow", "95 Lighthouse"],
    palette: "teal",
    demo: "https://boarnergesjob.netlify.app/",
    poster: jobPortalPoster,
  },

  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "A responsive admin interface for scanning key metrics, managing records, and moving through operational views quickly.",
    tags: ["Dashboard", "React", "Tailwind"],
    metrics: ["42 Widgets", "24/7 Monitoring", "4 KPI Panels"],
    palette: "amber",
    demo: "https://boarnergesdashboard.netlify.app/",
    poster: adminDashboardPoster,
  },
  {
    id: 3,
    title: "Student Management Platform",
    description:
      "A comprehensive solution for managing student information, tracking academic progress, and facilitating communication between stakeholders.",
    tags: ["Management", "React", "Tailwind"],
    metrics: ["2k Students", "87% Completion", "Realtime Notices"],
    palette: "sky",
    demo: "https://studmanagement.netlify.app/",
    poster: studentPlatformPoster,
  },
  {
    id: 4,
    title: "Aura",
    description:
      "A Next.js SaaS application leveraging Supabase and Clerk for user management, featuring profiles, a dashboard, and dynamic Open Graph image generation.",
    tags: ["Next.js", "SaaS", "Supabase", "Clerk"],
    metrics: [],
    palette: "purple",
    demo: "https://boarnerges-aura.netlify.app/",
    poster: auraPoster,
  },
];

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [cardPreviewLoaded, setCardPreviewLoaded] = useState({});

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
        <div className="portfolio__header">
          <p>Selected Work</p>
          <div className="portfolio__heading-row">
            <h2>
              <span>01.</span> Some Things I Have Built
            </h2>
            <div aria-hidden="true" />
          </div>
        </div>

        <div className="portfolio__container">
          {data.map((project) => {
            const { id, title, description, palette, demo, poster } = project;
            return (
              <article key={id} className="portfolio__item">
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
                    {!cardPreviewLoaded[id] && (
                      <div className="portfolio__visual-loading">
                        <span>Loading preview...</span>
                      </div>
                    )}
                    <iframe
                      title={`${title} card preview`}
                      src={demo}
                      loading="lazy"
                      className={`portfolio__visual-live ${cardPreviewLoaded[id] ? "is-ready" : ""}`}
                      onLoad={() =>
                        setCardPreviewLoaded((prev) => ({
                          ...prev,
                          [id]: true,
                        }))
                      }
                    />
                  </div>
                </button>

                <div className="portfolio__item-body">
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
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
