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
import { solutions, getSolutionBySlug, getAllSolutionSlugs } from "@/lib/data/solutions"

interface SolutionPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  
  if (!solution) {
    return { title: "Solution Not Found" }
  }

  return {
    title: solution.title,
    description: solution.description,
  }
}

/**
 * Solution Detail Page Template
 * Reusable template for all solution pages
 * Future: Add CMS integration, dynamic content blocks
 */
export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)

  if (!solution) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <PageHeader className="pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <Link 
            href="/solutions"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            All Solutions
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            {solution.title}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {solution.heroDescription}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
            >
              <Link href="/contact">
                Request consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5 font-medium px-8"
            >
              <Link href="/cases">
                View related cases
              </Link>
            </Button>
          </div>
        </div>
      </PageHeader>

      {/* Key Pillars */}
      <PillarsSection pillars={solution.pillars} />

      {/* Strategic Content */}
      <StrategicSection content={solution.strategicContent} />

      {/* KPIs */}
      <KPISection kpis={solution.kpis} />

      {/* Related Cases */}
      <RelatedCasesSection cases={solution.relatedCases} />

      {/* CTA */}
      <CTASection
        headline="Ready to explore this solution?"
        description="Let's discuss how we can help transform your digital experience."
        primaryCTA={{ text: "Book Meeting", href: "/contact" }}
        secondaryCTA={{ text: "Request ROI Analysis", href: "/contact" }}
        variant="dark"
      />
    </>
  )
}

function PillarsSection({ pillars }: { pillars: { title: string; description: string }[] }) {
  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Key capabilities"
        title="What's included"
        description="A comprehensive solution designed for measurable impact."
        align="center"
      />
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <div 
            key={index}
            className="p-8 rounded-xl bg-card border border-border"
          >
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

function StrategicSection({ content }: { content: { title: string; description: string; points: string[] } }) {
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
          <Button
            asChild
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium"
          >
            <Link href="/contact">
              Discuss your needs
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

function KPISection({ kpis }: { kpis: { value: string; label: string; description?: string }[] }) {
  return (
    <Section className="bg-pixiq-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading text-white mb-4">
          Measurable impact
        </h2>
        <p className="text-white/70">
          Real results from our solution implementations.
        </p>
      </div>
      <StatsBlock stats={kpis} />
    </Section>
  )
}

function RelatedCasesSection({ cases }: { cases: { title: string; excerpt: string; href: string; kpiValue?: string; kpiLabel?: string; industry?: string }[] }) {
  if (cases.length === 0) return null

  return (
    <Section>
      <SectionIntro
        eyebrow="Case studies"
        title="See this solution in action"
        description="Real-world implementations delivering measurable results."
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
