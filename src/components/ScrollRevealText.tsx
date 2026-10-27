import React, { useRef, useState, useEffect } from 'react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
}

export const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
  text,
  className = '',
  wordClassName = '',
  as: Component = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the top of element enters 85% of viewport
      const start = windowHeight * 0.85;
      // Complete revealing when top of element reaches 35% of viewport
      const end = windowHeight * 0.35;

      const current = rect.top;
      const total = start - end;
      const rawProgress = (start - current) / total;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Component ref={containerRef as any} className={`relative ${className}`}>
      {words.map((word, index) => {
        // Calculate activation window for this specific word
        const startThreshold = index / words.length;
        const endThreshold = (index + 0.8) / words.length;

        let wordProgress = 0;
        if (progress >= endThreshold) {
          wordProgress = 1;
        } else if (progress <= startThreshold) {
          wordProgress = 0;
        } else {
          wordProgress = (progress - startThreshold) / (endThreshold - startThreshold);
        }

        // Active state vs muted gray state
        // When wordProgress is 0: muted gray (#888888 / opacity 0.22)
        // When wordProgress is 1: solid black (#121212) or white in dark mode
        return (
          <span
            key={`${word}-${index}`}
            className={`inline-block mr-[0.28em] transition-colors duration-150 ${wordClassName}`}
            style={{
              opacity: 0.22 + wordProgress * 0.78,
              color:
                wordProgress > 0.5
                  ? 'var(--text-primary)'
                  : 'var(--text-tertiary)',
            }}
          >
            {word}
          </span>
        );
      })}
    </Component>
  );
};
