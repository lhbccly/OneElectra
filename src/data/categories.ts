import type { Category } from '@/types/catalogue'

export const categories: Category[] = [
  {
    id: 'ac-charging-pile',
    name: 'AC Charging Pile',
    slug: 'ac-charging-pile',
    shortLabel: 'AC',
    description:
      'Residential, workplace, and commercial AC charging solutions for 7kW, 11kW, and 22kW deployment needs.',
  },
  {
    id: 'dc-charging-pile',
    name: 'DC Charging Pile',
    slug: 'dc-charging-pile',
    shortLabel: 'DC',
    description:
      'High-power DC charging hardware for fleets, public charging corridors, depots, and commercial station operators.',
  },
  {
    id: 'portable-charging-pile',
    name: 'Portable Charging Pile',
    slug: 'portable-charging-pile',
    shortLabel: 'Portable',
    description:
      'Compact portable chargers and travel-ready cable kits designed for flexible mobile and backup charging use.',
  },
  {
    id: 'adapters-connectors',
    name: 'Adapters / Connectors',
    slug: 'adapters-connectors',
    shortLabel: 'Adapters',
    description:
      'Cross-standard cable guns and adapter solutions for Type 1, Type 2, GB/T, NACS, and DC Type 2 ecosystems.',
  },
]

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}
