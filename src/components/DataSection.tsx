import React from 'react';
import { SiteMode } from '../types';
import { Award, Users, Globe2, Layers } from 'lucide-react';

interface DataSectionProps {
  mode: SiteMode;
}

export const DataSection: React.FC<DataSectionProps> = ({ mode }) => {
  const stats = [
    {
      value: '9+',
      unit: 'Years',
      label: 'Digital Design Experience',
      detail: 'Designing web platforms and intuitive e-commerce themes for international clients.',
      accent: mode === 'latam' ? '#0D5C46' : '#121212',
      icon: Award,
    },
    {
      value: '40+',
      unit: 'Peers',
      label: 'Designers & Engineers Mentored',
      detail: 'Delivering knowledge-sharing sessions on UX methodologies, discovery, and design systems.',
      accent: mode === 'latam' ? '#E85338' : '#2454FF',
      icon: Users,
    },
    {
      value: '4',
      unit: 'Pillars',
      label: 'Core Platform Environments',
      detail: 'BigCommerce Stencil, NetSuite SuiteCommerce, WordPress, and Custom React/Web ecosystems.',
      accent: mode === 'latam' ? '#1E4BB8' : '#D4FF32',
      icon: Layers,
    },
    {
      value: '3',
      unit: 'Languages',
      label: 'International Collaboration',
      detail: 'English (Proficient), Spanish (Native), and Italian (Basic) for global cross-functional teams.',
      accent: mode === 'latam' ? '#EE9E18' : '#121212',
      icon: Globe2,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[var(--card-surface)] border-y border-[var(--card-border)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Header without redundant subtitles */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <h2 className="heading-1 text-[var(--text-primary)]">
              Impact in Numbers
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md">
            Grounded in verifiable career achievements across agency teams, international retailers, and enterprise workflows.
          </p>
        </div>

        {/* 4 Overlapping Numerical Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div
                key={st.label}
                className="group relative p-8 sm:p-9 rounded-[28px] border border-[var(--card-border)] bg-[var(--bg-main)] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      Metric 0{idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[var(--card-surface)] border border-[var(--card-border)] flex items-center justify-center text-[var(--text-primary)]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Oversized Number */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl sm:text-6xl font-black tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-main)] transition-colors">
                      {st.value}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                      {st.unit}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mt-3">
                    {st.label}
                  </h3>

                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {st.detail}
                  </p>
                </div>

                <div className="pt-5 border-t border-[var(--card-border)] flex items-center justify-between text-xs font-bold uppercase tracking-wider opacity-70">
                  <span>Track Record</span>
                  <span>✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
