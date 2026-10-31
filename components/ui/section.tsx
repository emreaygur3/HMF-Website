import type { ReactNode } from "react"

// Sayfa düzeninin temel parçaları: tüm sayfalar aynı genişlik, kenar boşluğu ve dikey ritmi kullanır.

const widths = { "2xl": "max-w-2xl", "4xl": "max-w-4xl", "6xl": "max-w-6xl" } as const
const tones = {
  white: "bg-white",
  muted: "bg-stone-50",
  soft: "bg-brand-soft",
  dark: "bg-stone-900 text-white",
} as const

type Width = keyof typeof widths

/** Menü ile aynı yatay hizada içerik kutusu */
export function Container({ size = "6xl", className = "", children }: { size?: Width; className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full ${widths[size]} px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({
  tone = "white",
  size = "6xl",
  className = "",
  children,
}: {
  tone?: keyof typeof tones
  size?: Width
  className?: string
  children: ReactNode
}) {
  return (
    <section className={`py-16 sm:py-20 ${tones[tone]} ${className}`}>
      <Container size={size}>{children}</Container>
    </section>
  )
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
  as: Tag = "h2",
}: {
  title: ReactNode
  subtitle?: ReactNode
  align?: "center" | "left"
  dark?: boolean
  as?: "h1" | "h2"
}) {
  return (
    <div className={`mb-10 sm:mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : ""}`}>
      <Tag className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-stone-900"}`}>{title}</Tag>
      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg ${dark ? "text-stone-300" : "text-stone-600"}`}>{subtitle}</p>
      )}
    </div>
  )
}
