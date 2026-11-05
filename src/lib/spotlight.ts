import type { MouseEvent } from "react";

/** Atualiza a posição da luz do `.spotlight` conforme o cursor se move no card. */
export function trackSpotlight(event: MouseEvent<HTMLElement>) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  target.style.setProperty("--my", `${event.clientY - rect.top}px`);
}
