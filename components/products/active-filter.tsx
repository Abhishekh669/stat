"use client"

import { getPriceRangeLabel } from "@/lib/filter-utlls"
import { FilterState } from "@/types/type"


interface ActiveFiltersProps {
  filters: FilterState
  clearFilter: (type: keyof FilterState, value: string) => void
  clearAllFilters: () => void
}

export const ActiveFilters = ({ filters, clearFilter, clearAllFilters }: ActiveFiltersProps) => {
  const hasActiveFilters = 
    filters.categories.length > 0 || 
    filters.priceRanges.length > 0 || 
    filters.brands.length > 0 ||
    filters.colors.length > 0
  
  if (!hasActiveFilters) return null
  
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.categories.map(category => (
        <div key={category} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full flex items-center">
          Category: {category}
          <button className="ml-2" onClick={() => clearFilter("categories", category)}>×</button>
        </div>
      ))}
      
      {filters.priceRanges.map(range => (
        <div key={range} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full flex items-center">
          Price: {getPriceRangeLabel(range)}
          <button className="ml-2" onClick={() => clearFilter("priceRanges", range)}>×</button>
        </div>
      ))}
      
      {filters.brands.map(brand => (
        <div key={brand} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full flex items-center">
          Brand: {brand}
          <button className="ml-2" onClick={() => clearFilter("brands", brand)}>×</button>
        </div>
      ))}
      
      {filters.colors.map(color => (
        <div key={color} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full flex items-center">
          Color: {color.charAt(0).toUpperCase() + color.slice(1)}
          <button className="ml-2" onClick={() => clearFilter("colors", color)}>×</button>
        </div>
      ))}
      
      <button className="text-xs text-muted-foreground underline" onClick={clearAllFilters}>
        Clear all
      </button>
    </div>
  )
}
