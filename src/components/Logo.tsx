import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`} dir="ltr">
      <img src="/mark.png" alt="" width={32} height={32} className="h-8 w-8" />
      <span className="text-[17px] font-semibold tracking-[0.06em] text-fg">
        HERSHTIK<span className="text-accent">TEC</span>
      </span>
    </span>
  );
}
