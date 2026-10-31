import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Sitedeki tüm butonlar ve ok işaretli metin bağlantıları buradan gelir.

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"

export const buttonVariants = {
  /** Ana eylem (bronz) */
  primary: `${base} bg-brand text-white hover:bg-brand-hover`,
  /** WhatsApp eylemi (yeşil; beyaz yazıyla kontrast 5:1) */
  whatsapp: `${base} bg-green-700 text-white hover:bg-green-800`,
  /** Koyu zeminde / fotoğraf üzerinde ikincil eylem */
  ghost: `${base} border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20`,
} as const

export function ButtonLink({
  href,
  variant = "primary",
  arrow = false,
  className = "",
  children,
}: {
  href: string
  variant?: keyof typeof buttonVariants
  arrow?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <Link href={href} className={`${buttonVariants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={18} aria-hidden="true" />}
    </Link>
  )
}

/** "Detayları Gör →" türü metin bağlantısı (dokunma alanı en az 40px) */
export function ArrowLink({
  href,
  back = false,
  dark = false,
  className = "",
  children,
}: {
  href: string
  back?: boolean
  dark?: boolean
  className?: string
  children: ReactNode
}) {
  const color = dark ? "text-stone-300 hover:text-white" : "text-brand hover:text-brand-hover"
  return (
    <Link href={href} className={`inline-flex items-center gap-2 py-2 font-semibold transition-colors ${color} ${className}`}>
      {back && <ArrowLeft size={18} aria-hidden="true" />}
      {children}
      {!back && <ArrowRight size={18} aria-hidden="true" />}
    </Link>
  )
}
