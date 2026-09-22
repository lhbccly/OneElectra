import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import { lifestyle } from '@/assets/lifestyle'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'

export function GlobalPresenceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [-16, 16]), { stiffness: 60, damping: 20 })

  return (
    <section
      id="global-presence"
      ref={sectionRef}
      className="overflow-hidden border-t border-line bg-graphite/30 py-20 md:py-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeLeft}>
            <SectionHeading
              eyebrow="Markets"
              title={site.globalPartner.title}
              description={site.globalPartner.body}
            />
          </motion.div>

          <motion.div className="flex flex-wrap gap-2" variants={staggerContainer}>
            {site.globalPartner.markets.map((market, i) => (
              <motion.span
                key={market}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.06, borderColor: 'rgba(132,204,22,0.5)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="cursor-default rounded-full border border-line px-4 py-2 text-sm text-off-white transition-colors duration-300"
              >
                {market}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-line shadow-card"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeRight}
          style={{ y: imageY }}
          data-protect-media
        >
          <div className="aspect-[4/3]">
            <img
              src={lifestyle.logistics}
              alt="Global logistics and freight network supporting EV hardware exports"
              draggable={false}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/75 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-volt">Global reach</p>
            <p className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
              Europe · Middle East · South Asia · Worldwide
            </p>
          </div>
          <div className="absolute top-4 right-4 rounded-full border border-lime/30 bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-lime backdrop-blur-sm">
            Export ready
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
