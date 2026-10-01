import React, { useEffect } from 'react';
import { CV_DATA } from '../data/cv';
import { X, Printer, Download, Mail, Linkedin, Globe, MapPin, CheckCircle2 } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 print:hidden"
        aria-hidden="true"
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 md:p-10 print:p-0">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Marianne Tabarez Resume"
          className="relative w-full max-w-4xl bg-white text-[#111111] rounded-[28px] sm:rounded-[36px] shadow-2xl border border-black/10 overflow-hidden my-4 print:my-0 print:border-none print:shadow-none print:rounded-none"
        >
          {/* Top Actions Bar (Hidden on print) */}
          <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-black/10 px-6 py-4 flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                Official Curriculum Vitae · Verified Records
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-full border border-black/15 hover:bg-black hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                aria-label="Close CV modal"
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document */}
          <div className="p-8 sm:p-12 md:p-16 space-y-10">
            {/* Header Lockup */}
            <div className="border-b border-black/10 pb-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111]">
                    {CV_DATA.name}
                  </h1>
                  <h2 className="text-lg sm:text-xl font-bold text-neutral-600 mt-1">
                    {CV_DATA.title}
                  </h2>
                </div>

                <div className="text-xs text-neutral-600 space-y-1 sm:text-right font-medium">
                  <div>{CV_DATA.email}</div>
                  <div>{CV_DATA.phone}</div>
                  <div>linkedin.com/in/mtabareza</div>
                  <div>{CV_DATA.location}</div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-6 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {CV_DATA.summary}
              </p>
            </div>

            {/* Professional Experience */}
            <section className="space-y-6">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 border-b border-black/10 pb-2">
                Professional Experience
              </h3>

              <div className="space-y-8">
                {CV_DATA.experiences.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div className="font-bold text-base text-[#111111]">
                        {exp.role} · <span className="font-semibold text-neutral-600">{exp.company}</span>
                      </div>
                      <div className="text-xs font-bold text-neutral-500">
                        {exp.period} · {exp.location}
                      </div>
                    </div>

                    <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-neutral-700">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Competencies */}
            <section className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 border-b border-black/10 pb-2">
                Core Competencies & Tools
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="font-bold text-[#111111] block mb-1.5 uppercase tracking-wider text-[11px]">
                    UX & Product Design
                  </span>
                  <p className="text-neutral-600 leading-relaxed">
                    {CV_DATA.competencies.uxProduct.join(' · ')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="font-bold text-[#111111] block mb-1.5 uppercase tracking-wider text-[11px]">
                    UI & Visual Systems
                  </span>
                  <p className="text-neutral-600 leading-relaxed">
                    {CV_DATA.competencies.uiVisual.join(' · ')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="font-bold text-[#111111] block mb-1.5 uppercase tracking-wider text-[11px]">
                    Web & Technical Foundations
                  </span>
                  <p className="text-neutral-600 leading-relaxed">
                    {CV_DATA.competencies.technical.join(' · ')}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="font-bold text-[#111111] block mb-1.5 uppercase tracking-wider text-[11px]">
                    Collaboration & Workflow
                  </span>
                  <p className="text-neutral-600 leading-relaxed">
                    {CV_DATA.competencies.workflow.join(' · ')}
                  </p>
                </div>
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Education */}
              <section className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 border-b border-black/10 pb-2">
                  Education
                </h3>
                <div className="space-y-4">
                  {CV_DATA.education.map((edu, idx) => (
                    <div key={idx}>
                      <div className="font-bold text-sm text-[#111111]">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-neutral-600">
                        {edu.institution} ({edu.location}) · {edu.period}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 border-b border-black/10 pb-2">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {CV_DATA.certifications.map((cert, idx) => (
                    <div key={idx}>
                      <div className="font-bold text-sm text-[#111111]">
                        {cert.title}
                      </div>
                      <div className="text-xs text-neutral-600">
                        {cert.issuer} · {cert.year}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Languages */}
            <section className="pt-4 border-t border-black/10 flex items-center justify-between text-xs text-neutral-600">
              <span className="font-bold uppercase tracking-wider text-neutral-800">
                Languages:
              </span>
              <div className="flex gap-4">
                {CV_DATA.languages.map((l) => (
                  <span key={l.name}>
                    <strong>{l.name}:</strong> {l.proficiency}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
