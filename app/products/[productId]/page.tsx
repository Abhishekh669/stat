"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useStatStore } from "@/store/use-stat-store";
import { useProductId } from "@/lib/use-product-id";
import Image from "next/image";


export default function ProductPage() {
  const id = useProductId()
  const {getProductById, addToCart} = useStatStore();
  const product = getProductById(parseInt(id));
  const handleAddToCart = ()=>{
    if(product){
      addToCart(product)
    }


  }
  if(!product)return <div className=" min-h-screen w-full h-full flex justify-center items-center">
    No Product found
  </div>
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="p-6 grid md:grid-cols-2 gap-6">
        <Image
          width={1000}
          height={1000}
          src={product.imageUrl}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">${product.price}</span>
            <div className="flex items-center text-yellow-500">
              {[...Array(Math.round(product.rating))].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" stroke="none" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-sm text-gray-500">Ships in {product.shippingDays} days</p>
          <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews ? product.reviews.map((review) => (
            <Card key={review.id} className="p-4 border">
              <CardContent>
                <p className="font-semibold">{review.userName}</p>
                <div className="flex items-center text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <p className="text-gray-400 text-sm">{review.date}</p>
              </CardContent>
            </Card>
          )) : (<div>
            No review till now
            </div>)}
        </div>
      </div>
    </div>
  );
}
