import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { EASE } from "../site";
import { introAllowed } from "../intro";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

// Enter-on-scroll fade/rise. Renders no inline styles, so prerendered markup hydrates
// cleanly. Elements already on screen at mount stay put (no blink on a prerendered
// first paint); anything below the fold is hidden imperatively and animates in on scroll.
export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps & { key?: React.Key }) {
  const reduce = useReducedMotion();
  const [scope, animate] = useAnimate<HTMLElement>();
  const inView = useInView(scope, { once: true, amount: 0.2 });
  const pending = useRef(false);

  useLayoutEffect(() => {
    const el = scope.current;
    if (!el || reduce) return;
    const belowFold = el.getBoundingClientRect().top > window.innerHeight * 0.92;
    if (belowFold || introAllowed()) {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      pending.current = true;
    }
  }, [reduce, scope]);

  useEffect(() => {
    if (!inView || !pending.current) return;
    pending.current = false;
    animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.7, delay, ease: EASE });
  }, [inView, animate, delay, scope]);

  return React.createElement(as, { ref: scope, className }, children);
}
