import React from 'react';
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
  const t = getTranslation(activeMode);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[var(--nav-bg)] border-b border-[var(--card-border)] transition-colors duration-300">
      {/* Skip-to-content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 z-50 px-4 py-2 bg-black text-white rounded-lg text-xs font-bold"
      >
        Skip to main content
      </a>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-extrabold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          MARIANNE TABAREZ
        </a>

        {/* Zone 2: Navigation Links (Bilingual) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-semibold text-[var(--text-secondary)]"
        >
          <a
            href="#work"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t.nav.work}
          </a>
          <a
            href="#services"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t.nav.services}
          </a>
          <a
            href="#workflow"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t.nav.workflow}
          </a>
          <a
            href="#about"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: Actions (Flag/Latam Mode Switch + Accessibility + Menu Trigger) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* INTERNACIONAL / LATAM Mode Switch */}
          <div
            role="group"
            aria-label="Design system visual mode"
            className="p-1 rounded-full border border-[var(--card-border)] bg-[var(--card-surface)] flex items-center text-xs font-bold shadow-xs"
          >
            {/* Internacional (British Flag Icon) */}
            <button
              onClick={() => onToggleMode('international')}
              aria-pressed={activeMode === 'international'}
              title="Internacional: English language, editorial contrast, restrained palette"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeMode === 'international'
                  ? 'bg-[#121212] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <BritishFlagIcon className="w-4 h-2.5" />
              <span className="hidden xs:inline">INTERNACIONAL</span>
              <span className="xs:hidden">INTL</span>
            </button>

            {/* LATAM (Stylized Latin America / Sol Icon) */}
            <button
              onClick={() => onToggleMode('latam')}
              aria-pressed={activeMode === 'latam'}
              title="Latam: Idioma Español, paleta cálida latinoamericana, bloques de color sólido"
              className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
                activeMode === 'latam'
                  ? 'bg-[#0D5C46] text-[#F6D332] shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LatamIcon className="w-4 h-4" />
              <span>LATAM</span>
            </button>
          </div>

          {/* Accessibility Preferences Trigger Button */}
          <button
            onClick={onOpenAccessibility}
            aria-label="Open accessibility preferences"
            title="Accessibility settings"
            className="w-10 h-10 rounded-full border border-[var(--card-border)] bg-[var(--card-surface)] hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center text-[var(--text-primary)] transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer shadow-xs"
          >
            <Sliders className="w-4 h-4" />
          </button>

          {/* Floating Drawer Menu Trigger */}
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
