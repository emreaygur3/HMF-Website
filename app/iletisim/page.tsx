"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main>
      <Navigation />

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
                  <Mail className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">E-Mail</h3>
                  <a
                    href="mailto:emreaygur13@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    emreaygur13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Telefon</h3>
                  <a href="tel:+905011863529" className="text-foreground/70 hover:text-primary transition-colors">
                    +90 (501) 186 3529
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Adres</h3>
                  <p className="text-foreground/70">
                    İsmet İnönü Mah. 80 Yıl Cad.
                    <br />
                    Menemen / İzmir
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Çalışma Saatleri</h3>
                  <p className="text-foreground/70">
                    Pazartesi - Cuma: 09:00 - 18:00
                    <br />
                    Cumartesi: 10:00 - 16:00
                    <br />
                    Pazar: Kapalı
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-lg text-foreground mb-4">Bizi Takip Edin</h3>
                <div className="flex gap-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://wa.me/905011863529"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Mesaj Gönderin</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Adınız*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm"
                  placeholder="+90 (5XX) XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Hizmet Türü
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm"
                >
                  <option value="">Seçiniz</option>
                  <option value="Derzli Duvar">Derzli Taş Duvar</option>
                  <option value="Derzsiz Duvar">Derzsiz Taş Duvar</option>
                  <option value="Şev Taşı">Şev Taşı Yapımı</option>
                  <option value="Kayrak Taş">Kayrak Taş Kaplama</option>
                  <option value="Granürlü Taş">Granürlü Taşlar</option>
                  <option value="Parke Bordür">Parke ve Bordür</option>
                  <option value="Renkli Desen">Renkli ve Desenli Taş</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none text-sm"
                  placeholder="Projeniz hakkında detaylar paylaşın..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Konumuz</h2>
          <div className="w-full rounded-lg overflow-hidden border border-border h-80 sm:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.5723145456556!2d27.170000!3d38.642500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b95c7d7d7d7d7d%3A0x0!2z4pulbWVuZW4gw54emmlyIFR1cmtleSQ!5e0!3m2!1sen!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Sık Sorulan Sorular</h2>

          <div className="space-y-6">
            {[
              {
                q: "Teklif vermek ne kadar sürer?",
                a: "Genellikle 24-48 saat içinde projeniz hakkında ön bilgi alındıktan sonra teklif sunuyoruz.",
              },
              {
                q: "Hangi bölgelerde hizmet veriyorsunuz?",
                a: "İzmir ve Türkiye genelindeki tüm bölgelerde hizmet vermekteyiz.",
              },
              {
                q: "Başkent dışı projeler için ne uygulanıyor?",
                a: "Uzakta bulunan projeler için seyahat ve ek maliyetler değerlendirilir. Her proje ayrıntılı incelenir.",
              },
              {
                q: "Garansi süresi nedir?",
                a: "Tüm projelerimiz 2 yıl garantiye sahip. İşçilik hataları tamamen karşılanır.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-lg font-semibold text-primary mb-2">{faq.q}</h3>
                <p className="text-foreground/70 text-sm sm:text-base">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
