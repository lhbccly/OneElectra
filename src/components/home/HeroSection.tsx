import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useQuote } from '@/context/QuoteContext'
import { site } from '@/data/site'
import heroImage from '@/assets/products/ac-charging-pile/dl-eu004/01.png'
import evChargingScene from '@/assets/hero/ev-charging-scene.svg'

const titleWords = site.hero.title.split(' ')

export function HeroSection() {
  const { openQuoteModal } = useQuote()
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 0.45], [0, reduceMotion ? 0 : -36]),
    { stiffness: 80, damping: 22 },
  )

  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || reduceMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="hero-wash relative overflow-hidden pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-60" aria-hidden />
      <img
        src={evChargingScene}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-16 z-0 w-[min(58rem,68vw)] opacity-[0.075] mix-blend-multiply"
      />

      <Container className="relative grid min-h-[calc(100dvh-5rem)] items-center gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:py-14">
        <div className="relative z-[1] max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-3"
          >
            <motion.span
              className="inline-block h-0.5 bg-emerald"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald">
              {site.brand.name} • EV HARDWARE SUPPLY
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="font-display text-balance text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl xl:text-[4.2rem] xl:leading-[1.08]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 + titleWords.length * 0.05 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {site.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + titleWords.length * 0.05 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button variant="lime" size="lg" onClick={() => openQuoteModal()}>
              {site.hero.primaryCta}
            </Button>
            <ButtonLink to="/products" variant="secondary" size="lg">
              {site.hero.secondaryCta}
            </ButtonLink>
          </motion.div>

          {/* Category Quick Links Strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 + titleWords.length * 0.05 }}
            className="mt-8 rounded-lg border border-line bg-graphite/85 p-5 shadow-xs backdrop-blur-sm"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald mb-3">
              Explore Hardware Categories
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'AC Chargers (7-22kW)', to: '/products?category=ac-charging-pile' },
                { label: 'DC Fast Chargers (20-360kW)', to: '/products?category=dc-charging-pile' },
                { label: 'Portable Chargers (3.5-7kW)', to: '/products?category=portable-charging-pile' },
                { label: 'Cables & Adapters', to: '/products?category=adapters-connectors' },
                { label: 'OEM / ODM Branding', to: '/services' },
              ].map((cat) => (
                <Link
                  key={cat.label}
                  to={cat.to}
                  className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-emerald hover:text-emerald hover:bg-emerald/5 transition"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Key Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + titleWords.length * 0.05 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {[
              'Shenyang Yibu Trading Co.',
              'Audited Tier-1 Factories',
              'CE / RoHS / UKCA Certified',
              'Direct Wholesale Pricing',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-xs"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Seamless Floating EV Charger Product Render — NO Card Enclosure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center md:perspective-[1200px]"
          style={{ y: imageY }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Ambient Energy Radial Glow behind the charger render */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-emerald/15 blur-3xl" aria-hidden />

          <motion.div
            className="relative"
            style={{
              rotateX: reduceMotion ? 0 : rotateX,
              rotateY: reduceMotion ? 0 : rotateY,
              transformStyle: 'preserve-3d',
            }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
            <img
              src={heroImage}
              alt="One Electra AC EV charger"
              className="h-auto max-h-[38rem] w-full object-contain filter drop-shadow-[0_28px_38px_rgba(15,23,42,0.18)]"
              fetchPriority="high"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
