import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { lifestyle } from '@/assets/lifestyle'
import { usePageMeta } from '@/lib/usePageMeta'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const serviceImages: Record<string, { src: string; alt: string }> = {
  'payment-trade': {
    src: lifestyle.residential,
    alt: 'Home EV wallbox hardware for wholesale and trade orders',
  },
  'china-pakistan-logistics': {
    src: lifestyle.logistics,
    alt: 'Global logistics hub for China–Pakistan freight lanes',
  },
  'global-shipping': {
    src: lifestyle.publicFast,
    alt: 'EV charging infrastructure delivered to international markets',
  },
  'bulk-business': {
    src: lifestyle.oem,
    alt: 'OEM engineering and bulk B2B hardware support',
  },
}

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
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0" data-protect-media>
          <img
            src={lifestyle.logistics}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1210]/92 via-[#0a1210]/82 to-[#0a1210]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/50 via-transparent to-[#0a1210]/35" />
        </div>

        <Container className="relative z-[1] py-16 md:py-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-volt">Services</p>
              <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
                Sourcing, logistics, and B2B trade support
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                From technical matching and factory QA to freight terms and documentation — One Electra
                manages the full procurement cycle for international buyers.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton label="Request Freight Quotation" />
              <ButtonLink
                to="/about"
                variant="secondary"
                size="lg"
                className="!border-white/35 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Why buy through us
              </ButtonLink>
            </motion.div>
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
            const visual = serviceImages[service.id]
            return (
              <motion.article
                key={service.id}
                className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-panel/50 transition duration-300 hover:border-lime/30"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                {visual ? (
                  <div className="relative aspect-[21/9] overflow-hidden" data-protect-media>
                    <img
                      src={visual.src}
                      alt={visual.alt}
                      draggable={false}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
                  </div>
                ) : null}

                <div className="relative p-8 pt-6">
                  <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-panel text-lime transition duration-300 group-hover:border-lime/50 group-hover:bg-lime/10">
                    <Icon className="size-5" aria-hidden />
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
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-line shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          data-protect-media
        >
          <img
            src={lifestyle.commercialAlt}
            alt=""
            aria-hidden="true"
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1210]/88" />
          <div className="relative px-8 py-10 text-center md:px-10 md:py-12">
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
              Need a freight or wholesale quote?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
              Share your destination market, connector standard, power range, and volume. We will match
              hardware and return commercial options.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <WhatsAppButton label="WhatsApp Quote" />
              <ButtonLink
                to="/contact"
                variant="secondary"
                size="lg"
                className="!border-white/35 !bg-transparent !text-white hover:!bg-white/10"
              >
                Contact form
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  )
}
