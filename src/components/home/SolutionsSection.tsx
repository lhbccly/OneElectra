import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useQuote } from '@/context/QuoteContext'
import { lifestyle } from '@/assets/lifestyle'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function SolutionsSection() {
  const { openQuoteModal } = useQuote()
  const { solutions } = site

  return (
    <section id="solutions" className="border-t border-line bg-graphite py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <SectionHeading
            eyebrow={solutions.eyebrow}
            title={solutions.title}
            description={solutions.description}
          />
          <button
            onClick={() => openQuoteModal({ useCase: 'General Solution Query' })}
            className="shrink-0 rounded-xl border border-emerald/30 bg-emerald/10 px-5 py-2.5 text-sm font-bold text-emerald transition hover:bg-emerald hover:text-white shadow-xs"
          >
            {solutions.ctaLabel}
          </button>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {solutions.items.map((item, index) => (
            <motion.article
              key={item.id}
              variants={fadeUp}
              custom={index}
              className="group overflow-hidden rounded-2xl border border-line bg-panel shadow-card transition duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/10] overflow-hidden" data-protect-media>
                <img
                  src={lifestyle[item.imageKey]}
                  alt={item.imageAlt}
                  draggable={false}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/55 via-transparent to-transparent"
                  aria-hidden
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-[#f8faf9] px-3 py-1 text-[11px] font-bold tracking-wide text-[#18201f] shadow-sm">
                  {item.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy transition duration-200 group-hover:text-emerald md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <Link
                    to={`/products?category=${item.categorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted transition hover:text-emerald"
                  >
                    View Models <ArrowRight className="size-3.5" />
                  </Link>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    Specs Available
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
