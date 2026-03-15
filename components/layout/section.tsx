import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

/**
 * Page Section Wrapper
 * Use for consistent section spacing and container width
 * Future: Can be extended with background variants, padding options
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

/**
 * Full-width Section Wrapper
 * Use for sections that need edge-to-edge backgrounds
 */
export function SectionFull({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24", className)}>
      {children}
    </section>
  )
}

/**
 * Container for content within full-width sections
 */
export function Container({ children, className }: SectionProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

/**
 * Page Hero Section wrapper with extra top padding for header offset
 */
export function PageHeader({ children, className }: Omit<SectionProps, 'id'>) {
  return (
    <section className={cn("pt-32 lg:pt-40 pb-16 lg:pb-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
