import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { StatsBlock } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"
import {
  getCaseBySlugNL,
  getAllCaseSlugsNL,
} from "@/lib/data/cases-nl"

interface CasePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseSlugsNL().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseBySlugNL(slug)

  if (!caseStudy) {
    return {
      title: "Case niet gevonden",
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const caseStudy = getCaseBySlugNL(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <PageHeader>
        <div className="max-w-4xl">
          <Link
            href="/nl/cases"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-pixiq-primary transition-colors mb-6"
          >
            ← Alle cases
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

      {/* Project Hero Image */}
      <Section className="pt-0 pb-12">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-muted relative">
          {caseStudy.imageSrc ? (
            <Image
              src={caseStudy.imageSrc}
              alt={`${caseStudy.title} project`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
              <div className="absolute inset-12 rounded-xl border border-pixiq-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">
                  Projectafbeelding
                </span>
              </div>
            </>
          )}
        </div>
      </Section>

      {/* KPIs */}
      {caseStudy.kpis.length > 0 && (
        <Section className="bg-pixiq-black text-white py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <StatsBlock stats={caseStudy.kpis} columns={4} />
          </div>
        </Section>
      )}

      {/* Challenge */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionIntro
              eyebrow="De uitdaging"
              title="De uitdaging begrijpen"
            />

            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          {caseStudy.challengeImage && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={caseStudy.challengeImage}
                alt={`${caseStudy.title} uitdaging`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {caseStudy.approachImage && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
              <Image
                src={caseStudy.approachImage}
                alt={`${caseStudy.title} aanpak`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}

          <div className="order-1 lg:order-2">
            <SectionIntro
              eyebrow="Onze aanpak"
              title="De oplossing uitwerken"
            />

            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.approach}
            </p>
          </div>
        </div>
      </Section>

      {/* Project Gallery */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <Section>
          <div className="mb-10">
            <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
              Projectgalerij
            </p>

            <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight">
              Een blik achter de schermen
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative min-h-[420px] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={caseStudy.galleryImages[0]}
                alt={`${caseStudy.title} galerijbeeld 1`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="grid gap-6">
              {caseStudy.galleryImages[1] && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={caseStudy.galleryImages[1]}
                    alt={`${caseStudy.title} galerijbeeld 2`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}

              {caseStudy.galleryImages[2] && (
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={caseStudy.galleryImages[2]}
                    alt={`${caseStudy.title} galerijbeeld 3`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Result */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionIntro
              eyebrow="Het resultaat"
              title="Meetbare impact"
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {caseStudy.result}
            </p>

            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground mb-2">
                Gerelateerde oplossing
              </p>

              <Link
                href={caseStudy.relatedSolution.href}
                className="inline-flex items-center text-lg font-medium text-pixiq-primary hover:underline"
              >
                {caseStudy.relatedSolution.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {caseStudy.resultImage && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={caseStudy.resultImage}
                alt={`${caseStudy.title} resultaat`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Laten we uw project realiseren"
        description="Klaar om een gelijkaardige impact te creëren voor uw organisatie?"
        primaryCTA={{ text: "Plan een gesprek", href: "/nl/contact" }}
        secondaryCTA={{
          text: "Ontdek onze oplossingen",
          href: "/nl/solutions",
        }}
        variant="dark"
      />
    </>
  )
}