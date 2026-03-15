import { cn } from "@/lib/utils"

interface SectionIntroProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

/**
 * Section Intro Component
 * Use at the top of sections for consistent heading treatment
 * Future: Add animation variants, icon support
 */
export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionIntroProps) {
  return (
    <div className={cn(
      "mb-12 lg:mb-16",
      align === "center" && "text-center",
      className
    )}>
      {eyebrow && (
        <p 
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: '#1698d5' }}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={cn(
        "text-2xl sm:text-3xl lg:text-4xl font-heading text-foreground leading-tight text-balance",
        align === "center" && "max-w-3xl mx-auto"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground leading-relaxed text-pretty",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
