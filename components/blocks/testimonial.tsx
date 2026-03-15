import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialQuoteProps {
  quote: string
  author: string
  role: string
  company?: string
  className?: string
}

/**
 * Testimonial Quote Component
 * Displays client testimonial with attribution
 * Future: Add image support, rating display
 */
export function TestimonialQuote({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialQuoteProps) {
  return (
    <blockquote className={cn(
      "relative p-8 lg:p-10 rounded-xl bg-card border border-border",
      className
    )}>
      <Quote 
        className="absolute top-6 left-6 h-8 w-8" 
        style={{ color: 'rgba(44, 77, 152, 0.2)' }}
      />
      
      <p className="relative text-lg lg:text-xl text-foreground leading-relaxed mb-6 pl-6">
        &ldquo;{quote}&rdquo;
      </p>
      
      <footer className="pl-6">
        <div className="font-medium text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role}
          {company && <span> at {company}</span>}
        </div>
      </footer>
    </blockquote>
  )
}

/**
 * Simple inline testimonial
 */
export function TestimonialInline({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialQuoteProps) {
  return (
    <blockquote className={cn("text-center max-w-3xl mx-auto", className)}>
      <p className="text-2xl lg:text-3xl text-foreground leading-relaxed mb-6 text-balance">
        &ldquo;{quote}&rdquo;
      </p>
      
      <footer>
        <div className="font-medium text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">
          {role}
          {company && <span> at {company}</span>}
        </div>
      </footer>
    </blockquote>
  )
}
