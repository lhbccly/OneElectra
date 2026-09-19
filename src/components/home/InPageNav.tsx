import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const navItems = [
  { id: 'solutions', label: 'Procurement' },
  { id: 'story', label: 'Brand Story' },
  { id: 'why-choose-us', label: 'Why Us' },
  { id: 'categories', label: 'Categories' },
  { id: 'featured', label: 'Featured' },
  { id: 'standards', label: 'Standards' },
  { id: 'global-presence', label: 'Global' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export function InPageNav() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140
      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="sticky top-16 z-40 border-y border-line bg-graphite/95 backdrop-blur-md shadow-xs md:top-20">
      <Container>
        <nav
          className="no-scrollbar flex items-center gap-1.5 overflow-x-auto py-3 text-xs"
          aria-label="In-page section navigation"
        >
          <span className="hidden shrink-0 pr-3 font-bold uppercase tracking-[0.2em] text-emerald md:inline-block">
            Jump To:
          </span>
          {navItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative shrink-0 rounded-full px-3.5 py-1.5 font-medium transition duration-200 ${
                  isActive
                    ? 'bg-emerald/10 text-emerald font-bold border border-emerald/30'
                    : 'text-muted hover:bg-canvas-subtle hover:text-navy'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="inpage-active"
                    className="absolute inset-0 rounded-full border border-emerald/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </nav>
      </Container>
    </div>
  )
}
