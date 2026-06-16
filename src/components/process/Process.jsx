import "./process.css";

const Process = ({ withHeader = false }) => {
  const steps = [
    {
      number: "01",
      title: "Decomposition & Specs",
      image: "/images/process/process-1.jpg",
      description: "Breaking down complex ambiguity into core requirements and technical specifications. Bridging the gap between product vision and engineering constraints.",
    },
    {
      number: "02",
      title: "Architectural Implementation",
      image: "/images/process/process-2.jpg",
      description: "Engineering scalable systems, designing robust API contracts, and building resilient codebases. Focusing on production-grade reliability and performance.",
    },
    {
      number: "03",
      title: "Deployment & Optimization",
      image: "/images/process/process-3.jpg",
      description: "Shipping production systems and executing continuous optimization loops. Gathering telemetry to refine the product and scale the technical architecture.",
    },
  ];

  return (
    <section id="process" className={`process-section container ${withHeader ? 'process-section--subpage' : ''}`} data-reveal>
      {!withHeader && (
        <>
          <p className="section-kicker">Methodology</p>
          <h2>Execution Framework: The Lifecycle of a Shipped System.</h2>
        </>
      )}
      
      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <div className="process-step-image">
              <img src={step.image} alt={step.title} loading="lazy" />
            </div>
            <div className="process-step-body">
              <div className="process-step-header">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
