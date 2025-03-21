"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { SearchOptions } from "@/types/type"

interface SearchBarProps {
  onSearch: (query: string, options: SearchOptions) => void
  searchQuery: string
  searchOptions: SearchOptions
}

export const SearchBar = ({ onSearch, searchQuery, searchOptions }: SearchBarProps) => {
  const [query, setQuery] = useState(searchQuery)
  const [options, setOptions] = useState<SearchOptions>(searchOptions)
  const inputRef = useRef<HTMLInputElement>(null)

  // Update local state when props change
  useEffect(() => {
    setQuery(searchQuery)
    setOptions(searchOptions)
  }, [searchQuery, searchOptions])

  const handleSearch = () => {
    onSearch(query, options)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const clearSearch = () => {
    setQuery("")
    onSearch("", options)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const toggleSearchField = (field: keyof SearchOptions) => {
    setOptions((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  return (
    <div className="flex w-full max-w-lg items-center space-x-2">
      <div className="relative flex-1">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="pr-10"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Search options</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Search in</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuCheckboxItem
              checked={options.searchInName}
              onCheckedChange={() => toggleSearchField("searchInName")}
            >
              Product Name
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={options.searchInDescription}
              onCheckedChange={() => toggleSearchField("searchInDescription")}
            >
              Description
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={options.searchInCategory}
              onCheckedChange={() => toggleSearchField("searchInCategory")}
            >
              Category
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={options.searchInBrand}
              onCheckedChange={() => toggleSearchField("searchInBrand")}
            >
              Brand
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSearch}>Apply Search Options</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button onClick={handleSearch} type="submit">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </div>
  )
}

