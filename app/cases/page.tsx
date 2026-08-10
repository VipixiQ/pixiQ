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
              Explore how pixiQ creates purposeful digital experiences that
              strengthen communication, improve visitor journeys and deliver
              measurable impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Cases Overview */}
      <Section>
        <div className="mb-10 lg:mb-14">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Featured Case
          </p>

          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight max-w-2xl">
            Digital experiences in action
          </h2>
        </div>

        <Link
          href="/cases/filou-oostende"
          className="group block rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto min-h-[320px] overflow-hidden bg-muted">
              <Image
                src="/pictures/case-filou-oostende-hero.jpg"
                alt="Filou Oostende digital signage case"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute top-6 left-6">
                <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#6f6f6e] backdrop-blur-sm">
                  Sports & Entertainment
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
                Filou Oostende
              </p>

              <h3 className="text-2xl lg:text-3xl font-heading text-foreground mb-5 group-hover:text-[#2c4d98] transition-colors">
                A stronger digital guest experience throughout the arena
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                An integrated digital signage solution across the supporters’
                entrance and VIP environment, combining indoor LED,
                interactive displays and flexible content management to create
                a more dynamic and professional visitor experience.
              </p>

              <span
                className="inline-flex items-center text-base font-medium"
                style={{ color: "#2c4d98" }}
              >
                View case
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
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