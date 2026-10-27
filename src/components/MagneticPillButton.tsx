import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface MagneticPillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'latam';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
}

export const MagneticPillButton: React.FC<MagneticPillButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  size = 'md',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Exact brand colors matching user reference image: #9faf23
  const variantStyles = {
    primary: {
      pill: 'bg-[#9faf23] text-[#121212] hover:bg-[#a9bc27] shadow-sm',
      arrowCircle: 'bg-[#9faf23] text-[#121212] shadow-sm',
    },
    secondary: {
      pill: 'border border-[var(--card-border)] bg-transparent text-[var(--text-primary)] hover:border-[#9faf23] hover:text-[#9faf23] dark:hover:border-[#9faf23]',
      arrowCircle: '',
    },
    accent: {
      pill: 'bg-[#9faf23] text-[#121212] hover:bg-[#a9bc27] shadow-sm',
      arrowCircle: 'bg-[#9faf23] text-[#121212] shadow-sm',
    },
    latam: {
      pill: 'bg-[#9faf23] text-[#121212] hover:bg-[#a9bc27] shadow-sm',
      arrowCircle: 'bg-[#9faf23] text-[#121212] shadow-sm',
    },
  }[variant];

  // Exact same outer heights and padding across all variants for consistency
  const sizeStyles = {
    sm: {
      pill: 'h-9 px-4 text-xs font-semibold',
      circle: 'w-9 h-9',
      icon: 'w-3.5 h-3.5',
    },
    md: {
      pill: 'h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-sm font-semibold',
      circle: 'w-11 h-11 sm:w-12 sm:h-12',
      icon: 'w-4 h-4',
    },
    lg: {
      pill: 'h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold',
      circle: 'w-12 h-12 sm:w-14 sm:h-14',
      icon: 'w-4.5 h-4.5',
    },
  }[size];

  // Primary, accent, and latam have arrow; secondary NEVER has arrow
  const hasArrow = variant !== 'secondary';

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={'group relative inline-flex items-center cursor-pointer select-none outline-none transition-all duration-300 ' + className}
    >
      {/* 1. Main Button Pill (Encloses text + resting arrow inside in default state) */}
      <span
        className={'relative z-10 inline-flex items-center justify-center rounded-full transition-all duration-300 ' + variantStyles.pill + ' ' + sizeStyles.pill}
      >
        <span className="leading-none tracking-normal first-letter:uppercase lowercase inline-block">
          {children}
        </span>

        {/* Resting arrow: nestled INSIDE the button pill, angled at -45° in default state */}
        {hasArrow && (
          <span
            style={{
              width: isHovered ? 0 : 'auto',
              marginLeft: isHovered ? 0 : '0.625rem',
              opacity: isHovered ? 0 : 1,
              transform: isHovered ? 'scale(0.4) translateX(-8px)' : 'scale(1) translateX(0)',
              transition: 'width 280ms cubic-bezier(0.16, 1, 0.3, 1), margin-left 280ms ease, opacity 200ms ease, transform 280ms ease',
              overflow: 'hidden',
            }}
            className="inline-flex items-center justify-center text-current shrink-0"
          >
            <ArrowRight className={sizeStyles.icon + ' -rotate-45 stroke-[2.5]'} />
          </span>
        )}
      </span>

      {/* 2. On Hover: The arrow detaches completely from the pill container, leaves distinct gap, and forms a 100% round circular badge with straight arrow */}
      {hasArrow && (
        <span
          style={{
            marginLeft: isHovered ? '0.625rem' : '0rem',
            width: isHovered ? undefined : '0px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) translateX(0px)' : 'scale(0) translateX(-16px)',
            pointerEvents: isHovered ? 'auto' : 'none',
            transition: 'all 320ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className={sizeStyles.circle + ' rounded-full aspect-square flex items-center justify-center shrink-0 ' + variantStyles.arrowCircle}
        >
          <ArrowRight className={sizeStyles.icon + ' stroke-[2.5] rotate-0 transition-transform duration-300'} />
        </span>
      )}
    </button>
  );
};
