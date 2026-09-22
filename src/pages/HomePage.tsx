import { HeroSection } from '@/components/home/HeroSection'
import { SolutionsSection } from '@/components/home/SolutionsSection'
import { ProductCategoriesSection } from '@/components/home/ProductCategoriesSection'
import { VisualStorySection } from '@/components/home/VisualStorySection'
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { FinalCtaSection } from '@/components/home/FinalCtaSection'
import { usePageMeta } from '@/lib/usePageMeta'
import { site } from '@/data/site'

export function HomePage() {
  usePageMeta(site.seo.homeTitle, site.seo.homeDescription)

  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <ProductCategoriesSection />
      <VisualStorySection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <FinalCtaSection />
    </>
  )
}
