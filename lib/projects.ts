export type ProjectStatus = "Tamamlandı" | "Devam Ediyor"

type ProjectBase = {
  slug: string
  title: string
  category: "Konut" | "Ticari" | "Peyzaj"
  /** YYYY-MM biçiminde; bilinmiyorsa boş bırakılır ve sayfada gösterilmez */
  date?: string
  location: string
  /** Bilinmiyorsa boş bırakılır ve sayfada gösterilmez */
  duration?: string
  team?: string
  summary: string
  description: string
  objective: string
  images: string[]
  /** Kırpılınca önemli kısmın görünmesi için görsel bazında CSS object-position (ör. "center 25%") */
  imagePositions?: Record<string, string>
}

export type Project =
  | (ProjectBase & { status: "Tamamlandı"; results: string })
  | (ProjectBase & { status: "Devam Ediyor"; expectedResults: string; progress: number; progressNote: string })

export const projects: Project[] = [
  {
    slug: "karavan-park-zemin-ve-peyzaj-duzenlemesi",
    title: "Karavan Park Zemin ve Peyzaj Düzenlemesi",
    category: "Ticari",
    status: "Tamamlandı",
    // TAHMİNİ değerler; gerçek bilgilerle doğrulanmalı
    date: "2025-05",
    location: "İzmir, Aliağa",
    duration: "2,5 ay",
    team: "8 kişi",
    summary: "Deniz kenarındaki karavan parkı için parsel, parke ve bordür uygulaması",
    description:
      "Deniz kenarında konumlanan karavan parkının tüm zemin altyapısı oluşturuldu. Alan bordürlerle parsellere ayrıldı; karavanların duracağı bölümler ve aradaki yürüyüş yolları kilitli parke taşıyla kaplandı, parsel aralarında peyzaj için toprak alanlar bırakıldı.",
    objective:
      "Karavanların rahatça yerleşip manevra yapabileceği düzenli parseller oluşturmak; yağmur sonrası çamurlaşmayan, dayanıklı ve kolay bakım yapılabilen bir zemin elde etmek.",
    results:
      "Geniş alan düzenli parsellere ayrılarak her karavan için hazır bir park yeri oluşturuldu. Kilitli parke zemin ve bordür hatları, yeşil alanlarla birlikte parka derli toplu bir görünüm kazandırdı.",
    images: ["/images/projeler/karavan-park-zemin-ve-peyzaj-duzenlemesi/deniz.jpg", "/images/projeler/karavan-park-zemin-ve-peyzaj-duzenlemesi/insaat.jpg"],
    imagePositions: {
      // Kartta deniz ufku ve parseller birlikte görünsün
      "/images/projeler/karavan-park-zemin-ve-peyzaj-duzenlemesi/deniz.jpg": "center 45%",
    },
  },
  {
    slug: "tripleks-restorasyon-ve-cephe-yenileme",
    title: "Tripleks Restorasyon ve Cephe Yenileme",
    category: "Konut",
    status: "Tamamlandı",
    // TAHMİNİ değerler; gerçek bilgilerle doğrulanmalı
    date: "2025-08",
    location: "İzmir, Menemen",
    duration: "3 ay",
    team: "5 kişi",
    summary: "Tripleks konutun dış cephesinin baştan sona yenilenmesi",
    description:
      "Düz sıva cepheli bir tripleks konut, kapsamlı bir restorasyon ve düzenleme ile modern bir görünüme kavuşturuldu. Cephede ahşap görünümlü, antrasit ve açık gri paneller bir arada kullanıldı; geniş camlı yüzeyler ve bahçe duvarı düzenlemesiyle yapı yeniden tasarlandı.",
    objective:
      "Sade ve eskimiş görünen cepheyi çağdaş bir mimari dile taşımak, yapının karakterini güçlendirirken dış etkenlere dayanıklı ve bakımı kolay bir cephe elde etmek.",
    results:
      "Tripleks, farklı malzeme ve renklerin dengeli kullanımıyla modern ve bütünlüklü bir cepheye kavuştu. Önceki ve sonraki hali, restorasyonun yapıya kattığı değeri açıkça gösteriyor.",
    images: ["/images/projeler/tripleks-restorasyon-ve-cephe-yenileme/sonrasi.jpg", "/images/projeler/tripleks-restorasyon-ve-cephe-yenileme/oncesi.jpg"],
    imagePositions: {
      // Çatı ve üst kattaki ahşap kaplama kadrajda kalsın
      "/images/projeler/tripleks-restorasyon-ve-cephe-yenileme/sonrasi.jpg": "center 20%",
      "/images/projeler/tripleks-restorasyon-ve-cephe-yenileme/oncesi.jpg": "center 35%",
    },
  },
  {
    slug: "kafe-bahce-duzenlemesi",
    title: "Kafe Bahçe Düzenlemesi",
    category: "Ticari",
    status: "Tamamlandı",
    // TAHMİNİ değerler; gerçek bilgilerle doğrulanmalı
    date: "2025-06",
    location: "İzmir, Aliağa",
    duration: "2 ay",
    team: "6 kişi",
    summary: "Açık oturma alanı için zemin, bordür ve peyzaj uygulaması",
    description:
      "Bir kafenin açık oturma alanı baştan sona yeniden düzenlendi. Duvar örme ve zemin hazırlığından başlayarak tüm alan desenli parke taşıyla kaplandı; ağaç çevreleri tuğla bordür ve beyaz dekoratif çakılla çerçevelendi.",
    objective:
      "Mevcut ağaçları koruyarak geniş, düzgün ve kolay temizlenen bir oturma alanı oluşturmak; gündüz ve akşam saatlerinde misafirleri ağırlayacak sıcak bir bahçe atmosferi yaratmak.",
    results:
      "Kafe bahçesi bütünlüklü bir zemin ve peyzaj düzenine kavuştu. Desenli parke zemin, tuğla bordürlü ağaç adaları ve aydınlatmayla birlikte alan, özellikle akşam saatlerinde dikkat çeken bir mekan haline geldi.",
    images: ["/images/projeler/kafe-bahce-duzenlemesi/gece.jpg", "/images/projeler/kafe-bahce-duzenlemesi/insaat.jpg", "/images/projeler/kafe-bahce-duzenlemesi/oturma-alani.jpg"],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

const monthNames = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
]

/** "2024-03" → "Mart 2024" */
export function formatProjectDate(date: string) {
  const [year, month] = date.split("-").map(Number)
  return `${monthNames[month - 1]} ${year}`
}
