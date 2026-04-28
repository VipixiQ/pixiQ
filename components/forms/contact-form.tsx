"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { ArrowRight, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const pathname = usePathname()
  const isDutch = pathname.startsWith("/nl")

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [sector, setSector] = useState("")
  const [language, setLanguage] = useState(isDutch ? "nl" : "en")

  const endpoint = "https://formspree.io/f/mvzvlbog"

  const t = {
    thankYou: isDutch
      ? "Bedankt voor uw bericht"
      : "Thank you for reaching out",

    thankYouText: isDutch
      ? "We nemen binnen 24 uur contact met u op om uw project te bespreken."
      : "We’ll get back to you within 24 hours to discuss your project.",

    name: isDutch ? "Naam" : "Name",
    yourName: isDutch ? "Uw naam" : "Your name",

    company: isDutch ? "Bedrijf" : "Company",
    companyName: isDutch ? "Bedrijfsnaam" : "Company name",

    email: "Email",

    sector: isDutch ? "Sector" : "Sector",
    selectSector: isDutch ? "Selecteer sector" : "Select sector",

    language: isDutch ? "Voorkeurstaal" : "Preferred language",
    selectLanguage: isDutch ? "Selecteer taal" : "Select language",

    message: isDutch ? "Bericht" : "Message",
    messagePlaceholder: isDutch
      ? "Vertel ons meer over uw project of vraag..."
      : "Tell us about your project or question...",

    sending: isDutch ? "Verzenden..." : "Sending...",
    sendMessage: isDutch ? "Bericht verzenden" : "Send message",

    privacy: isDutch
      ? "Door dit formulier te verzenden gaat u akkoord met ons privacybeleid. We reageren binnen 24 uur."
      : "By submitting this form, you agree to our privacy policy. We’ll respond within 24 hours.",

    errorGeneric: isDutch
      ? "Er ging iets mis. Probeer opnieuw."
      : "Something went wrong. Please try again.",

    networkError: isDutch
      ? "Netwerkfout. Probeer opnieuw."
      : "Network error. Please try again.",
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    if (!endpoint) {
      setError("Form endpoint is missing. Check your env.local file.")
      setIsSubmitting(false)
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.set("sector", sector)
    formData.set("language", language)

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
        setSector("")
        setLanguage(isDutch ? "nl" : "en")
      } else {
        setError(data?.errors?.[0]?.message || t.errorGeneric)
      }
    } catch {
      setError(t.networkError)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div
        className={cn(
          "p-8 lg:p-12 rounded-xl border border-border bg-card text-center",
          className
        )}
      >
        <CheckCircle2 className="h-16 w-16 text-pixiq-secondary mx-auto mb-6" />
        <h3 className="text-2xl font-heading text-foreground mb-3">
          {t.thankYou}
        </h3>
        <p className="text-muted-foreground">{t.thankYouText}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "p-6 lg:p-10 rounded-xl border border-border bg-card",
        className
      )}
    >
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t.name} <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t.yourName}
              className="h-12"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t.company} <span className="text-destructive">*</span>
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              placeholder={t.companyName}
              className="h-12"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t.email} <span className="text-destructive">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="h-12"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="sector"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t.sector}
            </label>
            <Select value={sector} onValueChange={setSector}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t.selectSector} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="other">
                  {isDutch ? "Andere" : "Other"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {t.language}
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t.selectLanguage} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="nl">Nederlands</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t.message} <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder={t.messagePlaceholder}
            rows={5}
            className="resize-none"
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button
          type="submit"
          size="lg"
          className="w-full bg-pixiq-gradient hover:opacity-90 text-white font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            t.sending
          ) : (
            <>
              {t.sendMessage}
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          {t.privacy}
        </p>
      </div>
    </form>
  )
}