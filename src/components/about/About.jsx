import "./about.css";

const proofPoints = [
  {
    label: "Interface judgment",
    value: "Turns messy flows into calm, scannable screens.",
  },
  {
    label: "Frontend craft",
    value: "Builds responsive React UI with accessible interaction states.",
  },
  {
    label: "Delivery signal",
    value: "Ships live projects recruiters can open, test, and compare.",
  },
];

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Vite",
  "REST APIs",
  "Accessibility",
  "Responsive UI",
  "Figma",
  "State management",
  "Design tokens",
  "Performance",
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-layout">
        <div className="about-copy">
          <p className="section-kicker">Proof before personality</p>
          <h2>Segun builds the parts of a product people actually touch.</h2>
          <p>
            The work is focused on interface quality: clear hierarchy, sturdy
            responsive behavior, deliberate motion, and enough technical range
            to move from prototype to production without losing polish.
          </p>
        </div>

        <div className="about-proof" aria-label="Frontend proof points">
          {proofPoints.map((point, index) => (
            <article key={point.label} className="about-proof__item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{point.label}</h3>
              <p>{point.value}</p>
            </article>
          ))}
        </div>

        <div className="skill-cloud" aria-label="Frontend skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
