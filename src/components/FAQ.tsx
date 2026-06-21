import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqs: FAQItem[] = [
    {
      id: "ai-hybrid-uniqueness",
      question: "מה זה פיתוח היברידי מבוסס AI והאם האתר שלי יהיה ייחודי?",
      answer: "לחלוטין כן. ה-AI הוא כלי עבודה סופר-מתקדם המאפשר לנו להאיץ את תהליך הפיתוח ולדייק את הקוד. עם זאת, הארכיטקטורה, העיצוב, התוכן, השיווק והתאמת האתר באופן קונקרטי לעסק שלך נעשים באופן 100% אנושי ומותאם אישית בסטודיו שלנו. אין שכפולים או שימוש בתבניות גנריות שיש לכולם."
    },
    {
      id: "mobileness-accessibility",
      question: "האם האתר מותאם למובייל ולחוק הנגישות הישראלי?",
      answer: "כן, בהחלט. כל אתר נבנה מיומו הראשון עם רספונסיביות מלאה לחלוטין לכל סוגי המכשירים הניידים, הטאבלטים והמחשבים הנייחים. בנוסף, האתר נבנה בתקן נגישות ישראלי קשיח ת\"י 5568 רמת AA ו-WCAG 2.2, המגן על העסק שלך מפני תביעות משפטיות ומאפשר לכל גולש ליהנות מחוויית קריאה חלקה."
    },
    {
      id: "project-timeline",
      question: "כמה זמן לוקח להקים אתר פרימיום ב-HERSHTIKTEC?",
      answer: "בזכות המודל ההיברידי המתקדם שלנו, דף נחיתה איכותי וממוקד נמסר לרוב תוך 5 עד 7 ימי עסקים בלבד. אתר תדמית מרובה עמודים או חנות אונליין נבנים ונמסרים תוך 14 עד 21 ימי עסקים. כל שלבי האספקה ולוחות הזמנים מוגדרים בצורה קשיחה מראש בחוזה העבודה."
    },
    {
      id: "landing-vs-website",
      question: "מה ההבדל בין דף נחיתה לאתר אינטרנט מלא?",
      answer: "דף נחיתה הוא עמוד בודד וממוקד במטרה אחת ברורה – להניע את הגולש לפעולה קונקרטית (כמו השארת פרטים בטופס או רכישת מוצר ספציפי), והוא מושלם לקמפיינים ופרסום ממומן. אתר אינטרנט מלא, לעומת זאת, הוא פלטפורמה מרובת עמודים המציגה את מגוון השירותים, ערכי המותג, סיפור העסק וערוצי יצירת קשר שונים. אתר מלא מיועד לבניית סמכות, נוכחות מקיפה בגוגל וחיבור אורגני ארוך טווח עם לקוחותיכם."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative overflow-hidden"
      aria-labelledby="faq-heading"
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

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            id="faq-heading" 
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-display"
          >
            תשובות לכל מה שחשוב לדעת
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            רוצים לדעת איך אנחנו עובדים? ריכזנו עבורכם את התשובות לשאלות החשובות ביותר רגע לפני שמתחילים לבנות.
          </p>
        </div>

        {/* Accordion Component List */}
        <div className="space-y-4" role="presentation" id="faq-accordion-container">
          {faqs.map((faq) => {
            const isExpanded = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="overflow-hidden rounded-xl frosted-glass frosted-glass-hover"
                id={`faq-item-${faq.id}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-right font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:bg-white/5 cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-display pr-2 flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-cyan-400 shrink-0 select-none" />
                    <span>{faq.question}</span>
                  </span>
                  
                  {/* Plus/Minus Indicator */}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {isExpanded ? (
                      <Minus className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {/* Animated Answer Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                    >
                      <div className="p-6 pt-4 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 bg-black/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
