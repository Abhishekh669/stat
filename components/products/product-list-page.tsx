"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Filter, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "./product-grid"
import { FilterPanel } from "./filter-panel"
import { Pagination } from "./pagination"
import { ProductSorting } from "./product-sorting"
import { FilterState, ProductData, SearchOptions, SortOption } from "@/types/type"
import { dummyProducts } from "@/lib/data"
import { SearchBar } from "./search-bar"
import { SearchResultsInfo } from "./search-result"
import { ActiveFilters } from "./active-filter"
import { SpecialOffersSection } from "./special-offers"

export const ProductListPage = () => {
  const [products, setProducts] = useState<ProductData[]>(dummyProducts)
  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>(dummyProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilterPanel, setShowFilterPanel] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortOption, setSortOption] = useState<SortOption>("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    searchInName: true,
    searchInDescription: true,
    searchInCategory: false,
    searchInBrand: false,
  })

  const productsPerPage = 8
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRanges: [],
    brands: [],
    colors: [],
  })

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Apply filters, search, and sorting
  useEffect(() => {
    let result = [...dummyProducts]

    // Apply search if query exists
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter((product) => {
        const matchesName = searchOptions.searchInName && product.name.toLowerCase().includes(query)
        const matchesDescription =
          searchOptions.searchInDescription && product.description.toLowerCase().includes(query)
        const matchesCategory = searchOptions.searchInCategory && product.category.toLowerCase().includes(query)
        const matchesBrand = searchOptions.searchInBrand && product.brand.toLowerCase().includes(query)

        return matchesName || matchesDescription || matchesCategory || matchesBrand
      })
    }

    // Apply category filters
    if (filters.categories.length > 0) {
      result = result.filter((product) => filters.categories.includes(product.category))
    }

    // Apply price range filters
    if (filters.priceRanges.length > 0) {
      result = result.filter((product) => {
        return filters.priceRanges.some((range) => {
          if (range === "under20") return product.price < 20
          if (range === "20-50") return product.price >= 20 && product.price <= 50
          if (range === "50-100") return product.price > 50 && product.price <= 100
          if (range === "over100") return product.price > 100
          return false
        })
      })
    }

    // Apply brand filters
    if (filters.brands.length > 0) {
      result = result.filter((product) => filters.brands.includes(product.brand))
    }

    // Apply color filters
    if (filters.colors.length > 0) {
      result = result.filter((product) => filters.colors.includes(product.color))
    }

    // Apply sorting
    result = sortProducts(result, sortOption)

    setFilteredProducts(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [filters, sortOption, searchQuery, searchOptions])

  const sortProducts = (products: ProductData[], option: SortOption) => {
    switch (option) {
      case "priceAsc":
        return [...products].sort((a, b) => a.price - b.price)
      case "priceDesc":
        return [...products].sort((a, b) => b.price - a.price)
      case "newest":
        return [...products].sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating)
      case "featured":
      default:
        return [...products].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }
  }

  const handleFilterChange = (type: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const current = [...prev[type]]
      const index = current.indexOf(value)

      if (index === -1) {
        current.push(value)
      } else {
        current.splice(index, 1)
      }

      return {
        ...prev,
        [type]: current,
      }
    })
  }

  const clearFilter = (type: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item !== value),
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      priceRanges: [],
      brands: [],
      colors: [],
    })
  }

  const handleSearch = (query: string, options: SearchOptions) => {
    setSearchQuery(query)
    setSearchOptions(options)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const toggleFilterPanel = () => {
    setShowFilterPanel(!showFilterPanel)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="bg-background">
      <div className="container px-4 py-8">
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} searchQuery={searchQuery} searchOptions={searchOptions} />
        </div>

        <SearchResultsInfo
          searchQuery={searchQuery}
          searchOptions={searchOptions}
          resultsCount={filteredProducts.length}
          clearSearch={clearSearch}
        />

        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={toggleFilterPanel}>
                <Filter className="h-4 w-4" />
                <span>Filter</span>
                <ChevronDown className="h-4 w-4" />
              </Button>

              <ProductSorting sortOption={sortOption} setSortOption={setSortOption} />
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <ActiveFilters filters={filters} clearFilter={clearFilter} clearAllFilters={clearAllFilters} />

          <FilterPanel
            isVisible={showFilterPanel}
            filters={filters}
            handleFilterChange={handleFilterChange}
            clearAllFilters={clearAllFilters}
          />
        </div>
       

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                clearAllFilters()
                clearSearch()
              }}
            >
              Reset All Filters
            </Button>
          </div>
        )}

        {filteredProducts.length > 0 && <ProductGrid products={currentProducts} viewMode={viewMode} />}

         
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </main>
  )
}

