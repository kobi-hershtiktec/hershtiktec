import React from "react";
import { Moon, Sun } from "@phosphor-icons/react";

// Switches <html data-theme>. The initial theme is set before paint by the inline script in
// index.html (saved choice, else the device setting). Icons swap via CSS, so markup is the
// same for both themes and hydration stays clean.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "light" ? "#f5f7f9" : "#0b0d10");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable: the choice just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="החלפת מצב תצוגה: בהיר או כהה"
      title="מצב בהיר / כהה"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-fg/5 hover:text-fg ${className}`}
    >
      <Sun size={20} className="light:hidden" aria-hidden="true" />
      <Moon size={20} className="hidden light:block" aria-hidden="true" />
    </button>
  );
}
