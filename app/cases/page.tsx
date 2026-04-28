import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, PageHeader } from "@/components/layout/section"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Cases",
  description:
    "Explore our portfolio of digital experience projects and measurable business results.",
}

/**
 * Cases Overview Page
 * Temporary version until final case studies are published
 */
export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Case Studies
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            We measure what we{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              create.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Every project we undertake is designed to deliver measurable
            business outcomes. We are currently finalizing our case studies and
            will publish them here soon.
          </p>
        </div>
      </PageHeader>

      {/* Temporary Content */}
      <Section className="pt-0">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-border bg-muted/30 p-10 lg:p-14">
            <h2 className="text-3xl lg:text-4xl font-heading text-foreground mb-6">
              Our success stories are coming soon
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are currently preparing detailed case studies that show how
              pixiQ helps organizations create measurable impact through digital
              signage, AV integration, content intelligence and strategic
              consultancy.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10">
              In the meantime, feel free to contact us if you'd like to discuss
              relevant references for your sector or project.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-pixiq-gradient hover:opacity-90 text-white font-medium px-8"
            >
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        headline="Ready to create your success story?"
        description="Let's discuss how we can help you achieve measurable results."
        primaryCTA={{ text: "Start a conversation", href: "/contact" }}
        secondaryCTA={{ text: "Explore solutions", href: "/solutions" }}
        variant="gradient"
      />
    </>
  )
}