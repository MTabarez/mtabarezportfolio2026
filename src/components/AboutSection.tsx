import React, { useState } from 'react';
import { SiteMode } from '../types';
import { MagneticPillButton } from './MagneticPillButton';
import { ScrollRevealText } from './ScrollRevealText';
import { getTranslation } from '../data/translations';

interface AboutSectionProps {
  mode: SiteMode;
  onOpenCV: () => void;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  mode,
  onOpenCV,
  onContactClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const t = getTranslation(mode);

  // Single accessible warm yellowish accent green strictly matching buttons and site branding
  const LINE_COLOR = '#9faf23';

  return (
    <section id="about" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Asymmetrical 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Editorial Portrait with Single-Color Linear SVG Hover Reveal */}
          <div className="lg:col-span-5 relative">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsHovered((prev) => !prev)}
              className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden border border-[var(--card-border)] bg-[var(--card-surface)] shadow-2xl group cursor-pointer select-none"
            >
              {/* Photo Container: aspect-[4/5] framed so Marianne's face, smile and lap are clearly framed */}
              <div className="aspect-[4/5] relative overflow-hidden bg-black/10">
                <img
                  src="/assets/aistudio/Marianne_Tabarez_-_Portfolio_29530038.jpg"
                  alt="Marianne Tabarez, Web & UX/UI Designer"
                  className="w-full h-full object-cover object-[center_32%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* ========================================================= */}
                {/* LINEAR SVG CRAFT: ONLY LAPTOP ON LAP (REVEALED ON HOVER) */}
                {/* - No dark tint on photo (photo stays naturally lit)      */}
                {/* - All background icons removed as requested              */}
                {/* - Laptop placed higher up directly over her lap/falda     */}
                {/* ========================================================= */}
                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 350ms ease',
                  }}
                >
                  <defs>
                    <filter id="monoline-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={LINE_COLOR} floodOpacity="0.9" />
                    </filter>
                  </defs>

                  {/* LAPTOP SOBRE LA FALDA (VISTA DE LA TAPA, MÁS ARRIBA) */}
                  <g
                    filter="url(#monoline-glow)"
                    style={{
                      transform: isHovered ? 'translateY(0px)' : 'translateY(6px)',
                      transition: 'transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1)',
                    }}
                  >
                    {/* Laptop Screen Lid Trapezoid - angled back view, placed high on her lap */}
                    <path
                      d="M 166 250 L 236 250 L 244 294 L 158 294 Z"
                      stroke={LINE_COLOR}
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                      strokeDasharray="260"
                      style={{
                        strokeDashoffset: isHovered ? 0 : 260,
                        transition: 'stroke-dashoffset 650ms cubic-bezier(0.2, 0.8, 0.2, 1) 100ms',
                      }}
                    />

                    {/* Crescent Moon Logo in the center of the lid */}
                    <path
                      d="M 204 266 A 5.5 5.5 0 1 1 199 278 A 6.5 6.5 0 0 0 204 266 Z"
                      stroke={LINE_COLOR}
                      strokeWidth="2"
                      fill={LINE_COLOR}
                      fillOpacity="0.35"
                      strokeDasharray="40"
                      style={{
                        strokeDashoffset: isHovered ? 0 : 40,
                        transition: 'stroke-dashoffset 400ms ease 200ms',
                      }}
                    />

                    {/* Bottom laptop base ledge resting on her lap */}
                    <line
                      x1="150"
                      y1="296"
                      x2="248"
                      y2="296"
                      stroke={LINE_COLOR}
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeDasharray="100"
                      style={{
                        strokeDashoffset: isHovered ? 0 : 100,
                        transition: 'stroke-dashoffset 450ms ease 150ms',
                      }}
                    />
                  </g>
                </svg>
              </div>

              {/* Minimal caption banner */}
              <div className="p-6 bg-[var(--bg-main)] border-t border-[var(--card-border)] flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-base text-[var(--text-primary)]">
                    Marianne Tabarez
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    {t.about.role}
                  </p>
                </div>
                <div className="text-right text-xs font-bold text-[var(--text-secondary)]">
                  <span>{t.about.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Statement with dynamic scroll text scrubber */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollRevealText
              as="h2"
              text={t.about.title}
              className="heading-1 leading-[0.98] font-extrabold tracking-tight"
            />

            <ScrollRevealText
              as="p"
              text={t.about.bio}
              className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
            />

            {/* Actions: View CV Modal + Contact (Consistent sizes and styles) */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <MagneticPillButton
                onClick={onOpenCV}
                variant={mode === 'latam' ? 'latam' : 'primary'}
                size="md"
              >
                {t.about.ctaCV}
              </MagneticPillButton>

              <MagneticPillButton
                onClick={onContactClick}
                variant="secondary"
                size="md"
              >
                {t.about.ctaCollab}
              </MagneticPillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


