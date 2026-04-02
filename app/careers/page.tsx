import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Users, Lightbulb, Target, Heart, Zap, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { JobCard } from "@/components/cards/job-card"
import { ValuePillar } from "@/components/blocks/value-blocks"
import { fallbackJobs } from "@/lib/fallback-jobs"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the pixiQ team. Help us create digital experiences where creativity, technology and measurable impact come together.",
}

async function getJobs() {
  return fallbackJobs
}

/**
 * Careers Overview Page
 * IMPORTANT: This page is designed to be publishable early, before the full site
 * Future: Add ATS integration, job alerts, video content
 */
export default async function CareersPage() {
  const jobs = await getJobs()

  return (
    <>
      {/* Hero */}
      <CareersHero />

      {/* Why pixiQ */}
      <WhyPixIQSection />

      {/* Culture & Values */}
      <CultureValuesSection />

      {/* Open Positions */}
      <OpenPositionsSection jobs={jobs} />

      {/* Spontaneous Application */}
      <SpontaneousApplicationSection />

      {/* Contact CTA */}
      <ContactSection />
    </>
  )
}

function CareersHero() {
  return (
    <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-pixiq-secondary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-pixiq-primary/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-pixiq-gradient opacity-5 rounded-full blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Careers at pixiQ
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-8 text-balance">
            Join the{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              pixiQ team
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty">
            Help us create digital experiences where creativity, technology and measurable impact come together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8 h-14 text-base"
          >
            <a href="#positions">
              View open positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function WhyPixIQSection() {
  return (
    <Section className="bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Why pixiQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            More than a workplace
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At pixiQ, you won&apos;t just build digital experiences - you&apos;ll transform how organizations communicate with their audiences. Our work spans industries and continents, from retail giants to cultural institutions.
            </p>
            <p>
              We&apos;re a team of strategists, technologists, and creative thinkers who believe technology should serve human experiences. We tackle complex challenges, push boundaries, and celebrate wins together.
            </p>
            <p>
              If you&apos;re looking for meaningful work with real impact, a team that values your expertise, and opportunities to grow - you&apos;ve found your place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Team members</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">12+</div>
            <div className="text-sm text-muted-foreground">Years of growth</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Projects delivered</div>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Countries served</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function CultureValuesSection() {
  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as one team, supporting each other and our clients to achieve exceptional results together.",
    },
    {
      icon: Heart,
      title: "Trust",
      description: "We build relationships on transparency, reliability, and mutual respect - internally and externally.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge-driven",
      description: "We invest in learning, share expertise generously, and stay curious about new possibilities.",
    },
    {
      icon: Target,
      title: "Optimization",
      description: "We continuously improve - our processes, our solutions, and ourselves - never settling for good enough.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new ideas and technologies that create real value, not just novelty for its own sake.",
    },
    {
      icon: Network,
      title: "Connected thinking",
      description: "We see the bigger picture, connecting dots across disciplines to create integrated solutions.",
    },
  ]

  return (
    <Section>
      <SectionIntro
        eyebrow="Culture & Values"
        title="What we believe in"
        description="Our values aren't just words on a wall - they guide how we work, hire, and make decisions every day."
        align="center"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <ValuePillar
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
            className="text-center"
          />
        ))}
      </div>
    </Section>
  )
}

function OpenPositionsSection({ jobs }: { jobs: any[] }) {
  return (
    <Section className="bg-muted/30" id="positions">
      <SectionIntro
        eyebrow="Open Positions"
        title="Find your next opportunity"
        description="We're always looking for talented people to join our team. See what's available or send us a spontaneous application."
      />

      <div className="space-y-4">
        {(jobs || []).map((job: any) => (
          <JobCard
            key={String(job.slug || "")}
            title={String(job.title || "")}
            location={String(job.location || "")}
            department={String(job.department || "General")}
            type={String(job.type || "")}
            excerpt={String(job.excerpt || "")}
            href={`/careers/${String(job.slug || "")}`}
          />
        ))}
      </div>
    </Section>
  )
}

function SpontaneousApplicationSection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6">
          Don&apos;t see the right role?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We&apos;re always interested in meeting talented people, even if we don&apos;t have a specific opening right now. Send us your CV and tell us about yourself - we&apos;ll keep you in mind for future opportunities.
        </p>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5 font-medium px-8"
        >
          <Link href="/contact">
            Send spontaneous application
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}

function ContactSection() {
  return (
    <Section className="bg-pixiq-black text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 text-balance">
          Ready to start a conversation?
        </h2>
        <p className="text-lg text-white/70 mb-8 leading-relaxed">
          Whether you have questions about a specific role or want to learn more about life at pixiQ, we&apos;d love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-pixiq-primary hover:bg-white/90 font-medium px-8"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-medium px-8"
          >
            <a href="mailto:hello@pixiq.eu">
              Email hello@pixiq.eu
            </a>
          </Button>
        </div>
      </div>
    </Section>
  )
}