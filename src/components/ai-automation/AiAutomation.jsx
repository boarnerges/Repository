import { cn } from "@/lib/utils";

const AiAutomation = () => {
  const callouts = [
    {
      title: "Agent development",
      description: "Building autonomous agents that leverage tool-calling and LLM reasoning to execute <strong class='text-primary'>multi-step tasks</strong> without manual oversight.",
    },
    {
      title: "Workflow automation",
      description: "Orchestrating production-grade automations in <strong class='text-primary'>n8n and Make</strong> that reclaim <strong class='text-primary'>10+ hours</strong> of manual engineering time per week.",
    },
    {
      title: "LLM integration",
      description: "Embedding intelligence into core product surfaces—from <strong class='text-primary'>context-aware routing</strong> to automated intent extraction and synthesis.",
    },
  ];

  return (
    <section id="ai-automation" className="container py-20" data-reveal>
      <div className="grid grid-cols-12 gap-12 max-lg:flex max-lg:flex-col">
        <div className="col-span-7 space-y-8">
          <div>
            <p className="text-primary text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-4">Capability</p>
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-tight mb-8">The Agentic Shift: Engineering with Intent.</h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
            <p>
              I am focused on the transition from static software to <strong className="text-foreground">intelligent systems.</strong> I architect AI agents that don't just respond, but reason and act—bridging the gap between raw LLM power and production-ready utility.
            </p>
            <p>
              I view AI not as a feature, but as a core operational layer. I build these systems with a <strong className="text-foreground">production-first mindset</strong>, ensuring every automation is resilient, observable, and architected for scale.
            </p>
          </div>

          <div className="pt-6 flex items-center gap-4">
            <span className="text-[0.65rem] font-bold tracking-widest text-primary uppercase">STACK:</span>
            <div className="h-px flex-1 bg-border/50" />
            <span className="text-[0.7rem] font-mono text-muted-foreground whitespace-nowrap">OpenAI // Anthropic // LangChain // n8n // Vector DBs // Python</span>
          </div>
        </div>

        <div className="col-span-5 flex flex-col gap-4">
          {callouts.map((callout, index) => (
            <div key={index} className="p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)] group-hover:scale-125 transition-transform" />
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{callout.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: callout.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiAutomation;
