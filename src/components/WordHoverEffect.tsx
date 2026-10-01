import React, { useState } from 'react';
import { SiteMode } from '../types';
import { getTranslation } from '../data/translations';

interface WordHoverEffectProps {
  mode: SiteMode;
}

export const WordHoverEffect: React.FC<WordHoverEffectProps> = ({ mode }) => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const t = getTranslation(mode);

  const words = mode === 'latam' ? [
    { text: 'Diseño', intlColor: '#2454FF', latamColor: '#0D5C46' },
    { text: 'Experiencia', intlColor: '#D4FF32', latamColor: '#E85338' },
    { text: 'Interfaz', intlColor: '#121212', latamColor: '#1E4BB8' },
    { text: 'Interacción', intlColor: '#2454FF', latamColor: '#EE9E18' },
    { text: 'Sistemas', intlColor: '#121212', latamColor: '#F6D332' },
  ] : [
    { text: 'Design', intlColor: '#2454FF', latamColor: '#0D5C46' },
    { text: 'Experience', intlColor: '#D4FF32', latamColor: '#E85338' },
    { text: 'Interface', intlColor: '#121212', latamColor: '#1E4BB8' },
    { text: 'Interaction', intlColor: '#2454FF', latamColor: '#EE9E18' },
    { text: 'Systems', intlColor: '#121212', latamColor: '#F6D332' },
  ];

  return (
    <section className="py-16 sm:py-24 border-y border-[var(--card-border)] bg-[var(--card-surface)] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[var(--text-primary)]">
          {t.words.lead}{' '}
          {words.map((item, index) => {
            const isHovered = hoveredWord === item.text;
            const targetColor = mode === 'latam' ? item.latamColor : item.intlColor;

            return (
              <React.Fragment key={item.text}>
                <span
                  onMouseEnter={() => setHoveredWord(item.text)}
                  onMouseLeave={() => setHoveredWord(null)}
                  style={{
                    backgroundColor: isHovered ? targetColor : 'transparent',
                    color: isHovered
                      ? targetColor === '#F6D332' || targetColor === '#D4FF32'
                        ? '#121212'
                        : '#FFFFFF'
                      : 'inherit',
                  }}
                  className="inline-block px-2 sm:px-3 py-0.5 rounded-xl cursor-default transition-all duration-200 select-none underline decoration-[var(--card-border)] decoration-2 underline-offset-8 hover:decoration-transparent"
                >
                  {item.text}
                </span>
                {index < words.length - 1 ? (index === words.length - 2 ? (mode === 'latam' ? ' y ' : ', and ') : ', ') : '.'}
              </React.Fragment>
            );
          })}
        </div>

        <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] font-medium max-w-2xl">
          {t.words.sub}
        </p>
      </div>
    </section>
  );
};
