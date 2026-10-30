import { Boxes, Building2, Grid3x3, Layers, Leaf, Mountain, Palette, Route, Sparkles, type LucideIcon } from "lucide-react"

export type Service = {
  slug: string
  title: string
  description: string
  fullDescription: string
  icon: LucideIcon
  /** Kartlarda kullanılan kapak görseli */
  image: string
  /** Detay sayfasındaki galeri */
  images: string[]
  /** Kırpılınca önemli kısmın görünmesi için görsel bazında CSS object-position (ör. "center 40%") */
  imagePositions?: Record<string, string>
  details: string[]
  benefits: { title: string; description: string }[]
  process: string[]
}

export const services: Service[] = [
  {
    slug: "derzli-ve-derzsiz-tas-duvar",
    title: "Derzli ve Derzsiz Taş Duvar",
    description: "Profesyonel taş duvar uygulamaları",
    fullDescription:
      "Doğal taşı kullanarak yapılan duvarlar, binaların yapısını güçlendirirken aynı zamanda estetik bir görünüm sağlar. Derzli (harçlı) ve derzsiz (kuru örgü) uygulamalar, projenizin ihtiyacına göre seçilebilir.",
    icon: Building2,
    image: "/derzli-tas-duvar-saha-yuksek-duvar.jpg",
    images: [
      "/stone-wall-with-joints-residential.jpg",
      "/derzli-tas-duvar-saha-yuksek-duvar.jpg",
      "/natural-stone-wall-texture-detail.jpg",
      "/derzli-tas-duvar-saha-teras-duvarlari.jpg",
    ],
    details: [
      "Doğal taş kullanarak dayanıklı duvar yapıları",
      "Derzli ve derzsiz uygulama seçenekleri",
      "Yapının estetiğini artıran tasarımlar",
      "Uzun ömürlü ve bakım kolaylığı",
      "UV ve iklim koşullarına dayanıklı",
      "Ses yalıtımı ve ısı koruması sağlar",
    ],
    benefits: [
      { title: "Dayanıklılık", description: "Nesiller boyu dayanabilen doğal taş malzeme" },
      { title: "Estetik", description: "Doğal ve şık görünüm sağlar" },
      { title: "Bakım Kolaylığı", description: "Minimal bakım gerektiren uzun ömürlü çözüm" },
      { title: "Çevre Dostu", description: "%100 doğal ve geri dönüştürülebilir malzeme" },
    ],
    process: [
      "Zeminin hazırlanması ve temel atılması",
      "Taş seçimi ve ölçüye göre kesim",
      "Taşların dikkatli bir şekilde yerleştirilmesi",
      "Derz işlemleri (gerekli durumlarda)",
      "Son kontroller ve teslim",
    ],
  },
  {
    slug: "sev-tasi-yapimi",
    title: "Şev Taşı Yapımı",
    description: "Eğimli yüzeyler için taş kaplama",
    fullDescription:
      "Yamaçlar ve eğimli arazilerde yapılan taş işçiliği, erozyonu önlerken aynı zamanda doğal bir görünüm sağlar. Stabilite ve estetik birlikte sunulur.",
    icon: Mountain,
    image: "/sev-tasi-saha-orman-yamaci.jpg",
    images: [
      "/slope-stone-construction-hillside.jpg",
      "/sev-tasi-saha-blok-yerlesimi.jpg",
      "/sev-tasi-saha-orman-yamaci.jpg",
      "/sev-tasi-saha-yol-kenari.jpg",
    ],
    details: [
      "Eğimli arazi ve yamaçlara uygun çözümler",
      "Erozyon kontrolü ve stabilite sağlama",
      "Doğal görünüm ve peyzaj uyumu",
      "Uzun süreli dayanıklılık",
      "Drenaj sistemleriyle entegrasyon",
      "Su akışını kontrol eden tasarımlar",
    ],
    benefits: [
      { title: "Erozyonu Engeller", description: "Eğimli yüzeylerde toprak kaybını en aza indirir" },
      { title: "Yapısal Stabilite", description: "Yamaçların kaymasını ve çökmesini önler" },
      { title: "Peyzaj Uyumu", description: "Doğal ortama uyumlu tasarımlar" },
      { title: "Su Yönetimi", description: "Su akışını kontrol altında tutar" },
    ],
    process: [
      "Arazi analizi ve tasarım planlaması",
      "Temel hazırlığı ve drenaj kurulumu",
      "Uygun ve kaliteli taş seçimi",
      "Kademeli taş yerleştirme",
      "Son kontroller ve bitkilendirme",
    ],
  },
  {
    slug: "kayrak-tas-kaplama",
    title: "Kayrak Taş Kaplama",
    description: "Doğal kayrak taş ile kaplamalar",
    fullDescription:
      "Kayrak taş, doğasından gelen şık renk ve dokusunun yanı sıra dayanıklılığı ile ön plandadır. İç ve dış mekanlar için kusursuz kaplamalar sunar.",
    icon: Layers,
    image: "/kayrak-tas-saha-duvar-kaplama.jpg",
    images: [
      "/kayrak-tas-saha-duvar-kaplama.jpg",
      "/kayrak-tas-saha-zemin-uygulama.jpg",
      "/kayrak-tas-saha-merdiven.jpg",
      "/kayrak-tas-saha-kulube-kaplama.jpg",
    ],
    imagePositions: {
      // Çalışan usta kadrajda tam görünsün
      "/kayrak-tas-saha-kulube-kaplama.jpg": "center 40%",
      "/kayrak-tas-saha-duvar-kaplama.jpg": "center 55%",
    },
    details: [
      "Doğal kayrak taşının estetik görünümü",
      "Cephe ve iç mekan uygulamaları",
      "Göz alıcı tasarımlar ve desenler",
      "Yüksek dayanıklılık ve sabit yerleşim",
      "Modern ve klasik mimaride kullanım",
      "Doğal kaynaktan temin edilen malzeme",
    ],
    benefits: [
      { title: "Doğal Güzellik", description: "Benzersiz renk ve desen varyasyonları" },
      { title: "Dayanıklılık", description: "Uzun yıllar formunu koruyan kaliteli malzeme" },
      { title: "Çok Yönlü Kullanım", description: "Cephe, iç mekan, zemin ve duvar uygulamaları" },
      { title: "Prestij", description: "Yüksek kalite ve seçkin bir görünüm sunar" },
    ],
    process: [
      "Kayrak taş seçimi ve kalite kontrolü",
      "Zemin hazırlığı ve yapıştırıcı uygulaması",
      "Taşların dikkatli yerleştirilmesi",
      "Derz işlemi ve son rötuşlar",
      "Koruyucu kaplama uygulaması",
    ],
  },
  {
    slug: "granurlu-taslar",
    title: "Granürlü Taşlar",
    description: "Dekoratif granürlü taş uygulamaları",
    fullDescription:
      "Granürlü taşlar, çeşitli renk ve dokularıyla iç ve dış mekanları güzelleştiren dekoratif çözümler sunar. Modern ve klasik tasarımlara uyum sağlar.",
    icon: Sparkles,
    image: "/granurlu-tas-saha-meydan.jpg",
    images: [
      "/granurlu-tas-saha-ekip.jpg",
      "/granurlu-tas-saha-desenli-kaldirim.jpg",
      "/granurlu-tas-saha-kaldirim.jpg",
      "/granurlu-tas-saha-meydan.jpg",
    ],
    imagePositions: {
      // Ekip ve arkadaki bina kadrajda kalsın
      "/granurlu-tas-saha-ekip.jpg": "center 25%",
      "/granurlu-tas-saha-meydan.jpg": "center 30%",
    },
    details: [
      "Çeşitli renk ve dokuda granürlü taşlar",
      "İç ve dış mekan dekorasyonu",
      "Modern ve klasik tasarımlara uyum",
      "Kolay temizlenme ve bakım",
      "Birçok renk kombinasyonu seçeneği",
      "Kaymaz yüzey özellikleri",
    ],
    benefits: [
      { title: "Renkli Seçenekler", description: "Geniş renk ve desen kombinasyonları" },
      { title: "Kolay Bakım", description: "Basit temizleme yöntemleriyle hijyenik kalır" },
      { title: "Güvenlik", description: "Kaymaz yüzey uygulamaları" },
      { title: "Esneklik", description: "Her tür iç ve dış mekan tasarımına uyum sağlar" },
    ],
    process: [
      "Müşteri istekleri doğrultusunda renk seçimi",
      "Yüzey hazırlığı ve astar uygulaması",
      "Granürlü taş uygulaması",
      "Parlak veya mat bitişin seçilmesi",
      "Son kalite kontrol ve teslim",
    ],
  },
  {
    slug: "parke-ve-bordur",
    title: "Parke ve Bordür",
    description: "Peyzaj tasarımı ve bordür işleri",
    fullDescription:
      "Bahçe ve dış alanlar için tasarlanan parke ve bordür uygulamaları, mekanı işlevsel ve güzel hale getirir. Peyzaj tasarımında tamamen kişiye özel çözümler sunulur.",
    icon: Leaf,
    image: "/parke-bordur-saha-villa-yolu.jpg",
    images: [
      "/parke-bordur-saha-bordur-adasi.jpg",
      "/parke-bordur-saha-kilitli-parke-yol.jpg",
      "/parke-bordur-saha-ekip-forklift.jpg",
      "/parke-bordur-saha-villa-yolu.jpg",
    ],
    imagePositions: {
      // Arkadaki çalışanlar kadrajda kalsın
      "/parke-bordur-saha-bordur-adasi.jpg": "center 45%",
    },
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
      { title: "İşlevsellik", description: "Yürüme alanlarını ve drenajı düzenler" },
      { title: "Tasarım Esnekliği", description: "Tamamen kişiye özel tasarımlar" },
    ],
    process: [
      "Bahçe ölçülerinin alınması ve tasarım planlaması",
      "Zemin hazırlığı ve drenaj kurulumu",
      "Parke taşlarının yerleştirilmesi",
      "Bordür çekimi ve bitkilendirme",
      "Bakım talimatlarının verilmesi",
    ],
  },
  {
    slug: "renkli-ve-desenli-tas",
    title: "Renkli ve Desenli Taş",
    description: "Özel tasarım ve desen uygulamaları",
    fullDescription:
      "Yaratıcı tasarımlar ve renkli taş kombinasyonları kullanılarak tamamen özel ve benzersiz mekanlar yaratılır. Sanat ve işlevsellik bir araya gelir.",
    icon: Palette,
    image: "/renkli-desenli-tas-saha-mozaik-avlu.jpg",
    images: [
      "/renkli-desenli-tas-saha-kusbakisi.jpg",
      "/renkli-desenli-tas-saha-tugla-bordur.jpg",
      "/renkli-desenli-tas-saha-mozaik-avlu.jpg",
      "/renkli-desenli-tas-saha-desenli-yol.jpg",
    ],
    imagePositions: {
      // Çit yerine zemin deseni öne çıksın
      "/renkli-desenli-tas-saha-mozaik-avlu.jpg": "center 65%",
    },
    details: [
      "Özel tasarım ve desen uygulamaları",
      "Renkli taş kombinasyonları",
      "Müşteri talebine göre özel tasarımlar",
      "Yaratıcı ve benzersiz çözümler",
      "Sade desenlerden sanatsal mozaiklere kadar",
      "Geniş renk paletleri",
    ],
    benefits: [
      { title: "Benzersizlik", description: "Size özel, tekrarı olmayan tasarımlar" },
      { title: "Kişiselleştirme", description: "Tamamen müşteri isteklerine göre özel tasarımlar" },
      { title: "Sanatsal Değer", description: "Mimarinin sanat yönünü öne çıkarır" },
      { title: "Marka İmajı", description: "İşletmelere güçlü ve ayırt edici bir imaj kazandırır" },
    ],
    process: [
      "İstek ve vizyon görüşmesi",
      "Konsept tasarım ve modelleme",
      "Müşteri onayı ve revizyon",
      "Taş seçimi ve kesim işleri",
      "Uygulama ve son rötuşlar",
    ],
  },
  {
    slug: "asfalt-ve-yol-yapimi",
    title: "Asfalt ve Yol Yapımı",
    description: "Asfalt serimi, yol ve kaldırım düzenlemesi",
    fullDescription:
      "Site içi yollardan cadde ve bulvarlara kadar asfalt serimi, yol altyapısı ve çevre düzenlemesini tek elden yürütüyoruz. Asfalt, kaldırım, bordür ve peyzaj işlerini birlikte planlayarak bütünlüklü ve uzun ömürlü yollar teslim ediyoruz.",
    icon: Route,
    image: "/asfalt-yol-saha-agacli-bulvar.jpg",
    images: [
      "/asfalt-yol-saha-gun-batimi.jpg",
      "/asfalt-yol-saha-agacli-bulvar.jpg",
      "/asfalt-yol-saha-kavsak.jpg",
      "/asfalt-yol-saha-cadde-kaldirim.jpg",
    ],
    imagePositions: {
      // Gökyüzü yerine yol ve kaldırım öne çıksın
      "/asfalt-yol-saha-gun-batimi.jpg": "center 70%",
      "/asfalt-yol-saha-agacli-bulvar.jpg": "center 75%",
      "/asfalt-yol-saha-kavsak.jpg": "center 75%",
      "/asfalt-yol-saha-cadde-kaldirim.jpg": "center 70%",
    },
    details: [
      "Sıcak asfalt serimi ve silindirle sıkıştırma",
      "Yol altyapısı, kazı ve stabilize dolgu",
      "Site içi yollar, otopark ve cadde uygulamaları",
      "Kaldırım, bordür ve refüj düzenlemesi",
      "Yağmur suyu drenajı ve rögar kotlandırması",
      "Peyzaj ve ağaçlandırma ile birlikte çevre düzenlemesi",
    ],
    benefits: [
      { title: "Tek Elden Çözüm", description: "Asfalt, kaldırım, bordür ve peyzaj aynı ekip tarafından yapılır" },
      { title: "Dayanıklılık", description: "Doğru altyapı ve sıkıştırma ile uzun ömürlü yol yüzeyi" },
      { title: "Düzgün Su Akışı", description: "Eğim ve drenaj planlamasıyla su birikmesi önlenir" },
      { title: "Planlı Teslim", description: "İş programına uygun, kontrollü ve zamanında uygulama" },
    ],
    process: [
      "Keşif, ölçüm ve kot planlaması",
      "Kazı, altyapı ve stabilize dolgunun serilmesi",
      "Bordür ve kaldırım hatlarının oluşturulması",
      "Asfalt serimi ve silindirle sıkıştırma",
      "Çevre düzenlemesi, son kontroller ve teslim",
    ],
  },
  {
    slug: "kup-tasi-ve-begonit",
    title: "Küp Taşı ve Begonit",
    description: "Küp taşı döşeme ve begonit plak uygulamaları",
    fullDescription:
      "Granit ve bazalt küp taşı ile begonit plaklar; meydan, kaldırım, avlu, site içi yol ve bahçe yürüyüş yollarında yıllarca formunu koruyan zeminler oluşturur. Kum veya harçlı yatak üzerine düz, yelpaze ve kemer desenlerinde döşeme yapıyoruz.",
    icon: Boxes,
    // GEÇİCİ görseller: hizmete ait saha fotoğrafları gelince değiştirilecek
    image: "/granurlu-tas-saha-kaldirim.jpg",
    images: ["/granurlu-tas-saha-kaldirim.jpg", "/granurlu-tas-saha-desenli-kaldirim.jpg"],
    imagePositions: {
      "/granurlu-tas-saha-kaldirim.jpg": "center 60%",
    },
    details: [
      "Granit ve bazalt küp taşı döşeme",
      "Yıkanmış agrega yüzeyli begonit plak uygulaması",
      "Düz, yelpaze ve kemer döşeme desenleri",
      "Meydan, kaldırım, avlu ve otopark alanları",
      "Kum veya harçlı yatak üzerine sağlam oturtma",
      "Bordür ve kenar bitişleriyle birlikte uygulama",
    ],
    benefits: [
      { title: "Yüksek Dayanım", description: "Araç ve yaya trafiğine yıllarca dayanan zemin" },
      { title: "Kaymaz Yüzey", description: "Pürüzlü doku yağmurda bile güvenli yürüyüş sağlar" },
      { title: "Kolay Onarım", description: "Tek tek sökülüp yeniden döşenebilir, yama izi kalmaz" },
      { title: "Doğal Görünüm", description: "Tarihi dokuya ve modern peyzaja aynı ölçüde uyum sağlar" },
    ],
    process: [
      "Keşif, ölçüm ve desen seçimi",
      "Kazı, stabilize dolgu ve sıkıştırma",
      "Bordür ve kenar hatlarının oluşturulması",
      "Küp taşı veya begonit plakların döşenmesi",
      "Derz dolgusu, son sıkıştırma ve teslim",
    ],
  },
  {
    slug: "karo-uygulamasi",
    title: "Karo Uygulaması",
    description: "Kaldırım, teras ve bahçe için karo döşeme",
    fullDescription:
      "Beton ve doğal taş karolarla kaldırım, teras, bahçe, havuz çevresi ve site içi yürüyüş alanlarında düzgün ve bakımı kolay zeminler oluşturuyoruz. Farklı ebat, renk ve yüzey seçenekleriyle mekanınıza uygun döşeme planını birlikte belirliyoruz.",
    icon: Grid3x3,
    // GEÇİCİ görseller: hizmete ait saha fotoğrafları gelince değiştirilecek
    image: "/granurlu-tas-saha-desenli-kaldirim.jpg",
    images: ["/granurlu-tas-saha-desenli-kaldirim.jpg", "/granurlu-tas-saha-meydan.jpg"],
    imagePositions: {
      "/granurlu-tas-saha-meydan.jpg": "center 30%",
    },
    details: [
      "Beton ve doğal taş karo döşeme",
      "Kaldırım, teras, balkon ve bahçe uygulamaları",
      "Havuz çevresi için kaymaz yüzeyli karolar",
      "Farklı ebat, renk ve desen seçenekleri",
      "Eğim ve drenaja uygun zemin hazırlığı",
      "Harçlı veya yapıştırıcılı döşeme",
    ],
    benefits: [
      { title: "Düzgün Yüzey", description: "Ölçülü ebatlarla düz ve derli toplu bir zemin" },
      { title: "Kolay Temizlik", description: "Yıkanabilir, bakımı zahmetsiz yüzey" },
      { title: "Uygun Maliyet", description: "Geniş alanlarda ekonomik ve hızlı uygulama" },
      { title: "Tasarım Seçenekleri", description: "Renk ve desen kombinasyonlarıyla kişiye özel zemin" },
    ],
    process: [
      "Ölçüm, karo seçimi ve döşeme planı",
      "Zeminin tesviyesi ve eğim ayarı",
      "Şap veya harç yatağının hazırlanması",
      "Karoların hizalı şekilde döşenmesi",
      "Derz dolgusu, temizlik ve teslim",
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
