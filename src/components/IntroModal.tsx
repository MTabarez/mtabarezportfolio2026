import React, { useState } from 'react';
import { SiteMode } from '../types';
import { ArrowRight, X } from 'lucide-react';
import { BritishFlagIcon, LatamIcon } from './ModeIcons';

interface IntroModalProps {
  isOpen: boolean;
  onSelectMode: (mode: SiteMode) => void;
  onClose?: () => void;
  isInitialEntrance?: boolean;
}

export const IntroModal: React.FC<IntroModalProps> = ({
  isOpen,
  onSelectMode,
  onClose,
  isInitialEntrance = false,
}) => {
  const [hoveredMode, setHoveredMode] = useState<SiteMode | null>(null);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio mode selection"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md transition-opacity duration-300"
    >
      <div className="relative w-full max-w-4xl bg-[#F6F4EE] text-[#121212] rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl border border-black/10 overflow-hidden">
        {/* Close button if triggered voluntarily */}
        {!isInitialEntrance && onClose && (
          <button
            onClick={onClose}
            aria-label="Close mode selection"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Header */}
        <div className="max-w-xl mb-8 sm:mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#585754] mb-3 block">
            Marianne Tabarez · Web & UX/UI Designer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-[#121212]">
            How do you want to explore?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#585754] font-medium leading-relaxed">
            Select a visual lens to experience the portfolio. The structure and UX remain consistent, while the aesthetic rhythm transforms.
          </p>
        </div>

        {/* Two Art-Directed Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Option 1: INTERNACIONAL */}
          <button
            onClick={() => onSelectMode('international')}
            onMouseEnter={() => setHoveredMode('international')}
            onMouseLeave={() => setHoveredMode(null)}
            className={`group relative text-left p-6 sm:p-8 rounded-[24px] border transition-all duration-300 flex flex-col justify-between h-72 sm:h-80 cursor-pointer overflow-hidden ${
              hoveredMode === 'international'
                ? 'bg-white border-[#121212] shadow-xl translate-y-[-4px]'
                : 'bg-white/80 border-black/10 hover:border-black/30'
            }`}
          >
            {/* Visual preview strip with British Flag */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10">
                <BritishFlagIcon className="w-5 h-3" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#121212]">
                  Internacional
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#121212]" />
                <span className="w-3 h-3 rounded-full bg-[#2454FF]" />
                <span className="w-3 h-3 rounded-full bg-[#D4FF32]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#585754]">
                  Editorial & Minimal
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#121212] group-hover:text-[#2454FF] transition-colors">
                INTERNACIONAL
              </h3>
              <p className="mt-2 text-sm text-[#585754] leading-relaxed">
                Warm travertine, high-contrast ink typography, quiet motion, and restrained single-accent discipline.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-black/8 font-bold text-xs uppercase tracking-wider text-[#121212]">
              <span>Enter International</span>
              <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>

          {/* Option 2: LATAM */}
          <button
            onClick={() => onSelectMode('latam')}
            onMouseEnter={() => setHoveredMode('latam')}
            onMouseLeave={() => setHoveredMode(null)}
            className={`group relative text-left p-6 sm:p-8 rounded-[24px] border transition-all duration-300 flex flex-col justify-between h-72 sm:h-80 cursor-pointer overflow-hidden ${
              hoveredMode === 'latam'
                ? 'bg-[#0D5C46] text-white border-[#0D5C46] shadow-xl translate-y-[-4px]'
                : 'bg-[#F9F4EB] border-black/10 hover:border-[#0D5C46]'
            }`}
          >
            {/* Visual preview strip with Latam Icon */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/20">
                <LatamIcon className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#121212] group-hover:text-white">
                  Latam
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#0D5C46]" />
                <span className="w-3 h-3 rounded-full bg-[#E85338]" />
                <span className="w-3 h-3 rounded-full bg-[#F6D332]" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  hoveredMode === 'latam' ? 'text-white/80' : 'text-[#4E4C47]'
                }`}>
                  Expressive & Saturated
                </span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                hoveredMode === 'latam' ? 'text-[#F6D332]' : 'text-[#121212]'
              }`}>
                LATAM
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${
                hoveredMode === 'latam' ? 'text-white/90' : 'text-[#4E4C47]'
              }`}>
                Vibrant solid color blocks from the start, tropical warmth, and organic tactile rhythm.
              </p>
            </div>

            <div className={`flex items-center justify-between pt-4 border-t font-bold text-xs uppercase tracking-wider ${
              hoveredMode === 'latam' ? 'border-white/20 text-white' : 'border-black/8 text-[#121212]'
            }`}>
              <span>Enter Latam</span>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform ${
                hoveredMode === 'latam' ? 'bg-[#F6D332] text-[#0D5C46]' : 'bg-black text-white'
              }`}>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
