"use client"

import type React from "react"
import { startTransition, useActionState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { MessageCircle, Send } from "lucide-react"
import { sendContactMessage, type ContactState } from "@/app/iletisim/actions"
import type { ServiceLink } from "@/lib/service-icons"
import { siteConfig } from "@/lib/site"

const inputClass =
  "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm aria-[invalid=true]:border-red-500"

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

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={18} aria-hidden="true" />
            {isPending ? "Gönderiliyor..." : "E-posta ile Gönder"}
          </button>
          <button
            type="button"
            onClick={() => formRef.current && openWhatsApp(formRef.current)}
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp ile Gönder
          </button>
        </div>
        <p className="text-xs text-slate-500 text-center">
          WhatsApp seçeneği, yazdıklarınızı hazır mesaj olarak WhatsApp&apos;ta açar.
        </p>
      </form>
    </>
  )
}
