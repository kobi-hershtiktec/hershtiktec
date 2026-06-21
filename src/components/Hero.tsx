import React from "react";
import { ArrowLeft, MessageCircle, Star, ShieldCheck, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const whatsappUrl = "https://wa.me/972505712342?text=שלום%20רב,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20בניית%20אתר%20פרימיום%2520מ-HERSHTIKTEC";
  
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] md:w-[1150px] md:h-[1150px] opacity-[0.04] pointer-events-none select-none z-0 overflow-hidden">
        <motion.img 
          src="/favicon.png" 
          alt="" 
          className="w-full h-full object-contain"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
        />
      </div>



      <div className="relative max-w-6xl mx-auto text-center z-10">
         


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



      </div>
    </section>
  );
}
