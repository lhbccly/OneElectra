import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const SHOW_AFTER_PX = 400

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.85, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 8 }}
          transition={{ duration: 0.2 }}
          className="fixed right-4 z-40 flex size-11 items-center justify-center rounded-full bg-lime text-ink shadow-[var(--shadow-glow)] transition hover:brightness-105 active:scale-95 bottom-20 lg:bottom-6 lg:right-6"
        >
          <ArrowUp className="size-5" strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
