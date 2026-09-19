import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { Container } from '@/components/ui/Container'
import { useQuote } from '@/context/QuoteContext'
import { useTheme } from '@/context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openQuoteModal } = useQuote()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'bg-graphite/95 backdrop-blur-xl border-b border-line shadow-xs'
          : 'bg-graphite/90 backdrop-blur-md border-b border-line/80'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="One Electra home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                  `relative text-sm tracking-wide font-bold transition ${
                  isActive ? 'text-lime' : 'text-muted hover:text-navy'
                }`
              }
              end={link.to === '/'}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex size-10 items-center justify-center rounded-md border border-line text-navy transition hover:border-lime hover:text-lime"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
            <button
              onClick={() => openQuoteModal()}
              className="rounded-md bg-lime px-5 py-2.5 text-sm font-bold text-navy shadow-xs transition hover:bg-emerald hover:text-white active:scale-[0.98]"
            >
              Request Quote
            </button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md border border-line text-navy lg:hidden transition duration-300 hover:border-lime hover:text-lime"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="size-5" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="size-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-graphite shadow-lg lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-md px-4 py-3 text-base transition duration-200 ${
                        isActive ? 'bg-slate-100 text-lime font-extrabold' : 'text-muted hover:bg-slate-50 hover:text-lime'
                      }`
                    }
                    end={link.to === '/'}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05, duration: 0.3 }}
              >
                <button
                  className="mt-3 w-full rounded-md bg-lime py-3 text-base font-bold text-navy shadow-xs transition hover:bg-emerald hover:text-white"
                  onClick={() => {
                    setOpen(false)
                    openQuoteModal()
                  }}
                >
                  Request Quote
                </button>
              </motion.div>
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-line px-4 py-3 text-base font-semibold text-navy transition hover:border-lime hover:text-lime"
              >
                {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
                {theme === 'light' ? 'Dark theme' : 'Light theme'}
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
