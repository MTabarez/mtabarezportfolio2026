import React, { useEffect, useRef, useState } from 'react';
import { SiteMode, AccessibilitySettings } from '../types';
import {
  X,
  ArrowUpRight,
  FileText,
  Mail,
  Linkedin,
  Sliders,
  ArrowRight,
  ArrowLeft,
  Check,
  RotateCcw,
  Info,
} from 'lucide-react';
import { BritishFlagIcon, LatamIcon } from './ModeIcons';
import { getTranslation } from '../data/translations';

interface FloatingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeMode: SiteMode;
  onToggleMode: (mode: SiteMode) => void;
  onOpenCV: () => void;
  onOpenAccessibility?: () => void;
  a11ySettings?: AccessibilitySettings;
  onUpdateSettings?: (updater: (prev: AccessibilitySettings) => AccessibilitySettings) => void;
  onResetA11y?: () => void;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({
  isOpen,
  onClose,
  activeMode,
  onToggleMode,
  onOpenCV,
  a11ySettings,
  onUpdateSettings,
  onResetA11y,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isAnimating, setIsAnimating] = useState(false);
  const [subView, setSubView] = useState<'main' | 'accessibility'>('main');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const t = getTranslation(activeMode);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setSubView('main');
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setSubView('main');
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (subView === 'accessibility') {
          setSubView('main');
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, subView, onClose]);

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

      {/* Floating Menu Drawer (Full width on mobile, elegant card drawer on desktop) */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        style={{
          clipPath: isAnimating
            ? 'circle(150% at calc(100% - 36px) 36px)'
            : 'circle(0% at calc(100% - 36px) 36px)',
          transition:
            'clip-path 450ms cubic-bezier(0.16, 1, 0.3, 1), transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="fixed inset-0 sm:inset-auto sm:top-4 sm:right-4 sm:bottom-4 w-full sm:w-[440px] h-full sm:h-[calc(100vh-32px)] bg-[#121212] text-[#F6F4EE] rounded-none sm:rounded-[40px] p-6 sm:p-8 flex flex-col justify-between shadow-2xl border-0 sm:border-2 border-white/15 z-50 overflow-hidden"
      >
        {/* Subtle background ambient glows */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2454FF]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D4FF32]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Sliding Content Container */}
        <div className="relative w-full h-full flex flex-col overflow-hidden">
          {/* ========================================================== */}
          {/* 1. PRIMARY MENU VIEW                                      */}
          {/* ========================================================== */}
          <div
            className={`absolute inset-0 flex flex-col justify-between transition-all duration-350 ease-out ${
              subView === 'main'
                ? 'translate-x-0 opacity-100 pointer-events-auto'
                : '-translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            {/* Top Bar: Close Button (No separator, no Navegación title) */}
            <div className="relative z-10 flex items-center justify-end pb-2 shrink-0">
              <button
                onClick={onClose}
                aria-label={activeMode === 'latam' ? 'Cerrar menú' : 'Close menu'}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Primary Navigation Links + Accessibility Preferences Item */}
            <nav className="relative z-10 my-auto py-4 flex flex-col gap-3 sm:gap-4 overflow-y-auto">
              {[
                { label: t.nav.work, href: '#work' },
                { label: t.nav.services, href: '#services' },
                { label: t.nav.about, href: '#about' },
                { label: t.nav.contact, href: '#contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between text-3xl sm:text-4xl font-black tracking-tight text-white/90 hover:text-white transition-colors py-1"
                >
                  <span className="group-hover:translate-x-2.5 transition-transform duration-200">
                    {item.label}
                  </span>
                </a>
              ))}

              {/* Dedicated Accessibility Preferences Item inside the menu */}
              <button
                type="button"
                onClick={() => setSubView('accessibility')}
                className="group flex items-center justify-between py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-left cursor-pointer mt-3"
              >
                <span className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 text-[#D4FF32] flex items-center justify-center group-hover:bg-[#D4FF32] group-hover:text-black transition-colors shrink-0">
                    <Sliders className="w-4 h-4" />
                  </span>
                  <span className="font-bold text-sm sm:text-base">
                    {activeMode === 'latam' ? 'Preferencias de accesibilidad' : 'Accessibility preferences'}
                  </span>
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            </nav>

            {/* Bottom Controls: Language Switcher (arriba de View Full CV) + CV + Social Links (No separator line) */}
            <div className="relative z-10 space-y-3 pt-2 shrink-0">
              {/* Language Switcher inside the menu, directly above View Full CV */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/45 block px-1">
                  {activeMode === 'latam' ? 'Idioma / sistema' : 'Language / mode'}
                </span>
                <div
                  role="group"
                  aria-label="Language selection"
                  className="grid grid-cols-2 p-1 rounded-2xl bg-white/10 border border-white/15 gap-1"
                >
                  {/* Internacional */}
                  <button
                    type="button"
                    onClick={() => onToggleMode('international')}
                    aria-pressed={activeMode === 'international'}
                    className={`py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      activeMode === 'international'
                        ? 'bg-white text-black shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <BritishFlagIcon className="w-4 h-2.5 shrink-0" />
                    <span>Internacional</span>
                  </button>

                  {/* Latam */}
                  <button
                    type="button"
                    onClick={() => onToggleMode('latam')}
                    aria-pressed={activeMode === 'latam'}
                    className={`py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      activeMode === 'latam'
                        ? 'bg-[#0D5C46] text-[#F6D332] shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <LatamIcon className="w-4 h-4 shrink-0" />
                    <span>Latam</span>
                  </button>
                </div>
              </div>

              {/* View Full CV Button */}
              <div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenCV();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center gap-2 transition-colors cursor-pointer text-xs font-bold"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{activeMode === 'latam' ? 'Ver CV completo' : 'View full CV'}</span>
                </button>
              </div>

              {/* Direct Social Links: Email, LinkedIn, Dribbble, Behance */}
              <div className="grid grid-cols-2 gap-2 text-xs text-white/70 pt-1 font-medium">
                <a
                  href="mailto:say-hi@mtabarez.com"
                  className="hover:text-white flex items-center gap-1.5 transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">say-hi@mtabarez.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/mtabareza"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors justify-end"
                >
                  <Linkedin className="w-3.5 h-3.5 shrink-0" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60" />
                </a>
                <a
                  href="https://dribbble.com/mtabarez"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span className="font-bold text-[11px]">Db</span>
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60" />
                </a>
                <a
                  href="https://behance.net/mtabarez"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors justify-end"
                >
                  <span className="font-bold text-[11px]">Bē</span>
                  <span>Behance</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================== */}
          {/* 2. ACCESSIBILITY PREFERENCES VIEW (Slides from the side!)  */}
          {/* ========================================================== */}
          <div
            className={`absolute inset-0 flex flex-col justify-between transition-all duration-350 ease-out ${
              subView === 'accessibility'
                ? 'translate-x-0 opacity-100 pointer-events-auto'
                : 'translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            {/* Top Bar: Back to Menu & Close (No separator) */}
            <div className="relative z-10 flex items-center justify-between pb-2 shrink-0">
              <button
                type="button"
                onClick={() => setSubView('main')}
                className="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white py-1.5 px-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{activeMode === 'latam' ? 'Volver al menú' : 'Back to menu'}</span>
              </button>
              <span className="text-xs font-bold tracking-wider uppercase text-white/60">
                {activeMode === 'latam' ? 'Accesibilidad' : 'Accessibility'}
              </span>
              <button
                onClick={onClose}
                aria-label={activeMode === 'latam' ? 'Cerrar menú' : 'Close menu'}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Accessibility Controls */}
            {a11ySettings && onUpdateSettings ? (
              <div className="relative z-10 flex-1 overflow-y-auto py-4 space-y-5 pr-1">
                {/* 1. Text Size */}
                <fieldset>
                  <div className="flex items-center justify-between mb-2">
                    <legend className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      {activeMode === 'latam' ? 'Tamaño de texto' : 'Text sizing'}
                    </legend>
                    <div className="relative">
                      <button
                        type="button"
                        onMouseEnter={() => setActiveTooltip('textSize')}
                        onMouseLeave={() => setActiveTooltip(null)}
                        aria-label="Text sizing info"
                        className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                      >
                        <Info className="w-2.5 h-2.5" />
                      </button>
                      {activeTooltip === 'textSize' && (
                        <div className="absolute right-0 bottom-full mb-2 w-56 p-3 rounded-lg bg-black border border-white/20 text-white text-xs leading-relaxed shadow-2xl z-50">
                          {activeMode === 'latam'
                            ? 'Escala la tipografía proporcionalmente en todo el sitio para mayor legibilidad.'
                            : 'Scales typography proportionally across the entire site for enhanced legibility.'}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { id: 'normal', label: '100%' },
                      { id: 'large', label: '112%' },
                      { id: 'xlarge', label: '125%' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          onUpdateSettings((s) => ({
                            ...s,
                            textSize: item.id as AccessibilitySettings['textSize'],
                          }))
                        }
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                          a11ySettings.textSize === item.id
                            ? 'bg-white text-black border-white shadow-xs'
                            : 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {a11ySettings.textSize === item.id && <Check className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* 2. Contrast Mode */}
                <fieldset>
                  <div className="flex items-center justify-between mb-2">
                    <legend className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      {activeMode === 'latam' ? 'Modo de contraste' : 'Contrast mode'}
                    </legend>
                    <div className="relative">
                      <button
                        type="button"
                        onMouseEnter={() => setActiveTooltip('contrast')}
                        onMouseLeave={() => setActiveTooltip(null)}
                        aria-label="Contrast mode info"
                        className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                      >
                        <Info className="w-2.5 h-2.5" />
                      </button>
                      {activeTooltip === 'contrast' && (
                        <div className="absolute right-0 bottom-full mb-2 w-56 p-3 rounded-lg bg-black border border-white/20 text-white text-xs leading-relaxed shadow-2xl z-50">
                          {activeMode === 'latam'
                            ? 'Refuerza los bordes y textos para máxima nitidez bajo luz solar directa o baja visión.'
                            : 'Sharpens borders and darkens secondary copy for maximum clarity in sunlight or low vision.'}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'normal', label: activeMode === 'latam' ? 'Normal' : 'Normal' },
                      { id: 'high', label: activeMode === 'latam' ? 'Alto contraste' : 'High contrast' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          onUpdateSettings((s) => ({
                            ...s,
                            contrast: item.id as AccessibilitySettings['contrast'],
                          }))
                        }
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          a11ySettings.contrast === item.id
                            ? 'bg-white text-black border-white shadow-xs'
                            : 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {a11ySettings.contrast === item.id && <Check className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* 3. Color Vision Adaptation */}
                <fieldset>
                  <div className="flex items-center justify-between mb-2">
                    <legend className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      {activeMode === 'latam' ? 'Visión del color' : 'Color vision'}
                    </legend>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'default', label: 'Default' },
                      { id: 'protanopia', label: 'Protanopia' },
                      { id: 'deuteranopia', label: 'Deuteranopia' },
                      { id: 'tritanopia', label: 'Tritanopia' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          onUpdateSettings((s) => ({
                            ...s,
                            colorVision: item.id as AccessibilitySettings['colorVision'],
                          }))
                        }
                        className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1 cursor-pointer ${
                          a11ySettings.colorVision === item.id
                            ? 'bg-white text-black border-white shadow-xs'
                            : 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {a11ySettings.colorVision === item.id && <Check className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* 4. Motion Preference */}
                <fieldset>
                  <div className="flex items-center justify-between mb-2">
                    <legend className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      {activeMode === 'latam' ? 'Movimiento' : 'Motion'}
                    </legend>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'full', label: activeMode === 'latam' ? 'Animaciones' : 'Full motion' },
                      { id: 'reduced', label: activeMode === 'latam' ? 'Reducido' : 'Reduced motion' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          onUpdateSettings((s) => ({
                            ...s,
                            motion: item.id as AccessibilitySettings['motion'],
                          }))
                        }
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          a11ySettings.motion === item.id
                            ? 'bg-white text-black border-white shadow-xs'
                            : 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {a11ySettings.motion === item.id && <Check className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                {/* 5. Theme */}
                <fieldset>
                  <div className="flex items-center justify-between mb-2">
                    <legend className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      {activeMode === 'latam' ? 'Tema visual' : 'Display theme'}
                    </legend>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'light', label: activeMode === 'latam' ? 'Claro' : 'Light' },
                      { id: 'dark', label: activeMode === 'latam' ? 'Oscuro' : 'Dark' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          onUpdateSettings((s) => ({
                            ...s,
                            theme: item.id as AccessibilitySettings['theme'],
                          }))
                        }
                        className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          a11ySettings.theme === item.id
                            ? 'bg-white text-black border-white shadow-xs'
                            : 'border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {a11ySettings.theme === item.id && <Check className="w-3 h-3" />}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>
            ) : null}

            {/* Bottom Accessibility Actions (No separator line) */}
            <div className="relative z-10 pt-2 flex items-center justify-between gap-2 shrink-0">
              {onResetA11y && (
                <button
                  type="button"
                  onClick={onResetA11y}
                  className="py-2.5 px-3.5 rounded-xl border border-white/20 text-xs font-bold text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{activeMode === 'latam' ? 'Restablecer' : 'Reset defaults'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setSubView('main')}
                className="py-2.5 px-5 rounded-xl bg-white text-black text-xs font-bold hover:bg-white/90 transition-opacity cursor-pointer ml-auto"
              >
                {activeMode === 'latam' ? 'Listo' : 'Done'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

