import { useState } from "react";
import { FileText, Menu } from "lucide-react";

export default function BoarnergesLogo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const text = "Boarnerges";
  const characters = text.split("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="site-brand container">
      <div className="brand-mark">
        <p className="brand-wordmark" aria-label="Boarnerges">
          {characters.map((char, index) => (
            <span
              key={index}
              className={index === 0 ? "brand-letter--first" : ""}
              style={{ "--letter-index": index }}
            >
              {char}
            </span>
          ))}
        </p>
        <span className="brand-code" aria-hidden="true">
          &lt;/&gt;
        </span>
      </div>

      {/* Desktop view */}
      <a
        href="https://boarnergesresume.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        <FileText size={16} strokeWidth={2.1} aria-hidden="true" />
        <span>Resume</span>
      </a>

      {/* Mobile view */}
      <div className="mobile-resume">
        <button
          id="mobile-menu-button"
          type="button"
          onClick={toggleMenu}
          className="mobile-resume__button"
          aria-controls="mobile-resume-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <Menu size={24} />
        </button>

        {menuOpen && (
          <div
            id="mobile-resume-menu"
            className="mobile-resume__menu"
          >
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <a
                href="https://boarnergesresume.netlify.app"
                className="mobile-resume__link"
                role="menuitem"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
