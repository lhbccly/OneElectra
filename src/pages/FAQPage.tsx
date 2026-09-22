import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { faqs } from '@/data/faqs'
import { lifestyle } from '@/assets/lifestyle'
import { usePageMeta } from '@/lib/usePageMeta'
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
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0" data-protect-media>
          <img
            src={lifestyle.heroAlt}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1210]/93 via-[#0a1210]/82 to-[#0a1210]/55" />
        </div>

        <Container className="relative z-[1] py-16 md:py-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-volt">FAQ</p>
              <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
                Frequently asked questions
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Practical answers for buyers evaluating One Electra hardware, compliance, and logistics.
              </p>
            </motion.div>
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
                className={`overflow-hidden rounded-[1.25rem] border bg-panel/40 transition-colors duration-300 ${
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
