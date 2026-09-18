import { Container } from '@/components/ui/Container'
import { ButtonLink } from '@/components/ui/Button'
import { usePageMeta } from '@/lib/usePageMeta'

export function NotFoundPage() {
  usePageMeta('Page not found | One Electra', 'The requested One Electra page could not be found.')

  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-lime">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-off-white md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you requested does not exist. Return home or browse the product catalogue.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink to="/" variant="lime">
          Go Home
        </ButtonLink>
        <ButtonLink to="/products" variant="secondary">
          Browse Products
        </ButtonLink>
      </div>
    </Container>
  )
}
