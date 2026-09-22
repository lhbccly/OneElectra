import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { lifestyle } from '@/assets/lifestyle'
import { site } from '@/data/site'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function FinalCtaSection() {
  return (
    <section id="contact" className="border-t border-line bg-canvas-subtle py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border border-slate-800 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          data-protect-media
        >
          <img
            src={lifestyle.commercialAlt}
            alt=""
            aria-hidden="true"
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0a1210]/94 via-[#0a1210]/88 to-[#0a1210]/70"
            aria-hidden
          />

          <motion.div
            className="relative max-w-3xl px-8 py-12 text-white md:px-14 md:py-16"
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
              className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              {site.finalCta.body}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
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
