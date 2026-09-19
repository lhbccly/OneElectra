import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function FinalCtaSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-t border-line py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          className="dark-surface relative overflow-hidden rounded-[2rem] border border-line bg-panel px-8 py-12 md:px-14 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated orb 1 */}
          <motion.div
            className="pointer-events-none absolute right-0 top-0 size-64 -translate-y-1/2 translate-x-1/4 rounded-full bg-lime/15 blur-3xl"
            animate={reduceMotion ? undefined : {
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          {/* Animated orb 2 */}
          <motion.div
            className="pointer-events-none absolute left-1/3 bottom-0 size-48 translate-y-1/2 rounded-full bg-soft-green/10 blur-3xl"
            animate={reduceMotion ? undefined : {
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            aria-hidden
          />

          {/* Animated grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(rgba(184,255,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,61,0.06) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse at 100% 0%, black 20%, transparent 70%)',
            }}
            aria-hidden
          />

          <motion.div
            className="relative max-w-3xl"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-[0.22em] text-lime"
            >
              Ready when you are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-semibold tracking-tight text-off-white md:text-5xl"
            >
              {site.finalCta.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
            >
              {site.finalCta.body}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <ButtonLink to="/contact" variant="lime" size="lg">
                {site.finalCta.primaryCta}
              </ButtonLink>
              <ButtonLink to="/products" variant="secondary" size="lg">
                {site.finalCta.secondaryCta}
              </ButtonLink>
              <WhatsAppButton variant="ghost" size="lg" label="WhatsApp Quote" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
