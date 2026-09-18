import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Container'
import { WorldClocks } from '@/components/ui/WorldClocks'
import { LinkedInIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '@/components/ui/SocialIcons'
import { site } from '@/data/site'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: site.social.linkedin, Icon: LinkedInIcon, color: 'hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10' },
  { label: 'Facebook', href: site.social.facebook, Icon: FacebookIcon, color: 'hover:text-[#1877f2] hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10' },
  { label: 'Instagram', href: site.social.instagram, Icon: InstagramIcon, color: 'hover:text-[#e4405f] hover:border-[#e4405f]/50 hover:bg-[#e4405f]/10' },
  { label: 'WhatsApp', href: site.social.whatsapp, Icon: WhatsAppIcon, color: 'hover:text-[#25d366] hover:border-[#25d366]/50 hover:bg-[#25d366]/10' },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-graphite">
      <Container className="grid gap-10 py-14 md:grid-cols-4 md:gap-8">
        <div className="space-y-4 md:col-span-1">
          <Logo />
          <p className="text-sm leading-relaxed text-muted">
            <strong className="text-off-white">One Electra</strong> is the international B2B trading brand of <strong className="text-off-white">{site.brand.legalName}</strong>. Located in {site.brand.location}.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {['CE Certified', 'RoHS', 'UKCA', 'FCC', 'IP65', 'OCPP 1.6J'].map((cert) => (
              <span key={cert} className="rounded-full border border-line bg-panel px-2.5 py-1 text-[10px] uppercase font-medium text-lime">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Product Categories
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link to="/products?category=ac-charging-pile" className="hover:text-off-white transition">
                AC Charging Wallboxes (7-22kW)
              </Link>
            </li>
            <li>
              <Link to="/products?category=dc-charging-pile" className="hover:text-off-white transition">
                DC Fast Chargers (20-360kW)
              </Link>
            </li>
            <li>
              <Link to="/products?category=portable-charging-pile" className="hover:text-off-white transition">
                Portable Chargers (3.5-7kW)
              </Link>
            </li>
            <li>
              <Link to="/products?category=adapters-connectors" className="hover:text-off-white transition">
                Cables &amp; Conversion Guns
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-off-white transition">
                OEM / ODM White-Labeling
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            Company &amp; Navigation
          </h3>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-off-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm text-muted">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
            B2B Sales Contact
          </h3>
          <p>
            <a className="hover:text-lime font-medium transition-colors" href={`mailto:${site.contact.supportEmail}`}>
              {site.contact.supportEmail}
            </a>
          </p>
          <p>Markets: {site.contact.markets}</p>
          <p>Entity: {site.brand.legalName}</p>

          <div className="border-t border-line pt-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-off-white">
              Connect With Us
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={`Connect on ${label}`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group inline-flex size-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 ${color}`}
                >
                  <Icon className="size-4 transition-transform group-hover:scale-110" aria-hidden />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="border-t border-line pt-4">
            <WorldClocks />
          </div>
        </div>
      </Container>

      <div className="border-t border-line bg-ink/50">
        <Container className="flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} One Electra ({site.brand.legalName}). All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-lime animate-pulse" />
            Certified EV Charging Hardware &amp; Global B2B Sourcing
          </p>
        </Container>
      </div>
    </footer>
  )
}
