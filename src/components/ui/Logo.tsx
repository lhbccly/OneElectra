import { LogoMark } from '@/components/ui/LogoMark'

interface LogoProps {
  compact?: boolean
  className?: string
  accent?: boolean
}

export function Logo({ compact = false, className = '', accent = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      {compact ? (
        <LogoMark size={38} accent={accent} />
      ) : (
        <span className="inline-flex items-center gap-2.5">
          <LogoMark size={32} accent={accent} />
          <span className="flex flex-col leading-none" aria-label="One Electra">
            <span className="font-display text-[0.7rem] font-bold tracking-[0.18em] text-off-white uppercase sm:text-xs">
              One Electra
            </span>
            <span className="mt-1 text-[0.45rem] font-medium tracking-[0.16em] text-muted uppercase">
              Charging infrastructure supply
            </span>
          </span>
        </span>
      )}
    </span>
  )
}
