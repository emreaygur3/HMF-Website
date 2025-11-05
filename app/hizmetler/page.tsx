import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceImage } from "@/components/service-image"
import { ArrowRight, Building2, Mountain, Layers, Sparkles, Leaf, Palette } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Hizmetler | HMF Desen Yapı",
  description: "Doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleri hakkında detaylı bilgi edinin.",
}

export default function Services() {
  const services = [
    {
      title: "Derzli ve Derzsiz Taş Duvar",
      icon: Building2,
      image: "/stone-wall-with-joints-residential.jpg",
      description: "Profesyonel taş duvar uygulamaları",
      slug: "derzli-ve-derzsiz-tas-duvar",
      details: [
        "Doğal taş kullanarak dayanıklı duvar yapıları",
        "Derzli ve derzsiz uygulama seçenekleri",
        "Yapının estetiğini artıran tasarımlar",
        "Uzun ömürlü ve bakım kolaylığı",
      ],
    },
    {
      title: "Şev Taşı Yapımı",
      icon: Mountain,
      image: "/slope-stone-construction-hillside.jpg",
      description: "Eğimli yüzeyler için taş kaplama",
      slug: "sev-tasi-yapimi",
      details: [
        "Eğimli arazi ve yamaçlara uygun çözümler",
        "Erosyon kontrolü ve stabilite sağlama",
        "Doğal görünüm ve peyzaj uyumu",
        "Uzun süreli dayanıklılık",
      ],
    },
    {
      title: "Kayrak Taş Kaplama",
      icon: Layers,
      image: "/slate-stone-entrance-detail.jpg",
      description: "Doğal kayrak taş ile kaplamalar",
      slug: "kayrak-tas-kaplama",
      details: [
        "Doğal kayrak taşının estetik görünümü",
        "Cephe ve iç mekan uygulamaları",
        "Göz alıcı tasarımlar ve desenleri",
        "Yüksek dayanıklılık ve yer değiştirmeme",
      ],
    },
    {
      title: "Granürlü Taşlar",
      icon: Sparkles,
      image: "/colorful-decorative-stone-pattern.jpg",
      description: "Dekoratif granürlü taş uygulamaları",
      slug: "granurlu-taslar",
      details: [
        "Çeşitli renk ve dokuda granürlü taşlar",
        "İç ve dış mekan dekorasyonu",
        "Modern ve klasik tasarımlara uyum",
        "Kolay temizlenme ve bakım",
      ],
    },
    {
      title: "Parke ve Bordür",
      icon: Leaf,
      image: "/garden-landscape-stone-border.jpg",
      description: "Peyzaj tasarımı ve bordür işleri",
      slug: "parke-ve-bordur",
      details: [
        "Bahçe ve dış alanlar için tasarımlar",
        "Dekoratif parke ve bordür uygulaması",
        "Peyzaj tasarımı danışmanlığı",
        "Mekan bütünlüğü sağlayan çözümler",
      ],
    },
    {
      title: "Renkli ve Desenli Taş",
      icon: Palette,
      image: "/colorful-stone-pattern-design-office.jpg",
      description: "Özel tasarım ve desen uygulamaları",
      slug: "renkli-ve-desenli-tas",
      details: [
        "Özel tasarım ve desen uygulamaları",
        "Renkli taş kombinasyonları",
        "Müşteri taleplerince özel tasarımlar",
        "Yaratıcı ve benzersiz çözümler",
      ],
    },
  ]

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Doğal taş ve dekoratif kaplama konusunda sunduğumuz kapsamlı hizmetleri keşfedin
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  href={`/hizmetler/${service.slug}`}
                  key={service.title}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all group"
                >
                  <div className="relative overflow-hidden h-48 bg-slate-200">
                    <ServiceImage
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      fallbackText={service.title}
                    />
                  </div>

                  <div className="p-8">
                    <div className="inline-block p-3 bg-blue-600 rounded mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>

                    {/* Service Details */}
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="text-slate-900 font-bold mt-1">▸</span>
                          <span className="text-sm text-slate-600">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all text-sm">
                      Detaylarını Gör
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">İş Sürecimiz</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Danışma",
                description: "Projenizi anlıyoruz ve ihtiyaçlarınızı belirleriz",
              },
              {
                step: "2",
                title: "Tasarım",
                description: "En uygun malzeme ve tasarımı seçiyoruz",
              },
              {
                step: "3",
                title: "Uygulama",
                description: "Profesyonel ekipçe hızlı ve kaliteli işçilik",
              },
              {
                step: "4",
                title: "Teslim",
                description: "Sonuç ve bakım talimatlarını sunuyoruz",
              },
            ].map((process) => (
              <div key={process.step} className="bg-white p-6 rounded-lg border border-slate-200 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-sm text-slate-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Projeniz İçin Teklif Alın</h2>
          <p className="text-lg mb-8 text-gray-300">
            Uzman ekibimize detaylar hakkında bilgi verin. En kısa sürede size dönüş yapacağız.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            İletişim Formu
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
