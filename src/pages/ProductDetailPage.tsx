import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { ProductGallery } from '@/components/products/ProductGallery'
import { SpecificationTable } from '@/components/products/SpecificationTable'
import { ProductCard } from '@/components/products/ProductCard'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { getCategoryById } from '@/data/categories'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { usePageMeta } from '@/lib/usePageMeta'
import { useQuote } from '@/context/QuoteContext'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { staggerContainer, fadeUp, fadeLeft, viewportOnce } from '@/lib/animations'

export function ProductDetailPage() {
  const { openQuoteModal } = useQuote()
  const { slug = '' } = useParams()
  const product = getProductBySlug(slug)
  const category = product ? getCategoryById(product.category) : undefined

  usePageMeta(
    product ? `${product.model} | One Electra` : 'Product | One Electra',
    product?.shortDescription ?? 'One Electra product details',
  )

  useEffect(() => {
    if (!product) return

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.model,
      category: category?.name ?? product.category,
      description: product.description,
      image: product.images,
      brand: { '@type': 'Brand', name: 'One Electra' },
      url: window.location.href,
    })
    document.head.appendChild(script)

    return () => script.remove()
  }, [product, category])

  if (!product) {
    return <NotFoundPage />
  }

  const related = getRelatedProducts(product)

  return (
    <motion.div
      className="pb-20 md:pb-28"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="pt-8 md:pt-12">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-muted"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-lime transition-colors duration-200">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/products" className="hover:text-lime transition-colors duration-200">Products</Link>
            </li>
            {category ? (
              <>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="hover:text-lime transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              </>
            ) : null}
            <li aria-hidden>/</li>
            <li className="text-off-white">{product.model}</li>
          </ol>
        </motion.nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeLeft}
          >
            <ProductGallery images={product.images} alt={product.name} />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.18em] text-muted">
              {category?.name}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-off-white md:text-5xl"
            >
              {product.model}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-lg text-off-white/90">
              {product.name}
            </motion.p>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-muted">
              {product.description}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {product.specifications.slice(0, 4).map((spec, i) => (
                <motion.div
                  key={spec.label}
                  className="rounded-2xl border border-line bg-panel/60 px-4 py-3 transition duration-300 hover:border-lime/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  whileHover={{ y: -2 }}
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{spec.label}</p>
                  <p className="mt-1 text-sm font-medium text-off-white">{spec.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications strip */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted mr-1">Certifications &amp; Standards:</span>
              {['CE', 'RoHS', 'UKCA', 'IP65'].map((badge) => (
                <span key={badge} className="rounded-full border border-lime/30 bg-lime/5 px-3 py-1 text-[11px] font-semibold text-lime">
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const powerSpec = product.specifications.find((s) => s.label.toLowerCase().includes('power'))?.value
                  openQuoteModal({
                    product,
                    productModel: product.model,
                    productName: product.name,
                    category: category?.name,
                    powerOutput: powerSpec,
                    standard: product.standards.join(' / '),
                  })
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-soft-green"
              >
                Request Custom Quotation
              </button>
              <WhatsAppButton product={product} />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 font-display text-2xl font-semibold text-off-white">Specifications</h2>
            <SpecificationTable specifications={product.specifications} />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h2 className="mb-4 font-display text-2xl font-semibold text-off-white">Features</h2>
              <motion.ul
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={staggerContainer}
              >
                {product.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={fadeUp}
                    className="rounded-full border border-line px-4 py-2 text-sm text-off-white transition duration-200 hover:border-lime/40 hover:text-lime"
                    whileHover={{ scale: 1.04 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <h2 className="mb-4 font-display text-2xl font-semibold text-off-white">Compatibility / Standards</h2>
              <motion.ul
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={staggerContainer}
              >
                {product.standards.map((standard) => (
                  <motion.li
                    key={standard}
                    variants={fadeUp}
                    className="rounded-full border border-lime/30 bg-lime/10 px-4 py-2 text-sm text-lime transition duration-200 hover:bg-lime/20"
                    whileHover={{ scale: 1.06 }}
                  >
                    {standard}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {related.length > 0 ? (
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 font-display text-3xl font-semibold text-off-white">Related products</h2>
            <motion.div
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              {related.map((item, i) => (
                <motion.div key={item.id} variants={fadeUp} custom={i}>
                  <ProductCard product={item} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </Container>
    </motion.div>
  )
}
