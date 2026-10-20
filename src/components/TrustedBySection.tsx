import React, { useEffect, useRef, useState } from 'react';
import { SiteMode } from '../types';

interface TrustedBySectionProps {
  mode: SiteMode;
}

export const TrustedBySection: React.FC<TrustedBySectionProps> = ({ mode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position to draw the thick colored line across the screen
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when section enters viewport, reach 100% when near center/bottom
      const start = windowHeight;
      const end = -rect.height * 0.2;
      const current = rect.top;

      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLatam = mode === 'latam';

  // Real client brands from Marianne's portfolio
  const row1 = [
    { name: 'University of Virginia', sub: 'Higher Ed & E-Commerce', icon: 'UVA' },
    { name: 'Watkins 1868', sub: 'Gourmet Spices & Extracts', icon: 'WATKINS' },
    { name: 'Sunshine Supply', sub: 'Architectural Waterproofing', icon: 'SUNSHINE' },
    { name: 'April Cornell', sub: 'Artisan Fashion & Home', icon: 'APRIL' },
    { name: 'Thermal Scientific', sub: 'Laboratory & Biotech Systems', icon: 'THERMO' },
    { name: 'Trane Supply', sub: 'Commercial HVAC Logistics', icon: 'TRANE' },
    { name: 'Hydro Blind Solutions', sub: 'High-Pressure Piping Systems', icon: 'HYDRO' },
  ];

  const row2 = [
    { name: 'NUMO Manufacturing', sub: 'Promotional Products & Custom Goods', icon: 'NUMO' },
    { name: 'Electromechanica', sub: 'Industrial Automation & Power', icon: 'EM' },
    { name: 'Tavano Team Global', sub: 'Commerce Strategy & Solutions', icon: 'TT' },
    { name: 'Oracle NetSuite', sub: 'SuiteCommerce Certified Themes', icon: 'NETSUITE' },
    { name: 'BigCommerce', sub: 'Enterprise Storefront Design', icon: 'BIGCOMMERCE' },
    { name: 'Virginia Athletics', sub: 'Collegiate Apparel & Merchandise', icon: 'CAVALIERS' },
    { name: 'Winona Heritage', sub: 'Pantry Seasonings & Extracts', icon: '1868' },
  ];

  // Thick line color
  const lineColor = isLatam ? '#E85338' : '#2454FF';

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="py-24 sm:py-36 relative overflow-hidden bg-[var(--bg-main)] border-y border-[var(--card-border)] select-none"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-black tracking-widest uppercase text-[var(--accent-main)] block mb-3">
              {isLatam ? 'Colaboraciones & Marcas' : 'Client Portfolio'}
            </span>
            <h2 className="heading-1 text-[var(--text-primary)]">
              {isLatam ? 'Marcas que Confían en Marianne' : 'Trusted by Global Brands & Teams'}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-medium max-w-md">
            {isLatam
              ? 'Organizaciones internacionales y líderes de industria que han implementado sistemas de diseño y plataformas de e-commerce de alto impacto.'
              : 'Collaborating across enterprise platforms, specialized e-commerce storefronts, and high-volume industrial and educational ecosystems.'}
          </p>
        </div>
      </div>

      {/* Row 1: Sliding Left (Infinite Marquee) */}
      <div className="w-full overflow-hidden py-3">
        <div className="flex whitespace-nowrap gap-6 animate-[marquee_35s_linear_infinite] will-change-transform">
          {[...row1, ...row1, ...row1].map((brand, idx) => (
            <div
              key={`r1-${idx}`}
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] shadow-xs shrink-0 hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              <div
                style={{
                  backgroundColor: isLatam ? '#0D5C46' : '#121212',
                  color: isLatam ? '#F6D332' : '#FFFFFF',
                }}
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs tracking-wider shrink-0 shadow-xs"
              >
                {brand.icon.slice(0, 3)}
              </div>
              <div className="text-left">
                <span className="text-base sm:text-lg font-black text-[var(--text-primary)] tracking-tight block">
                  {brand.name}
                </span>
                <span className="text-[11px] font-semibold text-[var(--text-secondary)] block">
                  {brand.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DYNAMIC SCROLL PROGRESS LINE:
          Thick line in vivid color that draws across the entire screen from left to right as you scroll */}
      <div className="my-8 sm:my-12 w-full px-4 sm:px-8">
        <div className="w-full h-2.5 sm:h-3 rounded-full bg-black/8 dark:bg-white/8 overflow-hidden relative shadow-inner">
          <div
            style={{
              width: `${Math.max(scrollProgress * 100, 4)}%`,
              backgroundColor: lineColor,
              boxShadow: `0 0 16px ${lineColor}88`,
            }}
            className="h-full rounded-full transition-all duration-150 ease-out"
          />
        </div>
      </div>

      {/* Row 2: Sliding Right (Opposite Direction Marquee) */}
      <div className="w-full overflow-hidden py-3">
        <div className="flex whitespace-nowrap gap-6 animate-[marquee-reverse_38s_linear_infinite] will-change-transform">
          {[...row2, ...row2, ...row2].map((brand, idx) => (
            <div
              key={`r2-${idx}`}
              className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] shadow-xs shrink-0 hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              <div
                style={{
                  backgroundColor: isLatam ? '#E85338' : '#2454FF',
                  color: '#FFFFFF',
                }}
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs tracking-wider shrink-0 shadow-xs"
              >
                {brand.icon.slice(0, 3)}
              </div>
              <div className="text-left">
                <span className="text-base sm:text-lg font-black text-[var(--text-primary)] tracking-tight block">
                  {brand.name}
                </span>
                <span className="text-[11px] font-semibold text-[var(--text-secondary)] block">
                  {brand.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
