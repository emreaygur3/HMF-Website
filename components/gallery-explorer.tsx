"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react"
import type { GalleryCategory, GalleryItem } from "@/lib/gallery"

const ALL = "tumu"

export function GalleryExplorer({ items, categories }: { items: GalleryItem[]; categories: GalleryCategory[] }) {
  const [filter, setFilter] = useState(ALL)
  const [active, setActive] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStartX = useRef<number | null>(null)

  const visible = filter === ALL ? items : items.filter((item) => item.category === filter)
  const current = active === null ? null : visible[active]
  const count = (id: string) => items.filter((item) => item.category === id).length

  const open = (index: number) => {
    setActive(index)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const step = (delta: number) =>
    setActive((index) => (index === null ? null : (index + delta + visible.length) % visible.length))

  const filters = [{ id: ALL, label: "Tümü", total: items.length }, ...categories.map((c) => ({ ...c, total: count(c.id) }))]

  return (
    <section className="pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Filtreler: mobilde yana kaydırılan tek satır, geniş ekranda ortalanmış */}
        <div
          role="group"
          aria-label="Galeri filtreleri"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.id
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
              }`}
            >
              {f.label}
              <span className={`text-xs ${filter === f.id ? "text-slate-300" : "text-slate-400"}`}>{f.total}</span>
            </button>
          ))}
        </div>

        {/* Fotoğraf ızgarası */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((item, index) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => open(index)}
                aria-label={`${item.alt} - büyüt`}
                className="group relative block w-full overflow-hidden rounded-lg bg-slate-100 aspect-[4/3] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1152px) 276px, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.position }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-80 sm:opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-left text-white sm:translate-y-2 sm:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-xs sm:text-sm font-semibold leading-tight">{item.caption}</span>
                  <Expand size={16} aria-hidden="true" className="hidden sm:block shrink-0" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Büyük görüntüleme */}
      <dialog
        ref={dialogRef}
        aria-label="Fotoğraf görüntüleyici"
        onClose={() => setActive(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1)
          if (e.key === "ArrowLeft") step(-1)
        }}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
          touchStartX.current = null
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black p-0 text-white backdrop:bg-black"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
              <span className="text-white/70">
                {(active ?? 0) + 1} / {visible.length}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Kapat"
                className="rounded-full p-2 hover:bg-white/10"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex-1">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              {visible.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Önceki fotoğraf"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 sm:p-3 hover:bg-black/70"
                  >
                    <ChevronLeft size={28} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Sonraki fotoğraf"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 sm:p-3 hover:bg-black/70"
                  >
                    <ChevronRight size={28} aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
              <p className="font-semibold">{current.caption}</p>
              <Link
                href={current.href}
                onClick={close}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                Detayları gör
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
