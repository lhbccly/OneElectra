import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '@/data/categories'
import type { CategoryId } from '@/types/catalogue'

interface CategoryFilterProps {
  active?: CategoryId | 'all'
  /** Use light chip styles when placed on a dark/photo hero. */
  onDark?: boolean
}

type FilterItem =
  | { id: 'all'; name: string; slug?: undefined }
  | { id: CategoryId; name: string; slug: string }

export function CategoryFilter({ active = 'all', onDark = false }: CategoryFilterProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const items: FilterItem[] = [
    { id: 'all', name: 'All Products' },
    ...categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
    })),
  ]

  return (
    <div className="space-y-3">
      <div className="relative md:hidden">
        <button
          type="button"
          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 pr-5 text-left text-sm outline-none transition focus:border-lime ${
            onDark
              ? 'border-white/25 bg-white/10 text-white'
              : 'border-line bg-ink text-off-white'
          }`}
          aria-expanded={mobileOpen}
          aria-controls="mobile-category-menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span>{items.find((item) => item.id === active)?.name ?? 'All Products'}</span>
          <ChevronDown
            className={`ml-5 size-4 shrink-0 transition-transform ${
              mobileOpen ? 'rotate-180 text-lime' : onDark ? 'text-white/60' : 'text-muted'
            }`}
            aria-hidden
          />
        </button>

        {mobileOpen ? (
          <div
            id="mobile-category-menu"
            className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 max-h-64 overflow-y-auto rounded-2xl border border-line bg-ink p-2 shadow-2xl"
            role="menu"
            aria-label="Product categories"
          >
            {items.map((item) => {
              const to = item.id === 'all' ? '/products' : `/products?category=${item.slug}`
              const isActive = active === item.id

              return (
                <Link
                  key={item.id}
                  to={to}
                  role="menuitem"
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-3 py-2.5 text-sm transition ${
                    isActive ? 'bg-lime/10 text-lime' : 'text-muted hover:bg-white/5 hover:text-off-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        ) : null}
      </div>

      <div
        className="hidden flex-wrap gap-2 md:flex"
        role="tablist"
        aria-label="Product categories"
      >
        {items.map((item) => {
          const to = item.id === 'all' ? '/products' : `/products?category=${item.slug}`
          const isActive = active === item.id

          return (
            <Link
              key={item.id}
              to={to}
              role="tab"
              aria-selected={isActive}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                isActive
                  ? 'border-lime bg-lime/15 text-lime'
                  : onDark
                    ? 'border-white/25 bg-white/5 text-white/80 hover:border-white/45 hover:bg-white/10 hover:text-white'
                    : 'border-line text-muted hover:border-muted hover:text-off-white'
              }`}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
