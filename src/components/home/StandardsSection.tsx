import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function StandardsSection() {
  return (
    <section className="border-t border-line py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Technology"
            title="Global charging standards we support"
            description="Regional connector expertise is built into product selection, documentation, and market guidance."
          />
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {site.standards.map((standard, index) => (
            <motion.article
              key={standard.id}
              variants={fadeUp}
              custom={index}
              className="group relative overflow-hidden rounded-[1.5rem] border border-line bg-panel/50 p-6 transition duration-300 hover:border-lime/40"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Animated index number */}
              <motion.div
                className="pointer-events-none absolute -right-2 -top-4 font-display text-[5rem] font-bold leading-none text-white/[0.03] transition duration-500 group-hover:text-lime/[0.06] select-none"
                aria-hidden
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              {/* Top border accent that draws in on hover */}
              <motion.div
                className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-lime to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                aria-hidden
              />

              <h3 className="font-display text-xl font-semibold text-off-white transition duration-300 group-hover:text-lime">
                {standard.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{standard.summary}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
