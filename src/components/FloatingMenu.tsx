import React, { useEffect, useRef, useState } from 'react';
import { SiteMode } from '../types';
import { X, ArrowUpRight, FileText, Mail, Linkedin, Sliders } from 'lucide-react';
import { BritishFlagIcon, LatamIcon } from './ModeIcons';
import { getTranslation } from '../data/translations';

interface FloatingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeMode: SiteMode;
  onToggleMode: (mode: SiteMode) => void;
  onOpenCV: () => void;
  onOpenAccessibility: () => void;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({
  isOpen,
  onClose,
  activeMode,
  onToggleMode,
  onOpenCV,
  onOpenAccessibility,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  const t = getTranslation(activeMode);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ opacity: isAnimating ? 1 : 0 }}
        className="fixed inset-0 bg-black/65 backdrop-blur-md transition-opacity duration-400"
        aria-hidden="true"
      />

      {/* Floating Menu with CIRCULAR EXPANDING WAVE ANIMATION */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        style={{
          clipPath: isAnimating
            ? 'circle(150% at calc(100% - 48px) 48px)'
            : 'circle(0% at calc(100% - 48px) 48px)',
          transition: 'clip-path 450ms cubic-bezier(0.16, 1, 0.3, 1), transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="fixed top-3 right-3 bottom-3 sm:top-4 sm:right-4 sm:bottom-4 w-[calc(100vw-24px)] sm:w-[420px] bg-[#121212] text-[#F6F4EE] rounded-[36px] sm:rounded-[44px] p-7 sm:p-9 flex flex-col justify-between shadow-2xl border-2 border-white/15 z-50 overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2454FF]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4FF32]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Bar Inside Menu */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF32] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">
              {activeMode === 'latam' ? 'Menú Principal' : 'Navigation Menu'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-md"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Primary Navigation Links */}
        <nav className="relative z-10 my-auto py-6 flex flex-col gap-4 sm:gap-5">
          {[
            { label: t.nav.work, href: '#work', index: '01' },
            { label: t.nav.services, href: '#services', index: '02' },
            { label: t.nav.workflow, href: '#workflow', index: '03' },
            { label: t.nav.about, href: '#about', index: '04' },
            { label: t.nav.contact, href: '#contact', index: '05' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline justify-between text-3xl sm:text-4xl font-black tracking-tight text-white/90 hover:text-white transition-colors"
            >
              <span className="group-hover:translate-x-3 transition-transform duration-200">
                {item.label}
              </span>
              <span className="text-xs font-black text-white/40 tracking-wider">
                {item.index}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom Controls: Mode Toggle + Quick Actions */}
        <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
          {/* Mode Switcher */}
          <div className="bg-white/5 rounded-2xl p-1.5 flex items-center justify-between gap-1 border border-white/10">
            <button
              onClick={() => onToggleMode('international')}
              className={`flex-1 py-2.5 px-2.5 rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeMode === 'international'
                  ? 'bg-white text-[#121212] shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <BritishFlagIcon className="w-4 h-2.5" />
              <span>INTERNACIONAL</span>
            </button>
            <button
              onClick={() => onToggleMode('latam')}
              className={`flex-1 py-2.5 px-2.5 rounded-xl text-xs font-bold tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeMode === 'latam'
                  ? 'bg-[#0D5C46] text-[#F6D332] shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <LatamIcon className="w-4 h-4" />
              <span>LATAM</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => {
                onClose();
                onOpenCV();
              }}
              className="py-3 px-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{activeMode === 'latam' ? 'Ver CV Completo' : 'View Full CV'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenAccessibility();
              }}
              className="py-3 px-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{activeMode === 'latam' ? 'Accesibilidad' : 'Accessibility'}</span>
            </button>
          </div>

          {/* Direct Social Links */}
          <div className="flex items-center justify-between text-xs text-white/60 pt-2 font-medium">
            <a
              href="mailto:mtabareza@gmail.com"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>mtabareza@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/mtabareza"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white flex items-center gap-0.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
