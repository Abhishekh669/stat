import type React from "react"

export const highlightSearchTerm = (text: string, searchTerm: string): React.ReactNode => {
  if (!searchTerm.trim()) return text

  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 dark:bg-yellow-800">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}

export const getSearchSuggestions = (query: string, products: any[]): string[] => {
  if (!query || query.length < 2) return []

  const lowercaseQuery = query.toLowerCase()
  const suggestions = new Set<string>()

  products.forEach((product) => {
    // Get suggestions from product names
    if (product.name.toLowerCase().includes(lowercaseQuery)) {
      suggestions.add(product.name)
    }

    // Get suggestions from categories
    if (product.category.toLowerCase().includes(lowercaseQuery)) {
      suggestions.add(product.category)
    }

    // Get suggestions from brands
    if (product.brand.toLowerCase().includes(lowercaseQuery)) {
      suggestions.add(product.brand)
    }
  })

  return Array.from(suggestions).slice(0, 5)
}

