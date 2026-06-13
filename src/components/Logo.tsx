import React from "react";
import logoSvg from "@/logo.svg";

interface LogoProps {
  className?: string;
  variant?: "small" | "large";
}

export default function Logo({ className = "", variant = "small" }: LogoProps) {
  const isLarge = variant === "large";

  return (
    <div 
      className={`flex items-center gap-3 select-none ${className}`} 
      id="brand-logo-wrapper"
    >
      {logoSvg ? (
        /* לוגו תמונה שהועלה ומזוהה באופן אוטומטי - מסגור עגול ומעוצב */
        <img 
          src={logoSvg} 
          alt="HERSHTIKTEC Logo" 
          className={`rounded-full aspect-square object-cover border border-brand-cyan/40 bg-slate-950/65 p-0.5 transition-transform duration-300 hover:scale-105 ${
            isLarge ? "h-11 w-11" : "h-8.5 w-8.5"
          }`}
        />
      ) : (
        /* חותם גיאומטרי פרימיום מעוצב בקוד כברירת מחדל */
        <div 
          className={`relative flex items-center justify-center border border-brand-cyan/30 rounded-lg bg-black/40 transition-transform duration-300 hover:rotate-45 ${
            isLarge ? "h-11 w-11" : "h-8.5 w-8.5"
          }`} 
          id="logo-geometric-seal"
        >
          <span className="font-mono text-xs font-bold text-brand-cyan">H</span>
          {/* פסי עיטור יוקרתיים */}
          <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-brand-cyan/50 rounded-tr-[2px]" />
          <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-brand-cyan/50 rounded-bl-[2px]" />
        </div>
      )}
      
      {/* כיתוב שם המותג */}
      <span 
        className={`font-display font-black tracking-[0.08em] ${
          isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
        }`}
        id="logo-brand-text"
      >
        <span className="text-white hover:text-brand-cyan transition-colors duration-300">HERSHTIK</span>
        <span className="bg-gradient-to-r from-brand-cyan via-brand-turquoise to-brand-cyan/80 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(34,211,238,0.25)]">TEC</span>
      </span>
    </div>
  );
}


