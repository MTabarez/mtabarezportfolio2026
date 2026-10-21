import React, { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
  reducedMotion?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ reducedMotion }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  // Exact mouse coordinates (cursor dot follows directly)
  const mousePos = useRef({ x: -100, y: -100 });
  // Trailing background coordinates (smooth lerp chase)
  const bgPos = useRef({ x: -100, y: -100 });

  const dotRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers (mouse/trackpad)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) {
      setIsPointerDevice(false);
      return;
    }
    setIsPointerDevice(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Immediately place the small circle directly at cursor coordinates
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    // Lerp loop using requestAnimationFrame for smooth trailing background
    const lerpFactor = reducedMotion ? 1 : 0.16;

    const animate = () => {
      // Linear interpolation: current + (target - current) * factor
      bgPos.current.x += (mousePos.current.x - bgPos.current.x) * lerpFactor;
      bgPos.current.y += (mousePos.current.y - bgPos.current.y) * lerpFactor;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(${bgPos.current.x}px, ${bgPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isVisible, reducedMotion]);

  if (!isPointerDevice) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 1. Elemento de fondo: Círculo más grande, difuminado y con un color llamativo (chases with lerp) */}
      <div
        ref={bgRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(212, 255, 50, 0.75) 0%, rgba(36, 84, 255, 0.45) 55%, transparent 75%)',
          filter: 'blur(7px)',
        }}
      />

      {/* 2. Cursor personalizado principal: Círculo pequeño nítido (follows pointer immediately) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none bg-[#121212] dark:bg-[#FFFFFF] border border-white/80 dark:border-black/80 shadow-xs will-change-transform"
      />
    </div>
  );
};
