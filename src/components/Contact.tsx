import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Github, Instagram, Linkedin } from "lucide-react";
import { trackSpotlight } from "@/lib/spotlight";
import ArrowSwap from "./ArrowSwap";
import Footer from "./Footer";
import Magnetic from "./Magnetic";
import { MaskLines, Reveal } from "./Reveal";

const EMAIL = "arturcagliari2018@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/artcagliari", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/artur-cagliari-206b0936b", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/artur.cagliari", icon: Instagram },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="container-x pt-24 sm:pt-32">
      <Reveal className="relative">
        <div className="absolute inset-x-10 -inset-y-6 rounded-[3rem] bg-gradient-to-r from-tint/[0.08] to-tint/[0.04] blur-3xl" />

        <div className="glass relative rounded-[2rem] px-6 py-14 text-center sm:px-12 sm:py-20">
          <p className="eyebrow">Contato</p>
          <h2 className="mx-auto mt-5 text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.04em]">
            <MaskLines
              inView
              lines={[{ text: "Tem uma ideia?" }, { text: "Vamos tirar do papel.", className: "text-gradient" }]}
            />
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
            Disponível para projetos freelance, colaborações e oportunidades de desenvolvimento.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic className="max-w-full">
              <a href={`mailto:${EMAIL}?subject=Novo%20projeto`} className="button-light group max-w-full">
                <span className="truncate">{EMAIL}</span>
                <ArrowSwap />
              </a>
            </Magnetic>
            <Magnetic>
              <button type="button" onClick={copyEmail} onMouseMove={trackSpotlight} className="button-glass">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "check" : "copy"}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                  </motion.span>
                </AnimatePresence>
                <span aria-live="polite">{copied ? "Copiado!" : "Copiar e-mail"}</span>
              </button>
            </Magnetic>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label} strength={0.4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group relative grid h-11 w-11 place-items-center rounded-full border border-tint/10 bg-tint/5 text-muted-foreground transition-all duration-300 hover:border-transparent hover:bg-foreground hover:text-background active:scale-95"
                >
                  <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                  <span className="glass-strong pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </Reveal>

      <Footer />
    </section>
  );
};

export default Contact;
