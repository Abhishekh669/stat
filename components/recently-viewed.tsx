import React from 'react'
import { Button } from './ui/button'
import { motion } from "framer-motion";
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

function RecentlyViewed() {
  const mostViewed = [
    {
      title : "Novels",
      price : 7.7,
      path : "/images/novels.jpg"
    },
    {
      title : "Gift Cards",
      price : 5.77,
      path : "/images/most-viewed/gift-card.webp"
    },
    {
      title : "Leather Note Book",
      price : 5.7,
      path : "/images/most-viewed/leather-notebook.webp"
    },
    {
      title : "Vip Pen",
      price : 4.00,
      path : "/images/most-viewed/vip-pen.jpg"
    }
  ]
  return (
    <section className="py-12 bg-offwhite-dove">
    <div className="container px-4">
      <h2 className="text-2xl font-serif font-bold mb-8">
        Most Viewed Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mostViewed.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden group bg-offwhite-rose">
              <div className="aspect-square relative">
                <Image
                  src={`${item.path}`}
                  alt={`Recently viewed product ${item.title}`}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  fill
                />
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium text-sm truncate group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-primary text-sm font-medium">${item.price} per piece</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default RecentlyViewed
