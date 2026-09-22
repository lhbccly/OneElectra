import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useQuote } from '@/context/QuoteContext'
import { lifestyle } from '@/assets/lifestyle'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const solutions = [
  {
    id: 'residential',
    title: 'Home & Multi-Unit Residential',
    subtitle: '7kW – 22kW AC Wallboxes',
    description:
      'Compact, weatherproof single & 3-phase AC wallboxes with App control, RFID access, and dynamic load management for apartments and homes.',
    categorySlug: 'ac-charging-pile',
    badge: 'Residential',
    image: lifestyle.residential,
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
    image: lifestyle.commercial,
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
    image: lifestyle.logistics,
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
    image: lifestyle.publicFast,
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
    image: lifestyle.portable,
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
    image: lifestyle.oem,
    imageAlt: 'Engineer developing EV charging hardware in a production lab',
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
            description="Find the right certified charging equipment by deployment environment — see how each solution looks in the field."
          />
          <button
            onClick={() => openQuoteModal({ useCase: 'General Solution Query' })}
            className="shrink-0 rounded-xl border border-emerald/30 bg-emerald/10 px-5 py-2.5 text-sm font-bold text-emerald transition hover:bg-emerald hover:text-white shadow-xs"
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
          {solutions.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              custom={index}
              className="group overflow-hidden rounded-2xl border border-line bg-panel shadow-card transition duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden" data-protect-media>
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  draggable={false}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/55 via-transparent to-transparent"
                  aria-hidden
                />
                {/* Fixed contrast: light pill + dark text (theme tokens invert and would hide the label) */}
                <span className="absolute bottom-3 left-3 rounded-full bg-[#f8faf9] px-3 py-1 text-[11px] font-bold tracking-wide text-[#18201f] shadow-sm">
                  {item.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy transition duration-200 group-hover:text-emerald md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <Link
                    to={`/products?category=${item.categorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:text-emerald"
                  >
                    View Models <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    Specs Available
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
