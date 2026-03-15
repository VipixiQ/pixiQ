import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Layers, BarChart3, Workflow, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/layout/section"
import { SectionIntro } from "@/components/sections/section-intro"
import { SolutionCard } from "@/components/cards/solution-card"
import { CaseCardFeatured } from "@/components/cards/case-card"
import { ValuePillar } from "@/components/blocks/value-blocks"
import { IntroSplash } from "@/components/intro-splash"

/**
 * Home Page
 * Primary landing page for pixiQ
 * Future: Add CMS integration for dynamic content, analytics tracking
 */
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* What We Do */}
      <WhatWeDoSection />

      {/* Solutions Overview */}
      <SolutionsSection />

      {/* Featured Case */}
      <FeaturedCaseSection />

      {/* About Teaser */}
      <AboutTeaserSection />
    </>
  )
}

/**
 * Hero Section with animated background
 */
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
      {/* Abstract Background Accents */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {/* Grote zachte gradient rechtsboven */}
  <div
    className="absolute -top-24 right-[-120px] h-[420px] w-[620px] rounded-full blur-3xl"
    style={{
      background:
        "linear-gradient(90deg, rgba(44,77,152,0.16) 0%, rgba(22,152,213,0.20) 100%)",
    }}
  />

  {/* Subtiele glow links */}
  <div
    className="absolute top-[24%] -left-24 h-[280px] w-[280px] rounded-full blur-3xl"
    style={{ background: "rgba(44,77,152,0.08)" }}
  />

  {/* Diagonale lichte overlay */}
  <div
    className="absolute inset-x-0 top-0 h-[520px]"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 42%, rgba(22,152,213,0.04) 100%)",
      clipPath: "polygon(0 0, 100% 0, 100% 82%, 0 100%)",
    }}
  />


  {/* Veel subtieler grid */}
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
        backgroundImage: "linear-gradient(90deg, #2c4d98 0%, #1698d5 100%)",
      }}
    >
      Measurable results.
    </span>
  </h1>

  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563] sm:text-xl lg:text-[1.45rem]">
    We connect hardware, software, content and data into one purposeful digital experience with measurable impact.
  </p>

  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
    <Button
      asChild
      size="lg"
      className="rounded-md px-8 h-14 text-base font-semibold text-white hover:opacity-95 transition-all duration-200"
      style={{ backgroundImage: "linear-gradient(to right, #2c4d98, #1698d5)" }}
    >
      <Link href="/contact">
        Plan ROI Session
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>

    <Button
      asChild
      size="lg"
      variant="outline"
      className="h-14 rounded-md border-[#2c4d98]/20 px-8 text-base font-medium text-[#2c4d98] hover:bg-[#2c4d98]/5"
    >
      <Link href="/solutions">Discover our solutions</Link>
    </Button>
  </div>
</div>
      </Container>
    </section>
  )
}

/**
 * What We Do Section - Value pillars
 */
function WhatWeDoSection() {
  const pillars = [
    {
      icon: Network,
      title: "Connected digital ecosystems",
      description: "We integrate hardware, software, content and data into unified systems that work together seamlessly across your organization.",
    },
    {
      icon: BarChart3,
      title: "Measurable impact",
      description: "Every solution we create is built to deliver quantifiable results. Real-time analytics and reporting ensure you understand your ROI.",
    },
    {
      icon: Workflow,
      title: "Scalable digital infrastructure",
      description: "Our solutions grow with your business. From single locations to enterprise-wide deployments, we build for long-term success.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="What we do"
        title="One partner. Connected solutions. Measurable results."
        description="pixiQ brings together hardware, software, content and data to create connected digital ecosystems with measurable impact."
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

/**
 * Solutions Overview Section
 */
function SolutionsSection() {
  const solutions = [
    {
      title: "Digital Signage as a Service",
      description: "End-to-end digital signage solutions with hardware, software, content management and analytics in one integrated package.",
      href: "/solutions/digital-signage-as-a-service",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "AV & Experience Integration",
      description: "Immersive audiovisual experiences that transform spaces and engage audiences through intelligent technology integration.",
      href: "/solutions/experience",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Content & Data Intelligence",
      description: "Data-driven content strategies that deliver the right message at the right time, powered by real-time analytics.",
      href: "/solutions/data",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Consultancy & Strategy",
      description: "Strategic guidance to optimize your digital experience investments and maximize measurable business outcomes.",
      href: "/solutions/consultancy",
      icon: <Workflow className="h-6 w-6" />,
    },
  ]

  return (
    <Section>
      <SectionIntro
        eyebrow="Solutions"
        title="From concept to data: integrated digital experiences"
        description="Four interconnected solution areas that work together to create measurable impact for your business."
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

/**
 * Featured Case Section
 */
function FeaturedCaseSection() {
  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Featured project"
        title="Creating measurable impact"
        description="See how we help leading organizations transform their digital presence."
      />
      
      <CaseCardFeatured
        title="Retail Experience Transformation"
        excerpt="We helped a leading retail chain reimagine their in-store digital experience, implementing an integrated signage network across 120+ locations with real-time content management and advanced analytics."
        href="/cases/retail-experience-transformation"
        kpiValue="+37%"
        kpiLabel="dwell time improvement"
        industry="Retail"
      />
      
      <div className="mt-10 text-center">
        <Button
          asChild
          variant="outline"
          className="border-pixiQ-primary/30 text-pixiQ-primary hover:bg-pixiQ-primary/5"
        >
          <Link href="/cases">
            View all projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}

/**
 * About Teaser Section
 */
function AboutTeaserSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <div>
          <p className="text-sm font-semibold text-pixiQ-secondary uppercase tracking-wider mb-4">
            About pixiQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            A team dedicated to measurable digital impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We&apos;re a team of strategists, technologists, and creative thinkers united by a single mission: helping organizations create digital experiences that deliver measurable results.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            With deep expertise across digital signage, AV integration, content strategy, and data analytics, we bring a uniquely integrated approach to every project we undertake.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-pixiQ-primary/30 text-pixiQ-primary hover:bg-pixiQ-primary/5"
          >
            <Link href="/about">
              Meet the team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Visual placeholder */}
        <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
          <div className="absolute inset-0 bg-pixiQ-gradient opacity-10" />
          <div className="absolute inset-8 rounded-xl border border-pixiQ-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 rounded-full bg-pixiQ-gradient opacity-20 blur-2xl" />
          </div>
          {/* Abstract shapes */}
          <div className="absolute top-8 right-8 w-20 h-20 rounded-lg bg-pixiQ-secondary/20 rotate-12" />
          <div className="absolute bottom-12 left-12 w-16 h-16 rounded-full bg-pixiQ-primary/20" />
        </div>
      </div>
    </Section>
  )
}
