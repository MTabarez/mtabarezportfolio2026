import React, { useState, useEffect } from 'react';
import { SiteMode, AccessibilitySettings } from './types';
import { ColorVisionFilters } from './components/ColorVisionFilters';
import { CustomCursor } from './components/CustomCursor';
import { IntroModal } from './components/IntroModal';
import { Header } from './components/Header';
import { FloatingMenu } from './components/FloatingMenu';
import { AccessibilityPanel } from './components/AccessibilityPanel';
import { Hero } from './components/Hero';
import { WordHoverEffect } from './components/WordHoverEffect';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { TiltedCards } from './components/TiltedCards';
import { ScrollLockSection } from './components/ScrollLockSection';
import { FloatingImageSection } from './components/FloatingImageSection';
import { Testimonials } from './components/Testimonials';
import { AboutSection } from './components/AboutSection';
import { DraggablePersonalCard } from './components/DraggablePersonalCard';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

const DEFAULT_A11Y: AccessibilitySettings = {
  textSize: 'normal',
  contrast: 'normal',
  colorVision: 'default',
  motion: 'full',
  theme: 'light',
};

export default function App() {
  // Mode state: 'international' or 'latam'
  const [mode, setMode] = useState<SiteMode>(() => {
    const saved = localStorage.getItem('marianne_portfolio_mode');
    return saved === 'latam' ? 'latam' : 'international';
  });

  // Intro choice modal: shows on first visit or when voluntarily reopened
  const [isIntroOpen, setIsIntroOpen] = useState<boolean>(() => {
    return localStorage.getItem('marianne_portfolio_mode_chosen') !== 'true';
  });

  // Floating drawer menu
  const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);

  // Accessibility panel
  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);

  // CV modal
  const [isCVOpen, setIsCVOpen] = useState(false);

  // Accessibility settings
  const [a11ySettings, setA11ySettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('marianne_a11y_settings');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return DEFAULT_A11Y;
  });

  // Sync mode and accessibility to DOM attributes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-mode', mode);
    localStorage.setItem('marianne_portfolio_mode', mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', a11ySettings.theme);
    root.setAttribute('data-text-size', a11ySettings.textSize);
    root.setAttribute('data-contrast', a11ySettings.contrast);
    root.setAttribute('data-vision', a11ySettings.colorVision);
    root.setAttribute('data-motion', a11ySettings.motion);

    localStorage.setItem('marianne_a11y_settings', JSON.stringify(a11ySettings));
  }, [a11ySettings]);

  // Mode selection handler from intro or header
  const handleSelectMode = (newMode: SiteMode) => {
    setMode(newMode);
    localStorage.setItem('marianne_portfolio_mode', newMode);
    localStorage.setItem('marianne_portfolio_mode_chosen', 'true');
    setIsIntroOpen(false);
  };

  const handleResetA11y = () => {
    setA11ySettings(DEFAULT_A11Y);
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-black selection:text-white">
      {/* Hidden SVG Filters for color vision adjustments */}
      <ColorVisionFilters />

      {/* Desktop Contextual Cursor */}
      <CustomCursor reducedMotion={a11ySettings.motion === 'reduced'} />

      {/* Art-Directed Intro Choice Modal */}
      <IntroModal
        isOpen={isIntroOpen}
        onSelectMode={handleSelectMode}
        onClose={() => setIsIntroOpen(false)}
        isInitialEntrance={localStorage.getItem('marianne_portfolio_mode_chosen') !== 'true'}
      />

      {/* Top Header with Spanish language toggle */}
      <Header
        activeMode={mode}
        onToggleMode={handleSelectMode}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
        onOpenMenu={() => setIsFloatingMenuOpen(true)}
      />

      {/* Floating Card Menu Drawer */}
      <FloatingMenu
        isOpen={isFloatingMenuOpen}
        onClose={() => setIsFloatingMenuOpen(false)}
        activeMode={mode}
        onToggleMode={handleSelectMode}
        onOpenCV={() => setIsCVOpen(true)}
        onOpenAccessibility={() => setIsAccessibilityOpen(true)}
      />

      {/* Accessibility Configuration Panel */}
      <AccessibilityPanel
        isOpen={isAccessibilityOpen}
        onClose={() => setIsAccessibilityOpen(false)}
        settings={a11ySettings}
        onUpdateSettings={setA11ySettings}
        onReset={handleResetA11y}
      />

      {/* Full Resume / CV Modal */}
      <CVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      {/* Main Content Area with dynamic background color rhythm */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero Section (Warm Base Background) */}
        <div className="bg-[var(--bg-main)]">
          <Hero
            mode={mode}
            onExploreWork={scrollToWork}
            onContactClick={scrollToContact}
          />
        </div>

        {/* 2. Interactive Word Hover Effect */}
        <WordHoverEffect mode={mode} />

        {/* 3. Selected Work Projects Grid (Clean Gallery Canvas) */}
        <div className="bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-500">
          <Projects mode={mode} />
        </div>

        {/* 4. Services & Craft (SOLID HARD BACKGROUND BLOCK - as requested for dramatic rhythm) */}
        <div
          className={`transition-colors duration-500 ${
            mode === 'latam'
              ? 'bg-[#084232] text-white border-y border-[#084232]'
              : 'bg-[#121212] text-white border-y border-[#121212]'
          }`}
        >
          <Services mode={mode} onContactClick={scrollToContact} />
        </div>

        {/* 5. Guiding Principles Alignment on Scroll */}
        <div className="bg-[var(--bg-main)]">
          <TiltedCards mode={mode} />
        </div>

        {/* 6. Signature Case-Study Stepper Section (Scroll Lock Pin) */}
        <ScrollLockSection mode={mode} />

        {/* 7. Asymmetric Floating Image Breaking Container */}
        <div className="bg-[#FFFFFF] dark:bg-[#141414] transition-colors duration-500">
          <FloatingImageSection
            mode={mode}
            onExploreWork={scrollToWork}
          />
        </div>

        {/* 8. Focused About & Manifesto */}
        <div className="bg-[var(--bg-main)]">
          <AboutSection
            mode={mode}
            onOpenCV={() => setIsCVOpen(true)}
            onContactClick={scrollToContact}
          />
        </div>

        {/* 9. Interactive Staggered Testimonials */}
        <div className="bg-[#FFFFFF] dark:bg-[#121212] transition-colors duration-500">
          <Testimonials mode={mode} />
        </div>

        {/* 10. Draggable Personal Calling Card (Overlapping the Footer top border) */}
        <DraggablePersonalCard mode={mode} />
      </main>

      {/* 11. Interactive High-Impact Footer with Striking Contact Form & Jumping Character */}
      <Footer
        mode={mode}
        onOpenCV={() => setIsCVOpen(true)}
        onReopenIntro={() => setIsIntroOpen(true)}
      />
    </div>
  );
}
