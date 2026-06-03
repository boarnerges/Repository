import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";
import { ArrowUpRight, Mail } from "lucide-react";

const focusRoles = [
  { label: "Software Engineering", color: "oklch(75% 0.18 156)" },
  { label: "Technical Product Management", color: "oklch(70% 0.2 25)" },
  { label: "AI & Agents", color: "oklch(65% 0.25 260)" },
  { label: "Automation", color: "oklch(75% 0.15 320)" }
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeRole = focusRoles[currentIndex];

  return (
    <header id="home" className="site-header" style={{ "--focus-color": activeRole.color }}>
      <BoarnergesLogo />

      <main className="hero-content container">
        <div className="hero-grid">
          <div className="hero-copy-block">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badges"
            >
              {focusRoles.map((role, index) => (
                <button
                  key={role.label}
                  onClick={() => setCurrentIndex(index)}
                  className={`hero-tag ${currentIndex === index ? "hero-tag--active" : ""}`}
                  style={{ 
                    "--tag-color": role.color,
                  }}
                >
                  {role.label}
                </button>
              ))}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-title"
            >
              Building the future of <span>intent.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-description"
            >
              Precision-engineered systems. Product-led strategy. <br />
              I build, lead, and ship agentic software that reasons and acts.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-actions"
            >
              <Link to="/portfolio" className="hero-button hero-button--primary" style={{ backgroundColor: activeRole.color, borderColor: activeRole.color }}>
                <span>View Projects</span>
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="hero-button hero-button--quiet">
                <Mail size={18} strokeWidth={2.1} aria-hidden="true" />
                <span>Get in touch</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    </header>
  );
}
