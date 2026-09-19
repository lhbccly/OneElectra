import { LogoMark } from '@/components/ui/LogoMark'

interface LogoProps {
  compact?: boolean
  className?: string
  accent?: boolean
}

export function Logo({ compact = false, className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      {compact ? (
        <LogoMark size={36} />
      ) : (
        <span className="inline-flex items-center gap-3">
          <LogoMark size={38} />
          <span className="flex flex-col leading-none" aria-label="One Electra">
            <span className="font-display text-base font-extrabold tracking-[0.08em] sm:text-lg">
              <span className="text-navy">ONE </span>
              <span className="text-lime">ELECTRA</span>
            </span>
            <span className="mt-1 text-[0.52rem] font-bold tracking-[0.18em] text-zinc-500 uppercase">
              EV CHARGING INFRASTRUCTURE
            </span>
          </span>
        </span>
      )}
    </span>
  )
}
