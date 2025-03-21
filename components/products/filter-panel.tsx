"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { getBrandCount, getCategoryCount, getPriceRangeCount } from "@/lib/filter-utlls"
import { FilterState } from "@/types/type"

interface FilterPanelProps {
  isVisible: boolean
  filters: FilterState
  handleFilterChange: (type: keyof FilterState, value: string) => void
  clearAllFilters: () => void
}

export const FilterPanel = ({ isVisible, filters, handleFilterChange, clearAllFilters }: FilterPanelProps) => {
  if (!isVisible) return null

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <Checkbox
                checked={filters.categories.includes("Notebooks")}
                onCheckedChange={() => handleFilterChange("categories", "Notebooks")}
                className="mr-2"
              />
              Notebooks ({getCategoryCount("Notebooks")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.categories.includes("Pens & Pencils")}
                onCheckedChange={() => handleFilterChange("categories", "Pens & Pencils")}
                className="mr-2"
              />
              Pens & Pencils ({getCategoryCount("Pens & Pencils")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.categories.includes("Planners")}
                onCheckedChange={() => handleFilterChange("categories", "Planners")}
                className="mr-2"
              />
              Planners ({getCategoryCount("Planners")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.categories.includes("Desk Accessories")}
                onCheckedChange={() => handleFilterChange("categories", "Desk Accessories")}
                className="mr-2"
              />
              Desk Accessories ({getCategoryCount("Desk Accessories")})
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <Checkbox
                checked={filters.priceRanges.includes("under20")}
                onCheckedChange={() => handleFilterChange("priceRanges", "under20")}
                className="mr-2"
              />
              Under $20 ({getPriceRangeCount("under20")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.priceRanges.includes("20-50")}
                onCheckedChange={() => handleFilterChange("priceRanges", "20-50")}
                className="mr-2"
              />
              $20 - $50 ({getPriceRangeCount("20-50")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.priceRanges.includes("50-100")}
                onCheckedChange={() => handleFilterChange("priceRanges", "50-100")}
                className="mr-2"
              />
              $50 - $100 ({getPriceRangeCount("50-100")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.priceRanges.includes("over100")}
                onCheckedChange={() => handleFilterChange("priceRanges", "over100")}
                className="mr-2"
              />
              Over $100 ({getPriceRangeCount("over100")})
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Color</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleFilterChange("colors", "black")}
              className={`w-6 h-6 rounded-full bg-black border ${
                filters.colors.includes("black") ? "border-primary border-2" : "border-gray-300"
              }`}
              aria-label="Filter by black"
            />
            <button
              onClick={() => handleFilterChange("colors", "blue")}
              className={`w-6 h-6 rounded-full bg-blue-500 border ${
                filters.colors.includes("blue") ? "border-primary border-2" : "border-gray-300"
              }`}
              aria-label="Filter by blue"
            />
            <button
              onClick={() => handleFilterChange("colors", "red")}
              className={`w-6 h-6 rounded-full bg-red-500 border ${
                filters.colors.includes("red") ? "border-primary border-2" : "border-gray-300"
              }`}
              aria-label="Filter by red"
            />
            <button
              onClick={() => handleFilterChange("colors", "green")}
              className={`w-6 h-6 rounded-full bg-green-500 border ${
                filters.colors.includes("green") ? "border-primary border-2" : "border-gray-300"
              }`}
              aria-label="Filter by green"
            />
            <button
              onClick={() => handleFilterChange("colors", "yellow")}
              className={`w-6 h-6 rounded-full bg-yellow-500 border ${
                filters.colors.includes("yellow") ? "border-primary border-2" : "border-gray-300"
              }`}
              aria-label="Filter by yellow"
            />
            <button
              onClick={() => handleFilterChange("colors", "purple")}
              className={`w-6 h-6 rounded-full bg-purple-500 border ${
                filters.colors.includes("purple") ? "border-primary border-2" : "border-gray-300"
              }`}
              aria-label="Filter by purple"
            />
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Brand</h3>
          <div className="space-y-2">
            <label className="flex items-center">
              <Checkbox
                checked={filters.brands.includes("Moleskine")}
                onCheckedChange={() => handleFilterChange("brands", "Moleskine")}
                className="mr-2"
              />
              Moleskine ({getBrandCount("Moleskine")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.brands.includes("Leuchtturm1917")}
                onCheckedChange={() => handleFilterChange("brands", "Leuchtturm1917")}
                className="mr-2"
              />
              Leuchtturm1917 ({getBrandCount("Leuchtturm1917")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.brands.includes("Pilot")}
                onCheckedChange={() => handleFilterChange("brands", "Pilot")}
                className="mr-2"
              />
              Pilot ({getBrandCount("Pilot")})
            </label>
            <label className="flex items-center">
              <Checkbox
                checked={filters.brands.includes("Lamy")}
                onCheckedChange={() => handleFilterChange("brands", "Lamy")}
                className="mr-2"
              />
              Lamy ({getBrandCount("Lamy")})
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4 gap-2">
        <Button variant="outline" size="sm" onClick={clearAllFilters}>
          Reset
        </Button>
        <Button size="sm">Apply Filters</Button>
      </div>
    </div>
  )
}

