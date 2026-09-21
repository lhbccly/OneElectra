import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import portableChargerImage from '@/assets/products/portable-charging-pile/nacs-portable/01.png'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function ServicesPage() {
  usePageMeta(
    'Services | One Electra',
    'Payment terms, China–Pakistan logistics, global shipping, and bulk B2B support from One Electra.',
  )

  return (
    <motion.div
      className="pb-20 md:pb-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero-wash border-b border-line py-16 md:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Services"
                title="Sourcing, logistics, and B2B trade support"
                description="From technical matching and factory QA to freight terms and documentation — One Electra manages the full procurement cycle for international buyers."
              />
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <WhatsAppButton label="Request Freight Quotation" />
              <ButtonLink to="/about" variant="secondary">
                Why buy through us
              </ButtonLink>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex min-h-56 items-center justify-center lg:min-h-72"
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <div className="pointer-events-none absolute size-72 rounded-full bg-lime/10 blur-3xl" />
            <img
              src={portableChargerImage}
              alt=""
              className="relative z-[1] h-auto w-[min(100%,32rem)] object-contain opacity-70 drop-shadow-[0_1.5rem_2rem_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </Container>
      </section>

      <Container className="pt-14 md:pt-20">
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
              title="6-step B2B sourcing & logistics workflow"
              description="From initial technical matching to pre-shipment factory QA and door-to-door freight, One Electra manages the complete procurement cycle."
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {site.sourcingWorkflow.map((s, idx) => (
            <motion.div
              key={s.step}
              variants={fadeUp}
              custom={idx}
              className="relative overflow-hidden rounded-2xl border border-line bg-panel/50 p-6 transition duration-300 hover:border-lime/40 hover:bg-panel"
            >
              <span className="font-display text-3xl font-bold text-lime/40">{s.step}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-off-white">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Commercial services"
            title="Trade, logistics, and business support"
            description="Commercial terms and logistics options designed for distributors, operators, and importers."
          />
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-panel/50 p-8 transition duration-300 hover:border-lime/30"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle at 0% 0%, rgba(184,255,61,0.07), transparent 60%)' }}
                  aria-hidden
                />

                <div className="relative mb-5 inline-flex">
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-lime/20"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    aria-hidden
                  />
                  <div className="relative inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-panel text-lime transition duration-300 group-hover:border-lime/50 group-hover:bg-lime/10">
                    <Icon className="size-5" aria-hidden />
                  </div>
                </div>

                <h2 className="font-display text-2xl font-semibold text-off-white transition duration-300 group-hover:text-lime/90">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                <motion.ul
                  className="mt-6 space-y-2"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={staggerContainer}
                >
                  {service.points.map((point) => (
                    <motion.li
                      key={point}
                      variants={fadeUp}
                      className="flex items-start gap-2 text-sm text-off-white/90"
                    >
                      <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-lime" aria-hidden />
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="mt-14 rounded-[1.75rem] border border-line bg-panel/40 p-8 text-center md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl font-semibold text-off-white md:text-3xl">
            Need a freight or wholesale quote?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Share your destination market, connector standard, power range, and volume. We will match hardware and return commercial options.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <WhatsAppButton label="WhatsApp Quote" />
            <ButtonLink to="/contact" variant="secondary">
              Contact form
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  )
}
