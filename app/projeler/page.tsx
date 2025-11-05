"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Villa Cephe Uygulaması",
    category: "Konut",
    status: "Tamamlandı",
    date: "2024-03",
    image: "/modern-villa-stone-facade.jpg",
    description: "Granürlü taş ile yapılan modern cephe tasarımı",
  },
  {
    id: 2,
    title: "Ticari Merkez Giriş Tasarımı",
    category: "Ticari",
    status: "Tamamlandı",
    date: "2024-02",
    image: "/commercial-entrance-stone-design.jpg",
    description: "Kayrak taşı ile gerçekleştirilen giriş alanı",
  },
  {
    id: 3,
    title: "Bahçe Peyzaj Bordür",
    category: "Peyzaj",
    status: "Tamamlandı",
    date: "2024-01",
    image: "/garden-landscape-stone-border.jpg",
    description: "Dekoratif parke ve bordür uygulaması",
  },
  {
    id: 4,
    title: "Yamaç Şev Taşı Yapımı",
    category: "Peyzaj",
    status: "Devam Ediyor",
    date: "2024-11",
    image: "/slope-stone-construction-hillside.jpg",
    description: "Eğimli arazi için şev taşı uygulaması",
  },
  {
    id: 5,
    title: "Derzli Taş Duvar Projesi",
    category: "Konut",
    status: "Tamamlandı",
    date: "2023-12",
    image: "/stone-wall-with-joints-residential.jpg",
    description: "İç avlu için derzli taş duvar",
  },
  {
    id: 6,
    title: "Renkli Desen Kaplama",
    category: "Ticari",
    status: "Devam Ediyor",
    date: "2024-10",
    image: "/colorful-decorative-stone-pattern.jpg",
    description: "Renkli ve desenli taş kombinasyonu",
  },
  {
    id: 7,
    title: "Kompleks Giriş Alanı",
    category: "Konut",
    status: "Tamamlandı",
    date: "2023-11",
    image: "/residential-complex-entrance-stone.jpg",
    description: "Çok amaçlı kompleks giriş tasarımı",
  },
  {
    id: 8,
    title: "Otel Cephe Uygulaması",
    category: "Ticari",
    status: "Tamamlandı",
    date: "2023-10",
    image: "/hotel-facade-stone-cladding.jpg",
    description: "Otel binasının eksiksiz taş kaplama projesi",
  },
]

export default function Projects() {
  const [selectedStatus, setSelectedStatus] = useState("Tümü")
  const [searchQuery, setSearchQuery] = useState("")

  const statuses = ["Tümü", "Tamamlandı", "Devam Ediyor"]

  const filteredProjects = projects.filter((project) => {
    const statusMatch = selectedStatus === "Tümü" || project.status === selectedStatus
    const searchMatch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return statusMatch && searchMatch
  })

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Projelerimiz</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gerçekleştirdiğimiz başarılı projeleri ve tasarımları keşfedin
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8 flex gap-2 max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3.5 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Proje ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Status Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedStatus === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-slate-100 text-foreground hover:bg-slate-200"
                }`}
              >
                {status} ({projects.filter((p) => status === "Tümü" || p.status === status).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Link href={`/projeler/${project.id}`} key={project.id}>
                  <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <div className="relative overflow-hidden h-64 bg-slate-200">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {project.category}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold text-center ${
                            project.status === "Tamamlandı" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                      <p className="text-foreground/70 mb-2 text-sm">{project.description}</p>
                      <p className="text-foreground/50 text-xs mb-4">Tarih: {project.date}</p>
                      <div className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm">
                        Detayları Gör
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">Arama kriterinize uygun proje bulunamadı.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Proje İstatistikleri</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Tamamlanan Proje" },
              { number: "50+", label: "Şehirde Hizmet" },
              { number: "15000+", label: "Memnun Müşteri" },
              { number: "98%", label: "Müşteri Memnuniyeti" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-lg text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Siz de Başarı Hikayesinin Parçası Olun</h2>
          <p className="text-lg mb-8 opacity-90">
            Projenizi bizimle gerçekleştirmek ve kaliteli hizmetimizden yararlanmak için bize ulaşın.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded font-semibold hover:opacity-90 transition-opacity"
          >
            İletişime Geç
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
