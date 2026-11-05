import ArrowSwap from "./ArrowSwap";
import { projects } from "@/data/projects";
import { trackSpotlight } from "@/lib/spotlight";
import { Reveal, SectionHeading } from "./Reveal";

const Portfolio = () => {
  return (
    <section id="portfolio" className="container-x py-24 sm:py-32">
      <SectionHeading
        eyebrow="Projetos"
        title={
          <>
            Trabalhos <span className="text-gradient">selecionados</span>
          </>
        }
        description="Produtos digitais, sistemas e sites institucionais que desenvolvi do início ao fim."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => {
          const featured = index === 0;

          return (
            <Reveal key={project.title} delay={featured ? 0 : (index % 2) * 0.08} className={featured ? "md:col-span-2" : ""}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title}`}
                onMouseMove={trackSpotlight}
                className={`glass glass-hover spotlight group block h-full rounded-[1.75rem] p-2 ${
                  featured ? "md:grid md:grid-cols-[1.35fr_1fr] md:items-center" : ""
                }`}
              >
                <div className="overflow-hidden rounded-[1.35rem] bg-secondary">
                  <img
                    src={project.image}
                    alt={`Página inicial do projeto ${project.title}`}
                    width="1200"
                    height="720"
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="aspect-[5/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className={`flex items-start justify-between gap-4 px-4 pb-4 pt-5 ${featured ? "md:px-8 md:py-6" : ""}`}>
                  <div className="min-w-0">
                    <p className="text-xs text-primary">{project.category}</p>
                    <h3 className={`mt-1.5 font-medium tracking-[-0.02em] ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-tint/10 text-muted-foreground transition-all duration-500 group-hover:scale-110 group-hover:border-transparent group-hover:bg-foreground group-hover:text-background">
                    <ArrowSwap />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
