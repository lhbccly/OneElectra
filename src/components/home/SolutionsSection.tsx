import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { useQuote } from '@/context/QuoteContext'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const solutions = [
  {
    id: 'residential',
    title: 'Home & Multi-Unit Residential',
    subtitle: '7kW – 22kW AC Wallboxes',
    description: 'Compact, weatherproof single & 3-phase AC wallboxes with App control, RFID access, and dynamic load management for apartments and homes.',
    categorySlug: 'ac-charging-pile',
    iconName: 'wallbox' as const,
    badge: 'Residential / Multi-Unit',
  },
  {
    id: 'commercial',
    title: 'Workplace & Commercial Parking',
    subtitle: '11kW – 22kW AC (OCPP 1.6J)',
    description: 'Dual-socket and pedestal AC chargers with OCPP networking, billing software integration, RFID authentication, and IP65 protection.',
    categorySlug: 'ac-charging-pile',
    iconName: 'ocpp' as const,
    badge: 'Commercial / Real Estate',
  },
  {
    id: 'fleet',
    title: 'Fleet Depots & Logistics Hubs',
    subtitle: '60kW – 240kW DC Fast Chargers',
    description: 'High-efficiency dual-gun DC chargers for commercial delivery fleets, buses, and logistics hubs requiring rapid turnaround times.',
    categorySlug: 'dc-charging-pile',
    iconName: 'fast_dc' as const,
    badge: 'Fleets & Logistics',
  },
  {
    id: 'public',
    title: 'Public Highway Fast Charging',
    subtitle: '120kW – 360kW Ultra-Fast DC',
    description: 'Heavy-duty modular DC fast charging stations designed for highway corridors, petrol stations, and public charging networks.',
    categorySlug: 'dc-charging-pile',
    iconName: 'fast_dc' as const,
    badge: 'Highway & Public CPO',
  },
  {
    id: 'portable',
    title: 'Portable & Travel Emergency Kits',
    subtitle: '3.5kW – 7kW Travel Chargers',
    description: 'Rugged IP66 portable chargers with adjustable current (8A–32A) and multi-plug industrial adapters for mobile service and backup.',
    categorySlug: 'portable-charging-pile',
    iconName: 'portable' as const,
    badge: 'Emergency / Mobile',
  },
  {
    id: 'oem',
    title: 'OEM / ODM Private Labeling',
    subtitle: 'Custom Hardware & Firmware',
    description: 'Full OEM manufacturing support including customized sheet-metal casing, logo silkscreen, white-label packaging, and custom OCPP setup.',
    categorySlug: 'ac-charging-pile',
    iconName: 'oem' as const,
    badge: 'White-Label / Branding',
  },
]

export function SolutionsSection() {
  const { openQuoteModal } = useQuote()

  return (
    <section id="solutions" className="border-t border-line bg-graphite py-20 md:py-28 overflow-hidden">
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
            className="shrink-0 rounded-xl border border-emerald/30 bg-emerald/10 px-5 py-2.5 text-sm font-bold text-emerald transition hover:bg-emerald hover:text-white shadow-xs"
          >
            Get Custom Solution Quote
          </button>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {solutions.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              custom={index}
              className="industrial-card group flex flex-col justify-between rounded-2xl p-7"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-emerald transition duration-300 group-hover:border-emerald group-hover:bg-emerald/10">
                    <BrandIcon name={item.iconName} size={24} />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-navy transition duration-200 group-hover:text-emerald">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                <Link
                  to={`/products?category=${item.categorySlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-emerald transition"
                >
                  View Models <ArrowRight className="size-3.5" />
                </Link>

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Specs Available
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
