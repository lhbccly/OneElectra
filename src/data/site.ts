/** Client-editable site copy. Prefer editing this file over component JSX. */
export const site = {
  brand: {
    name: 'One Electra',
    tagline: 'Energy Technology Solutions',
    legalName: 'Shenyang Yibu Trading Company',
    location: 'Shenyang, Liaoning 110000, China',
  },
  contact: {
    supportEmail: 'support@oneelectra.com',
    infoEmail: 'info@oneelectra.com',
    inquiryEmail: 'jasmin@oneelectra.com',
    whatsappNumber: '8615504192700',
    markets: 'EU | Middle East | South Asia',
    address: 'Shenyang, Liaoning 110000, China',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/hafiz-mudassar-siddique-11a977320',
    facebook: 'https://www.facebook.com/profile.php?id=61591170849895',
    instagram: 'https://www.instagram.com/oneelectra_technology',
    whatsapp: 'https://wa.me/8615504192700',
  },
  hero: {
    title: 'Global EV charging solutions for real-world projects.',
    subtitle:
      'One Electra supplies certified AC/DC chargers, adapters, and infrastructure support for distributors, developers, fleets, and project teams across Europe, the Middle East, and South Asia.',
    primaryCta: 'Request a Quote',
    secondaryCta: 'Explore Products',
  },
  brandStory: {
    eyebrow: 'Why buyers choose us',
    title: 'Reliable sourcing partner for EV infrastructure growth.',
    body: 'One Electra connects project buyers, resellers, and infrastructure operators with certified EV charging hardware from trusted Chinese manufacturers. We combine standards expertise, cross-border support, and practical procurement experience to help clients move faster from spec to deployment.',
    points: [
      'Multi-standard compatibility across Type 1, Type 2, GB/T, and NACS ecosystems',
      'Export-ready supply support for distributors, fleets, and commercial installations',
      'Fast response, clear technical guidance, and shipment coordination from source to site',
    ],
  },
  opportunity: {
    title: 'Future energy & business opportunities',
    body: 'The global EV charging market is projected to grow at roughly 18–22% annually, reaching well over USD 140 billion by 2035 — driven by net-zero targets, mass EV adoption, and fast-track infrastructure investment.',
    points: [
      'Public & highway fast-charging corridors',
      'Commercial fleet depots, logistics hubs, and workplace networks',
      'Residential, multi-unit, and renewable-integrated smart charging',
    ],
  },
  standards: [
    {
      id: 'type-1',
      name: 'Type 1 (SAE J1772)',
      summary:
        'North America and Japan standard. Single-phase AC connector for home, workplace, and public Level 1/2 charging up to ~19kW.',
    },
    {
      id: 'type-2',
      name: 'Type 2 (IEC 62196-2)',
      summary:
        'Primary standard across Europe, UK, Australia, and most international markets. Supports single- and three-phase AC up to 22kW and DC systems.',
    },
    {
      id: 'gbt',
      name: 'National Standard (GB/T)',
      summary:
        "China's official AC/DC charging standard — widely used for Chinese-manufactured EVs and infrastructure projects globally.",
    },
    {
      id: 'nacs',
      name: 'Tesla / NACS',
      summary:
        'Unified North America Charging Standard (SAE J3400) supporting AC and DC in one compact design, with regional adapters available.',
    },
  ],
  globalPartner: {
    title: 'Your global partner for EV charging & parts',
    body: 'One Electra partners with distributors, developers, and operators to deliver standardized, certified hardware and end-to-end support — turning clean energy goals into profitable, sustainable infrastructure.',
    markets: ['Europe', 'Middle East', 'South Asia', 'Global'],
  },
  finalCta: {
    title: 'Need certified charging hardware for your next project?',
    body: 'Tell us your market, connector standard, target volume, and deployment type. We will match the right hardware, recommend the best fit, and support your sourcing from quote to shipment.',
    primaryCta: 'Talk to Sales',
    secondaryCta: 'Browse Products',
  },
  whyChoose: [
    {
      title: 'Verified sourcing',
      description: 'Access to reliable Chinese EV charging manufacturers and vetted product options for commercial procurement.',
    },
    {
      title: 'Standards expertise',
      description: 'Guidance across Type 1, Type 2, GB/T, and NACS to help your market-specific specification process.',
    },
    {
      title: 'Quality control',
      description: 'Pre-shipment inspection, product matching, and operational support before goods leave the factory.',
    },
    {
      title: 'End-to-end support',
      description: 'From quote to documentation, freight coordination, and after-sales help for international buyers.',
    },
  ],
  about: {
    title: 'Why choose One Electra',
    intro:
      'Factory-direct EV charging hardware with international certification, cross-standard compatibility, and multilingual B2B support.',
    productBenefits: [
      'Fully certified to Type 1, Type 2, and GB/T protocols',
      'CE, FCC, RoHS, UKCA documentation for import clearance',
      'Portable 3.5–7kW and wallbox 7–22kW options',
      'IP54/IP65 weatherproof casings',
      'Multi-layer electrical protection',
      'App, Bluetooth, WiFi, NFC, and timer scheduling',
    ],
    serviceBenefits: [
      'Direct factory partnerships and OEM/ODM support',
      'Competitive bulk pricing and sample programs',
      'Pre-shipment inspection and testing',
      'Sea, air, and door-to-door logistics',
      'Compliance guidance for EU, Middle East, and South Asia',
      'Fast WhatsApp quotation and dedicated sales support',
    ],
  },
  seo: {
    homeTitle: 'One Electra | EV Charging & Energy Technology',
    homeDescription:
      'Premium international EV charging piles, portable chargers, and adapters with global standards support and B2B sourcing.',
  },
} as const
