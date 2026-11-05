import { ArrowUpRight, Code2, LayoutTemplate, Rocket } from "lucide-react";
import { trackSpotlight } from "@/lib/spotlight";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  { icon: LayoutTemplate, title: "Interfaces", text: "Layouts responsivos, acessíveis e com identidade." },
  { icon: Code2, title: "Desenvolvimento", text: "Frontend e backend pensados como um único produto." },
  { icon: Rocket, title: "Entrega", text: "Performance, revisão e deploy sem complicação." },
];

const About = () => {
  return (
    <section id="about" className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="Sobre mim"
        title={
          <>
            Curioso por natureza,
            <br />
            <span className="text-gradient">prático por escolha.</span>
          </>
        }
      />

      <Reveal className="glass rounded-[1.75rem] p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <p className="text-xl leading-relaxed tracking-[-0.01em] sm:text-2xl">
            Sou desenvolvedor full stack de Carlos Barbosa, RS. Transformo necessidades de negócio
            em experiências digitais claras, rápidas e bem acabadas.
          </p>
          <div className="flex flex-col justify-between gap-6">
            <p className="leading-relaxed text-muted-foreground">
              Minha formação combina prática em projetos publicados, curso técnico em Informática
              no IFRS e experiência com React e Laravel em ambiente profissional. Gosto de cuidar do
              produto inteiro: estratégia, interface, código e publicação.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1weAKkTYcr_j0vqh8-cd0lZtwdJUkkrWp?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glass group self-start"
            >
              Ver currículo
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-5 grid gap-5 sm:grid-cols-3 lg:gap-6">
        {services.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.08}>
            <div onMouseMove={trackSpotlight} className="glass glass-hover spotlight h-full rounded-[1.5rem] p-6">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-lg font-medium">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default About;
