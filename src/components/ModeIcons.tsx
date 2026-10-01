import React from 'react';

/**
 * Clean UK / British Flag Icon for INTERNATIONAL mode.
 * Shows crisp Union Jack colors and geometry.
 */
export const BritishFlagIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-3' }) => {
  return (
    <svg
      viewBox="0 0 60 30"
      className={`${className} rounded-xs shadow-2xs overflow-hidden shrink-0 inline-block`}
      aria-hidden="true"
    >
      <clipPath id="uk-clip">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="uk-diag">
        <path d="M0,0 L60,30 M60,0 L0,30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        {/* Navy background */}
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        {/* White diagonals */}
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        {/* Red diagonals */}
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#uk-diag)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        {/* White cross */}
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        {/* Red cross */}
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
};

/**
 * Latin America Icon for LATAM mode.
 * Combines the vibrant golden Sol / Sun of May and Latin American warmth.
 */
export const LatamIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`${className} shrink-0 inline-block`}
      aria-hidden="true"
    >
      {/* Central warm sun disk */}
      <circle cx="12" cy="12" r="4.5" fill="#F6D332" stroke="#E85338" strokeWidth="1.5" />
      {/* 8 Radiating geometric rays */}
      <path
        d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"
        stroke="#E85338"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Backwards compatibility alias
export const LatamSunIcon = LatamIcon;
