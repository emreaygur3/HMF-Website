"use server"

import { headers } from "next/headers"
import { services } from "@/lib/services"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message", string>>
}

const LIMITS = { name: 100, email: 200, phone: 30, message: 5000 }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[0-9+()\s-]{7,30}$/
const allowedSubjects = new Set([...services.map((s) => s.title), "Diğer"])

// Basit, sunucu örneği başına hız sınırı: aynı IP'den 10 dakikada en fazla 5 mesaj.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5
const submissions = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_MAX) {
    submissions.set(ip, recent)
    return true
  }
  recent.push(now)
  submissions.set(ip, recent)
  return false
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!)

const field = (formData: FormData, key: string) => String(formData.get(key) ?? "").trim()

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Bot tuzağı: görünmez alan doldurulduysa sessizce başarılı say.
  if (field(formData, "website")) return { status: "success" }

  const name = field(formData, "name")
  const email = field(formData, "email")
  const phone = field(formData, "phone")
  const subject = field(formData, "subject")
  const message = field(formData, "message")

  const fieldErrors: ContactState["fieldErrors"] = {}
  if (!name || name.length > LIMITS.name) fieldErrors.name = "Lütfen adınızı girin."
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) fieldErrors.email = "Geçerli bir e-posta adresi girin."
  if (phone && !PHONE_RE.test(phone)) fieldErrors.phone = "Geçerli bir telefon numarası girin."
  if (message.length < 10 || message.length > LIMITS.message)
    fieldErrors.message = "Mesajınız en az 10 karakter olmalıdır."
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Lütfen işaretli alanları kontrol edin.", fieldErrors }
  }

  const headerList = await headers()
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (isRateLimited(ip)) {
    return { status: "error", message: "Çok fazla deneme yaptınız. Lütfen daha sonra tekrar deneyin." }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error("İletişim formu yapılandırılmamış: RESEND_API_KEY veya CONTACT_TO_EMAIL eksik.")
    return {
      status: "error",
      message: "Mesajınız şu anda iletilemedi. Lütfen bize telefon veya WhatsApp üzerinden ulaşın.",
    }
  }

  const safeSubject = allowedSubjects.has(subject) ? subject : "Belirtilmedi"
  const rows: [string, string][] = [
    ["Ad Soyad", name],
    ["E-posta", email],
    ["Telefon", phone || "-"],
    ["Hizmet", safeSubject],
  ]

  const html = `
    <h2>Web sitesinden yeni mesaj</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "HMF Web Sitesi <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `Yeni teklif talebi: ${name.slice(0, 60)} (${safeSubject})`,
        html,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!response.ok) {
      console.error("Resend hatası:", response.status, await response.text())
      throw new Error("send failed")
    }
  } catch {
    return {
      status: "error",
      message: "Mesajınız gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya bizi arayın.",
    }
  }

  return { status: "success", message: "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz." }
}
