import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/ui/ContactForm'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { site } from '@/data/site'
import { usePageMeta } from '@/lib/usePageMeta'
import type2GunImage from '@/assets/products/adapters-connectors/type2-cable-gun/01.png'
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewportOnce } from '@/lib/animations'

export function ContactPage() {
  usePageMeta(
    'Contact | One Electra',
    'Send an enquiry to support@oneelectra.com or request a fast WhatsApp quotation from One Electra.',
  )

  return (
    <motion.div
      className="pb-20 md:pb-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero-wash border-b border-line py-16 md:py-24">
        <Container>
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Contact"
                title="Send us an enquiry"
                description="Tell us your market, connector standard, and volume. Enquiries are routed to support@oneelectra.com."
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Container className="grid gap-10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pt-16">
        <motion.div
          className="rounded-[1.75rem] border border-line bg-panel/40 p-6 md:p-8"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeLeft}
        >
          <ContactForm />
        </motion.div>

        <motion.aside
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeRight}
        >
          <motion.div
            className="group relative overflow-hidden rounded-[1.75rem] border border-line bg-graphite p-6 md:p-8 transition duration-300 hover:border-lime/30"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle at 100% 0%, rgba(184,255,61,0.08), transparent 55%)' }}
              aria-hidden
            />
            <img
              src={type2GunImage}
              alt=""
              className="pointer-events-none absolute -right-12 -top-2 w-44 rotate-[-12deg] opacity-[0.12] transition duration-500 group-hover:opacity-[0.2] md:w-56"
              aria-hidden
            />

            <h2 className="relative z-[1] font-display text-2xl font-semibold text-off-white">Get in touch</h2>
            <motion.dl
              className="relative z-[1] mt-6 space-y-4 text-sm"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {[
                { label: 'Support', value: site.contact.supportEmail, href: `mailto:${site.contact.supportEmail}` },
                { label: 'Info', value: site.contact.infoEmail, href: `mailto:${site.contact.infoEmail}` },
                { label: 'Markets', value: site.contact.markets },
                { label: 'Address', value: site.contact.address },
              ].map(({ label, value, href }) => (
                <motion.div key={label} variants={fadeUp}>
                  <dt className="text-muted">{label}</dt>
                  <dd>
                    {href ? (
                      <a className="text-off-white hover:text-lime transition-colors duration-200" href={href}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-off-white">{value}</span>
                    )}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
            <div className="relative z-[1] mt-8">
              <WhatsAppButton label="Chat on WhatsApp" />
            </div>
          </motion.div>

          <motion.p
            className="text-sm leading-relaxed text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
          >
            Submissions are sent securely to support@oneelectra.com through the same FormSubmit
            delivery used by the One Electra website.
          </motion.p>
        </motion.aside>
      </Container>
    </motion.div>
  )
}
