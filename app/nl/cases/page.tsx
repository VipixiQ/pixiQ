import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Ontdek binnenkort hoe pixiQ digitale belevingen creëert met meetbare impact voor klanten in verschillende sectoren.",
}

export default function CasesPage() {
  return (
    <>
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Cases
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            Wij meten wat we{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              creëren.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Elk project dat we realiseren is ontworpen om meetbare bedrijfsresultaten op te leveren. Binnenkort delen we hier concrete klantcases en praktijkvoorbeelden.
          </p>
        </div>
      </PageHeader>

      <Section className="pt-0">
  <div className="max-w-3xl mx-auto text-center">
    <div className="rounded-2xl border border-border bg-muted/30 p-10 lg:p-14">
      <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-6">
        Onze klantverhalen komen binnenkort online
      </h2>

      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        We bereiden momenteel gedetailleerde cases voor die tonen hoe pixiQ organisaties helpt meetbare impact te creëren via digital signage, AV-integratie, content intelligence en strategisch advies.
      </p>

      <p className="text-muted-foreground leading-relaxed mb-10">
        Wilt u intussen relevante referenties voor uw sector of project bespreken? Neem gerust contact met ons op.
      </p>

      <Button
        asChild
        size="lg"
        className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
      >
        <Link href="/nl/contact">
          Neem contact op
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</Section>

      <CTASection
        headline="Klaar om uw eigen succesverhaal te creëren?"
        description="Laten we bespreken hoe we uw digitale beleving kunnen omzetten in meetbare resultaten."
        primaryCTA={{ text: "Start een gesprek", href: "/nl/contact" }}
        secondaryCTA={{ text: "Ontdek onze oplossingen", href: "/nl/solutions" }}
        variant="gradient"
      />
    </>
  )
}