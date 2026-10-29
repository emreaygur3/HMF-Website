import type { Metadata } from "next"
import Image from "next/image"
import { Check } from "lucide-react"
import { siteConfig, stats } from "@/lib/site"

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "1998'den beri Menemen merkezli olarak Aliağa, İzmir ve Ege'de doğal taş uygulamaları ve dekoratif kaplamalar yapan HMF Desen Yapı'yı tanıyın.",
  alternates: { canonical: "/hakkimizda" },
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
    description: "Yüzlerce başarılı proje ve müşteri memnuniyetiyle sektörün güvenilir isimleri arasındayız.",
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
  { value: stats.projects, label: "Tamamlanan Proje", text: "Yüzlerce konut ve ticari alanda başarılı projeler." },
  { value: stats.years, label: "Yıl Deneyim", text: "Çeyrek asırlık uzman ekip ve bilgi birikimiyle." },
  { value: stats.satisfaction, label: "Müşteri Memnuniyeti", text: "Tüm projelerimizde kalite ve güvenilirlik." },
]

export default function About() {
  const currentYear = new Date().getFullYear()
  const yearsActive = currentYear - siteConfig.foundedYear

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">Hakkımızda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {yearsActive} yılı aşkın süredir doğal taş ve dekoratif kaplama konusunda güvenilen bir isim
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Bizim Hikayemiz</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                HMF Desen Yapı, 1998 yılında İzmir&apos;de kurulmuş, doğal taş uygulamaları ve dekoratif kaplamalar
                konusunda uzmanlaşmış bir şirkettir. Yıllar boyunca kalite ve müşteri memnuniyetini ön planda tutarak,
                İzmir&apos;den başlayan hizmetlerimizi Türkiye geneline yaymış durumdayız.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Profesyonel ekibimiz, her projede en iyi malzemeleri kullanarak ve en yüksek standartlarda işçilik
                sağlayarak binlerce müşterinin güvenini kazanmıştır.
              </p>
            </div>
            <div className="relative bg-slate-50 rounded-lg overflow-hidden h-96 border border-border">
              <Image
                src="/logo.svg"
                alt="HMF Desen, Yapı ve İnşaat logosu"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-10 sm:p-16"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Tarihimiz</h2>
          <ol className="max-w-2xl mx-auto space-y-12">
            {milestones.map((milestone, index) => (
              <li key={milestone.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year === "current" ? currentYear : milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div aria-hidden="true" className="w-1 h-24 bg-primary/30 mt-4"></div>
                  )}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Değerlerimiz</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-slate-50 p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Check className="text-primary" size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Neden Bizi Seçin?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="bg-white p-8 rounded-lg border border-border text-center">
                <div className="text-5xl font-bold text-primary mb-4">{item.value}</div>
                <p className="text-lg font-semibold text-foreground mb-2">{item.label}</p>
                <p className="text-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
