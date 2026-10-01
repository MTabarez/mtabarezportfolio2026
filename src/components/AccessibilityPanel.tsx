import React, { useEffect, useState } from 'react';
import { AccessibilitySettings } from '../types';
import { X, Check, RotateCcw, Info } from 'lucide-react';

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onUpdateSettings: (updater: (prev: AccessibilitySettings) => AccessibilitySettings) => void;
  onReset: () => void;
}

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
  onReset,
}) => {
  // State for active tooltip hover
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Accessibility Preferences"
        className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[var(--bg-main)] text-[var(--text-primary)] border-l border-[var(--card-border)] p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto animate-in slide-in-from-right duration-300"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[var(--card-border)]">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Accessibility Preferences
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Personalize contrast, motion, and visual clarity
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close accessibility panel"
              className="w-10 h-10 rounded-full border border-[var(--card-border)] hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-6 space-y-7">
            {/* 1. Text Size */}
            <fieldset>
              <div className="flex items-center justify-between mb-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Text Sizing
                </legend>
                <div className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip('textSize')}
                    onMouseLeave={() => setActiveTooltip(null)}
                    aria-label="Text sizing info"
                    className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <Info className="w-3 h-3" />
                  </button>
                  {activeTooltip === 'textSize' && (
                    <div className="absolute right-0 bottom-full mb-2 w-56 p-2.5 rounded-xl bg-black text-white text-[11px] leading-relaxed shadow-xl z-50">
                      Escala la tipografía proporcionalmente en todo el sitio para mayor legibilidad sin romper la retícula.
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'normal', label: 'Default (100%)' },
                  { id: 'large', label: 'Large (112%)' },
                  { id: 'xlarge', label: 'X-Large (125%)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      onUpdateSettings((s) => ({ ...s, textSize: item.id as AccessibilitySettings['textSize'] }))
                    }
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all text-center flex items-center justify-center gap-1 cursor-pointer ${
                      settings.textSize === item.id
                        ? 'bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)] shadow-xs'
                        : 'border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {settings.textSize === item.id && <Check className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* 2. Contrast */}
            <fieldset>
              <div className="flex items-center justify-between mb-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Contrast Mode
                </legend>
                <div className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip('contrast')}
                    onMouseLeave={() => setActiveTooltip(null)}
                    aria-label="Contrast mode info"
                    className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <Info className="w-3 h-3" />
                  </button>
                  {activeTooltip === 'contrast' && (
                    <div className="absolute right-0 bottom-full mb-2 w-56 p-2.5 rounded-xl bg-black text-white text-[11px] leading-relaxed shadow-xl z-50">
                      Refuerza los bordes y oscurece los textos secundarios para máxima nitidez bajo luz solar directa o baja visión.
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'normal', label: 'Normal Contrast' },
                  { id: 'high', label: 'High Contrast' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      onUpdateSettings((s) => ({ ...s, contrast: item.id as AccessibilitySettings['contrast'] }))
                    }
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      settings.contrast === item.id
                        ? 'bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)] shadow-xs'
                        : 'border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {settings.contrast === item.id && <Check className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* 3. Color Vision Simulation / Adjustment */}
            <fieldset>
              <div className="flex items-center justify-between mb-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Color Vision Adaptation
                </legend>
                <div className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip('vision')}
                    onMouseLeave={() => setActiveTooltip(null)}
                    aria-label="Color vision adaptation info"
                    className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <Info className="w-3 h-3" />
                  </button>
                  {activeTooltip === 'vision' && (
                    <div className="absolute right-0 bottom-full mb-2 w-60 p-2.5 rounded-xl bg-black text-white text-[11px] leading-relaxed shadow-xl z-50">
                      Aplica filtros cromáticos en tiempo real que adaptan la gama para personas con daltonismo (Protanopia, Deuteranopia, Tritanopia).
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'default', label: 'Default Vision' },
                  { id: 'protanopia', label: 'Protanopia' },
                  { id: 'deuteranopia', label: 'Deuteranopia' },
                  { id: 'tritanopia', label: 'Tritanopia' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      onUpdateSettings((s) => ({ ...s, colorVision: item.id as AccessibilitySettings['colorVision'] }))
                    }
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      settings.colorVision === item.id
                        ? 'bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)] shadow-xs'
                        : 'border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {settings.colorVision === item.id && <Check className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* 4. Motion Preference (With user requested info tooltip) */}
            <fieldset>
              <div className="flex items-center justify-between mb-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Motion & Animations
                </legend>
                <div className="relative">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveTooltip('motion')}
                    onMouseLeave={() => setActiveTooltip(null)}
                    aria-label="Motion preference info for slow devices"
                    className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                  >
                    <Info className="w-3 h-3" />
                  </button>
                  {activeTooltip === 'motion' && (
                    <div className="absolute right-0 bottom-full mb-2 w-64 p-3 rounded-xl bg-black text-white text-[11px] leading-relaxed shadow-xl z-50">
                      <strong>Reduced Motion:</strong> Optimizado para teléfonos o computadoras más lentas, o para personas sensibles al movimiento o con batería baja. Desactiva animaciones pesadas y transiciones continuas.
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'full', label: 'Full Motion' },
                  { id: 'reduced', label: 'Reduced Motion' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      onUpdateSettings((s) => ({ ...s, motion: item.id as AccessibilitySettings['motion'] }))
                    }
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      settings.motion === item.id
                        ? 'bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)] shadow-xs'
                        : 'border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {settings.motion === item.id && <Check className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* 5. Theme: Light / Dark */}
            <fieldset>
              <div className="flex items-center justify-between mb-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  Display Theme
                </legend>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'light', label: 'Light Theme' },
                  { id: 'dark', label: 'Dark Theme' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      onUpdateSettings((s) => ({ ...s, theme: item.id as AccessibilitySettings['theme'] }))
                    }
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      settings.theme === item.id
                        ? 'bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)] shadow-xs'
                        : 'border-[var(--card-border)] bg-[var(--card-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {settings.theme === item.id && <Check className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-[var(--card-border)] flex items-center justify-between gap-3">
          <button
            onClick={onReset}
            className="py-2.5 px-4 rounded-xl border border-[var(--card-border)] text-xs font-bold hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={onClose}
            className="py-2.5 px-6 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
