import { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin } from "lucide-react";
import Footer from "./Footer";
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
        <div className="absolute inset-x-10 -inset-y-6 rounded-[3rem] bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />

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
            <a href={`mailto:${EMAIL}?subject=Novo%20projeto`} className="button-light group max-w-full">
              <span className="truncate">{EMAIL}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button type="button" onClick={copyEmail} className="button-glass">
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
              <span aria-live="polite">{copied ? "Copiado" : "Copiar e-mail"}</span>
            </button>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <Footer />
    </section>
  );
};

export default Contact;
