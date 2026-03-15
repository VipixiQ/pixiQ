/**
 * Solutions Data
 * Centralized data for all solution pages
 * Future: Replace with CMS integration (Sanity, Contentful, etc.)
 */

export interface Solution {
  slug: string
  title: string
  subtitle: string
  description: string
  heroDescription: string
  pillars: Array<{
    title: string
    description: string
  }>
  strategicContent: {
    title: string
    description: string
    points: string[]
  }
  kpis: Array<{
    value: string
    label: string
    description?: string
  }>
  relatedCases: Array<{
    title: string
    excerpt: string
    href: string
    kpiValue?: string
    kpiLabel?: string
    industry?: string
  }>
}

export const solutions: Solution[] = [
  {
    slug: "digital-signage-as-a-service",
    title: "Digital Signage as a Service",
    subtitle: "End-to-end digital signage with predictable costs and measurable outcomes",
    description: "Transform your visual communication with our comprehensive digital signage solution. We combine enterprise-grade hardware, intelligent software, and strategic content management into one integrated service.",
    heroDescription: "From single displays to enterprise networks, we deliver turnkey digital signage solutions that transform how you communicate with your audience.",
    pillars: [
      {
        title: "Hardware & Infrastructure",
        description: "Enterprise-grade displays, media players, and mounting solutions selected and configured for your specific environment and use case.",
      },
      {
        title: "Content Management Platform",
        description: "Intuitive cloud-based CMS with scheduling, targeting, and real-time updates. Manage content across all locations from a single dashboard.",
      },
      {
        title: "Analytics & Reporting",
        description: "Comprehensive analytics that track engagement, content performance, and ROI. Make data-driven decisions to optimize your communication.",
      },
      {
        title: "Managed Services",
        description: "Proactive monitoring, maintenance, and support included. We handle the technology so you can focus on your message.",
      },
    ],
    strategicContent: {
      title: "A strategic approach to visual communication",
      description: "Digital signage is more than screens on walls. It's a powerful communication channel that, when implemented strategically, drives measurable business outcomes.",
      points: [
        "Increase brand awareness and recognition",
        "Drive sales and promotional effectiveness",
        "Improve customer experience and engagement",
        "Reduce perceived wait times",
        "Enhance internal communications",
        "Create immersive brand experiences",
      ],
    },
    kpis: [
      { value: "400+", label: "Displays Managed", description: "Across enterprise deployments" },
      { value: "99.9%", label: "Uptime", description: "Industry-leading reliability" },
      { value: "+35%", label: "Avg. Engagement Lift", description: "Compared to static signage" },
    ],
    relatedCases: [
      {
        title: "Retail Network Transformation",
        excerpt: "120+ locations connected with real-time content management and advanced analytics.",
        href: "/cases/retail-experience-transformation",
        kpiValue: "+37%",
        kpiLabel: "dwell time",
        industry: "Retail",
      },
      {
        title: "Quick Service Restaurant Chain",
        excerpt: "Digital menu boards and promotional displays across 50+ locations.",
        href: "/cases/qsr-digital-menus",
        kpiValue: "+22%",
        kpiLabel: "upsell rate",
        industry: "Hospitality",
      },
    ],
  },
  {
    slug: "experience",
    title: "AV & Experience Integration",
    subtitle: "Transform spaces through intelligent audiovisual experiences",
    description: "Create immersive environments that engage, inform, and inspire. Our AV integration expertise transforms ordinary spaces into extraordinary experiences.",
    heroDescription: "We design and implement audiovisual experiences that transform how people interact with spaces, from corporate environments to public venues.",
    pillars: [
      {
        title: "Experience Design",
        description: "Human-centered design that considers acoustics, sightlines, lighting, and user journeys to create cohesive experiences.",
      },
      {
        title: "AV System Integration",
        description: "Expert integration of displays, audio systems, lighting, and control systems into unified, easy-to-use solutions.",
      },
      {
        title: "Interactive Technologies",
        description: "Touch displays, gesture recognition, AR/VR experiences, and sensor-driven interactions that engage audiences.",
      },
      {
        title: "Control & Automation",
        description: "Intelligent automation that simplifies operation and ensures consistent experiences across all touchpoints.",
      },
    ],
    strategicContent: {
      title: "Creating memorable experiences through technology",
      description: "The right audiovisual experience can transform how people perceive your brand, engage with your content, and remember their visit.",
      points: [
        "Immersive brand environments",
        "Interactive customer experiences",
        "Collaborative meeting spaces",
        "Event and presentation solutions",
        "Wayfinding and information systems",
        "Experiential retail installations",
      ],
    },
    kpis: [
      { value: "50+", label: "Experience Projects", description: "Designed and delivered" },
      { value: "4.8/5", label: "Client Rating", description: "Average satisfaction score" },
      { value: "+60%", label: "Engagement Increase", description: "Through interactive experiences" },
    ],
    relatedCases: [
      {
        title: "Corporate Campus Experience",
        excerpt: "Integrated AV and signage solution for a Fortune 500 headquarters.",
        href: "/cases/corporate-campus-experience",
        kpiValue: "+45%",
        kpiLabel: "engagement",
        industry: "Corporate",
      },
      {
        title: "Museum Interactive Gallery",
        excerpt: "Touch-driven exhibits and immersive storytelling experiences.",
        href: "/cases/museum-interactive",
        kpiValue: "+85%",
        kpiLabel: "visitor interaction",
        industry: "Culture",
      },
    ],
  },
  {
    slug: "data",
    title: "Content & Data Intelligence",
    subtitle: "Data-driven content that delivers the right message at the right time",
    description: "Transform your digital communication with intelligent content strategies powered by real-time data and analytics.",
    heroDescription: "Our intelligence platform combines audience analytics, content optimization, and real-time reporting to maximize the impact of every message.",
    pillars: [
      {
        title: "Audience Analytics",
        description: "Understand who's engaging with your content, when, and how. Anonymous audience measurement provides actionable insights.",
      },
      {
        title: "Content Optimization",
        description: "Data-driven content strategies that adapt to audience behavior, time of day, weather, and other contextual factors.",
      },
      {
        title: "Real-time Reporting",
        description: "Live dashboards and automated reports that track performance and ROI across all channels and locations.",
      },
      {
        title: "Integration & API",
        description: "Connect your content systems with existing data sources, CRM platforms, and business intelligence tools.",
      },
    ],
    strategicContent: {
      title: "Intelligence that drives results",
      description: "Content without data is guesswork. Our intelligence platform ensures every piece of content is optimized for maximum impact.",
      points: [
        "Audience behavior analysis",
        "Content performance tracking",
        "A/B testing and optimization",
        "Predictive content scheduling",
        "ROI measurement and attribution",
        "Cross-channel analytics",
      ],
    },
    kpis: [
      { value: "2M+", label: "Daily Impressions", description: "Tracked and analyzed" },
      { value: "+28%", label: "Content Effectiveness", description: "Through data optimization" },
      { value: "Real-time", label: "Analytics", description: "Instant insights and reporting" },
    ],
    relatedCases: [
      {
        title: "Retail Analytics Platform",
        excerpt: "Audience measurement and content optimization for retail environments.",
        href: "/cases/retail-analytics",
        kpiValue: "+32%",
        kpiLabel: "conversion",
        industry: "Retail",
      },
      {
        title: "Airport Information Network",
        excerpt: "Real-time data integration for passenger information displays.",
        href: "/cases/airport-information",
        kpiValue: "-40%",
        kpiLabel: "missed connections",
        industry: "Transportation",
      },
    ],
  },
  {
    slug: "consultancy",
    title: "Consultancy & Strategy",
    subtitle: "Strategic guidance for digital experience investments",
    description: "Make informed decisions about your digital experience investments with strategic guidance from our expert team.",
    heroDescription: "From technology roadmaps to ROI analysis, we help you navigate the complex landscape of digital experience technologies.",
    pillars: [
      {
        title: "Technology Assessment",
        description: "Comprehensive evaluation of your current technology landscape and identification of optimization opportunities.",
      },
      {
        title: "Strategy Development",
        description: "Custom roadmaps aligned with your business objectives, budget, and timeline for digital experience transformation.",
      },
      {
        title: "ROI Analysis",
        description: "Detailed business case development and financial modeling to justify and measure digital experience investments.",
      },
      {
        title: "Vendor Management",
        description: "Objective guidance on technology selection, vendor evaluation, and procurement to ensure best-fit solutions.",
      },
    ],
    strategicContent: {
      title: "Expert guidance for complex decisions",
      description: "The digital experience technology landscape is complex and rapidly evolving. Our consultants bring deep expertise to help you make the right choices.",
      points: [
        "Digital experience audits",
        "Technology roadmap development",
        "Business case development",
        "Vendor evaluation and selection",
        "Implementation oversight",
        "Performance optimization",
      ],
    },
    kpis: [
      { value: "100+", label: "Consulting Engagements", description: "Across industries" },
      { value: "€50M+", label: "Client Savings", description: "Through strategic guidance" },
      { value: "15+", label: "Industry Specialists", description: "On our consulting team" },
    ],
    relatedCases: [
      {
        title: "Enterprise Digital Strategy",
        excerpt: "Five-year technology roadmap for a global manufacturing company.",
        href: "/cases/enterprise-strategy",
        kpiValue: "€12M",
        kpiLabel: "projected savings",
        industry: "Manufacturing",
      },
      {
        title: "Healthcare System Assessment",
        excerpt: "Technology audit and optimization plan for a regional healthcare network.",
        href: "/cases/healthcare-assessment",
        kpiValue: "+40%",
        kpiLabel: "efficiency gain",
        industry: "Healthcare",
      },
    ],
  },
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug)
}
