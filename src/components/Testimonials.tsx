import React, { useState } from 'react';
import { SiteMode } from '../types';
import { TESTIMONIALS } from '../data/testimonials';
import { Quote, Star } from 'lucide-react';
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

  const floatingStars = [
    { top: '-24px', left: '15%', delay: '0ms', size: 'text-lg', symbol: '✦' },
    { top: '-38px', left: '42%', delay: '120ms', size: 'text-xl', symbol: '★' },
    { top: '-28px', left: '75%', delay: '240ms', size: 'text-sm', symbol: '✨' },
    { top: '-46px', left: '88%', delay: '80ms', size: 'text-base', symbol: '✦' },
    { top: '-32px', left: '28%', delay: '180ms', size: 'text-xs', symbol: '★' },
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

        {/* Superpuestas (Overlapping) Review Cards with Flying Stars on Hover */}
        <div className="relative flex flex-col md:flex-row items-center justify-center pt-8 pb-10">
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
                className={`relative w-full md:w-[380px] lg:w-[420px] p-8 sm:p-10 rounded-[36px] border border-[var(--card-border)] cursor-pointer flex flex-col justify-between min-h-[400px] sm:min-h-[440px] select-none ${
                  idx !== 0 ? 'md:-ml-12 lg:-ml-16 mt-6 md:mt-0' : ''
                } ${
                  isHovered
                    ? 'shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] ring-2 ring-white/30 opacity-100'
                    : 'shadow-xl opacity-90 hover:opacity-100'
                }`}
              >
                {/* Flying Stars Animation (volar estrellitas al hacer hover) */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none overflow-visible">
                    {floatingStars.map((st, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          top: st.top,
                          left: st.left,
                          animationDelay: st.delay,
                        }}
                        className={`absolute ${st.size} text-[#D4FF32] drop-shadow-md animate-bounce`}
                      >
                        {st.symbol}
                      </span>
                    ))}
                  </div>
                )}

                <div>
                  {/* Top Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-8">
                    <Quote style={{ color: themeColor.quote }} className="w-8 h-8 opacity-80" />
                    <div className="flex items-center gap-1 text-[#F6D332]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                      ))}
                    </div>
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

        {/* Small hint at bottom */}
        <p className="text-center text-xs font-semibold text-[var(--text-secondary)] mt-4">
          {t.reviews.hoverHint}
        </p>
      </div>
    </section>
  );
};
