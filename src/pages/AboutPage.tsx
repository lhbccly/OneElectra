import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { BrandStorySection } from '@/components/home/BrandStorySection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { StandardsSection } from '@/components/home/StandardsSection'
import { GlobalPresenceSection } from '@/components/home/GlobalPresenceSection'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import { lifestyle } from '@/assets/lifestyle'
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
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0" data-protect-media>
          <img
            src={lifestyle.residential}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1210]/92 via-[#0a1210]/80 to-[#0a1210]/50" />
        </div>

        <Container className="relative z-[1] py-16 md:py-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeLeft}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-volt">About</p>
              <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
                {site.about.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                {site.about.intro}
              </p>
            </motion.div>
            <motion.div variants={fadeLeft} className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/products" variant="lime">
                Browse Products
              </ButtonLink>
              <ButtonLink
                to="/contact"
                variant="secondary"
                className="!border-white/35 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Get Quote
              </ButtonLink>
            </motion.div>
          </motion.div>
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
          className="relative overflow-hidden rounded-[2rem] border border-line shadow-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          data-protect-media
        >
          <img
            src={lifestyle.publicFast}
            alt=""
            aria-hidden="true"
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a1210]/88" />
          <div className="relative p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-volt">Opportunity</p>
            <h2 className="mt-3 max-w-3xl font-display text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {site.opportunity.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {site.opportunity.body}
            </p>
            <p className="mb-6 mt-3 text-xs text-white/55">{site.opportunity.citation}</p>
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
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm text-white/90 backdrop-blur-sm transition duration-300 hover:border-volt/40 hover:bg-white/10"
                  whileHover={{ y: -2 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  )
}
