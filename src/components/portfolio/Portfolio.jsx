import "./portfolio.css";
import { ExternalLink } from "lucide-react";
import IMG1 from "../../assets/job-portal.jpg";
import IMG2 from "../../assets/admin-dashboard.jpg";
import IMG3 from "../../assets/dice-game.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    imageWidth: 1080,
    imageHeight: 519,
    title: "Job Portal",
    description:
      "A job search experience with a clean listing flow, responsive pages, and focused calls to action.",
    tags: ["React", "Vite", "Responsive UI"],
    demo: "https://boarnergesjob.netlify.app/",
  },

  {
    id: 2,
    image: IMG2,
    imageWidth: 1400,
    imageHeight: 807,
    title: "Admin Dashboard",
    description:
      "A responsive admin interface for scanning key metrics, managing records, and moving through operational views quickly.",
    tags: ["Dashboard", "React", "Tailwind"],
    demo: "https://boarnergesdashboard.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    imageWidth: 1400,
    imageHeight: 800,
    title: "Student Management Platform",
    description:
      "A comprehensive solution for managing student information, tracking academic progress, and facilitating communication between stakeholders.",
    tags: ["Management", "React", "Tailwind"],
    demo: "https://studmanagement.netlify.app/",
  },
];

function Portfolio() {
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
          {data.map(
            ({
              id,
              image,
              imageWidth,
              imageHeight,
              title,
              description,
              tags,
              demo,
            }) => {
              return (
                <article key={id} className="portfolio__item">
                  <a
                    className="portfolio__item-image"
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${title} live demo`}
                  >
                    <img
                      src={image}
                      alt={`${title} screenshot`}
                      width={imageWidth}
                      height={imageHeight}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>Project {String(id).padStart(2, "0")}</span>
                  </a>

                  <div className="portfolio__item-body">
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>

                    <div
                      className="portfolio__tags"
                      aria-label={`${title} technologies`}
                    >
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
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
                  </div>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
