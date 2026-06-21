import React from "react";
import { ShieldCheck, Heart, Users, Target, Zap, Rocket } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-cyan-400" />,
      title: "אמינות וערכי ברזל של מילואימניק",
      description: "מתוך שירות מילואים אקטיבי ביחידות טכנולוגיות ומבצעיות, אנו מביאים איתנו משמעת עצמית גבוהה, יושרה בלתי מתפשרת ומחויבות מוחלטת לביטחון השקט של הלקוח."
    },
    {
      icon: <Target className="h-6 w-6 text-cyan-400" />,
      title: "עבודה תחת לחץ ודיוק תפעולי",
      description: "בדיוק כמו במילואים, שבהם תפוסי המציאות משתנים ברגע, אנו מומחים במציאת פתרונות יצירתיים, כתיבת קוד מדויקת ביותר, ועמידה ביעדים מחמירים בלי תירוצים."
    },
    {
      icon: <Heart className="h-6 w-6 text-cyan-400" />,
      title: "שותפות אמיתית לעסק קטן",
      description: "אנו לא סוכנות שעובדת בשיטת 'שגר ושכח'. אנו מלווים אתכם יד ביד, מנתחים את יעדי המכירות והשיווק שלכם, והופכים את האתר לכלי שמייצר הכנסות פסיביות ואמינות."
    }
  ];

  return (
    <section 
      id="about" 
      className="bg-brand-bg py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900 relative overflow-hidden"
      aria-labelledby="about-heading"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about-layout-grid">
          
          {/* Column 1: Copywriting (7 columns on desktop) */}
          <div className="lg:col-span-7" id="about-text-content">

            <h2 
              id="about-heading" 
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-display"
            >
              האנשים מאחורי הקוד: פיתוח קפדני, אמינות ישראלית
            </h2>
            
            <div className="mt-6 text-slate-300 text-base leading-relaxed space-y-4">
              <p>
                מאחורי המותג <strong>HERSHTIKTEC</strong> עומד צוות פיתוח מקצועי ומחויב בהובלת קובי הרשטיק - ארכיטקט פתרונות דיגיטליים, מומחה פיתוח ואינטגרציה, ו<strong>מילואימניק פעיל</strong> בחטיבה לוחמת. אנו מביאים את ערכי הרעות, המקצועיות ללא פשרות, וההתגייסות המלאה למשימה - היישר אל תוך תהליך כתיבת הקוד של האתר שלכם.
              </p>
              <p>
                אנו מאמינים כי קוד הוא יצירה אנושית. בעידן שבו כולם רצים להדביק פתרונות AI גנריים וזולים, אנו ב-HERSHTIKTEC משקיעים את המחשבה, האדריכלות וההתאמה האישית שכל עסק כה זקוק לה. 
              </p>
              <p className="border-r-2 border-cyan-500 pr-4 italic text-slate-400">
                &quot;עבורנו, ה-AI הוא כלי עזר סופר-מתוחכם להאצת פיתוח המכניקה, אך הלב, המוח, הנגישות, עיצוב ה-UI העדין והמילים המוכרות - כולם 100% פרי תכנון ופיתוח אנושי המבוצע ברזולוציה הגבוהה ביותר.&quot;
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="mt-12 space-y-6" id="about-values">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4 items-start" id={`about-value-${idx}`}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10" aria-hidden="true">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">{val.title}</h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Visual High-Tech Reservist/Tech Card (5 columns on desktop) */}
          <div className="lg:col-span-5" id="about-visual-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl p-8 shadow-2xl frosted-glass"
            >
              {/* Corner tech lines */}
              <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-cyan-500/60 rounded-tr" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-cyan-500/60 rounded-bl" />

              <div className="flex items-center gap-3.5 mb-6">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-display text-xs font-black uppercase tracking-wider text-cyan-400">הצהרת כוונות ושירות</span>
              </div>

              <h3 className="text-xl font-black text-white font-display mb-5 tracking-tight">
                למה לבחור דווקא ב-HERSHTIKTEC?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-display font-extrabold">1.</span>
                  <p className="leading-relaxed"><strong className="font-display font-bold text-white">משמעת זמן קשוחה:</strong> האתר שלכם יבוצע ויימסר בזמן קבוע מראש, ללא שינויי מחיר או עיכובים מיותרים.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-display font-extrabold">2.</span>
                  <p className="leading-relaxed"><strong className="font-display font-bold text-white">בלי קוד מלוכלך:</strong> אנו לא משתמשים באלמנטור או תוספים כבדים שמאטים את הנייד. קוד ה-React ו-Tailwind שלנו קל, נקי ומהיר במיוחד לגוגל.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-display font-extrabold">3.</span>
                  <p className="leading-relaxed"><strong className="font-display font-bold text-white">חסינות מסנקציות ותביעות:</strong> התאמה קשיחה לתקנות חוק שוויון זכויות לאנשים עם מוגבלות (ת&quot;י 5568).</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-cyan-400 font-display font-extrabold">4.</span>
                  <p className="leading-relaxed"><strong className="font-display font-bold text-white">זמינות גם מהשטח:</strong> גם כשאנו משרתים את המדינה במילואים, המערך שלנו מגובה ומאובטח כדי לספק תמיכה טכנית רציפה בחירום ובשמונים אחוז זמינות.</p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full shrink-0 overflow-hidden bg-slate-950 border-2 border-cyan-500/40 shadow-xl shadow-cyan-950/40">
                    <img 
                      src="/kobi.png" 
                      alt="קובי הרשטיק" 
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallbackElem = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallbackElem) {
                          fallbackElem.style.display = "flex";
                        }
                      }}
                    />
                    <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-cyan-950/80 to-slate-950 text-cyan-400 font-display text-base font-extrabold">
                      KH
                    </div>
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm text-cyan-400 font-display font-bold tracking-widest uppercase mb-1">מייסד הסטודיו</span>
                    <span className="text-2xl sm:text-3xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-100">קובי הרשטיק</span>
                  </div>
                </div>
                <span className="self-start sm:self-center rounded bg-slate-950/90 px-4.5 py-2.5 text-xs sm:text-sm font-black text-cyan-400 border border-slate-850 shrink-0 font-display tracking-wider">
                  מילואימניק גאה
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
