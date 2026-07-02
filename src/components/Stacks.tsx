import { motion } from "framer-motion";
import { containerVariants, itemVariants, titleVariants, defaultViewport } from "@/lib/motion";

const stacks = [
  { name: "React", icon: "react/react-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "Node.js", icon: "nodejs/nodejs-original" },
  { name: "Laravel", icon: "laravel/laravel-original" },
  { name: "PHP", icon: "php/php-original" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original" },
  { name: "MySQL", icon: "mysql/mysql-original" },
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "Git", icon: "git/git-original" },
];

const Stacks = () => {
  return (
    <section className="py-24 relative section-glow">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={containerVariants}
        >
          <div>
            <motion.span variants={titleVariants} className="editorial-eyebrow mb-5">
              <span className="w-8 h-px bg-primary" />
              Ferramentas
            </motion.span>
            <motion.h2
              variants={titleVariants}
              className="font-display font-semibold tracking-tight text-5xl md:text-6xl"
            >
              Minhas <span className="text-shimmer italic">Stacks</span>
            </motion.h2>
          </div>
          <motion.p variants={itemVariants} className="text-muted-foreground max-w-sm md:text-right">
            Tecnologias que uso no dia a dia para construir aplicações rápidas, escaláveis e bem
            acabadas.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {stacks.map((stack) => (
            <motion.div
              key={stack.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-card/60 backdrop-blur border border-primary/15 hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/60 border border-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${stack.icon}.svg`}
                  alt={stack.name}
                  loading="lazy"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
              </div>
              <span className="relative font-semibold text-base md:text-lg group-hover:text-primary transition-colors">
                {stack.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stacks;
