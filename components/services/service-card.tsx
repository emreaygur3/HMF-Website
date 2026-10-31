import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { serviceIcons } from "@/lib/service-icons"
import type { Service } from "@/lib/services"

/** Hizmet kartı: ana sayfa ve Hizmetler sayfasında ortak. showDetails ile ilk 4 özellik listelenir. */
export function ServiceCard({
  service,
  showDetails = false,
  headingLevel: Heading = "h3",
}: {
  service: Service
  showDetails?: boolean
  headingLevel?: "h2" | "h3"
}) {
  const Icon = serviceIcons[service.icon]
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white transition-all hover:border-brand/40 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden bg-stone-200">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: service.imagePositions?.[service.image] }}
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand text-white">
          <Icon size={22} aria-hidden="true" />
        </span>
        <Heading className="text-xl font-bold text-stone-900">{service.title}</Heading>
        <p className="mt-2 text-stone-600">{service.description}</p>

        {showDetails && (
          <ul className="mt-5 space-y-2.5">
            {service.details.slice(0, 4).map((detail) => (
              <li key={detail} className="flex items-start gap-2.5 text-sm text-stone-600">
                <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                {detail}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-brand transition-all group-hover:gap-3">
          Detayları Gör
          <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
