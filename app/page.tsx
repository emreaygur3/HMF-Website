import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Building2, Mountain, Layers, Sparkles, Leaf, Palette } from "lucide-react"

const services = [
  {
    title: "Derzli ve Derzsiz Taş Duvar",
    description: "Profesyonel taş duvar uygulamaları",
    icon: Building2,
    image: "/derzli-taş-duvar.jpg",
    slug: "derzli-ve-derzsiz-tas-duvar",
  },
  {
    title: "Şev Taşı Yapımı",
    description: "Eğimli yüzeyler için taş kaplama",
    icon: Mountain,
    image: "/şev-taşı-yapımı.jpg",
    slug: "sev-tasi-yapimi",
  },
  {
    title: "Kayrak Taş Kaplama",
    description: "Doğal kayrak taş ile kaplamalar",
    icon: Layers,
    image: "/kayrak-taş-kaplama.jpg",
    slug: "kayrak-tas-kaplama",
  },
  {
    title: "Granürlü Taşlar",
    description: "Dekoratif granürlü taş uygulamaları",
    icon: Sparkles,
    image: "/granürlü-taşlar.jpg",
    slug: "granurlu-taslar",
  },
  {
    title: "Parke ve Bordür",
    description: "Peyzaj tasarımı ve bordür işleri",
    icon: Leaf,
    image: "/parke-bordür.jpg",
    slug: "parke-ve-bordur",
  },
  {
    title: "Renkli ve Desenli Taş",
    description: "Özel tasarım ve desen uygulamaları",
    icon: Palette,
    image: "/renkli-desenli-taş.jpg",
    slug: "renkli-ve-desenli-tas",
  },
]

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* Hero Section - CHANGE: Increased height and improved background */}
      <section className="pt-32 pb-32 px-4 relative overflow-hidden min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background-construction.jpg"
            alt="İnşaat alanı ve taş yapısı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight text-balance text-white drop-shadow-lg">
            Taşın Estetiğini Yapınıza Getiriyoruz
          </h1>
          <p className="text-2xl font-semibold mb-4 text-gray-100 drop-shadow">1998'den Beri Güvenilir Hizmet</p>
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow">
            Doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleriyle yapınızın değerini arttırıyoruz. İzmir
            ve Türkiye genelinde binlerce başarılı projenin öncüsüyüz.
          </p>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Hizmetlerimizi Keşfedin
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* About Section - CHANGE: Expanded and more professional */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Hakkımızda</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                1998 yılından beri faaliyet gösteren HMF Desen Yapı, doğal taş uygulamaları, dekoratif kaplamalar ve
                peyzaj çözümleriyle Türkiye'nin en güvenilir isimlerinden biri haline gelmiştir.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                İzmir merkezli operasyonlarından başlayarak, ülke genelinde yüzlerce konut, ticari mekan ve peyzaj
                projesini başarıyla tamamladık. Her bir projede kalite, güvenilirlik ve müşteri memnuniyeti
                ilkelerimizle hareket ediyoruz.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Uzman ekibimiz, en yeni teknolojiler ve geleneksel ustalık bilgisini birleştirerek, yapınızın mimarisine
                ve şahsiyetine en uygun çözümleri sunmaktadır.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Neden Biz?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-slate-700">
                    <strong>25+ Yıl Tecrübe:</strong> Uzun yıllar güvenilir hizmet
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-slate-700">
                    <strong>Kaliteli Malzeme:</strong> Doğal taş ve en iyi ürünler
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-slate-700">
                    <strong>Profesyonel Ekip:</strong> Deneyimli ve eğitimli ustalar
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span className="text-slate-700">
                    <strong>Müşteri Odaklı:</strong> Tüm projelere özel dikkat
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all hover:text-slate-700"
            >
              Şirket Tarihçesi ve Projelerimiz
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid - CHANGE: Added images and made clickable with detail links */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Uzmanlık Alanlarımız</h2>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Doğal taş ve dekoratif kaplama çözümlerinde uzmanlaşmış hizmetlerimize göz atın
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  href={`/hizmetler/${service.slug}`}
                  key={service.title}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all group cursor-pointer"
                >
                  {/* CHANGE: Added image container with hover effect */}
                  <div className="relative overflow-hidden h-56 bg-slate-200">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `/placeholder.svg?height=224&width=400&query=${service.title}`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  </div>

                  <div className="p-6">
                    <div className="inline-block p-3 bg-blue-600 rounded mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      Detayları Gör
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Projeniz İçin Teklif Alın</h2>
          <p className="text-lg mb-8 text-gray-300">
            Uzman ekibimizle iletişime geçin ve yapınız için en uygun çözümü bulun.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            İletişime Geç
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
