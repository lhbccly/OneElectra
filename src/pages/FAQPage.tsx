import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqs } from '@/data/faqs'
import { usePageMeta } from '@/lib/usePageMeta'
import nacsGunImage from '@/assets/products/adapters-connectors/nacs-cable-gun/01.png'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  usePageMeta(
    'FAQ | One Electra',
    'Answers about AC/DC chargers, OCPP, certifications, MOQ, lead times, shipping, and customization.',
  )

  return (
    <motion.div
      className="pb-20 md:pb-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero-wash border-b border-line py-16 md:py-24">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="FAQ"
                title="Frequently asked questions"
                description="Practical answers for buyers evaluating One Electra hardware, compliance, and logistics."
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative hidden min-h-48 items-center justify-center lg:flex"
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,255,61,0.15),transparent_65%)]" />
            <img
              src={nacsGunImage}
              alt=""
              className="relative z-[1] w-[78%] rotate-[-8deg] object-contain opacity-100 drop-shadow-[0_1.2rem_1.5rem_rgba(0,0,0,0.55)]"
            />
            {/* <span className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.2em] text-lime/80">
              Connector standards
            </span> */}
          </motion.div>
        </Container>
      </section>

      <Container className="max-w-3xl pt-12 md:pt-16">
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {faqs.map((faq) => {
            const open = openId === faq.id
            return (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                className={`rounded-[1.25rem] border bg-panel/40 overflow-hidden transition-colors duration-300 ${
                  open ? 'border-lime/30 bg-panel/70' : 'border-line'
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : faq.id)}
                >
                  <span className={`font-medium transition duration-300 ${open ? 'text-lime' : 'text-off-white'}`}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`shrink-0 transition-colors duration-300 ${open ? 'text-lime' : 'text-muted'}`}
                  >
                    <ChevronDown className="size-5" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </motion.div>
  )
}
