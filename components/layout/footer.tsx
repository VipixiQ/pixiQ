"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinksEn = {
  solutions: [
    { name: "Digital Signage as a Service", href: "/solutions/digital-signage-as-a-service" },
    { name: "AV & Experience Integration", href: "/solutions/experience" },
    { name: "Content & Data Intelligence", href: "/solutions/data" },
    { name: "Consultancy & Strategy", href: "/solutions/consultancy" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Cases", href: "/cases" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

const footerLinksNl = {
  solutions: [
    { name: "Digital Signage as a Service", href: "/nl/solutions/digital-signage-as-a-service" },
    { name: "AV & Experience Integration", href: "/nl/solutions/experience" },
    { name: "Content & Data Intelligence", href: "/nl/solutions/data" },
    { name: "Consultancy & Strategie", href: "/nl/solutions/consultancy" },
  ],
  company: [
    { name: "Over ons", href: "/nl/about" },
    { name: "Cases", href: "/nl/cases" },
    { name: "Vacatures", href: "/nl/careers" },
    { name: "Contact", href: "/nl/contact" },
  ],
  legal: [
    { name: "Privacybeleid", href: "/privacy" },
    { name: "Algemene voorwaarden", href: "/terms" },
    { name: "Cookiebeleid", href: "/cookies" },
  ],
}

export function Footer() {
  const pathname = usePathname()
  const isNl = pathname.startsWith("/nl")
 
  const footerLinks = isNl ? footerLinksNl : footerLinksEn
  const homeHref = isNl ? "/nl" : "/"
  const contactHref = isNl ? "/nl/contact" : "/contact"
  const careersHref = isNl ? "/nl/careers" : "/careers"

  return (
    <footer className="text-white" style={{ backgroundColor: "#000000" }}>
      <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6 text-balance">
                {isNl ? "Klaar om impact meetbaar te maken?" : "Ready to measure impact?"}
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                {isNl
                  ? "Laten we bespreken hoe we jouw digitale aanwezigheid kunnen vertalen naar meetbare bedrijfsresultaten."
                  : "Let's discuss how we can transform your digital presence into measurable business results."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="hover:opacity-90 text-white font-medium px-8"
                  style={{ backgroundImage: "linear-gradient(to right, #1698d5, #2c4d98)" }}
                >
                  <Link href={contactHref}>
                    {isNl ? "Plan een gesprek" : "Book Meeting"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
  asChild
  size="lg"
  variant="outline"
  className="border-white bg-black text-white hover:bg-white hover:text-pixiq-primary font-medium px-8"
>
  <Link href={contactHref}>{isNl ? "Contacteer ons" : "Contact Us"}</Link>
</Button>

                <Button
  asChild
  size="lg"
  variant="ghost"
  className="bg-transparent text-white border border-white/30 hover:bg-white hover:text-pixiq-primary hover:border-white font-medium px-8"
>
  <Link href={careersHref}>{isNl ? "Vacatures" : "Careers"}</Link>
</Button>
              </div>
            </div>
          </div>
        </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href={homeHref} className="flex items-center mb-6">
              <Image src="/pixiQ_V1.png" alt="pixiQ" className="h-9 w-auto" width={170} height={50} />
            </Link>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {isNl
                ? "We verbinden hardware, software, content en data tot één meetbare digitale ervaring."
                : "Connecting hardware, software, content and data into one measurable digital experience."}
            </p>

            <div className="space-y-2 text-sm text-white/60">
              <a href="mailto:hello@pixiq.eu">hello@pixiq.eu</a>
              <p>+32 (0) 59 79 16 16</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {isNl ? "Bedrijf" : "Company"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} pixiQ. {isNl ? "Alle rechten voorbehouden." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}