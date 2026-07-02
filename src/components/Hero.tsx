import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeWindow from "./CodeWindow";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  codeWindowVariants,
  defaultViewport,
} from "@/lib/motion";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const wordReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLSpanElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>();

  const handleSectionMouseMove = (e: React.MouseEvent) => {
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

  const handleSectionMouseLeave = () => {
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
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] pointer-events-none" />
      <div ref={spotlightRef} className="hero-spotlight" />

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          className="flex items-center justify-between text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground mb-10 lg:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
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

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div ref={revealRef} className="hero-reveal relative text-mega select-none">
              <div className="overflow-hidden">
                <motion.span
                  className="block text-outline opacity-35"
                  variants={wordReveal}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                >
                  Artur
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block text-shimmer italic"
                  variants={wordReveal}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                >
                  Cagliari
                </motion.span>
              </div>
              <span
                ref={topRef}
                className="hero-reveal__top absolute inset-0 text-mega pointer-events-none"
                aria-hidden="true"
              >
                <span className="block text-outline">Artur</span>
                <span className="block text-shimmer italic">Cagliari</span>
              </span>
            </div>

            <motion.div variants={itemVariants} className="space-y-4 max-w-lg">
              <p className="editorial-eyebrow">
                <span className="w-8 h-px bg-primary" />
                Full Stack Developer
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Desenvolvo aplicações web completas — do frontend ao backend — unindo design
                refinado, performance e código limpo.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
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
            </motion.div>

            <motion.button
              variants={itemVariants}
              onClick={() => scrollToSection("about")}
              className="flex items-center gap-2 text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
              Role para explorar
            </motion.button>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={codeWindowVariants}
            initial="hidden"
            animate="visible"
            viewport={defaultViewport}
          >
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 pointer-events-none" />
            <CodeWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
