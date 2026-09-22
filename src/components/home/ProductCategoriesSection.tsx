import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { categories } from '@/data/categories'
import { site } from '@/data/site'
import { lifestyle, type LifestyleKey } from '@/assets/lifestyle'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

const categoryVisuals: Record<string, { imageKey: LifestyleKey; alt: string }> = {
  'ac-charging-pile': {
    imageKey: 'residentialAlt',
    alt: 'Residential AC wallbox charging a white EV beside a green living wall',
  },
  'dc-charging-pile': {
    imageKey: 'publicFast',
    alt: 'Electric vehicle on a high-power public charging station at night',
  },
  'portable-charging-pile': {
    imageKey: 'portable',
    alt: 'Electric vehicle ready for portable travel and emergency charging',
  },
  'adapters-connectors': {
    imageKey: 'heroAlt',
    alt: 'EV charging connector plugged into a vehicle charging port',
  },
}

export function ProductCategoriesSection() {
  const { categoriesSection } = site

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
            eyebrow={categoriesSection.eyebrow}
            title={categoriesSection.title}
            description={categoriesSection.description}
          />
        </motion.div>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {categories.map((category, index) => {
            const visual = categoryVisuals[category.id]
            return (
              <motion.div key={category.id} variants={fadeUp}>
                <Link
                  to={`/products?category=${category.slug}`}
                  className="group relative flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-line shadow-card transition duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-card-hover"
                >
                  <div className="absolute inset-0" data-protect-media>
                    <img
                      src={lifestyle[visual?.imageKey ?? 'heroAlt']}
                      alt={visual?.alt ?? category.name}
                      draggable={false}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/92 via-[#0a1210]/45 to-[#0a1210]/15"
                      aria-hidden
                    />
                  </div>

                  <div className="relative z-[1] mt-auto flex flex-col p-6 text-white">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-volt/20 px-3 py-1 text-[11px] font-bold tracking-wide text-volt backdrop-blur-sm">
                        {category.powerLabel}
                      </span>
                      <span className="font-mono text-xs font-bold text-white/70">0{index + 1}</span>
                    </div>

                    <h3 className="font-display text-2xl font-bold transition duration-300 group-hover:text-volt">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{category.description}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/85 transition group-hover:text-volt">
                        Explore Range
                      </span>
                      <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/25 text-white transition group-hover:border-volt group-hover:bg-volt/15 group-hover:text-volt">
                        <ArrowUpRight className="size-4" aria-hidden />
                      </span>
                    </div>
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
