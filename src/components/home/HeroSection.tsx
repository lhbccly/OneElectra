import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useQuote } from '@/context/QuoteContext'
import { lifestyle } from '@/assets/lifestyle'
import { site } from '@/data/site'

const titleWords = site.hero.title.split(' ')

export function HeroSection() {
  const { openQuoteModal } = useQuote()
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[min(92dvh,56rem)] overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0" data-protect-media>
        <motion.img
          src={lifestyle.hero}
          alt="Electric vehicle connected to a high-power charging station at night"
          draggable={false}
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_40%]"
          initial={reduceMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a1210]/92 via-[#0a1210]/72 to-[#0a1210]/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a1210]/80 via-transparent to-[#0a1210]/45"
          aria-hidden
        />
      </div>

      <Container className="relative z-[1] flex min-h-[calc(min(92dvh,56rem)-5rem)] flex-col justify-end pb-14 pt-16 md:justify-center md:pb-20 md:pt-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-3"
          >
            <motion.span
              className="inline-block h-0.5 bg-volt"
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-volt">
              {site.brand.name} · EV Hardware Supply
            </span>
          </motion.div>

          <h1 className="font-display text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.1rem] xl:leading-[1.08]">
            {titleWords.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
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
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
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
            <ButtonLink
              to="/products"
              variant="secondary"
              size="lg"
              className="!border-white/35 !bg-white/10 !text-white backdrop-blur-sm hover:!bg-white/20"
            >
              {site.hero.secondaryCta}
            </ButtonLink>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 + titleWords.length * 0.05 }}
            className="mt-6 text-sm text-white/65"
          >
            CE / RoHS / UKCA certified · Factory-direct from Shenyang ·{' '}
            <Link to="/about" className="font-semibold text-white underline-offset-4 hover:text-volt hover:underline">
              About us
            </Link>
            {' · '}
            <Link to="/services" className="font-semibold text-white underline-offset-4 hover:text-volt hover:underline">
              Sourcing & logistics
            </Link>
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
