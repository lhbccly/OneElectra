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
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Contact"
                title="Send us an enquiry"
                description="Tell us your market, connector standard, volume, and deployment type. Typical quote responses are sent within 24 hours and routed to support@oneelectra.com."
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex min-h-48 items-center justify-center lg:min-h-64"
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <div className="pointer-events-none absolute size-64 rounded-full bg-lime/10 blur-3xl" />
            <img
              src={type2GunImage}
              alt=""
              className="relative z-[1] h-auto w-[min(100%,30rem)] rotate-[-8deg] object-contain drop-shadow-[0_1.5rem_2rem_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </Container>
      </section>

      <Container className="grid gap-10 pt-12 md:grid-cols-[1.1fr_0.9fr] md:items-start md:gap-14 md:pt-16">
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
            className="group relative rounded-[1.75rem] border border-line bg-graphite p-6 md:p-8 transition duration-300 hover:border-lime/30"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'radial-gradient(circle at 100% 0%, rgba(184,255,61,0.08), transparent 55%)' }}
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

          <motion.div
            className="rounded-[1.5rem] border border-line bg-graphite/60 p-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">What to include</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>• Country and application</li>
              <li>• Connector standard and power requirement</li>
              <li>• Quantity and target delivery timing</li>
              <li>• OEM, fleet, or project-specific requirements</li>
            </ul>
          </motion.div>

          <motion.p
            className="text-sm leading-relaxed text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.35 }}
          >
            Typical response time is within 24 hours. Submissions are sent securely to
            support@oneelectra.com through the same FormSubmit delivery used by the One Electra website.
          </motion.p>
        </motion.aside>
      </Container>
    </motion.div>
  )
}
