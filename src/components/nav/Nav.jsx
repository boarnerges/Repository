import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FolderCode, Cpu, Workflow, MessageSquare } from "lucide-react";
import "./nav.css";

const navItems = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: User },
  { href: "#experience", label: "Experience", Icon: Briefcase },
  { href: "#portfolio", label: "Projects", Icon: FolderCode },
  { href: "#ai-automation", label: "AI/Auto", Icon: Cpu },
  { href: "#process", label: "Process", Icon: Workflow },
  { href: "#cta", label: "Contact", Icon: MessageSquare },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(item.href);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: 80, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const Icon = item.Icon;
        const isActive = activeNav === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHoveredItem(item.href)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setActiveNav(item.href)}
            className={isActive ? "active" : ""}
            aria-label={item.label}
          >
            <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            
            <AnimatePresence>
              {hoveredItem === item.href && (
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
          </a>
        );
      })}
    </motion.nav>
  );
};

export default Nav;
