import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";

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
        <motion.p 
          className="brand-wordmark" 
          aria-label="Boarnerges"
          whileHover="hover"
        >
          {characters.map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hover: { y: -2 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={index === 0 ? "brand-letter--first" : ""}
              style={{ "--letter-index": index }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
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
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-resume-menu"
              className="mobile-resume__menu"
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
