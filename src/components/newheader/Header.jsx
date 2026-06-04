import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import BoarnergesLogo from "../boarnergesLogo/BoarnergesLogo";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const focusRoles = [
  { label: "Software Engineering", color: "oklch(75% 0.18 156)" },
  { label: "Technical Product Management", color: "oklch(70% 0.2 25)" },
  { label: "AI & Agents", color: "oklch(65% 0.25 260)" },
  { label: "Automation", color: "oklch(75% 0.15 320)" }
];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeRole = focusRoles[currentIndex];

  return (
    <header 
      id="home" 
      className="relative flex min-h-[100svh] flex-col px-0 pt-[clamp(1.1rem,2vw,1.6rem)] pb-[clamp(4rem,8vw,7rem)] transition-colors duration-500"
      style={{ "--focus-color": activeRole.color }}
    >
      <BoarnergesLogo />

      <main className="container flex flex-1 items-center mt-[-5vh] max-sm:mt-0 max-sm:items-start max-sm:pt-16">
        <div className="w-full">
          <div className="max-w-[800px]">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {focusRoles.map((role, index) => (
                <button
                  key={role.label}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-[0.7rem] font-bold tracking-wider uppercase transition-all duration-300 border",
                    currentIndex === index 
                      ? "bg-[var(--tag-color)] border-[var(--tag-color)] text-[var(--background)] shadow-[0_0_20px_rgba(0,0,0,0.1)]" 
                      : "bg-transparent border-border text-muted-foreground hover:border-[var(--tag-color)] hover:text-foreground"
                  )}
                  style={{ 
                    "--tag-color": role.color,
                  }}
                >
                  {role.label}
                </button>
              ))}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[1.1] mb-6 tracking-tight max-sm:text-[clamp(2.5rem,12vw,3.5rem)]"
            >
              Building the future of <span className="text-[var(--focus-color)] transition-colors duration-500">intent.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground text-[clamp(1.1rem,2.2vw,1.4rem)] leading-relaxed mb-10 max-w-[600px]"
            >
              Precision-engineered systems. Product-led strategy. <br />
              I build, lead, and ship agentic software that reasons and acts.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 max-sm:flex-col"
            >
              <Button 
                asChild
                size="lg"
                className="h-14 px-8 text-base font-bold transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: activeRole.color, color: 'var(--background)' }}
              >
                <Link to="/portfolio">
                  View Projects
                  <ArrowUpRight className="ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:border-[var(--focus-color)]"
              >
                <Link to="/contact">
                  <Mail className="mr-2" />
                  Get in touch
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
    </header>
  );
}
