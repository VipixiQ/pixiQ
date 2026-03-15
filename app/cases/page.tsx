import type { Metadata } from "next"
import { Section, PageHeader } from "@/components/layout/section"
import { CaseCard } from "@/components/cards/case-card"
import { CTASection } from "@/components/sections/cta-section"
import { cases, industries } from "@/lib/data/cases"
import { CaseFilters } from "./case-filters"

export const metadata: Metadata = {
  title: "Cases",
  description: "Explore our portfolio of digital experience projects and the measurable results we've delivered for clients across industries.",
}

/**
 * Cases Overview Page
 * Portfolio of case studies with filtering
 * Future: Add CMS integration, search, pagination
 */
export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            We measure what we{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              create.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every project we undertake is designed to deliver measurable business outcomes. Explore how we&apos;ve helped organizations transform their digital experiences.
          </p>
        </div>
      </PageHeader>

      {/* Filters & Grid */}
      <Section className="pt-0">
        {/* Filter UI - Frontend only mock filters */}
        <CaseFilters industries={industries} />
        
        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((caseItem) => (
            <CaseCard
              key={caseItem.slug}
              title={caseItem.title}
              excerpt={caseItem.excerpt}
              href={`/cases/${caseItem.slug}`}
              kpiValue={caseItem.kpis[0]?.value}
              kpiLabel={caseItem.kpis[0]?.label}
              industry={caseItem.industry}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to create your success story?"
        description="Let's discuss how we can help you achieve measurable results."
        primaryCTA={{ text: "Start a conversation", href: "/contact" }}
        secondaryCTA={{ text: "Explore solutions", href: "/solutions" }}
        variant="gradient"
      />
    </>
  )
}
