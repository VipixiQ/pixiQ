import Link from "next/link"
import { ArrowRight, MapPin, Building2, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface JobCardProps {
  title: string
  location: string
  department: string
  type?: string // Full-time, Part-time, etc.
  excerpt?: string
  href: string
  className?: string
}

/**
 * Job Card Component
 * Displays job listing preview
 * Future: Add tags, urgency indicators
 */
export function JobCard({
  title,
  location,
  department,
  type,
  excerpt,
  href,
  className,
}: JobCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block p-6 lg:p-8 rounded-lg border border-border bg-card",
        "transition-all duration-300 hover:shadow-lg hover:border-pixiq-primary/20",
        "hover:-translate-y-1",
        className
      )}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg lg:text-xl font-heading text-foreground mb-3 group-hover:text-pixiq-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {location}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4" />
              {department}
            </span>
            {type && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {type}
              </span>
            )}
          </div>
          
          {excerpt && (
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          )}
        </div>
        
        <div className="flex-shrink-0">
          <span className="inline-flex items-center text-sm font-medium text-pixiq-primary">
            View job
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}

/**
 * Job Meta Component
 * Displays job metadata in detail page
 */
interface JobMetaProps {
  location: string
  department: string
  type: string
  className?: string
}

export function JobMeta({
  location,
  department,
  type,
  className,
}: JobMetaProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-lg bg-muted/50 border border-border",
      className
    )}>
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <MapPin className="h-4 w-4" />
          Location
        </div>
        <div className="font-medium text-foreground">{location}</div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <Building2 className="h-4 w-4" />
          Department
        </div>
        <div className="font-medium text-foreground">{department}</div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
          <Clock className="h-4 w-4" />
          Employment
        </div>
        <div className="font-medium text-foreground">{type}</div>
      </div>
    </div>
  )
}
