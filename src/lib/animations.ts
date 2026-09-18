import type { Variants } from 'framer-motion'

// ─── Fade + Slide ──────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Stagger Container ─────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.02,
    },
  },
}

// ─── Scale ────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Card Hover ───────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, scale: 1, boxShadow: '0 0 0px transparent' },
  hover: {
    y: -6,
    scale: 1.018,
    boxShadow: '0 24px 60px rgba(184,255,61,0.08)',
    transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
  },
}

// ─── Icon Pulse ───────────────────────────────────────────────
export const iconPulse = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: 6,
    transition: { type: 'spring' as const, stiffness: 400, damping: 12 },
  },
}

// ─── Page Transition ─────────────────────────────────────────
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

// ─── Clip Reveal ─────────────────────────────────────────────
export const clipReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  show: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

// ─── Viewport settings ───────────────────────────────────────
export const viewportOnce = { once: true, margin: '-60px' } as const
