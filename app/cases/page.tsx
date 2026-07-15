import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/layout/section"
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
              src="/pictures/4-cases-hero.jpg"
              alt="pixiQ case studies"
              fill
              priority
              className="object-cover object-[58%_center] opacity-80 scale-[1.02]"
            />
          </div>
        </div>

        <Container className="relative">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
              Case Studies
            </p>

            <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[1.02] tracking-[-0.05em] text-black text-balance">
              We measure what we{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2c4d98 0%, #1698d5 100%)",
                }}
              >
                create.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563] sm:text-xl lg:text-[1.45rem]">
              Every project we undertake is designed to deliver measurable
              business outcomes. We are currently finalizing our case studies
              and will publish them here soon.
            </p>
          </div>
        </Container>
      </section>

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