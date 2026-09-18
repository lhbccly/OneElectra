import badgeLogo from '@/assets/brand/client-logo/icon-badge-dark.svg'

interface LogoMarkProps {
  size?: number
  className?: string
  /** When true, uses lime accent; otherwise monochrome off-white */
  accent?: boolean
}

/**
 * Premium O/E monogram:
 * circle (O) + engineered E bars + restrained energy arc.
 */
export function LogoMark({ size = 36, className = '', accent: _accent = true }: LogoMarkProps) {
  return (
    <img
      src={badgeLogo}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden
    />
  )
}
