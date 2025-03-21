"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dummyProducts } from "@/lib/data"
import Image from "next/image"

export const SpecialOffersSection = () => {
  const saleProducts = dummyProducts.filter((product) => product.onSale && product.originalPrice).slice(0, 4) // Limit to 4 products
  if (saleProducts.length === 0) return null
  return (
    <div className="mb-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Special Offers</h2>
            <p className="text-muted-foreground">Exclusive deals on our best products</p>
          </div>
          <Button variant="link" className="flex items-center p-0 h-auto">
            View all offers <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => {
            const discountPercentage = product.originalPrice
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0
            return (
              <Card key={product.id} className="overflow-hidden group">
                <div className="relative">
                  <Badge className="absolute top-2 left-2 z-10 bg-red-500">{discountPercentage}% OFF</Badge>
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      fill
                    />
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-primary mb-1">{product.category}</div>
                  <h3 className="font-medium text-lg line-clamp-1">{product.name}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-lg font-bold text-primary">${product.price.toFixed(2)}</span>
                    <span className="text-sm line-through text-muted-foreground ml-2">
                      ${product.originalPrice?.toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full mt-3">Add to Cart</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

