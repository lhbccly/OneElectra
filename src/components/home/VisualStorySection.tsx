import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { lifestyle } from '@/assets/lifestyle'
import { site } from '@/data/site'
import { fadeLeft, fadeRight, fadeUp, viewportOnce } from '@/lib/animations'

const highlights = [
  {
    title: 'Verified manufacturers',
    body: 'Audited factories producing CE, RoHS, UKCA, and FCC certified equipment.',
  },
  {
    title: 'Multi-standard matching',
    body: 'Precise technical alignment across Type 1, Type 2, GB/T, and NACS.',
  },
  {
    title: 'Quality & logistics',
    body: 'Pre-shipment testing plus DDP / CIF / FOB freight to your destination market.',
  },
]

export function VisualStorySection() {
  return (
    <section id="story" className="relative border-t border-line bg-graphite py-20 md:py-28 overflow-hidden">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
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
              src={lifestyle.residentialAlt}
              alt="Modern home EV charging setup with wallbox beside a white electric SUV"
              draggable={false}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1210]/70 via-transparent to-transparent"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-volt">In the field</p>
            <p className="mt-2 max-w-sm font-display text-xl font-bold text-white md:text-2xl">
              Hardware that looks as good installed as it performs on paper.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeRight}
        >
          <SectionHeading
            eyebrow={site.brandStory.eyebrow}
            title={site.brandStory.title}
            description={site.brandStory.body}
          />

          <ul className="mt-2 space-y-4">
            {highlights.map((item, index) => (
              <motion.li
                key={item.title}
                className="flex gap-3 rounded-2xl border border-line bg-panel p-4"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald" aria-hidden />
                <div>
                  <p className="font-display text-base font-bold text-navy">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/about" variant="lime">
              Our sourcing story
            </ButtonLink>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-panel px-5 py-2.5 text-sm font-bold text-navy transition hover:border-emerald hover:text-emerald"
            >
              Logistics & QA <ArrowRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      </Container>

      <Container className="mt-14 md:mt-20">
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          {site.trustStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-panel p-5"
            >
              <p className="font-display text-2xl font-bold text-emerald">{stat.value}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
