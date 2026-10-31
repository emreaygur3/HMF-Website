"use server"

import { headers } from "next/headers"
import nodemailer, { type Transporter } from "nodemailer"
import { services } from "@/lib/services"
import { KVKK_VERSION } from "@/lib/legal"
import { siteConfig } from "@/lib/site"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "message" | "kvkk" | "consent", string>>
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
  submissions.set(ip, recent)
  return recent.length >= RATE_MAX
}

// Yalnızca başarılı gönderimler sayılır; hata sonrası tekrar deneyen kullanıcı kilitlenmez.
function recordSubmission(ip: string) {
  submissions.set(ip, [...(submissions.get(ip) ?? []), Date.now()])
}

// Mesajlar Gmail SMTP ile gönderilir; GMAIL_APP_PASSWORD bir Google "uygulama şifresi"dir.
const gmailUser = process.env.GMAIL_USER || siteConfig.email
let transporter: Transporter | undefined

function getTransporter(password: string) {
  transporter ??= nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: gmailUser, pass: password },
    connectionTimeout: 10_000,
  })
  return transporter
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
  if (!name) fieldErrors.name = "Lütfen adınızı girin."
  else if (name.length > LIMITS.name) fieldErrors.name = `Adınız en fazla ${LIMITS.name} karakter olabilir.`
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) fieldErrors.email = "Geçerli bir e-posta adresi girin."
  if (phone && !PHONE_RE.test(phone)) fieldErrors.phone = "Geçerli bir telefon numarası girin."
  if (message.length < 10) fieldErrors.message = "Mesajınız en az 10 karakter olmalıdır."
  else if (message.length > LIMITS.message)
    fieldErrors.message = `Mesajınız en fazla ${LIMITS.message} karakter olabilir.`
  // KVKK: aydınlatma metninin okunduğu ve yurt dışı aktarım açık rızası zorunludur
  if (formData.get("kvkk") !== "on") fieldErrors.kvkk = "Devam etmek için Aydınlatma Metni'ni onaylayın."
  if (formData.get("consent") !== "on") fieldErrors.consent = "Mesajınızın iletilebilmesi için açık rıza gereklidir."
  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Lütfen işaretli alanları kontrol edin.", fieldErrors }
  }

  const headerList = await headers()
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (isRateLimited(ip)) {
    return { status: "error", message: "Çok fazla deneme yaptınız. Lütfen daha sonra tekrar deneyin." }
  }

  const password = process.env.GMAIL_APP_PASSWORD
  if (!password) {
    console.error("İletişim formu yapılandırılmamış: GMAIL_APP_PASSWORD eksik.")
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
    // Onayın kanıtı olarak e-postada saklanır
    ["KVKK", `Aydınlatma Metni okundu, yurt dışı aktarım açık rızası verildi (metin sürümü ${KVKK_VERSION})`],
    ["Onay zamanı", new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })],
    ["IP", ip],
  ]

  const html = `
    <h2>Web sitesinden yeni mesaj</h2>
    <table cellpadding="6">${rows
      .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
      .join("")}</table>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${message}`

  try {
    await getTransporter(password).sendMail({
      from: { name: `${siteConfig.name} Web Sitesi`, address: gmailUser },
      to: process.env.CONTACT_TO_EMAIL || gmailUser,
      // "Yanıtla" denince doğrudan müşteriye yazılır
      replyTo: { name, address: email },
      subject: `Yeni teklif talebi: ${name.slice(0, 60)} (${safeSubject})`,
      html,
      text,
    })
  } catch (error) {
    console.error("E-posta gönderilemedi:", error)
    return {
      status: "error",
      message: "Mesajınız gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya bizi arayın.",
    }
  }

  recordSubmission(ip)
  return { status: "success", message: "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz." }
}
