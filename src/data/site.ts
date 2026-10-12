/** Client-editable site copy. Prefer editing this file over component JSX. */
export const site = {
  brand: {
    name: 'One Electra',
    tagline: 'EV Charging Hardware & Global Sourcing',
    legalName: 'Shenyang Yibo Trading Company',
    location: 'Shenyang, Liaoning 110000, China',
    website: 'oneelectra.com',
  },
  contact: {
    supportEmail: 'support@oneelectra.com',
    infoEmail: 'info@oneelectra.com',
    inquiryEmail: 'jasmin@oneelectra.com',
    whatsappNumber: '8615504192700',
    markets: 'Europe | Middle East | South Asia | Global',
    address: 'Shenyang, Liaoning 110000, China',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/hafiz-mudassar-siddique-11a977320',
    facebook: 'https://www.facebook.com/profile.php?id=61591170849895',
    instagram: 'https://www.instagram.com/oneelectra_technology',
    whatsapp: 'https://wa.me/8615504192700',
  },
  hero: {
    title: 'EV Charging Hardware & Global Sourcing',
    subtitle:
      'Certified AC & DC EV chargers, portable units, cables, and adapters sourced directly from audited tier-1 manufacturers in China for distributors, fleet operators, CPOs, and commercial installers worldwide.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'Explore Products',
  },
  solutions: {
    eyebrow: 'Targeted Procurement',
    title: 'I Need EV Charging Hardware For...',
    description:
      'Find the right certified charging equipment by deployment environment — see how each solution looks in the field.',
    ctaLabel: 'Get Custom Solution Quote',
    items: [
      {
        id: 'residential',
        title: 'Home & Multi-Unit Residential',
        subtitle: '7kW – 22kW AC Wallboxes',
        description:
          'Compact, weatherproof single & 3-phase AC wallboxes with App control, RFID access, and dynamic load management for apartments and homes.',
        categorySlug: 'ac-charging-pile',
        badge: 'Residential',
        imageKey: 'residential' as const,
        imageAlt: 'Home EV wallbox charging a car in a residential driveway',
      },
      {
        id: 'commercial',
        title: 'Workplace & Commercial Parking',
        subtitle: '11kW – 22kW AC · OCPP 1.6J',
        description:
          'Dual-socket and pedestal AC chargers with OCPP networking, billing software integration, RFID authentication, and IP65 protection.',
        categorySlug: 'ac-charging-pile',
        badge: 'Commercial',
        imageKey: 'commercial' as const,
        imageAlt: 'Commercial EV charging pedestal with status lights at night',
      },
      {
        id: 'fleet',
        title: 'Fleet Depots & Logistics Hubs',
        subtitle: '60kW – 240kW DC Fast Chargers',
        description:
          'High-efficiency dual-gun DC chargers for commercial delivery fleets, buses, and logistics hubs requiring rapid turnaround times.',
        categorySlug: 'dc-charging-pile',
        badge: 'Fleets',
        imageKey: 'logistics' as const,
        imageAlt: 'Global logistics hub representing fleet and depot charging scale',
      },
      {
        id: 'public',
        title: 'Public Highway Fast Charging',
        subtitle: '120kW – 360kW Ultra-Fast DC',
        description:
          'Heavy-duty modular DC fast charging stations designed for highway corridors, petrol stations, and public charging networks.',
        categorySlug: 'dc-charging-pile',
        badge: 'Highway & Public',
        imageKey: 'publicFast' as const,
        imageAlt: 'Electric vehicle on a high-power public charging station at night',
      },
      {
        id: 'portable',
        title: 'Portable & Travel Emergency Kits',
        subtitle: '3.5kW – 7kW Travel Chargers',
        description:
          'Rugged IP66 portable chargers with adjustable current (8A–32A) and multi-plug industrial adapters for mobile service and backup.',
        categorySlug: 'portable-charging-pile',
        badge: 'Portable',
        imageKey: 'portable' as const,
        imageAlt: 'Electric vehicle on the road ready for portable travel charging',
      },
      {
        id: 'oem',
        title: 'OEM / ODM Private Labeling',
        subtitle: 'Custom Hardware & Firmware',
        description:
          'Full OEM manufacturing support including customized sheet-metal casing, logo silkscreen, white-label packaging, and custom OCPP setup.',
        categorySlug: 'ac-charging-pile',
        badge: 'White-Label',
        imageKey: 'oem' as const,
        imageAlt: 'Engineer developing EV charging hardware in a production lab',
      },
    ],
  },
  categoriesSection: {
    eyebrow: 'Hardware Ecosystem',
    title: 'Charging systems for every deployment',
    description:
      'Explore AC wallboxes, DC hardware, portable chargers, and cross-standard adapters — organized for fast product discovery.',
  },
  brandStory: {
    eyebrow: 'Why Buy Through One Electra?',
    title: 'Direct Chinese Factory Sourcing with International Quality Assurance.',
    body: 'One Electra is the international trading brand of Shenyang Yibu Trading Company (Shenyang, China). We bridge regional charging standard gaps, vet tier-1 Chinese EV manufacturers, perform pre-shipment quality inspections, and handle end-to-end freight logistics so international buyers can procure with total confidence.',
    imageCaptionEyebrow: 'In the field',
    imageCaptionTitle: 'Hardware that looks as good installed as it performs on paper.',
    factoryCaptionEyebrow: 'Factory partnership',
    factoryCaptionTitle: 'Audited manufacturers. Documented quality. Export-ready hardware.',
    points: [
      {
        title: 'Verified Manufacturers',
        body: 'Audited factories producing CE, RoHS, UKCA, and FCC certified equipment.',
      },
      {
        title: 'Multi-Standard Matching',
        body: 'Precise technical alignment across Type 1, Type 2, GB/T, and NACS standards.',
      },
      {
        title: 'Quality Control & Logistics',
        body: 'Full pre-shipment electrical testing and international door-to-door (DDP/CIF/FOB) freight.',
      },
    ],
    quickFacts: [
      { label: 'Standards', value: 'Type 1 / Type 2 / GB/T / NACS' },
      { label: 'Markets', value: 'Europe • Middle East • South Asia' },
      { label: 'Support', value: 'Quote response in 24 hours' },
    ],
  },
  opportunity: {
    title: 'Global EV Charging Infrastructure Outlook',
    body: 'According to the IEA Global EV Outlook 2024 and BloombergNEF forecasts, the global EV charging infrastructure market is projected to expand at a 20.4% CAGR, exceeding USD 140 Billion by 2035.',
    citation: 'Source: International Energy Agency (IEA) & BloombergNEF Infrastructure Report, 2024',
    points: [
      'Public & highway fast-charging corridors (60kW–360kW DC Ultra-Fast)',
      'Commercial fleet depots, logistics hubs, and workplace networks (11kW–22kW AC)',
      'Residential, multi-unit, and renewable-integrated smart charging (7kW AC / Portable)',
    ],
  },
  standardsSection: {
    eyebrow: 'Technology & Compliance',
    title: 'Global charging standards we support',
    description:
      'Regional connector expertise and certification compliance (CE, UKCA, IEC 61851, RoHS) are built into product selection, documentation, and market delivery.',
    complianceBadges: ['CE Certified', 'UKCA', 'IEC Compliant'],
  },
  standards: [
    {
      id: 'type-2',
      name: 'Type 2 (IEC 62196 / Mennekes)',
      region: 'Europe, Middle East, S. Asia, Global',
      summary:
        'Standard 7kW–22kW AC single & 3-phase connector for European and international EV networks.',
      code: 'IEC 62196-2',
      iconName: 'wallbox' as const,
      imageKey: 'heroAlt' as const,
      imageAlt: 'Type 2 EV charging connector plugged into a vehicle',
    },
    {
      id: 'type-1',
      name: 'Type 1 (SAE J1772)',
      region: 'North America & Japan',
      summary:
        'Single-phase AC connector standard widely used in North American residential and commercial setups.',
      code: 'SAE J1772',
      iconName: 'wallbox' as const,
      imageKey: 'residential' as const,
      imageAlt: 'Residential AC charging setup for Type 1 markets',
    },
    {
      id: 'gbt',
      name: 'GB/T 20234 (China Standard)',
      region: 'China & Domestic EV Exports',
      summary:
        'National AC and DC fast charging connector standard for domestic Chinese EVs and overseas export fleets.',
      code: 'GB/T 20234.2 / 20234.3',
      iconName: 'standards' as const,
      imageKey: 'oem' as const,
      imageAlt: 'Chinese manufacturing and GB/T hardware engineering',
    },
    {
      id: 'nacs',
      name: 'NACS (Tesla SAE J3400)',
      region: 'North American Ecosystems',
      summary:
        'North American Charging Standard supported across Tesla and modern North American OEM platforms.',
      code: 'SAE J3400 / NACS',
      iconName: 'fast_dc' as const,
      imageKey: 'heroAlt' as const,
      imageAlt: 'EV charging port connection for multi-standard markets',
    },
  ],
  globalPartner: {
    title: 'Your Trusted Sourcing Partner for EV Infrastructure',
    body: 'One Electra works with distributors, fleet managers, charge point operators, and project contractors to deliver standardized, certified hardware and end-to-end procurement support — turning clean energy projects into profitable B2B infrastructure.',
    markets: ['Europe', 'Middle East', 'South Asia', 'Global'],
  },
  finalCta: {
    title: 'Need Certified Charging Hardware for Your Next Project?',
    body: 'Tell us your target market, connector standard, required power output, and order volume. We will match the optimal certified hardware, supply itemized quotes, and handle shipping from factory to site.',
    primaryCta: 'Request Custom Quote',
    secondaryCta: 'Browse Products',
  },
  whyChooseSection: {
    eyebrow: 'Why One Electra',
    title: 'Built for international buyers who need speed, standards, and supply confidence.',
    description:
      'We help distributors, fleet operators, developers, and contractors find certified charging hardware without guessing across incompatible standards or unverified suppliers.',
  },
  whyChoose: [
    {
      icon: 'factory' as const,
      title: 'Tier-1 Direct Factory Sourcing',
      description:
        'We connect international buyers directly with audited Chinese manufacturing partners in Shenyang and eastern industrial hubs—eliminating middlemen markups.',
      badge: 'Shenyang Yibu Trading',
    },
    {
      icon: 'standards' as const,
      title: 'Multi-Standard Technical Matching',
      description:
        'Hardware configured for European (Type 2), North American (Type 1 / NACS), and Chinese (GB/T) grid standards with full CE, UKCA & IEC compliance.',
      badge: 'CE / UKCA / IEC',
    },
    {
      icon: 'logistics' as const,
      title: 'Global Freight & Customs Clearance',
      description:
        'Seamless sea/air freight under DDP, CIF, or FOB terms with complete origin documentation, custom tariffs clearance, and door-to-door delivery.',
      badge: 'DDP / CIF / FOB Freight',
    },
    {
      icon: 'quality' as const,
      title: 'Pre-Shipment High-Voltage QA',
      description:
        'Every batch undergoes rigorous high-voltage electrical safety testing, IP rate verification, and factory inspection before container loading.',
      badge: '100% Pre-Shipment QA',
    },
  ],
  about: {
    title: 'Factory-direct EV charging, built for international buyers',
    intro:
      'One Electra is the international trading brand of Shenyang Yibu Trading Company. We source certified AC and DC charging hardware from audited Chinese manufacturers and support distributors, fleets, and installers from quote to delivery.',
    productBenefits: [
      'Fully certified to Type 1, Type 2, GB/T, and NACS protocols',
      'CE, FCC, RoHS, UKCA documentation for seamless customs clearance',
      'Portable 3.5–7kW and commercial wallbox 7–22kW AC options',
      'High-power 20kW–360kW DC fast charging stations',
      'IP54/IP65 weatherproof casings & IK10 impact protection',
      'App, Bluetooth, Wi-Fi, 4G, RFID, and OCPP 1.6J smart charging protocol',
    ],
    serviceBenefits: [
      'Direct factory partnerships and OEM/ODM white-label support',
      'Competitive bulk container pricing and sample evaluation programs',
      'Pre-shipment QA inspection, high-voltage withstand testing, and report generation',
      'Sea, air, road, and door-to-door (DDP / CIF / FOB) international logistics',
      'Compliance guidance for EU, Middle East, and South Asian markets',
      'Fast WhatsApp quotation response within 24 hours',
    ],
  },
  trustHighlights: [
    'Shenyang Yibu Trading Co.',
    'Audited Tier-1 Factories',
    'CE / RoHS / UKCA Certified',
    'Fast WhatsApp Support',
  ],
  trustStats: [
    { value: '4 Major', label: 'Standards (Type 1 / Type 2 / GB/T / NACS)' },
    { value: 'Shenyang', label: 'Factory-direct trading base' },
    { value: 'DDP / FOB', label: 'Global freight support' },
    { value: '24h', label: 'Typical quote response' },
  ],
  sourcingWorkflow: [
    {
      step: '01',
      title: 'Requirement & Specs',
      desc: 'Tell us connector type, power output (kW), destination grid, and volume.',
    },
    {
      step: '02',
      title: 'Product & Factory Matching',
      desc: 'We identify certified hardware models from vetted Chinese factories.',
    },
    {
      step: '03',
      title: 'Sample & Detailed Quote',
      desc: 'Receive itemized wholesale pricing, lead times, and test samples.',
    },
    {
      step: '04',
      title: 'Quality Control & QA',
      desc: 'Pre-shipment high-voltage and electrical safety testing at source.',
    },
    {
      step: '05',
      title: 'Global Freight & Customs',
      desc: 'Sea/air shipping (DDP/CIF/FOB) with complete CE/RoHS/UKCA docs.',
    },
    {
      step: '06',
      title: 'Delivery & Technical Support',
      desc: 'Doorstep arrival support, warranty management, and after-sales.',
    },
  ],
  seo: {
    homeTitle: 'One Electra | B2B EV Charging Hardware & Global Sourcing',
    homeDescription:
      'Certified AC & DC EV chargers, portable units, cables, and adapters from audited Chinese manufacturers for distributors, fleet operators, and commercial installers.',
  },
} as const
