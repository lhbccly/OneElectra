/** Client-editable site copy. Prefer editing this file over component JSX. */
export const site = {
  brand: {
    name: 'One Electra',
    tagline: 'EV Charging Hardware & Global Sourcing',
    legalName: 'Shenyang Yibu Trading Company',
    location: 'Shenyang, Liaoning 110000, China',
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
  brandStory: {
    eyebrow: 'Why Buy Through One Electra?',
    title: 'Direct Chinese Factory Sourcing with International Quality Assurance.',
  
    points: [
      'Verified Manufacturers: Audited factories producing CE, RoHS, UKCA, and FCC certified equipment.',
      'Multi-Standard Matching: Precise technical alignment across Type 1, Type 2, GB/T, and NACS standards.',
      'Quality Control & Logistics: Full pre-shipment electrical testing and international door-to-door (DDP/CIF/FOB) freight.',
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
  standards: [
    {
      id: 'type-1',
      name: 'Type 1 (SAE J1772)',
      summary:
        'North America and Japan AC standard. Single-phase AC connector for home, workplace, and public Level 1/2 charging up to ~19.2kW.',
    },
    {
      id: 'type-2',
      name: 'Type 2 (IEC 62196-2)',
      summary:
        'Primary standard across Europe, UK, Australia, Middle East, and South Asia. Supports single- and three-phase AC up to 22kW and DC systems.',
    },
    {
      id: 'gbt',
      name: 'National Standard (GB/T)',
      summary:
        "China's official AC/DC charging standard — essential for Chinese-manufactured EVs and rapid infrastructure deployments globally.",
    },
    {
      id: 'nacs',
      name: 'Tesla / NACS (SAE J3400)',
      summary:
        'Unified North American Charging Standard supporting AC and DC in one compact design, with regional conversion adapters available.',
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
  whyChoose: [
    {
      title: 'Verified Sourcing',
      description: 'Access to audited Chinese tier-1 EV hardware manufacturers and vetted commercial product lines.',
    },
    {
      title: 'Standards Expertise',
      description: 'Engineering guidance across Type 1, Type 2, GB/T, and NACS to ensure grid and vehicle compatibility.',
    },
    {
      title: 'Quality Assurance',
      description: 'Pre-shipment high-voltage, insulation, and electrical safety testing before goods leave the factory.',
    },
    {
      title: 'End-to-End Support',
      description: 'From itemized quotes to export documentation, customs clearance, freight coordination, and after-sales support.',
    },
  ],
  about: {
    title: 'Why Choose One Electra',
    intro:
      'One Electra (Shenyang Yibu Trading Company) provides factory-direct EV charging hardware with international certification, cross-standard compatibility, and dedicated B2B sourcing support.',
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
  seo: {
    homeTitle: 'One Electra | B2B EV Charging Hardware & Global Sourcing',
    homeDescription:
      'Certified AC & DC EV chargers, portable units, cables, and adapters from audited Chinese manufacturers for distributors, fleet operators, and commercial installers.',
  },
} as const

