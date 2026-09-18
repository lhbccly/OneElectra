import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import chargerImage from '@/assets/products/ac-charging-pile/dl-eu004/01.png'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'

export function AboutPage() {
  usePageMeta(
    'About | One Electra',
    'Why partners choose One Electra for certified EV charging hardware, OEM/ODM sourcing, and global logistics support.',
  )

  return (
    <motion.div
      className="pb-20 md:pb-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero-wash border-b border-line py-16 md:py-24 overflow-hidden">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeLeft}>
              <SectionHeading
                eyebrow="About"
                title={site.about.title}
                description={site.about.intro}
              />
            </motion.div>
            <motion.div variants={fadeLeft} className="flex flex-wrap gap-3">
              <ButtonLink to="/products" variant="lime">
                Browse Products
              </ButtonLink>
              <WhatsAppButton variant="secondary" label="Get Quote" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[2rem] border border-line bg-graphite/80"
            initial="hidden"
            animate="show"
            variants={fadeRight}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,255,61,0.18),transparent_58%)]" aria-hidden />
            <img
              src={chargerImage}
              alt="One Electra AC EV charger"
              className="relative z-[1] h-auto max-h-[22rem] w-[72%] object-contain drop-shadow-[0_0_2rem_rgba(184,255,61,0.2)]"
            />
            <span className="absolute bottom-5 left-5 z-[2] text-[10px] uppercase tracking-[0.2em] text-lime">
              Certified charging hardware
            </span>
          </motion.div>
        </Container>
      </section>

      <Container className="grid gap-6 pt-16 md:grid-cols-2 md:pt-24">
        {[
          {
            title: 'Product features & buyer benefits',
            items: site.about.productBenefits,
          },
          {
            title: 'Global sourcing & B2B service',
            items: site.about.serviceBenefits,
          },
        ].map((card, ci) => (
          <motion.article
            key={card.title}
            className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-panel/50 p-8 transition duration-300 hover:border-lime/30"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={ci}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(184,255,61,0.06), transparent 60%)' }}
              aria-hidden
            />
            <h2 className="font-display text-2xl font-semibold text-off-white">{card.title}</h2>
            <motion.ul
              className="mt-6 space-y-3"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {card.items.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </Container>

      <Container className="pt-16 md:pt-24">
        <motion.div
          className="rounded-[2rem] border border-line bg-graphite p-8 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            eyebrow="Opportunity"
            title={site.opportunity.title}
            description={site.opportunity.body}
          />
          <motion.ul
            className="grid gap-3 md:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {site.opportunity.points.map((point) => (
              <motion.li
                key={point}
                variants={fadeUp}
                className="rounded-2xl border border-line bg-panel/40 px-5 py-4 text-sm text-off-white transition duration-300 hover:border-lime/30 hover:bg-panel/70"
                whileHover={{ y: -2 }}
              >
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </motion.div>
  )
}
