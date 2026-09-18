import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { ProductCard } from '@/components/products/ProductCard'
import { getFeaturedProducts } from '@/data/products'
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/animations'

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts().slice(0, 4)

  return (
    <section className="border-t border-line bg-graphite/40 py-20 md:py-28 overflow-hidden">
      <Container>
        <motion.div
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Catalogue"
              title="Featured charging hardware"
              description="A focused selection of wallboxes, portable chargers, and DC connectors — open any product for specifications and quotation."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <ButtonLink to="/products" variant="secondary" className="shrink-0 self-start">
              View All Products
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              custom={i}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
