import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ValuePillarProps {
  icon?: LucideIcon
  title: string
  description: string
  className?: string
}

/**
 * Value Pillar Component
 * Displays value proposition with icon, title, description
 */
export function ValuePillar({
  icon: Icon,
  title,
  description,
  className,
}: ValuePillarProps) {
  return (
    <div className={cn("text-center lg:text-left", className)}>
      {Icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-pixiq-gradient text-white mb-5">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-lg lg:text-xl font-heading text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}

/**
 * Feature List Item
 */
interface FeatureItemProps {
  title: string
  description?: string
  className?: string
}

export function FeatureItem({
  title,
  description,
  className,
}: FeatureItemProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-pixiq-gradient" />
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  )
}

/**
 * Process Step
 */
interface ProcessStepProps {
  number: number
  title: string
  description: string
  className?: string
}

export function ProcessStep({
  number,
  title,
  description,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pixiq-gradient flex items-center justify-center text-white font-heading font-bold text-lg">
          {number}
        </div>
        <div className="flex-1 pt-1">
          <h3 className="text-lg font-heading text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
