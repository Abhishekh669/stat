"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Box, Minus, Plus, Shield, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface ProductQuickViewProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: {
    id: number
    name: string
    description: string
    price: number
    originalPrice?: number
    category: string
    brand ?: string
    color ?: string
    imageUrl: string
    rating ?: number
    reviewCount ?: number
    stockCount ?: number
    shippingDays ?: number
    featured ?: boolean
    isNew ?: boolean
    onSale ?: boolean
    dateAdded ?: string
  }
}

export function ProductQuickView({ open, onOpenChange, product }: ProductQuickViewProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  // Mock multiple product images
  const productImages = [
    product.imageUrl,
    "/placeholder.svg?height=300&width=300&text=View 2",
    "/placeholder.svg?height=300&width=300&text=View 3",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-[300px] md:h-[400px]"
              >
                <Image
                  src={productImages[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                  fill
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedImage === index ? "bg-primary w-4" : "bg-gray-300"
                  }`}
                  aria-label={`View product image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="p-6 relative">
            <DialogHeader>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <div className="text-sm text-primary mb-1">{product.category}</div>
                <DialogTitle className="text-xl font-medium">{product.name}</DialogTitle>
                <DialogDescription className="text-lg font-medium text-primary">{product.price}</DialogDescription>
              </motion.div>
            </DialogHeader>
            <motion.div
              className="mt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-sm text-muted-foreground">{product.description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Quantity</h4>
                <div className="flex items-center">
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none" onClick={decreaseQuantity}>
                    <Minus className="h-3 w-3" />
                  </Button>
                  <div className="h-8 px-4 flex items-center justify-center border-y min-w-[40px]">{quantity}</div>
                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none" onClick={increaseQuantity}>
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 relative">
                <Button
                  className="flex-1 relative overflow-hidden group"
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                >
                  <span className="relative z-10">
                    {addedToCart ? (
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Added to Cart
                      </span>
                    ) : (
                      "Add to Cart"
                    )}
                  </span>
                  <span className="absolute inset-0 bg-primary transition-transform duration-300 group-hover:translate-y-full"></span>
                  <span className="absolute inset-0 bg-green-600 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                </Button>
                <Button variant="outline" className="flex-1 group relative overflow-hidden">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    View Full Details
                  </span>
                  <span className="absolute inset-0 bg-transparent border border-primary transition-all duration-300 group-hover:bg-primary"></span>
                </Button>
              </div>

              <div className="pt-4 border-t text-xs text-muted-foreground">
                <p className="flex items-center">
                 <Shield  className="size-4 mr-1 "/>
                  Secure checkout
                </p>
                <p className="flex items-center mt-1">
                  <Box  className="size-4 mr-1"/>
                  Free shipping on orders over $50
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

