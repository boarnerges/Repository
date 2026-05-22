import "./ai-automation.css";

const AiAutomation = () => {
  const callouts = [
    {
      title: "Agent development",
      description: "Building autonomous agents that leverage tool-calling and LLM reasoning to execute <strong>multi-step tasks</strong> without manual oversight.",
    },
    {
      title: "Workflow automation",
      description: "Orchestrating production-grade automations in <strong>n8n and Make</strong> that reclaim <strong>10+ hours</strong> of manual engineering time per week.",
    },
    {
      title: "LLM integration",
      description: "Embedding intelligence into core product surfaces—from <strong>context-aware routing</strong> to automated intent extraction and synthesis.",
    },
  ];

  return (
    <section id="ai-automation" className="ai-automation-section container" data-reveal>
      <div className="ai-automation-grid">
        <div className="ai-automation-content">
          <p className="section-kicker">Capability</p>
          <h2>The Agentic Shift: Engineering with Intent.</h2>
          
          <div className="ai-automation-narrative-wrap">
            <p className="ai-automation-narrative">
              I am focused on the transition from static software to <strong>intelligent systems.</strong> I architect AI agents that don't just respond, but reason and act—bridging the gap between raw LLM power and production-ready utility.
            </p>
            <p className="ai-automation-narrative">
              I view AI not as a feature, but as a core operational layer. I build these systems with a <strong>production-first mindset</strong>, ensuring every automation is resilient, observable, and architected for scale.
            </p>
          </div>

          <div className="ai-automation-stack">
            <span className="stack-label">STACK:</span>
            <span className="stack-items">OpenAI API // Anthropic // LangChain // n8n // Vector DBs // Python</span>
          </div>
        </div>

        <div className="ai-automation-callouts">
          {callouts.map((callout, index) => (
            <div key={index} className="ai-automation-callout">
              <div className="callout-header">
                <div className="callout-dot"></div>
                <h3>{callout.title}</h3>
              </div>
              <p dangerouslySetInnerHTML={{ __html: callout.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAutomation;
