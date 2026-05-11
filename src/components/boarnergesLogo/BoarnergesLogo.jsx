import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function BoarnergesLogo() {
  const [show, setShow] = useState(false);
  const [waveReady, setWaveReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setShow(true);

    const timer = setTimeout(() => {
      setWaveReady(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const text = "Boarnerges";
  const characters = text.split("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="site-brand">
      <div className="brand-mark">
        <p className="brand-wordmark" aria-label="Boarnerges">
          {characters.map((char, index) => (
            <span
              key={index}
              className={waveReady ? "brand-letter" : ""}
              style={{
                transitionDelay: `${index * 150}ms`,
                animationDelay: `${index * 70}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </p>
        <span
          className={`brand-code ${show ? "brand-code--ready" : ""}`}
          style={{ transitionDelay: `${characters.length * 150 + 300}ms` }}
        >
          /fe
        </span>
      </div>

      <a
        href="https://boarnergesresume.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="brand-resume"
        style={{ transitionDelay: `${characters.length * 150 + 400}ms` }}
      >
        Resume
      </a>

      <div className="brand-menu-wrap">
        <button
          id="mobile-menu-button"
          type="button"
          onClick={toggleMenu}
          className="brand-menu-button"
          style={{ transitionDelay: `${characters.length * 150 + 400}ms` }}
          aria-controls="mobile-resume-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <Menu size={24} />
        </button>

        {menuOpen && (
          <div
            id="mobile-resume-menu"
            className="brand-menu"
          >
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <a
                href="https://boarnergesresume.netlify.app"
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
