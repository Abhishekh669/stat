import React, { RefObject } from 'react'
import { motion } from "framer-motion";
import AnimatedCounter from './ui/shared/animated-counter';

interface StatSectionProps{
    statsRef ?: ( e : Element | null | undefined) => void;
    statsInView : boolean,
}

function StatSection({statsRef, statsInView} : StatSectionProps) {
    const userStat = [
        { value: 2000, label: "Happy Customers", suffix: "+" , count : 1000},
        { value: 500, label: "Products", suffix: "+" ,count : 3000},
        { value: 5, label: "Years of Experience", suffix: "", count : 5 },
        { value: 2, label: "Store Locations", suffix: "", count : 2},
      ]
  return (
    <section className="py-12  relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
    <div ref={statsRef} className="container px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {userStat.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-gray-100 border-gray-100 rounded-lg shadow-sm border border-offwhite-dove hover:shadow-md transition-shadow duration-300"
          >
            <AnimatedCounter num={stat.value} label={stat.label} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default StatSection
