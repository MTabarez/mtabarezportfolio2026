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

          {/* Right: Focused Editorial Bio (NO CV dump, purely human & purposeful) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="heading-1 text-[var(--text-primary)]">
              {t.about.title}
            </h2>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-medium">
              {t.about.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[var(--card-border)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">
                  {t.about.coreFocusTitle}
                </span>
                <p className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                  {t.about.coreFocusDesc}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] block mb-2">
                  {t.about.languagesTitle}
                </span>
                <p className="text-sm font-semibold text-[var(--text-primary)] leading-relaxed">
                  {t.about.languagesDesc}
                </p>
              </div>
            </div>

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
                className="px-6 py-3 rounded-full border border-[var(--card-border)] hover:border-black/40 dark:hover:border-white/40 text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] transition-colors cursor-pointer"
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
