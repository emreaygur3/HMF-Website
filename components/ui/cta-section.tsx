import { ButtonLink } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

/** Sayfa sonlarındaki "teklif alın" bölümü: tüm sayfalarda aynı görünüm */
export function CtaSection({
  title = "Projeniz İçin Teklif Alın",
  text = "Uzman ekibimizle iletişime geçin, keşif ve fiyat teklifi için size en kısa sürede dönüş yapalım.",
  label = "İletişime Geç",
  href = "/iletisim",
}: {
  title?: string
  text?: string
  label?: string
  href?: string
}) {
  return (
    <Section tone="dark" size="2xl" className="text-center">
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-stone-300">{text}</p>
      <ButtonLink href={href} arrow className="mt-8">
        {label}
      </ButtonLink>
    </Section>
  )
}
