import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";
import adminDashboardPoster from "../../assets/admin-dashboard.jpg";
import jobPortalPoster from "../../assets/job-portal.jpg";

export default function Header() {
  return (
    <header id="home" className="site-header container">
      <BoarnergesLogo />
      <main className="hero-content" aria-labelledby="hero-title">
        <section className="hero-copy-block">
          <p className="hero-kicker">Frontend engineer for product teams</p>
          <div className="container__name">
            <p>Segun Owolabi</p>
            <h1 id="hero-title" className="name">
              <span>Frontend</span>
              <span>that feels</span>
              <span>shipped.</span>
            </h1>
          </div>

          <p className="hero-copy">
            I build React and Next.js experiences with crisp interaction,
            responsive structure, and the kind of polish recruiters can see in
            the first scroll.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a href="#portfolio" className="hero-button hero-button--primary">
              See the work
            </a>
            <a
              href="https://boarnergesresume.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button hero-button--secondary"
            >
              Open resume
            </a>
          </div>

          <dl className="hero-proof" aria-label="Portfolio proof points">
            <div>
              <dt>Focus</dt>
              <dd>React UI</dd>
            </div>
            <div>
              <dt>Signal</dt>
              <dd>Live demos</dd>
            </div>
            <div>
              <dt>Ready</dt>
              <dd>Responsive</dd>
            </div>
          </dl>
        </section>

        <aside className="hero-stage" aria-label="Selected project previews">
          <div className="hero-stage__rail" aria-hidden="true" />
          <article className="hero-preview hero-preview--primary">
            <img
              src={adminDashboardPoster}
              alt="Admin dashboard project preview"
            />
            <div>
              <span>Operational UI</span>
              <strong>Admin dashboard</strong>
            </div>
          </article>
          <article className="hero-preview hero-preview--secondary">
            <img src={jobPortalPoster} alt="Job portal project preview" />
            <div>
              <span>Conversion flow</span>
              <strong>Job portal</strong>
            </div>
          </article>
        </aside>
      </main>
    </header>
  );
}
