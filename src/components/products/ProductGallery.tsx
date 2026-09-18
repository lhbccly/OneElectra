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
      <div className="aspect-square overflow-hidden rounded-[2rem] border border-line bg-panel">
        <img
          src={current}
          alt={alt}
          className="h-full w-full object-contain p-8"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              className={`size-20 shrink-0 overflow-hidden rounded-2xl border bg-graphite p-2 ${
                index === active ? 'border-lime' : 'border-line'
              }`}
            >
              <img src={image} alt="" className="h-full w-full object-contain" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
