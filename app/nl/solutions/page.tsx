import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Layers, BarChart3, Workflow, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { SolutionCardLarge } from "@/components/cards/solution-card"
import { CaseCard } from "@/components/cards/case-card"
import { ProcessStep } from "@/components/blocks/value-blocks"
import { StatsBlockBordered } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Oplossingen",
  description:
    "Van digital signage tot data intelligence: ontdek hoe pixiQ geconnecteerde digitale ecosystemen creëert met meetbare impact.",
}

export default function SolutionsPage() {
  return (
    <>
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Oplossingen
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            Van concept tot data:{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              één partner, meetbare resultaten.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Wij brengen hardware, software, content en data samen in geïntegreerde oplossingen die aantoonbare bedrijfsresultaten opleveren.
          </p>
        </div>
      </PageHeader>

      <SolutionsGridSection />
      <MethodologySection />
      <TrustSection />
      <CaseTeaserSection />

      <CTASection
        headline="Klaar om uw project te bespreken?"
        description="Laten we bekijken hoe onze oplossingen meetbare impact kunnen creëren voor uw organisatie."
        primaryCTA={{ text: "Boek een meeting", href: "/nl/contact" }}
        secondaryCTA={{ text: "Vraag ROI-analyse aan", href: "/nl/contact" }}
        variant="gradient"
      />
    </>
  )
}

function SolutionsGridSection() {
  const solutions = [
    {
      title: "Digital Signage as a Service",
      description:
        "End-to-end digital signage-oplossingen die hardware, software, content management en analytics combineren. Van afzonderlijke displays tot bedrijfsbrede netwerken leveren wij turnkey oplossingen met voorspelbare kosten en meetbare resultaten.",
      href: "/nl/solutions/digital-signage-as-a-service",
      icon: <Layers className="h-7 w-7" />,
    },
    {
      title: "AV & Experience Integration",
      description:
        "Transformeer ruimtes via slimme audiovisuele integratie. Wij ontwerpen en realiseren immersieve belevingen die doelgroepen engageren en een blijvende indruk nalaten, van corporate omgevingen tot publieke ruimtes.",
      href: "/nl/solutions/experience",
      icon: <Lightbulb className="h-7 w-7" />,
    },
    {
      title: "Content & Data Intelligence",
      description:
        "Datagedreven contentstrategieën die op het juiste moment de juiste boodschap brengen. Ons intelligence platform combineert audience analytics, contentoptimalisatie en realtime rapportering voor maximale impact.",
      href: "/nl/solutions/data",
      icon: <BarChart3 className="h-7 w-7" />,
    },
    {
      title: "Consultancy & Strategy",
      description:
        "Strategisch advies om uw digitale investeringen te optimaliseren. Van technology roadmaps tot ROI-analyses helpen wij u onderbouwde beslissingen nemen die bedrijfsresultaten maximaliseren.",
      href: "/nl/solutions/consultancy",
      icon: <Workflow className="h-7 w-7" />,
    },
  ]

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <SolutionCardLarge
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

function MethodologySection() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description:
        "We starten met een grondige analyse. Via stakeholdergesprekken, site assessments en data-analyse brengen we opportuniteiten in kaart die meetbare resultaten opleveren.",
    },
    {
      number: 2,
      title: "Design & Planning",
      description:
        "Ons team ontwikkelt doordachte oplossingen die naadloos aansluiten op uw omgeving. Elk detail wordt uitgewerkt voor een succesvolle implementatie.",
    },
    {
      number: 3,
      title: "Implementatie & Integratie",
      description:
        "Vakkundige uitrol met minimale hinder. Wij verzorgen alles van hardware-installatie tot softwareconfiguratie en content setup.",
    },
    {
      number: 4,
      title: "Optimalisatie & Support",
      description:
        "Continue verbetering op basis van datagedreven inzichten. We monitoren, analyseren en optimaliseren voor blijvende impact en maximale ROI.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Aanpak"
        title="Hoe wij werken"
        description="Een bewezen aanpak die consistente resultaten oplevert bij elk project."
        align="center"
      />

      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

function TrustSection() {
  const stats = [
    { value: "75+", label: "Projecten gerealiseerd" },
    { value: "98%", label: "Klanttevredenheid" },
    { value: "10+", label: "Jaar ervaring" },
  ]

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <StatsBlockBordered stats={stats} />
      </div>
    </Section>
  )
}

function CaseTeaserSection() {
  const cases = [
    {
      title: "Retail Network Transformation",
      excerpt: "120+ locaties verbonden met realtime content management en geavanceerde analytics.",
      href: "/nl/cases/retail-experience-transformation",
      kpiValue: "+37%",
      kpiLabel: "dwell time",
      industry: "Retail",
    },
    {
      title: "Corporate Campus Experience",
      excerpt: "Geïntegreerde AV- en signage-oplossing voor een internationale corporate omgeving.",
      href: "/nl/cases/corporate-campus-experience",
      kpiValue: "+45%",
      kpiLabel: "engagement",
      industry: "Corporate",
    },
    {
      title: "Healthcare Communication Network",
      excerpt: "Patiëntgerichte digitale ervaring over meerdere ziekenhuislocaties.",
      href: "/nl/cases/healthcare-communication",
      kpiValue: "-28%",
      kpiLabel: "ervaren wachttijd",
      industry: "Healthcare",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Cases"
        title="Oplossingen in de praktijk"
        description="Ontdek hoe onze geïntegreerde aanpak meetbare resultaten oplevert."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((caseItem, index) => (
          <CaseCard
            key={index}
            title={caseItem.title}
            excerpt={caseItem.excerpt}
            href={caseItem.href}
            kpiValue={caseItem.kpiValue}
            kpiLabel={caseItem.kpiLabel}
            industry={caseItem.industry}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          asChild
          variant="outline"
          className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5"
        >
          <Link href="/nl/cases">
            Bekijk alle cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}