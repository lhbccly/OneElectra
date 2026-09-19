import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { services } from '@/data/services'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function ServicesSection() {
  const steps = [
    { step: '01', title: 'Requirement & Specs', desc: 'Specify connector standard (Type 1/2, GB/T, NACS), power output (kW), grid voltage, & volume.', icon: 'wallbox' as const },
    { step: '02', title: 'Factory Matching', desc: 'We select vetted Chinese manufacturing partners in Shenyang & eastern hubs matching your exact specs.', icon: 'factory' as const },
    { step: '03', title: 'Sample & Quote', desc: 'Receive itemized wholesale pricing (FOB/CIF/DDP), production lead times, & test samples.', icon: 'payment' as const },
    { step: '04', title: 'Quality Control QA', desc: 'Pre-shipment high-voltage insulation, IP rate, & electrical safety testing at factory source.', icon: 'quality' as const },
    { step: '05', title: 'Freight & Customs', desc: 'Sea or air shipping with complete CE, RoHS, & UKCA certificate documentation for smooth import.', icon: 'logistics' as const },
    { step: '06', title: 'Delivery & Warranty', desc: 'Doorstep arrival support, warranty replacement management, and technical after-sales backing.', icon: 'support' as const },
  ]

  return (
    <section id="services" className="border-t border-line bg-canvas-subtle py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="From Factory To Your Market"
              title="6-Step B2B Sourcing & Logistics Workflow"
              description="From initial technical matching to pre-shipment factory QA and door-to-door freight, One Electra manages the complete procurement cycle."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ButtonLink to="/services" variant="secondary" className="shrink-0 self-start md:self-auto">
              View All B2B Services
            </ButtonLink>
          </motion.div>
        </motion.div>

        {/* 6-Step Industrial Workflow */}
        <motion.div
          className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              custom={idx}
              className="industrial-card group relative flex flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-extrabold text-emerald">
                    {s.step}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-emerald">
                    <BrandIcon name={s.icon} size={20} />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-navy group-hover:text-emerald transition">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Services Cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                className="industrial-card group relative overflow-hidden rounded-2xl p-8"
              >
                <div className="relative mb-5 inline-flex">
                  <div className="relative inline-flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-emerald transition duration-300 group-hover:border-emerald group-hover:bg-emerald/10">
                    <Icon className="size-6" aria-hidden />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-navy transition duration-300 group-hover:text-emerald">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
