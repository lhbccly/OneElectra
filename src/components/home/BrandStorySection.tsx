import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import { lifestyle } from '@/assets/lifestyle'
import { fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'

export function BrandStorySection() {
  return (
    <section id="story" className="relative overflow-hidden border-t border-line bg-graphite py-20 md:py-28">
      <Container className="relative z-[1] grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border border-line shadow-card"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeLeft}
          data-protect-media
        >
          <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src={lifestyle.oem}
              alt="Engineer developing and validating EV charging hardware"
              draggable={false}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/75 via-transparent to-transparent" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-volt">Factory partnership</p>
            <p className="mt-2 max-w-sm font-display text-xl font-bold text-white md:text-2xl">
              Audited manufacturers. Documented quality. Export-ready hardware.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeRight}
          className="space-y-6"
        >
          <SectionHeading eyebrow={site.brandStory.eyebrow} title={site.brandStory.title} />
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
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
                <p className="text-sm font-medium leading-relaxed text-muted">{point}</p>
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
              <div key={item.label} className="industrial-card rounded-lg bg-canvas-subtle p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">{item.label}</p>
                <p className="mt-2 text-sm font-bold text-navy">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
