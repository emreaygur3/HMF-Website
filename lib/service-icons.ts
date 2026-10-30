import { Boxes, Building2, Grid3x3, Layers, Leaf, Mountain, Palette, Route, Sparkles, type LucideIcon } from "lucide-react"

// Hizmet simgeleri ayrı tutulur: istemci bileşenleri (menü) yalnızca bu küçük dosyayı yükler,
// lib/services.ts'teki uzun metinler tarayıcı paketine girmez.
export const serviceIcons = {
  Boxes,
  Building2,
  Grid3x3,
  Layers,
  Leaf,
  Mountain,
  Palette,
  Route,
  Sparkles,
} satisfies Record<string, LucideIcon>

export type ServiceIconName = keyof typeof serviceIcons

/** Menü ve form gibi istemci bileşenlerine aktarılan hafif hizmet bilgisi */
export type ServiceLink = { slug: string; title: string; icon: ServiceIconName }
