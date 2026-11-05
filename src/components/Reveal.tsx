import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ease } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fade + leve deslocamento vertical quando o elemento entra na tela. */
export const Reveal = ({ delay = 0, children, ...props }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    transition={{ duration: 0.8, ease, delay }}
    {...props}
  >
    {children}
  </motion.div>
);

type MaskLinesProps = {
  lines: { text: ReactNode; className?: string }[];
  delay?: number;
  inView?: boolean;
};

/** Cada linha sobe de dentro de uma máscara. */
export const MaskLines = ({ lines, delay = 0, inView = false }: MaskLinesProps) => (
  <>
    {lines.map((line, index) => (
      <span key={index} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
        <motion.span
          className={`block ${line.className ?? ""}`}
          initial={{ y: "110%" }}
          {...(inView
            ? { whileInView: { y: 0 }, viewport: { once: true, margin: "0px 0px -8% 0px" } }
            : { animate: { y: 0 } })}
          transition={{ duration: 1, ease, delay: delay + index * 0.09 }}
        >
          {line.text}
        </motion.span>
      </span>
    ))}
  </>
);

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <Reveal className="mb-12 flex flex-col gap-5 sm:mb-16 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">{title}</h2>
    </div>
    {description && <p className="max-w-sm leading-relaxed text-muted-foreground md:text-right">{description}</p>}
  </Reveal>
);
