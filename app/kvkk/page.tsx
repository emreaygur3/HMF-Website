import type { Metadata } from "next"
import { AcikRizaMetni, AydinlatmaMetni } from "@/components/legal/kvkk-texts"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { pageOpenGraph } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

const title = "KVKK Aydınlatma Metni"
const description = `${siteConfig.name} kişisel verilerin korunması ve işlenmesi hakkında aydınlatma metni ve açık rıza metni.`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/kvkk" },
  openGraph: pageOpenGraph({ title: `${title} | ${siteConfig.name}`, description, url: "/kvkk" }),
}

export default function KvkkPage() {
  return (
    <>
      <PageHero title="Kişisel Verilerin Korunması" subtitle="KVKK kapsamında aydınlatma metni ve açık rıza metni" />

      <Section size="4xl" className="pt-4 sm:pt-6">
        <article className="space-y-12">
          <section id="aydinlatma-metni" className="scroll-mt-28 rounded-xl border border-stone-200 p-6 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-stone-900">Aydınlatma Metni</h2>
            <AydinlatmaMetni />
          </section>
          <section id="acik-riza-metni" className="scroll-mt-28 rounded-xl border border-stone-200 p-6 sm:p-10">
            <h2 className="mb-6 text-2xl font-bold text-stone-900">Yurt Dışına Aktarım Açık Rıza Metni</h2>
            <AcikRizaMetni />
          </section>
        </article>
      </Section>
    </>
  )
}
