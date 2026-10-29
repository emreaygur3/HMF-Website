"use client"

import type React from "react"
import { startTransition, useActionState, useState } from "react"
import { useSearchParams } from "next/navigation"
import { sendContactMessage, type ContactState } from "@/app/iletisim/actions"
import { services } from "@/lib/services"

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" }
const inputClass =
  "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-sm aria-[invalid=true]:border-red-500"

export function ContactForm() {
  const searchParams = useSearchParams()
  const preselected = services.find((s) => s.slug === searchParams.get("hizmet"))?.title ?? ""
  const [formData, setFormData] = useState({ ...emptyForm, subject: preselected })

  const [state, formAction, isPending] = useActionState(async (prev: ContactState, data: FormData) => {
    const result = await sendContactMessage(prev, data)
    if (result.status === "success") setFormData(emptyForm)
    return result
  }, { status: "idle" } as ContactState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // action prop yerine onSubmit: React 19 action sonrası formu otomatik sıfırladığından
  // hata durumunda kullanıcının yazdıkları kaybolmasın.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    startTransition(() => formAction(data))
  }

  const errors = state.fieldErrors ?? {}

  return (
    <>
      <div aria-live="polite">
        {state.status === "success" && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            {state.message ?? "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."}
          </div>
        )}
        {state.status === "error" && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
            {state.message}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Bot tuzağı - kullanıcılara görünmez */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Web sitesi</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

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
            maxLength={100}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
            placeholder="Adınız Soyadınız"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-600">
              {errors.name}
            </p>
          )}
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
            maxLength={200}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
            placeholder="ornek@email.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-600">
              {errors.email}
            </p>
          )}
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
            maxLength={30}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
            placeholder="+90 (5XX) XXX XXXX"
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
            Hizmet Türü
          </label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputClass}>
            <option value="">Seçiniz</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
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
            minLength={10}
            maxLength={5000}
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputClass} resize-none`}
            placeholder="Projeniz hakkında detaylar paylaşın..."
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Gönderiliyor..." : "Mesaj Gönder"}
        </button>
      </form>
    </>
  )
}
