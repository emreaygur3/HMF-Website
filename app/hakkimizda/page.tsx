import type { Metadata } from "next"
import { Check } from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
import { Section, SectionHeading } from "@/components/ui/section"
import { pageOpenGraph } from "@/lib/seo"
import { siteConfig, stats } from "@/lib/site"

const title = "Hakkımızda"
const description =
  "1998'den beri Menemen merkezli olarak Aliağa, İzmir ve Ege'de doğal taş uygulamaları ve dekoratif kaplamalar yapan HMF Desen Yapı'yı tanıyın."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hakkimizda" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/hakkimizda" }),
}

const milestones = [
  {
    year: "1998",
    title: "Kuruluş",
    description: "HMF Desen Yapı, doğal taş uygulamaları konusunda uzman ekibiyle faaliyete başladı.",
  },
  {
    year: "2005",
    title: "Büyüme",
    description: "Hizmet alanımız İzmir'den Türkiye geneline genişledi, büyük projelere başladık.",
  },
  {
    year: "2015",
    title: "Uzmanlık",
    description: "Dekoratif taş kaplamalar ve peyzaj tasarımında öncü konuma geldik.",
  },
  {
    year: "current",
    title: "Günümüz",
    description: "Binlerce başarılı proje ve müşteri memnuniyetiyle sektörün güvenilir isimleri arasındayız.",
  },
]

const values = [
  {
    title: "Kalite",
    description: "Her projede en iyi malzeme ve işçiliği kullanarak en yüksek kaliteyi sağlıyoruz.",
  },
  {
    title: "Güvenilirlik",
    description: "Zamanında teslim ve sözümüzü tutma ilkesi ile hareket ediyoruz.",
  },
  {
    title: "Yenilikçilik",
    description: "Son teknoloji ve tasarım trendlerini takip ederek hizmetlerimizi güncelliyoruz.",
  },
  {
    title: "Müşteri Odaklılık",
    description: "Müşterilerimizin ihtiyaç ve beklentilerini önceliklendirerek çözüm sunuyoruz.",
  },
]

const highlights = [
  { value: stats.projects, label: "Tamamlanan Proje", text: "Binlerce konut ve ticari alanda başarılı projeler." },
  { value: stats.years, label: "Yıl Deneyim", text: "Çeyrek asırlık uzman ekip ve bilgi birikimiyle." },
  { value: stats.satisfaction, label: "Müşteri Memnuniyeti", text: "Tüm projelerimizde kalite ve güvenilirlik." },
]

export default function AboutPage() {
  const currentYear = new Date().getFullYear()
  const yearsActive = currentYear - siteConfig.foundedYear

  return (
    <>
      <PageHero
        title="Hakkımızda"
        subtitle={`${yearsActive} yılı aşkın süredir doğal taş ve dekoratif kaplama konusunda güvenilen bir isim`}
      />

      <Section className="pt-4 sm:pt-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Bizim Hikayemiz</h2>
            <div className="space-y-4 text-lg leading-relaxed text-stone-600">
              <p>
                HMF Desen Yapı, 1998 yılında İzmir&apos;de kurulmuş, doğal taş uygulamaları ve dekoratif kaplamalar
                konusunda uzmanlaşmış bir şirkettir. Yıllar boyunca kalite ve müşteri memnuniyetini ön planda tutarak,
                İzmir&apos;den başlayan hizmetlerimizi Türkiye geneline yaymış durumdayız.
              </p>
              <p>
                Profesyonel ekibimiz, her projede en iyi malzemeleri kullanarak ve en yüksek standartlarda işçilik
                sağlayarak binlerce müşterinin güvenini kazanmıştır.
              </p>
            </div>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-stone-200 bg-brand-soft p-8">
            <Logo layout="stacked" className="h-auto w-3/5 max-w-64" />
          </div>
        </div>
      </Section>

      <Section tone="muted" size="4xl">
        <SectionHeading title="Tarihimiz" />
        {/* Zaman çizelgesi: soldaki dikey çizgi tüm maddeleri birleştirir */}
        <ol className="relative ml-7 space-y-10 border-l-2 border-stone-200">
          {milestones.map((milestone) => (
            <li key={milestone.year} className="relative pl-12 sm:pl-14">
              <span className="absolute -left-[29px] top-0 flex h-14 w-14 items-center justify-center rounded-full bg-stone-900 text-sm font-bold text-white ring-4 ring-stone-50">
                {milestone.year === "current" ? currentYear : milestone.year}
              </span>
              <h3 className="pt-3 text-xl font-bold text-stone-900 sm:text-2xl">{milestone.title}</h3>
              <p className="mt-1 text-stone-600">{milestone.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title="Değerlerimiz" />
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          {values.map((value) => (
            <div key={value.title} className="flex items-start gap-4 rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
              <Check size={24} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
              <div>
                <h3 className="mb-2 text-xl font-bold text-stone-900">{value.title}</h3>
                <p className="text-stone-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Neden Bizi Seçin?" />
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-xl border border-stone-200 bg-white p-6 text-center sm:p-8">
              <p className="text-4xl font-bold text-brand sm:text-5xl">{item.value}</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">{item.label}</p>
              <p className="mt-1 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
