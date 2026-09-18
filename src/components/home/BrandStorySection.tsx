import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import { fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'

export function BrandStorySection() {
  return (
    <section className="border-t border-line py-20 md:py-28 overflow-hidden">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeLeft}
        >
          <SectionHeading eyebrow={site.brandStory.eyebrow} title={site.brandStory.title} />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeRight}
          className="space-y-6"
        >
          <p className="font-display max-w-2xl text-2xl leading-[1.15] tracking-[-0.03em] text-off-white/85 md:text-3xl lg:pb-2">
            {site.brandStory.body}
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {site.brandStory.points.map((point, index) => (
              <motion.div
                key={point}
                className="rounded-2xl border border-line bg-panel/70 p-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.12, duration: 0.45 }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-lime/12 text-sm font-semibold text-lime">
                  0{index + 1}
                </div>
                <p className="text-sm leading-relaxed text-muted">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid gap-3 sm:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            {[
              { label: 'Standards', value: 'Type 1 / Type 2 / GB/T / NACS' },
              { label: 'Markets', value: 'Europe • Middle East • South Asia' },
              { label: 'Support', value: 'Quote response in 24 hours' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-line bg-graphite/60 p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted">{item.label}</p>
                <p className="mt-2 text-sm font-medium text-off-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
