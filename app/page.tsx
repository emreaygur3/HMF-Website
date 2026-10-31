import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { ServiceCard } from "@/components/services/service-card"
import { ArrowLink, ButtonLink } from "@/components/ui/button"
import { CtaSection } from "@/components/ui/cta-section"
import { Container, Section, SectionHeading } from "@/components/ui/section"
import { StatGrid } from "@/components/ui/stat-grid"
import { gallery } from "@/lib/gallery"
import { services } from "@/lib/services"
import { stats } from "@/lib/site"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const reasons = [
  { title: `${stats.years} Yıl Tecrübe`, text: "Uzun yıllar güvenilir hizmet" },
  { title: "Kaliteli Malzeme", text: "Doğal taş ve en iyi ürünler" },
  { title: "Profesyonel Ekip", text: "Deneyimli ve eğitimli ustalar" },
  { title: "Müşteri Odaklı", text: "Tüm projelere özel dikkat" },
]

// Son işlerimiz: galerideki her kategoriden bir fotoğraf
const recentWork = gallery.categories
  .map((category) => gallery.items.find((item) => item.category === category.id)!)
  .slice(0, 8)

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <Image
          src="/images/hizmetler/kup-tasi-ve-begonit/spiral-desen.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 65%" }}
        />
        {/* Yazıların okunması için sıcak tonlu koyu kaplama */}
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/70 to-stone-950/85" />

        <Container className="relative py-28 text-center sm:py-32">
          <p className="mb-6 inline-flex items-center rounded-full bg-brand/90 px-4 py-2 text-sm font-semibold text-white shadow-lg sm:mb-8">
            <span aria-hidden="true" className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400" />
            1998&apos;den Beri Güvenilir Hizmet
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">Taşın Estetiğini</span>
            <span className="block text-brand-light">Ayağınıza Getiriyoruz</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-stone-200 sm:text-xl lg:text-2xl">
            Doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleriyle yapınızın değerini artırıyoruz.
            <span className="mt-2 block">İzmir ve Türkiye genelinde binlerce başarılı projenin öncüsüyüz.</span>
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="/hizmetler" arrow>
              Hizmetlerimizi Keşfedin
            </ButtonLink>
            <ButtonLink href="/iletisim" variant="ghost">
              İletişime Geç
            </ButtonLink>
          </div>

          <StatGrid dark className="mx-auto mt-16 max-w-4xl sm:mt-20" />
        </Container>
      </section>

      {/* Hakkımızda özeti */}
      <Section>
        <SectionHeading title="Hakkımızda" />
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-5 text-lg leading-relaxed text-stone-600">
            <p>
              1998 yılından beri faaliyet gösteren HMF Desen Yapı, doğal taş uygulamaları, dekoratif kaplamalar ve
              peyzaj çözümleriyle Türkiye&apos;nin en güvenilir isimlerinden biri haline gelmiştir.
            </p>
            <p>
              Menemen&apos;deki merkezimizden Aliağa, Foça, Bergama ve tüm İzmir&apos;e, Ege Bölgesi&apos;ne ve Türkiye
              geneline uzanan hizmet ağımızla binlerce konut, ticari mekan ve peyzaj projesini başarıyla tamamladık.
              Her bir projede kalite, güvenilirlik ve müşteri memnuniyeti ilkelerimizle hareket ediyoruz.
            </p>
            <p>
              Uzman ekibimiz, en yeni teknolojiler ve geleneksel ustalık bilgisini birleştirerek, yapınızın mimarisine
              ve karakterine en uygun çözümleri sunmaktadır.
            </p>
          </div>
          <div className="rounded-xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-bold text-stone-900">Neden Biz?</h3>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-3 text-stone-600">
                  <Check size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <strong className="text-stone-900">{reason.title}:</strong> {reason.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <ArrowLink href="/hakkimizda">Şirket Tarihçesi ve Değerlerimiz</ArrowLink>
        </div>
      </Section>

      {/* Hizmetler */}
      <Section tone="muted">
        <SectionHeading
          title="Uzmanlık Alanlarımız"
          subtitle="Doğal taş ve dekoratif kaplama çözümlerinde uzmanlaşmış hizmetlerimize göz atın"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Son işlerimiz */}
      <Section>
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Son İşlerimiz</h2>
            <p className="mt-3 text-base text-stone-600 sm:text-lg">Sahadan gerçek uygulamalarımızdan seçmeler</p>
          </div>
          <ArrowLink href="/galeri">Tüm galeriyi gör</ArrowLink>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {recentWork.map((item) => (
            <li key={item.src}>
              <Link href="/galeri" className="group relative block aspect-[4/3] overflow-hidden rounded-lg bg-stone-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1152px) 276px, (min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.position }}
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-0 left-0 p-3 text-xs font-semibold text-white sm:text-sm">{item.caption}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaSection />
    </>
  )
}
