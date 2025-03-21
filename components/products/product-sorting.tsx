"use client"

import { Button } from "@/components/ui/button"
import { SlidersHorizontal, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SortOption } from "@/types/type"

interface ProductSortingProps {
  sortOption: SortOption
  setSortOption: (option: SortOption) => void
}

export const ProductSorting = ({ sortOption, setSortOption }: ProductSortingProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          <span>Sort</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]" align="start">
        <DropdownMenuRadioGroup value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
          <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="priceAsc">Price: Low to High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="priceDesc">Price: High to Low</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rating">Highest Rated</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

