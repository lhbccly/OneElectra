import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function FinalCtaSection() {
  return (
    <section id="contact" className="border-t border-line bg-canvas-subtle py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          className="dark-surface relative overflow-hidden rounded-lg border border-slate-800 bg-navy px-8 py-12 text-white shadow-2xl md:px-14 md:py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
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
              className="text-xs font-extrabold uppercase tracking-[0.22em] text-volt"
            >
              Ready when you are
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl"
            >
              {site.finalCta.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {site.finalCta.body}
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <ButtonLink to="/contact" variant="lime" size="lg">
                {site.finalCta.primaryCta}
              </ButtonLink>
              <ButtonLink
                to="/products"
                variant="secondary"
                size="lg"
                className="!border-white/35 !bg-transparent !text-white hover:!bg-white/10"
              >
                {site.finalCta.secondaryCta}
              </ButtonLink>
              <WhatsAppButton
                variant="ghost"
                size="lg"
                label="WhatsApp Quote"
                className="!text-white hover:!bg-white/10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
