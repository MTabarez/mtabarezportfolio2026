import React from 'react';
import { SiteMode } from '../types';
import { MagneticPillButton } from './MagneticPillButton';
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
  const t = getTranslation(mode);

  return (
    <section id="about" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Asymmetrical 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden border border-[var(--card-border)] bg-[var(--card-surface)] shadow-2xl group">
              <div className="aspect-[4/5] overflow-hidden bg-black/5">
                <img
                  src="/src/assets/images/about_designer_portrait_1790816314268.jpg"
                  alt="Marianne Tabarez, Web & UX/UI Designer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
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

          {/* Right: Pure Bold Editorial Statement with the weight of a title throughout */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.05]">
              {t.about.title}
            </h2>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-secondary)] leading-[1.15] tracking-tight">
              {t.about.bio}
            </p>

            {/* Actions: View CV Modal + Contact */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <MagneticPillButton
                onClick={onOpenCV}
                variant={mode === 'latam' ? 'latam' : 'primary'}
                size="md"
              >
                {t.about.ctaCV}
              </MagneticPillButton>

              <button
                onClick={onContactClick}
                className="px-6 py-3.5 rounded-full border border-[var(--card-border)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-main)] text-xs font-bold tracking-wide text-[var(--text-primary)] transition-all cursor-pointer"
              >
                {t.about.ctaCollab}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
