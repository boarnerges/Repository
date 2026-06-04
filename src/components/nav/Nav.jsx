import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { Home, User, Briefcase, FolderCode, Cpu, Workflow, MessageSquare, Sun, Moon } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme; // Tailwind v4 uses class for theme
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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-1.5 p-2 rounded-full border border-border bg-background/80 backdrop-blur-lg shadow-2xl w-max max-sm:bottom-4 max-sm:gap-1 max-sm:p-1.5"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const Icon = item.Icon;

        return (
          <Tooltip key={item.to} delayDuration={0}>
            <TooltipTrigger asChild>
              <NavLink
                to={item.to}
                className={({ isActive }) => cn(
                  "flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:-translate-y-1 max-sm:w-10 max-sm:h-10",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_oklch(var(--primary))]" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                aria-label={item.label}
              >
                <Icon size={18} strokeWidth={2.5} />
              </NavLink>
            </TooltipTrigger>
            <TooltipContent side="top" className="mb-2 font-bold uppercase tracking-wider text-[0.65rem]">
              {item.label}
            </TooltipContent>
          </Tooltip>
        );
      })}

      <div className="w-px h-6 bg-border mx-2 max-sm:mx-1"></div>

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button 
            className="flex items-center justify-center w-11 h-11 rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground cursor-pointer max-sm:w-10 max-sm:h-10"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="mb-2 font-bold uppercase tracking-wider text-[0.65rem]">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </TooltipContent>
      </Tooltip>
    </motion.nav>
  );
};

export default Nav;
