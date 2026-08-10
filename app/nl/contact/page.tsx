import type { Metadata } from "next"
import Image from "next/image"
import { Section, Container } from "@/components/layout/section"
import { ContactForm } from "@/components/forms/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Klaar om uw ruimte te transformeren? Contacteer pixiQ voor advies rond digital signage, AV-integratie en content intelligence.",
}

const offices = [
  {
    city: "Oostende",
    country: "België",
    address: "Torhoutsteenweg 649A",
    postalCode: "8400 Oostende",
    phone: "+32 59 79 16 16",
    email: "hello@pixiq.eu",
    isHeadquarters: true,
  },
]

const contactReasons = [
  {
    title: "Projectaanvraag",
    description:
      "Bespreek een nieuw project of ontdek hoe we uw ruimte kunnen transformeren.",
    icon: "01",
  },
  {
    title: "Partnership",
    description:
      "Ontdek strategische samenwerkingen en mogelijke partnerships.",
    icon: "02",
  },
  {
    title: "Support",
    description:
      "Krijg technische ondersteuning of hulp bij bestaande installaties.",
    icon: "03",
  },
  {
    title: "Vacatures",
    description:
      "Word deel van ons team en bouw mee aan de toekomst van digitale belevingen.",
    icon: "04",
  },
]

export default function ContactPage() {
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
              src="/pictures/10-contact-hero.png"
              alt="Contact pixiQ"
              fill
              priority
              className="object-cover object-center opacity-80 scale-[1.02]"
            />
          </div>
        </div>

        <Container className="relative">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
              Contact
            </p>

            <h1 className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-heading font-bold leading-[1.02] tracking-[-0.05em] text-black text-balance">
              Laten we samen iets{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2c4d98 0%, #1698d5 100%)",
                }}
              >
                uitzonderlijks creëren.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563] sm:text-xl lg:text-[1.45rem]">
              Klaar om uw ruimte te transformeren tot een datagedreven digitale
              beleving? We horen graag van u.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Reasons */}
      <Section className="bg-muted/30">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-background p-6 rounded-lg border border-border hover:border-primary/30 transition-colors group"
              >
                <span className="text-4xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {reason.icon}
                </span>

                <h3 className="font-serif font-bold text-lg mt-4 mb-2 text-foreground">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif font-bold text-3xl mb-4 text-foreground">
                Stuur ons een bericht
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Vul onderstaand formulier in en één van onze experts neemt
                contact met u op.
              </p>

              <ContactForm />
            </div>

            <div className="lg:pl-8">
              <h2 className="font-serif font-bold text-3xl mb-4 text-foreground">
                Neem contact op
              </h2>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Liever rechtstreeks contact opnemen? Hieronder vindt u alle
                manieren om ons te bereiken.
              </p>

              <div className="space-y-4 mb-12">
                <a
                  href="tel:+3259791616"
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Bel ons</p>
                    <p className="font-semibold text-foreground">
                      +32 59 79 16 16
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@pixiq.eu"
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Mail ons</p>
                    <p className="font-semibold text-foreground">
                      hello@pixiq.eu
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Openingsuren
                    </p>
                    <p className="font-semibold text-foreground">
                      Ma-vr: 8:30 - 17:00
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">
                  Volg ons
                </h3>

                <div className="flex flex-wrap gap-3">
                  {["LinkedIn", "Twitter", "Instagram", "YouTube"].map(
                    (social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                      >
                        {social}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Office */}
      <Section className="bg-[#2c4d98] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
              Ons kantoor
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto">
              Gevestigd in Oostende, België, en actief voor klanten in heel
              Europa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors"
              >
                {office.isHeadquarters && (
                  <span className="inline-block px-3 py-1 bg-[#1698d5] text-white text-xs font-semibold rounded-full mb-4">
                    Hoofdkantoor
                  </span>
                )}

                <h3 className="font-serif font-bold text-xl mb-1">
                  {office.city}
                </h3>

                <p className="text-white/60 text-sm mb-4">
                  {office.country}
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />

                    <div className="text-white/80">
                      <p>{office.address}</p>
                      <p>{office.postalCode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />

                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="text-white/80 hover:text-white"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />

                    <a
                      href={`mailto:${office.email}`}
                      className="text-white/80 hover:text-white"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section className="!py-0">
        <div className="rounded-2xl overflow-hidden border border-border">
          <iframe
            title="pixiQ kantoorlocatie"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Torhoutsesteenweg%20649A,%208400%20Ostend,%20Belgium&z=15&output=embed"
          />
        </div>
      </Section>
    </>
  )
}