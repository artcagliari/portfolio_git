import { motion } from "framer-motion";
import profileImage from "@/assets/profile-optimized.jpg";
import { MaskLines } from "./Reveal";
import ArrowSwap from "./ArrowSwap";
import Magnetic from "./Magnetic";
import { ease } from "@/lib/motion";
import { trackSpotlight } from "@/lib/spotlight";

const float = (delay: number) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay },
});

const Hero = () => {
  return (
    <section
      id="home"
      className="container-x grid min-h-[100svh] items-center gap-16 pb-20 pt-32 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12 lg:pb-16 lg:pt-28"
    >
      <div>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Disponível para novos projetos
        </motion.span>

        <h1 className="mt-7 text-[clamp(2.4rem,5.2vw,4.4rem)] font-medium leading-[1.04] tracking-[-0.04em]">
          <MaskLines
            delay={0.25}
            lines={[
              { text: "Transformo ideias" },
              { text: "em produtos digitais" },
              { text: "claros e modernos.", className: "text-gradient" },
            ]}
          />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.65 }}
        >
          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sou Artur Cagliari, desenvolvedor full stack. Crio sites e aplicações com interface
            bem pensada e código sólido — do primeiro rascunho ao deploy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#portfolio" className="button-light group">
                Ver projetos
                <ArrowSwap direction="down" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" onMouseMove={trackSpotlight} className="button-glass group">
                Fale comigo
                <ArrowSwap />
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.35 }}
        className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0"
      >
        <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-tint/[0.12] via-transparent to-tint/[0.06] blur-3xl" />

        <div className="glass relative rounded-[2rem] p-2">
          <img
            src={profileImage}
            alt="Artur Cagliari, desenvolvedor full stack"
            width="800"
            height="1000"
            fetchPriority="high"
            className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
          />
        </div>

        <motion.div {...float(0)} className="glass-strong absolute -left-4 bottom-10 rounded-2xl px-4 py-3 sm:-left-10">
          <p className="text-sm font-medium">Artur Cagliari</p>
          <p className="mt-0.5 text-xs text-foreground/70">Full Stack Developer</p>
        </motion.div>

        <motion.div
          {...float(1.5)}
          className="glass-strong absolute -right-3 top-10 rounded-full px-3.5 py-1.5 text-xs sm:-right-8"
        >
          React · Laravel
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
