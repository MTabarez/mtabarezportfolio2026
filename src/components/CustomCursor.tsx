import React, { useEffect, useRef, useState } from 'react';

interface CustomCursorProps {
  reducedMotion?: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ reducedMotion }) => {
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'view' | 'drag' | 'explore' | 'reviews' | 'pointer'>('default');
  const [cursorLabel, setCursorLabel] = useState('');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const animRef = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    if (!reducedMotion) {
      document.body.classList.add('custom-cursor-active');
    }

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="view"]');
      const exploreEl = target.closest('[data-cursor="explore"]');
      const dragEl = target.closest('[data-cursor="drag"]');
      const reviewsEl = target.closest('#testimonials, [data-cursor="reviews"]');
      const interactiveEl = target.closest('a, button, [role="button"], input, select, textarea');

      if (projectEl) {
        setCursorType('view');
        setCursorLabel('VIEW CASE ✦');
      } else if (exploreEl) {
        setCursorType('explore');
        setCursorLabel('EXPLORE ✨');
      } else if (dragEl) {
        setCursorType('drag');
        setCursorLabel('TAKE IT 💬');
      } else if (reviewsEl) {
        setCursorType('reviews');
        setCursorLabel('STARS ★');
      } else if (interactiveEl) {
        setCursorType('pointer');
        setCursorLabel('');
      } else {
        setCursorType('default');
        setCursorLabel('');
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, reducedMotion]);

  // Smooth spring physics loop for follower bubble
  useEffect(() => {
    if (isTouch || reducedMotion) return;

    let currentX = targetPos.x;
    let currentY = targetPos.y;

    const loop = () => {
      // 0.23 spring factor for responsive tactile elasticity
      currentX += (targetPos.x - currentX) * 0.23;
      currentY += (targetPos.y - currentY) * 0.23;

      setFollowerPos({ x: currentX, y: currentY });
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [targetPos, isTouch, reducedMotion]);

  if (isTouch || reducedMotion || !isVisible) {
    return null;
  }

  return (
    <>
      {/* 1. Precise Real-Time Central Point with Personality Pulse */}
      <div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 hidden md:block"
        style={{
          left: `${targetPos.x}px`,
          top: `${targetPos.y}px`,
          width: cursorType === 'pointer' || cursorType === 'view' ? '0px' : '7px',
          height: cursorType === 'pointer' || cursorType === 'view' ? '0px' : '7px',
          backgroundColor: '#D4FF32',
          boxShadow: '0 0 10px rgba(212, 255, 50, 0.8), 0 0 2px #000',
          transform: isMouseDown ? 'translate(-50%, -50%) scale(0.6)' : 'translate(-50%, -50%) scale(1)',
        }}
      />

      {/* 2. Magnetic Follower Bubble with Personality Badges */}
      <div
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center transition-transform will-change-transform"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.85 : 1})`,
        }}
      >
        {/* VIEW CASE State */}
        {cursorType === 'view' && (
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#121212] text-[#D4FF32] border-2 border-[#D4FF32] shadow-2xl scale-105 animate-in fade-in zoom-in-95 duration-150 font-black text-xs tracking-wider">
            <span>{cursorLabel}</span>
          </div>
        )}

        {/* EXPLORE State */}
        {cursorType === 'explore' && (
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2454FF] text-white border-2 border-white/40 shadow-2xl scale-105 animate-in fade-in zoom-in-95 duration-150 font-black text-xs tracking-wider">
            <span>{cursorLabel}</span>
          </div>
        )}

        {/* REVIEWS / STARS State */}
        {cursorType === 'reviews' && (
          <div className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#E85338] text-white border-2 border-[#F6D332] shadow-2xl scale-105 animate-in fade-in zoom-in-95 duration-150 font-black text-[11px] tracking-wider">
            <span>{cursorLabel}</span>
          </div>
        )}

        {/* DRAG / TAKE IT State */}
        {cursorType === 'drag' && (
          <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-[#D4FF32] text-[#121212] border-2 border-black font-black text-xs shadow-2xl scale-110">
            <span>{cursorLabel}</span>
          </div>
        )}

        {/* POINTER / INTERACTIVE State (Personality elastic ring with smiley dot) */}
        {cursorType === 'pointer' && (
          <div className="w-12 h-12 rounded-full border-2 border-[#D4FF32] bg-[#D4FF32]/15 backdrop-blur-xs scale-100 transition-all duration-200 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#121212] dark:bg-white" />
          </div>
        )}

        {/* DEFAULT State: Organic fluid aura ring */}
        {cursorType === 'default' && (
          <div className="w-9 h-9 rounded-full border border-black/40 dark:border-white/40 transition-all duration-200" />
        )}
      </div>
    </>
  );
};
