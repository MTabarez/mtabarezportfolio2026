import React, { useState } from 'react';
import { SiteMode } from '../types';
import { MagneticPillButton } from './MagneticPillButton';
import { getTranslation } from '../data/translations';

interface ContactFormProps {
  mode: SiteMode;
}

export const ContactForm: React.FC<ContactFormProps> = ({ mode }) => {
  const t = getTranslation(mode);
  const isLatam = mode === 'latam';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: isLatam ? 'UX / UI Platform' : 'UX / UI Platform',
    budget: '$10k - $25k',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const projectTypes = isLatam
    ? ['Plataforma UX / UI', 'Sistema de Diseño', 'Tema E-Commerce', 'Rediseño de Producto', 'Rol Full-Time']
    : ['UX / UI Platform', 'Design System', 'E-Commerce Theme', 'Product Redesign', 'Full-Time Role'];

  const budgetTiers = ['< $10k', '$10k - $25k', '$25k+', isLatam ? 'Por Definir' : 'To Be Defined'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-8 sm:p-12 md:p-16 rounded-[36px] sm:rounded-[48px] bg-[#181818] text-[#F6F4EE] border border-white/15 shadow-2xl relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2454FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4FF32]/12 rounded-full blur-3xl pointer-events-none" />

      {isSubmitted ? (
        <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#D4FF32] text-black mx-auto flex items-center justify-center font-bold text-2xl shadow-xl">
            ✓
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.form.successTitle}
          </h3>
          <p className="text-base sm:text-lg text-white/80 max-w-md mx-auto">
            {t.form.successDesc}
          </p>
          <div className="pt-6">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  projectType: projectTypes[0],
                  budget: '$10k - $25k',
                  message: '',
                });
              }}
              className="px-6 py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-black font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              {t.form.sendAnother}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D4FF32] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4FF32]">
                {t.form.kicker}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              {t.form.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/70">
              {t.form.subtitle}
            </p>
          </div>

          {/* 1. Name & Email inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                {t.form.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.form.namePlaceholder}
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-semibold focus:outline-none focus:border-[#D4FF32] focus:ring-1 focus:ring-[#D4FF32] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                {t.form.emailLabel}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.form.emailPlaceholder}
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-semibold focus:outline-none focus:border-[#D4FF32] focus:ring-1 focus:ring-[#D4FF32] transition-colors"
              />
            </div>
          </div>

          {/* 2. Project Type Selector Chips */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
              {t.form.projectTypeLabel}
            </label>
            <div className="flex flex-wrap gap-2.5">
              {projectTypes.map((type) => {
                const isSelected = formData.projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#D4FF32] text-[#121212] shadow-md scale-[1.02]'
                        : 'bg-white/5 text-white/80 border border-white/15 hover:border-white/40'
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Budget / Scope Selector Chips */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-3">
              {t.form.budgetLabel}
            </label>
            <div className="flex flex-wrap gap-2.5">
              {budgetTiers.map((tier) => {
                const isSelected = formData.budget === tier;
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: tier })}
                    className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#121212] shadow-md'
                        : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {tier}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Message Textarea */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
              {t.form.messageLabel}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.form.messagePlaceholder}
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/15 text-white placeholder-white/30 text-sm font-semibold focus:outline-none focus:border-[#D4FF32] focus:ring-1 focus:ring-[#D4FF32] transition-colors resize-none"
            />
          </div>

          {/* 5. Submit Button with signature MagneticPillButton */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <MagneticPillButton
              type="submit"
              variant="accent"
              size="lg"
            >
              {isSending ? t.form.sendingBtn : t.form.submitBtn}
            </MagneticPillButton>

            <span className="text-xs text-white/50">
              {t.form.directNote}
            </span>
          </div>
        </form>
      )}
    </div>
  );
};
