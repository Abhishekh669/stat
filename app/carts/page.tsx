"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Trash, Plus, Minus } from "lucide-react";
import { useStatStore } from "@/store/use-stat-store";
import Link from "next/link";
import { ProductData } from "@/types/type";
import { useMemo } from "react";

export default function CartPage() {
  const { cartsProduct, addToCart, removeFromCart } = useStatStore();
  console.log(cartsProduct)

  const groupedProducts = useMemo(() => {
    return cartsProduct.reduce((acc, product) => {
      const existingProduct = acc.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, [] as (ProductData & { quantity: number })[]);
  }, [cartsProduct]);

  const handleAdd = (product: ProductData) => {
    addToCart(product);
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  const totalAmount = groupedProducts.reduce((accumulator, product) => {
    return accumulator + product.price * product.quantity;
  }, 0);

  if (groupedProducts.length === 0) {
    return (
      <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
        <span>No products added to  cart</span>
        <Link
          href="/products"
          className="bg-blue-400 p-2 rounded-lg hover:text-white"
        >
          Go to products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {groupedProducts.map((product) => (
          <Card key={product.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-16 h-16 rounded-lg"
              />
              <div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">
                  ${product.price.toFixed(2)} x {product.quantity}
                </p>
                <div className="flex items-center text-yellow-500">
                  {[...Array(Math.round(product.rating))].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                  ))}
                  <span className="text-gray-500 text-xs ml-2">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="outline" onClick={() => handleRemove(product.id)}>
                <Minus size={16} />
              </Button>
              <span className="text-lg font-semibold">{product.quantity}</span>
              <Button size="icon" variant="outline" onClick={() => handleAdd(product)}>
                <Plus size={16} />
              </Button>
              <Button size="icon" variant="destructive" onClick={() => handleRemove(product.id)}>
                <Trash size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-semibold">Total: ${totalAmount.toFixed(2)}</h2>
        <Button>Checkout</Button>
      </div>
    </div>
  );
}
