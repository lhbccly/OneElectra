import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { services } from '@/data/services'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function ServicesSection() {
  const steps = [
    { step: '01', title: 'Requirement & Specs', desc: 'Tell us connector type, power output (kW), destination grid, & volume.' },
    { step: '02', title: 'Product & Factory Matching', desc: 'We identify certified hardware models from vetted Chinese factories.' },
    { step: '03', title: 'Sample & Detailed Quote', desc: 'Receive itemized wholesale pricing, lead times, & test samples.' },
    { step: '04', title: 'Quality Control & QA', desc: 'Pre-shipment high-voltage & electrical safety testing at source.' },
    { step: '05', title: 'Global Freight & Customs', desc: 'Sea/Air shipping (DDP/CIF/FOB) with complete CE/RoHS/UKCA docs.' },
    { step: '06', title: 'Delivery & Technical Support', desc: 'Doorstep arrival support, warranty management, & after-sales.' },
  ]

  return (
    <section className="border-t border-line py-20 md:py-28 overflow-hidden">
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

        {/* 6-Step Workflow */}
        <motion.div
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
              className="relative overflow-hidden rounded-2xl border border-line bg-panel/50 p-6 transition duration-300 hover:border-lime/40 hover:bg-panel"
            >
              <span className="font-display text-3xl font-bold text-lime/40 group-hover:text-lime">
                {s.step}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-off-white">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
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
                className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-panel/40 p-7 transition duration-500 hover:border-lime/30 hover:bg-panel/70"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 0% 100%, rgba(184,255,61,0.06), transparent 60%)' }}
                  aria-hidden
                />

                {/* Icon with pulse ring */}
                <div className="relative mb-5 inline-flex">
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-lime/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    aria-hidden
                  />
                  <div className="relative inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-panel text-lime transition duration-300 group-hover:border-lime/50 group-hover:bg-lime/10">
                    <motion.span
                      className="inline-flex"
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                    >
                      <Icon className="size-5" aria-hidden />
                    </motion.span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold text-off-white transition duration-300 group-hover:text-lime/90">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

                {/* Animated bottom border accent */}
                <motion.div
                  className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-lime to-transparent origin-left"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                />
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
