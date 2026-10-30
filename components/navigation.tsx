"use client"

import Image from "next/image"
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
  MapPin,
  Menu,
  Phone,
  Users,
  X,
  type LucideIcon,
} from "lucide-react"
import { serviceIcons, type ServiceLink } from "@/lib/service-icons"
import { siteConfig, whatsappUrl } from "@/lib/site"

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
    { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri", icon: MapPin },
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
    <nav aria-label="Ana menü" className="fixed w-full bg-white border-b border-border z-50 shadow-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:rounded focus:shadow"
      >
        İçeriğe geç
      </a>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center shrink-0" aria-label={`${siteConfig.name} - Anasayfa`}>
            <Image src="/logo.svg" alt="" width={194} height={56} priority className="h-12 sm:h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup={item.submenu ? "true" : undefined}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium py-2 whitespace-nowrap transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {/* Dar ekranda menünün sığması için simgeler xl'den itibaren görünür */}
                  <item.icon size={16} aria-hidden="true" className="hidden xl:block text-slate-500 group-hover:text-primary" />
                  {item.label}
                  {item.submenu && <ChevronDown size={14} aria-hidden="true" className="text-slate-400" />}
                </Link>
                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-64 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        aria-current={pathname === sub.href ? "page" : undefined}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-slate-50 hover:text-primary first:rounded-t-md last:rounded-b-md transition-colors"
                      >
                        <sub.icon size={16} aria-hidden="true" className="shrink-0 text-slate-500" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* WhatsApp/Phone Button - Desktop & Mobile */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="WhatsApp ile iletişime geç"
            >
              <Phone size={24} className="fill-current" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden ml-2"
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
          <div id="mobile-menu" className="lg:hidden pb-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(dropdownOpen === item.href ? null : item.href)}
                      aria-expanded={dropdownOpen === item.href}
                      className="w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded flex justify-between items-center"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon size={18} aria-hidden="true" className="text-slate-500" />
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
                      <div className="bg-slate-50 space-y-1 ml-2">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm font-semibold text-foreground hover:text-primary rounded"
                          onClick={() => setIsOpen(false)}
                        >
                          Tüm {item.label}
                        </Link>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-foreground hover:text-primary rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            <sub.icon size={16} aria-hidden="true" className="shrink-0 text-slate-500" />
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
                    className="flex items-center gap-3 w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={18} aria-hidden="true" className="text-slate-500" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
