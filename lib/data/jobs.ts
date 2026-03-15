/**
 * Jobs Data
 * Centralized data for all job listings
 * Future: Replace with CMS or ATS integration
 */

export interface Job {
  slug: string
  title: string
  location: string
  department: string
  type: string // Full-time, Part-time, etc.
  excerpt: string
  intro: string
  aboutRole: string
  responsibilities: string[]
  requirements: string[]
  niceToHaves: string[]
  whatWeOffer: string[]
  teamNote: string
}

export const jobs: Job[] = [
  {
    slug: "av-project-manager",
    title: "AV Project Manager",
    location: "Amsterdam, NL",
    department: "Delivery",
    type: "Full-time",
    excerpt: "Lead complex AV integration projects from concept to completion, ensuring exceptional client experiences and measurable outcomes.",
    intro: "We're looking for an experienced AV Project Manager to lead our most ambitious experience integration projects. You'll work with enterprise clients to transform their spaces through intelligent audiovisual solutions.",
    aboutRole: "As an AV Project Manager at PixIQ, you'll be the driving force behind complex integration projects. From initial scoping through final handover, you'll ensure every project delivers on time, on budget, and beyond expectations. You'll work closely with our engineering team, external partners, and clients to orchestrate flawless implementations.",
    responsibilities: [
      "Lead end-to-end project delivery for AV and experience integration projects",
      "Develop and manage project plans, timelines, and budgets",
      "Coordinate internal teams, subcontractors, and client stakeholders",
      "Identify and mitigate project risks proactively",
      "Ensure quality standards and client satisfaction throughout delivery",
      "Document lessons learned and contribute to process improvement",
      "Support pre-sales activities with technical scoping and estimating",
    ],
    requirements: [
      "5+ years of experience in AV project management",
      "Strong understanding of AV systems, integration, and installation",
      "Proven track record of delivering complex technical projects",
      "Excellent communication and stakeholder management skills",
      "PMP, PRINCE2, or equivalent certification preferred",
      "Experience with enterprise clients and B2B environments",
      "Fluent in English; Dutch is a plus",
    ],
    niceToHaves: [
      "CTS or CTS-I certification",
      "Experience with digital signage systems",
      "Background in corporate or hospitality environments",
      "Understanding of network infrastructure",
    ],
    whatWeOffer: [
      "Competitive salary and bonus structure",
      "Flexible working arrangements",
      "Professional development budget",
      "Latest tools and technology",
      "Collaborative, innovative team environment",
      "Opportunity to work on prestigious projects",
      "Health insurance and pension contribution",
    ],
    teamNote: "You'll join our Delivery team - a group of passionate project professionals who take pride in flawless execution. We support each other, share knowledge, and celebrate wins together.",
  },
  {
    slug: "digital-signage-specialist",
    title: "Digital Signage Specialist",
    location: "Amsterdam, NL",
    department: "Engineering",
    type: "Full-time",
    excerpt: "Design, deploy, and optimize digital signage solutions that transform how organizations communicate with their audiences.",
    intro: "Join our engineering team as a Digital Signage Specialist and help shape the future of visual communication. You'll work on cutting-edge deployments for leading organizations across Europe.",
    aboutRole: "As a Digital Signage Specialist, you'll be our go-to expert for everything related to digital signage systems. From solution design through deployment and ongoing optimization, you'll ensure our clients get maximum value from their investment. You'll work with the latest hardware, software, and content management platforms.",
    responsibilities: [
      "Design and architect digital signage solutions for diverse environments",
      "Configure and deploy content management systems",
      "Develop content templates and scheduling strategies",
      "Integrate displays with data sources and business systems",
      "Provide technical support and troubleshooting",
      "Train clients on system operation and content management",
      "Stay current with industry trends and emerging technologies",
    ],
    requirements: [
      "3+ years of experience with digital signage systems",
      "Hands-on experience with leading CMS platforms (BrightSign, Scala, etc.)",
      "Strong understanding of display technologies and specifications",
      "Network and connectivity troubleshooting skills",
      "Content creation skills (design, video, motion graphics) a plus",
      "Excellent problem-solving abilities",
      "Client-facing communication skills",
    ],
    niceToHaves: [
      "Experience with audience measurement technologies",
      "Programming skills (JavaScript, Python)",
      "Background in retail or corporate environments",
      "Data visualization experience",
    ],
    whatWeOffer: [
      "Work with cutting-edge technology",
      "Continuous learning opportunities",
      "Flexible work arrangements",
      "Competitive compensation package",
      "Creative, collaborative team culture",
      "Career growth opportunities",
      "Travel to interesting project locations",
    ],
    teamNote: "Our Engineering team is a mix of technologists, creative thinkers, and problem solvers. We're curious, collaborative, and always looking for better ways to do things.",
  },
  {
    slug: "content-data-strategist",
    title: "Content & Data Strategist",
    location: "Amsterdam, NL",
    department: "Strategy",
    type: "Full-time",
    excerpt: "Develop data-driven content strategies that maximize engagement and deliver measurable business outcomes for our clients.",
    intro: "We're seeking a Content & Data Strategist to help our clients unlock the full potential of their digital communication investments. You'll combine creativity with analytics to develop strategies that drive real results.",
    aboutRole: "As a Content & Data Strategist, you'll sit at the intersection of creativity and analytics. You'll develop content strategies that leverage data insights to maximize engagement and business impact. Working with clients across industries, you'll define content approaches, measurement frameworks, and optimization strategies.",
    responsibilities: [
      "Develop comprehensive content strategies for digital signage and experience platforms",
      "Design measurement frameworks and KPI structures",
      "Analyze audience data to drive content optimization",
      "Create content playbooks and governance guidelines",
      "Lead workshops and discovery sessions with clients",
      "Collaborate with creative and technical teams",
      "Present insights and recommendations to senior stakeholders",
    ],
    requirements: [
      "5+ years in content strategy, digital marketing, or related field",
      "Strong analytical skills and comfort with data",
      "Experience with audience analytics and measurement",
      "Excellent presentation and communication skills",
      "Strategic thinking combined with attention to detail",
      "Ability to translate data into actionable recommendations",
      "Experience working with enterprise clients",
    ],
    niceToHaves: [
      "Background in retail, hospitality, or corporate communications",
      "Experience with digital signage or OOH media",
      "Data visualization skills (Tableau, Power BI)",
      "UX or service design background",
    ],
    whatWeOffer: [
      "Shape strategy for major brands",
      "Work with cutting-edge analytics platforms",
      "Collaborative, supportive team environment",
      "Professional development opportunities",
      "Competitive salary and benefits",
      "Flexible working arrangements",
      "Regular team events and activities",
    ],
    teamNote: "The Strategy team is where big ideas meet rigorous thinking. We're a diverse group of strategists, analysts, and consultants who love turning complexity into clarity.",
  },
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    location: "Amsterdam, NL (Hybrid)",
    department: "Sales",
    type: "Full-time",
    excerpt: "Drive growth by identifying opportunities and building relationships with enterprise clients seeking digital experience solutions.",
    intro: "Join our commercial team as a Business Development Manager and play a key role in PixIQ's growth. You'll identify opportunities, build relationships, and help clients understand how our solutions can transform their business.",
    aboutRole: "As a Business Development Manager, you'll be responsible for generating new business opportunities and building lasting client relationships. You'll work with enterprise organizations across industries, understanding their challenges and demonstrating how PixIQ's integrated approach can deliver measurable value. This is a strategic role requiring both commercial acumen and technical understanding.",
    responsibilities: [
      "Identify and qualify new business opportunities",
      "Build and maintain relationships with enterprise decision-makers",
      "Lead proposal development and presentations",
      "Negotiate contracts and close deals",
      "Collaborate with delivery teams on project scoping",
      "Represent PixIQ at industry events and conferences",
      "Contribute to sales strategy and market positioning",
    ],
    requirements: [
      "5+ years of B2B sales experience in technology or professional services",
      "Proven track record of achieving sales targets",
      "Experience selling complex solutions to enterprise clients",
      "Strong presentation and negotiation skills",
      "Understanding of AV, digital signage, or related technologies",
      "Consultative selling approach",
      "Fluent in English; Dutch and/or French preferred",
    ],
    niceToHaves: [
      "Existing network in relevant industries",
      "Technical background or certifications",
      "Experience with CRM systems (HubSpot, Salesforce)",
      "Understanding of ROI modeling and business case development",
    ],
    whatWeOffer: [
      "Competitive base salary plus commission",
      "Growth opportunities in expanding company",
      "Quality solutions you can be proud of",
      "Supportive, collaborative team culture",
      "Flexible working arrangements",
      "Travel to meet clients across Europe",
      "Professional development support",
    ],
    teamNote: "Our Sales team is more than order-takers - we're consultants who genuinely understand client needs and match them with the right solutions. We win together.",
  },
]

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug)
}

export function getAllJobSlugs(): string[] {
  return jobs.map((j) => j.slug)
}

export const departments = [...new Set(jobs.map((j) => j.department))]
