import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Cta = () => {
  const emailAddress = "olujawo1996@gmail.com";
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

  return (
    <section id="contact" className="container py-32" data-reveal>
      <div className="bg-card border border-border rounded-3xl p-12 overflow-hidden relative group max-sm:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_var(--primary)]"></span>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted-foreground">SYSTEM STATUS: READY FOR DEPLOYMENT</span>
            </div>
            
            <p className="text-primary text-[0.78rem] font-extrabold tracking-[0.14em] uppercase mb-4">Connect</p>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 sm:text-5xl">
              Stop guessing. Start shipping. Let’s architect your next agentic system.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Currently accepting high-impact projects, technical leadership roles, and ambitious engineering challenges. <strong className="text-foreground">Let’s build the future of intent.</strong>
            </p>
          </div>

          <div className="flex flex-col gap-6 items-start md:items-end">
            <div className="flex gap-4" aria-label="Social links">
              {[
                { href: "https://github.com/boarnerges", icon: FaGithub, label: "GitHub" },
                { href: "https://x.com/boarnerges_olu", icon: FaTwitter, label: "X" },
                { href: "https://www.linkedin.com/in/owolabi-olusegun/", icon: FaLinkedin, label: "LinkedIn" }
              ].map((social) => (
                <Button key={social.label} variant="outline" size="icon" asChild className="rounded-full border-border hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1">
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon size={20} />
                  </a>
                </Button>
              ))}
            </div>

            <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl w-full md:w-auto shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transition-all">
              <a href={emailComposeUrl} target="_blank" rel="noopener noreferrer">
                Start the conversation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
