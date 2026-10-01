import React, { useEffect } from 'react';
import { ServiceItem, SiteMode } from '../types';
import { X, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { MagneticPillButton } from './MagneticPillButton';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onContactClick: () => void;
  mode?: SiteMode;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onContactClick,
  mode,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-4 sm:p-8">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={service.title}
          className="relative w-full max-w-2xl bg-[var(--card-surface)] text-[var(--text-primary)] rounded-[32px] p-6 sm:p-10 shadow-2xl border border-[var(--card-border)] animate-in zoom-in-95 duration-200"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-xl bg-[var(--text-primary)] text-[var(--bg-main)] text-xs font-black flex items-center justify-center">
              {service.number}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
              Service Overview
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {service.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base font-bold text-[var(--accent-main)]">
            {service.tagline}
          </p>

          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {service.description}
          </p>

          {/* Key Deliverables */}
          <div className="my-8 pt-6 border-t border-[var(--card-border)]">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[var(--text-secondary)] mb-4">
              What We Deliver
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.skills.map((skill) => (
                <div
                  key={skill}
                  className="p-3.5 rounded-xl bg-[var(--bg-main)] border border-[var(--card-border)] flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)]"
                >
                  <CheckCircle className="w-4 h-4 text-[var(--accent-main)] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[var(--card-border)] flex flex-wrap items-center justify-between gap-4">
            <MagneticPillButton
              onClick={() => {
                onClose();
                onContactClick();
              }}
              variant="primary"
            >
              Collaborate on {service.title}
            </MagneticPillButton>

            <button
              onClick={onClose}
              className="text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
