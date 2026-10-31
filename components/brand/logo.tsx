import Image from "next/image"
import { siteConfig } from "@/lib/site"

// Logo dosyaları public/brand/ altındadır (tamamen vektör; yazılar çizgiye çevrilmiş).
// Yatay: menü ve alt bilgi, dikey: Hakkımızda gibi geniş alanlar.
const files = {
  horizontal: { dark: "/brand/hmf-logo-yatay.svg", light: "/brand/hmf-logo-yatay-beyaz.svg", width: 495, height: 114 },
  stacked: { dark: "/brand/hmf-logo-dikey.svg", light: "/brand/hmf-logo-dikey-beyaz.svg", width: 276, height: 251 },
} as const

export function Logo({
  layout = "horizontal",
  variant = "dark",
  className = "h-11 w-auto",
  priority = false,
}: {
  layout?: keyof typeof files
  variant?: "dark" | "light"
  className?: string
  priority?: boolean
}) {
  const file = files[layout]
  return (
    <Image
      src={file[variant]}
      alt={`${siteConfig.name} - Desen, Yapı ve İnşaat`}
      width={file.width}
      height={file.height}
      priority={priority}
      className={className}
    />
  )
}
