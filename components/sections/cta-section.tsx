import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTASectionProps {
  headline: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  className?: string
  variant?: "default" | "gradient" | "dark"
}

/**
 * CTA Section Component
 * Conversion-focused call-to-action section
 * Future: Add background image/pattern options
 */
export function CTASection({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  className,
  variant = "default",
}: CTASectionProps) {
  const isGradient = variant === "gradient"
  const isDark = variant === "dark"
  
  return (
    <section 
      className={cn(
        "py-16 lg:py-24",
        !isGradient && !isDark && "bg-muted/50",
        className
      )}
      style={
        isGradient 
          ? { backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }
          : isDark 
            ? { backgroundColor: '#000000' }
            : undefined
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={cn(
            "text-3xl lg:text-4xl font-heading font-bold leading-tight text-balance mb-6",
            (isGradient || isDark) ? "text-white" : "text-foreground"
          )}>
            {headline}
          </h2>
          
          {description && (
            <p className={cn(
              "text-lg leading-relaxed mb-8",
              (isGradient || isDark) ? "text-white/80" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button
                  asChild
                  size="lg"
                  className="font-medium px-8"
                  style={
                    (isGradient || isDark) 
                      ? { backgroundColor: 'white', color: '#2c4d98' }
                      : { backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)', color: 'white' }
                  }
                >
                  <Link href={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-medium px-8"
                  style={
                    (isGradient || isDark) 
                      ? { borderColor: 'rgba(255, 255, 255, 0.3)', color: 'white' }
                      : { borderColor: 'rgba(44, 77, 152, 0.3)', color: '#2c4d98' }
                  }
                >
                  <Link href={secondaryCTA.href}>
                    {secondaryCTA.text}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
