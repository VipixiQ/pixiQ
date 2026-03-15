import { cn } from "@/lib/utils"

interface KPIBlockProps {
  value: string
  label: string
  description?: string
  className?: string
}

/**
 * KPI Block Component
 * Displays single KPI/metric with label
 */
export function KPIBlock({
  value,
  label,
  description,
  className,
}: KPIBlockProps) {
  return (
    <div className={cn("text-center", className)}>
      <div 
        className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold bg-clip-text text-transparent mb-2"
        style={{ backgroundImage: 'linear-gradient(to right, #1698d5, #2c4d98)' }}
      >
        {value}
      </div>
      <div className="text-sm font-medium text-foreground uppercase tracking-wider mb-1">
        {label}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

interface StatsBlockProps {
  stats: Array<{
    value: string
    label: string
    description?: string
  }>
  className?: string
  columns?: 2 | 3 | 4
}

/**
 * Stats Block Component
 * Grid of KPIs/metrics for case studies and impact sections
 */
export function StatsBlock({
  stats,
  className,
  columns = 3,
}: StatsBlockProps) {
  return (
    <div className={cn(
      "grid gap-8 lg:gap-12",
      columns === 2 && "grid-cols-2",
      columns === 3 && "grid-cols-2 lg:grid-cols-3",
      columns === 4 && "grid-cols-2 lg:grid-cols-4",
      className
    )}>
      {stats.map((stat, index) => (
        <KPIBlock
          key={index}
          value={stat.value}
          label={stat.label}
          description={stat.description}
        />
      ))}
    </div>
  )
}

/**
 * Stats Block with border separators
 */
export function StatsBlockBordered({
  stats,
  className,
}: StatsBlockProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border",
      className
    )}>
      {stats.map((stat, index) => (
        <div key={index} className="py-8 md:py-0 md:px-8 first:pt-0 first:md:pl-0 last:pb-0 last:md:pr-0">
          <KPIBlock
            value={stat.value}
            label={stat.label}
            description={stat.description}
          />
        </div>
      ))}
    </div>
  )
}
