interface BrandIconProps {
  name:
    | 'factory'
    | 'standards'
    | 'logistics'
    | 'quality'
    | 'wallbox'
    | 'fast_dc'
    | 'adapter'
    | 'oem'
    | 'ocpp'
    | 'payment'
    | 'portable'
    | 'support'
  size?: number
  className?: string
}

export function BrandIcon({ name, size = 24, className = 'text-lime' }: BrandIconProps) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.75',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }

  switch (name) {
    case 'factory':
      // Direct Factory Sourcing & Manufacturing
      return (
        <svg {...iconProps}>
          <path d="M3 21h18" />
          <path d="M5 21V9l5 3V9l5 3V5h4v16" />
          <path d="M17 9h.01" />
          <path d="M17 13h.01" />
          <path d="M17 17h.01" />
          <path d="M8 16h2" />
        </svg>
      )

    case 'standards':
      // Global Charging Standards & Certified Quality
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )

    case 'logistics':
      // Global Freight, Shipping & Incoterms
      return (
        <svg {...iconProps}>
          <path d="M2 17h20" />
          <path d="M3 17V8a1 1 0 0 1 1-1h11v10" />
          <path d="M15 10h4.5a1.5 1.5 0 0 1 1.2.6l1.8 2.4V17" />
          <circle cx="7" cy="17" r="2" fill="currentColor" />
          <circle cx="17" cy="17" r="2" fill="currentColor" />
        </svg>
      )

    case 'quality':
      // Pre-shipment QA & Electrical Safety Testing
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 3" />
          <path d="M12 3v2" />
          <path d="M12 19v2" />
          <path d="M3 12h2" />
          <path d="M19 12h2" />
        </svg>
      )

    case 'wallbox':
      // AC Charging Pile / Wallbox
      return (
        <svg {...iconProps}>
          <rect x="6" y="3" width="12" height="18" rx="3" />
          <path d="M10 7h4" />
          <circle cx="12" cy="13" r="2" />
          <path d="M12 15v3" />
        </svg>
      )

    case 'fast_dc':
      // Ultra-Fast Commercial DC Charging
      return (
        <svg {...iconProps}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )

    case 'adapter':
      // Cross-Standard Connector Conversion
      return (
        <svg {...iconProps}>
          <path d="M7 4v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4" />
          <path d="M10 2v2" />
          <path d="M14 2v2" />
          <path d="M12 13v7" />
          <rect x="9" y="20" width="6" height="2" rx="1" />
        </svg>
      )

    case 'oem':
      // OEM/ODM Private Labeling & Manufacturing
      return (
        <svg {...iconProps}>
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
        </svg>
      )

    case 'ocpp':
      // OCPP Smart Networking Protocol
      return (
        <svg {...iconProps}>
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
        </svg>
      )

    case 'payment':
      // Trade Terms, Credit & Finance
      return (
        <svg {...iconProps}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="6" y1="15" x2="10" y2="15" />
        </svg>
      )

    case 'portable':
      // Portable Emergency Travel Chargers
      return (
        <svg {...iconProps}>
          <rect x="5" y="6" width="14" height="12" rx="2" />
          <path d="M9 3h6v3H9z" />
          <path d="M10 11h4" />
          <path d="M12 14v2" />
        </svg>
      )

    case 'support':
      // Technical Support & Customer Service
      return (
        <svg {...iconProps}>
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v5z" />
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </svg>
      )

    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}
