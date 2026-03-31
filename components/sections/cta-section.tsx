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
          ? { backgroundImage: "linear-gradient(to right, #1698d5, #2c4d98)" }
          : isDark
            ? { backgroundColor: "#000000" }
            : undefined
      }
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className={cn(
              "text-3xl lg:text-4xl font-heading font-bold leading-tight text-balance mb-6",
              isGradient || isDark ? "text-white" : "text-foreground"
            )}
          >
            {headline}
          </h2>

          {description && (
            <p
              className={cn(
                "text-lg leading-relaxed mb-8",
                isGradient || isDark ? "text-white/80" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCTA && (
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "font-medium px-8",
                    isGradient || isDark
                      ? "!bg-white !text-pixiq-primary hover:!bg-white/90"
                      : "!bg-pixiq-gradient !text-white hover:opacity-90"
                  )}
                >
                  <Link href={primaryCTA.href} className="inline-flex items-center">
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
                  className={cn(
                    "font-medium px-8",
                    isGradient || isDark
                      ? "!bg-transparent !border-white/30 !text-white hover:!bg-white/10 hover:!text-white"
                      : "!bg-white !border-pixiq-primary/30 !text-pixiq-primary hover:!bg-pixiq-primary/5 hover:!text-pixiq-primary"
                  )}
                >
                  <Link href={secondaryCTA.href} className="inline-flex items-center">
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