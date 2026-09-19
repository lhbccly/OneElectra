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
    <div className={`mb-10 flex max-w-3xl flex-col gap-3 md:mb-14 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-balance text-3xl font-extrabold tracking-tight text-navy md:text-4xl lg:text-[3.2rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      ) : null}
      {children}
    </div>
  )
}
