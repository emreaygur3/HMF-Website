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
app/                        Sayfalar (App Router)
  hizmetler/[slug]          Hizmet detay sayfaları (statik üretilir)
  projeler/[slug]           Proje detay sayfaları
  galeri/                   Filtreli galeri (tüm hizmet ve proje fotoğrafları)
  hizmet-bolgeleri/         Hizmet verilen bölgeler (yerel SEO)
  iletisim/actions.ts       İletişim formu sunucu aksiyonu (Gmail SMTP)
  sitemap.ts, robots.ts     SEO dosyaları
components/
  ui/                       Temel yapı taşları: Section, Container, SectionHeading, PageHero,
                            CtaSection, ButtonLink/ArrowLink, StatGrid, FittedImage
  layout/                   Menü, alt bilgi, sabit WhatsApp butonu
  brand/                    Logo ve sosyal medya simgeleri
  services/ projects/       Hizmet kartı; proje kartı, rozetleri ve filtreli liste
  gallery/ contact/         Galeri görüntüleyici; iletişim formu
  seo/                      JSON-LD (yapılandırılmış veri)
lib/
  site.ts                   İletişim bilgileri, adres, sosyal medya, istatistikler
  services.ts               Hizmet içerikleri (tek kaynak)
  projects.ts               Proje içerikleri (tek kaynak)
  gallery.ts                Galeri listesi (hizmet ve proje fotoğraflarından otomatik)
  regions.ts                Hizmet bölgeleri
  seo.ts                    Open Graph ve Schema.org yardımcıları
public/
  images/hizmetler/<slug>/  Hizmet fotoğrafları (klasör adı hizmetin adresiyle aynı)
  images/projeler/<slug>/   Proje fotoğrafları
  brand/                    Logo dosyaları (SVG + PNG)
```

## Tasarım kuralları

- Nötr renkler Tailwind `stone` ailesinden (başlık `stone-900`, metin `stone-600`, açık zemin `stone-50`, koyu zemin `stone-900`); vurgu rengi `brand` (bronz).
- Sayfa bölümleri `Section`, başlıklar `SectionHeading`, butonlar `ButtonLink` ile yazılır; tek tek sınıf yazmak yerine bu bileşenler kullanılır.
- Yeni fotoğraf eklerken ilgili `public/images/...` klasörüne koyup `lib/services.ts` veya `lib/projects.ts` içine yolunu eklemek yeterlidir; galeri ve kartlar otomatik güncellenir.

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
