import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./cta.css";
import ContactForm from "../contact/ContactForm";

const Cta = () => {
  return (
    <section id="contact" className="cta-section container" data-reveal>
      <div className="cta-content">
        <div className="cta-glow-bg"></div>
        <div className="cta-status">
          <span className="status-indicator"></span>
          <span className="status-label">SYSTEM STATUS: READY FOR DEPLOYMENT</span>
        </div>
        
        <div className="cta-text">
          <p className="section-kicker">Connect</p>
          <h2 className="cta-title">
            Stop guessing. Start shipping. Let’s architect your next agentic system.
          </h2>
          <p className="cta-description">
            Currently accepting high-impact projects, technical leadership roles, and ambitious engineering challenges. <strong>Let’s build the future of intent.</strong>
          </p>
        </div>
      </div>

      <div className="cta-actions-block">
        <div className="cta-socials" aria-label="Social links">
          <a
            href="https://github.com/boarnerges"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/boarnerges_olu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open X profile"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/owolabi-olusegun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="cta-form-wrap" style={{ width: '100%' }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Cta;
