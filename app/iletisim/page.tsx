import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Suspense } from "react"
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { JsonLd } from "@/components/seo/json-ld"
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/brand/social-icons"
import { PageHero } from "@/components/ui/page-hero"
import { Section, SectionHeading } from "@/components/ui/section"
import { pageOpenGraph } from "@/lib/seo"
import { serviceLinks } from "@/lib/services"
import { mapQuery, siteConfig, whatsappUrl } from "@/lib/site"

const title = "İletişim"
const description =
  "HMF Desen Yapı ile iletişime geçin. Doğal taş, kaplama ve peyzaj projeleriniz için teklif alın. Menemen merkezli; Aliağa, Foça, Bergama ve tüm İzmir'e hizmet."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iletisim" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/iletisim" }),
}

const faqs = [
  {
    q: "Teklif vermek ne kadar sürer?",
    a: "Projeniz hakkında ön bilgi aldıktan sonra genellikle 24-48 saat içinde teklif sunuyoruz.",
  },
  {
    q: "Hangi bölgelerde hizmet veriyorsunuz?",
    a: "İzmir başta olmak üzere Türkiye genelindeki tüm bölgelerde hizmet veriyoruz.",
  },
  {
    q: "İzmir dışındaki projeler için ek ücret var mı?",
    a: "Her proje kapsamına ve konumuna göre ayrı değerlendirilir. Teklifimizi projenizin ihtiyaçlarına göre hazırlıyoruz.",
  },
  {
    q: "Garanti süresi nedir?",
    a: "Tüm projelerimiz 2 yıl garantilidir. İşçilik kaynaklı hatalar tamamen karşılanır.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
}

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", icon: <FacebookIcon size={22} /> },
  { href: siteConfig.social.instagram, label: "Instagram", icon: <InstagramIcon size={22} /> },
  { href: whatsappUrl, label: "WhatsApp", icon: <WhatsAppIcon size={22} /> },
].filter((link) => link.href)

const linkClass = "inline-block py-1.5 text-stone-600 transition-colors hover:text-brand break-all"

/** İletişim bilgisi satırı: simge + başlık + içerik */
function ContactItem({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
        <Icon size={20} aria-hidden="true" />
      </span>
      <div>
        <h3 className="font-semibold text-stone-900">{title}</h3>
        {children}
      </div>
    </div>
  )
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHero title="İletişime Geçin" subtitle="Projeleriniz hakkında bilgi almak veya teklif almak için bize ulaşın" />

      <Section className="pt-4 sm:pt-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-2xl font-bold text-stone-900 sm:text-3xl">Bize Ulaşın</h2>
            <div className="space-y-6">
              <ContactItem icon={Phone} title="Telefon">
                <ul>
                  {siteConfig.phones.map((phone) => (
                    <li key={phone.tel}>
                      <a href={`tel:${phone.tel}`} className={linkClass}>
                        {phone.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </ContactItem>
              <ContactItem icon={Mail} title="E-posta">
                <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                  {siteConfig.email}
                </a>
              </ContactItem>
              <ContactItem icon={MapPin} title="Adres">
                <address className="mt-1 not-italic text-stone-600">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.district} / {siteConfig.address.city}
                </address>
              </ContactItem>
              <ContactItem icon={Clock} title="Çalışma Saatleri">
                <ul className="mt-1 text-stone-600">
                  {siteConfig.hours.map((hour) => (
                    <li key={hour.label}>
                      {hour.label}: {hour.value}
                    </li>
                  ))}
                </ul>
              </ContactItem>

              <div className="border-t border-stone-200 pt-6">
                <h3 className="mb-3 font-semibold text-stone-900">Bizi Takip Edin</h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-colors hover:bg-brand hover:text-white"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-2xl font-bold text-stone-900 sm:text-3xl">Mesaj Gönderin</h2>
            {/* Form tarayıcıda yüklenene kadar (veya JavaScript kapalıysa) telefonla ulaşma seçeneği görünür */}
            <Suspense
              fallback={
                <p className="text-stone-600">
                  Form yükleniyor… Dilerseniz bizi{" "}
                  <a href={`tel:${siteConfig.phones[0].tel}`} className="font-semibold text-brand underline">
                    {siteConfig.phones[0].display}
                  </a>{" "}
                  numarasından arayabilirsiniz.
                </p>
              }
            >
              <ContactForm services={serviceLinks} />
            </Suspense>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading title="Konumumuz" />
        <div className="h-80 overflow-hidden rounded-xl border border-stone-200 sm:h-96">
          <iframe
            title={`${siteConfig.name} konumu - Google Haritalar`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&hl=tr&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </Section>

      <Section size="4xl">
        <SectionHeading title="Sık Sorulan Sorular" />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-stone-200 bg-white open:bg-stone-50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-stone-900 [&::-webkit-details-marker]:hidden">
                <h3>{faq.q}</h3>
                <span aria-hidden="true" className="text-xl text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-stone-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  )
}
