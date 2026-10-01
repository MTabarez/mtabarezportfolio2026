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

  // Pure photographic images (NO TEXT on them as requested)
  const photo1 = '/src/assets/images/services_organic_aerial_1790817689369.jpg';
  const photo2 = '/src/assets/images/services_studio_craft_1790817700146.jpg';

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
          {/* Card 1: FOTO (Sin texto) */}
          <div
            data-cursor="explore"
            className="group relative rounded-[32px] overflow-hidden border border-white/20 bg-black min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={photo1}
              alt="Editorial design texture"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
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
              <div className="flex items-center justify-between w-full mb-6">
                <span className="text-2xl font-black text-[#D4FF32]">
                  {coreServices[0].number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                  {t.services.discipline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
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
              <div className="flex items-center justify-between w-full mb-6">
                <span className="text-2xl font-black text-[#F6D332]">
                  {coreServices[1].number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                  {t.services.discipline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
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
              <div className="flex items-center justify-between w-full mb-6">
                <span className="text-2xl font-black text-[#D4FF32]">
                  {coreServices[2].number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                  {t.services.discipline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
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

          {/* Card 5: FOTO (Sin texto) */}
          <div
            data-cursor="explore"
            className="group relative rounded-[32px] overflow-hidden border border-white/20 bg-black min-h-[380px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
          >
            <img
              src={photo2}
              alt="Editorial workspace craft"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
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
              <div className="flex items-center justify-between w-full mb-6">
                <span className="text-2xl font-black text-[#F6D332]">
                  {coreServices[3].number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/90">
                  {t.services.discipline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
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
            variant="accent"
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
