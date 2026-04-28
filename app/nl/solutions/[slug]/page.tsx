import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { CaseCard } from "@/components/cards/case-card"
import { StatsBlock } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"
import {
  getAllSolutionNlSlugs,
  getSolutionNlBySlug,
} from "@/lib/data/solutions-nl"

interface SolutionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSolutionNlSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionNlBySlug(slug)

  if (!solution) {
    return { title: "Oplossing niet gevonden" }
  }

  return {
    title: solution.title,
    description: solution.description,
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params
  const solution = getSolutionNlBySlug(slug)

  if (!solution) {
    notFound()
  }

  return (
    <>
      <PageHeader className="pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <Link
            href="/nl/solutions"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Alle oplossingen
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            {solution.title}
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {solution.heroDescription}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8">
              <Link href="/nl/contact">
                Vraag advies aan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5 font-medium px-8">
              <Link href="/nl/cases">Bekijk cases</Link>
            </Button>
          </div>
        </div>
      </PageHeader>

      <PillarsSection pillars={solution.pillars} />
      <StrategicSection content={solution.strategicContent} />
      <KPISection kpis={solution.kpis} />
      <RelatedCasesSection cases={solution.relatedCases} />

      <CTASection
        headline="Klaar om deze oplossing te verkennen?"
        description="Laten we bespreken hoe we uw digitale beleving kunnen versterken."
        primaryCTA={{ text: "Boek een meeting", href: "/nl/contact" }}
        secondaryCTA={{ text: "Vraag ROI-analyse aan", href: "/nl/contact" }}
        variant="gradient"
      />
    </>
  )
}

function PillarsSection({
  pillars,
}: {
  pillars: { title: string; description: string }[]
}) {
  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Belangrijkste mogelijkheden"
        title="Wat is inbegrepen"
        description="Een totaaloplossing ontworpen voor meetbare impact."
        align="center"
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <div key={index} className="p-8 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-pixiq-gradient flex items-center justify-center text-white font-heading font-bold text-lg mb-6">
              {index + 1}
            </div>
            <h3 className="text-xl font-heading text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function StrategicSection({
  content,
}: {
  content: { title: string; description: string; points: string[] }
}) {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {content.description}
          </p>

          <Button asChild className="bg-pixiq-gradient hover:opacity-90 text-white font-medium">
            <Link href="/nl/contact">
              Bespreek uw noden
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          {content.points.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function KPISection({
  kpis,
}: {
  kpis: { value: string; label: string; description?: string }[]
}) {
  return (
    <Section className="bg-pixiq-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading text-white mb-4">
          Meetbare impact
        </h2>
        <p className="text-white/70">
          Echte resultaten uit onze implementaties.
        </p>
      </div>
      <StatsBlock stats={kpis} />
    </Section>
  )
}

function RelatedCasesSection({
  cases,
}: {
  cases: {
    title: string
    excerpt: string
    href: string
    kpiValue?: string
    kpiLabel?: string
    industry?: string
  }[]
}) {
  if (!cases || cases.length === 0) return null

  return (
    <Section>
      <SectionIntro
        eyebrow="Cases"
        title="Bekijk deze oplossing in de praktijk"
        description="Praktijkvoorbeelden met meetbare resultaten."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((caseItem, index) => (
          <CaseCard
            key={index}
            title={caseItem.title}
            excerpt={caseItem.excerpt}
            href={caseItem.href}
            kpiValue={caseItem.kpiValue}
            kpiLabel={caseItem.kpiLabel}
            industry={caseItem.industry}
          />
        ))}
      </div>
    </Section>
  )
}