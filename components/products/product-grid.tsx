"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import { ProductData } from "@/types/type"
import { highlightSearchTerm } from "@/lib/search-utlils"
import Image from "next/image"
import { useState } from "react"
import { ProductQuickView } from "./product-quick"
import { useRouter } from "next/navigation"
import { useStatStore } from "@/store/use-stat-store"

interface ProductGridProps {
  products: ProductData[]
  viewMode: "grid" | "list"
  searchTerm?: string
}

export const ProductGrid = ({ products, viewMode, searchTerm = "" }: ProductGridProps) => {
  const {addToCart} = useStatStore()
  const [openProduct, setOpenProduct] = useState(false)
  const router = useRouter();
  const addProduct = (product : ProductData)=>{
    addToCart(product)

  }
  return (
   <>
   {
    
   }
     <div
      className={`grid ${
        viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"
      } gap-6`}
    >
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden transition-all hover:shadow-lg group flex flex-col justify-between">
          {
            product && openProduct && (
              <ProductQuickView open={openProduct} onOpenChange={setOpenProduct} product={product} />
            )
          }
          <div className={`${viewMode === "grid" ? "aspect-square" : "h-48 md:h-64"} relative`}>
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              className="object-cover w-full h-full transition-transform group-hover:scale-105"
              fill
            />
            {product.isNew && (
              <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">New</span>
            )}
            {product.onSale && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Button variant="secondary" size="sm" className="mx-1" onClick={()=> setOpenProduct(true)}>
                Quick View
              </Button>
              <Button variant="secondary" size="sm" className="mx-1" onClick={()=> addProduct(product)}>
                Add to Cart
              </Button>
            </div>
            <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
            </button>
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-primary mb-1">
              {searchTerm ? highlightSearchTerm(product.category, searchTerm) : product.category}
            </div>
            <h3 className="font-medium text-lg">
              {searchTerm ? highlightSearchTerm(product.name, searchTerm) : product.name}
            </h3>
            {viewMode === "list" && (
              <p className="text-sm text-muted-foreground mt-1 mb-2">
                {searchTerm ? highlightSearchTerm(product.description, searchTerm) : product.description}
              </p>
            )}
            <div className="flex items-center mt-1">
              <p className="text-primary font-medium">${product.price.toFixed(2)}</p>
              {product.onSale && product.originalPrice && (
                <p className="text-muted-foreground line-through text-sm ml-2">${product.originalPrice.toFixed(2)}</p>
              )}
            </div>
            <div className="flex items-center mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${star <= product.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground ml-2">({product.reviewCount})</span>
            </div>
            <div className="mt-3 flex items-center text-xs text-muted-foreground">
              <span className={product.stockCount > 10 ? "text-green-600" : ""}>
                {product.stockCount > 10 ? "In Stock" : "Low Stock"}
              </span>
              <span className="mx-2">•</span>
              <span>Ships in {product.shippingDays} days</span>
            </div>
            
            
          </CardContent>
          <CardFooter className="w-full">
            <Button className="w-full hover:bg-blue-400" onClick={()=>router.push(`/products/${product.id}`)}>View product</Button>
          </CardFooter>
          
        </Card>
      ))}
    </div>
   </>
  )
}

