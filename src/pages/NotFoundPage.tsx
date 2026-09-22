import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { lifestyle } from '@/assets/lifestyle'
import { usePageMeta } from '@/lib/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Page not found | One Electra', 'The requested One Electra page could not be found.')

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0" data-protect-media>
        <img
          src={lifestyle.hero}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a1210]/88" />
      </div>

      <Container className="relative z-[1] flex min-h-[70vh] flex-col items-start justify-center py-20">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-volt">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-white/70">
          The page you requested does not exist. Return home or browse the product catalogue.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/" variant="lime">
            Go Home
          </ButtonLink>
          <ButtonLink
            to="/products"
            variant="secondary"
            className="!border-white/35 !bg-white/10 !text-white hover:!bg-white/20"
          >
            Browse Products
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
