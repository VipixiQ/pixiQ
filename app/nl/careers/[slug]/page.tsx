import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Building2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { JobMeta, JobCard } from "@/components/cards/job-card"
import { fallbackJobsNl as fallbackJobs } from "@/lib/fallback-jobs-nl"

interface JobPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return fallbackJobs.map((job) => ({
    slug: job.slug,
  }))
}

async function getJobBySlug(slug: string) {
  return fallbackJobs.find((job) => job.slug === slug) || null
}

async function getJobs() {
  return fallbackJobs
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    return { title: "Vacature niet gevonden" }
  }

  return {
    title: `${job.title} - Vacatures`,
    description: job.excerpt || job.aboutRole || job.title,
  }
}

function renderParagraph(text?: string) {
  if (!text?.trim()) return null

  return <p className="text-muted-foreground leading-relaxed mb-4">{text}</p>
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const allJobs = await getJobs()
  const department = job.department || "General"

  const relatedJobs = allJobs
    .filter((j) => j.department === department && j.slug !== job.slug)
    .slice(0, 2)

  const responsibilities = job.responsibilities || []
  const requirements = job.profile || []
  const niceToHaves = job.niceToHave || []
  const whatWeOffer = job.offer || []

  return (
    <>
      <PageHeader className="pb-8 lg:pb-12">
        <div className="max-w-4xl">
          <Link
            href="/nl/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Alle vacatures
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
            {job.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {job.excerpt}
          </p>

          <JobMeta
            location={job.location}
            department={department}
            type={job.type}
            className="mb-8"
          />

          <Button
            asChild
            size="lg"
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
          >
            <a href="/nl/contact">
              Solliciteer voor deze functie
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </PageHeader>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            {job.aboutRole && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Over de functie
                </h2>
                <div>{renderParagraph(job.aboutRole)}</div>
              </div>
            )}

            {responsibilities.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Wat je zal doen
                </h2>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {requirements.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Wie we zoeken
                </h2>
                <ul className="space-y-3">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {niceToHaves.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Mooi meegenomen
                </h2>
                <ul className="space-y-3">
                  {niceToHaves.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pixiq-gradient flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {whatWeOffer.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Wat we bieden
                </h2>
                <ul className="space-y-3">
                  {whatWeOffer.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}