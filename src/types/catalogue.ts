export type CategoryId = string

export interface Specification {
  label: string
  value: string
}

export interface Category {
  id: CategoryId
  name: string
  slug: string
  description: string
  shortLabel: string
  /** Short power / capability label shown on homepage category cards */
  powerLabel: string
}

export interface Product {
  id: string
  slug: string
  name: string
  model: string
  category: CategoryId
  shortDescription: string
  description: string
  images: string[]
  specifications: Specification[]
  features: string[]
  standards: string[]
  featured?: boolean
}
