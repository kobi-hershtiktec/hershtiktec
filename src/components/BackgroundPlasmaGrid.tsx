import React, { useEffect, useState } from "react";

interface BackgroundPlasmaGridProps {
  activeHash?: string;
}

export default function BackgroundPlasmaGrid({ activeHash = "#home" }: BackgroundPlasmaGridProps) {
  // Use state to smoothly transition colors based on the active section without canvas painting
  const [colors, setColors] = useState({
    primary: "from-cyan-500/8 to-blue-600/8",
    secondary: "from-indigo-500/8 to-cyan-500/4",
    glow: "rgba(34, 211, 238, 0.08)",
  });

  useEffect(() => {
    switch (activeHash) {
      case "#services":
        setColors({
          primary: "from-emerald-500/6 to-teal-600/6",
          secondary: "from-emerald-600/4 to-teal-400/4",
          glow: "rgba(16, 185, 129, 0.06)",
        });
        break;
      case "#portfolio":
        setColors({
          primary: "from-fuchsia-500/6 to-indigo-600/6",
          secondary: "from-purple-600/4 to-fuchsia-400/4",
          glow: "rgba(217, 70, 239, 0.06)",
        });
        break;
      case "#about":
        setColors({
          primary: "from-blue-500/5 to-cyan-600/5",
          secondary: "from-indigo-600/3 to-blue-400/3",
          glow: "rgba(59, 130, 246, 0.04)",
        });
        break;
      case "#faq":
        setColors({
          primary: "from-orange-500/6 to-rose-600/6",
          secondary: "from-amber-600/4 to-red-400/4",
          glow: "rgba(251, 146, 60, 0.05)",
        });
        break;
      case "#contact":
        setColors({
          primary: "from-cyan-500/8 to-pink-600/8",
          secondary: "from-blue-600/4 to-rose-400/4",
          glow: "rgba(34, 211, 238, 0.08)",
        });
        break;
      default: // #home / general
        setColors({
          primary: "from-cyan-500/8 to-blue-600/8",
          secondary: "from-indigo-500/6 to-cyan-500/4",
          glow: "rgba(34, 211, 238, 0.08)",
        });
    }
  }, [activeHash]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-10] overflow-hidden bg-[#030712] select-none" id="background-plasma-grid">
      {/* 1. Cybernetic Grid Overlay - High contrast, extremely lightweight css grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Elegant Dots Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 3. Infinite Floating Soft Glows (Using CSS 3D Transforms & will-change fields for 100% GPU efficiency) */}
      <div className="absolute inset-0">
        {/* Glow Orb A - Upper Left Center */}
        <div 
          className={`absolute top-[10%] left-[5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-br ${colors.primary} blur-[120px] md:blur-[160px] opacity-75 mix-blend-screen will-change-transform`}
          style={{
            animation: "pulse-gentle 12s ease-in-out infinite alternate"
          }}
        />

        {/* Glow Orb B - Bottom Right Center */}
        <div 
          className={`absolute bottom-[15%] right-[10%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full bg-gradient-to-tr ${colors.secondary} blur-[110px] md:blur-[140px] opacity-70 mix-blend-screen will-change-transform`}
          style={{
            animation: "pulse-gentle 16s ease-in-out infinite alternate-reverse"
          }}
        />
        
        {/* Dynamic Center Ambient Center Wave */}
        <div 
          className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] transition-all duration-1000 opacity-40 mix-blend-screen"
          style={{
            background: colors.glow
          }}
        />
      </div>

      {/* 4. Soft Brand Spinning Watermark (Using the favicon.png dynamically Integrated in Background) */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 opacity-[0.03] md:opacity-[0.04] select-none pointer-events-none z-0">
        <img 
          src="/favicon.png" 
          alt="" 
          className="w-[190px] md:w-[290px] h-auto select-none pointer-events-none will-change-transform rounded-full"
          style={{
            animation: "spin-ultra-slow 90s linear infinite"
          }}
        />
      </div>

      {/* 5. Additional Floating Brand Favicon Watermarks across the back-canvas */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Top-Right watermark */}
        <div className="absolute top-[8%] right-[10%] opacity-[0.015] md:opacity-[0.02] will-change-transform" style={{ animation: "float-gentle 15s ease-in-out infinite" }}>
          <img src="/favicon.png" alt="" className="w-24 h-24 rounded-full" />
        </div>
        
        {/* Mid-Left watermark */}
        <div className="absolute top-[48%] left-[8%] opacity-[0.012] md:opacity-[0.018] will-change-transform" style={{ animation: "float-gentle 20s ease-in-out infinite reverse" }}>
          <img src="/favicon.png" alt="" className="w-32 h-32 rounded-full" />
        </div>

        {/* Bottom-Right watermark */}
        <div className="absolute bottom-[12%] right-[12%] opacity-[0.015] md:opacity-[0.02] will-change-transform" style={{ animation: "float-gentle 18s ease-in-out infinite" }}>
          <img src="/favicon.png" alt="" className="w-28 h-28 rounded-full" />
        </div>
      </div>

      {/* Custom Keyframes - Inlined to guarantee global compatibility */}
      <style>{`
        @keyframes pulse-gentle {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(4%, 3%, 0) scale(1.06);
          }
          100% {
            transform: translate3d(-3%, -2%, 0) scale(0.96);
          }
        }
        @keyframes float-gentle {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(10px, -15px, 0) rotate(5deg);
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
        }
        @keyframes spin-ultra-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
