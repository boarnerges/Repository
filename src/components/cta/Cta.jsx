import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./cta.css";

const Cta = () => {
  const emailAddress = "olujawo1996@gmail.com";
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <div
      id="cta"
      className="cta-section container"
    >
      <p className="section-kicker">Next step</p>
      <h2 className="cta-title">Need a frontend engineer who cares about the last 10%?</h2>
      <p className="cta-copy">
        Send the role, product, or problem. I will reply with context, fit, and
        the fastest way to evaluate the work.
      </p>

      <div className="cta-socials" aria-label="Social links">
        <a
          href="https://github.com/boarnerges"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://x.com/boarnerges_olu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open X profile"
        >
          <FaTwitter className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/boarnerges_olu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Instagram profile"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/owolabi-olusegun/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a
          href={emailComposeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send an email"
        >
          <MdEmail className="text-2xl" />
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
    </div>
  );
};

export default Cta;
