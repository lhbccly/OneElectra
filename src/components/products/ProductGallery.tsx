import { useState } from 'react'

interface ProductGalleryProps {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0)
  const current = images[active] ?? images[0]

  return (
    <div className="space-y-4">
      <div
        className="relative aspect-square overflow-hidden rounded-lg border border-line bg-panel"
        data-protect-media
      >
        <img
          src={current}
          alt={alt}
          draggable={false}
          className="h-full w-full object-contain p-8"
        />
        <div className="absolute inset-0 z-10" aria-hidden />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              data-protect-media
              className={`relative size-20 shrink-0 overflow-hidden rounded-2xl border bg-graphite p-2 ${
                index === active ? 'border-lime' : 'border-line'
              }`}
            >
              <img
                src={image}
                alt=""
                draggable={false}
                className="h-full w-full object-contain"
              />
              <span className="absolute inset-0 z-10" aria-hidden />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
