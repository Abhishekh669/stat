"use client"

import { SearchOptions } from "@/types/type"


interface SearchResultsInfoProps {
  searchQuery: string
  searchOptions: SearchOptions
  resultsCount: number
  clearSearch: () => void
}

export const SearchResultsInfo = ({
  searchQuery,
  searchOptions,
  resultsCount,
  clearSearch,
}: SearchResultsInfoProps) => {
  if (!searchQuery) return null

  const searchFields = []
  if (searchOptions.searchInName) searchFields.push("name")
  if (searchOptions.searchInDescription) searchFields.push("description")
  if (searchOptions.searchInCategory) searchFields.push("category")
  if (searchOptions.searchInBrand) searchFields.push("brand")

  const searchFieldsText = searchFields.length > 0 ? `in ${searchFields.join(", ")}` : ""

  return (
    <div className="bg-muted/30 p-3 rounded-md mb-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">
            Found <span className="font-medium">{resultsCount}</span> results for
            <span className="font-medium"> "{searchQuery}"</span> {searchFieldsText}
          </p>
        </div>
        <button onClick={clearSearch} className="text-sm text-primary hover:underline">
          Clear search
        </button>
      </div>
    </div>
  )
}

