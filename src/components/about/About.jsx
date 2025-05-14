import React from "react";
import "./about.css"; // Make sure your CSS file includes styles for .stuck-grid, .grid-item, and .special

const About = () => {
  return (
    <section id="about" class="scroll-container">
      <div className="stuck-grid">
        <div className="grid-item special">
          <b>Frontend</b>
        </div>
        <div className="grid-item">Prop Drilling</div>
        <div className="grid-item">Custom Hook</div>
        <div className="grid-item">JAMstack</div>
        <div className="grid-item">Server Components</div>
        <div className="grid-item">Hydration</div>
        <div className="grid-item special">
          <b>React</b>
        </div>

        <div className="grid-item">JSX</div>
        <div className="grid-item">Virtual DOM</div>
        <div className="grid-item">Radix UI</div>
        <div className="grid-item">Framer Motion</div>
        <div className="grid-item">React Router</div>

        <div className="grid-item special">
          <b>Next.js</b>
        </div>
        <div className="grid-item">Prettier</div>
        <div className="grid-item">Code Splitting</div>
        <div className="grid-item">Lazy Loading</div>

        <div className="grid-item special">
          <b>Tailwind CSS</b>
        </div>
        <div className="grid-item special">
          <b>TypeScript</b>
        </div>
        <div className="grid-item">Webpack</div>
        <div className="grid-item">Vite</div>
        <div className="grid-item">Babel</div>
        <div className="grid-item special">
          <b>REST API</b>
        </div>
        <div className="grid-item">GraphQL</div>
        <div className="grid-item special">
          <b>Component</b>
        </div>
        <div className="grid-item">State Management</div>
        <div className="grid-item">useEffect()</div>
        <div className="grid-item special">
          <b>Context API</b>
        </div>
        <div className="grid-item">Zustand</div>
        <div className="grid-item">Redux</div>
        <div className="grid-item">SSR</div>
        <div className="grid-item">CSR</div>
        <div className="grid-item">ISR</div>
        <div className="grid-item special">
          <b>Atomic Design</b>
        </div>
        <div className="grid-item">CSS-in-JS</div>
        <div className="grid-item">Styled Components</div>
        <div className="grid-item">Emotion</div>
        <div className="grid-item">PostCSS</div>
        <div className="grid-item">SCSS</div>
        <div className="grid-item special">
          <b>Accessibility</b>
        </div>
        <div className="grid-item">ARIA</div>
        <div className="grid-item">Figma</div>
        <div className="grid-item">Design Tokens</div>
        <div className="grid-item special">
          <b>UI Library</b>
        </div>
        <div className="grid-item">ShadCN/UI</div>
        <div className="grid-item">React Query</div>
        <div className="grid-item">TanStack Table</div>
        <div className="grid-item special">
          <b>Fetch API</b>
        </div>
        <div className="grid-item">Axios</div>
        <div className="grid-item">ESLint</div>
      </div>
    </section>
  );
};

export default About;
