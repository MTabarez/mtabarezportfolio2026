import React, { useState } from 'react';
import { SiteMode, ServiceItem } from '../types';
import { SERVICES } from '../data/services';
import { ServiceDetailModal } from './ServiceDetailModal';
import { MagneticPillButton } from './MagneticPillButton';
import { getTranslation } from '../data/translations';

interface ServicesProps {
  mode: SiteMode;
  onContactClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ mode, onContactClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = getTranslation(mode);
  const isLatam = mode === 'latam';

  // Core services
  const coreServices = SERVICES.slice(0, 4);

  // Pure photographic images related to Design & UX
  const photo1 = '/src/assets/images/ux_wireframe_system_1790905451296.jpg';
  const photo2 = '/src/assets/images/design_tokens_craft_1790905461641.jpg';

  const [hoveredPhoto1, setHoveredPhoto1] = useState(false);
  const [hoveredPhoto2, setHoveredPhoto2] = useState(false);

  return (
    <section id="services" className="py-20 sm:py-32 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* High-Contrast Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <h2 className="heading-1 text-white">
              {t.services.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-white/90 max-w-md font-medium leading-relaxed">
            {t.services.sub}
          </p>
        </div>

        {/* 6-Card Grid in exact order requested:
            Card 1: FOTO (Sin texto)
            Card 2: Servicio 01
            Card 3: Servicio 02
            Card 4: Servicio 03
            Card 5: FOTO (Sin texto)
            Card 6: Servicio 04
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: FOTO (Sin texto, diseño y UX con SVG lineal que se dibuja/desdibuja al hover) */}
          <div
            data-cursor="explore"
            onMouseEnter={() => setHoveredPhoto1(true)}
            onMouseLeave={() => setHoveredPhoto1(false)}
            className="group relative rounded-[32px] overflow-hidden border border-white/20 bg-black min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={photo1}
              alt="UI and UX wireframe architecture studio design"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Dark gradient base to give contrast to line animation */}
            <div className="absolute inset-0 bg-black/35 pointer-events-none transition-opacity duration-500 group-hover:bg-black/55" />

            {/* Linear SVG Overlay that draws on hover and undraws on leave */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none p-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Layout Wireframe Container */}
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

              {/* Wireframe Header Row */}
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

              {/* Responsive Layout Grid Columns */}
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

              {/* Bezier Vector Curve across UX Grid */}
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

              {/* UI Component Wireframe Card Inside */}
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

              {/* Vector Anchor Nodes */}
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

          {/* Card 2: Servicio 01 (UX / UI Design) */}
          <div
            onClick={() => setSelectedService(coreServices[0])}
            style={{
              backgroundColor: mode === 'latam' ? '#0D5C46' : '#1A1A1A',
              color: '#FFFFFF',
              borderColor: mode === 'latam' ? 'transparent' : 'rgba(255, 255, 255, 0.18)',
            }}
            className="group relative p-8 sm:p-9 rounded-[32px] border transition-all duration-300 flex flex-col justify-between min-h-[380px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white pt-2">
                {mode === 'latam' && coreServices[0].titleEs ? coreServices[0].titleEs : coreServices[0].title}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D4FF32]">
                {mode === 'latam' && coreServices[0].taglineEs ? coreServices[0].taglineEs : coreServices[0].tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
                {mode === 'latam' && coreServices[0].descriptionEs ? coreServices[0].descriptionEs : coreServices[0].description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white">
              <span>{t.services.viewScope}</span>
              <span className="text-base group-hover:translate-x-1.5 transition-transform text-[#D4FF32]">→</span>
            </div>
          </div>

          {/* Card 3: Servicio 02 (Web Design & Themes) */}
          <div
            onClick={() => setSelectedService(coreServices[1])}
            style={{
              backgroundColor: mode === 'latam' ? '#E85338' : '#1A1A1A',
              color: '#FFFFFF',
              borderColor: mode === 'latam' ? 'transparent' : 'rgba(255, 255, 255, 0.18)',
            }}
            className="group relative p-8 sm:p-9 rounded-[32px] border transition-all duration-300 flex flex-col justify-between min-h-[380px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white pt-2">
                {mode === 'latam' && coreServices[1].titleEs ? coreServices[1].titleEs : coreServices[1].title}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#F6D332]">
                {mode === 'latam' && coreServices[1].taglineEs ? coreServices[1].taglineEs : coreServices[1].tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
                {mode === 'latam' && coreServices[1].descriptionEs ? coreServices[1].descriptionEs : coreServices[1].description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white">
              <span>{t.services.viewScope}</span>
              <span className="text-base group-hover:translate-x-1.5 transition-transform text-[#F6D332]">→</span>
            </div>
          </div>

          {/* Card 4: Servicio 03 (Design Systems & Tokens) */}
          <div
            onClick={() => setSelectedService(coreServices[2])}
            style={{
              backgroundColor: mode === 'latam' ? '#1E4BB8' : '#1A1A1A',
              color: '#FFFFFF',
              borderColor: mode === 'latam' ? 'transparent' : 'rgba(255, 255, 255, 0.18)',
            }}
            className="group relative p-8 sm:p-9 rounded-[32px] border transition-all duration-300 flex flex-col justify-between min-h-[380px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white pt-2">
                {mode === 'latam' && coreServices[2].titleEs ? coreServices[2].titleEs : coreServices[2].title}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#D4FF32]">
                {mode === 'latam' && coreServices[2].taglineEs ? coreServices[2].taglineEs : coreServices[2].tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
                {mode === 'latam' && coreServices[2].descriptionEs ? coreServices[2].descriptionEs : coreServices[2].description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white">
              <span>{t.services.viewScope}</span>
              <span className="text-base group-hover:translate-x-1.5 transition-transform text-[#D4FF32]">→</span>
            </div>
          </div>

          {/* Card 5: FOTO (Sin texto, macro de tokens y diseño con SVG lineal que se dibuja/desdibuja al hover) */}
          <div
            data-cursor="explore"
            onMouseEnter={() => setHoveredPhoto2(true)}
            onMouseLeave={() => setHoveredPhoto2(false)}
            className="group relative rounded-[32px] overflow-hidden border border-white/20 bg-black min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={photo2}
              alt="Design tokens specimen scale and layout structure"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 opacity-85"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Dark gradient base to give contrast to line animation */}
            <div className="absolute inset-0 bg-black/35 pointer-events-none transition-opacity duration-500 group-hover:bg-black/55" />

            {/* Linear SVG Overlay that draws on hover and undraws on leave */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full pointer-events-none p-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric Design Token Circles */}
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

              {/* Crosshair Alignment Guides */}
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

              {/* Angle Brackets on Corners */}
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

              {/* Central Token Dot */}
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

          {/* Card 6: Servicio 04 (Interaction & Motion Design) */}
          <div
            onClick={() => setSelectedService(coreServices[3])}
            style={{
              backgroundColor: mode === 'latam' ? '#EE9E18' : '#1A1A1A',
              color: '#FFFFFF',
              borderColor: mode === 'latam' ? 'transparent' : 'rgba(255, 255, 255, 0.18)',
            }}
            className="group relative p-8 sm:p-9 rounded-[32px] border transition-all duration-300 flex flex-col justify-between min-h-[380px] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white pt-2">
                {mode === 'latam' && coreServices[3].titleEs ? coreServices[3].titleEs : coreServices[3].title}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#F6D332]">
                {mode === 'latam' && coreServices[3].taglineEs ? coreServices[3].taglineEs : coreServices[3].tagline}
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/85">
                {mode === 'latam' && coreServices[3].descriptionEs ? coreServices[3].descriptionEs : coreServices[3].description}
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white">
              <span>{t.services.viewScope}</span>
              <span className="text-base group-hover:translate-x-1.5 transition-transform text-[#F6D332]">→</span>
            </div>
          </div>
        </div>

        {/* Bottom Collaboration Callout: Updated with matching MagneticPillButton */}
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
            {isLatam ? 'Hablar de un Proyecto' : 'Discuss a Project'}
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
