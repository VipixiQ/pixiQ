import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Users,
  Lightbulb,
  Target,
  Heart,
  Zap,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { JobCard } from "@/components/cards/job-card"
import { ValuePillar } from "@/components/blocks/value-blocks"
import { CTASection } from "@/components/sections/cta-section"
import { fallbackJobs } from "@/lib/fallback-jobs"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the pixiQ team. Help us create digital experiences where creativity, technology and measurable impact come together.",
}

async function getJobs() {
  return fallbackJobs
}

export default async function CareersPage() {
  const jobs = await getJobs()

  return (
    <>
      <CareersHero />

      <WhyPixIQSection />

      <CultureValuesSection />

      <OpenPositionsSection jobs={jobs} />

      <CTASection
        headline="Ready to start a conversation?"
        description="Whether you have questions about a specific role or want to learn more about life at pixiQ, we'd love to hear from you."
        primaryCTA={{ text: "Get in touch", href: "/contact" }}
        secondaryCTA={{
          text: "Email hello@pixiq.eu",
          href: "mailto:hello@pixiq.eu",
        }}
        variant="gradient"
      />
    </>
  )
}

function CareersHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-24 right-[-120px] h-[420px] w-[620px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(44,77,152,0.16) 0%, rgba(22,152,213,0.20) 100%)",
          }}
        />

        <div
          className="absolute top-[24%] -left-24 h-[280px] w-[280px] rounded-full blur-3xl"
          style={{ background: "rgba(44,77,152,0.08)" }}
        />

        <div
          className="absolute inset-x-0 top-0 h-[520px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 42%, rgba(22,152,213,0.04) 100%)",
            clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
          }}
        />
      </div>

      {/* Hero image */}
      <div className="pointer-events-none absolute inset-y-0 left-[47%] right-0 hidden lg:block">
        <div
          className="relative h-full w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.28) 16%, rgba(0,0,0,0.55) 26%, rgba(0,0,0,0.82) 38%, rgba(0,0,0,0.96) 52%, rgba(0,0,0,1) 68%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.28) 16%, rgba(0,0,0,0.55) 26%, rgba(0,0,0,0.82) 38%, rgba(0,0,0,0.96) 52%, rgba(0,0,0,1) 68%)",
          }}
        >
          <Image
            src="/pictures/9-careers-hero.png"
            alt="Careers at pixiQ"
            fill
            priority
            className="object-cover object-center opacity-80 scale-[1.02]"
          />
        </div>
      </div>

      {/* Hero content */}
      <Container className="relative">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Careers at pixiQ
          </p>

          <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[1.02] tracking-[-0.05em] text-black text-balance">
            Join the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2c4d98 0%, #1698d5 100%)",
              }}
            >
              pixiQ team.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563] sm:text-xl lg:text-[1.45rem]">
            Help us create digital experiences where creativity, technology
            and measurable impact come together.
          </p>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="rounded-md px-8 h-14 text-base font-semibold text-white hover:opacity-95 transition-all duration-200"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2c4d98, #1698d5)",
              }}
            >
              <a href="#positions">
                View open positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WhyPixIQSection() {
  return (
    <Section>
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
              At pixiQ, you won&apos;t just build digital experiences - you&apos;ll
              transform how organizations communicate with their audiences.
              Our work spans industries and continents, from retail giants to
              cultural institutions.
            </p>

            <p>
              We&apos;re a team of strategists, technologists, and creative
              thinkers who believe technology should serve human experiences.
              We tackle complex challenges, push boundaries, and celebrate wins
              together.
            </p>

            <p>
              If you&apos;re looking for meaningful work with real impact, a
              team that values your expertise, and opportunities to grow -
              you&apos;ve found your place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-sm text-muted-foreground">Team members</div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              9+
            </div>
            <div className="text-sm text-muted-foreground">Years of growth</div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              75+
            </div>
            <div className="text-sm text-muted-foreground">
              Projects delivered
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">
              Countries served
            </div>
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
      description:
        "We work as one team, supporting each other and our clients to achieve exceptional results together.",
    },
    {
      icon: Heart,
      title: "Trust",
      description:
        "We build relationships on transparency, reliability, and mutual respect - internally and externally.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge-driven",
      description:
        "We invest in learning, share expertise generously, and stay curious about new possibilities.",
    },
    {
      icon: Target,
      title: "Optimization",
      description:
        "We continuously improve - our processes, our solutions, and ourselves - never settling for good enough.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We embrace new ideas and technologies that create real value, not just novelty for its own sake.",
    },
    {
      icon: Network,
      title: "Connected thinking",
      description:
        "We see the bigger picture, connecting dots across disciplines to create integrated solutions.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Our culture"
        title="How we work together"
        description="The values that shape our team, our work and the relationships we build."
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
    <Section id="positions">
      <SectionIntro
        eyebrow="Open positions"
        title="Find your next opportunity"
        description="Explore our current vacancies and discover where your expertise could make an impact."
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