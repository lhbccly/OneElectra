import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BrandIcon } from '@/components/ui/BrandIcon'
import { lifestyle } from '@/assets/lifestyle'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function WhyChooseUsSection() {
  const { whyChooseSection, whyChoose } = site

  return (
    <section id="why-choose-us" className="border-t border-line bg-canvas-subtle py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionHeading
              eyebrow={whyChooseSection.eyebrow}
              title={whyChooseSection.title}
              description={whyChooseSection.description}
            />
          </motion.div>

          <motion.div
            className="relative hidden overflow-hidden rounded-[1.5rem] border border-line shadow-card lg:block"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            data-protect-media
          >
            <div className="aspect-[16/10]">
              <img
                src={lifestyle.wallboxCloseup}
                alt="Unbranded home EV wallbox charging a vehicle"
                draggable={false}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {whyChoose.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              custom={index}
              className="industrial-card group flex flex-col justify-between rounded-2xl p-7"
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-line bg-canvas-subtle text-emerald transition duration-300 group-hover:border-emerald group-hover:bg-emerald/10">
                    <BrandIcon name={item.icon} size={24} />
                  </div>
                  <span className="rounded-full border border-line bg-canvas-subtle px-3 py-1 text-[11px] font-semibold tracking-wide text-muted">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-navy transition duration-200 group-hover:text-emerald">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-line pt-4">
                <span className="size-2 rounded-full bg-emerald" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                  Verified Capability
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
