import React, { useState } from "react";
import { ArrowLeft, MessageCircle, Star, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoSvg from "@/logo.svg";

interface AuditLog {
  text: string;
  status: string;
  success: boolean;
}

export default function Hero() {
  const whatsappUrl = "https://wa.me/972505712342?text=שלום%20רב,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20בניית%20אתר%20פרימיום%2520מ-HERSHTIKTEC";
  
  const [isAuditing, setIsAuditing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);

  const handleStartSimulation = () => {
    setIsAuditing(true);
    setShowResults(false);
    setAuditLogs([]);

    const logs = [
      { text: "Initializing audit sequence on production server...", status: "PENDING", success: true },
      { text: "Scanning asset bundles & CSS utility footprint...", status: "PENDING", success: true },
      { text: "Measuring Cumulative Layout Shift & Largest Contentful Paint...", status: "PENDING", success: true },
      { text: "Auditing document tree for screen-readers & navigation contrast (AA / AAA)...", status: "PENDING", success: true },
      { text: "Evaluating schema markup, robot.txt and web crawler accessibility...", status: "PENDING", success: true },
    ];

    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < logs.length) {
        setAuditLogs(prev => {
          const next = [...prev];
          if (currentStep > 0) {
            next[currentStep - 1] = { ...next[currentStep - 1], status: "100% PASS ✓" };
          }
          next.push({ ...logs[currentStep], status: "RUNNING..." });
          return next;
        });
        currentStep++;
      } else {
        clearInterval(interval);
        setAuditLogs(prev => {
          const finished = [...prev];
          if (finished.length > 0) {
            finished[finished.length - 1] = { ...finished[finished.length - 1], status: "100% PASS ✓" };
          }
          return finished;
        });
        setTimeout(() => {
          setIsAuditing(false);
          setShowResults(true);
        }, 150);
      }
    }, 450);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-bg py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900"
      aria-label="מבוא ואזור ראשי"
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
      <div className="absolute left-[-15%] top-[15%] w-[450px] h-[450px] md:w-[750px] md:h-[750px] opacity-[0.015] pointer-events-none select-none z-0 overflow-hidden">
        <motion.img 
          src={logoSvg} 
          alt="" 
          className="w-full h-full object-contain filter invert"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
         
        {/* Subtle trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold text-brand-cyan mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
          <span>פיתוח היברידי מתקדם 2026</span>
          <span className="text-slate-600">|</span>
          <ShieldCheck className="h-3.5 w-3.5 text-brand-cyan" />
          <span>100% נגישות מובנית ת&quot;י 5568</span>
        </motion.div>

        {/* Header (H1) with split gradient display typography */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display leading-[1.15] tracking-tight text-white max-w-4xl mx-auto"
        >
          אתרי פרימיום לעסקים קטנים:{" "}
          <span className="bg-gradient-to-l from-brand-cyan via-brand-turquoise to-brand-blue bg-clip-text text-transparent block mt-1">
            מהירות שיא, עיצוב בלתי מתפשר ונגישות מלאה
          </span>
        </motion.h1>

        {/* Subtitle describing hybrid AI-architect architecture */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-slate-355 max-w-3xl mx-auto leading-relaxed"
        >
          פיתוח היברידי מתקדם המשלב ארכיטקטורת קוד קפדנית, כלי AI פורצי דרך וניסיון אנושי עשיר. בלי פשרות ובמחיר הוגן לעסקים קטנים.
        </motion.p>

        {/* Call to Actions with glowing visual micro-animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Action: Pulse Whatsapp scheduling */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-brand-cyan text-slate-950 font-extrabold px-8 py-4 text-base shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.65)] hover:scale-103 active:scale-97 transition-all duration-300 animate-[pulse_3s_infinite] cursor-pointer"
            aria-label="תיאום שיחת התאמה בוואטסאפ (נפתח בחלון חדש)"
          >
            <MessageCircle className="h-5.5 w-5.5 text-slate-950 transition-transform group-hover:rotate-12" />
            <span>תיאום שיחת התאמה (WhatsApp)</span>
            <ArrowLeft className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" />
          </a>

          {/* Secondary Action: Smooth scroll to Portfolio */}
          <a
            href="#portfolio"
            className="flex w-full sm:w-auto items-center justify-center rounded-xl frosted-glass-button-secondary hover:scale-102 font-bold px-8 py-4 text-base transition-all duration-200 cursor-pointer"
            aria-label="גלול למטה לצפייה בגלריית תיק העבודות"
          >
            לצפייה בפרויקטים
          </a>
        </motion.div>

        {/* Core Value Micro Bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-slate-900 pt-8 text-xs sm:text-sm text-slate-400"
          id="hero-key-features"
        >
          <div className="flex flex-col items-center gap-1.5">
            <Zap className="h-5 w-5 text-brand-cyan animate-pulse" />
            <span className="font-bold text-slate-200">100% ביצועי מהירות</span>
            <span>ציון 95+ ב-Google PageSpeed</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 font-sans">
            <ShieldCheck className="h-5 w-5 text-brand-cyan" />
            <span className="font-bold text-slate-200">עמידה מלאה בחוק</span>
            <span>עומד בתקן הנגישות המחמיר</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 font-sans">
            <Star className="h-5 w-5 text-brand-cyan" />
            <span className="font-bold text-slate-200">עיצוב קוסטום מלא</span>
            <span>ללא תבניות מוכנות מראש</span>
          </div>
        </motion.div>

        {/* Modern High-Fidelity Performance Audit Simulator (Centered Centerpiece) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 max-w-4xl mx-auto bg-slate-950/75 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between text-right"
        >
          <div>
            {/* Mock Browser Header Menu */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-slate-500">HERSHTIKTEC Core & Performance Auditor (V2.5)</span>
              <div className="w-[12px]" />
            </div>

            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-right">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-400 font-mono bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/25">
                    LIVE AUDIT TOOL
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">סימולטור ביצועים וציון מהירות</h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
                    הריצו את בקרת הביצועים של הסטודיו בהתבסס על הנחיות ה-Web Core Vitals של Google ותיווכחו בעליונות הקוד.
                  </p>
                </div>

                {/* Simulation Controller Action button */}
                <button
                  onClick={handleStartSimulation}
                  disabled={isAuditing}
                  className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-extrabold px-6 py-3.5 text-xs sm:text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] transition-all active:scale-97 disabled:opacity-40 cursor-pointer"
                >
                  {isAuditing ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                      <span>מריץ בדיקה הנדסית...</span>
                    </>
                  ) : (
                    <span>הפעל בדיקה חיה</span>
                  )}
                </button>
              </div>

              {/* Simulated Live Console Logs */}
              {(isAuditing || auditLogs.length > 0) && (
                <div className="bg-slate-950 border border-slate-900 rounded-xl p-4 font-mono text-[11px] text-slate-300 space-y-1.5 text-left" dir="ltr">
                  {auditLogs.map((log, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex justify-between items-center border-b border-white/[0.02] pb-1"
                    >
                      <span className="text-slate-400 font-mono">{log.text}</span>
                      <span className={log.status === "RUNNING..." ? "text-cyan-400 animate-pulse font-bold" : "text-emerald-400 font-bold"}>
                        {log.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Glowing Lighthouse metrics result grid */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="pt-4 border-t border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
                  >
                    {[
                      { label: "ביצועים", value: 100 },
                      { label: "נגישויות", value: 100 },
                      { label: "תקינות קוד", value: 100 },
                      { label: "שיפור SEO", value: 100 },
                    ].map((circle, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="relative flex items-center justify-center h-16 w-16">
                          {/* Circle Background */}
                          <svg className="absolute w-full h-full transform -rotate-90">
                            <circle cx="32" cy="32" r="28" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="4" />
                            <motion.circle
                              cx="32"
                              cy="32"
                              r="28"
                              fill="transparent"
                              stroke="#22d3ee"
                              strokeWidth="4"
                              strokeDasharray="176"
                              initial={{ strokeDashoffset: 176 }}
                              animate={{ strokeDashoffset: 0 }}
                              transition={{ duration: 1.2, delay: i * 0.15 }}
                            />
                          </svg>
                          <span className="font-mono text-sm sm:text-base font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">100</span>
                        </div>
                        <span className="text-xs font-bold text-slate-300">{circle.label}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Benchmark comparison footer */}
          <div className="p-6 md:p-8 pt-0 border-t border-slate-900/60 mt-auto">
            {showResults ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-xl bg-cyan-950/20 border border-cyan-500/10 p-4 text-xs text-slate-300 leading-relaxed md:flex md:items-center md:justify-between gap-4 text-right"
              >
                <p className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>קוד ה-React הטהור שלנו קל פי 22 וחוסך זמן טעינה נייח ונייד קריטי!</span>
                </p>
                <div className="mt-2 md:mt-0 font-bold text-slate-400 font-mono text-[10px] bg-slate-900 px-2 py-1 rounded shrink-0" dir="ltr">
                  Wix Avg: <span className="text-red-400">54 / Slow</span>
                </div>
              </motion.div>
            ) : (
              <div className="text-center py-2 text-xs text-slate-500">
                הריצו את בקרת הביצועים כדי לראות את הנתונים בזמן אמת
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
