import "./newHeader.css";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Header() {
  return (
    <header id="home" className="site-header">
      <BoarnergesLogo />

      <main className="hero-content container">
        <div className="hero-kicker">
          <span>Frontend engineer</span>
          <span>React interfaces</span>
          <span>Open to work</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy-block">
            <p className="hero-intro">Hi, I am Segun.</p>
            <h1>Interfaces that feel fast before the clock does.</h1>
            <p className="hero-copy">
              I build React products with strong layout discipline, accessible
              interactions, and enough visual voltage to make the work stick.
            </p>

            <div className="hero-actions">
              <a href="#portfolio" className="hero-button hero-button--primary">
                <span>See the work</span>
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </a>
              <a href="#cta" className="hero-button hero-button--quiet">
                <Mail size={18} strokeWidth={2.1} aria-hidden="true" />
                <span>Contact Segun</span>
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Portfolio highlights">
            <div className="hero-panel__line">
              <span>Current focus</span>
              <strong>Responsive product UI</strong>
            </div>
            <div className="hero-panel__line">
              <span>Stack</span>
              <strong>React, Next.js, Tailwind, Vite</strong>
            </div>
            <div className="hero-panel__line">
              <span>Strength</span>
              <strong>Turning rough flows into crisp screens</strong>
            </div>
            <div className="hero-panel__code" aria-hidden="true">
              <span>const craft = </span>
              <b>"ship polished work";</b>
            </div>
          </aside>
        </div>
      </main>
    </header>
  );
}
