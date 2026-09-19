import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { services } from '@/data/services'
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
                title="Trade, logistics, and business support"
                description="Commercial terms and logistics options designed for distributors, operators, and importers."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <WhatsAppButton label="Request Freight Quotation" />
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
          className="mb-8 rounded-[1.75rem] border border-line bg-panel/40 p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-lime">How we work</p>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {[
              'Share your requirements',
              'Match suitable hardware',
              'Confirm standards and quantity',
              'Inspect and prepare shipment',
              'Deliver with documentation',
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-line bg-graphite/70 p-4">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-lime/12 text-xs font-semibold text-lime">
                  0{index + 1}
                </div>
                <p className="text-sm leading-relaxed text-off-white/90">{step}</p>
              </div>
            ))}
          </div>
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
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 0% 0%, rgba(184,255,61,0.07), transparent 60%)' }}
                aria-hidden
              />

              {/* Icon with pulse */}
              <div className="relative mb-5 inline-flex">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-lime/20"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                  aria-hidden
                />
                <div className="relative inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-panel text-lime transition duration-300 group-hover:border-lime/50 group-hover:bg-lime/10">
                  <motion.span
                    className="inline-flex"
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                  >
                    <Icon className="size-5" aria-hidden />
                  </motion.span>
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
      </Container>
    </motion.div>
  )
}
