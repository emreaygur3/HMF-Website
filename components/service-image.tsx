'use client'

import { useState } from 'react'

interface ServiceImageProps {
  src: string
  alt: string
  className?: string
  fallbackText?: string
}

export function ServiceImage({ src, alt, className = '', fallbackText }: ServiceImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`${className} bg-slate-200 flex items-center justify-center`}>
        <span className="text-slate-400 text-sm">{fallbackText || alt}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        setImageError(true)
      }}
    />
  )
}
