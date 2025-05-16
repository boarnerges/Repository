import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function BoarnergesLogo() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setShow(true);
  }, []);

  const text = "Boarnerges";
  const characters = text.split("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-gray-900 mt-10 flex justify-between items-center overflow-hidden h-10 md:h-32">
      <div className="flex items-center gap-2">
        <h1 className="font-sans font-bold text-5xl tracking-tight flex">
          {characters.map((char, index) => (
            <span
              key={index}
              className={`${
                index === 0 ? "text-teal-400 relative" : "text-gray-300"
              } transition-all duration-500 transform ${
                show ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
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
        </h1>
        <span
          className={`text-teal-400 font-mono text-2xl transition-all duration-500 transform ${
            show ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
          }`}
          style={{ transitionDelay: `${characters.length * 150 + 300}ms` }}
        >
          &lt;/&gt;
        </span>
      </div>

      {/* Desktop view */}
      <a
        href="#resume"
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
          onClick={toggleMenu}
          className={`text-teal-400 p-2 rounded transition-all duration-500 transform ${
            show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
          style={{ transitionDelay: `${characters.length * 150 + 400}ms` }}
        >
          <Menu size={24} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="https://glittery-blini-097b77.netlify.app/"
                className="block px-4 py-1 text-sm text-teal-400 hover:bg-gray-700"
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
