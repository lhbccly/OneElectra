import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'lime'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-off-white text-ink hover:bg-white focus-visible:outline-lime',
  secondary:
    'border border-line bg-transparent text-off-white hover:border-muted hover:bg-white/5',
  ghost: 'bg-transparent text-off-white hover:bg-white/5',
  lime: 'bg-lime text-ink hover:brightness-105 shadow-[var(--shadow-glow)]',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm md:h-13 md:px-7 md:text-base',
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition duration-200 disabled:opacity-50 disabled:pointer-events-none'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={cx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

type ButtonLinkProps = LinkProps & {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  )
}

type ExternalButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function ExternalButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ExternalButtonProps) {
  return (
    <a
      className={cx(base, variants[variant], sizes[size], className)}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}
