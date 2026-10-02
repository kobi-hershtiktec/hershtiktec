import React from "react";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

// Modern phone mockup (generic, iPhone-style proportions): titanium edge, island,
// side buttons. All sizes are relative so it scales from ~90px to ~300px wide.
export default function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={className}>
      <div className="relative">
      {/* Side buttons */}
      <span aria-hidden="true" className="absolute -left-[1.6%] top-[17%] h-[5%] w-[1.6%] rounded-l-sm bg-[#3a3f46]" />
      <span aria-hidden="true" className="absolute -left-[1.6%] top-[25%] h-[9%] w-[1.6%] rounded-l-sm bg-[#3a3f46]" />
      <span aria-hidden="true" className="absolute -left-[1.6%] top-[36%] h-[9%] w-[1.6%] rounded-l-sm bg-[#3a3f46]" />
      <span aria-hidden="true" className="absolute -right-[1.6%] top-[29%] h-[14%] w-[1.6%] rounded-r-sm bg-[#3a3f46]" />

      {/* Titanium edge */}
      <div className="rounded-[17%/8%] bg-[linear-gradient(145deg,#5b616a,#2a2e34_40%,#4a5058_70%,#23262b)] p-[2.2%] shadow-[0_40px_90px_-25px_rgb(0_0_0/0.95)]">
        {/* Black bezel */}
        <div className="rounded-[15.5%/7.2%] bg-[#050607] p-[3.2%]">
          {/* Screen */}
          <div className="relative aspect-[390/844] overflow-hidden rounded-[12.5%/5.8%] bg-ink-2">
            {children}
            {/* Island */}
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-[1.6%] z-10 h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black"
            />
            {/* Glass sheen */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(115deg,rgb(255_255_255/0.07),transparent_35%)]"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
