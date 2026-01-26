# HMF Desen Yapı - Kurumsal Website

🏗️ 1998'den beri İzmir ve Türkiye genelinde kaliteli doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleri sunan HMF Desen Yapı'nın modern ve SEO-optimized kurumsal web sitesi.

## 🚀 Teknolojiler

- **Framework**: [Next.js 16](https://nextjs.org/) - React 19 ile App Router
- **Dil**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: Vercel (önerilen)

## ✨ Özellikler

- 🎨 **Modern UI/UX**: Responsive ve kullanıcı dostu arayüz
- ✨ **Smooth Animations**: Scroll-based fade-in ve slide-up animasyonları
- 🔍 **SEO Optimized**: Sitemap, robots.txt, structured data (JSON-LD)
- ⚡ **Performance**: Image optimization, lazy loading, code splitting
- 📱 **Mobile-First**: Tüm cihazlarda mükemmel görünüm
- 🌐 **Multi-Page**: Ana sayfa, Hakkımızda, Hizmetler, Projeler, İletişim
- 🖼️ **Dynamic Content**: Hizmet ve proje detay sayfaları
- 📊 **Analytics Ready**: Google Analytics entegrasyonu
- ♿ **Accessible**: WCAG standartlarına uygun, ARIA labels
- 🎯 **Loading States**: Skeleton loaders ile smooth UX
- ❌ **Error Handling**: Custom 404 ve error pages
- 🎬 **Intersection Observer**: Akıllı scroll animasyonları

## 📋 Ön Koşullar

- Node.js 18.x veya üzeri
- npm, yarn veya pnpm

## 🛠️ Kurulum

1. **Projeyi klonlayın**:
```bash
git clone https://github.com/emreaygur3/HMF-Website.git
cd HMF-Website
```

2. **Bağımlılıkları yükleyin**:
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

3. **Environment variables ayarlayın**:
```bash
# .env.example dosyasını kopyalayın
cp .env.example .env.local

# .env.local dosyasını düzenleyin ve gerekli değerleri girin
```

4. **Development server'ı başlatın**:
```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

```
HMF-Website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Ana sayfa
│   ├── loading.tsx          # Global loading state
│   ├── error.tsx            # Global error handler
│   ├── not-found.tsx        # 404 sayfası
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── manifest.ts          # PWA manifest
│   ├── hakkimizda/          # Hakkımızda sayfası
│   ├── hizmetler/           # Hizmetler & detay sayfaları
│   ├── projeler/            # Projeler & detay sayfaları
│   └── iletisim/            # İletişim sayfası
├── components/              # React components
│   ├── navigation.tsx       # Header navigation
│   ├── footer.tsx           # Footer
│   ├── service-image.tsx    # Optimized image component
│   └── analytics.tsx        # Google Analytics
├── public/                  # Static assets
│   ├── robots.txt          # SEO robots file
│   └── *.jpg               # Images
├── .env.example            # Environment variables template
└── next.config.mjs         # Next.js configuration
```

## 🎨 Sayfalar

| Sayfa | Route | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `/` | Hero section, hizmetler özeti, istatistikler |
| Hakkımızda | `/hakkimizda` | Şirket tarihçesi, değerler, timeline |
| Hizmetler | `/hizmetler` | Tüm hizmetlerin listesi |
| Hizmet Detay | `/hizmetler/[slug]` | Hizmet detay sayfası |
| Projeler | `/projeler` | Tamamlanan projeler, filtreleme |
| Proje Detay | `/projeler/[id]` | Proje detay sayfası |
| İletişim | `/iletisim` | İletişim formu, bilgiler, harita |

## 🔧 Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Production server (build sonrası)
npm run start

# Lint kontrol
npm run lint
```

## 🌐 Deployment

### Vercel (Önerilen)

1. Vercel hesabınıza giriş yapın
2. Projeyi import edin
3. Environment variables ekleyin
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/emreaygur3/HMF-Website)

### Diğer Platformlar

Herhangi bir Node.js hosting platformunda deploy edebilirsiniz:
- Netlify
- Railway
- Render
- DigitalOcean App Platform

## 📊 Analytics Kurulumu

1. [Google Analytics](https://analytics.google.com/) hesabı oluşturun
2. Measurement ID alın (G-XXXXXXXXXX formatında)
3. `.env.local` dosyasına ekleyin:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🔐 Environment Variables

Gerekli environment variables için `.env.example` dosyasına bakın:

```bash
NEXT_PUBLIC_GA_ID=           # Google Analytics ID
NEXT_PUBLIC_SITE_URL=        # Site URL
NEXT_PUBLIC_WHATSAPP_NUMBER= # WhatsApp numarası
# ... diğer değişkenler
```

## 🎯 Gelecek Geliştirmeler

- [ ] İletişim formu backend entegrasyonu (Resend/SendGrid)
- [ ] Blog/Haberler bölümü
- [ ] Çoklu dil desteği (TR/EN)
- [ ] Admin panel
- [ ] Online teklif sistemi
- [ ] WhatsApp Business API entegrasyonu
- [ ] Referanslar/Testimonials bölümü

## 📝 Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.

## 👥 İletişim

**HMF Desen Yapı**
- 📧 Email: emreaygur13@gmail.com
- 📱 Telefon: +90 (501) 186 3529
- 📍 Adres: İsmet İnönü Mah. 80 Yıl Cad., Menemen / İzmir

## 🙏 Teşekkürler

Bu projeyi kullandığınız için teşekkür ederiz! Sorularınız için issue açabilir veya pull request gönderebilirsiniz.

---

Made with ❤️ by [emreaygur3](https://github.com/emreaygur3)