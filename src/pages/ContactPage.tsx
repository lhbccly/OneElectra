import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/ui/ContactForm'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { site } from '@/data/site'
import { lifestyle } from '@/assets/lifestyle'
import { usePageMeta } from '@/lib/usePageMeta'
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
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0" data-protect-media>
          <img
            src={lifestyle.commercial}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1210]/93 via-[#0a1210]/80 to-[#0a1210]/50" />
        </div>

        <Container className="relative z-[1] py-16 md:py-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-volt">Contact</p>
              <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
                Send us an enquiry
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Tell us your market, connector standard, volume, and deployment type. Typical quote
                responses are sent within 24 hours and routed to support@oneelectra.com.
              </p>
            </motion.div>
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
            className="overflow-hidden rounded-[1.75rem] border border-line shadow-card"
            data-protect-media
          >
            <div className="aspect-[16/10]">
              <img
                src={lifestyle.residentialAlt}
                alt="Home EV charging setup showing wallbox and electric vehicle"
                draggable={false}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="group relative rounded-[1.75rem] border border-line bg-graphite p-6 transition duration-300 hover:border-lime/30 md:p-8"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
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
                { label: 'Direct inquiry', value: site.contact.inquiryEmail, href: `mailto:${site.contact.inquiryEmail}` },
                { label: 'Markets', value: site.contact.markets },
                { label: 'Address', value: site.contact.address },
              ].map(({ label, value, href }) => (
                <motion.div key={label} variants={fadeUp}>
                  <dt className="text-muted">{label}</dt>
                  <dd>
                    {href ? (
                      <a className="text-off-white transition-colors duration-200 hover:text-lime" href={href}>
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
              <p className="mt-3 text-xs leading-relaxed text-muted">
                WhatsApp is our fastest channel for sharing product photos, specifications, and shipping
                details across time zones. Formal quotations and documents are sent by email.
              </p>
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
        </motion.aside>
      </Container>
    </motion.div>
  )
}
