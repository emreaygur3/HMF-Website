"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const navItems = [
    { href: "/", label: "Anasayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    {
      href: "/hizmetler",
      label: "Hizmetler",
      submenu: [
        { href: "/hizmetler/derzli-ve-derzsiz-tas-duvar", label: "Derzli ve Derzsiz Taş Duvar" },
        { href: "/hizmetler/sev-tasi-yapimi", label: "Şev Taşı Yapımı" },
        { href: "/hizmetler/kayrak-tas-kaplama", label: "Kayrak Taş Kaplama" },
        { href: "/hizmetler/granurlu-taslar", label: "Granürlü Taşlar" },
        { href: "/hizmetler/parke-ve-bordur", label: "Parke ve Bordür" },
        { href: "/hizmetler/renkli-ve-desenli-tas", label: "Renkli ve Desenli Taş" },
      ],
    },
    { href: "/projeler", label: "Projeler" },
    { href: "/iletisim", label: "İletişim" },
  ]

  return (
    <nav className="fixed w-full bg-white border-b border-border z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
            HMF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm font-medium py-2"
                >
                  {item.label}
                </Link>
                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-slate-50 hover:text-primary first:rounded-t-md last:rounded-b-md transition-colors"
                      >
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
              href="https://wa.me/905011863529"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="WhatsApp ile iletişime geç"
            >
              <Phone size={24} className="fill-current" />
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menüyü aç/kapat">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === item.href ? null : item.href)}
                      className="w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded flex justify-between items-center"
                    >
                      <span>{item.label}</span>
                      <span className={`transition-transform ${dropdownOpen === item.href ? "rotate-180" : ""}`}>▼</span>
                    </button>

                    {/* Mobile Dropdown */}
                    {dropdownOpen === item.href && (
                      <div className="bg-slate-50 space-y-1 ml-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-foreground hover:text-primary rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded"
                    onClick={() => setIsOpen(false)}
                  >
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
