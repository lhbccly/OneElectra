import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useQuote } from '@/context/QuoteContext'
import { getFeaturedProducts, getProductBySlug } from '@/data/products'
import { site } from '@/data/site'

const titleWords = site.hero.title.split(' ')
const AUTO_MS = 4500

/** Prefer distinct product photos for the hero carousel. */
function useHeroSlides() {
  return useMemo(() => {
    const preferred = [
      getProductBySlug('dl-eu004-1'),
      getProductBySlug('type2-wallbox-multi'),
      getProductBySlug('dl-eu001-2'),
      getProductBySlug('type2-cable-gun'),
    ].flatMap((product) => (product ? [product] : []))

    if (preferred.length >= 3) return preferred

    const seen = new Set<string>()
    return getFeaturedProducts()
      .filter((product) => {
        const src = product.images[0]
        if (!src || seen.has(src)) return false
        seen.add(src)
        return true
      })
      .slice(0, 4)
  }, [])
}

export function HeroSection() {
  const { openQuoteModal } = useQuote()
  const reduceMotion = useReducedMotion()
  const slides = useHeroSlides()
  const [active, setActive] = useState(0)
  const current = slides[active] ?? slides[0]

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, slides.length])

  return (
    <section className="hero-wash relative overflow-hidden pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-60" aria-hidden />

      <Container className="relative grid min-h-[calc(100dvh-5rem)] items-center gap-10 py-10 md:grid-cols-[1fr_1fr] md:gap-10 lg:gap-14 lg:py-14">
        <div className="relative z-[1] max-w-2xl">
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

          <h1 className="font-display text-balance text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-6xl xl:text-[4.2rem] xl:leading-[1.08]">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="mr-[0.25em] inline-block"
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

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 + titleWords.length * 0.05 }}
            className="mt-6 text-sm text-muted"
          >
            CE / RoHS / UKCA certified · Factory-direct from Shenyang ·{' '}
            <Link to="/about" className="font-semibold text-navy underline-offset-4 hover:text-emerald hover:underline">
              About us
            </Link>
            {' · '}
            <Link to="/services" className="font-semibold text-navy underline-offset-4 hover:text-emerald hover:underline">
              Sourcing & logistics
            </Link>
          </motion.p>
        </div>

        {/* Product carousel — no card frame */}
        <motion.div
          className="relative z-[1] flex min-h-[22rem] flex-col justify-center md:min-h-[28rem]"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          data-protect-media
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/15 blur-[90px]" aria-hidden />

          <div className="relative mx-auto aspect-square w-full max-w-[28rem] lg:max-w-[32rem]">
            <AnimatePresence mode="wait" initial={false}>
              {current ? (
                <motion.div
                  key={current.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={current.images[0]}
                    alt={`${current.model} — ${current.name}`}
                    draggable={false}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_28px_38px_rgba(15,23,42,0.18)]"
                    fetchPriority={active === 0 ? 'high' : 'auto'}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="absolute inset-0 z-10" aria-hidden />
          </div>

          {current ? (
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <Link
                to={`/products/${current.slug}`}
                className="text-center transition hover:text-emerald sm:text-left"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald">
                  Featured hardware
                </p>
                <p className="mt-1 font-display text-lg font-bold text-navy">
                  {current.model}
                </p>
                <p className="text-sm text-muted">{current.name}</p>
              </Link>

              {slides.length > 1 ? (
                <div className="flex items-center gap-2" role="tablist" aria-label="Featured products">
                  {slides.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      role="tab"
                      aria-selected={index === active}
                      aria-label={`Show ${slide.model}`}
                      onClick={() => setActive(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === active
                          ? 'w-8 bg-emerald'
                          : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </Container>
    </section>
  )
}
