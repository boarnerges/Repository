import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./cta.css";

const Cta = () => {
  const emailAddress = "olujawo1996@gmail.com";
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <section id="cta" className="cta-section container" data-reveal>
      <div className="cta-content">
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

        <a
          href={emailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          <span>Start the conversation</span>
        </a>
      </div>
    </section>
  );
};

export default Cta;
