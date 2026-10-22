import React, { useState } from 'react';
import { SiteMode } from '../types';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface TestimonialsProps {
  mode: SiteMode;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ mode }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const t = getTranslation(mode);

  // LATAM Mode: Distinct rich colors already from the start!
  const latamColors = [
    { bg: '#0D5C46', text: '#FFFFFF', sub: 'rgba(255, 255, 255, 0.85)', quote: '#F6D332' },
    { bg: '#E85338', text: '#FFFFFF', sub: 'rgba(255, 255, 255, 0.85)', quote: '#F9F4EB' },
    { bg: '#1E4BB8', text: '#FFFFFF', sub: 'rgba(255, 255, 255, 0.85)', quote: '#D4FF32' },
    { bg: '#EE9E18', text: '#121212', sub: '#2E2D2A', quote: '#121212' },
  ];

  // INTERNATIONAL Mode: High-contrast architectural surfaces
  const intlColors = [
    { bg: '#121212', text: '#FFFFFF', sub: '#A09F9B', quote: '#D4FF32' },
    { bg: 'var(--card-surface)', text: 'var(--text-primary)', sub: 'var(--text-secondary)', quote: 'var(--accent-main)' },
    { bg: '#EDEAE3', text: '#121212', sub: '#585754', quote: '#2454FF' },
    { bg: '#1C1C1A', text: '#FFFFFF', sub: '#999894', quote: '#D4FF32' },
  ];

  // Sprinkle bomb explosion particles: varying sizes, vibrant colors, trajectories
  const sprinkleParticles = [
    { dx: '-60px', dy: '-90px', s: 1.4, rot: '180deg', color: '#D4FF32', size: '20px', symbol: '✦', delay: '0ms' },
    { dx: '70px', dy: '-110px', s: 1.8, rot: '-220deg', color: '#FF5252', size: '24px', symbol: '★', delay: '40ms' },
    { dx: '-110px', dy: '-60px', s: 1.2, rot: '320deg', color: '#00E5FF', size: '18px', symbol: '✨', delay: '80ms' },
    { dx: '120px', dy: '-50px', s: 1.6, rot: '-180deg', color: '#F6D332', size: '22px', symbol: '✦', delay: '20ms' },
    { dx: '-30px', dy: '-120px', s: 1.3, rot: '240deg', color: '#E85338', size: '16px', symbol: '★', delay: '60ms' },
    { dx: '40px', dy: '-130px', s: 1.5, rot: '-300deg', color: '#2454FF', size: '20px', symbol: '✦', delay: '100ms' },
    { dx: '-90px', dy: '-100px', s: 1.1, rot: '190deg', color: '#FFFFFF', size: '14px', symbol: '✨', delay: '30ms' },
    { dx: '95px', dy: '-85px', s: 1.7, rot: '-160deg', color: '#D4FF32', size: '24px', symbol: '★', delay: '70ms' },
    { dx: '-130px', dy: '-30px', s: 1.2, rot: '280deg', color: '#FF6B8B', size: '16px', symbol: '✦', delay: '90ms' },
    { dx: '130px', dy: '-25px', s: 1.4, rot: '-260deg', color: '#00E5FF', size: '18px', symbol: '✨', delay: '50ms' },
    { dx: '0px', dy: '-140px', s: 1.9, rot: '360deg', color: '#F6D332', size: '26px', symbol: '★', delay: '110ms' },
    { dx: '-50px', dy: '-40px', s: 1.0, rot: '-140deg', color: '#D4FF32', size: '14px', symbol: '✦', delay: '10ms' },
    { dx: '55px', dy: '-45px', s: 1.2, rot: '200deg', color: '#FF5252', size: '16px', symbol: '✨', delay: '85ms' },
    { dx: '-75px', dy: '-135px', s: 1.6, rot: '-320deg', color: '#2454FF', size: '22px', symbol: '✦', delay: '65ms' },
    { dx: '80px', dy: '-125px', s: 1.3, rot: '270deg', color: '#FFFFFF', size: '18px', symbol: '★', delay: '45ms' },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[var(--bg-main)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="heading-1 text-[var(--text-primary)]">
              {t.reviews.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md">
            {t.reviews.sub}
          </p>
        </div>

        {/* ========================================================= */}
        {/* MOBILE VIEW: Horizontal sliding carousel exclusively      */}
        {/* ========================================================= */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 pb-4 no-scrollbar">
          {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => {
            const themeColor = mode === 'latam'
              ? latamColors[idx % latamColors.length]
              : intlColors[idx % intlColors.length];

            return (
              <div
                key={testimonial.id}
                style={{
                  backgroundColor: themeColor.bg,
                  color: themeColor.text,
                }}
                className="shrink-0 w-[82vw] max-w-[320px] p-7 rounded-[32px] border border-[var(--card-border)] flex flex-col justify-between min-h-[380px] snap-center shadow-lg select-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote style={{ color: themeColor.quote }} className="w-8 h-8 opacity-80" />
                  </div>
                  <p className="text-base leading-relaxed font-semibold">
                    "{mode === 'latam' && testimonial.quoteEs ? testimonial.quoteEs : testimonial.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-black/10 dark:border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/15 flex items-center justify-center font-black text-sm shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-sm">{testimonial.author}</div>
                    <div style={{ color: themeColor.sub }} className="text-xs mt-0.5 font-medium">
                      {testimonial.role} · {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-center gap-1.5 pt-2 pb-2">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)]/60">
            {mode === 'latam' ? '← Desliza para ver más →' : '← Swipe to view more →'}
          </span>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP VIEW: EXACT 100% ORIGINAL SUPERPUESTAS GEOMETRY   */}
        {/* ========================================================= */}
        <div className="hidden md:flex relative flex-row items-center justify-center pt-8 pb-10">
          {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => {
            const isHovered = activeCardIndex === idx;
            const themeColor = mode === 'latam'
              ? latamColors[idx % latamColors.length]
              : intlColors[idx % intlColors.length];

            // Superpuestas overlapping geometry:
            // Resting rotation: -3deg, 1.5deg, -2deg
            const baseRotations = [-3, 2, -2.5];
            const rotation = isHovered ? 0 : baseRotations[idx];

            return (
              <div
                key={testimonial.id}
                onMouseEnter={() => setActiveCardIndex(idx)}
                onMouseLeave={() => setActiveCardIndex(null)}
                style={{
                  backgroundColor: themeColor.bg,
                  color: themeColor.text,
                  transform: `translateY(${isHovered ? '-18px' : '0px'}) rotate(${rotation}deg) scale(${isHovered ? 1.05 : 0.98})`,
                  zIndex: isHovered ? 30 : 10 + idx,
                  transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 300ms ease, opacity 300ms ease',
                  willChange: 'transform',
                }}
                className={`relative w-[380px] lg:w-[420px] p-8 sm:p-10 rounded-[36px] border border-[var(--card-border)] cursor-pointer flex flex-col justify-between min-h-[400px] sm:min-h-[440px] select-none ${
                  idx !== 0 ? '-ml-12 lg:-ml-16' : ''
                } ${
                  isHovered
                    ? 'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-2 ring-white/30 opacity-100'
                    : 'shadow-xl opacity-90 hover:opacity-100'
                }`}
              >
                {/* Sprinkle Bomb Explosion (estrellitas saltando y volando como bomba de sprinkles) */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none overflow-visible z-50">
                    {sprinkleParticles.map((p, pIdx) => (
                      <span
                        key={pIdx}
                        style={{
                          top: '15%',
                          left: '50%',
                          fontSize: p.size,
                          color: p.color,
                          animation: `sprinklePop 900ms cubic-bezier(0.15, 0.9, 0.25, 1.2) ${p.delay} forwards`,
                          ['--dx' as any]: p.dx,
                          ['--dy' as any]: p.dy,
                          ['--s' as any]: p.s,
                          ['--rot' as any]: p.rot,
                          textShadow: `0 0 10px ${p.color}88`,
                        }}
                        className="absolute pointer-events-none select-none font-bold"
                      >
                        {p.symbol}
                      </span>
                    ))}
                  </div>
                )}

                <div>
                  {/* Top Quote Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <Quote style={{ color: themeColor.quote }} className="w-8 h-8 opacity-80" />
                  </div>

                  {/* Quote Text (Bilingual) */}
                  <p className="text-base sm:text-lg leading-relaxed font-semibold">
                    "{mode === 'latam' && testimonial.quoteEs ? testimonial.quoteEs : testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black/10 dark:bg-white/15 flex items-center justify-center font-black text-sm shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-base">
                      {testimonial.author}
                    </div>
                    <div style={{ color: themeColor.sub }} className="text-xs mt-0.5 font-medium">
                      {testimonial.role} · {testimonial.organization}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

