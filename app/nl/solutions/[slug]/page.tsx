import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { CaseCard } from "@/components/cards/case-card"
import { StatsBlock } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"
import { getAllSolutionSlugs, getSolutionBySlug } from "@/lib/data/solutions"

interface SolutionPageProps {
  params: Promise<{ slug: string }>
}

const nlSolutions: Record<string, any> = {
  "digital-signage-as-a-service": {
    title: "Digital Signage as a Service",
    heroDescription:
      "Van losse displays tot volledige netwerken: wij leveren turnkey digital signage oplossingen die uw communicatie versterken en uw doelgroep activeren.",
    pillars: [
      {
        title: "Hardware & Infrastructuur",
        description:
          "Professionele displays, mediaspelers en montagematerialen, zorgvuldig geselecteerd en geconfigureerd voor uw omgeving en toepassing.",
      },
      {
        title: "Content Management Platform",
        description:
          "Gebruiksvriendelijk cloudgebaseerd CMS met planning, targeting en realtime updates. Beheer content op alle locaties vanuit één dashboard.",
      },
      {
        title: "Analytics & Rapportering",
        description:
          "Duidelijke inzichten in engagement, contentprestaties en ROI. Neem datagedreven beslissingen om uw communicatie te optimaliseren.",
      },
      {
        title: "Managed Services",
        description:
          "Proactieve monitoring, onderhoud en support inbegrepen. Wij beheren de technologie zodat u zich kunt focussen op uw boodschap.",
      },
    ],
    strategicContent: {
      title: "Een strategische aanpak voor visuele communicatie",
      description:
        "Digital signage is meer dan displays aan de muur. Het is een krachtig communicatiekanaal dat, wanneer strategisch ingezet, meetbare bedrijfsresultaten oplevert.",
      points: [
        "Vergroot merkbekendheid en herkenning",
        "Stimuleer verkoop en promotionele impact",
        "Verbeter klantbeleving en engagement",
        "Verkort de ervaren wachttijd",
        "Versterk interne communicatie",
        "Creëer meeslepende merkervaringen",
      ],
    },
  },

  experience: {
    title: "AV & Experience Integration",
    heroDescription:
      "Wij ontwerpen en realiseren audiovisuele belevingen die veranderen hoe mensen ruimtes ervaren en gebruiken, van bedrijfsomgevingen tot publieke locaties.",
    pillars: [
      {
        title: "Experience Design",
        description:
          "Mensgericht ontwerp met aandacht voor akoestiek, zichtlijnen, verlichting en gebruikersstromen voor een sterke totaalbeleving.",
      },
      {
        title: "AV Systeemintegratie",
        description:
          "Vakkundige integratie van displays, audiosystemen, verlichting en sturing in gebruiksvriendelijke totaaloplossingen.",
      },
      {
        title: "Interactieve Technologieën",
        description:
          "Touchdisplays, gesture control, AR/VR-belevingen en sensorgestuurde interacties die doelgroepen activeren.",
      },
      {
        title: "Controle & Automatisatie",
        description:
          "Slimme automatisatie die het beheer vereenvoudigt en zorgt voor consistente ervaringen op elk contactpunt.",
      },
    ],
    strategicContent: {
      title: "Onvergetelijke ervaringen creëren met technologie",
      description:
        "De juiste audiovisuele beleving verandert hoe mensen uw merk ervaren, met uw content interageren en hun bezoek herinneren.",
      points: [
        "Meeslepende merkbelevingen",
        "Interactieve klantervaringen",
        "Samenwerkende vergaderruimtes",
        "Oplossingen voor events en presentaties",
        "Wayfinding- en informatiesystemen",
        "Belevingsgerichte retailinstallaties",
      ],
    },
  },

  data: {
    title: "Content & Data Intelligence",
    heroDescription:
      "Ons intelligence platform combineert publieksanalyse, contentoptimalisatie en realtime rapportering om de impact van elke boodschap te maximaliseren.",
    pillars: [
      {
        title: "Audience Analytics",
        description:
          "Begrijp wie met uw content interageert, wanneer en hoe. Anonieme publieksmetingen leveren bruikbare inzichten op.",
      },
      {
        title: "Content Optimalisatie",
        description:
          "Datagedreven contentstrategieën die inspelen op doelgroepgedrag, tijdstip, weer en andere contextuele factoren.",
      },
      {
        title: "Realtime Rapportering",
        description:
          "Live dashboards en geautomatiseerde rapporten die prestaties en ROI opvolgen over alle kanalen en locaties.",
      },
      {
        title: "Integratie & API",
        description:
          "Koppel uw contentsystemen met bestaande databronnen, CRM-platformen en business intelligence tools.",
      },
    ],
    strategicContent: {
      title: "Intelligence die resultaten oplevert",
      description:
        "Content zonder data is giswerk. Ons intelligence platform zorgt ervoor dat elke boodschap geoptimaliseerd wordt voor maximale impact.",
      points: [
        "Analyse van doelgroepgedrag",
        "Opvolging van contentprestaties",
        "A/B-testing en optimalisatie",
        "Voorspellende contentplanning",
        "ROI-meting en attributie",
        "Cross-channel analytics",
      ],
    },
  },

  consultancy: {
    title: "Consultancy & Strategy",
    heroDescription:
      "Van technologieroadmaps tot ROI-analyses: wij helpen u navigeren in het complexe landschap van digitale belevingstechnologie.",
  },
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params
  const baseSolution = getSolutionBySlug(slug)
  const nlSolution = nlSolutions[slug]

  if (!baseSolution) {
    return { title: "Oplossing niet gevonden" }
  }

  return {
    title: nlSolution?.title || baseSolution.title,
    description: nlSolution?.heroDescription || baseSolution.description,
  }
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params
  const baseSolution = getSolutionBySlug(slug)
  const nlSolution = nlSolutions[slug]

  if (!baseSolution) {
    notFound()
  }

  const solution = {
    ...baseSolution,
    ...nlSolution,
    pillars: nlSolution?.pillars || baseSolution.pillars,
    strategicContent: nlSolution?.strategicContent || baseSolution.strategicContent,
  }

  return (
    <>
      <PageHeader className="pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <Link
            href="/nl/solutions"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            Alle oplossingen
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            {solution.title}
          </h1>

          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {solution.heroDescription}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
            >
              <Link href="/nl/contact">
                Vraag advies aan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5 font-medium px-8"
            >
              <Link href="/nl/cases">Bekijk cases</Link>
            </Button>
          </div>
        </div>
      </PageHeader>

      <PillarsSection pillars={solution.pillars} />

      <StrategicSection content={solution.strategicContent} />

      <KPISection kpis={solution.kpis} />

      <RelatedCasesSection cases={solution.relatedCases} />

      <CTASection
        headline="Klaar om deze oplossing te verkennen?"
        description="Laten we bespreken hoe we uw digitale beleving kunnen versterken."
        primaryCTA={{ text: "Boek een meeting", href: "/nl/contact" }}
        secondaryCTA={{ text: "Vraag ROI-analyse aan", href: "/nl/contact" }}
        variant="gradient"
      />
    </>
  )
}

