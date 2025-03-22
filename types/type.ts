export interface ProductData {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  brand: string
  color: string
  imageUrl: string
  rating: number
  reviewCount: number
  stockCount: number
  shippingDays: number
  featured: boolean
  isNew: boolean
  onSale: boolean
  dateAdded: string
  reviews ?: reiviewType[]
}

interface reiviewType{
  id : number,
  userName : string,
  rating : number,
  comment : string,
  date : string
}

export type SortOption = "featured" | "newest" | "priceAsc" | "priceDesc" | "rating"

export interface FilterState {
  categories: string[]
  priceRanges: string[]
  brands: string[]
  colors: string[]
}

export interface SearchOptions {
  searchInName: boolean
  searchInDescription: boolean
  searchInCategory: boolean
  searchInBrand: boolean
}

