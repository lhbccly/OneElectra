import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { services } from '@/data/services'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function ServicesSection() {
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
              eyebrow="Services"
              title="Trade, logistics, and B2B support"
              description="From factory matching to freight and after-sales, One Electra supports the full sourcing journey."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ButtonLink to="/services" variant="secondary" className="shrink-0 self-start md:self-auto">
              All Services
            </ButtonLink>
          </motion.div>
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
