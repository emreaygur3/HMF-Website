import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Sitedeki tüm butonlar ve ok işaretli metin bağlantıları buradan gelir.

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"

const sizes = {
  md: "px-6 py-3.5",
  /** Menü gibi dar alanlar için */
  sm: "px-4 py-2.5 text-sm",
} as const

const colors = {
  /** Ana eylem (bronz) */
  primary: "bg-brand text-white hover:bg-brand-hover",
  /** WhatsApp eylemi (yeşil; beyaz yazıyla kontrast 5:1) */
  whatsapp: "bg-green-700 text-white hover:bg-green-800",
  /** Koyu zeminde / fotoğraf üzerinde ikincil eylem */
  ghost: "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20",
} as const

type Variant = keyof typeof colors

export const buttonClass = (variant: Variant = "primary", size: keyof typeof sizes = "md") =>
  `${base} ${sizes[size]} ${colors[variant]}`

/** Normal boy buton sınıfları (form butonları gibi <button> öğeleri için) */
export const buttonVariants = {
  primary: buttonClass("primary"),
  whatsapp: buttonClass("whatsapp"),
  ghost: buttonClass("ghost"),
} as const

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
}: {
  href: string
  variant?: Variant
  size?: keyof typeof sizes
  arrow?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <Link href={href} className={`${buttonClass(variant, size)} ${className}`}>
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
