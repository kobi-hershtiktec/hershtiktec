import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpLeft } from "@phosphor-icons/react";
import PageHeader from "./PageHeader";
import CtaBand from "./CtaBand";
import { Project } from "../types";
import projectsData from "../projects.json";
import { CATEGORY_NAMES, EASE } from "../site";

const categories = [
  { id: "all", name: "הכל" },
  { id: "landing", name: "דפי נחיתה" },
  { id: "corporate", name: "אתרי תדמית" },
  { id: "e-commerce", name: "חנויות אונליין" },
];

const projects = projectsData as Project[];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const reduce = useReducedMotion();

  const available = categories.filter((c) => c.id === "all" || projects.some((p) => p.category === c.id));
  const filtered = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <section id="portfolio" className="px-4 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-7xl">
          <PageHeader
            id="portfolio-heading"
            title="תיק עבודות"
            intro="אתרים שבנינו לעסקים אמיתיים. כל אחד נבדק בנייד, בנגישות ובמהירות לפני שעלה לאוויר."
          >
            <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="סינון פרויקטים לפי קטגוריה" id="portfolio-filters">
              {available.map((category) => {
                const active = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full border px-4.5 py-2 text-sm transition-colors duration-200 ${
                      active
                        ? "border-fg bg-fg text-ink"
                        : "border-line-strong text-fg-muted hover:border-fg-subtle hover:text-fg"
                    }`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </PageHeader>

          <motion.div layout={!reduce} className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2" id="portfolio-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => {
                const featured = i === 0;
                return (
                  <motion.article
                    layout={!reduce}
                    key={project.id}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className={featured ? "md:col-span-2" : ""}
                    id={`project-card-${project.id}`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                      aria-label={`פתיחת האתר ${project.title} בחלון חדש`}
                    >
                      <div
                        className={`relative overflow-hidden rounded-2xl border border-line bg-ink-2 ${
                          featured ? "aspect-[16/10] md:aspect-[21/10]" : "aspect-[16/10]"
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={`צילום מסך של האתר ${project.title}`}
                          loading={featured ? "eager" : "lazy"}
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                        />
                      </div>

                      <div className={`mt-6 grid gap-3 ${featured ? "md:grid-cols-12 md:gap-10" : ""}`}>
                        <div className={featured ? "md:col-span-4" : ""}>
                          <h2 className="flex items-center gap-2 text-xl font-semibold text-fg md:text-2xl">
                            {project.title}
                            <ArrowUpLeft
                              size={20}
                              aria-hidden="true"
                              className="text-fg-subtle transition-all duration-300 ease-out-expo group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                            />
                          </h2>
                          <p className="mt-1 text-sm text-fg-muted">{CATEGORY_NAMES[project.category]}</p>
                        </div>
                        <div className={featured ? "md:col-span-8" : ""}>
                          <p className="max-w-[60ch] leading-relaxed text-fg-muted">{project.description}</p>
                          <p className="mt-3 font-mono text-xs text-fg-subtle" dir="ltr" style={{ textAlign: "right" }}>
                            {project.technologies.join(" / ")}
                          </p>
                        </div>
                      </div>
                    </a>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
