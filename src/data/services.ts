import { CreditCard, Globe2, Package, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  summary: string
  points: string[]
  icon: LucideIcon
}

export const services: ServiceItem[] = [
  {
    id: 'payment-trade',
    title: 'Payment & Trade Terms',
    summary: 'Flexible commercial terms for sample, wholesale, and container-scale orders.',
    points: [
      'Payment: T/T, L/C, bank transfer, or Alipay',
      'Incoterms: FOB, CIF, or EXW by quotation',
      'Typical production lead time: 15-25 days after deposit',
      'MOQ and sample terms confirmed per specification',
    ],
    icon: CreditCard,
  },
  {
    id: 'china-pakistan-logistics',
    title: 'China ↔ Pakistan Logistics',
    summary: 'Dedicated freight lanes with double customs clearance and nationwide delivery.',
    points: [
      'Air cargo: 10–15 days from warehouse',
      'By road: ~25 days from warehouse',
      'By sea: 2–3 months from warehouse',
      'All-inclusive taxes and doorstep delivery',
    ],
    icon: Truck,
  },
  {
    id: 'global-shipping',
    title: 'Global Shipping',
    summary: 'Worldwide delivery with export documentation and compliance support.',
    points: [
      'Ship to any country worldwide',
      'Commercial invoice, packing list, and export documents',
      'CE, RoHS, UKCA, and FCC documentation support where applicable',
      'Sea, air, and road freight with CIF, DDP, or FOB terms',
    ],
    icon: Globe2,
  },
  {
    id: 'bulk-business',
    title: 'Bulk & Business Support',
    summary: 'End-to-end B2B support from inquiry matching through after-sales.',
    points: [
      'Special wholesale pricing',
      'Supplier matching and sample approval',
      'Quality inspection and logistics',
      'CE, FCC, RoHS, UKCA verification',
      'OEM/ODM custom branding',
    ],
    icon: Package,
  },
]
