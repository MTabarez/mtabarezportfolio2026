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
  const [isJumping, setIsJumping] = useState(false);
  const [jumpCount, setJumpCount] = useState(0);
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
    'Super jump! ✦',
  ];

  // Trigger jump action and single-run text streaming
  const triggerJump = () => {
    if (isJumping || isStretched) return;
    setIsJumping(true);
    setJumpCount((c) => c + 1);
    setIsStretched(true);
    setSpeechPhrase(phrases[jumpCount % phrases.length]);

    // Character jump animation duration
    setTimeout(() => {
      setIsJumping(false);
    }, 600);

    // Safety fallback to close mouth if onAnimationEnd doesn't fire
    if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    streamTimeoutRef.current = window.setTimeout(() => {
      setIsStretched(false);
      setSpeechPhrase(null);
    }, 4000);
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
        triggerJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (streamTimeoutRef.current) clearTimeout(streamTimeoutRef.current);
    };
  }, [isJumping, isStretched, jumpCount]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLatam = mode === 'latam';

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
      {/* 1. GIGANTIC CIRCULATING MARQUEE WITH MARIANNE'S NAME */}
      <div className="w-full overflow-hidden py-4 border-b border-white/10 select-none opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex whitespace-nowrap animate-[marquee_24s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-transparent uppercase stroke-white stroke-2 mx-8"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.45)',
              }}
            >
              MARIANNE TABAREZ &nbsp;✦&nbsp; CHILE / REMOTE &nbsp;✦&nbsp; UX/UI ARCHITECTURE &nbsp;✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-12 sm:mt-16">
        {/* Playful Top Callout with Interactive Jumping Character */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/15">
          <div className="space-y-4 flex-1 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4FF32] block">
              {t.footer.kicker}
            </span>

            {/* Title with "Let’s talk" */}
            <div className="min-h-[90px] sm:min-h-[120px] flex items-center">
              {!isStretched && (
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white transition-all">
                  {t.footer.letsTalk}
                </h2>
              )}
            </div>

            <p className="text-base sm:text-lg text-white/80 max-w-lg mt-2">
              {isLatam
                ? 'Disponible para roles de diseño de producto, sistemas de diseño enterprise y colaboraciones globales.'
                : 'Available for senior product design roles, enterprise design systems, and select global engagements.'}
            </p>
          </div>

          {/* STREAMING TEXT:
              Single-run animation (runs once, then stops; no infinite loop).
              Runs across the container with z-index (z-10) UNDERNEATH the character (macaco z-30),
              shooting from the character's open mouth towards the left! */}
          {isStretched && (
            <div className="absolute inset-y-0 right-0 left-0 flex items-center pointer-events-none z-10 overflow-hidden">
              <div
                onAnimationEnd={() => {
                  setIsStretched(false);
                  setSpeechPhrase(null);
                }}
                className="flex whitespace-nowrap animate-[streamTextOnce_7s_linear_forwards] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-[#D4FF32] pr-12"
              >
                <span>
                  {isLatam
                    ? 'Hableeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeemos.'
                    : 'Let’s taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalk.'}
                </span>
              </div>
            </div>
          )}

          {/* Interactive Character (MACACO):
              Higher z-index (z-30), mouth stays open as long as isStretched is true! */}
          <div className="flex flex-col items-center sm:items-end relative shrink-0 z-30">
            {/* Dynamic Speech Bubble */}
            {speechPhrase && (
              <div className="absolute -top-12 sm:-top-14 right-4 sm:right-10 px-3.5 py-1.5 rounded-2xl bg-[#D4FF32] text-[#121212] font-black text-xs shadow-xl animate-in zoom-in-95 fade-in duration-200 whitespace-nowrap z-40">
                {speechPhrase}
                <div className="absolute top-full right-6 border-4 border-transparent border-t-[#D4FF32]" />
              </div>
            )}

            <button
              type="button"
              onClick={triggerJump}
              aria-label="Haz clic o presiona espacio para saltar"
              className="group relative cursor-pointer focus:outline-none p-3 select-none"
            >
              {/* Expressive Character with animated face */}
              <div
                style={{
                  transform: isJumping
                    ? 'translateY(-56px) rotate(10deg) scale(1.15)'
                    : 'translateY(0) scale(1)',
                  transition: 'transform 260ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
                className="w-22 h-22 sm:w-24 sm:h-24 rounded-[28px] bg-white text-black flex flex-col items-center justify-center shadow-2xl relative"
              >
                {/* Antennas / Ears */}
                <div className="absolute -top-2 flex gap-6">
                  <span className="w-2.5 h-3 rounded-full bg-[#D4FF32] border border-black/10" />
                  <span className="w-2.5 h-3 rounded-full bg-[#D4FF32] border border-black/10" />
                </div>

                {/* Animated Eyes: wide open while mouth is open emitting text */}
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-black transition-all ${
                      isStretched ? 'scale-125' : isJumping ? 'scale-y-25' : 'animate-pulse'
                    }`}
                  />
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-black transition-all ${
                      isStretched ? 'scale-125' : isJumping ? 'scale-y-25' : 'animate-pulse'
                    }`}
                  />
                </div>

                {/* Mouth: KEEPS OPEN UNTIL THE TEXT FINISHES PASSING (while isStretched is true!) */}
                <div
                  className={`transition-all duration-200 ${
                    isStretched
                      ? 'w-7 h-7 rounded-full bg-rose-500 border-2 border-black animate-pulse shadow-inner'
                      : isJumping
                      ? 'w-5 h-3.5 rounded-b-full bg-rose-500'
                      : 'w-4 h-1.5 rounded-full bg-black'
                  }`}
                />

                {/* Sparkle badge when jumping */}
                {(isJumping || isStretched) && (
                  <span className="absolute -top-4 -right-3 text-[#D4FF32] text-sm font-black animate-spin">
                    ✦
                  </span>
                )}
              </div>

              {/* Character dynamic shadow underneath */}
              <div
                style={{
                  transform: isJumping ? 'scale(0.35)' : 'scale(1)',
                  opacity: isJumping ? 0.2 : 0.6,
                  transition: 'all 260ms ease',
                }}
                className="w-16 h-2.5 rounded-full bg-black/60 mx-auto mt-2 blur-xs"
              />
            </button>

            <span className="text-[11px] font-bold text-white/60 tracking-wider uppercase mt-1">
              {t.footer.spacePrompt}
            </span>
          </div>
        </div>

        {/* Striking Interactive Contact Form (Takes full available width) */}
        <ContactForm mode={mode} />

        {/* Contact Links & Information Grid */}
        <div className="py-14 sm:py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-white/15">
          {/* Col 1: Direct Email & Phone */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
              {t.footer.directContact}
            </span>
            <a
              href="mailto:say-hi@mtabarez.com"
              className="text-lg sm:text-xl font-bold text-white hover:text-[#D4FF32] transition-colors flex items-center gap-1.5"
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

          {/* Col 2: Social & Profiles */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
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
                  href="https://behance.net/mtabarez"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/90 hover:text-white flex items-center gap-2 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 font-black text-[10px] flex items-center justify-center shrink-0">Bē</span>
                  <span>Behance / mtabarez</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Location & Bases */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
              {t.footer.locationHeading}
            </span>
            <div className="text-sm font-semibold text-white/90">
              {t.footer.locationSub}
            </div>
            <div className="text-xs text-white/70 mt-1">
              {t.footer.availabilitySub}
            </div>
          </div>

          {/* Col 4: CV */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
              {t.footer.docsHeading}
            </span>
            <div className="space-y-2">
              <button
                onClick={onOpenCV}
                className="text-sm font-bold text-[#D4FF32] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.footer.viewCV}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/60">
          <div>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span>{t.footer.crafted}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block shrink-0" aria-hidden="true" />
              <span>· Marianne Tabarez</span>
            </span>

            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 font-bold cursor-pointer"
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
