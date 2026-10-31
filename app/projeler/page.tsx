import type { Metadata } from "next"
import { ProjectExplorer } from "@/components/projects/project-explorer"
import { CtaSection } from "@/components/ui/cta-section"
import { PageHero } from "@/components/ui/page-hero"
import { Section, SectionHeading } from "@/components/ui/section"
import { StatGrid } from "@/components/ui/stat-grid"
import { pageOpenGraph } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const title = "Projeler"
const description =
  "HMF Desen Yapı'nın İzmir ve çevresinde tamamladığı ve devam eden doğal taş, cephe kaplama ve peyzaj projeleri."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projeler" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/projeler" }),
}

export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Projelerimiz" subtitle="Gerçekleştirdiğimiz başarılı projeleri ve tasarımları keşfedin" />

      <ProjectExplorer />

      <Section>
        <SectionHeading title="Rakamlarla HMF" />
        <StatGrid />
      </Section>

      <CtaSection
        title="Siz de Başarı Hikayesinin Parçası Olun"
        text="Projenizi bizimle gerçekleştirmek ve kaliteli hizmetimizden yararlanmak için bize ulaşın."
      />
    </>
  )
}
