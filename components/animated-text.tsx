'use client'

import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

export function AnimatedText({ 
  children, 
  className = '', 
  delay = 0,
  as: Component = 'div'
}: AnimatedTextProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  })

  return (
    <Component
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-6'
        }
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
