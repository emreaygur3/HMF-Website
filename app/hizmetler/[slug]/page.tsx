import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const servicesData = {
  "derzli-ve-derzsiz-tas-duvar": {
    title: "Derzli ve Derzsiz Taş Duvar",
    description: "Profesyonel taş duvar uygulamaları",
    fullDescription:
      "Doğal taşı kullanarak yapılan duvarlar, binaların yapısını güçlendirirken aynı zamanda estetik bir görünüm sağlar. Derzli (çimento içeren) ve derzsiz (tamamı taş) uygulamalar, projenizin ihtiyacına göre seçilebilir.",
    details: [
      "Doğal taş kullanarak dayanıklı duvar yapıları",
      "Derzli ve derzsiz uygulama seçenekleri",
      "Yapının estetiğini artıran tasarımlar",
      "Uzun ömürlü ve bakım kolaylığı",
      "UV ve iklim koşullarına dayanıklı",
      "Ses yalıtımı ve ısı koruması sağlar",
    ],
    benefits: [
      { title: "Dayanıklılık", description: "Yüzlerce yıl dayanabilen doğal taş malzeme" },
      { title: "Estetik", description: "Doğal ve şık görünüm sağlar" },
      { title: "Bakım Kolaylığı", description: "Minimal bakım gerektiren uzun ömürlü çözüm" },
      { title: "Çevre Dostu", description: "100% doğal ve geri dönüştürülebilir malzeme" },
    ],
    images: [
      "/stone-wall-with-joints-residential.jpg",
      "/stone-wall-with-joints-courtyard.jpg",
      "/natural-stone-wall-texture-detail.jpg",
      "/modern-villa-stone-facade.jpg",
    ],
    process: [
      "Zeminin hazırlanması ve temel atılması",
      "Taş seçimi ve ölçüye göre kesim",
      "Taşların dikkatli bir şekilde yerleştirilmesi",
      "Derz işlemleri (gerekli durumlarda)",
      "Sonlandırma ve kalite kontrolü",
    ],
  },
  "sev-tasi-yapimi": {
    title: "Şev Taşı Yapımı",
    description: "Eğimli yüzeyler için taş kaplama",
    fullDescription:
      "Yamaçlar ve eğimli arazilerde yapılan taş işçiliği, erozyonu önlerken aynı zamanda doğal bir görünüm sağlar. Stabilite ve estetik birlikte sunulur.",
    details: [
      "Eğimli arazi ve yamaçlara uygun çözümler",
      "Erosyon kontrolü ve stabilite sağlama",
      "Doğal görünüm ve peyzaj uyumu",
      "Uzun süreli dayanıklılık",
      "Drenaj sistemleriyle entegrasyon",
      "Su akışını kontrol eden tasarımlar",
    ],
    benefits: [
      { title: "Erozyonu Engeller", description: "Eğimli yüzeylerde toprak kaybını minimuma indirir" },
      { title: "Yapısal Stabilite", description: "Yamaçların kaymasını ve çökmesini önler" },
      { title: "Peyzaj Uyumu", description: "Doğal ortama uyumlu tasarımlar" },
      { title: "Su Yönetimi", description: "Su akışını kontrol ve yönetir" },
    ],
    images: [
      "/slope-stone-construction-hillside.jpg",
      "/slope-stone-construction-hillside-project.jpg",
      "/stone-retaining-wall-hillside.jpg",
      "/garden-landscape-stone-border.jpg",
    ],
    process: [
      "Arazi analizi ve tasarım planlaması",
      "Temel hazırlığı ve drenaj kurulumu",
      "Yaşıt ve kaliteli taş seçimi",
      "Seviye seviye taş yerleştirme",
      "Sonlandırma ve bitki dikimi",
    ],
  },
  "kayrak-tas-kaplama": {
    title: "Kayrak Taş Kaplama",
    description: "Doğal kayrak taş ile kaplamalar",
    fullDescription:
      "Kayrak taş, doğasından gelen şık renk ve dokusunun yanı sıra dayanıklılığı ile ön plandadır. İç ve dış mekanlar için kusursuz kaplamalar sunar.",
    details: [
      "Doğal kayrak taşının estetik görünümü",
      "Cephe ve iç mekan uygulamaları",
      "Göz alıcı tasarımlar ve desenleri",
      "Yüksek dayanıklılık ve yer değiştirmeme",
      "Modern ve klasik mimaride kullanım",
      "Doğal kaynaktan temin edilen malzeme",
    ],
    benefits: [
      { title: "Doğal Güzellik", description: "Benzersiz renk ve desen varyasyonları" },
      { title: "Dayanıklılık", description: "Yüzlerce yıl dayanabilen premium malzeme" },
      { title: "Çok Yönlü Kullanım", description: "Cephe, iç mekan, zemin ve tavan uygulamaları" },
      { title: "Prestij", description: "Yüksek kalite ve lüks imajı sunar" },
    ],
    images: [
      "/slate-stone-entrance-detail.jpg",
      "/hotel-facade-stone-cladding.jpg",
      "/hotel-stone-facade-professional-design.jpg",
      "/modern-villa-stone-facade-detail.jpg",
    ],
    process: [
      "Kayrak taş seçimi ve kalite kontrolü",
      "Zemin hazırlığı ve yapıştırıcı uygulaması",
      "Taşların dikkatli yerleştirilmesi",
      "Derz işlemi ve sonlandırma",
      "Koruyucu kaplama uygulaması",
    ],
  },
  "granurlu-taslar": {
    title: "Granürlü Taşlar",
    description: "Dekoratif granürlü taş uygulamaları",
    fullDescription:
      "Granürlü taşlar, çeşitli renk ve dokularıyla iç ve dış mekanları güzelleştiren dekoratif çözümler sunar. Modern ve klasik tasarımlara uyum sağlar.",
    details: [
      "Çeşitli renk ve dokuda granürlü taşlar",
      "İç ve dış mekan dekorasyonu",
      "Modern ve klasik tasarımlara uyum",
      "Kolay temizlenme ve bakım",
      "Birçok renk kombinasyonu seçeneği",
      "Kaymaz yüzey özellikleri",
    ],
    benefits: [
      { title: "Renkli Seçenekler", description: "Sınırladılmamış renk ve desen kombinasyonları" },
      { title: "Kolay Bakım", description: "Basit temizleme yöntemleriyle hijyenik kalır" },
      { title: "Güvenlik", description: "Kaymaz yüzey uygulamaları" },
      { title: "Esneklik", description: "Her tür iç ve dış mekan tasarımına uyum sağlar" },
    ],
    images: [
      "/service-granite-stone-application.jpg",
      "/colorful-decorative-stone-pattern.jpg",
      "/colorful-stone-pattern-design-office.jpg",
      "/commercial-entrance-stone-design.jpg",
    ],
    process: [
      "Müşteri istekleri doğrultusunda renk seçimi",
      "Yüzey hazırlığı ve öncü işçilik",
      "Granürlü taş uygulaması",
      "Parlak ve matta bitişin seçilmesi",
      "Son kalite kontrol ve teslim",
    ],
  },
  "parke-ve-bordur": {
    title: "Parke ve Bordür",
    description: "Peyzaj tasarımı ve bordür işleri",
    fullDescription:
      "Bahçe ve dış alanlar için tasarlanan parke ve bordür uygulamaları, mekanı işlevsel ve güzel hale getirir. Peyzaj tasarımında tamamen kişiye özel çözümler sunulur.",
    details: [
      "Bahçe ve dış alanlar için tasarımlar",
      "Dekoratif parke ve bordür uygulaması",
      "Peyzaj tasarımı danışmanlığı",
      "Mekan bütünlüğü sağlayan çözümler",
      "Farklı taş türlerinin kombinasyonları",
      "Su yönetimi ve drenaj entegrasyonu",
    ],
    benefits: [
      { title: "Alanı Tanımlama", description: "Bahçe alanlarını net bir şekilde ayırır" },
      { title: "Estetik Değer", description: "Dış mekanın güzelliğini artırır" },
      { title: "İşlevsellik", description: "Yürüme alanları ve drenajı yönetir" },
      { title: "Tasarım Esnekliği", description: "Tamamen kişiye özel tasarımlar" },
    ],
    images: [
      "/decorative-garden-stone-patio.jpg",
      "/garden-landscape-design-border-stone.jpg",
      "/garden-landscape-stone-border.jpg",
      "/service-paving-stone-design.jpg",
    ],
    process: [
      "Bahçe ölçüleri ve tasarımı planlaması",
      "Zemin hazırlığı ve drenaj kurulumu",
      "Parke taşlarının yerleştirilmesi",
      "Bordür çekimi ve bitkilendirme",
      "Bakım talimatlarının verilmesi",
    ],
  },
  "renkli-ve-desenli-tas": {
    title: "Renkli ve Desenli Taş",
    description: "Özel tasarım ve desen uygulamaları",
    fullDescription:
      "Yaratıcı tasarımlar ve renkli taş kombinasyonları kullanarak, tamamen özel ve benzersiz mekanlar yaratılır. Sanatsal ve işlevsel bir araya gelir.",
    details: [
      "Özel tasarım ve desen uygulamaları",
      "Renkli taş kombinasyonları",
      "Müşteri taleplerince özel tasarımlar",
      "Yaratıcı ve benzersiz çözümler",
      "Monolit tasarımlardan sanat eserine kadar",
      "Sınırladılmamış renk paletleri",
    ],
    benefits: [
      { title: "Benzersizlik", description: "Başka yerde bulunamayacak tasarımlar" },
      { title: "Kişiselleştirme", description: "Tamamen müşteri isteklerine göre özel tasarımlar" },
      { title: "Sanatsal Değer", description: "Mimarinin sanat yönünü öne çıkarır" },
      { title: "Marka İmajı", description: "Işletmelere güçlü ve ayırt edici imaj kazandırır" },
    ],
    images: [
      "/service-colorful-stone-pattern.jpg",
      "/decorative-stone-mosaic-entrance.jpg",
      "/commercial-building-entrance-stone-design.jpg",
      "/residential-complex-entrance-stone-facade.jpg",
    ],
    process: [
      "İstek ve vizyon danışması",
      "Konsept tasarım ve modelleme",
      "Müşteri onayı ve revizyon",
      "Taş seçimi ve kesim işleri",
      "Tekil uygulamalar ve bitiriş",
    ],
  },
}

