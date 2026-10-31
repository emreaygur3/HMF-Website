"use client"

import type React from "react"
import { startTransition, useActionState, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { MessageCircle, Send, ShieldCheck, X } from "lucide-react"
import { sendContactMessage, type ContactState } from "@/app/iletisim/actions"
import type { ServiceLink } from "@/lib/service-icons"
import { AcikRizaMetni, AydinlatmaMetni } from "@/components/legal/kvkk-texts"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

const inputClass =
  // text-base: iPhone 16px altındaki alanlarda otomatik yakınlaştırma yapar
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-brand aria-[invalid=true]:border-red-500"

type FieldName = keyof NonNullable<ContactState["fieldErrors"]>

function Field({
  name,
  label,
  error,
  children,
}: {
  name: FieldName | "subject"
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

/** KVKK onay kutusu: kutu ile metin birlikte tıklanabilir, hata mesajı altta */
function ConsentCheckbox({
  name,
  inputRef,
  error,
  children,
}: {
  name: "kvkk" | "consent"
  inputRef: React.RefObject<HTMLInputElement | null>
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          ref={inputRef}
          type="checkbox"
          id={name}
          name={name}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-brand"
        />
        <label htmlFor={name} className="cursor-pointer text-sm leading-snug text-stone-700">
          {children}
        </label>
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1 pl-8 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

const legalDocs = {
  kvkk: { title: "KVKK Aydınlatma Metni", Body: AydinlatmaMetni },
  consent: { title: "Yurt Dışına Aktarım Açık Rıza Metni", Body: AcikRizaMetni },
} as const

/** Formdaki bilgileri hazır mesaj olarak WhatsApp'ta açar; e-posta ayarı gerektirmez. */
function openWhatsApp(form: HTMLFormElement) {
  const data = new FormData(form)
  const value = (key: string) => String(data.get(key) ?? "").trim()

  const name = form.elements.namedItem("name") as HTMLInputElement
  const message = form.elements.namedItem("message") as HTMLTextAreaElement
  if (!name.reportValidity() || !message.reportValidity()) return

  const details = [
    ["Ad Soyad", value("name")],
    ["Hizmet", value("subject")],
    ["Telefon", value("phone")],
    ["E-posta", value("email")],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
  const text = ["Merhaba, web sitenizden yazıyorum.", ...details, "", value("message")].join("\n")

  window.open(
    `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener,noreferrer",
  )
}

export function ContactForm({ services }: { services: ServiceLink[] }) {
  const formRef = useRef<HTMLFormElement>(null)
  const kvkkRef = useRef<HTMLInputElement>(null)
  const consentRef = useRef<HTMLInputElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [doc, setDoc] = useState<keyof typeof legalDocs>("kvkk")
  const searchParams = useSearchParams()
  const preselected = services.find((s) => s.slug === searchParams.get("hizmet"))?.title ?? ""

  const [state, formAction, isPending] = useActionState(async (prev: ContactState, data: FormData) => {
    const result = await sendContactMessage(prev, data)
    if (result.status === "success") formRef.current?.reset()
    return result
  }, { status: "idle" } as ContactState)

  // action prop yerine onSubmit: React 19 action sonrası formu otomatik sıfırladığından
  // hata durumunda kullanıcının yazdıkları kaybolmasın. Alanlar kontrolsüz (uncontrolled)
  // olduğu için her tuş vuruşunda yeniden çizim yapılmaz.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    startTransition(() => formAction(data))
  }

  const openDoc = (key: keyof typeof legalDocs) => {
    setDoc(key)
    dialogRef.current?.showModal()
  }
  // "Okudum, onaylıyorum": ilgili kutuyu işaretler ve pencereyi kapatır
  const confirmDoc = () => {
    const input = doc === "kvkk" ? kvkkRef.current : consentRef.current
    if (input) input.checked = true
    dialogRef.current?.close()
  }
  const Doc = legalDocs[doc]

  const errors = state.fieldErrors ?? {}
  const errorProps = (name: FieldName) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  })

  return (
    <>
      <div aria-live="polite">
        {state.status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            {state.message}
          </div>
        )}
        {state.status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
            <p>{state.message}</p>
            {!state.fieldErrors && (
              <button
                type="button"
                onClick={() => formRef.current && openWhatsApp(formRef.current)}
                className="mt-3 inline-flex items-center gap-2 font-semibold text-green-700 underline"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Mesajınızı WhatsApp ile gönderin
              </button>
            )}
          </div>
        )}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {/* Bot tuzağı - kullanıcılara görünmez */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Web sitesi</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <Field name="name" label="Adınız*" error={errors.name}>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Adınız Soyadınız"
            className={inputClass}
            {...errorProps("name")}
          />
        </Field>

        <Field name="email" label="E-Mail*" error={errors.email}>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="ornek@email.com"
            className={inputClass}
            {...errorProps("email")}
          />
        </Field>

        <Field name="phone" label="Telefon" error={errors.phone}>
          <input
            type="tel"
            id="phone"
            name="phone"
            maxLength={30}
            autoComplete="tel"
            placeholder="+90 (5XX) XXX XXXX"
            className={inputClass}
            {...errorProps("phone")}
          />
        </Field>

        <Field name="subject" label="Hizmet Türü">
          {/* key: adres çubuğundaki ?hizmet= değişirse seçim de güncellensin */}
          <select key={preselected} id="subject" name="subject" defaultValue={preselected} className={inputClass}>
            <option value="">Seçiniz</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Diğer">Diğer</option>
          </select>
        </Field>

        <Field name="message" label="Mesajınız*" error={errors.message}>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={5}
            placeholder="Projeniz hakkında detaylar paylaşın..."
            className={`${inputClass} resize-none`}
            {...errorProps("message")}
          />
        </Field>

        {/* KVKK onayları */}
        <fieldset className="space-y-4 rounded-xl border border-stone-200 bg-stone-50 p-4 sm:p-5">
          <legend className="sr-only">Kişisel verilerin korunması</legend>
          <ConsentCheckbox name="kvkk" inputRef={kvkkRef} error={errors.kvkk}>
            <button type="button" onClick={() => openDoc("kvkk")} className="font-semibold text-brand underline underline-offset-2">
              KVKK Aydınlatma Metni
            </button>
            &apos;ni okudum ve anladım.*
          </ConsentCheckbox>
          <ConsentCheckbox name="consent" inputRef={consentRef} error={errors.consent}>
            Kişisel verilerimin, talebimin yanıtlanması amacıyla yurt dışında sunucuları bulunan e-posta ve barındırma
            hizmetlerine aktarılmasına{" "}
            <button type="button" onClick={() => openDoc("consent")} className="font-semibold text-brand underline underline-offset-2">
              Açık Rıza Metni
            </button>{" "}
            kapsamında onay veriyorum.*
          </ConsentCheckbox>
        </fieldset>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            disabled={isPending}
            className={`${buttonVariants.primary} disabled:cursor-not-allowed disabled:opacity-60`}
          >
            <Send size={18} aria-hidden="true" />
            {isPending ? "Gönderiliyor..." : "E-posta ile Gönder"}
          </button>
          <button
            type="button"
            onClick={() => formRef.current && openWhatsApp(formRef.current)}
            className={buttonVariants.whatsapp}
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp ile Gönder
          </button>
        </div>
        <p className="text-center text-xs text-stone-500">
          WhatsApp seçeneği, yazdıklarınızı hazır mesaj olarak kendi WhatsApp uygulamanızda açar.
        </p>
      </form>

      {/* KVKK metin penceresi */}
      <dialog
        ref={dialogRef}
        aria-labelledby="legal-dialog-title"
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-stone-950/60 backdrop:backdrop-blur-sm"
      >
        <div className="flex max-h-[90dvh] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-stone-200 px-5 py-4 sm:px-6">
            <h2 id="legal-dialog-title" className="flex items-center gap-2 text-lg font-bold text-stone-900">
              <ShieldCheck size={20} aria-hidden="true" className="shrink-0 text-brand" />
              {Doc.title}
            </h2>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Kapat"
              className="rounded-full p-2 text-stone-500 hover:bg-stone-100"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="overflow-y-auto px-5 py-5 sm:px-6">
            <Doc.Body />
          </div>
          <div className="flex flex-col-reverse gap-2 border-t border-stone-200 bg-stone-50 px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
            <button type="button" onClick={() => dialogRef.current?.close()} className="rounded-lg px-5 py-3 font-semibold text-stone-700 hover:bg-stone-200">
              Kapat
            </button>
            <button type="button" onClick={confirmDoc} className={buttonVariants.primary}>
              Okudum, onaylıyorum
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
