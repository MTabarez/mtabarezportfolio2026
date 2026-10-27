import React, { useState, useEffect } from 'react';
import { SiteMode } from '../types';
import { Sliders, Menu } from 'lucide-react';
import { BritishFlagIcon, LatamIcon } from './ModeIcons';
import { getTranslation } from '../data/translations';

interface HeaderProps {
  activeMode: SiteMode;
  onToggleMode: (mode: SiteMode) => void;
  onOpenAccessibility: () => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeMode,
  onToggleMode,
  onOpenAccessibility,
  onOpenMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const t = getTranslation(activeMode);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect current section on scroll
      const sections = ['contact', 'about', 'services', 'work'];
      const scrollPos = window.scrollY + 200;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: t.nav.work },
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`z-40 transition-all duration-300 ${
        isScrolled
          ? 'fixed top-3 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[92%] md:max-w-[920px] rounded-full bg-[var(--bg-main)]/90 backdrop-blur-md shadow-md opacity-80 hover:opacity-100'
          : 'sticky top-0 w-full bg-[var(--nav-bg)] opacity-100'
      }`}
    >
      {/* Skip-to-content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 z-50 px-4 py-2 bg-black text-white rounded-lg text-xs font-bold"
      >
        Skip to main content
      </a>

      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled
            ? 'px-4 sm:px-6 py-2 sm:py-2.5'
            : 'max-w-[1440px] px-4 sm:px-8 py-3.5 sm:py-4'
        }`}
      >
        {/* Zone 1: Brand Wordmark (provisoriamente MT on scroll) */}
        <a
          href="#"
          className="text-base sm:text-lg font-black tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-all whitespace-nowrap"
        >
          {isScrolled ? (
            <span className="w-8 h-8 rounded-full bg-[#9faf23] text-[#121212] flex items-center justify-center text-xs font-black tracking-wider shadow-sm">
              MT
            </span>
          ) : (
            'MARIANNE TABAREZ'
          )}
        </a>

        {/* Zone 2: Navigation Links (UPPERCASE, Inverted Background ONLY on active section, NO border around items) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-6"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`uppercase tracking-wider text-xs font-black transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-main)] rounded-full px-4 py-1.5 shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-1 py-1'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Flag/Latam Mode Switch + Accessibility on desktop, single Menu Trigger on mobile) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* INTL / LATAM Mode Switch (Desktop only, NO surrounding border) */}
          <div
            role="group"
            aria-label="Design system visual mode"
            className="hidden md:flex p-1 rounded-full bg-[var(--card-surface)]/20 items-center text-xs font-bold shadow-xs"
          >
            {/* INTL (British Flag Icon) */}
            <button
              onClick={() => onToggleMode('international')}
              aria-pressed={activeMode === 'international'}
              title="INTL: English language, editorial contrast, restrained palette"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider font-extrabold ${
                activeMode === 'international'
                  ? 'bg-[#9faf23] text-[#121212] shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BritishFlagIcon className="w-4 h-2.5" />
              <span>INTL</span>
            </button>

            {/* LATAM (Stylized Latin America / Sol Icon) */}
            <button
              onClick={() => onToggleMode('latam')}
              aria-pressed={activeMode === 'latam'}
              title="LATAM: Idioma Español, paleta cálida latinoamericana, bloques de color sólido"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider font-extrabold ${
                activeMode === 'latam'
                  ? 'bg-[#9faf23] text-[#121212] shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LatamIcon className="w-4 h-4" />
              <span>LATAM</span>
            </button>
          </div>

          {/* Accessibility Preferences Trigger Button (Desktop only; in mobile accessible via menu) */}
          <button
            onClick={onOpenAccessibility}
            aria-label="Open accessibility preferences"
            title="Accessibility settings"
            className="hidden md:flex w-10 h-10 rounded-full border border-[var(--card-border)] bg-[var(--card-surface)] hover:bg-black/5 dark:hover:bg-white/5 items-center justify-center text-[var(--text-primary)] transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer shadow-xs"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Single Menu Trigger */}
          <button
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="w-10 h-10 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 flex items-center justify-center transition-opacity focus-visible:ring-2 focus-visible:ring-black cursor-pointer shadow-xs"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