export function generateMetadata({ params }) {
  const service = servicesData[params.slug]
  return {
    title: `${service?.title || "Hizmet"} | HMF Desen Yapı`,
    description: service?.fullDescription || "",
  }
}

export default function ServiceDetail({ params }) {
  const service = servicesData[params.slug]

  if (!service) {
    return (
      <main>
        <Navigation />
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Hizmet Bulunamadı</h1>
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-700"
            >
              <ArrowLeft size={20} />
              Hizmetlere Dön
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Hizmetlere Dön
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">{service.title}</h1>
          <p className="text-xl text-gray-200">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {service.images.slice(0, 4).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square md:aspect-video">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${service.title} - Görsel ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Hakkında</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">{service.fullDescription}</p>

            {/* Details List */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Özellikler</h3>
            <ul className="grid md:grid-cols-2 gap-4 mb-12">
              {service.details.map((detail, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-slate-900 font-bold mt-1 flex-shrink-0">▸</span>
                  <span className="text-slate-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Avantajları</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-50 p-8 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                  <p className="text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Uygulama Süreci</h2>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg text-slate-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{service.title} İçin Teklif Alın</h2>
          <p className="text-lg mb-8 text-gray-300">
            Projeleriniz için uzman ekibimizle iletişime geçin ve en uygun çözümü birlikte bulun.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
