import "./about.css";
import myPortraitBlack from "../../assets/me-black.png";

const About = ({ withHeader = false, isSimple = false }) => {
  return (
    <section id="about" className={`about-section ${withHeader ? 'about-section--subpage' : ''} ${isSimple ? 'about-section--simple' : ''}`}>
      <div className="about-shell container" data-reveal>
        <div className="about-grid">
          <div className="about-lede">
            {!withHeader && !isSimple && (
              <>
                <p className="section-kicker">About</p>
                <h2>Software Engineer, Technical Product Manager, AI Builder.</h2>
              </>
            )}
            {isSimple && (
               <h2 className="about-simple-title">The Architect & Strategist.</h2>
            )}
            <div className="about-bio-wrap">
              <div className="about-bio-image">
                <img src={myPortraitBlack} alt="Segun portrait in black" />
              </div>
              <div className="about-bio-text">
                <p className="bio-lead">
                  Technical Product Strategist based in Abuja, Nigeria. 
                  I bridge product strategy and engineering to ship high-stakes software that works.
                </p>
                <p>
                  For 5+ years, I've led production systems from frontend to full-stack, building with a focus on product viability and user outcomes.
                </p>
                <p>
                  Currently architecting the <strong>Agentic Shift</strong>: intelligent systems that reason and execute intent.
                </p>
              </div>
            </div>
          </div>

          {!isSimple && (
            <aside className="about-caption">
              <div className="caption-card">
                <div className="caption-icon-wrap">
                  <div className="caption-icon-glow"></div>
                  <div className="caption-icon">⚡</div>
                </div>
                <p className="caption-text">
                  From ambiguous problem to shipped product — with AI as the force multiplier.
                </p>
                <div className="caption-divider"></div>
                <p className="caption-subtext">
                  Technical enough to architect it. Strategic enough to know if it's worth building.
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
