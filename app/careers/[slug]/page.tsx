import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Building2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { JobMeta } from "@/components/cards/job-card"
import { JobCard } from "@/components/cards/job-card"

interface JobPageProps {
  params: Promise<{ slug: string }>
}

async function getJobBySlug(slug: string) {
 const res = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/jobs?filters[Slug][$eq]=${encodeURIComponent(slug)}` ,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch job")
  }

  const data = await res.json()
  return data.data?.[0] || null
}

async function getJobs() {
  const res = await fetch("http://localhost:1337/api/jobs", {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch jobs")
  }

  const data = await res.json()
  return data.data || []
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    return { title: "Job Not Found" }
  }

  return {
    title: `${job.Title} - Careers`,
    description: job.summary || job.intro || job.Title,
  }
}

function renderRichTextParagraphs(content: any[] | undefined) {
  if (!Array.isArray(content)) return null

  return content.map((block, index) => {
    if (block.type === "paragraph") {
      const text = block.children?.map((child: any) => child.text || "").join("") ?? ""
      if (!text.trim()) return null

      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {text}
        </p>
      )
    }

    return null
  })
}

function richTextToList(content: any[] | undefined): string[] {
  if (!Array.isArray(content)) return []

  const items: string[] = []

  for (const block of content) {
    if (block.type === "list" && Array.isArray(block.children)) {
      for (const item of block.children) {
        const text = item.children?.map((child: any) => child.text || "").join("") ?? ""
        if (text.trim()) items.push(text)
      }
    }

    if (block.type === "paragraph") {
      const text = block.children?.map((child: any) => child.text || "").join("") ?? ""
      if (text.trim()) items.push(text)
    }
  }

  return items
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = await getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  const allJobs = await getJobs()

  const department = job.department || job.Department || "General"

  const relatedJobs = allJobs
    .filter((j: any) => (j.department || j.Department) === department && j.Slug !== job.Slug)
    .slice(0, 2)

  const responsibilities = richTextToList(job.whatYoullDo)
  const requirements = richTextToList(job.whatWereLookingFor)
  const niceToHaves = richTextToList(job.niceToHave)
  const whatWeOffer = richTextToList(job.whatWeOffer)

  return (
    <>
      {/* Hero */}
      <PageHeader className="pb-8 lg:pb-12">
        <div className="max-w-4xl">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            All positions
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
            {job.Title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {job.intro || job.summary}
          </p>

          <JobMeta
            location={job.Location}
            department={department}
            type={job.employmentType}
            className="mb-8"
          />

          <Button
            asChild
            size="lg"
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
          >
            <a href={job.applyUrl || "/contact"}>
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </PageHeader>

      {/* Content Grid with Sticky Apply */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About the Role */}
            {job.aboutRole && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  About the role
                </h2>
                <div>{renderRichTextParagraphs(job.aboutRole)}</div>
              </div>
            )}

            {/* Responsibilities */}
            {responsibilities.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  What you&apos;ll do
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

            {/* Requirements */}
            {requirements.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  What we&apos;re looking for
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

            {/* Nice to Haves */}
            {niceToHaves.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  Nice to have
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

            {/* What We Offer */}
            {whatWeOffer.length > 0 && (
              <div>
                <h2 className="text-2xl font-heading text-foreground mb-4">
                  What we offer
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

            {/* Team Note */}
            {job.teamNote && (
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <h3 className="text-lg font-heading text-foreground mb-3">
                  About the team
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {job.teamNote}
                </p>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Apply Card */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-lg font-heading text-foreground mb-4">
                  Interested?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Apply now and we&apos;ll get back to you within 5 business days.
                </p>
                <Button
                  asChild
                  className="w-full bg-pixiq-gradient hover:opacity-90 text-white font-medium"
                >
                  <a href={job.applyUrl || "/contact"}>
                    Apply now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
                {job.Location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-pixiq-secondary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium text-foreground">{job.Location}</div>
                    </div>
                  </div>
                )}

                {department && (
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Department</div>
                      <div className="font-medium text-foreground">{department}</div>
                    </div>
                  </div>
                )}

                {job.employmentType && (
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-pixiq-secondary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Type</div>
                      <div className="font-medium text-foreground">{job.employmentType}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact */}
              <div className="text-center p-6">
                <p className="text-sm text-muted-foreground mb-2">Questions?</p>
                <a
                  href="mailto:hello@pixiq.eu"
                  className="text-sm font-medium text-pixiq-primary hover:underline"
                >
                  hello@pixiq.eu
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <Section className="bg-muted/30">
          <SectionIntro
            eyebrow="Related Positions"
            title="Other roles you might like"
          />
          <div className="space-y-4">
            {relatedJobs.map((relatedJob: any) => (
              <JobCard
                key={relatedJob.Slug}
                title={relatedJob.Title}
                location={relatedJob.Location}
                department={relatedJob.department || relatedJob.Department || "General"}
                type={relatedJob.employmentType}
                excerpt={relatedJob.summary || relatedJob.intro || ""}
                href={`/careers/${relatedJob.Slug}`}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5"
            >
              <Link href="/careers">
                View all positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}
    </>
  )
}