import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Layers, BarChart3, Workflow, Lightbulb, Users, Target, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { SolutionCardLarge } from "@/components/cards/solution-card"
import { CaseCard } from "@/components/cards/case-card"
import { ProcessStep } from "@/components/blocks/value-blocks"
import { StatsBlockBordered } from "@/components/blocks/kpi-block"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Solutions",
  description: "From digital signage to data intelligence - discover how PixIQ creates connected digital ecosystems with measurable impact.",
}

/**
 * Solutions Hub Page
 * Overview of all solution areas
 * Future: Add CMS integration, filtering, comparison tools
 */
export default function SolutionsPage() {
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
              src="/pictures/3-solutions-hero.jpg"
              alt="pixiQ solutions"
              fill
              priority
              className="object-cover object-[72%_center] opacity-80 scale-[1.02]"
            />
          </div>
        </div>

        <Container className="relative">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
              Solutions
            </p>

            <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[1.02] tracking-[-0.05em] text-black text-balance">
              From concept to data:{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2c4d98 0%, #1698d5 100%)",
                }}
              >
                one partner, measurable results.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563] sm:text-xl lg:text-[1.45rem]">
              We bring together hardware, software, content and data into integrated solutions that deliver quantifiable business outcomes.
            </p>
          </div>
        </Container>
      </section>

      {/* Solutions Grid */}
      <SolutionsGridSection />

      {/* How We Work */}
      <MethodologySection />

      {/* Trust Stats */}
      <TrustSection />

      {/* Case Teasers */}
      {/* <CaseTeaserSection /> */}

      {/* CTA */}
      <CTASection
        headline="Ready to discuss your project?"
        description="Let's explore how our solutions can create measurable impact for your organization."
        primaryCTA={{ text: "Book Meeting", href: "/contact" }}
        secondaryCTA={{ text: "Request ROI Analysis", href: "/contact" }}
        variant="gradient"
      />
    </>
  )
}

function SolutionsGridSection() {
  const solutions = [
    {
      title: "Digital Signage as a Service",
      description: "End-to-end digital signage solutions combining hardware, software, content management and analytics. From single screens to enterprise networks, we deliver turnkey solutions with predictable costs and measurable outcomes.",
      href: "/solutions/digital-signage-as-a-service",
      icon: <Layers className="h-7 w-7" />,
    },
    {
      title: "AV & Experience Integration",
      description: "Transform spaces through intelligent audiovisual integration. We design and implement immersive experiences that engage audiences and create lasting impressions, from corporate environments to public spaces.",
      href: "/solutions/experience",
      icon: <Lightbulb className="h-7 w-7" />,
    },
    {
      title: "Content & Data Intelligence",
      description: "Data-driven content strategies that deliver the right message at the right time. Our intelligence platform combines audience analytics, content optimization, and real-time reporting for maximum impact.",
      href: "/solutions/data",
      icon: <BarChart3 className="h-7 w-7" />,
    },
    {
      title: "Consultancy & Strategy",
      description: "Strategic guidance to optimize your digital experience investments. From technology roadmaps to ROI analysis, we help you make informed decisions that maximize business outcomes.",
      href: "/solutions/consultancy",
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
      description: "We begin with deep understanding. Through stakeholder interviews, site assessments, and data analysis, we uncover the opportunities that will drive measurable results.",
    },
    {
      number: 2,
      title: "Design & Planning",
      description: "Our team develops comprehensive solutions that integrate seamlessly with your environment. Every detail is planned to ensure successful implementation.",
    },
    {
      number: 3,
      title: "Implementation & Integration",
      description: "Expert deployment with minimal disruption. We handle everything from hardware installation to software configuration and content setup.",
    },
    {
      number: 4,
      title: "Optimization & Support",
      description: "Continuous improvement through data-driven insights. We monitor, analyze, and optimize to ensure lasting impact and ROI.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Methodology"
        title="How we work"
        description="A proven process that delivers consistent results across every engagement."
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
    { value: "75+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "9+", label: "Years Experience" },
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
      excerpt: "120+ locations connected with real-time content management and advanced analytics.",
      href: "/cases/retail-experience-transformation",
      kpiValue: "+37%",
      kpiLabel: "dwell time",
      industry: "Retail",
    },
    {
      title: "Corporate Campus Experience",
      excerpt: "Integrated AV and signage solution for a Fortune 500 headquarters.",
      href: "/cases/corporate-campus-experience",
      kpiValue: "+45%",
      kpiLabel: "engagement",
      industry: "Corporate",
    },
    {
      title: "Healthcare Communication Network",
      excerpt: "Patient-centric digital experience across multiple hospital locations.",
      href: "/cases/healthcare-communication",
      kpiValue: "-28%",
      kpiLabel: "perceived wait time",
      industry: "Healthcare",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Case studies"
        title="Solutions in action"
        description="See how our integrated approach delivers measurable results."
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
          <Link href="/cases">
            View all case studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}
