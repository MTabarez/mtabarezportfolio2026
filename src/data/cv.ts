import { ExperienceItem, EducationItem, CertificationItem } from '../types';

export const CV_DATA = {
  name: 'Marianne Tabarez Aristegui',
  title: 'Web & UX/UI Designer',
  email: 'mtabareza@gmail.com',
  phone: '+57 320 8228986',
  linkedin: 'https://linkedin.com/in/mtabareza',
  website: 'https://mariannetabarez.com',
  location: 'Chile / Remote (International)',
  summary:
    'UX/UI and Front-End Designer with 9+ years of experience designing and implementing responsive websites and e-commerce platforms. Skilled in translating business requirements into intuitive interfaces, collaborating with stakeholders, and delivering production-ready solutions for international clients across the US, Europe, and Latin America.',
  yearsOfExperience: '9+',
  experiences: [
    {
      period: '2020 — 2025',
      role: 'Senior Web UX/UI Designer',
      company: 'Tavano Team',
      location: 'US & Europe Clients (Remote)',
      bullets: [
        'Designed and implemented custom themes for BigCommerce and NetSuite for US and Europe clients, enhancing brand consistency and usability through human-centered design and UX best practices.',
        'Facilitated client discovery sessions to translate strategic goals into wireframes and interactive mockups, building stakeholder alignment and trust.',
        'Delivered knowledge-sharing sessions introducing new design techniques to peers, helping spread UX best practices within a team of 40+ people.',
        'Collaborated with the Content team to redesign corporate website, improving information architecture and user flow to deliver intuitive and accessible navigation experiences.',
      ],
    },
    {
      period: '2018 — 2020',
      role: 'Designer (UX / UI / Web)',
      company: 'Cincomedios',
      location: 'Regional Clients',
      bullets: [
        'Designed and built responsive websites using HTML, CSS, JavaScript, Bootstrap, and WordPress for regional clients, focusing on usability and cross-device consistency.',
        'Created email marketing campaigns and visual assets that enhanced brand perception and positively impacted client satisfaction.',
      ],
    },
    {
      period: '2016 — 2018',
      role: 'Graphic & Web Designer',
      company: 'Impulso Web',
      location: 'Regional Clients',
      bullets: [
        'Produced branding assets and designed responsive websites and email templates for local companies, enhancing online presence and conversion.',
        'Managed digital marketing banners and visual content across multiple concurrent client projects.',
      ],
    },
    {
      period: '2016 — 2018',
      role: 'Graphic Designer',
      company: 'Zero – Cloud Communications (USA)',
      location: 'United States (Remote)',
      bullets: [
        'Created layouts, digital banners, and marketing graphics for Salesforce-integrated phone systems, supporting US retargeting and acquisition campaigns.',
      ],
    },
  ] as ExperienceItem[],
  education: [
    {
      period: '2011 — 2017',
      degree: 'Bachelor of Arts',
      institution: 'Universidad de la República',
      location: 'Uruguay',
    },
    {
      period: '2018',
      degree: 'Web Development Certificate',
      institution: 'Plan Ceibal',
      location: 'Uruguay',
    },
  ] as EducationItem[],
  certifications: [
    {
      year: '2025',
      title: 'Python and Data Analysis Certificate',
      issuer: 'Guayerd / IBM',
    },
    {
      year: '2021 — 2022',
      title: 'UX/UI Certificate',
      issuer: 'Coderhouse',
    },
    {
      year: '2019',
      title: 'E-Commerce Certificate',
      issuer: 'Mercado Libre',
    },
  ] as CertificationItem[],
  languages: [
    { name: 'English', proficiency: 'Proficient / Professional' },
    { name: 'Spanish', proficiency: 'Native' },
    { name: 'Italian', proficiency: 'Basic' },
  ],
  competencies: {
    uxProduct: [
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Information Architecture',
      'Usability & Accessibility (WCAG)',
      'Iterative Design',
      'Discovery Sessions',
    ],
    uiVisual: [
      'Responsive Web Design',
      'Visual Hierarchy',
      'Design Systems',
      'High-Fidelity UI',
      'Figma & Adobe XD',
      'Design Tokens',
    ],
    technical: [
      'HTML5',
      'CSS3 & SASS',
      'JavaScript',
      'BigCommerce Themes',
      'NetSuite SuiteCommerce',
      'WordPress',
      'Git Workflow',
    ],
    workflow: [
      'Developer Handoff',
      'Cross-device Implementation',
      'Client Requirements Translation',
      'Production-ready Solutions',
      'Stakeholder Alignment',
    ],
  },
};
