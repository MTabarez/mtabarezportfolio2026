export type SiteMode = 'international' | 'latam';

export type TextSize = 'normal' | 'large' | 'xlarge';
export type ContrastMode = 'normal' | 'high';
export type ColorVision = 'default' | 'protanopia' | 'deuteranopia' | 'tritanopia';
export type MotionPreference = 'full' | 'reduced';
export type ThemeMode = 'light' | 'dark';

export interface AccessibilitySettings {
  textSize: TextSize;
  contrast: ContrastMode;
  colorVision: ColorVision;
  motion: MotionPreference;
  theme: ThemeMode;
}

export interface ProjectResult {
  metric: string;
  label: string;
  detail: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  titleEs?: string;
  subtitle: string;
  subtitleEs?: string;
  category: string;
  categoryEs?: string;
  year: string;
  role: string;
  roleEs?: string;
  summary: string;
  summaryEs?: string;
  deliverables: string[];
  deliverablesEs?: string[];
  tools: string[];
  image: string;
  imageAlt: string;
  layoutType: 'wide' | 'split' | 'vertical' | 'accent' | 'imageOnly';
  accentColor?: string;
  latamColor?: string;
  badge?: string;
  liveUrl?: string;
  clientUrl?: string;
  // Brave People inspired results & improvements structure
  results: ProjectResult[];
  improvements: string[];
  improvementsEs?: string[];
  caseStudy: {
    client: string;
    timeline: string;
    challenge: string;
    challengeEs?: string;
    uxApproach: string[];
    uxApproachEs?: string[];
    solution: string;
    solutionEs?: string;
    impact: string[];
    impactEs?: string[];
    tags: string[];
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleEs?: string;
  tagline: string;
  taglineEs?: string;
  description: string;
  descriptionEs?: string;
  skills: string[];
  skillsEs?: string[];
  latamColor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  quoteEs?: string;
  author: string;
  role: string;
  organization: string;
  location?: string;
  accent?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  location?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  category: string;
}
