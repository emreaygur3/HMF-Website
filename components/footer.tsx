import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
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

export function Footer() {
  const socialLinks = [
    { href: siteConfig.social.facebook, label: "Facebook", icon: <FacebookIcon size={20} /> },
    { href: siteConfig.social.instagram, label: "Instagram", icon: <InstagramIcon size={20} /> },
    { href: whatsappUrl, label: "WhatsApp", icon: <Phone size={20} className="fill-current" /> },
  ].filter((link) => link.href)

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="mb-4">
              <Image src="/logo-light.svg" alt={siteConfig.name} width={194} height={56} className="h-14 w-auto" />
            </h2>
            <p className="text-sm opacity-90">{siteConfig.foundedYear}&apos;den beri doğal taş çözümleri</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:opacity-80 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <p className="text-sm mb-2">
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="hover:opacity-80 transition-opacity">
                {siteConfig.email}
              </a>
            </p>
            <p className="text-sm mb-4">
              Tel:{" "}
              {siteConfig.phones.map((phone, index) => (
                <span key={phone.tel}>
                  {index > 0 && <br />}
                  <a href={`tel:${phone.tel}`} className="hover:opacity-80 transition-opacity">
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Adres</h3>
            <address className="text-sm not-italic">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.district} / {siteConfig.address.city}
            </address>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
