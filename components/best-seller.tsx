"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface BestSellerProps {
  productsInView: boolean;
  productsRef: any;
  openQuickView: (product: any) => void;
}

function BestSeller({
  productsRef,
  productsInView,
  openQuickView,
}: BestSellerProps) {
  const router = useRouter();
  const bestSellers = [
    {
      id: 1,
      name: "Premium Leather Journal",
      price: "$45.00",
      image: "/images/most-viewed/leather-notebook.webp",
      category: "Notebooks",
      description:
        "Handcrafted premium leather journal with 240 pages of acid-free paper. Perfect for journaling, sketching, or note-taking.",
    },
    {
      id: 2,
      name: "Fountain Pen Set",
      price: "$89.00",
      image: "/images/products/fountain-pen.webp",
      category: "Pens & Pencils",
      description:
        "Elegant fountain pen set with interchangeable nibs and a premium ink cartridge. Comes in a beautiful gift box.",
    },
    {
      id: 3,
      name: "Weekly Planner",
      price: "$32.00",
      image: "/images/products/academic.jpeg",
      category: "Planners",
      description:
        "Comprehensive weekly planner with goal-setting sections, habit trackers, and monthly overviews. Stay organized in style.",
    },
    {
      id: 4,
      name: "Desk Organizer",
      price: "$58.00",
      image: "/images/products/desk-org.jpg",
      category: "Desk Accessories",
      description:
        "Sleek wooden desk organizer with multiple compartments for pens, cards, and small accessories. Keeps your workspace tidy.",
    },
  ];
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-offwhite-subtle via-offwhite-villa to-offwhite-subtle pointer-events-none"></div>
      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={productsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-bold text-center mb-4">
            Best Sellers
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Our most popular products loved by customers around the world
          </p>
        </motion.div>

        <div
          ref={productsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {bestSellers.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg group h-full bg-offwhite-rose">
                <div className="aspect-square relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    fill
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mx-2 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                      onClick={() => openQuickView(product)}
                    >
                      Quick View
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="mx-2 scale-90 opacity-0 transition-all duration-300 delay-75 group-hover:scale-100 group-hover:opacity-100"
                    >
                      Add to Cart
                    </Button>
                  </div>
                  <button className="absolute top-2 right-2 bg-offwhite-rose rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <CardContent className="p-4">
                  <div className="text-sm text-primary mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-medium text-lg group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    {product.price}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">
                      (24 reviews)
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button
            size="lg"
            className="group relative md:max-w-[190px] w-full overflow-hidden bg-[#2377c4] hover:bg-cyan-400"
            onClick={() => router.push("/products")}
          >
            <span className="relative z-10 ">View All</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BestSeller;
