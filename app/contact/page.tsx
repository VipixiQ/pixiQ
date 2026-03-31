import { Metadata } from 'next'
import { Section, Container } from '@/components/layout/section'
import { ContactForm } from '@/components/forms/contact-form'
import { PageHeader } from '@/components/layout/section'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ready to transform your space? Contact pixiQ for a consultation on digital signage, AV integration, and content intelligence solutions.',
}

const offices = [
  {
    city: 'Ostend',
    country: 'Belgium',
    address: 'Torhoutsteenweg 649A',
    postalCode: '8400 Ostend',
    phone: '+32 59 79 16 16',
    email: 'hello@pixiq.eu',
    isHeadquarters: true,
  },
  
]

const contactReasons = [
  {
    title: 'Project Inquiry',
    description: 'Discuss a new project or explore how we can help transform your space.',
    icon: '01',
  },
  {
    title: 'Partnership',
    description: 'Explore strategic partnerships and collaboration opportunities.',
    icon: '02',
  },
  {
    title: 'Support',
    description: 'Get technical support or assistance with existing installations.',
    icon: '03',
  },
  {
    title: 'Careers',
    description: 'Join our team of innovators shaping the future of digital experiences.',
    icon: '04',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader>
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-pixiq-secondary uppercase tracking-wider mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 text-balance">
            Let&apos;s Create Something{" "}
            <span className="bg-pixiq-gradient bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Ready to transform your space into a data-driven digital experience? We&apos;d love to hear from you.
          </p>
        </div>
      </PageHeader>

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

      {/* Contact Form Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-serif font-bold text-3xl mb-4 text-foreground">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and one of our experts will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h2 className="font-serif font-bold text-3xl mb-4 text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prefer to reach out directly? Here are all the ways you can connect with us.
              </p>

              {/* Quick Contact */}
              <div className="space-y-4 mb-12">
                <a
                  href="tel:+3259791616"
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <p className="font-semibold text-foreground">+32 59 79 16 16</p>
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
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="font-semibold text-foreground">hello@pixiq.eu</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Business hours</p>
                    <p className="font-semibold text-foreground">Mon-Fri: 8:30 - 17:00</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Follow Us</h3>
                <div className="flex gap-3">
                  {['LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Office Locations */}
      <Section className="bg-[#2c4d98] text-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">
              Our Office
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Based in Ostend, Belgium, serving clients across Europe.
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
                    Headquarters
                  </span>
                )}
                <h3 className="font-serif font-bold text-xl mb-1">{office.city}</h3>
                <p className="text-white/60 text-sm mb-4">{office.country}</p>
                
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
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-white/80 hover:text-white">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-white/80 hover:text-white">
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
  title="pixiQ Office Location"
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
