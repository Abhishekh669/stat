import React, { LegacyRef, RefObject } from 'react'
import { motion } from "framer-motion";
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FeatureSectionProps{
    categoriesRef : LegacyRef<HTMLDivElement> | undefined;
    categoriesInView : boolean,
}

function FeatureSection({categoriesInView, categoriesRef} : FeatureSectionProps) {
  const categories = [
    {
      name: "Notebooks",
      image: "/images/notebook.png",
      color: "from-blue-500/20",
    },
    {
      name: "Pens & Pencils",
      image: "/images/pen-n-pencils.jpg",
      color: "from-green-500/20",
    },
    {
      name: "Office Accessories",
      image: "/images/office-items.webp",
      color: "from-amber-500/20",
    },
    {
      name: "Planners",
      image: "/images/sticky-notes.jpg",
      color: "from-purple-500/20",
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
        <h2 className="text-3xl font-serif font-bold text-center mb-4">
          Explore Our Collections
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Discover our carefully curated selection of premium stationery
          products designed to inspire creativity and enhance
          productivity.
        </p>
      </motion.div>

      <div
        ref={categoriesRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden transition-all hover:shadow-lg group relative h-[300px] bg-offwhite-rose">
              <div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90 z-10"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-40 z-10`}
              ></div>
              <div className="aspect-square relative w-full h-full">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  fill
                />
              </div>
              <CardContent className="p-6 absolute bottom-0 left-0 right-0 z-20">
                <h3 className="font-serif text-xl font-bold text-primary drop-shadow-md">
                  {category.name}
                </h3>
                <Link
                  href={"/collections"}
                  className="text-white text-sm flex items-center mt-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
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
