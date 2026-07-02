import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const wordReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-between pt-28 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.12] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          className="flex items-center justify-between text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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
        <div className="text-mega">
          <div className="overflow-hidden">
            <motion.span
              className="block text-foreground"
              variants={wordReveal}
              custom={0}
              initial="hidden"
              animate="visible"
            >
              Artur
            </motion.span>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <motion.div
              className="hidden md:block shrink-0 h-[0.75em] aspect-[4/5] rounded-2xl overflow-hidden border border-border"
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={profileImage} alt="Artur Cagliari" className="w-full h-full object-cover" />
            </motion.div>

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
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <motion.div
          className="grid md:grid-cols-12 gap-8 items-end mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
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
          transition={{ delay: 1.3 }}
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Role para explorar
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
