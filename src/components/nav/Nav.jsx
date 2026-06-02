import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Home, User, Briefcase, FolderCode, Cpu, Workflow, MessageSquare, Sun, Moon } from "lucide-react";
import "./nav.css";

const navItems = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/about", label: "About", Icon: User },
  { to: "/experience", label: "Experience", Icon: Briefcase },
  { to: "/portfolio", label: "Projects", Icon: FolderCode },
  { to: "/ai-automation", label: "AI/Auto", Icon: Cpu },
  { to: "/process", label: "Process", Icon: Workflow },
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
    <motion.nav 
      initial={{ y: 80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
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
            
            <AnimatePresence>
              {hoveredItem === item.to && (
                <motion.span
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: -45, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="nav-tooltip"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
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
        
        <AnimatePresence>
          {hoveredItem === "theme" && (
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: -45, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="nav-tooltip"
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.nav>
  );
};

export default Nav;
