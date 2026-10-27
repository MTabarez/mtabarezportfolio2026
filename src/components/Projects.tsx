import React, { useState } from 'react';
import { Project, SiteMode } from '../types';
import { PROJECTS } from '../data/projects';
import { CaseStudyModal } from './CaseStudyModal';
import { MagneticPillButton } from './MagneticPillButton';
import { getTranslation } from '../data/translations';

interface ProjectsProps {
  mode: SiteMode;
}

export const Projects: React.FC<ProjectsProps> = ({ mode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const t = getTranslation(mode);
  const isLatam = mode === 'latam';

  return (
    <section id="work" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <h2 className="heading-1 text-[var(--text-primary)]">
              {t.work.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md">
            {t.work.sub}
          </p>
        </div>

        {/* Dynamic Editorial Layout: Varied widths, full-bleed hero, asymmetric companions */}
        <div className="space-y-12 sm:space-y-16">
          {/* Card 1: FULL WIDTH CINEMATIC HERO (University of Virginia) */}
          {PROJECTS[0] && (
            <div
              data-cursor="view"
              onClick={() => setSelectedProject(PROJECTS[0])}
              className="group relative w-full min-h-[520px] sm:min-h-[640px] rounded-[36px] sm:rounded-[48px] overflow-hidden border border-[var(--card-border)] shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-8 sm:p-14"
            >
              {/* Full background image */}
              <img
                src={PROJECTS[0].image}
                alt={PROJECTS[0].imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Cinematic dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30 transition-opacity" />

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                    {isLatam && PROJECTS[0].categoryEs ? PROJECTS[0].categoryEs : PROJECTS[0].category}
                  </span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 text-white max-w-3xl">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] group-hover:text-[#D4FF32] transition-colors">
                  {isLatam && PROJECTS[0].titleEs ? PROJECTS[0].titleEs : PROJECTS[0].title}
                </h3>

                <p className="mt-3 text-lg sm:text-xl font-bold text-white/90">
                  {isLatam && PROJECTS[0].subtitleEs ? PROJECTS[0].subtitleEs : PROJECTS[0].subtitle}
                </p>

                <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  {isLatam && PROJECTS[0].summaryEs ? PROJECTS[0].summaryEs : PROJECTS[0].summary}
                </p>

                <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {(isLatam && PROJECTS[0].deliverablesEs ? PROJECTS[0].deliverablesEs : PROJECTS[0].deliverables).slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <MagneticPillButton
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    variant={mode === 'latam' ? 'latam' : 'accent'}
                    size="md"
                  >
                    {t.work.viewCase}
                  </MagneticPillButton>
                </div>
              </div>
            </div>
          )}

          {/* Cards 2 & 3: ASYMMETRICAL 2-COLUMN (Watkins Wellness 7 cols / Sunshine Supply 5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Card 2: 7 COLS with Clean White Border (Watkins Wellness) */}
            {PROJECTS[1] && (
              <div
                data-cursor="view"
                onClick={() => setSelectedProject(PROJECTS[1])}
                className="lg:col-span-7 group rounded-[36px] sm:rounded-[44px] border-2 border-white/80 dark:border-white/20 bg-[var(--card-surface)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={PROJECTS[1].image}
                    alt={PROJECTS[1].imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold">
                    {isLatam && PROJECTS[1].categoryEs ? PROJECTS[1].categoryEs : PROJECTS[1].category}
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-main)] transition-colors">
                      {isLatam && PROJECTS[1].titleEs ? PROJECTS[1].titleEs : PROJECTS[1].title}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[var(--text-secondary)]">
                      {isLatam && PROJECTS[1].subtitleEs ? PROJECTS[1].subtitleEs : PROJECTS[1].subtitle}
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {isLatam && PROJECTS[1].summaryEs ? PROJECTS[1].summaryEs : PROJECTS[1].summary}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[var(--text-secondary)]">
                      SuiteCommerce & 3D Configurator
                    </span>
                    <MagneticPillButton
                      onClick={() => setSelectedProject(PROJECTS[1])}
                      variant={mode === 'latam' ? 'latam' : 'primary'}
                      size="sm"
                    >
                      {t.work.viewCase}
                    </MagneticPillButton>
                  </div>
                </div>
              </div>
            )}

            {/* Card 3: 5 COLS Compact & Contrasting (Sunshine Supply) - Project image next to text with tags */}
            {PROJECTS[2] && (
              <div
                data-cursor="view"
                onClick={() => setSelectedProject(PROJECTS[2])}
                style={{
                  backgroundColor: mode === 'latam' ? '#0D5C46' : '#141414',
                  color: '#FFFFFF',
                }}
                className="lg:col-span-5 group rounded-[36px] sm:rounded-[44px] border border-[var(--card-border)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between p-7 sm:p-9"
              >
                <div>
                  {/* Category Pill */}
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-white">
                      {isLatam && PROJECTS[2].categoryEs ? PROJECTS[2].categoryEs : PROJECTS[2].category}
                    </span>
                  </div>

                  {/* Header: Project Image beside Title & Subtitle */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#8ee000] transition-colors">
                        {isLatam && PROJECTS[2].titleEs ? PROJECTS[2].titleEs : PROJECTS[2].title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm font-semibold text-white/80">
                        {isLatam && PROJECTS[2].subtitleEs ? PROJECTS[2].subtitleEs : PROJECTS[2].subtitle}
                      </p>
                    </div>

                    {/* Square Image with Rounded Corners next to the text */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md">
                      <img
                        src={PROJECTS[2].image}
                        alt={PROJECTS[2].title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-white/80 leading-relaxed line-clamp-3">
                    {isLatam && PROJECTS[2].summaryEs ? PROJECTS[2].summaryEs : PROJECTS[2].summary}
                  </p>

                  {/* Project tags just like other cases */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(isLatam && PROJECTS[2].deliverablesEs ? PROJECTS[2].deliverablesEs : PROJECTS[2].deliverables).slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/70">
                    NetSuite SuiteCommerce B2B
                  </span>
                  <MagneticPillButton
                    onClick={() => setSelectedProject(PROJECTS[2])}
                    variant={mode === 'latam' ? 'latam' : 'accent'}
                    size="sm"
                  >
                    {t.work.viewCase}
                  </MagneticPillButton>
                </div>
              </div>
            )}
          </div>

          {/* Card 4: Horizontal Showcase for April Cornell */}
          {PROJECTS[3] && (
            <div
              data-cursor="view"
              onClick={() => setSelectedProject(PROJECTS[3])}
              className="group rounded-[36px] sm:rounded-[44px] border border-[var(--card-border)] bg-[var(--card-surface)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-0 items-center"
            >
              <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[420px] bg-black/5 overflow-hidden">
                <img
                  src={PROJECTS[3].image}
                  alt={PROJECTS[3].imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold">
                  {isLatam && PROJECTS[3].categoryEs ? PROJECTS[3].categoryEs : PROJECTS[3].category}
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[var(--accent-main)]">
                      {PROJECTS[3].year}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-main)] transition-colors">
                    {isLatam && PROJECTS[3].titleEs ? PROJECTS[3].titleEs : PROJECTS[3].title}
                  </h3>
                  <p className="mt-2 text-base font-bold text-[var(--text-secondary)]">
                    {isLatam && PROJECTS[3].subtitleEs ? PROJECTS[3].subtitleEs : PROJECTS[3].subtitle}
                  </p>
                  <p className="mt-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {isLatam && PROJECTS[3].summaryEs ? PROJECTS[3].summaryEs : PROJECTS[3].summary}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {(isLatam && PROJECTS[3].deliverablesEs ? PROJECTS[3].deliverablesEs : PROJECTS[3].deliverables).slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--bg-main)] text-[var(--text-secondary)]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <MagneticPillButton
                    onClick={() => setSelectedProject(PROJECTS[3])}
                    variant={mode === 'latam' ? 'latam' : 'primary'}
                    size="sm"
                  >
                    {t.work.viewCase}
                  </MagneticPillButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        mode={mode}
      />
    </section>
  );
};
