"use client"

import { useState } from "react"
import { ExternalLink, MapPin } from "lucide-react"

/**
 * Google Haritalar yalnızca ziyaretçi isteyince yüklenir: sayfa açılışında Google'a istek
 * gitmez ve çerez yerleşmez (KVKK / çerez uyumu). Ayrıca sayfa daha hızlı açılır.
 */
export function MapEmbed({ query, title }: { query: string; title: string }) {
  const [loaded, setLoaded] = useState(false)
  const q = encodeURIComponent(query)

  if (loaded) {
    return (
      <iframe
        title={title}
        src={`https://maps.google.com/maps?q=${q}&z=15&hl=tr&output=embed`}
        className="h-full w-full border-0"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    )
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_center,_var(--color-brand-soft),_var(--color-stone-100))] p-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow">
        <MapPin size={26} aria-hidden="true" />
      </span>
      <p className="max-w-sm font-semibold text-stone-900">{query}</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-lg bg-brand px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Haritayı Göster
        </button>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-900 transition-colors hover:bg-stone-50"
        >
          Google Haritalar&apos;da Aç
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
      <p className="max-w-sm text-xs text-stone-500">
        Harita Google tarafından sağlanır; gösterildiğinde Google çerez kullanabilir.
      </p>
    </div>
  )
}
