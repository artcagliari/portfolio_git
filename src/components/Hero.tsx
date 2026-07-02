import { ArrowRight, Github, Linkedin, Instagram, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeWindow from "./CodeWindow";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";

const socials = [
  { icon: Github, href: "https://github.com/artcagliari", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/artur-cagliari-206b0936b", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/artur.cagliari", label: "Instagram" },
];

const stack = ["React", "TypeScript", "Node.js", "Laravel", "TailwindCSS"];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="editorial-eyebrow">
              <span className="w-8 h-px bg-primary" />
              Full Stack Developer — desde 2024
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display font-semibold leading-[0.95] tracking-tight text-6xl md:text-7xl xl:text-8xl"
            >
              <span className="block text-foreground">Artur</span>
              <span className="block text-shimmer italic">Cagliari</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Desenvolvo aplicações web completas — do frontend ao backend — unindo
              design refinado, performance e código limpo. Do protótipo ao deploy.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono-ui text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {stack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-3">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
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
                Entrar em contato
              </Button>

              <div className="flex items-center gap-2 ml-1">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 to-accent/10 blur-3xl rounded-full" />
            <div className="relative flex justify-center">
              <CodeWindow />
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollToSection("about")}
          className="hidden md:flex items-center gap-2 mt-20 mx-auto text-xs font-mono-ui uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Role para explorar
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
