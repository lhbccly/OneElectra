import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { BrandStorySection } from '@/components/home/BrandStorySection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { StandardsSection } from '@/components/home/StandardsSection'
import { GlobalPresenceSection } from '@/components/home/GlobalPresenceSection'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import chargerImage from '@/assets/products/ac-charging-pile/dl-eu004/01.png'
import { staggerContainer, fadeUp, fadeLeft, viewportOnce } from '@/lib/animations'

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
      <section className="hero-wash overflow-hidden border-b border-line py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer}>
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

          <img
            src={chargerImage}
            alt="One Electra AC EV charger"
            draggable={false}
            className="mx-auto h-auto max-h-[22rem] w-[72%] object-contain"
          />
        </Container>
      </section>

      <Container className="pt-14 md:pt-20">
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {site.trustStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-panel/50 p-5"
            >
              <p className="font-display text-2xl font-semibold text-lime">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="my-6 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45 }}
        >
          {site.trustHighlights.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full border border-line bg-white/[0.02] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </Container>

      <BrandStorySection />
      <WhyChooseUsSection />
      <StandardsSection />
      <GlobalPresenceSection />

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
          className="overflow-hidden rounded-[2rem] border border-line bg-graphite p-8 md:p-12"
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
          <p className="mb-6 text-xs text-muted">{site.opportunity.citation}</p>
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
