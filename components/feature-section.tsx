"use client"

import type { LegacyRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface FeatureSectionProps {
  categoriesRef: LegacyRef<HTMLDivElement> | undefined
  categoriesInView: boolean
}

function FeatureSection({ categoriesInView, categoriesRef }: FeatureSectionProps) {
  const categories = [
    {
      name: "Notebooks",
      image: "/images/notebook.png",
      color: "bg-blue-500/10",
    },
    {
      name: "Pens & Pencils",
      image: "/images/pen-n-pencils.jpg",
      color: "bg-green-500/10",
    },
    {
      name: "Office Accessories",
      image: "/images/office-items.webp",
      color: "bg-amber-500/10",
    },
    {
      name: "Planners",
      image: "/images/products/sticky-note2.jpeg",
      color: "bg-purple-500/10",
    },
  ]

  return (
    <section className="py-16 bg-offwhite-subtle relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-offwhite-dove to-transparent"></div>
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Explore Our Collections</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Discover our carefully curated selection of premium stationery products designed to inspire creativity and
            enhance productivity.
          </p>
        </motion.div>

        <div ref={categoriesRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-all hover:shadow-lg group h-full bg-offwhite-rose">
                <div className="aspect-square relative w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    fill
                  />
                </div>
                <CardContent className={`p-6 ${category.color}`}>
                  <h3 className="font-serif text-xl font-bold text-primary">{category.name}</h3>
                  <Link
                    href={"/collections"}
                    className="text-primary-foreground text-sm flex items-center mt-2 group-hover:text-primary"
                  >
                    Shop Now{" "}
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

