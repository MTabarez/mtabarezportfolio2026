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

  // Variant styles: Pill ONLY wraps text; Circle sits outside
  const variantStyles = {
    primary: {
      pill: 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-transparent hover:bg-[#121212]',
      badge: 'border border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-primary)]',
      badgeHover: 'bg-[#D4FF32] text-[#121212] border-[#D4FF32]',
    },
    secondary: {
      pill: 'border border-[var(--card-border)] bg-transparent text-[var(--text-primary)] hover:border-black/50 dark:hover:border-white/50',
      badge: 'border border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-primary)]',
      badgeHover: 'bg-[#121212] text-white border-[#121212] dark:bg-white dark:text-black',
    },
    accent: {
      pill: 'bg-[#2454FF] text-white border border-[#2454FF] hover:bg-[#1A44D8]',
      badge: 'border border-[var(--card-border)] bg-white text-[#121212]',
      badgeHover: 'bg-[#D4FF32] text-[#121212] border-[#D4FF32]',
    },
    latam: {
      pill: 'bg-[#0D5C46] text-white border border-[#0D5C46] hover:bg-[#094735]',
      badge: 'border border-[#0D5C46]/20 bg-[#F6D332] text-[#0D5C46]',
      badgeHover: 'bg-[#E85338] text-white border-[#E85338]',
    },
  }[variant];

  const sizeStyles = {
    sm: {
      pill: 'py-2 px-4 text-xs font-bold',
      badge: 'w-7 h-7',
      icon: 'w-3 h-3',
      separation: 'translateX(6px)',
    },
    md: {
      pill: 'py-2.5 px-5 sm:py-3 sm:px-6 text-xs sm:text-sm font-bold',
      badge: 'w-8 h-8 sm:w-9 sm:h-9',
      icon: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
      separation: 'translateX(8px)',
    },
    lg: {
      pill: 'py-3.5 px-6 sm:py-4 sm:px-8 text-sm sm:text-base font-bold',
      badge: 'w-10 h-10 sm:w-11 sm:h-11',
      icon: 'w-4 h-4 sm:w-5 sm:h-5',
      separation: 'translateX(10px)',
    },
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative inline-flex items-center gap-2 cursor-pointer select-none outline-hidden ${className}`}
    >
      {/* 1. Pill container: ONLY surrounds the text */}
      <span
        className={`rounded-full tracking-wide transition-all duration-300 shadow-xs group-hover:shadow-md ${variantStyles.pill} ${sizeStyles.pill}`}
      >
        {children}
      </span>

      {/* 2. Detachable Circle Badge: Sits outside the pill, and separates further on hover */}
      <span
        style={{
          transform: isHovered ? `${sizeStyles.separation} scale(1.08)` : 'translateX(0px) scale(1)',
          transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms ease, border-color 200ms ease',
        }}
        className={`${sizeStyles.badge} rounded-full flex items-center justify-center shrink-0 shadow-xs transition-colors ${
          isHovered ? variantStyles.badgeHover : variantStyles.badge
        }`}
      >
        <span
          style={{
            // Arrow starts angled at -45° (up-right) and straightens out to 0° (horizontal) on hover
            transform: isHovered ? 'rotate(0deg)' : 'rotate(-45deg)',
            transition: 'transform 280ms cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'inline-flex',
          }}
        >
          <ArrowRight className={`${sizeStyles.icon} stroke-[2.5]`} />
        </span>
      </span>
    </button>
  );
};
