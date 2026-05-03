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
    <div className="site-brand bg-gray-900 flex justify-between items-center">
      <div className="brand-mark flex items-center gap-2 min-w-0">
        <p className="brand-wordmark font-sans font-bold tracking-tight flex" aria-label="Boarnerges">
          {characters.map((char, index) => (
            <span
              key={index}
              className={`${
                index === 0 ? "text-teal-400 relative" : "text-gray-300"
              } ${waveReady ? "brand-letter" : ""} transition-all duration-500 transform ${
                show ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                animationDelay: `${index * 70}ms`,
              }}
            >
              {char}
              {index === 0 && (
                <span
                  className={`absolute -bottom-1 left-0 w-full h-1 bg-teal-400 rounded-full transition-all duration-700 transform ${
                    show ? "scale-x-100" : "scale-x-0"
                  }`}
                  style={{
                    transitionDelay: `${characters.length * 150 + 200}ms`,
                  }}
                ></span>
              )}
            </span>
          ))}
        </p>
        <span
          className={`brand-code brand-code--bounce text-teal-400 font-mono transition-all duration-500 transform ${
            show ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
          }`}
          style={{ transitionDelay: `${characters.length * 150 + 300}ms` }}
        >
          &lt;/&gt;
        </span>
      </div>

      {/* Desktop view */}
      <a
        href="https://boarnergesresume.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden md:block border border-teal-400 text-teal-400 px-4 py-2 rounded transition-all duration-500 transform hover:bg-teal-400/10 ${
          show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
        style={{ transitionDelay: `${characters.length * 150 + 400}ms` }}
      >
        Resume
      </a>

      {/* Mobile view */}
      <div className="md:hidden relative">
        <button
          id="mobile-menu-button"
          type="button"
          onClick={toggleMenu}
          className={`text-teal-400 p-2 rounded transition-all duration-500 transform ${
            show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
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
            className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
          >
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              <a
                href="https://boarnergesresume.netlify.app"
                className="block px-4 py-3 text-sm text-teal-400 hover:bg-gray-700"
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
