import React, { useState, useEffect, useRef } from 'react';
import { SiteMode } from '../types';
import { ArrowRight, ArrowLeft, Search, Layers, Layout, Sparkles } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface ScrollLockSectionProps {
  mode: SiteMode;
}

export const ScrollLockSection: React.FC<ScrollLockSectionProps> = ({ mode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = getTranslation(mode);

  const steps = mode === 'latam' ? [
    {
      stage: '01',
      title: 'Descubrimiento Estratégico y Arquitectura',
      subtitle: 'Mapeo de Modelos Mentales y Flujos de Usuario',
      description:
        'Escuchar antes de dibujar. Sesiones de descubrimiento con stakeholders multidisciplinarios para sintetizar requerimientos complejos en arquitectura de información limpia, flujos de navegación y wireframes funcionales.',
      metric: '40+ Diseñadores y PMs Alineados',
      tag: 'Descubrimiento y UX',
      icon: Search,
      previewTitle: 'Mapeo de Flujos y Journeys de Usuario',
      previewDetails: [
        'Workshops de alineación estratégica con clientes',
        'Definición de taxonomía y navegación facetada',
        'Pruebas de jerarquía y card sorting',
      ],
    },
    {
      stage: '02',
      title: 'Sistema de Diseño y Arquitectura de Tokens',
      subtitle: 'Ingeniería de Consistencia a Escala',
      description:
        'Construcción de bibliotecas de componentes basadas en tokens en Figma y CSS. Definición matemática espacial, emparejamientos de color semánticos, escalas de radio y variantes limpias de componentes.',
      metric: '100% Reusabilidad de Componentes',
      tag: 'Tokens y Variantes',
      icon: Layers,
      previewTitle: 'Fundación de Tokens en Figma y CSS',
      previewDetails: [
        'Pares automáticos de tokens para modo claro y oscuro',
        'Verificación de contraste y legibilidad',
        'Variantes de estado interactivo (hover, activo, focus)',
      ],
    },
    {
      stage: '03',
      title: 'Craft de Interfaz de Alta Fidelidad',
      subtitle: 'Pulido Táctil y Ritmo Editorial',
      description:
        'Dar vida a las interfaces con espacios en blanco generosos, tipografía nítida y microinteracciones intencionadas que comunican el estado del sistema sin saturación visual.',
      metric: '< 9s Velocidad en Tareas Críticas',
      tag: 'UI y Microinteracciones',
      icon: Layout,
      previewTitle: 'Pulido de Producción UI',
      previewDetails: [
        'Diales, switches y sliders táctiles',
        'Breakpoints responsivos fluidos',
        'Cero cambios de diseño inesperados (CLS) y carga veloz',
      ],
    },
    {
      stage: '04',
      title: 'Handoff de Ingeniería y Auditoría de Producción',
      subtitle: 'Cero Pérdida de Fidelidad a Código',
      description:
        'Colaboración estrecha con equipos de desarrollo para implementar temas pixel-perfect en BigCommerce, NetSuite y frameworks modernos. Validación de DOM real contra intención de diseño.',
      metric: '+34% Conversión Promedio',
      tag: 'Rigor de Implementación',
      icon: Sparkles,
      previewTitle: 'Despliegue Vivo en Producción',
      previewDetails: [
        'Paridad exacta de variables CSS con tokens de Figma',
        'Verificación completa de navegación por teclado',
        'Pruebas exhaustivas multidispositivo',
      ],
    },
  ] : [
    {
      stage: '01',
      title: 'Strategic Discovery & Architecture',
      subtitle: 'Unpacking Mental Models & Workflows',
      description:
        'Listening before drawing. Discovery sessions with cross-functional stakeholders synthesizing complex product requirements into clean information architecture, user flows, and wireframes.',
      metric: '40+ Designers & PMs Aligned',
      tag: 'Discovery & IA',
      icon: Search,
      previewTitle: 'User Flow & Journey Mapping',
      previewDetails: [
        'Stakeholder alignment workshops',
        'Faceted taxonomy definition',
        'Card sorting & hierarchy testing',
      ],
    },
    {
      stage: '02',
      title: 'Design System & Token Architecture',
      subtitle: 'Engineering Consistency at Scale',
      description:
        'Building token-driven component libraries in Figma and CSS. Defining spatial math, semantic color pairings, radius scales, and clean component variants that eliminate friction.',
      metric: '100% Component Reusability',
      tag: 'Tokens & Variants',
      icon: Layers,
      previewTitle: 'Figma Token Foundation',
      previewDetails: [
        'Automated dark & light mode token pairs',
        'High-contrast readability verification',
        'Interactive state variants (hover, active, focus)',
      ],
    },
    {
      stage: '03',
      title: 'High-Fidelity Interface Craft',
      subtitle: 'Tactile Polish & Editorial Rhythm',
      description:
        'Bringing interfaces to life with generous whitespace, crisp typography, and purposeful micro-interactions that communicate state without decorative clutter.',
      metric: '< 9s Core Task Speed',
      tag: 'UI & Micro-interactions',
      icon: Layout,
      previewTitle: 'Production UI Polish',
      previewDetails: [
        'Tactile dials, switches, and sliders',
        'Fluid responsive layout breakpoints',
        'Zero layout shifts & fast rendering',
      ],
    },
    {
      stage: '04',
      title: 'Developer Handoff & Production Audit',
      subtitle: 'Zero Translation Loss to Code',
      description:
        'Partnering with engineering to implement pixel-perfect themes in BigCommerce, NetSuite, and modern front-end frameworks. Validating real DOM output against design intent.',
      metric: '+34% Conversion Lift',
      tag: 'Implementation Rigor',
      icon: Sparkles,
      previewTitle: 'Living Production Deployment',
      previewDetails: [
        'Exact CSS variable parity with Figma tokens',
        'Complete keyboard navigation verification',
        'Cross-browser and cross-device testing',
      ],
    },
  ];

  // Scroll pin & step advancement effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 100 && rect.bottom >= windowHeight) {
        const totalScrollableDistance = rect.height - windowHeight;
        const scrolledDistance = -rect.top + 100;
        const progress = Math.min(Math.max(scrolledDistance / totalScrollableDistance, 0), 1);
        const targetStep = Math.min(Math.floor(progress * steps.length), steps.length - 1);
        setCurrentStep(targetStep);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  const current = steps[currentStep];
  const StepIcon = current.icon;

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <div
      ref={sectionRef}
      id="workflow"
      className="relative min-h-[220vh] bg-[var(--card-surface)] border-y border-[var(--card-border)] scroll-mt-20"
    >
      {/* Sticky Pinned Screen */}
      <div className="sticky top-16 md:top-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 w-full">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="heading-1 text-[var(--text-primary)]">
                {t.workflow.title}
              </h2>
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[var(--text-secondary)] mr-2 hidden sm:inline">
                {t.workflow.scrollHint}
              </span>
              <button
                onClick={prevStep}
                aria-label="Previous workflow stage"
                className="w-11 h-11 rounded-full border border-[var(--card-border)] bg-[var(--bg-main)] hover:bg-[#121212] hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextStep}
                aria-label="Next workflow stage"
                className="w-11 h-11 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] hover:opacity-90 flex items-center justify-center transition-opacity cursor-pointer shadow-xs"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {steps.map((s, index) => {
              const isActive = index === currentStep;
              return (
                <button
                  key={s.stage}
                  onClick={() => setCurrentStep(index)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? mode === 'latam'
                        ? 'bg-[#0D5C46] text-[#F6D332] border-[#0D5C46] shadow-md scale-[1.02]'
                        : 'bg-[#121212] text-white border-[#121212] shadow-md scale-[1.02]'
                      : 'bg-[var(--bg-main)] border-[var(--card-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black tracking-widest uppercase">
                      {mode === 'latam' ? `Etapa ${s.stage}` : `Stage ${s.stage}`}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#D4FF32] animate-ping" />}
                  </div>
                  <div className="font-extrabold text-xs sm:text-sm tracking-tight truncate">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Main Stage Presentation Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--bg-main)] p-8 sm:p-12 md:p-14 rounded-[36px] sm:rounded-[44px] border border-[var(--card-border)] shadow-xl transition-all duration-500">
            {/* Left: Narrative Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      backgroundColor: mode === 'latam' ? '#E85338' : 'var(--text-primary)',
                      color: mode === 'latam' ? '#FFFFFF' : 'var(--bg-main)',
                    }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                    {current.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  {current.title}
                </h3>

                <p className="mt-2 text-sm sm:text-base font-bold text-[var(--accent-main)]">
                  {current.subtitle}
                </p>

                <p className="mt-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                  {current.description}
                </p>
              </div>

              {/* Progress & Milestone */}
              <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase font-bold text-[var(--text-secondary)]">
                    {t.workflow.outcome}
                  </span>
                  <span
                    style={{
                      backgroundColor: mode === 'latam' ? '#0D5C46' : '#121212',
                      color: mode === 'latam' ? '#F6D332' : '#D4FF32',
                    }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide"
                  >
                    {current.metric}
                  </span>
                </div>

                <div className="text-xs font-bold text-[var(--text-secondary)]">
                  {currentStep + 1} {t.workflow.stepOf} {steps.length}
                </div>
              </div>
            </div>

            {/* Right: Graphic Visual Preview */}
            <div className="lg:col-span-5 relative">
              <div className="p-6 sm:p-8 rounded-[28px] border border-[var(--card-border)] bg-[var(--card-surface)] shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--card-border)] mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t.workflow.preview}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <h4 className="font-extrabold text-lg text-[var(--text-primary)] mb-4">
                  {current.previewTitle}
                </h4>

                <ul className="space-y-3">
                  {current.previewDetails.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-semibold text-[var(--text-secondary)]"
                    >
                      <span className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-[var(--accent-main)] shrink-0">
                        {idx + 1}
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress Bar */}
                <div className="mt-8 pt-4 border-t border-[var(--card-border)]">
                  <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      style={{
                        width: `${((currentStep + 1) / steps.length) * 100}%`,
                        backgroundColor: mode === 'latam' ? '#E85338' : 'var(--text-primary)',
                      }}
                      className="h-full rounded-full transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
