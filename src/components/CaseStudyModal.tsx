import React, { useEffect } from 'react';
import { Project, SiteMode } from '../types';
import { X, CheckCircle, ExternalLink, ArrowRight, TrendingUp } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  mode?: SiteMode;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, mode = 'international' }) => {
  const t = getTranslation(mode);
  const isLatam = mode === 'latam';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = isLatam && project.titleEs ? project.titleEs : project.title;
  const subtitle = isLatam && project.subtitleEs ? project.subtitleEs : project.subtitle;
  const category = isLatam && project.categoryEs ? project.categoryEs : project.category;
  const role = isLatam && project.roleEs ? project.roleEs : project.role;
  const challenge = isLatam && project.caseStudy.challengeEs ? project.caseStudy.challengeEs : project.caseStudy.challenge;
  const solution = isLatam && project.caseStudy.solutionEs ? project.caseStudy.solutionEs : project.caseStudy.solution;
  const improvements = isLatam && project.improvementsEs ? project.improvementsEs : project.improvements;
  const deliverables = isLatam && project.deliverablesEs ? project.deliverablesEs : project.deliverables;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-10">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          className="relative w-full max-w-4xl bg-[var(--card-surface)] text-[var(--text-primary)] rounded-[32px] sm:rounded-[44px] shadow-2xl border border-[var(--card-border)] overflow-hidden animate-in zoom-in-95 duration-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close case study"
            className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-black/15 dark:bg-white/15 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Banner with Project Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-black/5 overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-surface)] via-black/40 to-black/30" />

            <div className="absolute bottom-6 left-6 sm:left-10 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#121212] bg-[#D4FF32] px-3.5 py-1.5 rounded-full shadow-xs">
                  {category} · {project.year}
                </span>
                <h2
                  id="case-study-title"
                  className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mt-3 text-white drop-shadow-md"
                >
                  {title}
                </h2>
                <p className="text-sm sm:text-base font-bold text-white/90 mt-1 max-w-2xl drop-shadow-xs">
                  {subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 md:p-12 space-y-10">
            {/* Meta Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[var(--bg-main)] border border-[var(--card-border)] text-xs">
              <div>
                <span className="text-[var(--text-secondary)] block font-medium">
                  {t.work.client}
                </span>
                <span className="font-bold text-[var(--text-primary)] mt-1 block">
                  {project.caseStudy.client}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-secondary)] block font-medium">
                  {t.work.timeline}
                </span>
                <span className="font-bold text-[var(--text-primary)] mt-1 block">
                  {project.caseStudy.timeline}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-secondary)] block font-medium">
                  {t.work.role}
                </span>
                <span className="font-bold text-[var(--text-primary)] mt-1 block">
                  {role}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-secondary)] block font-medium">Tavano Portfolio</span>
                {project.clientUrl ? (
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[var(--accent-main)] hover:underline flex items-center gap-1 mt-1"
                  >
                    <span>{t.work.visitLive}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="font-bold text-[var(--text-primary)] mt-1 block">Production Theme</span>
                )}
              </div>
            </div>

            {/* Brave People Style: MEASURABLE RESULTS SECTION */}
            {project.results && project.results.length > 0 && (
              <section className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-main)] border-2 border-[var(--card-border)]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-[var(--text-primary)]">
                    {t.work.resultsHeading}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[var(--card-surface)] border border-[var(--card-border)] shadow-xs flex flex-col justify-between"
                    >
                      <div className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--accent-main)]">
                        {res.metric}
                      </div>
                      <div className="font-bold text-xs sm:text-sm text-[var(--text-primary)] mt-2">
                        {res.label}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">
                        {res.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* The Challenge */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-main)]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                  {t.work.challengeHeading}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-[var(--text-primary)] leading-relaxed font-medium">
                {challenge}
              </p>
            </section>

            {/* Key Improvements Delivered (Brave People focus) */}
            {improvements && improvements.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                    {t.work.improvementsHeading}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {improvements.map((imp, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-[var(--card-border)] bg-[var(--bg-main)] flex gap-3.5"
                    >
                      <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                        {imp}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Strategy & Execution */}
            <section className="pt-4 border-t border-[var(--card-border)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-main)]" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                  {t.work.solutionHeading}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {solution}
              </p>
            </section>

            {/* Deliverables Produced & Close */}
            <div className="p-6 rounded-2xl bg-[var(--bg-main)] border border-[var(--card-border)] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block mb-2">
                  Entregables & Componentes
                </span>
                <div className="flex flex-wrap gap-2">
                  {deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-lg bg-[var(--card-surface)] border border-[var(--card-border)] text-xs font-semibold text-[var(--text-primary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {project.clientUrl && (
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[var(--card-border)] hover:border-black/50 text-xs font-bold text-[var(--text-primary)] transition-colors"
                  >
                    <span>{t.work.visitLive}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {isLatam ? 'Cerrar Caso' : 'Close Case Study'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
