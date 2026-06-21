import React, { useState } from "react";
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
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Quantum Glow elements from design theme */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(34,_211,_238,_0.15)_0%,_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(59,_130,_246,_0.1)_0%,_transparent_70%)] pointer-events-none z-0" />

      {/* Visual background accents: neon radial glows & technical grid mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/15 via-brand-bg to-brand-bg pointer-events-none" />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] opacity-[0.2] pointer-events-none" 
        id="cyber-grid"
      />

      {/* Subtle giant rotating background brand logo watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[1150px] md:h-[1150px] opacity-[0.04] pointer-events-none select-none z-0 overflow-hidden">
        <motion.img 
          src="/favicon.png" 
          alt="" 
          className="w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>

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
            {filteredProjects.map((project) => {
              const isExample = project.link.includes("example.com");
              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl frosted-glass transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isExample 
                      ? "cursor-default" 
                      : "frosted-glass-hover cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5"
                  }`}
                  id={`project-card-${project.id}`}
                >
                  {/* Invisible clickable overlay link that covers the entire card */}
                  {!isExample && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-20 cursor-pointer"
                      title={`לחץ לצפייה באתר ${project.title}`}
                      aria-label={`פתיחת אתר ${project.title} בחלון חדש`}
                    />
                  )}
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
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1.5 items-end">
                    <span className="rounded-full bg-slate-900/90 backdrop-blur border border-slate-800 px-3 py-1 text-xs font-bold text-slate-200">
                      {categories.find(c => c.id === project.category)?.name}
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
                  </div>


                </div>

              </motion.article>
            );
          })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
