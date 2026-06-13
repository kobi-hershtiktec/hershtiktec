import React, { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Logo from "./Logo";

interface NavbarProps {
  activeHash: string;
}

export default function Navbar({ activeHash }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "ראשי", href: "#home" },
    { name: "שירותים", href: "#services" },
    { name: "תיק עבודות", href: "#portfolio" },
    { name: "מי אנחנו", href: "#about" },
    { name: "שאלות ותשובות", href: "#faq" },
    { name: "צור קשר", href: "#contact" },
  ];

  const whatsappUrl = "https://wa.me/972505712342?text=שלום%20רב,%20אשמח%20לקבל%20פרטים%20נוספים%20על%20בניית%20אתר%20פרימיום%20מ-HERSHTIKTEC";

  return (
    <header className="sticky top-0 z-[99] frosted-glass-header" id="main-navigation-header">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* RIGHT SIDE: Logo */}
          <div className="flex-shrink-0" id="navbar-logo-container">
            <a href="#home" className="block focus-visible:ring-2 focus-visible:ring-brand-cyan p-1 rounded-md" aria-label="HERSHTIKTEC דף הבית">
              <Logo className="h-10" />
            </a>
          </div>

          {/* CENTER SIDE: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="ניווט ראשי באתר" id="desktop-navbar">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href || (link.href === "#home" && (activeHash === "" || activeHash === "#"));
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${
                    isActive ? "text-brand-cyan font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]" : "text-brand-turquoise/80 hover:text-brand-cyan font-medium"
                  } text-[15px] transition-all duration-200 relative group py-2 focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md px-2`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 right-2 left-2 h-[2px] bg-brand-cyan transition-transform duration-300 origin-right ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* LEFT SIDE: Consulting glowing button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan/10 border border-brand-cyan hover:bg-brand-cyan hover:text-slate-950 text-brand-cyan font-bold px-6 py-2.5 shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-103 active:scale-97 text-xs sm:text-sm cursor-pointer"
              aria-label="שיחת ייעוץ בוואטסאפ (נפתח בחלון חדש)"
            >
              <PhoneCall className="h-4 w-4" />
              <span>שיחת ייעוץ בוואטסאפ</span>
            </a>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-slate-950"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "סגור תפריט ניווט" : "פתח תפריט ניווט"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.05] bg-brand-bg"
          >
            <div className="space-y-1.5 px-4 py-6">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href || (link.href === "#home" && (activeHash === "" || activeHash === "#"));
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-semibold transition-all duration-200 ${
                      isActive 
                        ? "bg-brand-cyan/10 text-brand-cyan border-r-4 border-brand-cyan pr-3" 
                        : "text-brand-turquoise/80 hover:bg-white/5 hover:text-brand-cyan"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/[0.05] flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-cyan hover:bg-brand-cyan/90 text-slate-950 font-bold py-3 text-center transition-all shadow-md"
                  aria-label="פתיחת שיחת ייעוץ מהירה בוואטסאפ"
                >
                  <PhoneCall className="h-5 w-5" />
                  <span>שיחת ייעוץ בוואטסאפ</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
