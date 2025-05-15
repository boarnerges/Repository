import { useState, useEffect } from "react";

export default function BoarnergesLogo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setShow(true);
  }, []);

  const text = "Boarnerges";
  const characters = text.split("");

  return (
    <div className="bg-gray-900 flex justify-between cursor-pointer items-center overflow-hidden h-32">
      <div className="flex items-center gap-2">
        <h1 className="font-sans font-bold text-5xl tracking-tight flex">
          {characters.map((char, index) => (
            <span
              key={index}
              className={`${
                index === 0 ? "text-teal-400 relative" : "text-gray-300"
              } 
                         transition-all duration-500 transform
                         ${
                           show
                             ? "translate-y-0 opacity-100"
                             : "-translate-y-16 opacity-0"
                         }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {char}
              {index === 0 && (
                <span
                  className={`absolute -bottom-1 left-0 w-full h-1 bg-teal-400 rounded-full transition-all duration-700 transform 
                                ${show ? "scale-x-100" : "scale-x-0"}`}
                  style={{
                    transitionDelay: `${characters.length * 150 + 200}ms`,
                  }}
                ></span>
              )}
            </span>
          ))}
        </h1>

        <span
          className={`text-teal-400 font-mono animate-bounce text-2xl transition-all duration-500 transform
                     ${
                       show
                         ? "translate-y-0 opacity-100"
                         : "-translate-y-16 opacity-0"
                     }`}
          style={{ transitionDelay: `${characters.length * 150 + 300}ms` }}
        >
          &lt;/&gt;
        </span>
      </div>
      <a
        href="https://glittery-blini-097b77.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`border border-teal-400 text-teal-400 px-4 py-2 rounded transition-all duration-500 transform hover:bg-teal-400/10
                  ${
                    show
                      ? "translate-y-0 opacity-100"
                      : "translate-y-16 opacity-0"
                  }`}
        style={{ transitionDelay: `${characters.length * 150 + 400}ms` }}
      >
        Resume
      </a>
    </div>
  );
}
