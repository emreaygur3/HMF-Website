import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users } from "lucide-react"

// Project details database
const projectsData = {
  1: {
    title: "Modern Villa Cephe Uygulaması",
    category: "Konut",
    status: "Tamamlandı",
    date: "Mart 2024",
    location: "İzmir, Alsancak",
    client: "Özel İsim",
    duration: "3 ay",
    team: "5 kişi",
    description:
      "Mermer ve granürlü taş kombinasyonu kullanılarak tasarlanan modern villa cephesi. Yapının mimarı tarafından istenen estetik standartlar tam olarak karşılanmıştır.",
    objective:
      "Çağdaş ve göz alıcı bir cephe tasarımı ile villayı mahallede öne çıkarmak. Doğal taşın yalıtım özelliklerinden de faydalanarak enerji verimliliğini artırmak.",
    results:
      "Tamamlanan proje müşterinin tüm beklentilerini aşmış ve tasarım ödülüne aday gösterilmiştir. Cephe, yazları ek 15% soğutma maliyeti tasarrufu sağlamaktadır.",
    images: ["/modern-villa-stone-facade.jpg", "/modern-villa-stone-facade-detail.jpg", "/villa-stone-cladding-evening-light.jpg"],
  },
  2: {
    title: "Ticari Merkez Giriş Tasarımı",
    category: "Ticari",
    status: "Tamamlandı",
    date: "Şubat 2024",
    location: "İzmir, Alsancak",
    client: "Şirket A",
    duration: "2 ay",
    team: "6 kişi",
    description:
      "Kayrak taş kullanılarak oluşturulan ticari merkez giriş alanı. Modern mimariyle uyumlu, prestijli bir görünüm sağlamaktadır.",
    objective: "Ticari merkeze profesyonel ve davetkar bir giriş oluşturmak. Müşteri ilk izlenimini güçlendirmek.",
    results:
      "Tamamlanan giriş alanı ticari merkeze 30% daha fazla ziyaretçi çekmeyi başarmıştır. Kayrak taşın doğal güzelliği tüm müşterilerin beğenisini kazanmıştır.",
    images: ["/commercial-entrance-stone-design.jpg", "/commercial-building-entrance-stone-design.jpg", "/slate-stone-entrance-detail.jpg"],
  },
  3: {
    title: "Bahçe Peyzaj Bordür",
    category: "Peyzaj",
    status: "Tamamlandı",
    date: "Ocak 2024",
    location: "İzmir, Konak",
    client: "Özel Müşteri",
    duration: "1.5 ay",
    team: "3 kişi",
    description:
      "Bahçe tasarımı için dekoratif parke ve sınır bordürü uygulaması. Bahçeyi renkli ve yapılı bir mekan haline getirmiştir.",
    objective:
      "Bahçeyi işlevsel alanlarına ayırarak tasarımsal bir uyum oluşturmak. Bitkilendirme alanlarını vurgulamak.",
    results:
      "Bahçe artık dört mevsim farklı bitkilendirmelerle rengini değiştirebilmektedir. Parke ve bordür uygulaması bakım kolaylığı sağlamıştır.",
    images: ["/garden-landscape-stone-border.jpg", "/garden-landscape-design-border-stone.jpg", "/decorative-garden-stone-patio.jpg"],
  },
  4: {
    title: "Yamaç Şev Taşı Yapımı",
    category: "Peyzaj",
    status: "Devam Ediyor",
    date: "Kasım 2024",
    location: "İzmir, Çeşme",
    client: "İnşaat Şirketi B",
    duration: "Beklenen: 2 ay",
    team: "7 kişi",
    description:
      "Eğimli arazi üzerine kurulan şev taşı yapımı. Erosyon kontrolü ve stabilite sağlanması hedeflenmektedir.",
    objective: "Yamaçı stabilize etmek ve erosyonu önlemek. Aynı zamanda doğal görünümü koruyan bir peyzaj oluşturmak.",
    expectedResults:
      "Tamamlandığında, yamaç %100 stabil hale gelecek ve erozyondan tamamen korunacaktır. Doğal bitkilendirme yapılarak çevre ile uyum sağlanacaktır.",
    progress: "75% tamamlandı. Taş temel çalışmaları bitmiş, son detay uygulamaları yapılmaktadır.",
    images: ["/slope-stone-construction-hillside.jpg", "/slope-stone-construction-hillside-project.jpg", "/stone-retaining-wall-hillside.jpg"],
  },
  5: {
    title: "Derzli Taş Duvar Projesi",
    category: "Konut",
    status: "Tamamlandı",
    date: "Aralık 2023",
    location: "İzmir, Buca",
    client: "Özel Müşteri",
    duration: "1 ay",
    team: "4 kişi",
    description:
      "Villasının iç avlusunda oluşturulan derzli taş duvar. Geleneksel tasarım ile modern kullanım birleştirilmiştir.",
    objective:
      "Avluyu özel ve sıcak bir mekan haline getirmek. Taş duvarın dokusunun sakinlik hissi vermesini sağlamak.",
    results:
      "Tamamlanan duvar ailesi tarafından çok sevilmiş ve avlu en sık kullanılan mekan haline gelmiştir. Taş duvarın doğal rengi yazları serin tutuyor.",
    images: ["/stone-wall-with-joints-residential.jpg", "/stone-wall-with-joints-courtyard.jpg", "/natural-stone-wall-texture-detail.jpg"],
  },
  6: {
    title: "Renkli Desen Kaplama",
    category: "Ticari",
    status: "Devam Ediyor",
    date: "Ekim 2024",
    location: "İzmir, Bornova",
    client: "Tasarım Ofisi",
    duration: "Beklenen: 1.5 ay",
    team: "5 kişi",
    description:
      "Ofis binasının girişine renkli ve desenli taş kombinasyonu uygulanmaktadır. Her taşın dikkatle seçilmesi ve yerleştirilmesi yapılıyor.",
    objective: "Kurum kimliğini tasarımda yansıtmak. Renkli taş kullanarak markanın dinamikliğini göstermek.",
    expectedResults:
      "Tamamlandığında giriş bölgesi markanın yaratıcı ve modern yapısını ziyaretçilere anlatacaktır. Yüksek kaliteli detay çalışması danışmanları etkileyecektir.",
    progress: "60% tamamlandı. Desen uygulamaları devam etmektedir.",
    images: ["/colorful-decorative-stone-pattern.jpg", "/colorful-stone-pattern-design-office.jpg", "/decorative-stone-mosaic-entrance.jpg"],
  },
  7: {
    title: "Kompleks Giriş Alanı",
    category: "Konut",
    status: "Tamamlandı",
    date: "Kasım 2023",
    location: "İzmir, Alsancak",
    client: "İnşaat Şirketi",
    duration: "2.5 ay",
    team: "8 kişi",
    description:
      "Çok amaçlı rezidansiyel kompleksin giriş alanı. Yüksek trafikli bölgede dayanıklı ve tasarımsal bir çözüm oluşturulmuştur.",
    objective:
      "Kompleksi ön plana çıkarmak ve ilk izlenimde prestij hissi oluşturmak. Yüksek kullanım oranında da kalitesi korunacak.",
    results:
      "Kompleks giriş alanı şehirde sosyal medyada en çok paylaşılan yer olmuştur. Birim satış fiyatı %20 artmıştır.",
    images: ["/residential-complex-entrance-stone.jpg", "/residential-complex-entrance-stone-facade.jpg", "/apartment-building-entrance-design.jpg"],
  },
  8: {
    title: "Otel Cephe Uygulaması",
    category: "Ticari",
    status: "Tamamlandı",
    date: "Ekim 2023",
    location: "İzmir, Alsancak",
    client: "Otel İşletmesi",
    duration: "4 ay",
    team: "10 kişi",
    description:
      "Beş yıldızlı otel binasının eksiksiz taş kaplama projesi. Dünyadaki otel tasarım standartları uygulanmıştır.",
    objective:
      "Oteli uluslararası seviyede prestijli bir yapı haline getirmek. Konuklarının ilk iz kütüphanesi bırakmak.",
    results: "Otel turist alımı %45 artmıştır. Uluslararası mimarlar tarafından referans alınan bir projedir.",
    images: ["/hotel-facade-stone-cladding.jpg", "/hotel-stone-facade-professional-design.jpg", "/placeholder.svg?height=500&width=800"],
  },
}

