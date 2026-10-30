// Site genelinde kullanılan iletişim ve marka bilgileri tek yerden yönetilir.

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const siteConfig = {
  name: "HMF Desen Yapı",
  shortName: "HMF",
  foundedYear: 1998,
  description:
    "1998'den beri Aliağa, Menemen ve tüm İzmir'de taş duvar, şev taşı, kayrak, küp taşı, karo, parke, bordür ve asfalt uygulamaları. Keşif ve teklif için ulaşın.",
  // Kendi alan adınız bağlandığında NEXT_PUBLIC_SITE_URL ortam değişkenini ayarlayın.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (productionHost ? `https://${productionHost}` : "https://hmf-website.vercel.app"),
  email: "emreaygur13@gmail.com",
  // İlk numara birincil numaradır (yapılandırılmış veri ve WhatsApp bunu kullanır).
  phones: [
    { display: "+90 (501) 186 3526", tel: "+905011863526" },
    { display: "+90 (538) 227 0433", tel: "+905382270433" },
  ],
  whatsapp: "905011863526",
  address: {
    street: "İsmet İnönü Mah. 80 Yıl Cad.",
    district: "Menemen",
    city: "İzmir",
    country: "TR",
  },
  geo: { latitude: 38.6425, longitude: 27.17 },
  hours: [
    { label: "Pazartesi - Cuma", value: "09:00 - 18:00" },
    { label: "Cumartesi", value: "10:00 - 16:00" },
    { label: "Pazar", value: "Kapalı" },
  ],
  // Gerçek hesap adresleri girildiğinde ikonlar otomatik olarak görünür.
  social: {
    facebook: "",
    instagram: "",
  },
} as const

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`

export const mapQuery = `${siteConfig.address.street} ${siteConfig.address.district} ${siteConfig.address.city}`

export const stats = {
  projects: "1000+",
  years: "25+",
  cities: "50+",
  satisfaction: "%98",
}
