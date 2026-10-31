import { WhatsAppIcon } from "@/components/brand/social-icons"
import { whatsappUrl } from "@/lib/site"

const message = "Merhaba, web sitenizden ulaşıyorum. Bilgi almak istiyorum."

/** Her sayfada sağ altta sabit duran WhatsApp butonu */
export function WhatsAppButton() {
  return (
    <a
      href={`${whatsappUrl}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile yazın"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25d366] p-3.5 text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25d366]/40 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon size={28} />
      <span className="hidden pr-1 text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  )
}
