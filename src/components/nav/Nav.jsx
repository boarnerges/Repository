import "./nav.css";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceFill } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const navItems = [
  { href: "#home", label: "Home", Icon: AiOutlineHome },
  { href: "#about", label: "About", Icon: AiOutlineUser },
  { href: "#portfolio", label: "Portfolio", Icon: RiServiceFill },
  { href: "#cta", label: "Contact", Icon: BiMessageSquareDetail },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.38;
      const currentSection = sections.reduce((closest, section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);

        if (!closest || distance < closest.distance) {
          return { id: section.id, distance };
        }

        return closest;
      }, null);

      if (currentSection) {
        setActiveNav(`#${currentSection.id}`);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="bg-gray-900" aria-label="Primary navigation">
      {navItems.map((item) => {
        const Icon = item.Icon;

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setActiveNav(item.href)}
            className={activeNav === item.href ? "active" : ""}
            aria-label={item.label}
            aria-current={activeNav === item.href ? "page" : undefined}
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
