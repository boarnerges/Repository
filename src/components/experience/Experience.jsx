import { Card as ShadcnCard, CardHeader as ShadcnCardHeader, CardContent as ShadcnCardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const workExperience = [
  {
    company: "Ullweb",
    title: "Technical Product Manager",
    dateRange: "Sep 2024 – Present",
    bulletPoints: [
      "Drove 20% productivity gain aligning sprint cycles to business goals",
      "Led React SaaS UI with API-integrated features; cut integration rework by 30%",
      "Tracked adoption and retention using Mixpanel and Google Analytics",
    ],
    tech: ["React", "TypeScript", "REST APIs", "Mixpanel", "Google Analytics", "Jira"],
  },
  {
    company: "eHealth4everyone",
    title: "TPM / Project Manager",
    dateRange: "Nov 2022 – Jul 2024",
    bulletPoints: [
      "Delivered OpenMRS EMR across hospitals — improved data accessibility by 25%",
      "Co-led VR neonatal training app (University of Washington partnership)",
      "Launched multi-tenant SaaS platform with LLM-powered EHR clinical assistant",
      "Coordinated Botswana Health Innovation System for WHO AFRO",
    ],
    tech: ["OpenMRS", "React", "LLM/AI integration", "VR (Unity)", "Agile/Scrum"],
  },
  {
    company: "NITDA",
    title: "TPM Intern",
    dateRange: "Feb – Sep 2021",
    bulletPoints: [
      "Contributed to internal software tools using JavaScript",
      "Applied Agile methods to improve delivery coordination",
    ],
    tech: ["JavaScript", "Agile"],
  },
];

const notablePartnerships = [
  {
    name: "WHO AFRO",
    description: "Botswana Health Innovation Management System",
  },
  {
    name: "University of Washington",
    description: "vENC VR Neonatal Training App",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container py-20" data-reveal>
      <p className="text-primary text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-3">History</p>
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight mb-12 max-w-[35ch]">Strategic history: Orchestrating growth across product and engineering.</h2>

      <div className="flex flex-col gap-6">
        {workExperience.map((job, index) => (
          <ShadcnCard key={index} className="border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 group">
            <ShadcnCardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                <p className="text-muted-foreground font-semibold">{job.company}</p>
              </div>
              <Badge variant="outline" className="w-fit h-fit mt-2 sm:mt-0 font-bold border-border text-muted-foreground">
                {job.dateRange}
              </Badge>
            </ShadcnCardHeader>
            
            <ShadcnCardContent>
              <ul className="space-y-3 mb-6">
                {job.bulletPoints.map((point, idx) => {
                  const boldedPoint = point.replace(/(\d+%|\d+\.\d+s|\d+\s?days|\d+k)/g, "<strong class='text-primary'>$1</strong>");
                  return (
                    <li 
                      key={idx} 
                      className="text-sm text-muted-foreground leading-relaxed flex gap-3 before:content-['•'] before:text-primary before:font-bold"
                      dangerouslySetInnerHTML={{ __html: boldedPoint }} 
                    />
                  );
                })}
              </ul>
              
              <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                {job.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-[0.65rem] uppercase tracking-wider font-bold px-2.5 py-0.5 border-none">
                    {t}
                  </Badge>
                ))}
              </div>
            </ShadcnCardContent>
          </ShadcnCard>
        ))}
      </div>

      {notablePartnerships.length > 0 && (
        <div className="mt-16 p-8 rounded-xl border border-border bg-muted/30">
          <h3 className="text-xl font-bold mb-6">Notable Partnerships</h3>
          <ul className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
            {notablePartnerships.map((partner, index) => (
              <li key={index} className="space-y-1">
                <strong className="text-primary block text-lg">{partner.name}</strong>
                <span className="text-muted-foreground text-sm leading-relaxed">{partner.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Experience;
