import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Building2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { JobMeta } from "@/components/cards/job-card"
import { JobCard } from "@/components/cards/job-card"
import { getJobBySlug, getAllJobSlugs, jobs } from "@/lib/data/jobs"

interface JobPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = getJobBySlug(slug)
  
  if (!job) {
    return { title: "Job Not Found" }
  }

  return {
    title: `${job.title} - Careers`,
    description: job.excerpt,
  }
}

/**
 * Job Detail Page Template
 * Comprehensive job listing with apply functionality
 * Future: Add ATS integration, application form, video content
 */
export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = getJobBySlug(slug)

  if (!job) {
    notFound()
  }

  // Get related jobs (same department, excluding current)
  const relatedJobs = jobs
    .filter((j) => j.department === job.department && j.slug !== job.slug)
    .slice(0, 2)

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
            {job.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {job.intro}
          </p>

          <JobMeta
            location={job.location}
            department={job.department}
            type={job.type}
            className="mb-8"
          />
          
          <Button
            asChild
            size="lg"
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
          >
            <Link href="/contact">
              Apply for this position
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </PageHeader>

      {/* Content Grid with Sticky Apply */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About the Role */}
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-4">
                About the role
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.aboutRole}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-4">
                What you&apos;ll do
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-4">
                What we&apos;re looking for
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Haves */}
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-4">
                Nice to have
              </h2>
              <ul className="space-y-3">
                {job.niceToHaves.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pixiq-gradient flex-shrink-0 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-2xl font-heading text-foreground mb-4">
                What we offer
              </h2>
              <ul className="space-y-3">
                {job.whatWeOffer.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Note */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="text-lg font-heading text-foreground mb-3">
                About the team
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {job.teamNote}
              </p>
            </div>
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
                  <Link href="/contact">
                    Apply now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Quick Info */}
              <div className="p-6 rounded-xl bg-muted/50 border border-border space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-pixiq-secondary flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">{job.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground">Department</div>
                    <div className="font-medium text-foreground">{job.department}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-pixiq-secondary flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground">Type</div>
                    <div className="font-medium text-foreground">{job.type}</div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="text-center p-6">
                <p className="text-sm text-muted-foreground mb-2">Questions?</p>
                <a 
                  href="mailto:careers@pixiq.com"
                  className="text-sm font-medium text-pixiq-primary hover:underline"
                >
                  careers@pixiq.com
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
            {relatedJobs.map((relatedJob) => (
              <JobCard
                key={relatedJob.slug}
                title={relatedJob.title}
                location={relatedJob.location}
                department={relatedJob.department}
                type={relatedJob.type}
                excerpt={relatedJob.excerpt}
                href={`/careers/${relatedJob.slug}`}
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
