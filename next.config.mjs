// Eski sayısal proje adresleri (/projeler/1 vb.) artık mevcut değil; Projeler sayfasına yönlendirilir.
const projectRedirects = [
  { source: "/projeler/:id(\\d+)", destination: "/projeler", permanent: true },
]

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // 30: bulanık arka plan kopyaları (FittedImage), 75: varsayılan
    qualities: [30, 75],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }]
  },
  async redirects() {
    return projectRedirects
  },
}

export default nextConfig
