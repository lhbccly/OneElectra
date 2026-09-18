import { HeroSection } from '@/components/home/HeroSection'
import { BrandStorySection } from '@/components/home/BrandStorySection'
import { ProductCategoriesSection } from '@/components/home/ProductCategoriesSection'
import { StandardsSection } from '@/components/home/StandardsSection'
import { GlobalPresenceSection } from '@/components/home/GlobalPresenceSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection'
import { FinalCtaSection } from '@/components/home/FinalCtaSection'
import { usePageMeta } from '@/lib/usePageMeta'
import { site } from '@/data/site'

export function HomePage() {
  usePageMeta(site.seo.homeTitle, site.seo.homeDescription)

  return (
    <>
      <HeroSection />
      <BrandStorySection />
      <ProductCategoriesSection />
      <FeaturedProductsSection />
      <StandardsSection />
      <GlobalPresenceSection />
      <ServicesSection />
      <FinalCtaSection />
    </>
  )
}
