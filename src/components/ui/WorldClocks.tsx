import { useEffect, useState } from 'react'

function formatTime(date: Date, timeZone?: string) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone,
  }).format(date)
}

export function WorldClocks() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="space-y-2 text-sm" aria-label="Current local and Beijing times">
      <div className="flex items-center justify-between gap-6">
        <span className="text-muted">Local time</span>
        <time dateTime={now.toISOString()} className="font-medium tabular-nums text-off-white">
          {formatTime(now)}
        </time>
      </div>
      <div className="flex items-center justify-between gap-6">
        <span className="text-muted">Beijing time</span>
        <time dateTime={now.toISOString()} className="font-medium tabular-nums text-off-white">
          {formatTime(now, 'Asia/Shanghai')}
        </time>
      </div>
    </div>
  )
}
