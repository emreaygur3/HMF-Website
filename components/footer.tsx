import { Facebook, Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">HMF Desen Yapı</h3>
            <p className="text-sm opacity-90">1998'den beri doğal taş çözümleri</p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/905011863529"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:opacity-80 transition-opacity">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="/hakkimizda" className="hover:opacity-80 transition-opacity">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/projeler" className="hover:opacity-80 transition-opacity">
                  Projeler
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <p className="text-sm">Email: emreaygur13@gmail.com</p>
            <p className="text-sm">Tel: +90 (501) 186 3529</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Adres</h4>
            <p className="text-sm">
              İsmet İnönü Mah. 80 Yıl Cad.
              <br />
              Menemen / İzmir
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 HMF Desen Yapı. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
