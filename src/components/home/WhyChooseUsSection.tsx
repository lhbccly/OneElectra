import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { lifestyle } from '@/assets/lifestyle'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const whyItems = [
  {
    icon: 'factory' as const,
    title: 'Tier-1 Direct Factory Sourcing',
    description: 'We connect international buyers directly with audited Chinese manufacturing partners in Shenyang and eastern industrial hubs—eliminating middlemen markups.',
    badge: 'Shenyang Yibu Trading',
  },
  {
    icon: 'standards' as const,
    title: 'Multi-Standard Technical Matching',
    description: 'Hardware configured for European (Type 2), North American (Type 1 / NACS), and Chinese (GB/T) grid standards with full CE, UKCA & IEC compliance.',
    badge: 'CE / UKCA / IEC',
  },
  {
    icon: 'logistics' as const,
    title: 'Global Freight & Customs Clearance',
    description: 'Seamless sea/air freight under DDP, CIF, or FOB terms with complete origin documentation, custom tariffs clearance, and door-to-door delivery.',
    badge: 'DDP / CIF / FOB Freight',
  },
  {
    icon: 'quality' as const,
    title: 'Pre-Shipment High-Voltage QA',
    description: 'Every batch undergoes rigorous high-voltage electrical safety testing, IP rate verification, and factory inspection before container loading.',
    badge: '100% Pre-Shipment QA',
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="border-t border-line bg-canvas-subtle py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow="Why One Electra"
              title="Built for international buyers who need speed, standards, and supply confidence."
              description="We help distributors, fleet operators, developers, and contractors find certified charging hardware without guessing across incompatible standards or unverified suppliers."
            />
          </motion.div>

          <motion.div
            className="relative hidden overflow-hidden rounded-[1.5rem] border border-line shadow-card lg:block"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            data-protect-media
          >
            <div className="aspect-[16/10]">
              <img
                src={lifestyle.wallboxCloseup}
                alt="Unbranded home EV wallbox charging a vehicle"
                draggable={false}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {whyItems.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              custom={index}
              className="industrial-card group flex flex-col justify-between rounded-2xl p-7"
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-line bg-canvas-subtle text-emerald transition duration-300 group-hover:border-emerald group-hover:bg-emerald/10">
                    <BrandIcon name={item.icon} size={24} />
                  </div>
                  <span className="rounded-full border border-line bg-canvas-subtle px-3 py-1 text-[11px] font-semibold tracking-wide text-muted">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-navy transition duration-200 group-hover:text-emerald">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-line pt-4">
                <span className="size-2 rounded-full bg-emerald" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Verified Capability
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
