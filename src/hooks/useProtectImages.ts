import { useEffect } from 'react'

function isProtectedMedia(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false
  return Boolean(
    target.closest('img, picture, svg, canvas, video, [data-protect-media]'),
  )
}

/**
 * Deters casual image saving (context menu / drag).
 * Does not stop DevTools, screenshots, or direct URL access.
 */
export function useProtectImages() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      if (isProtectedMedia(event.target)) {
        event.preventDefault()
      }
    }

    const onDragStart = (event: DragEvent) => {
      if (isProtectedMedia(event.target)) {
        event.preventDefault()
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase()
      const saveShortcut =
        (event.ctrlKey || event.metaKey) && key === 's'
      if (saveShortcut && isProtectedMedia(document.activeElement)) {
        event.preventDefault()
      }
    }

    document.addEventListener('contextmenu', onContextMenu)
    document.addEventListener('dragstart', onDragStart)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('contextmenu', onContextMenu)
      document.removeEventListener('dragstart', onDragStart)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}
