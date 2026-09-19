import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { categories } from '@/data/categories'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const categoryIconMap: Record<string, 'wallbox' | 'fast_dc' | 'portable' | 'adapter'> = {
  'ac-charging-pile': 'wallbox',
  'dc-charging-pile': 'fast_dc',
  'portable-charging-pile': 'portable',
  'adapters-connectors': 'adapter',
}

export function ProductCategoriesSection() {
  return (
    <section id="categories" className="border-t border-line bg-canvas-subtle py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Hardware Ecosystem"
            title="Charging systems for every deployment"
            description="Explore AC wallboxes, DC hardware, portable chargers, and cross-standard adapters — organized for fast product discovery."
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {categories.map((category, index) => {
            const iconName = categoryIconMap[category.id] || 'wallbox'
            return (
              <motion.div key={category.id} variants={fadeUp}>
                <Link
                  to={`/products?category=${category.slug}`}
                  className="industrial-card group relative flex h-full flex-col justify-between rounded-2xl p-7"
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-emerald transition duration-300 group-hover:border-emerald group-hover:bg-emerald/10">
                        <BrandIcon name={iconName} size={24} />
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-navy transition duration-300 group-hover:text-emerald">
                      {category.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover:text-emerald transition">
                      Explore Range
                    </span>
                    <motion.span
                      className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition group-hover:border-emerald group-hover:text-emerald group-hover:bg-emerald/10"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight className="size-4" aria-hidden />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
