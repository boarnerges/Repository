import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";

const focusRoles = [
  { label: "Software Engineering", color: "oklch(75% 0.18 156)" }, // Greenish
  { label: "Technical Product Management", color: "oklch(70% 0.2 25)" }, // Ember/Orange
  { label: "AI & Agents", color: "oklch(65% 0.25 260)" }, // Electric Blue
  { label: "Automation", color: "oklch(75% 0.15 320)" } // Purple
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoCycle, setIsAutoCycle] = useState(true);

  useEffect(() => {
    if (!isAutoCycle) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % focusRoles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoCycle]);

  const handleFocusClick = (index) => {
    setCurrentIndex(index);
    setIsAutoCycle(false);
  };

  const activeRole = focusRoles[currentIndex];

  return (
    <header id="home" className="site-header" style={{ "--focus-color": activeRole.color }}>
      <BoarnergesLogo />

      <main className="hero-content container">
        <div className="hero-focus-mode">
          <div className="hero-focus-status">
            <motion.span 
              animate={{ 
                opacity: [0.4, 1, 0.4], 
                scale: [1, 1.2, 1],
                boxShadow: [
                  `0 0 4px ${activeRole.color}`,
                  `0 0 12px ${activeRole.color}`,
                  `0 0 4px ${activeRole.color}`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="status-dot"
              style={{ backgroundColor: activeRole.color }}
            />
            <span className="status-text" style={{ color: activeRole.color }}>
              {isAutoCycle ? "AUTO-CYCLING" : "MANUAL LOCK"}: {activeRole.label.toUpperCase()}
            </span>
          </div>
          
          <div className="hero-badges">
            {focusRoles.map((role, index) => (
              <motion.button
                key={role.label}
                onClick={() => handleFocusClick(index)}
                initial={false}
                animate={{
                  opacity: currentIndex === index ? 1 : 0.4,
                  scale: currentIndex === index ? 1.05 : 1,
                  backgroundColor: currentIndex === index ? activeRole.color : "transparent",
                  borderColor: currentIndex === index ? activeRole.color : "var(--color-line)",
                  color: currentIndex === index ? "var(--color-bg-deep)" : "var(--color-soft)"
                }}
                className={`hero-badge ${currentIndex === index ? "hero-badge--active" : ""}`}
                style={{ cursor: "pointer", borderStyle: "solid" }}
              >
                {role.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="hero-grid">
          <div className="hero-copy-block">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hero-intro"
            >
              Orchestrating the Agentic Shift.
            </motion.p>
            
            <motion.h1
              key="hero-h1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hero-title"
            >
              Precision-engineered. <br />
              Product obsessed. <br />
              I build, lead, and ship <span>agentic systems.</span>
            </motion.h1>

            <div className="hero-actions">
              <a href="#portfolio" className="hero-button hero-button--primary" style={{ backgroundColor: activeRole.color, borderColor: activeRole.color }}>
                <span>See the work</span>
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </a>
              <a href="#cta" className="hero-button hero-button--quiet">
                <Mail size={18} strokeWidth={2.1} aria-hidden="true" />
                <span>Contact Segun</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
