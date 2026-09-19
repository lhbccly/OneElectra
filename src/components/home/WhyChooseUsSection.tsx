import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function WhyChooseUsSection() {
  return (
    <section className="border-t border-line bg-graphite/30 py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeading
            eyebrow="Why One Electra"
            title="Built for international buyers who need speed, standards, and supply confidence."
            description="We help distributors, fleet operators, developers, and contractors find the right charging hardware without guessing across incompatible standards or unreliable suppliers."
          />
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {site.whyChoose.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              custom={index}
              className="group relative overflow-hidden rounded-lg border border-line bg-panel/50 p-6 transition duration-300 hover:border-lime/40 hover:bg-panel"
              whileHover={{ y: -4 }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 0% 100%, rgba(184,255,61,0.08), transparent 68%)' }}
                aria-hidden
              />

              <div className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-line bg-lime/10 text-lg font-semibold text-lime">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="relative font-display text-xl font-semibold text-off-white">{item.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
