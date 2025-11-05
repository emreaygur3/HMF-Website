import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "HMF Desen Yapı | Doğal Taş & Dekoratif Kaplamalar",
    template: "%s | HMF Desen Yapı",
  },
  description:
    "1998'den beri İzmir ve Türkiye genelinde kaliteli doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleri. Derzli taş duvar, şev taşı, kayrak taş kaplama ve daha fazlası.",
  keywords: [
    "doğal taş",
    "taş duvar",
    "dekoratif kaplama",
    "şev taşı",
    "kayrak taş",
    "granürlü taş",
    "parke bordür",
    "peyzaj tasarımı",
    "İzmir taş ustaları",
    "HMF Desen Yapı",
  ],
  authors: [{ name: "HMF Desen Yapı" }],
  creator: "HMF Desen Yapı",
  publisher: "HMF Desen Yapı",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hmfdesenyapi.com"),
  openGraph: {
    title: "HMF Desen Yapı | Doğal Taş & Dekoratif Kaplamalar",
    description:
      "1998'den beri İzmir ve Türkiye genelinde kaliteli doğal taş uygulamaları, dekoratif kaplamalar ve peyzaj çözümleri.",
    url: "https://hmfdesenyapi.com",
    siteName: "HMF Desen Yapı",
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
