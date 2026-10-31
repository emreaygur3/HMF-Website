"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Önce/sonra karşılaştırması: "sonra" fotoğrafının üzerinde "önce" fotoğrafı soldan kırpılarak gösterilir.
 * Görünmez bir range input tüm alanı kaplar; böylece fare, dokunma ve klavye (ok tuşları) ile çalışır.
 */
export function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [position, setPosition] = useState(50)

  return (
    <figure className="relative mx-auto aspect-[5/6] w-full max-w-lg select-none overflow-hidden rounded-xl bg-stone-200 shadow-lg">
      <Image src={after} alt={`${alt} - sonrası`} fill sizes="(min-width: 640px) 512px, 100vw" className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={`${alt} - öncesi`} fill sizes="(min-width: 640px) 512px, 100vw" className="object-cover" />
      </div>

      {/* Etiketler: sürgü kenara yaklaşınca ilgili etiket gizlenir */}
      <span
        className={`absolute left-3 top-3 rounded-full bg-stone-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white transition-opacity ${position < 15 ? "opacity-0" : ""}`}
      >
        Önce
      </span>
      <span
        className={`absolute right-3 top-3 rounded-full bg-brand/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white transition-opacity ${position > 85 ? "opacity-0" : ""}`}
      >
        Sonra
      </span>

      {/* Ayırıcı çizgi ve tutamak */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow" style={{ left: `${position}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-stone-900 shadow-lg">
          <ChevronLeft size={18} className="-mr-1" />
          <ChevronRight size={18} className="-ml-1" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Önce ve sonra karşılaştırması: sürükleyerek değiştirin"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        style={{ touchAction: "pan-y" }}
      />
      <figcaption className="sr-only">{alt}: restorasyon öncesi ve sonrası</figcaption>
    </figure>
  )
}
