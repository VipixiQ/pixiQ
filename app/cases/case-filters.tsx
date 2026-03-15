"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface CaseFiltersProps {
  industries: string[]
}

/**
 * Case Filters Component
 * Frontend-only filter UI (mock functionality)
 * Future: Connect to actual filtering logic, URL state, CMS
 */
export function CaseFilters({ industries }: CaseFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", ...industries]

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
              activeFilter === filter
                ? "bg-pixiq-gradient text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Active filter indicator */}
      {activeFilter !== "All" && (
        <p className="mt-4 text-sm text-muted-foreground">
          Showing projects in <span className="font-medium text-foreground">{activeFilter}</span>
          {" "}&bull;{" "}
          <button 
            onClick={() => setActiveFilter("All")}
            className="text-pixiq-primary hover:underline"
          >
            Clear filter
          </button>
        </p>
      )}
    </div>
  )
}
