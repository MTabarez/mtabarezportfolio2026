import React from 'react';
import { SiteMode } from '../types';
import { MagneticPillButton } from './MagneticPillButton';
import { getTranslation } from '../data/translations';

interface FloatingImageSectionProps {
  mode: SiteMode;
  onExploreWork: () => void;
}

export const FloatingImageSection: React.FC<FloatingImageSectionProps> = ({
  mode,
  onExploreWork,
}) => {
  const t = getTranslation(mode);

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text (6 cols) */}
          <div className="lg:col-span-6 z-10">
            <h2 className="heading-1 text-[var(--text-primary)]">
              {t.floating.title}
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
              {t.floating.bio}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <MagneticPillButton
                onClick={onExploreWork}
                variant={mode === 'latam' ? 'latam' : 'primary'}
                size="md"
              >
                {t.floating.cta}
              </MagneticPillButton>
            </div>
          </div>

          {/* Right Floating Image Breaking Outside Container (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative lg:-mr-28 xl:-mr-44 group">
              <div className="rounded-[36px] sm:rounded-[48px] overflow-hidden border border-[var(--card-border)] shadow-2xl bg-[var(--card-surface)] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                <img
                  src="/src/assets/images/project_ecommerce_editorial_1790816304762.jpg"
                  alt="Editorial digital interface layout showcasing typography hierarchy and tactile imagery"
                  className="w-full h-auto aspect-[16/10] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative Floating Card Badge */}
              <div
                className={`absolute -bottom-6 left-6 sm:left-10 p-5 rounded-2xl border shadow-xl backdrop-blur-md max-w-xs transition-all duration-300 ${
                  mode === 'latam'
                    ? 'bg-[#0D5C46] text-white border-white/20'
                    : 'bg-[#121212] text-white border-black/10'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4FF32] block mb-1">
                  {t.floating.badgeTitle}
                </span>
                <p className="text-xs font-semibold leading-snug">
                  {t.floating.badgeDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
