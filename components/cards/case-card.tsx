import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaseCardProps {
  title: string
  excerpt: string
  href: string
  kpiLabel?: string
  kpiValue?: string
  industry?: string
  imagePlaceholder?: boolean
  className?: string
}

/**
 * Case Card Component
 * Displays case study preview with optional KPI
 * Future: Add actual image support, video thumbnail
 */
export function CaseCard({
  title,
  excerpt,
  href,
  kpiLabel,
  kpiValue,
  industry,
  imagePlaceholder = true,
  className,
}: CaseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-lg border bg-card overflow-hidden",
        "transition-all duration-300 hover:shadow-lg",
        "hover:-translate-y-1",
        className
      )}
      style={{ borderColor: 'rgba(44, 77, 152, 0.15)' }}
    >
      {/* Image placeholder / thumbnail area */}
      {imagePlaceholder && (
        <div className="relative aspect-[16/10] bg-muted overflow-hidden">
          {/* Abstract visual placeholder */}
          <div 
            className="absolute inset-0 opacity-15" 
            style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
          />
          <div className="absolute bottom-4 right-4 top-4 left-4 rounded-lg border border-white/10 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="w-20 h-20 rounded-full opacity-30 blur-xl" 
              style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
            />
          </div>
          
          {/* KPI Badge */}
          {kpiValue && (
            <div 
              className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-md"
              style={{ backgroundColor: '#2c4d98' }}
            >
              <span className="text-lg font-bold">{kpiValue}</span>
              {kpiLabel && (
                <span className="block text-xs text-white/80">{kpiLabel}</span>
              )}
            </div>
          )}
          
          {/* Industry tag */}
          {industry && (
            <div 
              className="absolute top-4 left-4 bg-white/90 text-xs font-medium px-3 py-1 rounded-full"
              style={{ color: '#6f6f6e' }}
            >
              {industry}
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 lg:p-8">
        <h3 className="text-lg lg:text-xl font-heading text-foreground mb-2 group-hover:text-[#2c4d98] transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        
        <span 
          className="inline-flex items-center text-sm font-medium"
          style={{ color: '#2c4d98' }}
        >
          View project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

/**
 * Featured Case Card - larger display
 */
export function CaseCardFeatured({
  title,
  excerpt,
  href,
  kpiLabel,
  kpiValue,
  industry,
  className,
}: CaseCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-xl border bg-card overflow-hidden",
        "transition-all duration-300 hover:shadow-xl",
        className
      )}
      style={{ borderColor: 'rgba(44, 77, 152, 0.15)' }}
    >
      <div className="grid lg:grid-cols-2">
        {/* Image area */}
        <div className="relative aspect-[16/10] lg:aspect-auto bg-muted overflow-hidden">
          <div 
            className="absolute inset-0 opacity-15" 
            style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
          />
          <div className="absolute inset-8 rounded-xl border border-white/10 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div 
              className="w-32 h-32 rounded-full opacity-30 blur-2xl" 
              style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
            />
          </div>
          
          {industry && (
            <div 
              className="absolute top-6 left-6 bg-white/90 text-xs font-medium px-3 py-1 rounded-full"
              style={{ color: '#6f6f6e' }}
            >
              {industry}
            </div>
          )}
        </div>
        
        {/* Content area */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          {kpiValue && (
            <div className="mb-6">
              <span 
                className="text-4xl lg:text-5xl font-heading font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
              >
                {kpiValue}
              </span>
              {kpiLabel && (
                <span className="block text-sm text-muted-foreground mt-1">{kpiLabel}</span>
              )}
            </div>
          )}
          
          <h3 className="text-2xl lg:text-3xl font-heading text-foreground mb-4 group-hover:text-[#2c4d98] transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {excerpt}
          </p>
          
          <span 
            className="inline-flex items-center text-base font-medium"
            style={{ color: '#2c4d98' }}
          >
            View project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
