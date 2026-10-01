import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'university-of-virginia',
    number: '01',
    title: 'University of Virginia (UVA)',
    titleEs: 'Universidad de Virginia (UVA)',
    subtitle: 'Unified Campus Digital Experience & Merchandise E-Commerce',
    subtitleEs: 'Experiencia Digital Universitaria Unificada y E-Commerce',
    category: 'Higher Ed & Enterprise E-Commerce',
    categoryEs: 'Educación Superior y E-Commerce Enterprise',
    year: '2024',
    role: 'Lead UX/UI Designer (Tavano Team)',
    roleEs: 'Diseñadora UX/UI Principal (Tavano Team)',
    summary:
      'Enterprise digital store redesign and multi-audience information architecture for one of America’s premier universities, unifying student, alumni, and athletic fans under a seamless, high-converting digital storefront.',
    summaryEs:
      'Rediseño integral de la tienda digital y arquitectura de información para una de las universidades más prestigiosas de EE.UU., unificando la experiencia de estudiantes, exalumnos y fanáticos.',
    deliverables: [
      'BigCommerce & NetSuite Theme Architecture',
      'Mobile-First Navigation & Faceted Catalog UX',
      'Unified Athletics & Academic Design Tokens',
      'High-Conversion Checkout Flow',
    ],
    deliverablesEs: [
      'Arquitectura de Temas BigCommerce y NetSuite',
      'Navegación Mobile-First y Filtrado Facetado',
      'Tokens de Diseño Atléticos y Académicos',
      'Flujo de Checkout de Alta Conversión',
    ],
    tools: ['Figma', 'BigCommerce Stencil', 'NetSuite SuiteCommerce', 'Design Tokens', 'Prototyping'],
    image: '/src/assets/images/project_uva_portal_1790825391354.jpg',
    imageAlt: 'University of Virginia digital web portal and merchandise e-commerce store interface on laptop',
    layoutType: 'wide',
    accentColor: '#E57200',
    latamColor: '#0D5C46',
    badge: 'Top Featured Case Study',
    clientUrl: 'https://tavanoteam.com/portfolio/university-of-virginia/',
    results: [
      {
        metric: '+48%',
        label: 'Mobile Conversion Lift',
        detail: 'Redesigned mobile touchpoints resulted in a massive surge in completed student and alumni checkout sessions.',
      },
      {
        metric: '2.8x',
        label: 'Catalog Filtering Velocity',
        detail: 'Faceted search and category taxonomy overhaul slashed product discovery time from 38s to 13s.',
      },
      {
        metric: '-62%',
        label: 'Cart Abandonment Drop',
        detail: 'Streamlined single-page accordion checkout reduced transaction drop-off during peak back-to-school surges.',
      },
    ],
    improvements: [
      'Eliminated multi-step friction by consolidating student discounts, alumni credentials, and gift card validation into a frictionless single-view checkout.',
      'Rebuilt product grid with instant SKU variant previews (colorways, athletic department, sizes) without forcing page reloads.',
      'Established modular design token library honoring strict University brand guidelines while achieving WCAG 2.2 AA contrast compliance.',
      'Integrated real-time NetSuite inventory feeds preventing stockout frustration during championship game launches.',
    ],
    improvementsEs: [
      'Eliminación de fricción al consolidar descuentos estudiantiles y validación de membresías en un checkout de vista única.',
      'Reconstrucción de la grilla de productos con previsualización instantánea de variantes (colores, tallas) sin recargar la página.',
      'Creación de una biblioteca modular de tokens de diseño respetando las guías de marca institucional y contrastes accesibles.',
      'Integración de inventario en tiempo real con NetSuite para evitar frustración por falta de stock en fechas de alta demanda.',
    ],
    caseStudy: {
      client: 'University of Virginia / Tavano Team',
      timeline: '5 Months · Discovery to Production Launch',
      challenge:
        'The legacy UVA campus shop suffered from high cart abandonment, disjointed mobile navigation, and fragmented merchandise categorizations across collegiate apparel, textbooks, and fan gear. Mobile visitors struggled with slow facet loading and confusing account sign-ins.',
      challengeEs:
        'La tienda anterior de UVA sufría de alto abandono de carrito, navegación móvil desarticulada y categorización confusa entre indumentaria, libros y artículos deportivos.',
      uxApproach: [
        'Conducted stakeholder discovery workshops with campus bookstore managers and collegiate licensing teams to map buyer personas (alumni, incoming freshmen, parents).',
        'Structured modular information architecture separating seasonal athletic collections from permanent university department supplies.',
        'Prototyped and tested sticky quick-add cart drawers and thumb-zone navigation optimized for students browsing on iOS and Android.',
        'Standardized typography scales and color tokens between BigCommerce frontend and NetSuite backend logic.',
      ],
      uxApproachEs: [
        'Workshops de descubrimiento con directivos de la tienda del campus para mapear perfiles de compra (exalumnos, estudiantes, familias).',
        'Arquitectura modular que separa colecciones deportivas de temporada del material académico permanente.',
        'Prototipado interactivo y pruebas de usuario en móvil optimizadas para navegación con una sola mano.',
        'Estandarización de tokens de diseño entre el frontend de BigCommerce y el backend de NetSuite.',
      ],
      solution:
        'A high-performance, responsive e-commerce experience built on BigCommerce and NetSuite, featuring clear visual typography, rapid faceted filtering, and unified checkout mechanics.',
      solutionEs:
        'Una experiencia e-commerce de alto rendimiento sobre BigCommerce y NetSuite con navegación táctil, filtrado facetado veloz y checkout sin fricción.',
      impact: [
        '+48% mobile checkout conversion within the first 90 days post-launch.',
        'Zero translation loss between Figma component variants and BigCommerce Stencil templates.',
        'Featured by Tavano Team as a benchmark higher-education digital transformation.',
      ],
      impactEs: [
        '+48% de conversión en compras móviles durante los primeros 90 días post-lanzamiento.',
        'Cero pérdida de fidelidad entre los componentes de Figma y los templates de BigCommerce Stencil.',
        'Destacado por Tavano Team como caso de éxito en transformación digital para educación superior.',
      ],
      tags: ['University UX', 'BigCommerce', 'NetSuite Theme', 'Results-Driven', 'Design Systems'],
    },
  },

  {
    id: 'watkins-wellness',
    number: '02',
    title: 'Watkins Wellness',
    titleEs: 'Watkins Wellness',
    subtitle: 'Luxury Hydrotherapy Customizer & Global Dealer E-Commerce',
    subtitleEs: 'Personalizador de Hidroterapia de Lujo y Plataforma Global de Distribuidores',
    category: 'Luxury Consumer & B2B/B2C E-Commerce',
    categoryEs: 'Consumo de Lujo y E-Commerce B2B/B2C',
    year: '2024',
    role: 'Senior Web & UX/UI Designer (Tavano Team)',
    roleEs: 'Diseñadora Senior Web y UX/UI (Tavano Team)',
    summary:
      'Premium digital spa configurator and multi-tier e-commerce ecosystem for the world’s leading hot tub manufacturer, translating tactile hydrotherapy options into an intuitive visual customizer.',
    summaryEs:
      'Configurador digital de spas de lujo y plataforma de e-commerce multicurrency para el fabricante líder mundial de hidromasajes, conectando compradores con distribuidores autorizados.',
    deliverables: [
      'Interactive 360° Spa Configurator UI',
      'Dealer Locator & Direct Lead Routing Flow',
      'High-Fidelity Product Comparison Matrix',
      'NetSuite SuiteCommerce Custom Theme',
    ],
    deliverablesEs: [
      'Configurador Interactivo de Spas',
      'Localizador de Distribuidores y Enrutamiento de Leads',
      'Matriz de Comparación de Modelos de Alta Fidelidad',
      'Tema Personalizado en NetSuite SuiteCommerce',
    ],
    tools: ['Figma', 'NetSuite SuiteCommerce', 'Interactive Prototyping', 'Design Systems'],
    image: '/src/assets/images/project_watkins_wellness_1790825404356.jpg',
    imageAlt: 'Watkins Wellness luxury spa hydrotherapy digital configurator interface on tablet display',
    layoutType: 'split',
    accentColor: '#007A87',
    latamColor: '#E85338',
    badge: 'High-Impact Customizer',
    clientUrl: 'https://tavanoteam.com/portfolio/watkins/',
    results: [
      {
        metric: '+54%',
        label: 'Dealer Lead Generation',
        detail: 'The redesigned interactive spa builder generated a record spike in qualified local dealership consultations.',
      },
      {
        metric: '3.4x',
        label: 'Time on Product Page',
        detail: 'Tactile step-by-step customizer (seating capacity, jet configurations, lighting) engaged prospective buyers deeply.',
      },
      {
        metric: '-41%',
        label: 'Support Inquiry Deflection',
        detail: 'Transparent dimensional diagrams and technical specification comparison matrix resolved pre-purchase doubts.',
      },
    ],
    improvements: [
      'Replaced static brochure PDF downloads with an intuitive 4-step digital configurator allowing buyers to preview finishes, jet counts, and cover options.',
      'Designed frictionless zip-code geo-routing matching configured quotes directly to certified regional dealers with one tap.',
      'Engineered an interactive model comparison tool highlighting energy efficiency, electrical specs, and water care systems side by side.',
      'Delivered a serene, water-inspired visual language with deep aquatic tones and tactile micro-animations.',
    ],
    improvementsEs: [
      'Reemplazo de folletos PDF estáticos por un configurador digital de 4 pasos para personalizar acabados y equipamiento.',
      'Enrutamiento automático por código postal para conectar cotizaciones configuradas con el distribuidor local certificado.',
      'Herramienta interactiva de comparación de modelos mostrando eficiencia energética y especificaciones técnicas en paralelo.',
      'Diseño visual sereno inspirado en el agua con microinteracciones táctiles y alto contraste.',
    ],
    caseStudy: {
      client: 'Watkins Wellness / Tavano Team',
      timeline: '4 Months · UX Research to Frontend Implementation',
      challenge:
        'Purchasing a luxury spa involves high emotional investment and complex technical prerequisites (foundation pads, electrical lines, water capacity). Watkins customers were overwhelmed by specifications and bounced before contacting local dealers.',
      challengeEs:
        'La compra de un spa de lujo requiere alta inversión y requisitos técnicos complejos. Los clientes se sentían abrumados por las fichas técnicas y abandonaban antes de consultar a un distribuidor.',
      uxApproach: [
        'Mapped the multi-channel buyer journey from initial aspiration to backyard measurement and showroom delivery.',
        'Created a progressive disclosure architecture: high-level wellness benefits first, followed by granular engineering specs on demand.',
        'Designed interactive visual dials for jet power, temperature ranges, and ambient lighting states.',
      ],
      uxApproachEs: [
        'Mapeo del viaje de compra desde la inspiración inicial hasta la visita al showroom del distribuidor.',
        'Arquitectura de divulgación progresiva: beneficios de bienestar primero, especificaciones técnicas a demanda.',
        'Controles interactivos táctiles para previsualizar potencia de jets e iluminación ambiente.',
      ],
      solution:
        'A sophisticated digital experience on NetSuite SuiteCommerce merging luxury editorial storytelling with high-utility product customization and instant dealer connectivity.',
      solutionEs:
        'Una experiencia digital en NetSuite SuiteCommerce que combina narrativa visual de lujo con personalización de producto y conexión inmediata con distribuidores.',
      impact: [
        '+54% surge in qualified quote requests submitted to certified dealership network.',
        'Recognized by Watkins executive leadership as their most effective digital customer acquisition asset.',
      ],
      impactEs: [
        '+54% de incremento en solicitudes de cotización calificadas para la red de distribuidores.',
        'Reconocido por la dirección de Watkins como su principal activo de adquisición digital.',
      ],
      tags: ['Luxury UX', 'Product Configurator', 'NetSuite', 'Lead Generation', 'Wellness'],
    },
  },

  {
    id: 'sunshine-supply',
    number: '03',
    title: 'Sunshine Supply',
    titleEs: 'Sunshine Supply',
    subtitle: 'High-Volume Architectural Building Materials B2B Platform',
    subtitleEs: 'Plataforma B2B para Materiales Arquitectónicos de Construcción',
    category: 'Enterprise B2B E-Commerce & Systems',
    categoryEs: 'E-Commerce B2B Enterprise y Sistemas',
    year: '2023',
    role: 'Senior Web & UX/UI Designer (Tavano Team)',
    roleEs: 'Diseñadora Senior Web y UX/UI (Tavano Team)',
    summary:
      'Robust B2B commerce platform and multi-tier contractor portal for construction and waterproofing materials, enabling commercial contractors to order bulk job-site materials with instant tier pricing and specification sheets.',
    summaryEs:
      'Plataforma de comercio B2B y portal de contratistas para materiales de construcción y sellado, facilitando pedidos mayoristas con precios por volumen y fichas técnicas al instante.',
    deliverables: [
      'B2B Quick-Order Bulk Matrix',
      'Technical Data Sheet (TDS) Instant Downloader',
      'Tiered Contractor Account Dashboard',
      'Custom NetSuite SuiteCommerce Implementation',
    ],
    deliverablesEs: [
      'Matriz de Pedido Rápido por Volumen B2B',
      'Descargador Instantáneo de Fichas Técnicas (TDS)',
      'Panel de Cuenta para Contratistas por Niveles',
      'Implementación Personalizada en NetSuite SuiteCommerce',
    ],
    tools: ['Figma', 'NetSuite SuiteCommerce', 'B2B UX', 'Information Architecture'],
    image: '/src/assets/images/project_sunshine_supply_1790825415084.jpg',
    imageAlt: 'Sunshine Supply construction B2B e-commerce platform interface on desktop',
    layoutType: 'accent',
    accentColor: '#FFB81C',
    latamColor: '#1E4BB8',
    badge: 'B2B Velocity Benchmark',
    clientUrl: 'https://tavanoteam.com/portfolio/sunshine-supply/',
    results: [
      {
        metric: '+76%',
        label: 'Digital Reorder Volume',
        detail: 'Commercial contractors shifted repeat telephone and fax reorders directly into the 1-click digital portal.',
      },
      {
        metric: '< 4s',
        label: 'Bulk SKU Checkout Flow',
        detail: 'CSV spreadsheet upload and rapid SKU matrix reduced multi-thousand dollar order creation to seconds.',
      },
      {
        metric: '100%',
        label: 'Spec Sheet Compliance',
        detail: 'OSHA and architectural compliance documentation automatically bundled with order confirmation receipts.',
      },
    ],
    improvements: [
      'Engineered a Quick Order table allowing contractors to type SKUs or paste CSV manifests with instant live pricing updates.',
      'Architected dedicated account hierarchy for project managers, accounting teams, and job-site superintendents with granular approval permissions.',
      'Created one-click Technical Data Sheet (TDS) and Safety Data Sheet (SDS) PDF access right from catalog search results.',
      'Streamlined branch pickup vs job-site freight freight delivery selection with dynamic dispatch schedules.',
    ],
    improvementsEs: [
      'Desarrollo de tabla de pedido rápido para ingresar códigos SKU o pegar archivos CSV con precios actualizados al instante.',
      'Arquitectura de cuentas B2B con roles y permisos específicos para compras, finanzas y jefes de obra.',
      'Acceso en un solo clic a fichas técnicas (TDS) y de seguridad (SDS) desde los resultados de búsqueda.',
      'Selección optimizada de retiro en sucursal versus flete directo a la obra con horarios dinámicos.',
    ],
    caseStudy: {
      client: 'Sunshine Supply / Tavano Team',
      timeline: '4 Months · Enterprise Discovery to Go-Live',
      challenge:
        'Sunshine Supply’s commercial contractors placed frequent bulk orders under tight job-site deadlines. The legacy ordering process required manual phone calls, spreadsheet emails, and paper invoices, creating bottleneck delays.',
      challengeEs:
        'Los contratistas realizaban pedidos mayoristas bajo plazos estrictos de obra mediante llamadas telefónicas y faxes, generando demoras en la entrega de materiales.',
      uxApproach: [
        'Observed contractor ordering workflows on active job sites and in distribution warehouse pick-up bays.',
        'Prioritized speed, data density, and keyboard accessibility for rapid order entry on tablets and rugged field laptops.',
        'Designed high-contrast typographic layouts legible under bright outdoor construction conditions.',
      ],
      uxApproachEs: [
        'Observación directa de los flujos de compra de contratistas en obras activas y centros de distribución.',
        'Priorización de velocidad de tipeo, densidad de datos y atajos de teclado para compras rápidas en terreno.',
        'Tipografía de alto contraste legible bajo luz solar directa en obra.',
      ],
      solution:
        'A powerhouse B2B web application powered by NetSuite SuiteCommerce, turning hours of tedious manual paperwork into lightning-fast digital reorders.',
      solutionEs:
        'Una potente plataforma B2B sobre NetSuite SuiteCommerce que transformó horas de gestión manual en compras digitales en segundos.',
      impact: [
        '+76% migration of recurring offline contractor accounts to digital self-service within 6 months.',
        'Significant decrease in customer service order entry overhead.',
      ],
      impactEs: [
        '+76% de migración de pedidos manuales al portal de autoservicio digital en 6 meses.',
        'Reducción drástica en la carga de atención al cliente para carga de pedidos.',
      ],
      tags: ['B2B E-Commerce', 'NetSuite', 'Bulk Ordering', 'Industrial UX', 'Architecture'],
    },
  },

  {
    id: 'april-cornell',
    number: '04',
    title: 'April Cornell',
    titleEs: 'April Cornell',
    subtitle: 'Artisanal Botanical Fashion & Heritage Home Textiles E-Commerce',
    subtitleEs: 'Moda Botánica Artesanal y Textiles de Hogar E-Commerce',
    category: 'Lifestyle Fashion & Heritage E-Commerce',
    categoryEs: 'Moda, Estilo de Vida y Textiles',
    year: '2023',
    role: 'Senior Web & UX/UI Designer (Tavano Team)',
    roleEs: 'Diseñadora Senior Web y UX/UI (Tavano Team)',
    summary:
      'Artistic e-commerce redesign for April Cornell’s beloved vintage-inspired botanical fashion and handcrafted table linens, balancing intricate artisanal textile storytelling with modern e-commerce velocity.',
    summaryEs:
      'Rediseño e-commerce para la marca de moda botánica artesanal y textiles del hogar April Cornell, combinando narrativa estética vintage con una experiencia de compra fluida y moderna.',
    deliverables: [
      'Artisanal Editorial Lookbook UI',
      'Fabric Swatch & Texture Zoom Interaction',
      'Complete The Look Cross-Selling Modules',
      'Responsive BigCommerce Stencil Custom Theme',
    ],
    deliverablesEs: [
      'Lookbook Editorial Interactivo',
      'Zoom de Texturas y Muestrarios de Telas',
      'Módulos de Venta Cruzada "Completa el Look"',
      'Tema Personalizado en BigCommerce Stencil',
    ],
    tools: ['Figma', 'BigCommerce Stencil', 'Editorial Art Direction', 'Responsive Design'],
    image: '/src/assets/images/project_april_cornell_1790825425127.jpg',
    imageAlt: 'April Cornell artisanal floral lifestyle fashion e-commerce storefront on desktop display',
    layoutType: 'split',
    accentColor: '#C45D76',
    latamColor: '#EE9E18',
    badge: 'Artisanal Editorial Showcase',
    clientUrl: 'https://tavanoteam.com/portfolio/april-cornell/',
    results: [
      {
        metric: '+38%',
        label: 'Average Order Value (AOV)',
        detail: 'Dynamic "Set the Table" and "Complete the Look" bundling modules inspired customers to purchase coordinated collections.',
      },
      {
        metric: '+45%',
        label: 'Mobile Checkout Completion',
        detail: 'Replaced cramped multi-step forms with a fluid, thumb-friendly checkout flow.',
      },
      {
        metric: '2.1x',
        label: 'Catalog Exploration Depth',
        detail: 'High-resolution textile zoom and fabric swatch previews kept loyal collectors engaged longer.',
      },
    ],
    improvements: [
      'Designed an immersive digital lookbook allowing customers to click directly on table settings or outfits to add individual pieces to their cart.',
      'Introduced high-definition macro fabric zoom so collectors can inspect handmade embroidery, screen-printed floras, and linen weaves.',
      'Optimized category browsing with soft earthy filters (Color Palette, Season, Pattern, Dining vs Apparel) honoring the brand’s warmth.',
      'Revamped the mobile header and navigation drawer with generous tap targets and fluid visual search.',
    ],
    improvementsEs: [
      'Diseño de un lookbook interactivo donde los clientes pueden hacer clic en cualquier prenda o mantel para comprar el conjunto.',
      'Implementación de zoom de tela en ultra alta definición para apreciar bordados artesanales y texturas de lino.',
      'Filtros de catálogo intuitivos por paleta de color, temporada y estilo que celebran la calidez de la marca.',
      'Modernización del menú móvil con áreas táctiles generosas y búsqueda visual rápida.',
    ],
    caseStudy: {
      client: 'April Cornell / Tavano Team',
      timeline: '3.5 Months · Brand Translation to BigCommerce Launch',
      challenge:
        'April Cornell’s dedicated audience cherishes the emotional story of hand-painted floral prints. Their previous web store felt rigid and corporate, flattening the beauty of their products and delivering poor mobile navigation.',
      challengeEs:
        'La comunidad de April Cornell adora la historia artesanal de sus estampados florales. La tienda anterior se sentía fría y rígida, deslucía la belleza de las telas y dificultaba la compra en celular.',
      uxApproach: [
        'Immersed in April Cornell’s archive of botanical sketches, watercolors, and textile patterns.',
        'Crafted a warm, paper-and-linen visual aesthetic using organic curves, delicate typography, and generous negative space.',
        'Engineered responsive bundle cards allowing customers to order napkins, tablecloths, and runners together without leaving the page.',
      ],
      uxApproachEs: [
        'Inmersión en el archivo histórico de acuarelas y estampados botánicos de April Cornell.',
        'Diseño estético cálido tipo papel y lino con curvas suaves y tipografía refinada.',
        'Módulos modulares para encargar manteles, servilletas y caminos de mesa coordinados en un solo paso.',
      ],
      solution:
        'A poetic, high-converting digital storefront on BigCommerce Stencil that celebrates handcrafted artistry while accelerating mobile conversion and multi-item basket size.',
      solutionEs:
        'Una tienda digital cálida y de alta conversión sobre BigCommerce Stencil que rinde homenaje a la artesanía textil e impulsa el ticket promedio.',
      impact: [
        '+38% growth in Average Order Value through coordinated merchandising sets.',
        'Universal praise from long-time collectors for honoring the true essence of April Cornell.',
      ],
      impactEs: [
        '+38% de incremento en el ticket promedio mediante colecciones coordinadas.',
        'Aprobación unánime de la comunidad de clientas por capturar la esencia artística de la marca.',
      ],
      tags: ['Fashion UX', 'BigCommerce Stencil', 'Artisanal E-Commerce', 'AOV Lift', 'Lookbook UI'],
    },
  },
];
