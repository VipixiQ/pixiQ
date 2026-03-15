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

/**
 * Contact Form Component
 * Main conversion form with fields for name, company, email, sector, language, message
 * Future: Connect to CRM (HubSpot), add file upload, validation, reCAPTCHA
 */
export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - Future: Connect to API/CRM
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className={cn(
        "p-8 lg:p-12 rounded-xl border border-border bg-card text-center",
        className
      )}>
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
        {/* Name & Company */}
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

        {/* Email */}
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

        {/* Sector & Language */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
              Sector
            </label>
            <Select name="sector">
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
            <Select name="language" defaultValue="en">
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

        {/* Message */}
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

        {/* Submit */}
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
