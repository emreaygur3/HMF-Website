# HMF Desen Yapı Web Sitesi

İzmir Menemen merkezli HMF Desen Yapı'nın kurumsal web sitesi. Next.js 16 (App Router), React 19, Tailwind CSS 4 ve TypeScript ile geliştirilmiştir; Vercel üzerinde yayınlanır.

## Geliştirme

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # Production build (tip kontrolü dahil)
```

## Klasör yapısı

```
app/                    Sayfalar (App Router)
  hizmetler/[slug]      Hizmet detay sayfaları (statik üretilir)
  hizmet-bolgeleri/     Yerel SEO bölge sayfaları (Aliağa, Menemen, Foça, Bergama, İzmir)
  projeler/[slug]       Proje detay sayfaları
  iletisim/actions.ts   İletişim formu sunucu aksiyonu (Resend)
  sitemap.ts, robots.ts SEO dosyaları
components/             Paylaşılan bileşenler (menü, footer, form, proje filtresi)
lib/
  site.ts               İletişim bilgileri, adres, sosyal medya, istatistikler
  services.ts           Hizmet içerikleri (tek kaynak)
  projects.ts           Proje içerikleri (tek kaynak)
  regions.ts            Hizmet bölgeleri
  seo.ts                Yapılandırılmış veri (Schema.org) yardımcıları
public/                 Görseller
```

İçerik değişiklikleri için ilgili `lib/*.ts` dosyasını düzenlemek yeterlidir; menü, kartlar, form seçenekleri ve sitemap otomatik güncellenir.

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın ve Vercel > Project > Settings > Environment Variables bölümüne de ekleyin.

| Değişken | Açıklama |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Kendi alan adınız (ör. `https://hmfdesenyapi.com`). Boşsa Vercel adresi kullanılır. |
| `RESEND_API_KEY` | [Resend](https://resend.com) API anahtarı. Tanımlı değilse form, kullanıcıyı telefon/WhatsApp'a yönlendiren bir uyarı gösterir. |
| `CONTACT_TO_EMAIL` | Form mesajlarının gideceği adres. |
| `CONTACT_FROM_EMAIL` | Resend'de doğrulanmış gönderen adresi. |

## Sosyal medya

`lib/site.ts` içindeki `social.facebook` ve `social.instagram` alanlarına gerçek hesap adresleri girildiğinde ikonlar sitede otomatik görünür ve yapılandırılmış veriye (`sameAs`) eklenir.
