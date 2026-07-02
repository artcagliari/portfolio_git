import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NameLines = ({ className = "" }: { className?: string }) => (
  <span className={className} aria-hidden="true">
    <span className="block">Artur</span>
    <span className="block italic">Cagliari</span>
  </span>
);

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLSpanElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>();

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (frame.current) cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      if (spotlightRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        spotlightRef.current.style.setProperty("--spot-x", `${clientX - rect.left}px`);
        spotlightRef.current.style.setProperty("--spot-y", `${clientY - rect.top}px`);
        spotlightRef.current.classList.add("is-active");
      }
      if (topRef.current && revealRef.current) {
        const rect = revealRef.current.getBoundingClientRect();
        topRef.current.style.setProperty("--reveal-x", `${clientX - rect.left}px`);
        topRef.current.style.setProperty("--reveal-y", `${clientY - rect.top}px`);
      }
    });
  };

  const handleMouseLeave = () => {
    spotlightRef.current?.classList.remove("is-active");
    if (topRef.current) {
      topRef.current.style.setProperty("--reveal-x", "-1000px");
      topRef.current.style.setProperty("--reveal-y", "-1000px");
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col justify-between pt-28 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] pointer-events-none" />
      <div ref={spotlightRef} className="hero-spotlight" />

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          className="flex items-center justify-between text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponível para projetos
          </span>
          <span className="hidden sm:block">Carlos Barbosa, RS — BR</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          ref={revealRef}
          className="hero-reveal text-mega"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <NameLines className="text-outline" />
          <span ref={topRef} className="hero-reveal__top text-shimmer">
            <NameLines />
          </span>
        </motion.div>

        <motion.p
          className="hidden md:block mt-6 text-sm font-mono-ui uppercase tracking-[0.2em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Passe o mouse sobre o nome
        </motion.p>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          className="grid md:grid-cols-12 gap-8 items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div className="md:col-span-5">
            <p className="editorial-eyebrow mb-3">
              <span className="w-8 h-px bg-primary" />
              Full Stack Developer
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Desenvolvo aplicações web completas — do frontend ao backend — unindo design
              refinado, performance e código limpo.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-wrap gap-4 md:justify-end">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7"
            >
              Ver projetos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-7 border-border hover:border-primary/50 hover:bg-primary/5"
            >
              Contato
            </Button>
          </div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2 mt-12 text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Role para explorar
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
