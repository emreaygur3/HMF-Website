"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
  ChevronDown,
  FolderOpen,
  HardHat,
  Images,
  House,
  Mail,
  Menu,
  Users,
  X,
  type LucideIcon,
} from "lucide-react"
import { Logo } from "@/components/brand/logo"
import { ButtonLink } from "@/components/ui/button"
import { Container } from "@/components/ui/section"
import { serviceIcons, type ServiceLink } from "@/lib/service-icons"
import { siteConfig } from "@/lib/site"

type NavLink = { href: string; label: string; icon: LucideIcon }
type NavItem = NavLink & { submenu?: NavLink[] }

function buildNavItems(services: ServiceLink[]): NavItem[] {
  return [
    { href: "/", label: "Anasayfa", icon: House },
    { href: "/hakkimizda", label: "Hakkımızda", icon: Users },
    {
      href: "/hizmetler",
      label: "Hizmetler",
      icon: HardHat,
      submenu: services.map((service) => ({
        href: `/hizmetler/${service.slug}`,
        label: service.title,
        icon: serviceIcons[service.icon],
      })),
    },
    { href: "/projeler", label: "Projeler", icon: FolderOpen },
    { href: "/galeri", label: "Galeri", icon: Images },
    { href: "/iletisim", label: "İletişim", icon: Mail },
  ]
}

/** Hizmet listesi sunucudan prop olarak gelir; böylece hizmet metinleri tarayıcı paketine girmez. */
export function Navigation({ services }: { services: ServiceLink[] }) {
  const navItems = buildNavItems(services)
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const [lastPathname, setLastPathname] = useState(pathname)

  // Sayfa değiştiğinde mobil menü kapanır (layout içinde bileşen yeniden oluşturulmadığı için).
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setIsOpen(false)
    setDropdownOpen(null)
  }

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <nav aria-label="Ana menü" className="fixed z-50 w-full border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        İçeriğe geç
      </a>
      <Container>
        {/* Masaüstü: logo solda, menü tam ortada, "Teklif Alın" sağda (yan sütunlar eşit genişlikte) */}
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} - Anasayfa`}>
              <Logo priority className="h-11 w-auto sm:h-12" />
            </Link>
          </div>

          {/* Masaüstü menü (İletişim, sağdaki butonda) */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.filter((item) => item.href !== "/iletisim").map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup={item.submenu ? "true" : undefined}
                  className={`relative inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-[15px] font-medium transition-colors hover:bg-stone-100 hover:text-stone-900 ${
                    isActive(item.href)
                      ? "text-stone-900 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand"
                      : "text-stone-600"
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown size={15} aria-hidden="true" className="text-stone-400 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-1/2 top-full mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-xl border border-stone-200 bg-white py-2 shadow-xl opacity-0 before:absolute before:-top-2 before:h-2 before:w-full invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        aria-current={pathname === sub.href ? "page" : undefined}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 hover:text-brand transition-colors"
                      >
                        <sub.icon size={16} aria-hidden="true" className="shrink-0 text-stone-500" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sağ: masaüstünde teklif butonu, mobilde menü butonu */}
          {/* Gizleme sarmalayıcıda: butonun kendi inline-flex sınıfı "hidden"ı ezmesin */}
          <div className="hidden justify-end lg:flex lg:flex-1">
            <ButtonLink href="/iletisim" size="sm">
              Teklif Alın
            </ButtonLink>
          </div>
          <div className="-mr-2.5 flex items-center lg:hidden">
            <button
              type="button"
              className="rounded-full p-2.5 text-stone-900 transition-colors hover:bg-stone-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="max-h-[calc(100dvh-5rem)] space-y-1 overflow-y-auto border-t border-stone-200 py-3 lg:hidden">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(dropdownOpen === item.href ? null : item.href)}
                      aria-expanded={dropdownOpen === item.href}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-stone-900 hover:bg-stone-100"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon size={18} aria-hidden="true" className="text-stone-500" />
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform ${dropdownOpen === item.href ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mobile Dropdown */}
                    {dropdownOpen === item.href && (
                      <div className="ml-4 border-l-2 border-stone-200 pl-2">
                        <Link
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-100 hover:text-brand"
                          onClick={() => setIsOpen(false)}
                        >
                          Tüm {item.label}
                        </Link>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-stone-700 hover:bg-stone-100 hover:text-brand"
                            onClick={() => setIsOpen(false)}
                          >
                            <sub.icon size={16} aria-hidden="true" className="shrink-0 text-stone-500" />
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium hover:bg-stone-100 ${
                      isActive(item.href) ? "bg-brand-soft text-brand" : "text-stone-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={18} aria-hidden="true" className="text-stone-500" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-1 pt-3">
              <ButtonLink href="/iletisim" className="w-full">
                Teklif Alın
              </ButtonLink>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}
