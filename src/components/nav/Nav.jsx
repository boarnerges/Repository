import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Briefcase, FolderCode, Cpu, Workflow, MessageSquare, Sun, Moon } from "lucide-react";
import "./nav.css";

const navItems = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: User },
  { to: "/experience", label: "Experience", Icon: Briefcase },
  { to: "/portfolio", label: "Projects", Icon: FolderCode },
  { to: "/capabilities", label: "Capabilities", Icon: Cpu },
  { to: "/case-study", label: "Work", Icon: Workflow },
  { to: "/contact", label: "Contact", Icon: MessageSquare },
];

const Nav = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <nav 
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const Icon = item.Icon;

        return (
          <NavLink
            key={item.to}
            to={item.to}
            onMouseEnter={() => setHoveredItem(item.to)}
            onMouseLeave={() => setHoveredItem(null)}
            className={({ isActive }) => (isActive ? "active" : "")}
            aria-label={item.label}
          >
            <Icon size={18} strokeWidth={2} />

            {hoveredItem === item.to && (
                <span
                  className="nav-tooltip"
                >
                  {item.label}
                </span>
            )}
          </NavLink>
        );
      })}

      <div className="nav-divider"></div>

      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        onMouseEnter={() => setHoveredItem("theme")}
        onMouseLeave={() => setHoveredItem(null)}
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}

        {hoveredItem === "theme" && (
            <span
              className="nav-tooltip"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
        )}
      </button>
    </nav>
  );

};

export default Nav;
