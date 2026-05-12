import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./cta.css";

const Cta = () => {
  const emailAddress = "olujawo1996@gmail.com";
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <section id="cta" className="cta-section container" data-reveal>
      <div>
        <p className="section-kicker">Contact</p>
        <h2 className="cta-title">Have a frontend problem worth making sharp?</h2>
      </div>
      <p className="cta-copy">
        Send the rough idea, the broken flow, or the role description. I will
        respond with clear next steps.
      </p>

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
          href="https://www.instagram.com/boarnerges_olu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram profile"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/owolabi-olusegun/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <FaLinkedin />
        </a>
        <a
          href={emailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email"
        >
          <MdEmail />
        </a>
      </div>

      <a
        href={emailComposeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        Email Segun
      </a>
    </section>
  );
};

export default Cta;
