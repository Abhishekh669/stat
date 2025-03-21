import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section className="py-16  relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Writefully Yours store in Sydney"
              className="object-cover w-full h-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>

            <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-primary rounded-lg rotate-12"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-primary rounded-lg -rotate-12"></div>
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl font-serif font-bold">
                Trusting ideas into Reality since 2019
              </h2>
            </div>
            <p className="text-muted-foreground">
              Writefully Yours was Founded in 2019,writefully yours established
              with a intention of providing high quality and affordable
              stationary materials that inspires creativity and productivity .
              As we believed that words are powerful than the weapons that you
              can rule the world, as writing means about capturing ideas shaping
              creativity and making every moment meaning.
            </p>
            <p className="text-muted-foreground">
              Your trust towards us drives us to innovate and manufacture
              quality products that inspire.
            </p>
            <Button
              variant="outline"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Learn More About Us
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
