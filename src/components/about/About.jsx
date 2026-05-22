import "./about.css";

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
    <section id="about" className="about-section">
      <div className="about-shell container" data-reveal>
        <div className="about-grid">
          <div className="about-lede">
            <p className="section-kicker">About</p>
            <h2>Software Engineer, Technical Product Manager, AI Builder.</h2>
            <p>
              I am a Technical Product Strategist based in Abuja, Nigeria, dedicated to the art of shipping high-stakes software. For the past 5 years, I’ve navigated the full lifecycle of production systems—evolving from a frontend specialist into a full-stack architect who views code through the lens of product viability.
            </p>
            <p>
              I bridge high-level product strategy with deep-stack implementation, ensuring that technical architecture always serves the ultimate user outcome. My methodology integrates Agile delivery and robust API design into a singular goal: shipping software that works end-to-end.
            </p>
            <p>
              Today, my focus is on the <strong>Agentic Shift.</strong> I don’t just build software; I design intelligent systems that reason, use tools, and execute intent. Whether I'm integrating LLMs into existing products or designing autonomous workflows, I architect for a future where software is an active collaborator, not just a static tool.
            </p>

            <p>
              When I'm not building, I'm exploring the boundaries of what AI can do next.
            </p>
          </div>

          <aside className="about-caption">
            <div className="caption-card">
              <p className="caption-text">
                From ambiguous problem to shipped product — with AI as the force multiplier.
              </p>
              <div className="caption-divider"></div>
              <p className="caption-subtext">
                Technical enough to architect it. Strategic enough to know if it's worth building.
              </p>
            </div>
          </aside>
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
    </section>
  );
};

export default About;
