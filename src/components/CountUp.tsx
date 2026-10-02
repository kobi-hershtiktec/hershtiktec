import React, { useEffect, useLayoutEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { introAllowed } from "../intro";

// Counts the leading number of `value` up from 0 when it scrolls into view ("95+" -> 0..95 + "+").
// Renders the final value in markup; numbers already on screen at load are left as-is.
export default function CountUp({ value, className, dir }: { value: string; className?: string; dir?: "ltr" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const armed = useRef(false);
  const match = value.match(/^(\d+)(.*)$/);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !match || reduce) return;
    const belowFold = el.getBoundingClientRect().top > window.innerHeight * 0.92;
    if (belowFold || introAllowed()) {
      el.textContent = "0" + match[2];
      armed.current = true;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const el = ref.current;
    if (!inView || !armed.current || !el || !match) return;
    armed.current = false;
    const controls = animate(0, Number(match[1]), {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => (el.textContent = Math.round(v) + match[2]),
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className} dir={dir}>
      {value}
    </span>
  );
}
