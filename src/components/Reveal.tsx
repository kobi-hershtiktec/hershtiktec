import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "../site";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

// Enter-on-scroll fade/rise. Collapses to static under reduced motion.
export default function Reveal({ children, delay = 0, className, as = "div" }: RevealProps & { key?: React.Key }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}
