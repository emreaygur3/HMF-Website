'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ServiceImageProps {
  src: string
  alt: string
  className?: string
  fallbackText?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  quality?: number
}

export function ServiceImage({ 
  src, 
  alt, 
  className = '', 
  fallbackText,
  priority = false,
  fill = false,
  width = 800,
  height = 600,
  quality = 75
}: ServiceImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`${className} bg-slate-200 flex items-center justify-center`}>
        <span className="text-slate-400 text-sm text-center px-4">{fallbackText || alt}</span>
      </div>
    )
  }

  // For fill prop, use Image with fill
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        quality={quality}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onError={() => setImageError(true)}
      />
    )
  }

  // For fixed dimensions
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={quality}
      priority={priority}
      onError={() => setImageError(true)}
    />
  )
}
