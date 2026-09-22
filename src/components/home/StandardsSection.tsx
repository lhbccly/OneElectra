import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { lifestyle } from '@/assets/lifestyle'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function StandardsSection() {
  const { standardsSection, standards } = site

  return (
    <section id="standards" className="overflow-hidden border-t border-line bg-canvas-subtle py-20 md:py-28">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
        >
          <SectionHeading
            eyebrow={standardsSection.eyebrow}
            title={standardsSection.title}
            description={standardsSection.description}
          />
          <div
            className="relative hidden overflow-hidden rounded-[1.5rem] border border-line shadow-card lg:block"
            data-protect-media
          >
            <div className="aspect-[16/10]">
              <img
                src={lifestyle.publicFast}
                alt="Certified multi-standard EV charging in the field"
                draggable={false}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {standards.map((standard, index) => (
            <motion.article
              key={standard.id}
              variants={fadeUp}
              custom={index}
              className="industrial-card group relative flex flex-col overflow-hidden rounded-2xl"
              whileHover={{ y: -4 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden" data-protect-media>
                <img
                  src={lifestyle[standard.imageKey]}
                  alt={standard.imageAlt}
                  draggable={false}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/35 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-line bg-canvas-subtle text-emerald transition group-hover:border-emerald group-hover:bg-emerald/10">
                      <BrandIcon name={standard.iconName} size={22} />
                    </div>
                    <span className="rounded-md border border-line bg-canvas-subtle px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-emerald">
                      {standard.code}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy transition duration-200 group-hover:text-emerald">
                    {standard.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-emerald">{standard.region}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{standard.summary}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-4">
                  {standardsSection.complianceBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-line bg-canvas-subtle px-2.5 py-0.5 text-[10px] font-semibold text-muted"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
