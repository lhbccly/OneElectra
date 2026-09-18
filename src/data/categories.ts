import type { Category } from '@/types/catalogue'

export const categories: Category[] = [
  {
    id: 'ac-charging-pile',
    name: 'AC Charging Pile',
    slug: 'ac-charging-pile',
    shortLabel: 'AC',
    description:
      'Home and commercial AC wallboxes from 7kW to 22kW, with WiFi, OCPP, and multi-standard connector options.',
  },
  {
    id: 'dc-charging-pile',
    name: 'DC Charging Pile',
    slug: 'dc-charging-pile',
    shortLabel: 'DC',
    description:
      'High-power DC fast-charging solutions for corridors, depots, and commercial charge-point operators.',
  },
  {
    id: 'portable-charging-pile',
    name: 'Portable Charging Pile',
    slug: 'portable-charging-pile',
    shortLabel: 'Portable',
    description:
      'Compact portable EV chargers with adjustable current, LED status, and travel-ready cable kits.',
  },
  {
    id: 'adapters-connectors',
    name: 'Adapters / Connectors',
    slug: 'adapters-connectors',
    shortLabel: 'Adapters',
    description:
      'Cable guns and conversion adapters for Type 1, Type 2, GB/T, NACS, and DC Type 2 ecosystems.',
  },
]

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}
