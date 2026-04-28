import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Target, Eye, Heart, Lightbulb, Users, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { TeamCard } from "@/components/cards/team-card"
import { ValuePillar } from "@/components/blocks/value-blocks"
import { StatsBlockBordered } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Over pixiQ",
  description:
    "Maak kennis met pixiQ: strategen, technologen en creatieve denkers die digitale belevingen creëren met meetbare impact.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Over pixiQ
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            Wij creëren digitale belevingen met{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              meetbare impact.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Wij zijn een team van strategen, technologen en creatieve denkers, verenigd door één missie: organisaties helpen digitale belevingen te creëren die echte, meetbare resultaten opleveren.
          </p>
        </div>
      </PageHeader>

      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TeamSection />
      <CultureSection />
      <StatsSection />

      <CTASection
        headline="Klaar om samen te werken?"
        description="Of u nu een project wilt opstarten of ons team wilt versterken, we horen graag van u."
        primaryCTA={{ text: "Plan een meeting", href: "/nl/contact" }}
        secondaryCTA={{ text: "Versterk ons team", href: "/nl/careers" }}
        variant="gradient"
      />
    </>
  )
}

function StorySection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
          <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
          <div className="absolute inset-8 rounded-xl border border-pixiq-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 rounded-full bg-pixiq-gradient opacity-20 blur-2xl" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Ons verhaal
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            Van visie tot betrouwbare partner
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              pixiQ werd opgericht met een duidelijke visie: de kloof overbruggen tussen vooruitstrevende digitale technologie en meetbare bedrijfsresultaten.
            </p>
            <p>
              Vandaag zijn we uitgegroeid tot een betrouwbare partner voor toonaangevende organisaties in Europa. Onze geïntegreerde aanpak helpt klanten hun communicatie te versterken, doelgroepen te engageren en succes meetbaar te maken.
            </p>
            <p>
              Maar we staan nog maar aan het begin. Terwijl technologie evolueert, blijven wij focussen op het creëren van belevingen met echte, meetbare impact.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function MissionVisionSection() {
  return (
    <Section className="bg-pixiq-black text-white">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white mb-6">
            <Target className="h-7 w-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading text-white mb-4">
            Onze missie
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            We helpen organisaties met het creëren van digitale belevingen die doelgroepen engageren en meetbare bedrijfsresultaten opleveren. Via een geïntegreerde aanpak verbinden we hardware, software, content en data.
          </p>
        </div>

        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white mb-6">
            <Eye className="h-7 w-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading text-white mb-4">
            Onze visie
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            Een wereld waarin elke digitale beleving doelgericht is, elke interactie waardevol en elke investering meetbaar. Wij geloven in digitale ecosystemen die mensen, ruimtes en data naadloos met elkaar verbinden.
          </p>
        </div>
      </div>
    </Section>
  )
}

function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Vertrouwen",
      description:
        "Wij bouwen duurzame relaties op basis van transparantie, betrouwbaarheid en het nakomen van onze engagementen.",
    },
    {
      icon: Lightbulb,
      title: "Kennisgedreven",
      description:
        "Wij combineren diepgaande expertise met continue ontwikkeling om voorop te blijven lopen in een snel evoluerende markt.",
    },
    {
      icon: Target,
      title: "Resultaatgericht",
      description:
        "Elke beslissing wordt gestuurd door duidelijke doelstellingen en meetbare resultaten voor onze klanten.",
    },
    {
      icon: Users,
      title: "Samenwerking",
      description:
        "Wij werken als echte partners samen met onze klanten en integreren naadloos met hun teams.",
    },
    {
      icon: Shield,
      title: "Integriteit",
      description:
        "Wij geven eerlijk en doordacht advies, ook wanneer dat betekent dat we aannames uitdagen of alternatieven voorstellen.",
    },
    {
      icon: Eye,
      title: "Innovatie",
      description:
        "Wij omarmen nieuwe technologieën en inzichten die echte meerwaarde creëren, niet louter nieuwigheid.",
    },
  ]

  return (
    <Section>
      <SectionIntro
        eyebrow="Onze waarden"
        title="Wat ons drijft"
        description="De principes die onze werking en relaties bepalen."
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

function TeamSection() {
  const team = [
    {
      name: "John Doe",
      role: "Onze toekomstige collega",
      quote: "Versterk ons team en bouw mee aan ons verhaal.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Ons team"
        title="De mensen achter pixiQ"
        description="Experts verenigd door een gedeelde passie voor meetbare impact."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            quote={member.quote}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button
          asChild
          variant="outline"
          className="border-pixiq-primary/30 text-pixiq-primary hover:bg-pixiq-primary/5"
        >
          <Link href="/nl/careers">
            Versterk ons team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}

function CultureSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Hoe wij werken
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            Een cultuur van kwaliteit en samenwerking
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Bij pixiQ geloven we dat sterk werk ontstaat wanneer getalenteerde mensen het vertrouwen krijgen om te doen waar ze goed in zijn.
            </p>
            <p>
              Onze teams werken nauw samen met klanten en worden een verlengstuk van hun organisatie. We investeren in het begrijpen van hun uitdagingen, cultuur en doelstellingen.
            </p>
            <p>
              We vieren successen samen, leren samen uit uitdagingen en blijven ons voortdurend verbeteren. Dat is de pixiQ-manier.
            </p>
          </div>
        </div>

        <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
          <div className="absolute inset-8 rounded-xl border border-pixiq-primary/10" />
          <div className="absolute top-8 right-8 w-20 h-20 rounded-lg bg-pixiq-secondary/20 rotate-12" />
          <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full bg-pixiq-primary/20" />
        </div>
      </div>
    </Section>
  )
}

function StatsSection() {
  const stats = [
    { value: "9+", label: "Jaar ervaring" },
    { value: "10", label: "Lokale helden" },
    { value: "75+", label: "Projecten gerealiseerd" },
  ]

  return (
    <Section className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <StatsBlockBordered stats={stats} />
      </div>
    </Section>
  )
}