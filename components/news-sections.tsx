import React from 'react'
import { Button } from './ui/button'
import { motion } from "framer-motion";

function NewSections() {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-offwhite-villa to-transparent opacity-10"></div>

          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10 animate-float1"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white opacity-10 animate-float2"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white opacity-10 animate-float3"></div>

          <motion.div
            className="container px-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-serif font-bold">
                Get Updated!
              </h2>
              <p>
               Register your email for latest arrivals, offers and exciting schema.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1 group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 rounded-md w-full text-foreground transition-all duration-300 focus:ring-2 focus:ring-white/50 focus:outline-none bg-offwhite-rose"
                  />
                  
                </div>
                <Button
                  variant="secondary"
                  className="relative overflow-hidden group"
                >
                  <span className="relative z-10">Register</span>
                  <span className="absolute inset-0 bg-white transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                  <span className="absolute inset-0 bg-primary transition-opacity duration-300 opacity-0 group-hover:opacity-10"></span>
                </Button>
              </div>
              <p className="text-xs opacity-80">
                By registering your email, You will get latest updated about our products.
              </p>
            </div>
          </motion.div>
        </section>

  )
}

export default NewSections
