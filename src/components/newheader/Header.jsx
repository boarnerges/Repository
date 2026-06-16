import { useState } from "react";
import { Link } from "react-router-dom";
import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";
import { ArrowUpRight, Mail, Code, Cpu, Database } from "lucide-react";
import myPortrait from "../../assets/me-blue.png";

const focusRoles = [
  { label: "Software Engineering", color: "oklch(75% 0.18 156)" },
  { label: "Technical Product Management", color: "oklch(70% 0.2 25)" },
  { label: "AI & Agents", color: "oklch(65% 0.25 260)" },
  { label: "Automation", color: "oklch(75% 0.15 320)" }
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeRole = focusRoles[currentIndex];

  const heroBg = "/images/hero/header-hero.jpg";

  return (
    <header id="home" className="site-header" style={{ "--focus-color": activeRole.color }}>
      <div className="hero-bg-image-wrap">
        <div className="hero-bg-overlay"></div>
        <img src={heroBg} alt="" className="hero-bg-image" loading="eager" />
      </div>

      <div className="container">
        <BoarnergesLogo />
      </div>

      <main className="hero-content container">
        <div className="hero-grid">
          <div className="hero-copy-block">
            <div 
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
            </div>
            
            <h1
              className="hero-title"
            >
              Building the future of <span>intent.</span>
            </h1>

            <p 
              className="hero-description"
            >
              Precision-engineered systems. Product-led strategy. <br />
              I build, lead, and ship agentic software that reasons and acts.
            </p>

            <div 
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
            </div>
          </div>

          <div 
            className="hero-visual-block"
          >
            <div className="hero-visual-glow"></div>

            {/* Decorative Floating Icons */}
            <div 
              className="floating-icon icon-1"
            >
              <Code size={20} color={activeRole.color} />
            </div>
            <div 
              className="floating-icon icon-2"
            >
              <Cpu size={20} color="oklch(70% 0.17 294)" />
            </div>
            <div 
              className="floating-icon icon-3"
            >
              <Database size={20} color="oklch(75% 0.18 58)" />
            </div>

            <div className="hero-portrait-wrap">
              <div className="hero-portrait-overlay"></div>
              <img src={myPortrait} alt="Segun portrait" loading="eager" />
              <div className="hero-portrait-badge">
                <div className="status-dot"></div>
                <span>Based in Abuja, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}
