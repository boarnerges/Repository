import "./process.css";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Decomposition & Specs",
      description: "Breaking down complex ambiguity into core requirements and technical specifications. Bridging the gap between product vision and engineering constraints.",
    },
    {
      number: "02",
      title: "Architectural Implementation",
      description: "Engineering scalable systems, designing robust API contracts, and building resilient codebases. Focusing on production-grade reliability and performance.",
    },
    {
      number: "03",
      title: "Deployment & Optimization",
      description: "Shipping production systems and executing continuous optimization loops. Gathering telemetry to refine the product and scale the technical architecture.",
    },
  ];

  return (
    <section id="process" className="process-section container" data-reveal>
      <p className="section-kicker">Methodology</p>
      <h2>Execution Framework: The Lifecycle of a Shipped System.</h2>
      
      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <div className="process-step-header">
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
            </div>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
