'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'
  delay?: number
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 -translate-x-8',
    'slide-right': 'opacity-0 translate-x-8',
    'scale-up': 'opacity-0 scale-95',
  }

  const activeClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100'

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isIntersecting ? activeClasses : animationClasses[animation]}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
