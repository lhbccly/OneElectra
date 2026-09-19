import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'
import gunImage from '@/assets/products/adapters-connectors/type2-cable-gun/01.png'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'
 
export function GlobalPresenceSection() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [-20, 20]), { stiffness: 60, damping: 20 })

  return (
    <section id="global-presence" ref={sectionRef} className="border-t border-line bg-graphite/30 py-20 md:py-28 overflow-hidden">
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

          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
          >
            {site.globalPartner.markets.map((market, i) => (
              <motion.span
                key={market}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.06, borderColor: 'rgba(184,255,61,0.5)', color: '#b8ff3d' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="cursor-default rounded-full border border-line px-4 py-2 text-sm text-off-white transition-colors duration-300"
              >
                {market}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="image-frame relative overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[var(--shadow-glow)]"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeRight}
          style={{ y: imageY }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,255,61,0.18),transparent_58%)]" aria-hidden />
          <div
            className="relative z-[1] mx-auto aspect-[4/3] w-[min(100%,34rem)]"
            role="img"
            aria-label="One Electra EV charger assembling from its body, pipes, and Type 2 charging gun"
          >
            <motion.div
              className="absolute left-[24%] top-[18%] z-[3] h-[62%] w-[39%] rounded-[2rem] border-4 border-[#aab4b3] bg-gradient-to-br from-[#eef2ef] via-[#768083] 45%, #20272a 100%] shadow-[0_1.5rem_2.5rem_rgba(0,0,0,0.55),inset_-0.7rem_-0.8rem_1rem_rgba(0,0,0,0.3)]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -48, scale: 0.7, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ type: 'spring', stiffness: 105, damping: 17, mass: 0.9 }}
            >
              <div className="absolute left-[15%] right-[15%] top-[11%] h-[31%] rounded-xl border border-white/20 bg-[#1c2427] p-[7%] shadow-[inset_0_0.15rem_0.35rem_rgba(255,255,255,0.12)]" aria-hidden>
                <div className="size-full rounded bg-[linear-gradient(145deg,#4d5a5d,#2d3639)] shadow-inner" />
              </div>
              <div className="absolute left-1/2 top-[49%] size-3 -translate-x-1/2 rounded-full border border-white/40 bg-[#1d2528] shadow-[0_0_0.5rem_rgba(255,255,255,0.25)]" aria-hidden />
              <div className="absolute bottom-[13%] left-1/2 h-[22%] w-1.5 -translate-x-1/2 rounded-full bg-lime shadow-[0_0_1rem_rgba(184,255,61,0.9)]" aria-hidden />
              <div className="absolute -right-2 top-[48%] size-4 rounded-full border-2 border-lime/70 bg-[#20272a] shadow-[0_0_0.8rem_rgba(184,255,61,0.45)]" aria-hidden />
            </motion.div>

            <motion.svg
              className="pointer-events-none absolute inset-0 z-[2] h-full w-full overflow-visible"
              viewBox="0 0 400 300"
              fill="none"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 26, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ type: 'spring', stiffness: 115, damping: 18, mass: 0.8 }}
              aria-hidden
            >
              <path d="M153 226 C151 253 118 249 106 271 C101 280 112 287 140 284" stroke="#090d0f" strokeWidth="15" strokeLinecap="round" />
              <path d="M153 226 C151 253 118 249 106 271 C101 280 112 287 140 284" stroke="#303a3d" strokeWidth="9" strokeLinecap="round" />
              <path d="M153 226 C151 253 118 249 106 271 C101 280 112 287 140 284" stroke="#b8ff3d" strokeOpacity="0.42" strokeWidth="2" strokeLinecap="round" />
              <rect x="143" y="220" width="19" height="13" rx="5" fill="#161d20" stroke="#8d9698" strokeWidth="2" />
              <circle cx="140" cy="284" r="8" fill="#111719" stroke="#8d9698" strokeWidth="2" />
              <path d="M251 143 C279 136 275 176 300 181" stroke="#090d0f" strokeWidth="16" strokeLinecap="round" />
              <path d="M251 143 C279 136 275 176 300 181" stroke="#303a3d" strokeWidth="10" strokeLinecap="round" />
              <path d="M251 143 C279 136 275 176 300 181" stroke="#b8ff3d" strokeOpacity="0.48" strokeWidth="2" strokeLinecap="round" />
              <rect x="246" y="136" width="17" height="14" rx="5" fill="#161d20" stroke="#8d9698" strokeWidth="2" />
              <rect x="293" y="175" width="13" height="12" rx="4" fill="#161d20" stroke="#8d9698" strokeWidth="2" />
            </motion.svg>
            <motion.div
              className="absolute left-[61%] top-[39%] z-[2] size-3 rounded-full bg-lime shadow-[0_0_1rem_rgba(184,255,61,0.9)]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.5 }}
              aria-hidden
            />
            <motion.img
              src={gunImage}
              alt="Type 2 EV charging gun"
              className="absolute right-[1%] top-[24%] z-[4] w-[36%] -rotate-[6deg] object-contain drop-shadow-[0_0_1.5rem_rgba(184,255,61,0.28)]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, x: 76, y: -34, rotate: 18, scale: 0.72 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6, scale: 1 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ type: 'spring', stiffness: 105, damping: 16, mass: 0.75 }}
              loading="lazy"
            />
          </div>
          {/* Corner accent */}
          <div className="absolute top-4 right-4 z-10 rounded-full border border-lime/30 bg-ink/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-lime backdrop-blur-sm">
            Global
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
