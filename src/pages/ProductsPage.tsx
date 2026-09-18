import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CategoryFilter } from '@/components/products/CategoryFilter'
import { ProductCard } from '@/components/products/ProductCard'
import { products } from '@/data/products'
import { getCategoryBySlug } from '@/data/categories'
import type { CategoryId } from '@/types/catalogue'
import { usePageMeta } from '@/lib/usePageMeta'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function ProductsPage() {
  const [params] = useSearchParams()
  const categoryParam = params.get('category')
  const selectedCategory = categoryParam ? getCategoryBySlug(categoryParam) : undefined
  const activeCategory: CategoryId | 'all' = selectedCategory?.id ?? 'all'

  const category = selectedCategory

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  usePageMeta(
    category ? `${category.name} | One Electra` : 'Products | One Electra',
    category?.description ??
      'Browse One Electra AC, DC, portable EV chargers and adapters with category filters and product detail pages.',
  )

  return (
    <motion.div
      className="pb-20 md:pb-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="hero-wash border-b border-line py-16 md:py-20">
        <Container>
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                eyebrow="Products"
                title={category?.name ?? 'EV charging catalogue'}
                description={
                  category?.description ??
                  'Filter by category, open a product for specifications, then request a quotation on WhatsApp.'
                }
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <CategoryFilter active={activeCategory} />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <Container className="pt-12 md:pt-16">
        <motion.p
          className="mb-6 text-sm text-muted"
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Showing {filtered.length} product{filtered.length === 1 ? '' : 's'}
        </motion.p>
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-[1.75rem] border border-line bg-panel/40 p-10 text-center"
            >
              <p className="font-display text-2xl text-off-white">No products in this category yet</p>
              <p className="mt-3 text-sm text-muted">
                Check back soon or browse all products for the full catalogue.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  variants={fadeUp}
                  custom={i}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  )
}
