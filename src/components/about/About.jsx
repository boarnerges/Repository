import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const skillGroups = [
  {
    title: "Engineering & Development",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "HTML", "CSS", "REST APIs", "GraphQL", "Git", "GitHub", "CI/CD", "Netlify", "Vercel", "Testing (Jest / Vitest)"],
  },
  {
    title: "AI & Automation",
    items: ["AI agent development", "LLM integration (OpenAI / Anthropic / Gemini)", "Prompt engineering", "Tool-calling & function calling", "Agentic workflow design", "n8n", "Make (Integromat)", "Zapier", "Workflow automation", "Process automation", "LangChain (or equivalent)", "RAG pipelines", "AI-powered product features"],
  },
  {
    title: "System & Architecture",
    items: ["System design", "API design & contract definition", "Third-party integrations", "Microservices thinking", "Component architecture", "Scalability planning", "Technical documentation", "Error handling patterns", "State management"],
  },
  {
    title: "Product & Delivery",
    items: ["Agile / Scrum", "Sprint planning", "Jira", "Stakeholder communication", "Requirements definition", "Product roadmapping", "User story writing", "Prioritisation frameworks", "Cross-functional collaboration", "Technical project management"],
  },
  {
    title: "Tools & Platforms",
    items: ["VS Code", "Postman", "Figma (reading designs)", "Notion", "Slack", "GitHub Actions", "Docker (awareness)", "Firebase", "Supabase", "MongoDB", "PostgreSQL"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container" data-reveal>
        <div className="grid grid-cols-12 gap-12 max-lg:flex max-lg:flex-col">
          <div className="col-span-8 space-y-8">
            <div>
              <p className="text-primary text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-4">About</p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-8">Software Engineer, Technical Product Manager, AI Builder.</h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              <p>
                I am a Technical Product Strategist based in Abuja, Nigeria, dedicated to the art of shipping high-stakes software. For the past 5 years, I’ve navigated the full lifecycle of production systems—evolving from a frontend specialist into a full-stack architect who views code through the lens of product viability.
              </p>
              <p>
                I bridge high-level product strategy with deep-stack implementation, ensuring that technical architecture always serves the ultimate user outcome. My methodology integrates Agile delivery and robust API design into a singular goal: shipping software that works end-to-end.
              </p>
              <p>
                Today, my focus is on the <strong className="text-foreground">Agentic Shift.</strong> I don’t just build software; I design intelligent systems that reason, use tools, and execute intent. Whether I'm integrating LLMs into existing products or designing autonomous workflows, I architect for a future where software is an active collaborator, not just a static tool.
              </p>
              <p>
                When I'm not building, I'm exploring the boundaries of what AI can do next.
              </p>
            </div>
          </div>

          <aside className="col-span-4 flex flex-col justify-center">
            <div className="bg-card border border-border p-8 rounded-2xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <p className="text-lg font-bold leading-snug mb-6 relative z-10">
                From ambiguous problem to shipped product — with AI as the force multiplier.
              </p>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                Technical enough to architect it. Strategic enough to know if it's worth building.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <article key={group.title} className="space-y-6 p-6 rounded-2xl border border-transparent hover:border-border hover:bg-muted/30 transition-all duration-300">
              <h3 className="text-lg font-bold border-l-4 border-primary pl-4 uppercase tracking-wider text-sm">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="bg-muted text-muted-foreground border-none px-3 py-1 font-bold text-[0.7rem] hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {item}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
