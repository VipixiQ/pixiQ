import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SolutionCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
  className?: string
}

/**
 * Solution Card Component
 * Displays solution/service with hover effects
 * Future: Add image support, expanded content options
 */
export function SolutionCard({
  title,
  description,
  href,
  icon,
  className,
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block p-8 lg:p-10 rounded-lg border bg-card",
        "transition-all duration-300 hover:shadow-lg",
        "hover:-translate-y-1",
        className
      )}
      style={{ borderColor: 'rgba(44, 77, 152, 0.15)' }}
    >
      {/* Blue top border accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 rounded-t-lg"
        style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
      />
      
      {/* Gradient accent on hover */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
        style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
      />
      
      <div className="relative">
        {icon && (
          <div 
            className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg text-white"
            style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
          >
            {icon}
          </div>
        )}
        
        <h3 className="text-xl lg:text-2xl font-heading text-foreground mb-3 group-hover:text-[#2c4d98] transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>
        
        <span 
          className="inline-flex items-center text-sm font-medium"
          style={{ color: '#2c4d98' }}
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

/**
 * Large Solution Card for featured display
 */
export function SolutionCardLarge({
  title,
  description,
  href,
  icon,
  className,
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block p-10 lg:p-12 rounded-xl border bg-card overflow-hidden",
        "transition-all duration-300 hover:shadow-xl",
        className
      )}
      style={{ borderColor: 'rgba(44, 77, 152, 0.15)' }}
    >
      {/* Background gradient accent */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" 
        style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
      />
      
      <div className="relative">
        {icon && (
          <div 
            className="mb-8 w-16 h-16 flex items-center justify-center rounded-xl text-white"
            style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
          >
            {icon}
          </div>
        )}
        
        <h3 className="text-2xl lg:text-3xl font-heading text-foreground mb-4 group-hover:text-[#2c4d98] transition-colors">
          {title}
        </h3>
        
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {description}
        </p>
        
        <span 
          className="inline-flex items-center text-base font-medium"
          style={{ color: '#2c4d98' }}
        >
          Explore solution
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
