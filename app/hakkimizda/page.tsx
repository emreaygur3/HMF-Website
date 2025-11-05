import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export const metadata = {
  title: "Hakkımızda | HMF Desen Yapı",
  description:
    "1998'den beri doğal taş uygulamaları ve dekoratif kaplamalar konusunda uzman HMF Desen Yapı hakkında bilgi edinin.",
}

export default function About() {
  const milestones = [
    {
      year: "1998",
      title: "Kuruluş",
      description: "HMF Desen Yapı, doğal taş uygulamaları konusunda uzman ekibimizle faaliyet başladı.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Hizmet alanımız İzmir'den Türkiye geneline genişledi, büyük projelere başladık.",
    },
    {
      year: "2015",
      title: "Uzmanlık",
      description: "Dekoratif taş kaplamalar ve peyzaj tasarımında öncü konuma geldik.",
    },
    {
      year: "2024",
      title: "Günümüz",
      description: "Yüzlerce başarılı proje ve müşteri memnuniyetiyle lider konumdayız.",
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
      title: "Yenileme",
      description: "Son teknoloji ve tasarım trendlerini takip ederek hizmetlerimizi güncelliyoruz.",
    },
    {
      title: "Müşteri Odaklılık",
      description: "Müşterimizin ihtiyaç ve beklentilerini öncelik alarak çözüm sunuyoruz.",
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Hakkımızda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kırk yılı aşkın süredir doğal taş ve dekoratif kaplama konusunda güvenilen bir isim
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
                HMF Desen Yapı, 1998 yılında İzmir'de kurulmuş, doğal taş uygulamaları ve dekoratif kaplamalar konusunda
                uzmanlaşmış bir şirkettir. Yıllar boyunca kalite ve müşteri memnuniyetini ön planda tutarak, İzmir'den
                başlayan hizmetlerimizi Türkiye geneline yaymış durumdayız.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Profesyonel ekibimiz, her projede en iyi malzemeleri kullanarak ve en yüksek standartlarda işçilik
                sağlayarak binlerce müşterinin güvenini kazanmıştır.
              </p>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden h-96 border border-border">
              <img
                src="/natural-stone-masonry-work.jpg"
                alt="HMF Desen Yapı team working on stone installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-16 text-center">Tarihimiz</h2>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-1 h-24 bg-primary/30 mt-4"></div>}
                </div>
                <div className="pb-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
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
                    <Check className="text-primary" size={24} />
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

      {/* Team Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Neden Bizi Seçin?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border text-center">
              <div className="text-5xl font-bold text-primary mb-4">1000+</div>
              <p className="text-lg font-semibold text-foreground mb-2">Tamamlanan Proje</p>
              <p className="text-foreground/70">Yüzlerce konut ve ticari alanda başarılı projeler.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border text-center">
              <div className="text-5xl font-bold text-primary mb-4">25+</div>
              <p className="text-lg font-semibold text-foreground mb-2">Yıl Deneyim</p>
              <p className="text-foreground/70">Çeyrek asırlık uzman ekip ve bilgi birikimiyle.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-border text-center">
              <div className="text-5xl font-bold text-primary mb-4">100%</div>
              <p className="text-lg font-semibold text-foreground mb-2">Müşteri Memnuniyeti</p>
              <p className="text-foreground/70">Tüm projelerimizde kalite ve güvenilirlik garantisi.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
