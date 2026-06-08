import "./process.css";

const Process = ({ withHeader = false }) => {
  const steps = [
    {
      number: "01",
      title: "Decomposition & Specs",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800",
      description: "Breaking down complex ambiguity into core requirements and technical specifications. Bridging the gap between product vision and engineering constraints.",
    },
    {
      number: "02",
      title: "Architectural Implementation",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      description: "Engineering scalable systems, designing robust API contracts, and building resilient codebases. Focusing on production-grade reliability and performance.",
    },
    {
      number: "03",
      title: "Deployment & Optimization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
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
              <img src={step.image} alt={step.title} />
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
