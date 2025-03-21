import { dummyProducts } from "./data"

export const getCategoryCount = (category: string): number => {
  return dummyProducts.filter((product) => product.category === category).length
}

export const getPriceRangeCount = (range: string): number => {
  return dummyProducts.filter((product) => {
    if (range === "under20") return product.price < 20
    if (range === "20-50") return product.price >= 20 && product.price <= 50
    if (range === "50-100") return product.price > 50 && product.price <= 100
    if (range === "over100") return product.price > 100
    return false
  }).length
}

export const getBrandCount = (brand: string): number => {
  return dummyProducts.filter((product) => product.brand === brand).length
}

export const getColorCount = (color: string): number => {
  return dummyProducts.filter((product) => product.color === color).length
}

export const getPriceRangeLabel = (range: string): string => {
  switch (range) {
    case "under20":
      return "Under $20"
    case "20-50":
      return "$20 - $50"
    case "50-100":
      return "$50 - $100"
    case "over100":
      return "Over $100"
    default:
      return range
  }
}

