import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { gallery } from "@/lib/gallery"
import { serviceIcons } from "@/lib/service-icons"
import { services } from "@/lib/services"
import { stats } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const heroStats = [
  { value: stats.projects, label: "Tamamlanan Proje" },
  { value: stats.years, label: "Yıl Deneyim" },
  { value: stats.cities, label: "Şehirde Hizmet" },
  { value: stats.satisfaction, label: "Müşteri Memnuniyeti" },
]

const reasons = [
  { title: `${stats.years} Yıl Tecrübe`, text: "Uzun yıllar güvenilir hizmet" },
  { title: "Kaliteli Malzeme", text: "Doğal taş ve en iyi ürünler" },
  { title: "Profesyonel Ekip", text: "Deneyimli ve eğitimli ustalar" },
  { title: "Müşteri Odaklı", text: "Tüm projelere özel dikkat" },
]

// Son işlerimiz: her kategoriden bir fotoğraf (galeriden)
const recentWork = gallery.categories
  .map((category) => gallery.items.find((item) => item.category === category.id)!)
  .slice(0, 8)

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Kendi saha fotoğrafımız: küp taşı spiral desenli avlu */}
          <Image
            src="/kup-tasi-saha-spiral-desen.jpg"
            alt=""
            fill
            className="object-cover"
            style={{ objectPosition: "center 65%" }}
            priority
            sizes="100vw"
            quality={75}
          />
          {/* Yazıların okunması için sıcak tonlu koyu kaplama */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/70 to-stone-950/85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand/90 backdrop-blur-sm text-white text-sm font-semibold mb-8 shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
              1998&apos;den Beri Güvenilir Hizmet
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight text-white">
              <span className="block">Taşın Estetiğini</span>
              <span className="block text-brand-light">Ayağınıza Getiriyoruz</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleriyle yapınızın değerini artırıyoruz.
              <span className="block mt-2">İzmir ve Türkiye genelinde binlerce başarılı projenin öncüsüyüz.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all border-2 border-white/20 hover:border-white/40"
              >
                İletişime Geç
              </Link>
            </div>

            {/* Stats */}
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center flex flex-col-reverse">
                  <dt className="text-sm text-gray-300">{stat.label}</dt>
                  <dd className="text-4xl font-bold text-brand-light mb-2">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        >
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-sm">Aşağı Kaydır</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Hakkımızda</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                1998 yılından beri faaliyet gösteren HMF Desen Yapı, doğal taş uygulamaları, dekoratif kaplamalar ve
                peyzaj çözümleriyle Türkiye&apos;nin en güvenilir isimlerinden biri haline gelmiştir.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Menemen&apos;deki merkezimizden Aliağa, Foça, Bergama ve tüm İzmir&apos;e, Ege Bölgesi&apos;ne ve Türkiye geneline uzanan hizmet ağımızla binlerce konut, ticari mekan
                ve peyzaj projesini başarıyla tamamladık. Her bir projede kalite, güvenilirlik ve müşteri memnuniyeti
                ilkelerimizle hareket ediyoruz.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Uzman ekibimiz, en yeni teknolojiler ve geleneksel ustalık bilgisini birleştirerek, yapınızın mimarisine
                ve karakterine en uygun çözümleri sunmaktadır.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Neden Biz?</h3>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason.title} className="flex gap-3 items-start">
                    <span className="text-brand font-bold text-xl" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      <strong>{reason.title}:</strong> {reason.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all hover:text-slate-700"
            >
              Şirket Tarihçesi ve Projelerimiz
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Uzmanlık Alanlarımız</h2>
          <p className="text-lg text-slate-600 text-center mb-16 max-w-2xl mx-auto">
            Doğal taş ve dekoratif kaplama çözümlerinde uzmanlaşmış hizmetlerimize göz atın
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <Link
                  href={`/hizmetler/${service.slug}`}
                  key={service.slug}
                  className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:border-brand/40 transition-all group cursor-pointer"
                >
                  <div className="relative overflow-hidden h-56 bg-slate-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      style={{ objectPosition: service.imagePositions?.[service.image] }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
                    ></div>
                  </div>

                  <div className="p-6">
                    <div className="inline-block p-3 bg-brand rounded mb-4">
                      <Icon size={24} className="text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <div className="inline-flex items-center gap-2 text-brand font-semibold group-hover:gap-3 transition-all">
                      Detayları Gör
                      <ArrowRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Son İşlerimiz */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-3">Son İşlerimiz</h2>
              <p className="text-lg text-slate-600">Sahadan gerçek uygulamalarımızdan seçmeler</p>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
            >
              Tüm galeriyi gör
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {recentWork.map((item) => (
              <li key={item.src}>
                <Link
                  href="/galeri"
                  className="group relative block overflow-hidden rounded-lg aspect-[4/3] bg-slate-100"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1152px) 276px, (min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: item.position }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 p-3 text-xs sm:text-sm font-semibold text-white">
                    {item.caption}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
            className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded font-semibold hover:bg-brand-hover transition-colors"
          >
            İletişime Geç
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
