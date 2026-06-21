import React from "react";
import { Laptop, Cpu, ShieldAlert, Sparkles, Check } from "lucide-react";
import { motion } from "motion/react";
import { Service } from "../types";

export default function Services() {
  const services: Service[] = [
    {
      id: "marketing-sites",
      title: "אתרי תדמית ודפי נחיתה",
      description: "עיצוב פרימיום מותאם אישית לזהות המותג שלכם. נבנה מהיסוד כדי למקסם המרות ולהפוך גולשים מזדמנים ללקוחות משלמים.",
      iconName: "Laptop",
      features: [
        "עיצוב UI/UX מקורי וייחודי ללא תבניות משוכפלות",
        "רספונסיביות מלאה עם התאמה מושלמת לניידים וטאבלטים",
        "חיבור למערכות אנליטיקס ופיקסלים למדידת תוצאות",
        "דפי נחיתה מהירים במיוחד להשגת אחוזי המרה גבוהים"
      ],
      techStack: ["React 19", "Vite", "Tailwind CSS", "Motion"]
    },
    {
      id: "ai-hybrid-dev",
      title: "פיתוח היברידי מבוסס AI",
      description: "שילוב חדשני שבו בינה מלאכותית מאיצה את הפיתוח ודיוק הקוד, בעוד ארכיטקט אנושי מפקח ומבצע התאמות קפדניות ואישיות.",
      iconName: "Cpu",
      features: [
        "ארכיטקטורת קוד נקייה ובטוחה ללא זבל מיותר",
        "קיצור זמני אספקה בעד 50% לעומת סוכנויות מסורתיות",
        "פתרונות חכמים מותאמים לצורכי העסק",
        "חיסכון משמעותי בעלויות ייצור המגולגל ישירות לעסק"
      ],
      techStack: ["Gemini 1.5 Pro / 2.5", "TypeScript", "Node.js", "REST APIs"]
    },
    {
      id: "accessibility-perf",
      title: "נגישות ואופטימיזציה",
      description: "התאמה קשיחה לתקן הנגישות הישראלי ת\"י 5568 ברמת AA ושיפור מהירות טעינה לביצועים חסרי תקדים במנועי החיפוש.",
      iconName: "ShieldAlert",
      features: [
        "נגישות מובנית למשתמשי קוראי מסך ומקלדת",
        "ציון מהירות 95+ בכלי המדידה הרשמיים של Google",
        "תאימות מלאה לחוק הנגישות הישראלי למניעת תביעות",
        "שיפור משמעותי בדירוג ה-SEO האורגני בגוגל"
      ],
      techStack: ["WCAG 2.2 AA", "ת\"י 5568", "Lighthouse", "WebVitals"]
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "Laptop":
        return <Laptop className="h-7 w-7 text-brand-cyan" aria-hidden="true" />;
      case "Cpu":
        return <Cpu className="h-7 w-7 text-brand-cyan" aria-hidden="true" />;
      case "ShieldAlert":
        return <ShieldAlert className="h-7 w-7 text-brand-cyan" aria-hidden="true" />;
      default:
        return <Sparkles className="h-7 w-7 text-brand-cyan" aria-hidden="true" />;
    }
  };

  return (
    <section 
      id="services" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative overflow-hidden"
      aria-labelledby="services-heading"
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

      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="services-heading" 
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-display"
          >
            אינטגרציה של טכנולוגיה עילית עם עיצוב פרימיום
          </h2>
          <p className="mt-4 text-lg text-slate-404">
            אנו מספקים מעטפת דיגיטלית מלאה המבטיחה שהעסק שלכם יבלוט ברשת, ייטען במהירות שיא ויהיה נגיש לכל אזרח בצורה חוקית ובטוחה.
          </p>
        </div>

        {/* Services Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col justify-between rounded-2xl p-8 shadow-xl frosted-glass frosted-glass-hover group"
              id={`service-card-${service.id}`}
            >
              {/* Highlight top border gradient on hover */}
              <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />

              <div>
                {/* Icon Circle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-950/80 border border-slate-800 shadow-md group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-all duration-300 mb-6">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-display mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Bullet List */}
                <ul className="space-y-3 border-t border-slate-850 pt-5 mb-3" aria-label={`יתרונות השירות - ${service.title}`}>
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
