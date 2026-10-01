import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SiteMode } from '../types';
import { Mail, Linkedin, Copy, Check, Move } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface DraggablePersonalCardProps {
  mode: SiteMode;
}

export const DraggablePersonalCard: React.FC<DraggablePersonalCardProps> = ({ mode }) => {
  const [copied, setCopied] = useState(false);
  const t = getTranslation(mode);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('mtabareza@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative -mb-20 sm:-mb-24 z-30 flex justify-center pointer-events-none select-none px-4">
      {/* Draggable Business Card: Can be dragged and dropped ANYWHERE on the site */}
      <motion.div
        drag
        dragElastic={0.08}
        dragMomentum={true}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98, cursor: 'grabbing' }}
        data-cursor="drag"
        className="pointer-events-auto w-[330px] sm:w-[380px] p-6 sm:p-7 rounded-[28px] border-2 border-black/15 bg-[#FFFDF7] text-[#121212] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] cursor-grab transition-shadow duration-200"
      >
        {/* Top Header with "Toma una tarjeta" */}
        <div className="flex items-center justify-between pb-3 border-b border-black/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-wider text-[#121212]">
              Marianne Tabarez
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-black text-black bg-[#D4FF32] px-3 py-1 rounded-full shadow-xs">
            <Move className="w-3 h-3" />
            <span>{t.callingCard.takeCard}</span>
          </div>
        </div>

        {/* Card Body */}
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
            <span>mtabareza@gmail.com</span>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-black/10 flex items-center justify-between">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white hover:bg-[#2454FF] text-xs font-bold transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3 h-3 text-[#D4FF32]" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? t.callingCard.copied : t.callingCard.copyEmail}</span>
          </button>

          <a
            href="https://linkedin.com/in/mtabareza"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs font-bold text-black/70 hover:text-black transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>{t.callingCard.linkedin}</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
