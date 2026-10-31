import type { ComponentProps, ReactNode } from "react"
import { ArrowLink } from "@/components/ui/button"
import { Container } from "@/components/ui/section"

/** Sayfa başlığı alanı: tüm iç sayfalarda aynı görünüm (detay sayfalarında sola yaslı + geri bağlantısı) */
export function PageHero({
  title,
  subtitle,
  back,
  size,
}: {
  title: ReactNode
  subtitle?: ReactNode
  back?: { href: string; label: string }
  /** Altındaki içerikle aynı hizada olması için içerik genişliği */
  size?: ComponentProps<typeof Container>["size"]
}) {
  const centered = !back
  return (
    <section className="bg-gradient-to-b from-stone-100 to-white pb-12 pt-28 sm:pb-16 sm:pt-32">
      <Container size={size} className={centered ? "text-center" : ""}>
        {back && (
          <ArrowLink href={back.href} back className="mb-4 text-sm">
            {back.label}
          </ArrowLink>
        )}
        <h1 className="text-balance text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className={`mt-4 text-lg text-stone-600 sm:text-xl ${centered ? "mx-auto max-w-3xl" : "max-w-3xl"}`}>
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  )
}
