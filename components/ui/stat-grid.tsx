import { statItems } from "@/lib/site"

/** Firma istatistikleri (proje sayısı, deneyim yılı vb.); telefonda 2, geniş ekranda 4 sütun */
export function StatGrid({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 ${className}`}>
      {statItems.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse text-center">
          <dt className={`mt-1 text-sm sm:text-base ${dark ? "text-stone-300" : "text-stone-600"}`}>{stat.label}</dt>
          <dd className={`text-3xl font-bold sm:text-4xl ${dark ? "text-brand-light" : "text-brand"}`}>{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
