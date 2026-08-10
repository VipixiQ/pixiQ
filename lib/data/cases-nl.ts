export interface CaseStudyNL {
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

  imageSrc?: string
  challengeImage?: string
  approachImage?: string
  resultImage?: string
  galleryImages?: string[]
  featured?: boolean
}

export const casesNL: CaseStudyNL[] = [
  {
    slug: "filou-oostende",
    title: "Filou Oostende",
    client: "Basketbalclub Oostende",
    industry: "Sport & Entertainment",

    excerpt:
      "Een geïntegreerde digital signage-oplossing die de digitale communicatie en guest experience versterkt in zowel de supportersinkom als de VIP-omgeving van de arena.",

    challenge:
      "Filou Oostende wilde de digitale communicatie en de algemene guest experience versterken in zowel de algemene supportersinkom als de VIP-ruimte van de basketbalarena. De arena wordt niet alleen gebruikt voor basketbalwedstrijden, maar ook voor comedyshows, concerten en andere sportevents. Daardoor was er nood aan een flexibele communicatieoplossing die eenvoudig kon worden aangepast aan het type event, het publiek en het moment. In de VIP-omgeving was het doel om bezoekers duidelijker naar de VIP-lounge en het restaurant te begeleiden, en tegelijk digitale communicatie in te zetten voor wedstrijdinformatie, spelerscontent, menu’s, sponsorboodschappen en interactieve beleving.",

    approach:
      "pixiQ implementeerde een geïntegreerde digital signage-oplossing in zowel de supportersinkom als de VIP-omgeving. In de algemene inkom werd indoor LED-technologie achter glas geplaatst om een sterke visuele impact te creëren bij het binnenkomen van de arena. De oplossing werd beheerd via My Signage Portal, waardoor het marketingteam de content op elk moment kan aanpassen. Zo kan de club de communicatie flexibel afstemmen op basketbalwedstrijden, concerten, comedyshows en andere events die in de arena plaatsvinden. In de VIP-ruimte werden digitale displays ingezet om bezoekers naar de VIP-lounge en het restaurant te begeleiden. Aan de bar en doorheen de VIP-omgeving tonen interactieve schermen wedstrijdinformatie, spelerscontent, menucommunicatie, sponsorboodschappen en gamification vóór, tijdens en na de wedstrijd. Bezoekers kunnen daarnaast hun ticket scannen om hun exacte zitplaats in de arena terug te vinden, wat de beleving ook praktisch eenvoudiger maakt.",

    result:
      "Het project zorgde voor een meer dynamische en professionele bezoekerservaring doorheen de arena. Supporters worden sterker visueel verwelkomd in de inkom, terwijl het marketingteam snel en flexibel content kan beheren naargelang het type event. In de VIP-omgeving worden bezoekers vlotter begeleid en krijgen ze relevante informatie op de juiste momenten: van wedstrijdinformatie en spelerscontent tot menu’s, sponsorboodschappen en interactieve activaties. Door digital signage, flexibele contentsturing en interactieve touchpoints te combineren, creëerde Filou Oostende een sterkere en efficiëntere guest experience voor zowel reguliere bezoekers als VIP-gasten.",

    kpis: [],

    imageSrc: "/pictures/case-filou-oostende-hero.jpg",

    challengeImage:
      "/pictures/case-filou-oostende-crowd.jpg",

    approachImage:
      "/pictures/case-filou-oostende-led-vip-bar-1.jpg",

    resultImage:
      "/pictures/case-filou-oostende-vip.jpg",

    galleryImages: [
      "/pictures/case-filou-oostende-led-vip-bar-2.jpg",
      "/pictures/case-filou-oostende-hds.jpeg",
      "/pictures/case-filou-oostende-led-vip-bar-3.jpeg",
    ],

    relatedSolution: {
      title: "Digital Signage as a Service",
      href: "/nl/solutions/digital-signage-as-a-service",
    },

    featured: true,
  },
]

export function getCaseBySlugNL(
  slug: string
): CaseStudyNL | undefined {
  return casesNL.find((caseStudy) => caseStudy.slug === slug)
}

export function getAllCaseSlugsNL(): string[] {
  return casesNL.map((caseStudy) => caseStudy.slug)
}

export function getFeaturedCasesNL(): CaseStudyNL[] {
  return casesNL.filter((caseStudy) => caseStudy.featured)
}