import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "../site";

interface PageHeaderProps {
  id: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}

// Top-of-page heading for inner pages. Stacked, right-aligned, max 65ch body.
export default function PageHeader({ id, title, intro, children }: PageHeaderProps) {
  const reduce = useReducedMotion();
  return (
    <motion.header
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="max-w-3xl"
    >
      <h1 id={id} className="text-4xl font-semibold leading-[1.1] tracking-tight text-fg md:text-6xl">
        {title}
      </h1>
      {intro && <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-fg-muted">{intro}</p>}
      {children}
    </motion.header>
  );
}
