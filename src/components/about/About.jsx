import "./about.css";

const skillGroups = [
  {
    title: "Build systems",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Interface craft",
    items: ["Components", "Accessibility", "Responsive UI", "Figma"],
  },
  {
    title: "Product patterns",
    items: ["Custom Hooks", "State Management", "REST API", "Vite"],
  },
];

const principles = [
  "Layout that survives real content",
  "Interactions with keyboard and touch in mind",
  "Code small enough to change without ceremony",
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-shell container" data-reveal>
        <div className="about-lede">
          <p className="section-kicker">About</p>
          <h2>I turn product intent into interfaces people can actually use.</h2>
          <p>
            My work sits where frontend engineering meets design judgment:
            responsive layouts, accessible controls, and UI states that hold up
            after the happy path is gone.
          </p>
        </div>

        <div className="about-proof">
          <div className="about-proof__rail" aria-hidden="true">
            <span>React</span>
            <span>Next.js</span>
            <span>Accessibility</span>
            <span>Motion</span>
            <span>Systems</span>
          </div>

          <div className="about-principles">
            {principles.map((principle, index) => (
              <p key={principle}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {principle}
              </p>
            ))}
          </div>

          <div className="about-skills">
            {skillGroups.map((group) => (
              <article key={group.title} className="about-skill">
                <h3>{group.title}</h3>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
