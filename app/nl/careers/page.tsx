import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Users, Lightbulb, Target, Heart, Zap, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { JobCard } from "@/components/cards/job-card"
import { ValuePillar } from "@/components/blocks/value-blocks"
import { CTASection } from "@/components/sections/cta-section"
import { fallbackJobsNl as fallbackJobs } from "@/lib/fallback-jobs-nl"

export const metadata: Metadata = {
  title: "Vacatures",
  description:
    "Word deel van het pixiQ-team en help mee digitale ervaringen creëren waar creativiteit, technologie en meetbare impact samenkomen.",
}

async function getJobs() {
  return fallbackJobs
}

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

      {/* Spontane sollicitatie */}
      <SpontaneousApplicationSection />

      {/* Blauwe CTA */}
      <CTASection
        headline="Klaar voor een gesprek?"
        description="Heb je vragen over een specifieke functie of wil je meer weten over werken bij pixiQ? We horen graag van je."
        primaryCTA={{ text: "Neem contact op", href: "/nl/contact" }}
        secondaryCTA={{ text: "Email hello@pixiq.eu", href: "mailto:hello@pixiq.eu" }}
        variant="gradient"
      />
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
            Vacatures bij pixiQ
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight mb-8 text-balance">
            Word deel van het{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              pixiQ team
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty">
            Help mee digitale ervaringen creëren waar creativiteit, technologie en meetbare impact samenkomen.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8 h-14 text-base"
          >
            <a href="#positions">
              Bekijk vacatures
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
            Waarom pixiQ
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            Meer dan een werkplek
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bij pixiQ bouw je niet zomaar digitale ervaringen — je helpt organisaties hun communicatie echt te transformeren.
            </p>

            <p>
              We zijn een team van strategen, technologische experts en creatieve denkers die geloven dat technologie menselijke ervaringen moet versterken.
            </p>

            <p>
              Zoek je betekenisvol werk met echte impact, een team dat jouw expertise waardeert en ruimte om te groeien? Dan ben je hier op de juiste plek.
            </p>
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
      title: "Samenwerking",
      description: "We werken als één team en behalen samen uitzonderlijke resultaten.",
    },
    {
      icon: Heart,
      title: "Vertrouwen",
      description: "We bouwen relaties op transparantie, betrouwbaarheid en respect.",
    },
    {
      icon: Lightbulb,
      title: "Kennisgedreven",
      description: "We investeren in leren en delen expertise met elkaar.",
    },
    {
      icon: Target,
      title: "Optimalisatie",
      description: "We verbeteren continu processen, oplossingen en onszelf.",
    },
    {
      icon: Zap,
      title: "Innovatie",
      description: "We omarmen nieuwe ideeën die echte waarde creëren.",
    },
    {
      icon: Network,
      title: "Connected thinking",
      description: "We verbinden disciplines om geïntegreerde oplossingen te bouwen.",
    },
  ]

  return (
    <Section>
      <SectionIntro
        eyebrow="Cultuur & Waarden"
        title="Waar we in geloven"
        description="Onze waarden bepalen hoe we werken, samenwerken en beslissingen nemen."
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
        eyebrow="Openstaande vacatures"
        title="Vind jouw volgende uitdaging"
        description="Bekijk onze openstaande functies of stuur een spontane sollicitatie."
      />

      <div className="space-y-4">
        {(jobs || []).map((job: any) => (
          <JobCard
            key={String(job.slug || "")}
            title={String(job.title || "")}
            location={String(job.location || "")}
            department={String(job.department || "Algemeen")}
            type={String(job.type || "")}
            excerpt={String(job.excerpt || "")}
            href={`/nl/careers/${String(job.slug || "")}`}
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
          Geen passende vacature?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We maken graag kennis met talentvolle mensen, ook als er momenteel geen specifieke vacature openstaat.
        </p>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5 font-medium px-8"
        >
          <Link href="/nl/contact">
            Stuur spontane sollicitatie
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}