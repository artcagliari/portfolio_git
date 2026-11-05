import type { MouseEvent, ReactNode } from "react";
import { motion, useSpring } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

const spring = { stiffness: 260, damping: 18, mass: 0.4 };

/** Puxa o conteúdo levemente em direção ao cursor e solta com mola. */
const Magnetic = ({ children, strength = 0.18, className = "" }: MagneticProps) => {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x, y }} onMouseMove={onMouseMove} onMouseLeave={reset} className={`inline-flex ${className}`}>
      {children}
    </motion.div>
  );
};

export default Magnetic;
