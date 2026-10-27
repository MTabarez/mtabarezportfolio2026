import React, { useState, useEffect, useRef } from 'react';
import { SiteMode } from '../types';
import { ArrowUpRight, Mail, Linkedin, FileText, ArrowUp, Phone, Heart } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { getTranslation } from '../data/translations';

interface FooterProps {
  mode: SiteMode;
  onOpenCV: () => void;
  onReopenIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ mode, onOpenCV }) => {
  const [isHappy, setIsHappy] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [isStretched, setIsStretched] = useState(false);
  const [speechPhrase, setSpeechPhrase] = useState<string | null>(null);
  const footerRef = useRef<HTMLElement>(null);
  const streamTimeoutRef = useRef<number | null>(null);
  const t = getTranslation(mode);

  const phrases = [
    '¡Wooo! 🚀',
    '¡Hagamos magia! ✨',
    'Ready to design! 🎨',
    '¡Hablemos de UX! 💬',
    '¡Mucho gusto! ✦',
  ];

  // Trigger happy status change and speech without jumping
  const triggerHappy = () => {
    setIsHappy(true);
    setInteractionCount((c) => c + 1);
    setIsStretched(true);
    setSpeechPhrase(phrases[interactionCount % phrases.length]);

    if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    streamTimeoutRef.current = window.setTimeout(() => {
      setIsHappy(false);
      setIsStretched(false);
      setSpeechPhrase(null);
    }, 3500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // If user presses Spacebar and isn't typing in an input/textarea
      if (
        e.code === 'Space' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        triggerHappy();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    };
  }, [isHappy, isStretched, interactionCount]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLatam = mode === 'latam';
  const showHappyAvatar = isHappy || isStretched || Boolean(speechPhrase);

  return (
    <footer
      ref={footerRef}
      id="contact"
      style={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-text)',
      }}
      className="pt-24 sm:pt-32 pb-16 sm:pb-20 rounded-t-[40px] sm:rounded-t-[56px] transition-colors duration-300 relative overflow-hidden"
    >
      {/* 1. GIGANTIC CIRCULATING MARQUEE: MARIANNE TABAREZ ARISTEGUI in fast, eternal seamless loop */}
      <div className="w-full overflow-hidden py-4 border-b border-white/10 select-none opacity-85 hover:opacity-100 transition-opacity">
        <div className="flex w-max whitespace-nowrap animate-[marquee_7s_linear_infinite] will-change-transform">
          {[...Array(6)].map((_, i) => (
            <span
              key={`mq-${i}`}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white/20 uppercase mx-8 select-none transition-colors hover:text-white/35"
            >
              MARIANNE TABAREZ ARISTEGUI &nbsp;✦&nbsp; CHILE / REMOTE &nbsp;✦&nbsp; UX/UI ARCHITECTURE &nbsp;✦&nbsp;
            </span>
          ))}
          {[...Array(6)].map((_, i) => (
            <span
              key={`mq-dup-${i}`}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white/20 uppercase mx-8 select-none transition-colors hover:text-white/35"
            >
              MARIANNE TABAREZ ARISTEGUI &nbsp;✦&nbsp; CHILE / REMOTE &nbsp;✦&nbsp; UX/UI ARCHITECTURE &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
        {/* Playful Top Callout with Interactive Happy Avatar */}
        <div className="pb-12 sm:pb-16 border-b border-white/15">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-[#8ee000]">
              {t.footer.kicker}
            </span>
            <span className="text-[11px] font-semibold text-white/60 tracking-wider">
              {t.footer.spacePrompt}
            </span>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Title with "Let’s talk" / "Hableeeeeeeeeeeeeeeemos." when clicked */}
            <div className="flex items-end min-h-[56px] sm:min-h-[80px] md:min-h-[96px]">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white transition-colors">
                {isStretched ? (
                  <span className="text-[#8ee000] inline-block tracking-tight">
                    {isLatam
                      ? 'Hableeeeeeeeeeeeeeeemos.'
                      : 'Let’s taaaaaaaaaaaalk.'}
                  </span>
                ) : (
                  <span>{t.footer.letsTalk}</span>
                )}
              </h2>
            </div>

            {/* Interactive Character: 100% aligned to the base of the image (NO helper text below it) */}
            <div className="relative shrink-0 z-30 self-end">
              {/* Dynamic Speech Bubble */}
              {speechPhrase && (
                <div className="absolute -top-12 sm:-top-14 right-2 sm:right-4 px-3.5 py-1.5 rounded-2xl bg-[#5c9c0b] text-white font-bold text-xs shadow-xl animate-in zoom-in-95 fade-in duration-200 whitespace-nowrap z-40">
                  {speechPhrase}
                  <div className="absolute top-full right-6 border-4 border-transparent border-t-[#5c9c0b]" />
                </div>
              )}

              <button
                type="button"
                onClick={triggerHappy}
                aria-label="Haz clic para saludar a Marianne"
                className="relative cursor-pointer focus:outline-none p-0 select-none block"
              >
                {/* Fixed size box: both images are ALWAYS absolute inset-0 so image NEVER shifts position */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                  {/* Normal State */}
                  <img
                    src="/assets/aistudio/marianne_normal_transparent.png"
                    alt="Marianne Tabarez Avatar Normal"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                      showHappyAvatar ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                    draggable={false}
                  />

                  {/* Happy State */}
                  <img
                    src="/assets/aistudio/marianne_happy_transparent.png"
                    alt="Marianne Tabarez Avatar Feliz"
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-200 ${
                      showHappyAvatar ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    draggable={false}
                  />

                  {/* Joyful Sparkle badge when happy */}
                  {showHappyAvatar && (
                    <span className="absolute -top-1 -right-1 text-[#8ee000] text-lg font-black animate-spin">
                      ✦
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/80 max-w-lg mt-4">
            {isLatam
              ? 'Disponible para roles de diseño de producto, sistemas de diseño enterprise y colaboraciones globales.'
              : 'Available for product design roles, enterprise design systems, and select global engagements.'}
          </p>
        </div>

        {/* Striking Interactive Contact Form (Takes full available width) */}
        <ContactForm mode={mode} />

        {/* Contact Links & Information Grid */}
        <div className="py-14 sm:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/15">
          {/* Col 1: Direct Email & Phone */}
          <div>
            <span className="text-xs font-semibold text-white/60 block mb-2">
              {t.footer.directContact}
            </span>
            <a
              href="mailto:say-hi@mtabarez.com"
              className="text-lg sm:text-xl font-bold text-white hover:text-[#4ade26] transition-colors flex items-center gap-1.5"
            >
              <span>say-hi@mtabarez.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+56981878086"
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors flex items-center gap-1.5 mt-2"
            >
              <Phone className="w-3.5 h-3.5 opacity-60" />
              <span>+56981878086</span>
            </a>
          </div>

          {/* Col 2: Social & Profiles ("También estoy en") */}
          <div>
            <span className="text-xs font-semibold text-white/60 block mb-2">
              {t.footer.profiles}
            </span>
            <div className="space-y-2.5 text-sm font-semibold">
              <div>
                <a
                  href="https://linkedin.com/in/mtabareza"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>LinkedIn / mtabareza</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
              <div>
                <a
                  href="https://dribbble.com/mtabarez"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-pink-500/20 text-pink-400 font-black text-[10px] flex items-center justify-center shrink-0">Db</span>
                  <span>Dribbble / mtabarez</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
              <div>
                <a
                  href="https://behance.net/tabarez"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 font-black text-[10px] flex items-center justify-center shrink-0">Bē</span>
                  <span>Behance / tabarez</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Location */}
          <div>
            <span className="text-xs font-semibold text-white/60 block mb-2">
              {t.footer.locationHeading}
            </span>
            <div className="text-sm font-semibold text-white/90">
              {t.footer.locationSub}
            </div>
            <div className="text-xs text-white/70 mt-1">
              {t.footer.availabilitySub}
            </div>
          </div>

          {/* Col 4: Professional Profile & CV (High-Contrast Link) */}
          <div>
            <span className="text-xs font-semibold text-white/60 block mb-2">
              {t.footer.docsHeading}
            </span>
            <div className="space-y-2">
              <button
                onClick={onOpenCV}
                className="text-sm font-bold text-[#8ee000] hover:text-[#aaff33] underline underline-offset-4 flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.footer.viewCV}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar: 100% responsive on mobile and desktop */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/60 w-full text-center sm:text-left">
          <div className="w-full sm:w-auto">
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-end gap-3 sm:gap-6 w-full sm:w-auto">
            <span className="flex items-center justify-center gap-1.5 w-full sm:w-auto">
              <span>{t.footer.crafted}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block shrink-0" aria-hidden="true" />
              <span>· Marianne Tabarez</span>
            </span>

            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center justify-center gap-1 font-bold cursor-pointer transition-colors w-full sm:w-auto"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
