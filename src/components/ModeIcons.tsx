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
 * South America continent vector icon for LATAM mode.
 * Clean, unmistakable silhouette of Sudamérica.
 */
export const LatamIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${className} shrink-0 inline-block`}
      aria-hidden="true"
    >
      <path
        d="M7.8 3.2C8.6 3 9.8 2.5 11.2 2.3C13.2 2 15 2.6 16.5 3.6C17.6 4.3 18.8 5.6 19.8 7.3C20.6 8.7 20.9 10.1 20.7 11.2C20.4 12.6 19.4 14.1 18.2 15.4C17.3 16.4 16.3 17.5 15.6 18.8C15 19.9 14.1 21.2 13.3 22.1C13 22.5 12.5 22.8 12.1 22.8C11.7 22.8 11.4 22.4 11.3 21.9C11.1 20.6 11.5 19.4 11.4 17.8C11.3 16.5 10.8 15.3 10.3 14.1C9.6 12.7 8.9 11.5 8.1 10.4C7.4 9.4 6.8 8.4 6.8 7.2C6.8 5.8 7.2 4.3 7.8 3.2Z"
      />
    </svg>
  );
};

// Backwards compatibility alias
export const LatamSunIcon = LatamIcon;
