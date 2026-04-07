"use client"

import { useState } from "react"
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
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [sector, setSector] = useState("")
  const [language, setLanguage] = useState("en")

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

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
        setLanguage("en")
      } else {
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please try again.")
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
          Thank you for reaching out
        </h3>
        <p className="text-muted-foreground">
          We&apos;ll get back to you within 24 hours to discuss your project.
        </p>
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
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name <span className="text-destructive">*</span>
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="h-12"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company <span className="text-destructive">*</span>
            </label>
            <Input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Company name"
              className="h-12"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email <span className="text-destructive">*</span>
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
            <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
              Sector
            </label>
            <Select value={sector} onValueChange={setSector}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="hospitality">Hospitality</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium text-foreground mb-2">
              Preferred language
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select language" />
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
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project or question..."
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
            "Sending..."
          ) : (
            <>
              Send message
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy. We&apos;ll respond within 24 hours.
        </p>
      </div>
    </form>
  )
}