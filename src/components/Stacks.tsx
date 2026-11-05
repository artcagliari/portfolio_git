import { trackSpotlight } from "@/lib/spotlight";
import { Reveal, SectionHeading } from "./Reveal";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

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
  { name: "Supabase", icon: "supabase/supabase-original" },
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "Git", icon: "git/git-original" },
];

const Stacks = () => (
  <section id="stacks" className="container-x py-24 sm:py-32">
    <SectionHeading
      eyebrow="Ferramentas"
      title={
        <>
          Minhas <span className="text-gradient">stacks</span>
        </>
      }
      description="Tecnologias que uso no dia a dia para construir aplicações rápidas, escaláveis e bem acabadas."
    />

    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {stacks.map((stack, index) => (
        <Reveal key={stack.name} delay={(index % 4) * 0.05}>
          <div
            onMouseMove={trackSpotlight}
            className="glass glass-hover spotlight group flex items-center gap-3 rounded-2xl p-3 sm:gap-4 sm:p-4"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-tint/10 bg-tint/[0.06] transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12">
              <img src={`${DEVICON}/${stack.icon}.svg`} alt="" width="28" height="28" loading="lazy" className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="truncate text-sm font-medium sm:text-base">{stack.name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Stacks;
