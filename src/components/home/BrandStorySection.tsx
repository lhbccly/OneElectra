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
        >
          <p className="font-editorial max-w-2xl text-2xl leading-tight text-off-white/80 md:text-3xl lg:pb-4">
            {site.brandStory.body.split('. ').map((sentence, i) => (
              <motion.span
                key={i}
                className="block mt-2 first:mt-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {sentence}{i < site.brandStory.body.split('. ').length - 1 ? '.' : ''}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
