import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Layers, BarChart3, Workflow, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { SolutionCard } from "@/components/cards/solution-card"
import { CaseCardFeatured } from "@/components/cards/case-card"
import { ValuePillar } from "@/components/blocks/value-blocks"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <SolutionsSection />
      <FeaturedCaseSection />
      <AboutTeaserSection />
    </>
  )
}

function HeroSection() {
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

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            background:
              "linear-gradient(to right, rgba(247,248,250,1) 0%, rgba(247,248,250,0.96) 16%, rgba(247,248,250,0.86) 30%, rgba(247,248,250,0.64) 44%, rgba(247,248,250,0.34) 58%, rgba(247,248,250,0.10) 72%, rgba(247,248,250,0.00) 84%)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-[44%] right-0 hidden lg:block">
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
            src="/pictures/Toerisme-Oostende2.jpg"
            alt="Toerisme Oostende"
            fill
            priority
            className="object-cover object-[84%_center] opacity-72 scale-[1.02]"
          />
        </div>
      </div>

      <Container className="relative">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[1.02] tracking-[-0.05em] text-black text-balance">
            Visual impact.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #2c4d98 0%, #1698d5 100%)",
              }}
            >
              Measurable results.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563] sm:text-xl lg:text-[1.45rem]">
            Wij verbinden hardware, software, content en data tot één
            doelgerichte digitale beleving met meetbare impact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-md px-8 h-14 text-base font-semibold text-white hover:opacity-95 transition-all duration-200"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #2c4d98, #1698d5)",
              }}
            >
              <Link href="/nl/contact">
                Plan ROI-sessie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-md border-[#2c4d98]/20 px-8 text-base font-medium text-[#2c4d98] hover:bg-[#2c4d98]/5"
            >
              <Link href="/nl/solutions">Ontdek onze oplossingen</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WhatWeDoSection() {
  const pillars = [
    {
      icon: Network,
      title: "Geconnecteerde digitale ecosystemen",
      description:
        "Wij integreren hardware, software, content en data in één geheel dat naadloos samenwerkt binnen uw organisatie.",
    },
    {
      icon: BarChart3,
      title: "Meetbare impact",
      description:
        "Elke oplossing die we creëren is gebouwd om meetbare resultaten te leveren. Realtime analytics en rapportering geven helder inzicht in uw ROI.",
    },
    {
      icon: Workflow,
      title: "Schaalbare digitale infrastructuur",
      description:
        "Onze oplossingen groeien mee met uw onderneming. Van één locatie tot grootschalige uitrol bouwen we voor duurzame groei.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Wat we doen"
        title="Eén partner. Geconnecteerde oplossingen. Meetbare resultaten."
        description="pixiQ brengt hardware, software, content en data samen om geconnecteerde digitale ecosystemen te creëren met meetbare impact."
        align="center"
      />

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {pillars.map((pillar, index) => (
          <ValuePillar
            key={index}
            icon={pillar.icon}
            title={pillar.title}
            description={pillar.description}
            className="text-center"
          />
        ))}
      </div>
    </Section>
  )
}

function SolutionsSection() {
  const solutions = [
    {
      title: "Digital Signage as a Service",
      description:
        "End-to-end digital signage-oplossingen met hardware, software, content management en analytics in één geïntegreerd pakket.",
      href: "/nl/solutions/digital-signage-as-a-service",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "AV & Experience Integration",
      description:
        "Immersieve audiovisuele belevingen die ruimtes transformeren en doelgroepen engageren via slimme technologie-integratie.",
      href: "/nl/solutions/experience",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Content & Data Intelligence",
      description:
        "Datagedreven contentstrategieën die op het juiste moment de juiste boodschap brengen, ondersteund door realtime analytics.",
      href: "/nl/solutions/data",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Consultancy & Strategy",
      description:
        "Strategisch advies om uw digitale investeringen te optimaliseren en meetbare bedrijfsresultaten te maximaliseren.",
      href: "/nl/solutions/consultancy",
      icon: <Workflow className="h-6 w-6" />,
    },
  ]

  return (
    <Section>
      <SectionIntro
        eyebrow="Oplossingen"
        title="Van concept tot data: geïntegreerde digitale belevingen"
        description="Vier onderling verbonden oplossingsdomeinen die samenwerken om meetbare impact te creëren voor uw onderneming."
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
            href={solution.href}
            icon={solution.icon}
          />
        ))}
      </div>
    </Section>
  )
}

function FeaturedCaseSection() {
  return (
    <Section className="bg-muted/30">
      <div className="mb-10">
        <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-3">
          Uitgelicht project
        </p>

        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Digitale beleving in actie
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl">
          Ontdek hoe we digitale technologie inzetten om communicatie,
          bezoekersbeleving en flexibiliteit samen te brengen.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 overflow-hidden rounded-2xl border border-border bg-background">
        <div className="relative min-h-[320px] lg:min-h-[420px]">
          <Image
            src="/pictures/case-filou-oostende-hero.jpg"
            alt="Filou Oostende basketbalarena"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
              Sport & Entertainment
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-3">
            Filou Oostende
          </p>

          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-5">
            Een sterkere digitale bezoekersbeleving doorheen de arena
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Een geïntegreerde digital signage-oplossing in de supportersinkom
            en VIP-omgeving, waarbij indoor LED, interactieve displays en
            flexibel contentbeheer samen zorgen voor een dynamische en
            professionele bezoekerservaring.
          </p>

          <Link
            href="/nl/cases/filou-oostende"
            className="inline-flex items-center text-pixiq-primary font-medium hover:underline"
          >
            Bekijk de case
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button
          asChild
          variant="outline"
          className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5"
        >
          <Link href="/nl/cases">
            Bekijk alle projecten
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}

function AboutTeaserSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Over pixiQ
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            Een team toegewijd aan meetbare digitale impact
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Wij zijn een team van strategen, technologen en creatieve denkers,
            verenigd door één missie: organisaties helpen digitale belevingen
            te creëren die meetbare resultaten opleveren.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Met diepgaande expertise in digital signage, AV-integratie,
            contentstrategie en data-analyse bieden wij een uniek geïntegreerde
            aanpak voor elk project dat we realiseren.
          </p>

          <Button
            asChild
            variant="outline"
            className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5"
          >
            <Link href="/nl/about">
              Maak kennis met het team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/pictures/2-home-about-pixiq.png"
            alt="Over pixiQ"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </Section>
  )
}