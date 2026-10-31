import Link from "next/link"
import { Logo } from "@/components/brand/logo"
import { Container } from "@/components/ui/section"
import { FacebookIcon, GitHubIcon, InstagramIcon, WhatsAppIcon } from "@/components/brand/social-icons"
import { siteConfig, whatsappUrl } from "@/lib/site"

const quickLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hizmet-bolgeleri", label: "Hizmet Bölgeleri" },
  { href: "/iletisim", label: "İletişim" },
]

const DESIGNER = { name: "emreaygur3", url: "https://github.com/emreaygur3" }

const linkClass = "inline-block py-1 text-white/75 transition-colors hover:text-white"

export function Footer() {
  const socialLinks = [
    { href: siteConfig.social.facebook, label: "Facebook", icon: <FacebookIcon size={18} /> },
    { href: siteConfig.social.instagram, label: "Instagram", icon: <InstagramIcon size={18} /> },
    { href: whatsappUrl, label: "WhatsApp", icon: <WhatsAppIcon size={18} /> },
  ].filter((link) => link.href)

  return (
    <footer className="bg-stone-900 text-sm text-white">
      <Container className="pb-6 pt-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1.3fr]">
          {/* Marka */}
          <div>
            <h2>
              <Logo variant="light" className="h-10 w-auto" />
            </h2>
            <p className="mt-3 text-white/70">{siteConfig.foundedYear}&apos;den beri doğal taş ve yapı çözümleri</p>
            <div className="mt-3 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Hızlı linkler: telefonda da iki sütun */}
          <nav aria-label="Alt bilgi menüsü">
            <h3 className="mb-2 font-semibold">Hızlı Linkler</h3>
            <ul className="grid grid-cols-2 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* İletişim ve adres */}
          <div>
            <h3 className="mb-2 font-semibold">İletişim</h3>
            <ul>
              {siteConfig.phones.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`} className={linkClass}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <address className="mt-2 not-italic text-white/75">
              {siteConfig.address.street}, {siteConfig.address.district} / {siteConfig.address.city}
            </address>
          </div>
        </div>

        {/* Telif ve tasarımcı bilgisi ortada; dar ekranda alt alta */}
        <div className="mt-8 flex flex-col items-center justify-center gap-x-3 gap-y-1 border-t border-white/15 pt-5 text-center text-xs text-white/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <a
            href={DESIGNER.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 py-1 transition-colors hover:text-white"
          >
            <GitHubIcon size={14} />
            Designed by {DESIGNER.name}
          </a>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <Link href="/kvkk" className="py-1 transition-colors hover:text-white">
            KVKK Aydınlatma Metni
          </Link>
        </div>
      </Container>
    </footer>
  )
}
