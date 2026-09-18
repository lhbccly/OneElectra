import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  children,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 md:mb-14 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-lime">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-off-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  )
}
