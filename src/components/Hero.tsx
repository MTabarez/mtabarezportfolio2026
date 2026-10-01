import React from 'react';
import { SiteMode } from '../types';
import { MagneticPillButton } from './MagneticPillButton';
import { getTranslation } from '../data/translations';

interface HeroProps {
  mode: SiteMode;
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ mode, onExploreWork, onContactClick }) => {
  const t = getTranslation(mode);

  return (
    <section className="relative pt-10 sm:pt-18 pb-16 sm:pb-28 overflow-hidden">
      {/* Background ambient accents for LATAM mode */}
      {mode === 'latam' && (
        <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-[#E85338]/12 rounded-full blur-3xl pointer-events-none -z-10" />
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Top Status Bar: Clean, direct, with Chile / Remote */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-main)]" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">
              {t.hero.status}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs font-semibold text-[var(--text-secondary)]">
            <span>{t.hero.availability}</span>
            <span>·</span>
            <span>{t.hero.location}</span>
          </div>
        </div>

        {/* Main Collage Layout: Typography + Visual Anchor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Oversized Typography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="hero-clamp-title text-[var(--text-primary)] transition-colors duration-300">
              {t.hero.title}
            </h1>

            <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] font-medium max-w-2xl leading-relaxed">
              {t.hero.bio}
            </p>

            {/* CTAs: Featured with signature detachable arrow badge button */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <MagneticPillButton
                onClick={onExploreWork}
                variant={mode === 'latam' ? 'latam' : 'primary'}
                size="lg"
              >
                {t.hero.ctaWork}
              </MagneticPillButton>

              <button
                onClick={onContactClick}
                className="px-7 py-3.5 sm:py-4 rounded-full border border-[var(--card-border)] bg-transparent hover:bg-[var(--text-primary)] hover:text-[var(--bg-main)] text-[var(--text-primary)] font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer"
              >
                {t.hero.ctaContact}
              </button>
            </div>

            {/* Disciplines */}
            <div className="mt-10 pt-6 border-t border-[var(--card-border)] flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-[var(--text-secondary)]">
              {t.hero.disciplines.map((disc, idx) => (
                <React.Fragment key={disc}>
                  <span>{disc}</span>
                  {idx < t.hero.disciplines.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Collage with Floating Tactile Stickers (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[520px] lg:max-w-none">
              {/* Main Visual Image Card */}
              <div
                data-cursor="view"
                onClick={onExploreWork}
                className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[var(--card-border)] shadow-xl bg-[var(--card-surface)] transition-all duration-300 hover:scale-[1.01] cursor-pointer group"
              >
                <img
                  src="/src/assets/images/project_uva_portal_1790825391354.jpg"
                  alt="University of Virginia digital experience e-commerce showcase on laptop"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />

                <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4FF32] block mb-1">
                      {t.hero.featuredBadge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                      University of Virginia (UVA)
                    </h3>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                    ↗
                  </span>
                </div>
              </div>

              {/* Floating Pill Sticker: Design Philosophy */}
              <div
                style={{
                  backgroundColor: mode === 'latam' ? '#0D5C46' : 'var(--hero-sticker-bg)',
                  color: mode === 'latam' ? '#F6D332' : 'var(--hero-sticker-text)',
                }}
                className="absolute -bottom-6 -left-4 sm:-left-8 px-5 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-3 backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF32] animate-pulse" />
                <span className="text-xs font-black tracking-wider uppercase">
                  {t.hero.stickerText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
