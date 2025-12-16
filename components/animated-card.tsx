'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
}

export function AnimatedCard({ 
  children, 
  className = '', 
  delay = 0,
  index = 0
}: AnimatedCardProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  const calculatedDelay = delay + (index * 100) // Stagger animation

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isIntersecting 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
        }
        ${className}
      `}
      style={{ transitionDelay: `${calculatedDelay}ms` }}
    >
      {children}
    </div>
  )
}
