import React, { useState } from 'react';
import { SiteMode, ServiceItem } from '../types';
import { SERVICES } from '../data/services';
import { ServiceDetailModal } from './ServiceDetailModal';
import { MagneticPillButton } from './MagneticPillButton';
import { getTranslation } from '../data/translations';
import uxWireframeImg from '../assets/images/ux_wireframe_system_1790905451296.jpg';
import designTokensImg from '../assets/images/design_tokens_craft_1790905461641.jpg';

interface ServicesProps {
  mode: SiteMode;
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ mode, onContactClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const t = getTranslation(mode);
  const isLatam = mode === 'latam';

  // Core services
  const coreServices = SERVICES.slice(0, 4);

  const [hoveredPhoto1, setHoveredPhoto1] = useState(false);
  const [hoveredPhoto2, setHoveredPhoto2] = useState(false);

  const toggleFlip = (id: string) => {
    setFlippedCardId((prev) => (prev === id ? null : id));
  };

  const renderServiceCard = (service: ServiceItem, index: number, latamBg: string) => {
    const isFlipped = flippedCardId === service.id;
    const title = isLatam && service.titleEs ? service.titleEs : service.title;
    const tagline = isLatam && service.taglineEs ? service.taglineEs : service.tagline;
    const description = isLatam && service.descriptionEs ? service.descriptionEs : service.description;
    const skills = isLatam && service.skillsEs ? service.skillsEs : service.skills;

    return (
      <div
        key={service.id}
        onClick={() => toggleFlip(service.id)}
        className="[perspective:1000px] h-full min-h-[200px] sm:min-h-[380px] cursor-pointer group"
        role="button"
        tabIndex={0}
        aria-label={`${title} - ${isFlipped ? 'Click to flip back' : 'Click to flip and see details'}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleFlip(service.id);
          }
        }}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] rounded-[24px] sm:rounded-[32px] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* ==================================================== */}
          {/* FRONT OF THE CARD                                   */}
          {/* Mobile: ONLY the title and the arrow (no scope text)*/}
          {/* ==================================================== */}
          <div
            style={{
              backgroundColor: isLatam ? latamBg : '#1A1A1A',
              color: '#FFFFFF',
              borderColor: isLatam ? 'transparent' : 'rgba(255, 255, 255, 0.18)',
            }}
            className="absolute inset-0 [backface-visibility:hidden] p-5 sm:p-8 rounded-[24px] sm:rounded-[32px] border flex flex-col justify-between shadow-lg select-none transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {title}
              </h3>
              {/* Desktop supplementary preview (hidden on mobile for clean "solo el título") */}
              <p className="hidden sm:block mt-2 text-xs font-bold uppercase tracking-wider text-[#D4FF32]">
                {tagline}
              </p>
              <p className="hidden sm:block mt-4 text-sm leading-relaxed text-white/85 line-clamp-3">
                {description}
              </p>
            </div>

            {/* Front Bottom: Arrow ONLY ("la flecha en el frente, no 'ver entregables bla bla'") */}
            <div className="pt-3 border-t border-white/15 flex items-center justify-end text-xs font-bold text-white">
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm group-hover:translate-x-1 group-hover:bg-white/25 transition-all text-[#D4FF32]">
                →
              </span>
            </div>
          </div>

          {/* ==================================================== */}
          {/* BACK OF THE CARD                                    */}
          {/* Flips on click and shows full details/info          */}
          {/* ==================================================== */}
          <div
            style={{
              backgroundColor: isLatam ? latamBg : '#141414',
              color: '#FFFFFF',
              borderColor: 'rgba(255, 255, 255, 0.25)',
            }}
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] p-5 sm:p-7 rounded-[24px] sm:rounded-[32px] border flex flex-col justify-between shadow-2xl overflow-y-auto select-none"
          >
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between pb-1 border-b border-white/15">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#D4FF32]">
                  {tagline}
                </span>
                <span className="text-xs text-white/60 hover:text-white">✕</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-white/90">
                {description}
              </p>
              {skills && skills.length > 0 && (
                <div className="pt-1 flex flex-wrap gap-1">
                  {skills.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-md bg-white/15 text-white/90 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between text-[10px] sm:text-xs font-bold text-[#D4FF32]">
              <span>{isLatam ? 'Toca para volver' : 'Tap to flip back'}</span>
              <span>⟲</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-18">
          <div>
            <h2 className="heading-1 text-white">{t.services.title}</h2>
          </div>

          {t.services.sub ? (
            <p className="text-base sm:text-lg text-white/90 max-w-md font-medium leading-relaxed">
              {t.services.sub}
            </p>
          ) : null}
        </div>

        {/* Services Grid:
            Mobile: 2 columns (50% each), exactly 4 cards forming a clean 2x2 grid
            Desktop (lg): 6 cards including atmospheric design photos
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {/* Card 1: PHOTO (Visible on desktop; hidden on mobile to maintain 2-column 50% services layout) */}
          <div
            data-cursor="explore"
            onMouseEnter={() => setHoveredPhoto1(true)}
            onMouseLeave={() => setHoveredPhoto1(false)}
            className="hidden lg:block group relative rounded-[32px] overflow-hidden border border-white/20 bg-black min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={uxWireframeImg}
              alt="UI and UX wireframe architecture studio design"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 bg-black/35 pointer-events-none transition-opacity duration-500 group-hover:bg-black/55" />

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none p-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="20"
                y="20"
                width="360"
                height="360"
                rx="24"
                stroke="#D4FF32"
                strokeWidth="2"
                strokeDasharray="1440"
                style={{
                  strokeDashoffset: hoveredPhoto1 ? 0 : 1440,
                  transition: 'stroke-dashoffset 900ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms ease',
                  opacity: hoveredPhoto1 ? 0.95 : 0,
                }}
              />
              <line
                x1="40"
                y1="70"
                x2="360"
                y2="70"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="320"
                style={{
                  strokeDashoffset: hoveredPhoto1 ? 0 : 320,
                  transition: 'stroke-dashoffset 700ms ease 100ms, opacity 300ms ease',
                  opacity: hoveredPhoto1 ? 0.8 : 0,
                }}
              />
              <line
                x1="140"
                y1="70"
                x2="140"
                y2="340"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="270"
                strokeDashoffset={hoveredPhoto1 ? 0 : 270}
                style={{
                  transition: 'stroke-dashoffset 700ms ease 180ms, opacity 300ms ease',
                  opacity: hoveredPhoto1 ? 0.5 : 0,
                }}
              />
              <path
                d="M 50 280 C 120 180, 200 320, 350 140"
                stroke="#D4FF32"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="480"
                style={{
                  strokeDashoffset: hoveredPhoto1 ? 0 : 480,
                  transition: 'stroke-dashoffset 850ms cubic-bezier(0.25, 1, 0.5, 1) 220ms, opacity 300ms ease',
                  opacity: hoveredPhoto1 ? 1 : 0,
                }}
              />
              <rect
                x="170"
                y="110"
                width="160"
                height="100"
                rx="12"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="520"
                style={{
                  strokeDashoffset: hoveredPhoto1 ? 0 : 520,
                  transition: 'stroke-dashoffset 750ms ease 260ms, opacity 300ms ease',
                  opacity: hoveredPhoto1 ? 0.8 : 0,
                }}
              />
              <circle
                cx="50"
                cy="280"
                r="4"
                fill="#D4FF32"
                style={{
                  transform: hoveredPhoto1 ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 300ms ease 400ms',
                }}
              />
              <circle
                cx="350"
                cy="140"
                r="4"
                fill="#D4FF32"
                style={{
                  transform: hoveredPhoto1 ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 300ms ease 500ms',
                }}
              />
            </svg>
          </div>

          {/* Service 01: UX / UI Design */}
          {renderServiceCard(coreServices[0], 0, '#0D5C46')}

          {/* Service 02: Web Design & Themes */}
          {renderServiceCard(coreServices[1], 1, '#E85338')}

          {/* Service 03: Design Systems & Tokens */}
          {renderServiceCard(coreServices[2], 2, '#1E4BB8')}

          {/* Card 5: PHOTO (Visible on desktop; hidden on mobile) */}
          <div
            data-cursor="explore"
            onMouseEnter={() => setHoveredPhoto2(true)}
            onMouseLeave={() => setHoveredPhoto2(false)}
            className="hidden lg:block group relative rounded-[32px] overflow-hidden border border-white/20 bg-black min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={designTokensImg}
              alt="Design tokens specimen scale and layout structure"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-0 bg-black/35 pointer-events-none transition-opacity duration-500 group-hover:bg-black/55" />

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none p-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="200"
                r="130"
                stroke="#00E5FF"
                strokeWidth="1.5"
                strokeDasharray="820"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 820,
                  transition: 'stroke-dashoffset 900ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 400ms ease',
                  opacity: hoveredPhoto2 ? 0.9 : 0,
                }}
              />
              <circle
                cx="200"
                cy="200"
                r="70"
                stroke="#D4FF32"
                strokeWidth="2"
                strokeDasharray="440"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 440,
                  transition: 'stroke-dashoffset 700ms ease 150ms, opacity 300ms ease',
                  opacity: hoveredPhoto2 ? 1 : 0,
                }}
              />
              <line
                x1="40"
                y1="200"
                x2="360"
                y2="200"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="320"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 320,
                  transition: 'stroke-dashoffset 700ms ease 200ms, opacity 300ms ease',
                  opacity: hoveredPhoto2 ? 0.7 : 0,
                }}
              />
              <line
                x1="200"
                y1="40"
                x2="200"
                y2="360"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="320"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 320,
                  transition: 'stroke-dashoffset 700ms ease 200ms, opacity 300ms ease',
                  opacity: hoveredPhoto2 ? 0.7 : 0,
                }}
              />
              <path
                d="M 60 90 L 60 60 L 90 60"
                stroke="#D4FF32"
                strokeWidth="3"
                strokeDasharray="60"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 60,
                  transition: 'stroke-dashoffset 500ms ease 300ms, opacity 200ms ease',
                  opacity: hoveredPhoto2 ? 1 : 0,
                }}
              />
              <path
                d="M 310 60 L 340 60 L 340 90"
                stroke="#D4FF32"
                strokeWidth="3"
                strokeDasharray="60"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 60,
                  transition: 'stroke-dashoffset 500ms ease 300ms, opacity 200ms ease',
                  opacity: hoveredPhoto2 ? 1 : 0,
                }}
              />
              <path
                d="M 60 310 L 60 340 L 90 340"
                stroke="#D4FF32"
                strokeWidth="3"
                strokeDasharray="60"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 60,
                  transition: 'stroke-dashoffset 500ms ease 300ms, opacity 200ms ease',
                  opacity: hoveredPhoto2 ? 1 : 0,
                }}
              />
              <path
                d="M 310 340 L 340 340 L 340 310"
                stroke="#D4FF32"
                strokeWidth="3"
                strokeDasharray="60"
                style={{
                  strokeDashoffset: hoveredPhoto2 ? 0 : 60,
                  transition: 'stroke-dashoffset 500ms ease 300ms, opacity 200ms ease',
                  opacity: hoveredPhoto2 ? 1 : 0,
                }}
              />
              <circle
                cx="200"
                cy="200"
                r="6"
                fill="#D4FF32"
                style={{
                  transform: hoveredPhoto2 ? 'scale(1)' : 'scale(0)',
                  transition: 'transform 300ms ease 400ms',
                }}
              />
            </svg>
          </div>

          {/* Service 04: Interaction & Motion Design */}
          {renderServiceCard(coreServices[3], 3, '#EE9E18')}
        </div>

        {/* Bottom Collaboration Callout */}
        <div className="mt-14 p-8 sm:p-10 rounded-[32px] border border-white/20 bg-white/5 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {t.services.customEngagement}
            </h4>
            <p className="mt-1 text-sm sm:text-base text-white/80">
              {t.services.customEngagementSub}
            </p>
          </div>

          <MagneticPillButton
            onClick={onContactClick}
            variant={isLatam ? 'latam' : 'accent'}
            size="md"
          >
            {isLatam ? 'Hablar de un proyecto' : 'Discuss a project'}
          </MagneticPillButton>
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        mode={mode}
        onContactClick={() => {
          setSelectedService(null);
          onContactClick();
        }}
      />
    </section>
  );
};