function PillarsSection({ pillars }: { pillars: { title: string; description: string }[] }) {
  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Belangrijkste mogelijkheden"
        title="Wat is inbegrepen"
        description="Een totaaloplossing ontworpen voor meetbare impact."
        align="center"
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {pillars.map((pillar, index) => (
          <div key={index} className="p-8 rounded-xl bg-card border border-border">
            <div className="w-12 h-12 rounded-lg bg-pixiq-gradient flex items-center justify-center text-white font-heading font-bold text-lg mb-6">
              {index + 1}
            </div>
            <h3 className="text-xl font-heading text-foreground mb-3">
              {pillar.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function StrategicSection({
  content,
}: {
  content: { title: string; description: string; points: string[] }
}) {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            {content.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {content.description}
          </p>

          <Button
            asChild
            className="bg-pixiq-gradient hover:opacity-90 text-white font-medium"
          >
            <Link href="/nl/contact">
              Bespreek uw noden
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="space-y-4">
          {content.points.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
              <CheckCircle2 className="h-5 w-5 text-pixiq-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function KPISection({ kpis }: { kpis: { value: string; label: string; description?: string }[] }) {
  return (
    <Section className="bg-pixiq-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-heading text-white mb-4">
          Meetbare impact
        </h2>
        <p className="text-white/70">
          Echte resultaten uit onze implementaties.
        </p>
      </div>
      <StatsBlock stats={kpis} />
    </Section>
  )
}

function RelatedCasesSection({
  cases,
}: {
  cases: {
    title: string
    excerpt: string
    href: string
    kpiValue?: string
    kpiLabel?: string
    industry?: string
  }[]
}) {
  if (cases.length === 0) return null

  return (
    <Section>
      <SectionIntro
        eyebrow="Cases"
        title="Bekijk deze oplossing in de praktijk"
        description="Praktijkvoorbeelden met meetbare resultaten."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((caseItem, index) => (
          <CaseCard
            key={index}
            title={caseItem.title}
            excerpt={caseItem.excerpt}
            href={caseItem.href.replace("/cases", "/nl/cases")}
            kpiValue={caseItem.kpiValue}
            kpiLabel={caseItem.kpiLabel}
            industry={caseItem.industry}
          />
        ))}
      </div>
    </Section>
  )
}