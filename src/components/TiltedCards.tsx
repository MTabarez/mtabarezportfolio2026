import React from 'react';
import { SiteMode } from '../types';
import { Compass, Sparkles, Sliders, CheckCircle } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface TiltedCardsProps {
  mode: SiteMode;
}

export const TiltedCards: React.FC<TiltedCardsProps> = ({ mode }) => {
  const t = getTranslation(mode);

  const cards = mode === 'latam' ? [
    {
      title: 'Descubrimiento Centrado en Personas',
      kicker: '01',
      description: 'Escuchar antes de dibujar. Desglosar los objetivos reales de negocio y fricciones del usuario mediante sesiones estructuradas de descubrimiento y workshops con stakeholders.',
      latamColor: '#0D5C46',
      latamTextColor: '#FFFFFF',
      icon: Compass,
    },
    {
      title: 'Tokens de Diseño Escalables',
      kicker: '02',
      description: 'Construir bibliotecas de componentes en Figma y CSS basadas en tokens semánticos que eliminan ambigüedad y escalan sin fricción en los sprints de ingeniería.',
      latamColor: '#E85338',
      latamTextColor: '#FFFFFF',
      icon: Sliders,
    },
    {
      title: 'Usabilidad como Fundamento',
      kicker: '03',
      description: 'Jerarquía tipográfica semántica, contraste nítido y navegación accesible por teclado concebidas desde el primer wireframe.',
      latamColor: '#1E4BB8',
      latamTextColor: '#FFFFFF',
      icon: CheckCircle,
    },
    {
      title: 'Movimiento Táctil y Pulido',
      kicker: '04',
      description: 'Microinteracciones deliberadas que comunican el estado del sistema con claridad, sin adornos innecesarios ni impacto en el rendimiento.',
      latamColor: '#EE9E18',
      latamTextColor: '#121212',
      icon: Sparkles,
    },
  ] : [
    {
      title: 'Human-First Discovery',
      kicker: '01',
      description: 'Listening before drawing. Unpacking real client goals and user friction through structured discovery sessions and stakeholder workshops.',
      latamColor: '#0D5C46',
      latamTextColor: '#FFFFFF',
      icon: Compass,
    },
    {
      title: 'Scalable Design Tokens',
      kicker: '02',
      description: 'Engineering resilient design systems in Figma and CSS that eliminate ambiguity and scale cleanly across engineering sprints.',
      latamColor: '#E85338',
      latamTextColor: '#FFFFFF',
      icon: Sliders,
    },
    {
      title: 'Usability as Foundation',
      kicker: '03',
      description: 'Crafting semantic typography hierarchy, thoughtful contrast, and keyboard navigation from the very first wireframe.',
      latamColor: '#1E4BB8',
      latamTextColor: '#FFFFFF',
      icon: CheckCircle,
    },
    {
      title: 'Tactile Motion & Polish',
      kicker: '04',
      description: 'Deliberate micro-interactions that communicate system state clearly without decorative clutter or performance drag.',
      latamColor: '#EE9E18',
      latamTextColor: '#121212',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-[var(--bg-main)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-18">
          <h2 className="heading-1 text-[var(--text-primary)]">
            {t.principles.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">
            {t.principles.sub}
          </p>
        </div>

        {/* 4 Clean Strategic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            const bg = mode === 'latam' ? card.latamColor : 'var(--card-surface)';
            const text = mode === 'latam' ? card.latamTextColor : 'var(--text-primary)';
            const secondaryText = mode === 'latam'
              ? (card.latamTextColor === '#121212' ? '#2E2D2A' : 'rgba(255, 255, 255, 0.85)')
              : 'var(--text-secondary)';

            return (
              <div
                key={card.kicker}
                style={{
                  backgroundColor: bg,
                  color: text,
                  borderColor: mode === 'latam' ? 'transparent' : 'var(--card-border)',
                }}
                className="group relative p-8 sm:p-9 rounded-[32px] border shadow-xs hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default flex flex-col justify-between min-h-[340px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black opacity-80">
                      {card.kicker}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight">
                    {card.title}
                  </h3>

                  <p style={{ color: secondaryText }} className="mt-3 text-sm sm:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider opacity-75">
                  <span>{t.principles.tag}</span>
                  <span>✦</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
