import Link from "next/link"
import { cn } from "@/lib/utils"

interface TeamCardProps {
  name: string
  role: string
  quote?: string
  imagePlaceholder?: boolean
  linkedIn?: string
  className?: string
}

/**
 * Team Card Component
 * Displays team member with photo, role, and optional quote
 * Future: Add actual image support, social links
 */
export function TeamCard({
  name,
  role,
  quote,
  imagePlaceholder = true,
  linkedIn,
  className,
}: TeamCardProps) {
  return (
    <div className={cn(
      "group text-center",
      className
    )}>
      {/* Photo placeholder */}
      {imagePlaceholder && (
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-heading font-bold text-pixiq-primary/30">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
      )}
      
      <h3 className="text-lg font-heading text-foreground mb-1">
        {linkedIn ? (
          <Link 
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pixiq-primary transition-colors"
          >
            {name}
          </Link>
        ) : (
          name
        )}
      </h3>
      
      <p className="text-sm text-pixiq-secondary font-medium mb-3">
        {role}
      </p>
      
      {quote && (
        <p className="text-sm text-muted-foreground italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>
      )}
    </div>
  )
}

/**
 * Team Card - Horizontal layout
 */
export function TeamCardHorizontal({
  name,
  role,
  quote,
  imagePlaceholder = true,
  className,
}: TeamCardProps) {
  return (
    <div className={cn(
      "flex items-start gap-6 p-6 rounded-lg border border-border bg-card",
      className
    )}>
      {/* Photo placeholder */}
      {imagePlaceholder && (
        <div className="relative w-20 h-20 flex-shrink-0 rounded-full bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-pixiq-gradient opacity-10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-heading font-bold text-pixiq-primary/30">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
      )}
      
      <div>
        <h3 className="text-lg font-heading text-foreground mb-1">
          {name}
        </h3>
        
        <p className="text-sm text-pixiq-secondary font-medium mb-2">
          {role}
        </p>
        
        {quote && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        )}
      </div>
    </div>
  )
}
