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

// Floating particle component
function Particle({ x, y, size, delay, duration }: { x: number; y: number; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full bg-lime"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        y: [0, -40, -80],
        x: [0, Math.sin(x) * 20, Math.sin(x) * 40],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
      aria-hidden
    />
  )
}

// Words that animate in with a stagger
const titleWords = site.hero.title.split(' ')

export function HeroSection() {
  const { openQuoteModal } = useQuote()
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 0.45], [0, reduceMotion ? 0 : -72]),
    { stiffness: 80, damping: 22 },
  )

  // 3D tilt effect for the product image
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 30 })

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

  const particles = !reduceMotion ? [
    { x: 5, y: 80, size: 2, delay: 0, duration: 4.5 },
    { x: 12, y: 60, size: 3, delay: 0.7, duration: 5.2 },
    { x: 20, y: 70, size: 1.5, delay: 1.4, duration: 4.8 },
    { x: 8, y: 40, size: 2.5, delay: 2.1, duration: 6 },
    { x: 18, y: 90, size: 2, delay: 0.3, duration: 5.5 },
    { x: 85, y: 85, size: 2, delay: 1, duration: 4.2 },
    { x: 92, y: 65, size: 3, delay: 0.5, duration: 5.8 },
    { x: 78, y: 75, size: 1.5, delay: 1.8, duration: 4.6 },
    { x: 88, y: 45, size: 2.5, delay: 2.4, duration: 5.1 },
  ] : []

  return (
    <section className="relative overflow-hidden hero-wash">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-40" aria-hidden />

      {/* Animated ambient orbs */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-1/4 size-96 rounded-full bg-lime/10 blur-[120px]"
        animate={reduceMotion ? undefined : {
          scale: [1, 1.18, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-24 bottom-1/4 size-80 rounded-full bg-soft-green/8 blur-[100px]"
        animate={reduceMotion ? undefined : {
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.45, 0.2],
          y: [0, -30, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <Container className="relative grid min-h-[calc(100dvh-4rem)] items-center gap-10 py-16 md:min-h-[calc(100dvh-5rem)] md:grid-cols-[1.05fr_0.95fr] md:gap-12 lg:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow with sliding underline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <motion.span
              className="inline-block h-px bg-lime"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-lime">
              {site.brand.name}
            </span>
          </motion.div>

          {/* Word-by-word title animation */}
          <h1 className="font-display text-balance text-4xl font-semibold tracking-[-0.03em] text-off-white sm:text-5xl lg:text-6xl xl:text-[4.65rem] xl:leading-[1.02]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 + titleWords.length * 0.06 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {site.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 + titleWords.length * 0.06 }}
            className="mt-8 flex flex-wrap items-center gap-3"
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
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 + titleWords.length * 0.06 }}
            className="mt-8 rounded-2xl border border-line bg-panel/50 p-4 backdrop-blur-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime mb-3">
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
                  className="inline-flex items-center rounded-xl border border-line bg-ink px-3 py-1.5 text-xs font-medium text-off-white hover:border-lime/40 hover:text-lime transition"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Key Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 + titleWords.length * 0.06 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {[
              'Shenyang Yibu Trading Co.',
              'Audited Tier-1 Factories',
              'CE / RoHS / UKCA Certified',
              'Fast WhatsApp Support',
            ].map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-line bg-white/2 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* Animated stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-6 border-t border-line pt-6"
          >
            {[
              { value: '4 Major', label: 'Standards (Type 1/2, GB/T, NACS)' },
              { value: 'Shenyang', label: 'Factory Direct Trading' },
              { value: 'DDP/FOB', label: 'Global Freight Support' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="flex flex-col"
              >
                <span className="font-display text-xl font-semibold text-lime">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 3D tilt image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:perspective-[1200px]"
          style={{ y: imageY }}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="absolute -inset-8 rounded-[2.5rem] bg-lime/10 blur-3xl"
            animate={reduceMotion ? undefined : {
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
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
              className="h-auto max-h-[38rem] w-full object-contain drop-shadow-[0_1.5rem_2rem_rgba(0,0,0,0.35)]"
              fetchPriority="high"
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-muted">Scroll</span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-muted to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
