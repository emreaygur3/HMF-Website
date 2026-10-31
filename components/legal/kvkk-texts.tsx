import type { ReactNode } from "react"
import { KVKK_VERSION } from "@/lib/legal"
import { siteConfig } from "@/lib/site"

// KVKK metinleri tek kaynaktan: /kvkk sayfasında ve iletişim formundaki pencerede aynı içerik gösterilir.

const address = `${siteConfig.address.street}, ${siteConfig.address.district} / ${siteConfig.address.city}`

function Heading({ children }: { children: ReactNode }) {
  return <h3 className="mb-2 mt-6 text-base font-bold text-stone-900 first:mt-0">{children}</h3>
}

const listClass = "list-disc space-y-1 pl-5"

/** 6698 sayılı KVKK m.10 kapsamında aydınlatma metni */
export function AydinlatmaMetni() {
  return (
    <div className="text-sm leading-relaxed text-stone-600">
      <Heading>1. Veri Sorumlusu</Heading>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca kişisel verileriniz, veri sorumlusu
        sıfatıyla <strong className="text-stone-900">{siteConfig.legalName}</strong> tarafından aşağıda açıklanan
        kapsamda işlenmektedir. İletişim: {address} · {siteConfig.email} · {siteConfig.phones[0].display}
      </p>

      <Heading>2. İşlenen Kişisel Veriler</Heading>
      <ul className={listClass}>
        <li>İletişim formu ile: ad soyad, e-posta adresi, telefon numarası (isteğe bağlı), ilgilendiğiniz hizmet ve mesajınızın içeriği.</li>
        <li>Güvenlik amacıyla: form gönderiminin yapıldığı IP adresi ve gönderim zamanı.</li>
      </ul>

      <Heading>3. İşleme Amaçları</Heading>
      <ul className={listClass}>
        <li>Bilgi ve teklif taleplerinizin değerlendirilmesi ve size dönüş yapılması,</li>
        <li>Keşif, fiyat teklifi ve sözleşme öncesi süreçlerin yürütülmesi,</li>
        <li>Formun kötüye kullanımının (spam) önlenmesi ve bilgi güvenliğinin sağlanması,</li>
        <li>Mevzuattan doğan yükümlülüklerin yerine getirilmesi.</li>
      </ul>

      <Heading>4. Hukuki Sebepler ve Toplama Yöntemi</Heading>
      <p>
        Kişisel verileriniz, web sitemizdeki iletişim formu aracılığıyla elektronik ortamda; KVKK m.5/2-c (bir
        sözleşmenin kurulmasıyla doğrudan ilgili olması), m.5/2-ç (hukuki yükümlülüğün yerine getirilmesi) ve m.5/2-f
        (meşru menfaat) hukuki sebeplerine dayanılarak toplanır. Yurt dışına aktarım ise açık rızanıza dayanır.
      </p>

      <Heading>5. Aktarım</Heading>
      <p>
        Kişisel verileriniz yalnızca yukarıdaki amaçlarla sınırlı olarak; e-posta hizmeti sağlayıcısı Google LLC
        (Gmail) ve web sitesi barındırma hizmeti sağlayıcısı Vercel Inc. ile paylaşılır. Bu hizmet sağlayıcıların
        sunucuları yurt dışında bulunduğundan verileriniz KVKK m.9 uyarınca açık rızanızla yurt dışına aktarılır.
        Verileriniz ayrıca talep halinde ve mevzuatın izin verdiği ölçüde yetkili kamu kurum ve kuruluşlarına
        aktarılabilir. Verileriniz pazarlama amacıyla üçüncü kişilerle paylaşılmaz.
      </p>

      <Heading>6. Saklama Süresi</Heading>
      <p>
        Verileriniz talebiniz sonuçlandıktan sonra en fazla 2 yıl, mevzuatta daha uzun bir süre öngörülmüşse o süre
        boyunca saklanır; sürenin sonunda silinir, yok edilir veya anonim hale getirilir.
      </p>

      <Heading>7. Haklarınız (KVKK m.11)</Heading>
      <p className="mb-2">Veri sorumlusuna başvurarak;</p>
      <ul className={listClass}>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini, KVKK m.7 şartları çerçevesinde silinmesini veya yok edilmesini isteme ve bu işlemlerin aktarılan üçüncü kişilere bildirilmesini isteme,</li>
        <li>Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
        <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
      </ul>
      <p className="mt-2">haklarına sahipsiniz.</p>

      <Heading>8. Başvuru</Heading>
      <p>
        Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e uygun olarak kimliğinizi
        tespit edici bilgilerle birlikte yazılı olarak {address} adresine veya {siteConfig.email} adresine
        iletebilirsiniz. Başvurunuz en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.
      </p>

      <Heading>9. Çerezler ve Üçüncü Taraf Hizmetler</Heading>
      <p>
        Bu web sitesi çerez kullanmaz. İletişim sayfasındaki harita yalnızca &quot;Haritayı Göster&quot; düğmesine
        tıkladığınızda yüklenir; bu durumda Google tarafından çerez kullanılabilir. &quot;WhatsApp ile Gönder&quot;
        seçeneğinde mesajınız doğrudan kendi WhatsApp uygulamanız üzerinden iletilir ve WhatsApp&apos;ın (Meta)
        gizlilik koşullarına tabidir.
      </p>

      <p className="mt-6 text-xs text-stone-500">Son güncelleme: {KVKK_VERSION}</p>
    </div>
  )
}

/** KVKK m.9 kapsamında yurt dışına aktarım için açık rıza metni */
export function AcikRizaMetni() {
  return (
    <div className="text-sm leading-relaxed text-stone-600">
      <p>
        İletişim formu aracılığıyla paylaştığım ad soyad, e-posta adresi, telefon numarası, hizmet tercihi ve mesaj
        içeriğinden oluşan kişisel verilerimin; talebimin yanıtlanması amacıyla, sunucuları yurt dışında bulunan
        e-posta (Google LLC) ve web sitesi barındırma (Vercel Inc.) hizmet sağlayıcılarına KVKK&apos;nın 9. maddesi
        kapsamında aktarılmasına; {siteConfig.legalName} tarafından hazırlanan Aydınlatma Metni&apos;ni okuyarak, özgür
        irademle açık rıza veriyorum.
      </p>
      <p className="mt-3">
        Açık rızamı dilediğim zaman {siteConfig.email} adresine yazarak geri alabileceğimi biliyorum. Geri alma,
        önceki işlemlerin hukuka uygunluğunu etkilemez. Formu kullanmak istemezseniz bize telefon veya WhatsApp
        üzerinden de ulaşabilirsiniz.
      </p>
      <p className="mt-6 text-xs text-stone-500">Son güncelleme: {KVKK_VERSION}</p>
    </div>
  )
}
