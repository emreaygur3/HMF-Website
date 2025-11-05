import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceImage } from "@/components/service-image"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Mountain, Layers, Sparkles, Leaf, Palette } from "lucide-react"

export const metadata = {
  title: "Ana Sayfa",
  description:
    "HMF Desen Yapı - 1998'den beri doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleriyle Türkiye'nin güvenilir markası.",
}

const services = [
  {
    title: "Derzli ve Derzsiz Taş Duvar",
    description: "Profesyonel taş duvar uygulamaları",
    icon: Building2,
    image: "/stone-wall-with-joints-residential.jpg",
    slug: "derzli-ve-derzsiz-tas-duvar",
  },
  {
    title: "Şev Taşı Yapımı",
    description: "Eğimli yüzeyler için taş kaplama",
    icon: Mountain,
    image: "/slope-stone-construction-hillside.jpg",
    slug: "sev-tasi-yapimi",
  },
  {
    title: "Kayrak Taş Kaplama",
    description: "Doğal kayrak taş ile kaplamalar",
    icon: Layers,
    image: "/slate-stone-entrance-detail.jpg",
    slug: "kayrak-tas-kaplama",
  },
  {
    title: "Granürlü Taşlar",
    description: "Dekoratif granürlü taş uygulamaları",
    icon: Sparkles,
    image: "/colorful-decorative-stone-pattern.jpg",
    slug: "granurlu-taslar",
  },
  {
    title: "Parke ve Bordür",
    description: "Peyzaj tasarımı ve bordür işleri",
    icon: Leaf,
    image: "/garden-landscape-stone-border.jpg",
    slug: "parke-ve-bordur",
  },
  {
    title: "Renkli ve Desenli Taş",
    description: "Özel tasarım ve desen uygulamaları",
    icon: Palette,
    image: "/colorful-stone-pattern-design-office.jpg",
    slug: "renkli-ve-desenli-tas",
  },
]

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "HMF Desen Yapı",
    description: "Doğal taş uygulamaları ve dekoratif kaplamalar",
    url: "https://hmfdesenyapi.com",
    telephone: "+905011863529",
    email: "emreaygur13@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İsmet İnönü Mah. 80 Yıl Cad.",
      addressLocality: "Menemen",
      addressRegion: "İzmir",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.6425,
      longitude: 27.17,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section - Full Screen Professional Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background-construction.jpg"
            alt="İnşaat alanı ve taş yapısı"
            fill
            className="object-cover"
            priority
            quality={75}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/80"></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              1998'den Beri Güvenilir Hizmet
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
              <span className="block">Taşın Estetiğini</span>
              <span className="block text-blue-400">Yapınıza Getiriyoruz</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleriyle yapınızın değerini arttırıyoruz. 
              <span className="block mt-2">İzmir ve Türkiye genelinde binlerce başarılı projenin öncüsüyüz.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/20 hover:border-white/40"
              >
                İletişime Geç
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-sm text-gray-300">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-sm text-gray-300">Yıl Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Şehirde Hizmet</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-sm">Aşağı Kaydır</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
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
                    <ServiceImage
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      fallbackText={service.title}
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
