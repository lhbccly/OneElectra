import logoMark from '@/assets/brand/logo-mark-light.png'
import logoMarkDark from '@/assets/brand/logo-mark.png'
import { useTheme } from '@/context/ThemeContext'

/**
 * One Electra brand mark — stylized 1E monogram with lightning charge bar.
 * Light theme: navy + lime. Dark theme / dark surfaces: off-white + volt lime.
 */
interface LogoMarkProps {
  size?: number
  className?: string
  variant?: 'light' | 'dark'
}

/** Theme-aware One Electra mark with an explicit variant override for dark surfaces. */
export function LogoMark({ size = 36, className = '', variant }: LogoMarkProps) {
  const { theme } = useTheme()
  const resolvedVariant = variant ?? (theme === 'dark' ? 'dark' : 'light')

  return (
    <img
      src={resolvedVariant === 'dark' ? logoMarkDark : logoMark}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      draggable={false}
      aria-hidden
    />
  )
}
