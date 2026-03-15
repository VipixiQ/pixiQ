/**
 * Cases Data
 * Centralized data for all case study pages
 * Future: Replace with CMS integration (Sanity, Contentful, etc.)
 */

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  excerpt: string
  challenge: string
  approach: string
  result: string
  kpis: Array<{
    value: string
    label: string
  }>
  relatedSolution: {
    title: string
    href: string
  }
  featured?: boolean
}

export const cases: CaseStudy[] = [
  {
    slug: "retail-experience-transformation",
    title: "Retail Network Transformation",
    client: "Major European Retail Chain",
    industry: "Retail",
    excerpt: "120+ locations connected with real-time content management and advanced analytics, driving significant improvements in customer engagement and dwell time.",
    challenge: "Our client, a leading European retail chain with over 120 stores, was struggling with outdated in-store communication. Static signage was expensive to update, brand consistency was difficult to maintain, and there was no way to measure the impact of visual merchandising on customer behavior.",
    approach: "We implemented a comprehensive digital signage network across all locations, integrating cloud-based content management with real-time analytics. The solution included strategically placed displays in high-traffic areas, zone-based content targeting, and integration with the client's POS system for dynamic pricing and promotions.",
    result: "The transformation delivered immediate and measurable impact. Customer dwell time increased by 37%, promotional effectiveness improved by 28%, and the client achieved ROI within 14 months. The centralized management system reduced content update costs by 65% while enabling real-time responsiveness to market conditions.",
    kpis: [
      { value: "+37%", label: "Dwell Time Improvement" },
      { value: "+28%", label: "Promotional Effectiveness" },
      { value: "14mo", label: "ROI Achievement" },
      { value: "-65%", label: "Content Update Costs" },
    ],
    relatedSolution: {
      title: "Digital Signage as a Service",
      href: "/solutions/digital-signage-as-a-service",
    },
    featured: true,
  },
  {
    slug: "corporate-campus-experience",
    title: "Corporate Campus Experience",
    client: "Fortune 500 Technology Company",
    industry: "Corporate",
    excerpt: "Integrated AV and signage solution for a Fortune 500 headquarters, creating a unified employee and visitor experience across a 500,000 sq ft campus.",
    challenge: "The client's new headquarters needed to embody their innovative brand while providing seamless communication and collaboration experiences for 3,000+ employees and daily visitors. Legacy AV systems were disconnected, and there was no unified platform for internal communications.",
    approach: "We designed and implemented an integrated experience platform combining digital signage, room booking displays, wayfinding, and immersive brand experiences. The solution included a central command center for content management and real-time monitoring, with analytics dashboards for space utilization and engagement tracking.",
    result: "The campus transformation achieved a 45% increase in employee engagement with internal communications, 30% improvement in meeting room utilization, and the space became a powerful tool for recruitment and client visits. The integrated platform now serves as a model for the company's global office rollout.",
    kpis: [
      { value: "+45%", label: "Employee Engagement" },
      { value: "+30%", label: "Room Utilization" },
      { value: "3,000+", label: "Daily Users" },
      { value: "24/7", label: "Automated Operations" },
    ],
    relatedSolution: {
      title: "AV & Experience Integration",
      href: "/solutions/experience",
    },
    featured: true,
  },
  {
    slug: "healthcare-communication",
    title: "Healthcare Communication Network",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    excerpt: "Patient-centric digital experience across multiple hospital locations, improving patient satisfaction while reducing perceived wait times.",
    challenge: "A regional healthcare network with 5 hospitals and 20+ clinics needed to modernize patient communication. Long perceived wait times, outdated wayfinding, and inconsistent patient education were negatively impacting satisfaction scores and operational efficiency.",
    approach: "We deployed a network-wide digital communication platform with zone-specific content strategies. Waiting areas received calming, educational content; hallways featured dynamic wayfinding; and clinical areas displayed relevant health information. The system integrated with appointment schedules for personalized patient communication.",
    result: "Patient satisfaction scores improved by 22%, perceived wait times decreased by 28%, and wayfinding inquiries to staff dropped by 45%. The platform also became a valuable channel for public health messaging and community engagement.",
    kpis: [
      { value: "-28%", label: "Perceived Wait Time" },
      { value: "+22%", label: "Patient Satisfaction" },
      { value: "-45%", label: "Wayfinding Inquiries" },
      { value: "25", label: "Locations Connected" },
    ],
    relatedSolution: {
      title: "Content & Data Intelligence",
      href: "/solutions/data",
    },
  },
  {
    slug: "museum-interactive",
    title: "Museum Interactive Gallery",
    client: "National History Museum",
    industry: "Culture",
    excerpt: "Touch-driven exhibits and immersive storytelling experiences that transformed visitor engagement with historical collections.",
    challenge: "The museum's permanent collection needed refreshing to engage younger audiences without compromising the integrity of historical artifacts. Traditional display cases and text-heavy information panels were failing to capture visitor attention.",
    approach: "We created a series of interactive installations that brought historical narratives to life through touch interfaces, projection mapping, and AR experiences. Each installation was designed to complement physical artifacts while providing deeper context and engaging storytelling.",
    result: "Visitor interaction with exhibits increased by 85%, average visit duration extended by 40 minutes, and the museum saw a 60% increase in repeat visits among families with children. The installations received multiple industry awards for innovative museum experience design.",
    kpis: [
      { value: "+85%", label: "Visitor Interaction" },
      { value: "+40min", label: "Extended Visit Duration" },
      { value: "+60%", label: "Family Repeat Visits" },
      { value: "5", label: "Industry Awards" },
    ],
    relatedSolution: {
      title: "AV & Experience Integration",
      href: "/solutions/experience",
    },
  },
  {
    slug: "qsr-digital-menus",
    title: "Quick Service Restaurant Chain",
    client: "International QSR Brand",
    industry: "Hospitality",
    excerpt: "Digital menu boards and promotional displays across 50+ locations, optimizing for daypart and driving measurable upsell improvements.",
    challenge: "The restaurant chain needed to modernize their menu presentation while enabling dynamic pricing and promotions. Manual menu updates were slow and error-prone, and there was no ability to optimize content based on time of day or inventory levels.",
    approach: "We deployed a network of digital menu boards with intelligent content scheduling based on daypart, weather, and inventory data. The system included integration with the POS for real-time pricing updates and A/B testing capabilities for promotional effectiveness.",
    result: "The implementation drove a 22% increase in upsell rates, 15% improvement in order accuracy, and 30% reduction in menu update time. Dynamic pricing capabilities enabled real-time margin optimization, and the platform provided valuable insights into customer preferences.",
    kpis: [
      { value: "+22%", label: "Upsell Rate" },
      { value: "+15%", label: "Order Accuracy" },
      { value: "-30%", label: "Menu Update Time" },
      { value: "50+", label: "Locations" },
    ],
    relatedSolution: {
      title: "Digital Signage as a Service",
      href: "/solutions/digital-signage-as-a-service",
    },
  },
  {
    slug: "enterprise-strategy",
    title: "Enterprise Digital Strategy",
    client: "Global Manufacturing Company",
    industry: "Manufacturing",
    excerpt: "Five-year technology roadmap for digital communication transformation across global operations.",
    challenge: "A global manufacturing company with operations in 15 countries needed a strategic vision for digital communication across factories, offices, and visitor centers. Fragmented legacy systems and inconsistent brand presentation were creating inefficiencies and missed opportunities.",
    approach: "We conducted a comprehensive assessment of existing infrastructure, stakeholder needs, and industry best practices. The resulting roadmap provided a phased transformation plan with clear milestones, ROI projections, and technology recommendations aligned with the company's digital transformation initiatives.",
    result: "The strategy identified €12M in potential savings through infrastructure consolidation and operational efficiencies. Phase one implementation is underway with projected payback within 24 months. The roadmap has become the foundation for the company's global digital experience standards.",
    kpis: [
      { value: "€12M", label: "Projected Savings" },
      { value: "15", label: "Countries Covered" },
      { value: "5yr", label: "Strategic Roadmap" },
      { value: "24mo", label: "Phase 1 Payback" },
    ],
    relatedSolution: {
      title: "Consultancy & Strategy",
      href: "/solutions/consultancy",
    },
  },
]

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}

export function getAllCaseSlugs(): string[] {
  return cases.map((c) => c.slug)
}

export function getFeaturedCases(): CaseStudy[] {
  return cases.filter((c) => c.featured)
}

export const industries = [...new Set(cases.map((c) => c.industry))]
