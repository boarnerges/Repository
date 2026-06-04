import { useState } from "react";
import { ArrowUpRight, ExternalLink, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import jobPortalPoster from "../../assets/job-portal.jpg";
import adminDashboardPoster from "../../assets/admin-dashboard.jpg";
import studentPlatformPoster from "../../assets/dice-game.jpg";
import auraPoster from "../../assets/aura.png";

const data = [
  {
    id: 4,
    title: "Aura",
    description: "Created a scalable SaaS application with robust user management and dynamic content generation. Developed with Next.js, Supabase, and Clerk, including Open Graph image generation.",
    role: "Solo Engineer",
    stack: ["Next.js", "SaaS", "Supabase", "Clerk"],
    impact: "Functional SaaS platform with secure user profiles and automated OG image generation.",
    isAI: false,
    palette: "purple",
    demo: "https://boarnergesolu.netlify.app/",
    github: "https://github.com/boarnerges/aura",
    poster: auraPoster,
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Provided a centralized system for monitoring key metrics and managing operational records. Developed a responsive admin interface using React and Tailwind CSS.",
    role: "Solo Engineer",
    stack: ["Dashboard", "React", "Tailwind"],
    impact: "Enabled 24/7 monitoring with 42 widgets and 4 KPI panels.",
    isAI: false,
    palette: "amber",
    demo: "https://admin-dashboard-phi-navy-88.vercel.app/",
    github: "https://github.com/boarnerges/admin-dashboard",
    poster: adminDashboardPoster,
  },
  {
    id: 3,
    title: "Student Management Platform",
    description: "Addressed inefficient processes for managing student information and academic progress. Built a comprehensive solution with React and Tailwind for data tracking and notifications.",
    role: "Solo Engineer",
    stack: ["Management", "React", "Tailwind"],
    impact: "Successfully managed 2k students, 87% completion rates, real-time notices.",
    isAI: false,
    palette: "sky",
    demo: "https://student-management-beta-rouge.vercel.app/",
    github: "https://github.com/boarnerges/student-management-platform",
    poster: studentPlatformPoster,
  },
  {
    id: 1,
    title: "Job Portal",
    description: "Streamlined job discovery and application processes for users. Built a responsive platform with React and Vite, focusing on dynamic UI and efficient workflows.",
    role: "Solo Engineer",
    stack: ["React", "Vite", "Responsive UI"],
    impact: "Improved user engagement with 120+ roles listed, 3.2s application flow.",
    isAI: false,
    palette: "teal",
    demo: "https://job-application-nine-khaki.vercel.app/",
    github: "https://github.com/boarnerges/Job-Application",
    poster: jobPortalPoster,
  },
];

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const openPreview = (project) => {
    setPreviewLoaded(false);
    setActiveProject(project);
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="flex flex-col gap-6 mb-12 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div className="flex-1">
            <p className="text-primary text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-3">Selected work</p>
            <h2 className="text-[clamp(2rem,5vw,4.8rem)] font-extrabold leading-tight max-w-[15ch]">Deployments: Architecting for impact and scale.</h2>
          </div>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 font-bold hover:-translate-y-1 transition-transform sm:flex-none">
            <a href="#cta">
              Start a conversation
              <ArrowUpRight className="ml-2" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-6 gap-6 max-md:grid-cols-1">
          {data.map((project, index) => {
            const {
              id,
              title,
              role,
              description,
              impact,
              stack,
              isAI,
              palette,
              demo,
              github,
              poster,
            } = project;

            const boldedImpact = impact.replace(
              /(\d+%|\d+\.\d+s|\d+k|\d+\+)/g,
              "<strong class='text-primary'>$1</strong>",
            );

            const isFeatured = index === 0;

            return (
              <Card
                key={id}
                className={cn(
                  "overflow-hidden border-border bg-card transition-all duration-300 hover:border-primary hover:-translate-y-2 group shadow-xl",
                  isFeatured ? "col-span-6 grid grid-cols-2 max-lg:grid-cols-1" : "col-span-3 max-lg:col-span-6"
                )}
                data-reveal
                style={{ "--reveal-delay": `${Math.min(index, 3) * 80}ms` }}
              >
                <div 
                  className={cn(
                    "relative cursor-pointer overflow-hidden aspect-[16/10] bg-muted",
                    isFeatured && "h-full min-h-[28rem] max-lg:aspect-[16/10] max-lg:min-h-0"
                  )}
                  onClick={() => openPreview(project)}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-70 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={poster}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 right-4 z-20">
                    <Badge className="bg-foreground text-background font-bold px-3 py-1.5 rounded-full flex items-center gap-2 group-hover:scale-105 transition-transform group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                      <Eye size={14} strokeWidth={3} />
                      Preview
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col p-8 max-sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="rounded-full border-border text-muted-foreground font-bold tracking-wider uppercase text-[0.65rem] px-3">
                      {role}
                    </Badge>
                    {isAI && (
                      <Badge className="bg-orange-500 text-white border-none rounded-full font-bold tracking-wider uppercase text-[0.65rem] px-3">
                        AI
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-extrabold mb-3 leading-tight sm:text-3xl">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
                    <p
                      className="text-sm font-bold leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{
                        __html: `Impact: ${boldedImpact}`,
                      }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-full text-[0.7rem] px-3 py-0.5 font-bold border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto max-sm:grid-cols-1">
                    <Button asChild className="font-bold">
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                    {github && (
                      <Button asChild variant="secondary" className="font-bold border border-border/50 hover:border-primary/50 transition-colors">
                        <a href={github} target="_blank" rel="noopener noreferrer">
                          GitHub
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 overflow-hidden border-border bg-background sm:rounded-xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <DialogHeader className="text-left space-y-0">
                <DialogTitle className="text-lg font-bold">{activeProject?.title}</DialogTitle>
                <p className="text-xs text-muted-foreground">Live website preview</p>
              </DialogHeader>
              <div className="flex items-center gap-3 mr-8">
                <Button asChild size="sm" className="font-bold h-9 px-4">
                  <a href={activeProject?.demo} target="_blank" rel="noopener noreferrer">
                    Open Live
                    <ExternalLink size={14} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex-1 bg-muted relative">
              {!previewLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4" />
                  <span className="font-bold">Loading live preview...</span>
                  <small className="text-muted-foreground mt-1 text-xs">If it does not appear, click Open Live.</small>
                </div>
              )}
              {activeProject && (
                <iframe
                  title={`${activeProject.title} live preview`}
                  src={activeProject.demo}
                  loading="lazy"
                  className={cn(
                    "w-full h-full border-none transition-opacity duration-300",
                    previewLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setPreviewLoaded(true)}
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Portfolio;

