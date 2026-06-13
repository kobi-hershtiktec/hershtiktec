import React, { useEffect, useRef } from "react";
import logoSvg from "@/logo.svg";

interface BackgroundPlasmaGridProps {
  activeHash?: string;
}

export default function BackgroundPlasmaGrid({ activeHash = "#home" }: BackgroundPlasmaGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Keep the activeHash in a ref so the render loop can access the latest value without rebuilding the canvas
  const activeHashRef = useRef(activeHash);
  useEffect(() => {
    activeHashRef.current = activeHash;
  }, [activeHash]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize composite blending
    if (!ctx) return;

    let animationFrameId: number;
    
    // Scale canvas to match viewport size with viewport-performance cap
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setupCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      // Cap device pixel ratio at 1.05 for backdrops to avoid massive fill-rate performance lag on mobile & Retina screens
      const dpr = Math.min(window.devicePixelRatio || 1, 1.05);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setupCanvasSize();

    // Load logo image for canvas painting
    const img = new Image();
    img.src = logoSvg;

    const handleResize = () => {
      setupCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    // Dynamic background particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      phase: number;
      speed: number;
      orbitRadius: number;
      angle: number;
      isOrbiter: boolean;
    }

    const particles: Particle[] = [];
    const count = 55; // Reduced from 80 to 55 to guarantee ultra-fluid performance on all devices

    for (let i = 0; i < count; i++) {
      const isOrbiter = i < 15; // 15 orbital particles for beautiful logo gravity ring
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: isOrbiter ? 1.0 + Math.random() * 1.3 : 0.6 + Math.random() * 1.2,
        opacity: isOrbiter ? 0.18 + Math.random() * 0.22 : 0.08 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0015 + Math.random() * 0.002,
        orbitRadius: 85 + Math.random() * 115,
        angle: Math.random() * Math.PI * 2,
        isOrbiter
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let tick = 0;
    const render = () => {
      tick += 0.0025; // Gentle cinematic speed
      
      const currentHash = activeHashRef.current;
      
      // Determine layout styling parameters based on current path/hash
      let primaryColor = "34, 211, 238"; // Default Brand Cyan
      let secondaryColor = "59, 130, 246"; // Default Indigo
      let logoMultiplier = 1.0;
      let opacityMultiplier = 1.0;
      let particleSpeedMultiplier = 1.0;
      let customLogoYOffset = 0.38; // Default upper viewport centered

      if (currentHash === "#services") {
        primaryColor = "16, 185, 129"; // Mint green/emerald
        secondaryColor = "20, 184, 166"; // Teal
        logoMultiplier = 0.85;
        opacityMultiplier = 0.75;
        particleSpeedMultiplier = 0.8;
        customLogoYOffset = 0.42;
      } else if (currentHash === "#portfolio") {
        primaryColor = "217, 70, 239"; // Purple/fuchsia
        secondaryColor = "99, 102, 241"; // Indigo
        logoMultiplier = 0.9;
        opacityMultiplier = 0.8;
        particleSpeedMultiplier = 1.1;
        customLogoYOffset = 0.35;
      } else if (currentHash === "#about") {
        primaryColor = "59, 130, 246"; // Blue
        secondaryColor = "34, 211, 238"; // Cyan
        logoMultiplier = 0.7; // Smaller watermark for longer text pages
        opacityMultiplier = 0.5; // Very ultra-faint to maintain perfect reading focus
        particleSpeedMultiplier = 0.5; // Ultra calm
        customLogoYOffset = 0.5; // Center of screen
      } else if (currentHash === "#faq") {
        primaryColor = "251, 146, 60"; // Soft warm orange
        secondaryColor = "244, 63, 94"; // Rose
        logoMultiplier = 0.65;
        opacityMultiplier = 0.6;
        particleSpeedMultiplier = 0.7;
        customLogoYOffset = 0.45;
      } else if (currentHash === "#contact") {
        primaryColor = "34, 211, 238"; // Cyan
        secondaryColor = "236, 72, 153"; // Pink
        logoMultiplier = 1.05;
        opacityMultiplier = 0.9;
        particleSpeedMultiplier = 1.35;
        customLogoYOffset = 0.38;
      }

      // Draw background clear (Using solid color to improve canvas frame performance over transparent overlays)
      ctx.fillStyle = "#030712"; 
      ctx.fillRect(0, 0, width, height);

      const isMobile = width < 768;
      
      // Main Center Core Coordinates of the ambient background logo
      const logoX = width / 2 + Math.sin(tick * 0.4) * 20;
      const logoY = height * customLogoYOffset + Math.cos(tick * 0.3) * 12;

      // --- 1. Soft Dynamic Kinetic Rings (resonance ripples behind logo) ---
      ctx.save();
      for (let r = 0; r < 2; r++) {
        const ringPhase = tick * 1.2 + r * Math.PI;
        const waveRadius = (50 + (ringPhase % 2.5) * 55) * (isMobile ? 0.65 : 1.0) * logoMultiplier;
        const ringAlpha = (1 - (ringPhase % 2.5) / 2.5) * 0.016 * opacityMultiplier;
        
        ctx.strokeStyle = `rgba(${primaryColor}, ${ringAlpha})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(logoX, logoY, waveRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();

      // --- 2. Ambient Responsive Image Watermark (Extremely faint) ---
      if (img.complete && img.naturalWidth > 0) {
        ctx.save();
        ctx.globalAlpha = 0.024 * opacityMultiplier; 
        ctx.translate(logoX, logoY);
        
        // Gentle slow spin loop
        ctx.rotate(tick * 0.06); 
        
        const scalePulse = 1.0 + Math.sin(tick * 0.5) * 0.05;
        const baseSize = isMobile ? 120 : 230;
        const logoSize = baseSize * scalePulse * logoMultiplier;
        
        ctx.drawImage(img, -logoSize / 2, -logoSize / 2, logoSize, logoSize);
        ctx.restore();

        // Secondary deeper glow image to build subtle volumetric depth
        ctx.save();
        ctx.globalAlpha = 0.009 * opacityMultiplier;
        ctx.translate(logoX, logoY);
        ctx.rotate(-tick * 0.03); // Counter-rotation
        const glowSize = (baseSize + 30) * scalePulse * logoMultiplier;
        ctx.drawImage(img, -glowSize / 2, -glowSize / 2, glowSize, glowSize);
        ctx.restore();
      }

      // --- 3. Micro Wave Energy Lanes (thin & faint) ---
      ctx.save();
      ctx.strokeStyle = `rgba(${primaryColor}, ${0.012 * opacityMultiplier})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      const step = isMobile ? 60 : 45;
      for (let i = 0; i < width; i += step) {
        const distToLogo = Math.abs(i - logoX);
        const magnetism = distToLogo < 250 ? (250 - distToLogo) / 250 * 20 : 0;
        const sineY = height / 2 + Math.sin(tick * 0.7 + i * 0.004) * (45 + magnetism) + Math.cos(tick * 0.3 + i * 0.002) * 15;
        if (i === 0) {
          ctx.moveTo(i, sineY);
        } else {
          ctx.lineTo(i, sineY);
        }
      }
      ctx.stroke();
      ctx.restore();

      // --- 4. Responsive Kinetic Particles ---
      particles.forEach((p) => {
        p.phase += p.speed * particleSpeedMultiplier;

        if (p.isOrbiter) {
          p.angle += 0.003 * (p.speed * 200) * particleSpeedMultiplier;
          const targetX = logoX + Math.cos(p.angle) * p.orbitRadius * logoMultiplier;
          const targetY = logoY + Math.sin(p.angle) * p.orbitRadius * 0.8 * logoMultiplier;
          
          p.x += (targetX - p.x) * 0.04;
          p.y += (targetY - p.y) * 0.04;
        } else {
          p.x += p.vx * particleSpeedMultiplier;
          p.y += p.vy * particleSpeedMultiplier;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Mouse coordinates drift attraction
        if (mouse.x > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            const pull = (220 - dist) * 0.000015;
            p.x += dx * pull;
            p.y += dy * pull;
          }
        }

        const currentOpacity = p.opacity * opacityMultiplier * (Math.sin(p.phase) * 0.35 + 0.65);

        ctx.fillStyle = p.isOrbiter 
          ? `rgba(${primaryColor}, ${currentOpacity * 0.9})`
          : `rgba(${secondaryColor}, ${currentOpacity * 0.7})`;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra subtle halos on larger nodes
        if (p.size > 1.4) {
          ctx.fillStyle = `rgba(${primaryColor}, ${currentOpacity * 0.1})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // --- 5. Highly Optimized Neurons Lexus Constellations ---
      // Bottleneck Optimized: We only interconnect the first 16 particles (the orbiters and active nodes)
      // to avoid cubic time-complexity lookup on high-density nodes.
      ctx.save();
      ctx.lineWidth = 0.55;
      const maxLinked = isMobile ? 12 : 18;
      for (let i = 0; i < maxLinked; i++) {
        for (let j = i + 1; j < count; j++) {
          const pi = particles[i];
          const pj = particles[j];
          if (!pi || !pj) continue;

          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = isMobile ? 95 : 110;
          if (dist < maxDist) {
            const linkOpacity = ((maxDist - dist) / maxDist) * 0.028 * opacityMultiplier;
            ctx.strokeStyle = `rgba(${primaryColor}, ${linkOpacity})`;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0" 
      style={{ mixBlendMode: "screen" }}
    />
  );
}
