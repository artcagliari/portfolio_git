import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";

const icons = { diagonal: ArrowUpRight, down: ArrowDown, up: ArrowUp };

type ArrowSwapProps = {
  direction?: keyof typeof icons;
  className?: string;
};

/** Seta que troca de lugar no hover do `.group` pai. */
const ArrowSwap = ({ direction = "diagonal", className = "h-4 w-4" }: ArrowSwapProps) => {
  const Icon = icons[direction];
  const modifier = direction === "diagonal" ? "" : `arrow-swap-${direction}`;

  return (
    <span aria-hidden className={`arrow-swap shrink-0 ${modifier}`}>
      <Icon className={className} />
      <Icon className={className} />
    </span>
  );
};

export default ArrowSwap;
