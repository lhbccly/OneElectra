import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'lime'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-navy text-white hover:bg-zinc-800 focus-visible:outline-lime shadow-sm',
  secondary:
    'border border-line bg-graphite text-navy hover:bg-canvas-subtle hover:border-muted shadow-xs',
  ghost: 'bg-transparent text-zinc-700 hover:bg-zinc-100',
  lime: 'bg-lime text-navy hover:bg-emerald hover:text-white shadow-sm active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm md:h-13 md:px-7 md:text-base',
}

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-bold tracking-wide transition duration-200 disabled:opacity-50 disabled:pointer-events-none'

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
