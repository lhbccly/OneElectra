import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import type { Product } from '@/types/catalogue'
import { getCategoryById } from '@/data/categories'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryById(product.category)
  const reduceMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current || reduceMotion) return
    const rect = cardRef.current.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width
    const ny = (e.clientY - rect.top) / rect.height
    mouseX.set(nx - 0.5)
    mouseY.set(ny - 0.5)
    setShimmerPos({ x: nx * 100, y: ny * 100 })
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel/70 transition-colors duration-300 hover:border-lime/40 hover:bg-panel"
      style={reduceMotion ? {} : {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduceMotion ? {} : { y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {/* Shimmer overlay */}
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(184,255,61,0.10) 0%, transparent 55%)`,
          }}
          aria-hidden
        />
      )}

      <Link
        to={`/products/${product.slug}`}
        className="flex flex-1 flex-col"
      >
          <div className="relative aspect-[4/3] overflow-hidden bg-[#243038]" data-protect-media>
          <motion.img
            src={product.images[0]}
            alt={product.name}
            draggable={false}
            className="h-full w-full object-contain p-6"
            loading="lazy"
            whileHover={reduceMotion ? {} : { scale: 1.07 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 z-[1]" aria-hidden />
          {/* Category badge */}
          <div className="absolute top-3 left-3 z-[2] rounded-full border border-line bg-ink/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
            {category?.name ?? product.category}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="mt-1 font-display text-lg font-semibold text-off-white transition duration-300 group-hover:text-lime/90">
                {product.model}
              </h3>
            </div>
            <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition group-hover:border-lime group-hover:text-lime group-hover:bg-lime/10">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </div>
          <p className="text-sm font-medium text-off-white/90">{product.name}</p>
          <p className="text-xs leading-relaxed text-muted line-clamp-2">{product.shortDescription}</p>
        </div>
      </Link>

      <div className="flex items-center justify-between border-t border-line/60 bg-ink/40 px-5 py-3.5">
        <Link
          to={`/products/${product.slug}`}
          className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-off-white transition"
        >
          View Specs
        </Link>

        <Link
          to={`/products/${product.slug}`}
          className="text-xs font-semibold uppercase tracking-wider text-lime hover:text-soft-green transition"
        >
          View Product
        </Link>
      </div>
    </motion.div>
  )
}

