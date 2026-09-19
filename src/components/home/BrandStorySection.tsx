import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import { fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'
import energySavingsFlow from '@/assets/hero/energy-savings-flow.svg'

export function BrandStorySection() {
  return (
    <section id="story" className="relative border-t border-line bg-graphite py-20 md:py-28 overflow-hidden">
      <img
        src={energySavingsFlow}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-8 z-0 w-[min(38rem,52vw)] opacity-[0.06] mix-blend-multiply"
      />
      <Container className="relative z-[1] grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
          <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg lg:pb-2">
            {site.brandStory.body}
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {site.brandStory.points.map((point, index) => (
              <motion.div
                key={point}
                className="industrial-card rounded-2xl p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.12, duration: 0.45 }}
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald/10 text-sm font-bold text-emerald">
                  0{index + 1}
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-700">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
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
              <div key={item.label} className="industrial-card rounded-lg p-5 bg-canvas-subtle">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-emerald">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-navy">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
