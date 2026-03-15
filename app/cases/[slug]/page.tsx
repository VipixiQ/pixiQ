import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { StatsBlock } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"
import { getCaseBySlug, getAllCaseSlugs } from "@/lib/data/cases"

interface CasePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)
  
  if (!caseStudy) {
    return { title: "Case Study Not Found" }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
  }
}

/**
 * Case Detail Page Template
 * Reusable template for all case study pages
 * Future: Add CMS integration, gallery, video support
 */
export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const caseStudy = getCaseBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <PageHeader className="pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <Link 
            href="/cases"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            All Cases
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-pixiq-gradient text-white">
              {caseStudy.industry}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {caseStudy.excerpt}
          </p>
        </div>
      </PageHeader>

      {/* Visual Gallery Placeholder */}
      <Section className="pt-0 pb-12">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-muted relative">
          <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
          <div className="absolute inset-12 rounded-xl border border-pixiq-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 rounded-full bg-pixiq-gradient opacity-15 blur-3xl" />
          </div>
          {/* Placeholder text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-muted-foreground">Project imagery</span>
          </div>
        </div>
      </Section>

      {/* KPIs */}
      <Section className="bg-pixiq-black text-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <StatsBlock stats={caseStudy.kpis} columns={4} />
        </div>
      </Section>

      {/* Challenge */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="The Challenge"
            title="Understanding the problem"
          />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="Our Approach"
            title="Designing the solution"
          />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {caseStudy.approach}
          </p>
        </div>
      </Section>

      {/* Result */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionIntro
            eyebrow="The Result"
            title="Measurable impact"
          />
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            {caseStudy.result}
          </p>
          
          {/* Related Solution Link */}
          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Related Solution</p>
            <Link 
              href={caseStudy.relatedSolution.href}
              className="inline-flex items-center text-lg font-medium text-pixiq-primary hover:underline"
            >
              {caseStudy.relatedSolution.title}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Let's create yours"
        description="Ready to achieve similar results for your organization?"
        primaryCTA={{ text: "Book Meeting", href: "/contact" }}
        secondaryCTA={{ text: "Explore solutions", href: "/solutions" }}
        variant="dark"
      />
    </>
  )
}
