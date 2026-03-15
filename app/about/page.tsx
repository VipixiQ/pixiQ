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
  title: "About",
  description: "Meet the PixIQ team - strategists, technologists, and creative thinkers dedicated to creating digital experiences with measurable impact.",
}

/**
 * About Page
 * Company story, mission, vision, values, team
 * Future: Add CMS integration for team members, timeline
 */
export default function AboutPage() {
  return (
    <>
      {/* Hero / Intro */}
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            About PixIQ
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            Creating digital experiences with{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              measurable impact.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We&apos;re a team of strategists, technologists, and creative thinkers united by a single mission: helping organizations create digital experiences that deliver real, quantifiable results.
          </p>
        </div>
      </PageHeader>

      {/* Story / Evolution */}
      <StorySection />

      {/* Mission & Vision */}
      <MissionVisionSection />

      {/* Core Values */}
      <ValuesSection />

      {/* Team */}
      <TeamSection />

      {/* Way of Working */}
      <CultureSection />

      {/* Stats */}
      <StatsSection />

      {/* CTA */}
      <CTASection
        headline="Ready to work together?"
        description="Whether you're looking to start a project or join our team, we'd love to hear from you."
        primaryCTA={{ text: "Plan a meeting", href: "/contact" }}
        secondaryCTA={{ text: "Join our team", href: "/careers" }}
        variant="gradient"
      />
    </>
  )
}

function StorySection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Visual placeholder */}
        <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted order-2 lg:order-1">
          <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
          <div className="absolute inset-8 rounded-xl border border-pixiq-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 rounded-full bg-pixiq-gradient opacity-20 blur-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Our Story
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            From vision to trusted partner
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              PixIQ was founded with a clear vision: to bridge the gap between cutting-edge digital technology and measurable business outcomes. We saw organizations investing in digital displays and AV systems without any way to understand their impact.
            </p>
            <p>
              Today, we&apos;ve grown into a trusted partner for leading organizations across Europe. Our integrated approach - combining hardware, software, content, and data - has helped clients transform how they communicate, engage audiences, and measure success.
            </p>
            <p>
              But we&apos;re just getting started. As technology evolves, so do we - always with the same focus on creating experiences that deliver real, measurable impact.
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
        {/* Mission */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white mb-6">
            <Target className="h-7 w-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            To help organizations create digital experiences that engage audiences and deliver measurable business outcomes, through an integrated approach that connects hardware, software, content, and data.
          </p>
        </div>

        {/* Vision */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white mb-6">
            <Eye className="h-7 w-7" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading text-white mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            A world where every digital experience is purposeful, every interaction is meaningful, and every investment is measurable. We envision digital ecosystems that seamlessly connect people, spaces, and data.
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
      title: "Trust",
      description: "We build lasting relationships through transparency, reliability, and delivering on our commitments.",
    },
    {
      icon: Lightbulb,
      title: "Knowledge-driven",
      description: "We combine deep expertise with continuous learning to stay ahead of industry evolution.",
    },
    {
      icon: Target,
      title: "Goal-oriented",
      description: "Every decision is guided by clear objectives and measurable outcomes for our clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as true partners with our clients, integrating seamlessly with their teams.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We provide honest guidance, even when it means challenging assumptions or recommending alternatives.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We embrace new technologies and approaches that create value, not just novelty.",
    },
  ]

  return (
    <Section>
      <SectionIntro
        eyebrow="Our Values"
        title="What drives us"
        description="The principles that guide our work and relationships."
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
      name: "Sarah van der Berg",
      role: "CEO & Co-founder",
      quote: "Technology should serve human experiences, not the other way around.",
    },
    {
      name: "Mark Janssen",
      role: "CTO & Co-founder",
      quote: "The best solutions are invisible - they just work.",
    },
    {
      name: "Lisa de Vries",
      role: "Head of Strategy",
      quote: "Data without insight is just noise. We turn it into action.",
    },
    {
      name: "Tom Bakker",
      role: "Head of Delivery",
      quote: "Excellence is in the details. Every project, every time.",
    },
    {
      name: "Emma Smit",
      role: "Creative Director",
      quote: "Great design is felt before it's understood.",
    },
    {
      name: "Jan de Groot",
      role: "Head of Engineering",
      quote: "Build it right, build it once, build it to last.",
    },
  ]

  return (
    <Section className="bg-muted/30">
      <SectionIntro
        eyebrow="Our Team"
        title="The people behind PixIQ"
        description="A diverse team of experts united by a shared passion for creating impact."
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
          <Link href="/careers">
            Join our team
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
        {/* Content */}
        <div>
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            How We Work
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight mb-6 text-balance">
            A culture of excellence and collaboration
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At PixIQ, we believe the best work happens when talented people are trusted to do what they do best. We foster an environment of autonomy, continuous learning, and mutual respect.
            </p>
            <p>
              Our teams work closely with clients, becoming true extensions of their organizations. We invest in understanding their challenges, their culture, and their goals - because the best solutions come from deep partnership.
            </p>
            <p>
              We celebrate wins together, learn from challenges together, and never stop pushing to improve. That&apos;s the PixIQ way.
            </p>
          </div>
        </div>

        {/* Visual placeholder */}
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
    { value: "12+", label: "Years in Business" },
    { value: "50+", label: "Team Members" },
    { value: "150+", label: "Projects Delivered" },
  ]

  return (
    <Section className="bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <StatsBlockBordered stats={stats} />
      </div>
    </Section>
  )
}
