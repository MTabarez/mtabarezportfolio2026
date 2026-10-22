import React from 'react';
import { SiteMode } from '../types';

interface TrustedBySectionProps {
  mode: SiteMode;
}

export const TrustedBySection: React.FC<TrustedBySectionProps> = ({ mode }) => {
  const isLatam = mode === 'latam';

  // Row 1 Brands with SVG vector logos
  const row1 = [
    {
      id: 'uva',
      name: 'University of Virginia',
      svg: (
        <svg viewBox="0 0 120 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Collegiate UVA Logo with crossed sabres motif */}
          <path d="M4 4h8l7 18 7-18h8l-11 24h-8L4 4z" />
          <path d="M40 4h7v16c0 5 3 8 8 8s8-3 8-8V4h7v16c0 8-5 12-15 12s-15-4-15-12V4z" />
          <path d="M78 4h8l10 24h-7l-2-5h-10l-2 5h-7L78 4zm7 14h6l-3-8-3 8z" />
          <circle cx="112" cy="16" r="3" />
        </svg>
      ),
    },
    {
      id: 'watkins',
      name: 'Watkins 1868',
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Heritage Watkins 1868 Serif Typography */}
          <text x="0" y="22" fontFamily="serif" fontSize="20" fontWeight="900" letterSpacing="1.5">
            WATKINS
          </text>
          <text x="105" y="16" fontFamily="sans-serif" fontSize="7" fontWeight="800" letterSpacing="1">
            EST.
          </text>
          <text x="105" y="24" fontFamily="sans-serif" fontSize="7" fontWeight="800" letterSpacing="0.5">
            1868
          </text>
        </svg>
      ),
    },
    {
      id: 'sunshine',
      name: 'Sunshine Supply',
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Architectural Sunburst badge + Wordmark */}
          <g transform="translate(2, 4)">
            <circle cx="12" cy="12" r="6" />
            <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="32" y="17" fontFamily="sans-serif" fontSize="12" fontWeight="800" letterSpacing="1.2">
            SUNSHINE
          </text>
          <text x="32" y="25" fontFamily="sans-serif" fontSize="7" fontWeight="700" letterSpacing="1.8" opacity="0.75">
            SUPPLY CO.
          </text>
        </svg>
      ),
    },
    {
      id: 'april-cornell',
      name: 'April Cornell',
      svg: (
        <svg viewBox="0 0 135 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Artisan Signature Script / Serif */}
          <text x="4" y="22" fontFamily="Georgia, serif" fontStyle="italic" fontSize="18" fontWeight="700" letterSpacing="0.8">
            April Cornell
          </text>
        </svg>
      ),
    },
    {
      id: 'thermo',
      name: 'Thermo Scientific',
      svg: (
        <svg viewBox="0 0 145 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Molecular hexagon emblem + clean sans */}
          <g transform="translate(2, 5)">
            <polygon points="11,1 21,7 21,17 11,23 1,17 1,7" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="11" cy="12" r="3" />
          </g>
          <text x="30" y="16" fontFamily="sans-serif" fontSize="11" fontWeight="800" letterSpacing="0.8">
            thermo
          </text>
          <text x="30" y="25" fontFamily="sans-serif" fontSize="8" fontWeight="600" letterSpacing="1.2" opacity="0.8">
            scientific
          </text>
        </svg>
      ),
    },
    {
      id: 'trane',
      name: 'Trane Supply',
      svg: (
        <svg viewBox="0 0 120 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Robust Industrial Bold Monogram */}
          <text x="2" y="22" fontFamily="sans-serif" fontSize="19" fontWeight="900" letterSpacing="2">
            TRANE
          </text>
          <rect x="88" y="9" width="28" height="13" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <text x="92" y="19" fontFamily="sans-serif" fontSize="7" fontWeight="800" letterSpacing="0.8">
            SUPPLY
          </text>
        </svg>
      ),
    },
    {
      id: 'hydro-blind',
      name: 'Hydro Blind Solutions',
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* High-Pressure Flange Ring + Title */}
          <g transform="translate(2, 4)">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="12" cy="12" r="4" />
          </g>
          <text x="32" y="17" fontFamily="sans-serif" fontSize="12" fontWeight="800" letterSpacing="0.8">
            HYDRO BLIND
          </text>
          <text x="32" y="25" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="1.5" opacity="0.75">
            SOLUTIONS
          </text>
        </svg>
      ),
    },
  ];

  // Row 2 Brands with SVG vector logos
  const row2 = [
    {
      id: 'numo',
      name: 'NUMO Manufacturing',
      svg: (
        <svg viewBox="0 0 115 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Modern Geometric NUMO Stencil */}
          <text x="2" y="23" fontFamily="sans-serif" fontSize="21" fontWeight="900" letterSpacing="1.5">
            numo
          </text>
          <circle cx="78" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: 'electromechanica',
      name: 'Electromechanica',
      svg: (
        <svg viewBox="0 0 155 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Chevron Flash Bolt + Industrial Clean Wordmark */}
          <path d="M12 2L4 15h9l-3 14 11-16h-9l5-11z" />
          <text x="32" y="21" fontFamily="sans-serif" fontSize="11" fontWeight="800" letterSpacing="1">
            ELECTROMECHANICA
          </text>
        </svg>
      ),
    },
    {
      id: 'tavano',
      name: 'Tavano Team Global',
      svg: (
        <svg viewBox="0 0 135 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Tech Double-T Badge */}
          <g transform="translate(2, 4)">
            <rect width="24" height="24" rx="6" fill="currentColor" fillOpacity="0.12" />
            <path d="M6 8h12M12 8v11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <text x="34" y="17" fontFamily="sans-serif" fontSize="11.5" fontWeight="900" letterSpacing="1">
            TAVANO
          </text>
          <text x="34" y="25" fontFamily="sans-serif" fontSize="7.5" fontWeight="700" letterSpacing="1.8" opacity="0.8">
            TEAM
          </text>
        </svg>
      ),
    },
    {
      id: 'netsuite',
      name: 'Oracle NetSuite',
      svg: (
        <svg viewBox="0 0 145 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Connected Enterprise Cloud Blocks */}
          <g transform="translate(2, 6)">
            <rect x="0" y="0" width="8" height="8" rx="1.5" />
            <rect x="12" y="0" width="8" height="8" rx="1.5" />
            <rect x="6" y="11" width="8" height="8" rx="1.5" />
          </g>
          <text x="30" y="16" fontFamily="sans-serif" fontSize="8" fontWeight="700" letterSpacing="1.8" opacity="0.75">
            ORACLE
          </text>
          <text x="30" y="26" fontFamily="sans-serif" fontSize="12" fontWeight="900" letterSpacing="0.8">
            NETSUITE
          </text>
        </svg>
      ),
    },
    {
      id: 'bigcommerce',
      name: 'BigCommerce',
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Faceted Dynamic 'B' Symbol + Typography */}
          <g transform="translate(2, 4)">
            <path d="M2 3h10a6 6 0 0 1 5 9 6.5 6.5 0 0 1-5 10H2V3z" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M7 11h4M7 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="28" y="21" fontFamily="sans-serif" fontSize="12" fontWeight="800" letterSpacing="0.8">
            BIGCOMMERCE
          </text>
        </svg>
      ),
    },
    {
      id: 'virginia-athletics',
      name: 'Virginia Athletics',
      svg: (
        <svg viewBox="0 0 130 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Collegiate Sabre V Badge */}
          <path d="M6 4h7l6 14 6-14h7L20 28h-3L6 4z" />
          <path d="M2 24l30-4M2 20l30 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <text x="40" y="21" fontFamily="sans-serif" fontSize="10.5" fontWeight="900" letterSpacing="1.2">
            CAVALIERS
          </text>
        </svg>
      ),
    },
    {
      id: 'winona',
      name: 'Winona Heritage',
      svg: (
        <svg viewBox="0 0 135 32" className="h-7 sm:h-8 w-auto fill-current" aria-hidden="true">
          {/* Heritage Pantry Emblem */}
          <circle cx="12" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="8" y="19" fontFamily="serif" fontSize="9" fontWeight="900">
            W
          </text>
          <text x="30" y="17" fontFamily="serif" fontSize="12" fontWeight="800" letterSpacing="1">
            WINONA
          </text>
          <text x="30" y="25" fontFamily="sans-serif" fontSize="6.5" fontWeight="700" letterSpacing="1.8" opacity="0.75">
            HERITAGE
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="clients"
      aria-label={isLatam ? 'Marcas y Plataformas' : 'Brands & Platforms'}
      className="py-20 sm:py-28 relative overflow-hidden bg-[var(--bg-main)] border-y border-[var(--card-border)] select-none"
    >
      {/* Section Header: Subtitle removed, title occupies 100% container width */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mb-10 sm:mb-14 w-full">
        <h2 className="heading-1 text-[var(--text-primary)] w-full">
          {isLatam ? 'Marcas y Plataformas' : 'Brands & Platforms'}
        </h2>
      </div>

      {/* Row 1: Sliding Left (Continuous Marquee with Normalized Logo Heights) */}
      <div className="w-full overflow-hidden py-2.5">
        <div className="flex whitespace-nowrap gap-5 sm:gap-6 animate-[marquee_34s_linear_infinite] will-change-transform">
          {[...row1, ...row1, ...row1].map((brand, idx) => (
            <div
              key={`r1-${idx}`}
              title={brand.name}
              aria-label={brand.name}
              className="h-16 sm:h-20 px-7 sm:px-9 rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] flex items-center justify-center shrink-0 shadow-xs text-[var(--text-primary)] opacity-85 hover:opacity-100 hover:border-black/25 dark:hover:border-white/25 transition-all"
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Sliding Right (Opposite Direction Marquee with Normalized Logo Heights) */}
      <div className="w-full overflow-hidden py-2.5 mt-3 sm:mt-4">
        <div className="flex whitespace-nowrap gap-5 sm:gap-6 animate-[marquee-reverse_36s_linear_infinite] will-change-transform">
          {[...row2, ...row2, ...row2].map((brand, idx) => (
            <div
              key={`r2-${idx}`}
              title={brand.name}
              aria-label={brand.name}
              className="h-16 sm:h-20 px-7 sm:px-9 rounded-2xl border border-[var(--card-border)] bg-[var(--card-surface)] flex items-center justify-center shrink-0 shadow-xs text-[var(--text-primary)] opacity-85 hover:opacity-100 hover:border-black/25 dark:hover:border-white/25 transition-all"
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
