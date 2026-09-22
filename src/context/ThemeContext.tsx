import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import faviconLight from '@/assets/brand/logo-mark-light.png'
import faviconDark from '@/assets/brand/logo-mark.png'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)
const storageKey = 'one-electra-theme'

function getInitialTheme(): Theme {
  const storedTheme = window.localStorage.getItem(storageKey)
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function syncFavicon(theme: Theme) {
  const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  if (!favicon) return
  favicon.type = 'image/png'
  favicon.href = theme === 'dark' ? faviconDark : faviconLight
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(storageKey, theme)
    syncFavicon(theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme((value) => (value === 'light' ? 'dark' : 'light')),
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}