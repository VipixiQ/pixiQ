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
      <CareersHero />

      <WhyPixIQSection />

      <CultureValuesSection />

      <OpenPositionsSection jobs={jobs} />

      <SpontaneousApplicationSection />

      <CTASection
        headline="Klaar voor een gesprek?"
        description="Heb je vragen over een specifieke functie of wil je meer weten over werken bij pixiQ? We horen graag van je."
        primaryCTA={{ text: "Neem contact op", href: "/nl/contact" }}
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
            alt="Vacatures bij pixiQ"
            fill
            priority
            className="object-cover object-center opacity-80 scale-[1.02]"
          />
        </div>
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Vacatures bij pixiQ
          </p>

          <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[1.02] tracking-[-0.05em] text-black text-balance">
            Word deel van het{" "}
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
            Help mee digitale ervaringen creëren waar creativiteit, technologie
            en meetbare impact samenkomen.
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
                Bekijk vacatures
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
            Waarom pixiQ
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            Meer dan een werkplek
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bij pixiQ bouw je niet zomaar digitale ervaringen — je helpt
              organisaties hun communicatie echt te transformeren.
            </p>

            <p>
              We zijn een team van strategen, technologische experts en
              creatieve denkers die geloven dat technologie menselijke
              ervaringen moet versterken.
            </p>

            <p>
              Zoek je betekenisvol werk met echte impact, een team dat jouw
              expertise waardeert en ruimte om te groeien? Dan ben je hier op de
              juiste plek.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-sm text-muted-foreground">Teamleden</div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              9+
            </div>
            <div className="text-sm text-muted-foreground">Jaar ervaring</div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              75+
            </div>
            <div className="text-sm text-muted-foreground">
              Projecten opgeleverd
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <div className="text-4xl font-heading font-bold bg-pixiq-gradient bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">
              Landen bediend
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
      title: "Samenwerking",
      description:
        "We werken als één team en behalen samen uitzonderlijke resultaten.",
    },
    {
      icon: Heart,
      title: "Vertrouwen",
      description:
        "We bouwen relaties op transparantie, betrouwbaarheid en respect.",
    },
    {
      icon: Lightbulb,
      title: "Kennisgedreven",
      description:
        "We investeren in leren en delen expertise met elkaar.",
    },
    {
      icon: Target,
      title: "Optimalisatie",
      description:
        "We verbeteren continu processen, oplossingen en onszelf.",
    },
    {
      icon: Zap,
      title: "Innovatie",
      description:
        "We omarmen nieuwe ideeën die echte waarde creëren.",
    },
    {
      icon: Network,
      title: "Connected thinking",
      description:
        "We verbinden disciplines om geïntegreerde oplossingen te bouwen.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Onze cultuur"
        title="Hoe we samenwerken"
        description="De waarden die ons team, ons werk en onze relaties vormgeven."
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
        eyebrow="Openstaande vacatures"
        title="Vind jouw volgende uitdaging"
        description="Ontdek onze huidige vacatures en waar jouw expertise impact kan maken."
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
    <Section className="bg-muted/30">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
          Spontane sollicitatie
        </p>

        <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-6">
          Geen passende vacature?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          We maken graag kennis met talentvolle mensen, ook als er momenteel
          geen specifieke vacature openstaat.
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