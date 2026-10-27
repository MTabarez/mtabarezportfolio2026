import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SiteMode } from '../types';
import { Linkedin, Copy, Check, Move } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface DraggablePersonalCardProps {
  mode: SiteMode;
}

export const DraggablePersonalCard: React.FC<DraggablePersonalCardProps> = ({ mode }) => {
  const [copied, setCopied] = useState(false);
  const [card1Taken, setCard1Taken] = useState(false);
  const [card2Revealed, setCard2Revealed] = useState(false);
  const [card2Taken, setCard2Taken] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: -300, right: 300, top: -500, bottom: 150 });
  const t = getTranslation(mode);

  // Compute viewport bounds so the cards bounce against screen borders
  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window === 'undefined') return;
      const width = window.innerWidth;
      const cardWidth = Math.min(380, width - 32);
      const horizontalLimit = (width - cardWidth) / 2 - 20;

      setConstraints({
        left: -horizontalLimit,
        right: horizontalLimit,
        top: -650,
        bottom: 120,
      });
    };

    updateConstraints();
    window.addEventListener('resize', updateConstraints);
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  // When Card 1 is dragged/taken:
  // Card 1 stays where placed (never disappears!).
  // Under-card 2 reveals after a 2-second delay.
  const handleCard1DragStart = () => {
    if (!card1Taken) {
      setCard1Taken(true);
      setTimeout(() => {
        setCard2Revealed(true);
      }, 2000);
    }
  };

  // When Card 2 is dragged/taken (up to two cards total):
  // Card 2 stays where placed (never disappears!).
  const handleCard2DragStart = () => {
    if (!card2Taken) {
      setCard2Taken(true);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('say-hi@mtabarez.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Speech bubble is visible when Card 1 is ready, or when Card 2 reveals before being taken
  const showSpeechBubble = !card1Taken || (card2Revealed && !card2Taken);

  const renderCardContent = (label: string, pulseColor: string) => (
    <>
      <div className="flex items-center justify-between pb-3 border-b border-black/10">
        <div className="flex items-center gap-1.5">
          <span className={`w-2.5 h-2.5 rounded-full ${pulseColor} animate-pulse`} />
          <span className="text-[11px] font-black uppercase tracking-wider text-[#121212]">
            Marianne Tabarez
          </span>
        </div>
        <div className="text-[10px] font-bold text-black/50 tracking-wider uppercase">
          {label}
        </div>
      </div>

      <div className="py-4">
        <div className="text-lg font-black tracking-tight text-[#121212]">
          {t.callingCard.role}
        </div>
        <p className="text-xs font-semibold text-[#585754] mt-0.5">
          {t.callingCard.tagline}
        </p>
        <div className="text-[11px] font-semibold text-black/70 mt-2 flex items-center gap-2">
          <span>{t.callingCard.location}</span>
          <span>·</span>
          <span>say-hi@mtabarez.com</span>
        </div>
      </div>

      <div className="pt-3 border-t border-black/10 flex items-center justify-between">
        <button
          onClick={handleCopyEmail}
          aria-label="Copiar email de Marianne Tabarez al portapapeles"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white hover:bg-[#1c8517] text-xs font-bold transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          {copied ? <Check className="w-3 h-3 text-[#4ade26]" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? t.callingCard.copied : t.callingCard.copyEmail}</span>
        </button>

        <a
          href="https://linkedin.com/in/mtabareza"
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-xs font-bold text-black/70 hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
        >
          <Linkedin className="w-3.5 h-3.5" />
          <span>{t.callingCard.linkedin}</span>
        </a>
      </div>
    </>
  );

  return (
    <div
      ref={containerRef}
      className="relative -mb-20 sm:-mb-24 z-30 flex justify-center pointer-events-none select-none px-4"
    >
      {/* Physical Stack Container with defined card height */}
      <div className="relative w-[330px] sm:w-[380px] h-[215px] sm:h-[225px]">
        {/* Floating Speech Bubble (Globito) OUTSIDE the card:
            Appears over Card 1; hides when Card 1 taken;
            reappears after 2s over Card 2; hides permanently when Card 2 taken */}
        {/* Speech Bubble: warm yellowish green */}
        <div
          style={{
            opacity: showSpeechBubble ? 1 : 0,
            transform: showSpeechBubble ? 'translateY(0px) scale(1)' : 'translateY(8px) scale(0.9)',
            pointerEvents: 'none',
            transition: 'opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="absolute -top-12 right-2 sm:-top-14 sm:right-0 z-40"
        >
          <div className="relative bg-[#5c9c0b] text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-3.5 rounded-2xl shadow-xl flex items-center gap-1.5 animate-bounce">
            <Move className="w-3.5 h-3.5" />
            <span>{t.callingCard.takeCard}</span>
            <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#5c9c0b] rotate-45 rounded-xs" />
          </div>
        </div>

        {/* UNDERNEATH BASE CARD: ONLY says "Escríbeme" - absolutely nothing else */}
        <div
          style={{ transform: 'rotate(-2deg) translateY(4px)' }}
          className="absolute inset-0 rounded-[28px] border-2 border-black/10 bg-[#F4F1E8] shadow-md pointer-events-auto flex items-center justify-center p-6 select-none z-10"
        >
          <a
            href="#contact"
            className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] hover:text-[#5c9c0b] transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Escríbeme</span>
            <span className="text-xl">↗</span>
          </a>
        </div>

        {/* CARD 2 (Second card in stack):
            - Hidden initially
            - Reveals after 2 seconds when Card 1 is taken
            - Stays where dropped when dragged, glides a bit on flick (dragMomentum) */}
        {card2Revealed && (
          <motion.div
            drag
            dragConstraints={constraints}
            dragElastic={0.08}
            dragMomentum={true}
            dragTransition={{ bounceStiffness: 450, bounceDamping: 24, power: 0.15 }}
            onDragStart={handleCard2DragStart}
            initial={{ rotate: 1, scale: 0.98, opacity: 0 }}
            animate={{ rotate: 1, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.99, cursor: 'grabbing' }}
            tabIndex={0}
            role="region"
            aria-label="Segunda tarjeta de contacto de Marianne Tabarez"
            data-cursor="drag"
            style={{ touchAction: 'pan-y' }}
            className={`pointer-events-auto absolute inset-0 w-full p-6 sm:p-7 rounded-[28px] border-2 border-black/15 bg-[#F9F7F1] text-[#121212] shadow-xl cursor-grab transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
              card2Taken ? 'z-45 shadow-2xl' : 'z-20'
            }`}
          >
            {renderCardContent('UX / UI Architect · 02', 'bg-[#5c9c0b]')}
          </motion.div>
        )}

        {/* CARD 1 (Top initial card):
            - Sits on top of the stack initially
            - When taken, STAYS exactly where placed on screen, glides a bit on flick */}
        <motion.div
          drag
          dragConstraints={constraints}
          dragElastic={0.08}
          dragMomentum={true}
          dragTransition={{ bounceStiffness: 450, bounceDamping: 24, power: 0.15 }}
          onDragStart={handleCard1DragStart}
          initial={{ rotate: 4.5 }}
          whileTap={{ scale: 0.99, cursor: 'grabbing' }}
          tabIndex={0}
          role="region"
          aria-label="Primera tarjeta de contacto interactiva de Marianne Tabarez"
          data-cursor="drag"
          style={{ touchAction: 'pan-y' }}
          className={`pointer-events-auto absolute inset-0 w-full p-6 sm:p-7 rounded-[28px] border-2 border-black/15 bg-[#FFFDF7] text-[#121212] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.28)] cursor-grab transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
            card1Taken ? 'z-50 shadow-2xl' : 'z-30'
          }`}
        >
          {renderCardContent('UX / UI Architect · 01', 'bg-[#5c9c0b]')}
        </motion.div>
      </div>
    </div>
  );
};
