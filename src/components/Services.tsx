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
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative"
      aria-labelledby="services-heading"
    >
      {/* Decorative side glows */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-300 font-mono bg-gradient-to-r from-cyan-950/60 to-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_12px_rgba(34,211,238,0.06)] hover:border-cyan-400/40 transition-all duration-300" 
            id="services-badge"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>מה אנחנו עושים</span>
          </span>
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
