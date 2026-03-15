import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  headline: string
  subheadline: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  className?: string
  align?: "left" | "center"
  size?: "default" | "large"
}

/**
 * Hero Section Component
 * Main hero for pages with headline, subheadline, and CTAs
 * Future: Add background image/video support, animated elements
 */
export function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  className,
  align = "left",
  size = "default",
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden",
      className
    )}>
      {/* Abstract Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" 
          style={{ backgroundColor: 'rgba(22, 152, 213, 0.08)' }}
        />
        <div 
          className="absolute top-1/2 -left-20 w-60 h-60 rounded-full blur-3xl" 
          style={{ backgroundColor: 'rgba(44, 77, 152, 0.08)' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full blur-2xl opacity-10" 
          style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "max-w-4xl",
          align === "center" && "mx-auto text-center"
        )}>
          <h1 className={cn(
            "font-heading font-bold text-foreground leading-tight text-balance",
            size === "large" 
              ? "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl" 
              : "text-3xl sm:text-4xl lg:text-5xl"
          )}>
            {headline}
          </h1>
          <p className={cn(
            "mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty",
            align === "center" && "mx-auto"
          )}>
            {subheadline}
          </p>
          
          {(primaryCTA || secondaryCTA) && (
            <div className={cn(
              "mt-10 flex flex-col sm:flex-row gap-4",
              align === "center" && "justify-center"
            )}>
              {primaryCTA && (
                <Button
                  asChild
                  size="lg"
                  className="hover:opacity-90 text-white font-medium px-8"
                  style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
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
                  style={{ 
                    borderColor: 'rgba(44, 77, 152, 0.3)', 
                    color: '#2c4d98',
                  }}
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
