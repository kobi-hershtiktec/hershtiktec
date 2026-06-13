import React, { useState } from "react";
import { Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import projectsData from "../projects.json";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "הכל" },
    { id: "landing", name: "דפי נחיתה" },
    { id: "corporate", name: "אתרי תדמית" },
    { id: "e-commerce", name: "חנויות אונליין" },
  ];

  const projects: Project[] = projectsData as Project[];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="portfolio" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 font-mono bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20" id="portfolio-badge">
              תיק עבודות
            </span>
            <h2 
              id="portfolio-heading" 
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-display"
            >
              אתרים שמגדירים מחדש את העסק
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-base">
              כל פרויקט המיוצר בסטודיו שלנו עובר בדיקות אינטנסיביות של חוויית משתמש, רספונסיביות מלאה למובייל, עמידה בנגישות ת&quot;י 5568, וטעינה מהירה.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0" role="tablist" aria-label="מיין פרויקטים לפי קטגוריה" id="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === category.id 
                    ? "bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-400/20" 
                    : "frosted-glass-button-secondary text-slate-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl frosted-glass frosted-glass-hover cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
                id={`project-card-${project.id}`}
              >
                {/* Image Container with Cyan Tech Overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900" id={`project-img-wrap-${project.id}`}>
                  <img
                    src={project.image}
                    alt={`צילום מסך של פרויקט: ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Neon cyan gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90" />
                  
                  {/* Category & Performance badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                    <span className="rounded-full bg-slate-900/90 backdrop-blur border border-slate-800 px-3 py-1 text-xs font-bold text-slate-200">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-950/90 backdrop-blur border border-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-400 font-mono">
                      <Zap className="h-3 w-3 animate-pulse" />
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-8 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display leading-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Accessibility Highlights */}
                    <div className="mt-5 bg-black/35 rounded-xl p-4 border border-white/5">
                      <span className="block text-xs font-bold text-cyan-400 mb-2 font-mono flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        נגישות מובנית בפרויקט זה:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.accessibilityFeatures?.map((feat, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-cyan-400" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
