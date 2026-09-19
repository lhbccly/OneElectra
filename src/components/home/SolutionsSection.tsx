import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Building2, Truck, Zap, Car, ShieldAlert, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useQuote } from '@/context/QuoteContext'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const solutions = [
  {
    id: 'residential',
    title: 'Home & Multi-Unit Residential',
    subtitle: '7kW – 22kW AC Wallboxes',
    description: 'Compact, weatherproof single & 3-phase AC wallboxes with App control, RFID access, and dynamic load management for apartments and homes.',
    categorySlug: 'ac-charging-pile',
    icon: Home,
    badge: 'Residential / Multi-Unit',
  },
  {
    id: 'commercial',
    title: 'Workplace & Commercial Parking',
    subtitle: '11kW – 22kW AC (OCPP 1.6J)',
    description: 'Dual-socket and pedestal AC chargers with OCPP networking, billing software integration, RFID authentication, and IP65 protection.',
    categorySlug: 'ac-charging-pile',
    icon: Building2,
    badge: 'Commercial / Real Estate',
  },
  {
    id: 'fleet',
    title: 'Fleet Depots & Logistics Hubs',
    subtitle: '60kW – 240kW DC Fast Chargers',
    description: 'High-efficiency dual-gun DC chargers for commercial delivery fleets, buses, and logistics hubs requiring rapid turnaround times.',
    categorySlug: 'dc-charging-pile',
    icon: Truck,
    badge: 'Fleets & Logistics',
  },
  {
    id: 'public',
    title: 'Public Highway Fast Charging',
    subtitle: '120kW – 360kW Ultra-Fast DC',
    description: 'Heavy-duty modular DC fast charging stations designed for highway corridors, petrol stations, and public charging networks.',
    categorySlug: 'dc-charging-pile',
    icon: Zap,
    badge: 'Highway & Public CPO',
  },
  {
    id: 'portable',
    title: 'Portable & Travel Emergency Kits',
    subtitle: '3.5kW – 7kW Travel Chargers',
    description: 'Rugged IP66 portable chargers with adjustable current (8A–32A) and multi-plug industrial adapters for mobile service and backup.',
    categorySlug: 'portable-charging-pile',
    icon: Car,
    badge: 'Emergency / Mobile',
  },
  {
    id: 'oem',
    title: 'OEM / ODM Private Labeling',
    subtitle: 'Custom Hardware & Firmware',
    description: 'Full OEM manufacturing support including customized sheet-metal casing, logo silkscreen, white-label packaging, and custom OCPP setup.',
    categorySlug: 'ac-charging-pile',
    icon: ShieldAlert,
    badge: 'White-Label / Branding',
  },
]

export function SolutionsSection() {
  const { openQuoteModal } = useQuote()

  return (
    <section className="border-t border-line bg-graphite/40 py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionHeading
            eyebrow="Targeted Procurement"
            title="I Need EV Charging Hardware For..."
            description="Find the right certified charging equipment by deployment environment without navigating standard codes first."
          />
          <button
            onClick={() => openQuoteModal({ useCase: 'General Solution Query' })}
            className="shrink-0 rounded-md border border-lime/40 bg-lime/10 px-5 py-2.5 text-sm font-semibold text-lime transition hover:bg-lime/20"
          >
            Get Custom Solution Quote
          </button>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {solutions.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.id}
                variants={fadeUp}
                custom={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-line bg-panel/60 p-7 transition duration-300 hover:border-lime/40 hover:bg-panel"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-md border border-line bg-ink text-lime transition duration-300 group-hover:border-lime/50 group-hover:bg-lime/10">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-md border border-line bg-ink px-3 py-1 text-[11px] font-medium tracking-wide text-muted">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-off-white group-hover:text-lime transition duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-lime/80">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-line/60 pt-4">
                  <Link
                    to={`/products?category=${item.categorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted hover:text-off-white transition"
                  >
                    View Models <ArrowRight className="size-3.5" />
                  </Link>

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    Technical matching available
                  </span>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
