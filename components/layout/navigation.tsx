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
  Phone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react"
import { Logo } from "@/components/brand/logo"
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
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center shrink-0" aria-label={`${siteConfig.name} - Anasayfa`}>
            <Logo priority className="h-11 sm:h-12 xl:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup={item.submenu ? "true" : undefined}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium py-2 whitespace-nowrap transition-colors hover:text-brand ${
                    isActive(item.href) ? "text-brand" : "text-stone-900"
                  }`}
                >
                  {/* Dar ekranda menünün sığması için simgeler xl'den itibaren görünür */}
                  <item.icon size={16} aria-hidden="true" className="hidden xl:block text-stone-500 group-hover:text-brand" />
                  {item.label}
                  {item.submenu && <ChevronDown size={14} aria-hidden="true" className="text-stone-400" />}
                </Link>
                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-64 overflow-hidden rounded-xl border border-stone-200 bg-white py-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50">
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

          {/* Hızlı arama (WhatsApp butonu sağ altta sabit) ve mobil menü butonu */}
          <div className="-mr-2.5 flex items-center gap-1">
            <a
              href={`tel:${siteConfig.phones[0].tel}`}
              className="rounded-full p-2.5 text-stone-900 transition-colors hover:bg-stone-100 hover:text-brand"
              aria-label={`Bizi arayın: ${siteConfig.phones[0].display}`}
            >
              <Phone size={22} className="fill-current" />
            </a>

            <button
              type="button"
              className="rounded-full p-2.5 text-stone-900 transition-colors hover:bg-stone-100 lg:hidden"
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
          </div>
        )}
      </Container>
    </nav>
  )
}
