import type { Metadata } from "next"
import { Suspense } from "react"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { JsonLd } from "@/components/json-ld"
import { mapQuery, siteConfig, whatsappUrl } from "@/lib/site"
import { pageOpenGraph } from "@/lib/seo"

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
  { href: siteConfig.social.facebook, label: "Facebook", icon: <Facebook size={28} /> },
  { href: siteConfig.social.instagram, label: "Instagram", icon: <Instagram size={28} /> },
  { href: whatsappUrl, label: "WhatsApp", icon: <MessageCircle size={28} /> },
].filter((link) => link.href)

export default function Contact() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">İletişime Geçin</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Projeleriniz hakkında bilgi almak veya teklif almak için bize ulaşın
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Bize Ulaşın</h2>

            {/* Contact Items */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">E-Mail</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-block py-2 text-foreground/70 hover:text-primary transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Telefon</h3>
                  <ul>
                    {siteConfig.phones.map((phone) => (
                      <li key={phone.tel}>
                        <a
                          href={`tel:${phone.tel}`}
                          className="inline-block py-2 text-foreground/70 hover:text-primary transition-colors break-all"
                        >
                          {phone.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Adres</h3>
                  <address className="text-foreground/70 not-italic">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.district} / {siteConfig.address.city}
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Çalışma Saatleri</h3>
                  <p className="text-foreground/70">
                    {siteConfig.hours.map((hour, index) => (
                      <span key={hour.label}>
                        {index > 0 && <br />}
                        {hour.label}: {hour.value}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-lg text-foreground mb-4">Bizi Takip Edin</h3>
                <div className="flex gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Mesaj Gönderin</h2>
            {/* Form tarayıcıda yüklenene kadar (veya JavaScript kapalıysa) telefonla ulaşma seçeneği görünür */}
            <Suspense
              fallback={
                <p className="text-slate-600">
                  Form yükleniyor… Dilerseniz bizi{" "}
                  <a href={`tel:${siteConfig.phones[0].tel}`} className="font-semibold text-primary underline">
                    {siteConfig.phones[0].display}
                  </a>{" "}
                  numarasından arayabilirsiniz.
                </p>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Konumumuz</h2>
          <div className="w-full rounded-lg overflow-hidden border border-border h-80 sm:h-96">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Sık Sorulan Sorular</h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-foreground/70 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
