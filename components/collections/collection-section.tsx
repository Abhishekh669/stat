"use client";

import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { dummyProducts } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CollectionSectionPage = () => {
  const router = useRouter();
  const categories = Array.from(
    new Set(dummyProducts.map((product) => product.category))
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = searchQuery
    ? categories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : categories;

  return (
    <main className="bg-background">
      <div className="relative bg-gradient-to-r from-primary/20 to-primary/5 py-16">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
              Our Collections
            </h1>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Browse our products by category to find exactly what you&apos;re
              looking for.
            </p>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/5"></div>
          <Image
          fill
            src="/placeholder.svg?height=400&width=600&text=Collections"
            alt="Collections"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>

      <div className="relative max-w-md mt-4 ml-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search collections..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="container px-4 py-8">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>Collections</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <h3 className="text-lg font-medium mb-2">No collections found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria
              </p>
              <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const categoryProduct = dummyProducts.find(
                (product) => product.category === category
              );
              const productCount = dummyProducts.filter(
                (product) => product.category === category
              ).length;
              const categorySlug = category.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link
                  key={category}
                  href={`/collections/${categorySlug}`}
                  className="block"
                >
                  <Card className="overflow-hidden group cursor-pointer h-full hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                      <Image
                      fill
                        src={categoryProduct?.imageUrl || "/placeholder.svg"}
                        alt={category}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                        <h3 className="font-bold text-xl">{category}</h3>
                        <p className="text-sm text-white/80">
                          {productCount} products
                        </p>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-muted-foreground text-sm">
                        Browse our selection of {category.toLowerCase()} for
                        every occasion.
                      </p>
                      <div className="mt-2 flex items-center text-primary text-sm font-medium group-hover:underline">
                        Shop now{" "}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex text-primary items-center">
            <span className="h-6 w-1.5 bg-primary rounded-full mr-3"></span>
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <Image
              fill
                src="/images/most-viewed/leather-notebook.webp"
                alt="New Arrivals"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-2">
                  New Arrivals
                </h3>
                <p className="text-white/80 mb-4 max-w-xs">
                  Check out our latest products, fresh off the shelves and ready
                  for you.
                </p>

                <Button
                  size="lg"
                  className="w-fit group relative overflow-hidden bg-[#2377c4] hover:bg-cyan-400"
                >
                  <span className="relative z-10 ">Explore New Arrivals</span>
                </Button>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <Image
                src="/images/products/desk-org.jpg"
                alt="Special Offers"
                className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-500"
                fill
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center p-8 z-20">
                <h3 className="text-white text-2xl font-bold mb-2">
                  Special Offers
                </h3>
                <p className="text-white/80 mb-4 max-w-xs">
                  Don&apos;t miss out on our limited-time deals and exclusive
                  discounts.
                </p>
                <Button
                  className="w-fit group relative overflow-hidden bg-[#2377c4] hover:bg-cyan-400"
                >
                  View Special Offers
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help you find the perfect
            product. Contact us with any questions or special requests.
          </p>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-[#2377c4] hover:bg-cyan-400"
            onClick={()=>router.push("/about-us")}
          >
            <span className="relative z-10 ">Learn more</span>
          </Button>
        </div>
      </div>
    </main>
  );
};
