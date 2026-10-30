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
  iletisim/actions.ts   İletişim formu sunucu aksiyonu (Gmail SMTP)
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
| `GMAIL_APP_PASSWORD` | Gmail uygulama şifresi (Google Hesabı > Güvenlik > Uygulama şifreleri). Tanımlı değilse form, kullanıcıya WhatsApp ile gönderme seçeneği sunar. |
| `GMAIL_USER` | (İsteğe bağlı) Gönderen Gmail adresi; varsayılan `lib/site.ts` içindeki e-posta. |
| `CONTACT_TO_EMAIL` | (İsteğe bağlı) Mesajların gideceği adres; varsayılan gönderen adres. |

## Sosyal medya

`lib/site.ts` içindeki `social.facebook` ve `social.instagram` alanlarına gerçek hesap adresleri girildiğinde ikonlar sitede otomatik görünür ve yapılandırılmış veriye (`sameAs`) eklenir.

## Logo ve marka dosyaları

`public/brand/` klasöründe tamamen vektör (yazılar çizgiye çevrilmiş) logo dosyaları bulunur; her birinin yüksek çözünürlüklü PNG kopyası da vardır:

| Dosya | Kullanım |
| --- | --- |
| `hmf-logo-yatay.svg` / `-beyaz.svg` | Açık / koyu zeminde yatay logo (menü, alt bilgi, antetli kağıt) |
| `hmf-logo-dikey.svg` / `-beyaz.svg` | Dikey logo (kartvizit, tabela, sosyal medya kapakları) |
| `hmf-sembol.svg` / `-beyaz.svg` | Yalnızca kemer sembolü |
| `hmf-ikon.svg` | Koyu zeminli kare uygulama/profil ikonu |

Marka renkleri: koyu taş `#1C1917` / `#292524`, bronz `#8A4B26`, açık bronz `#D9A273`, krem `#F6EDE5`. Logo yazı tipi: Cinzel Bold.