export default function ProjectDetail({ params }) {
  const project = projectsData[params.id]

  if (!project) {
    return (
      <main>
        <Navigation />
        <section className="py-32 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Proje Bulunamadı</h1>
            <Link href="/projeler" className="text-primary font-semibold hover:underline">
              Tüm Projelere Dön
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

      {/* Back Button */}
      <section className="pt-32 pb-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold mb-6"
          >
            <ArrowLeft size={20} />
            Tüm Projelere Dön
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg mb-8 h-96 bg-slate-200">
            <img
              src={project.images[0] || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                {project.category}
              </span>
              <span
                className={`px-4 py-2 rounded-full font-semibold text-center ${
                  project.status === "Tamamlandı" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                }`}
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-8">{project.title}</h1>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Calendar size={20} />
                <span className="font-semibold">Tarih</span>
              </div>
              <p className="text-foreground/70">{project.date}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MapPin size={20} />
                <span className="font-semibold">Konum</span>
              </div>
              <p className="text-foreground/70">{project.location}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Users size={20} />
                <span className="font-semibold">Takım</span>
              </div>
              <p className="text-foreground/70">{project.team}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Calendar size={20} />
                <span className="font-semibold">Süre</span>
              </div>
              <p className="text-foreground/70">{project.duration}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-8 rounded-lg border border-border mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Proje Hakkında</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">{project.description}</p>

            <h3 className="text-xl font-bold text-primary mb-3">Proje Amacı</h3>
            <p className="text-foreground/80 leading-relaxed mb-8">{project.objective}</p>

            {project.status === "Tamamlandı" && (
              <>
                <h3 className="text-xl font-bold text-primary mb-3">Sonuçlar</h3>
                <p className="text-foreground/80 leading-relaxed">{project.results}</p>
              </>
            )}

            {project.status === "Devam Ediyor" && (
              <>
                <h3 className="text-xl font-bold text-primary mb-3">Beklenen Sonuçlar</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">{project.expectedResults}</p>
                <h3 className="text-xl font-bold text-primary mb-3">İlerleme</h3>
                <div className="mb-2">
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <p className="text-foreground/80">{project.progress}</p>
              </>
            )}
          </div>

          {/* Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">Proje Görselleri</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden bg-slate-200 h-64">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Görsel ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Benzer Bir Proje Yapmak Ister Misiniz?</h2>
            <p className="mb-6 opacity-90">Uzman ekibimize detaylar hakkında bilgi verin.</p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              İletişime Geç
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Diğer Projelerimiz</h2>
          <div className="text-center">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Tüm Projeleri Gör
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
