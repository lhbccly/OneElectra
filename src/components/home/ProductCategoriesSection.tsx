import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { categories } from '@/data/categories'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function ProductCategoriesSection() {
  return (
    <section className="border-t border-line bg-graphite/40 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Solutions"
            title="Charging systems for every deployment"
            description="Explore AC wallboxes, DC hardware, portable chargers, and cross-standard adapters — organized for fast product discovery."
          />
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {categories.map((category, index) => (
            <motion.div key={category.id} variants={fadeUp}>
              <Link
                to={`/products?category=${category.slug}`}
                className="group relative flex h-full overflow-hidden rounded-[1.75rem] border border-line bg-panel p-7 transition duration-500 hover:-translate-y-1 hover:border-lime/40 hover:shadow-[var(--shadow-glow)] md:p-9"
              >
                {/* Animated corner gradient on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: 'radial-gradient(circle at 90% 10%, rgba(184,255,61,0.08), transparent 60%)',
                  }}
                  aria-hidden
                />
                {/* Animated left border accent */}
                <motion.div
                  className="absolute left-0 top-8 bottom-8 w-[2px] bg-lime rounded-full origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                />

                <div className="flex items-start justify-between gap-4 w-full">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-off-white md:text-3xl transition duration-300 group-hover:text-lime">
                      {category.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                      {category.description}
                    </p>
                  </div>
                  <motion.span
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-muted transition group-hover:border-lime group-hover:text-lime group-hover:bg-lime/10"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <ArrowUpRight className="size-5" aria-hidden />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
