"use client"
import Image from "next/image";
import React, { RefObject } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface HeroSectionProps {
  heroRef: RefObject<HTMLElement>;
  handleMouseMove: (event: React.MouseEvent) => void;
  setHovering: (isHovering: boolean) => void;
}

function HeroSection({
  heroRef,
  handleMouseMove,
  setHovering,
}: HeroSectionProps) {
  const router = useRouter();
  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#d6e8f0]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1000&width=1000')] bg-repeat opacity-5 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container px-4 py-20 md:py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Best Stationery
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Write and Create Your{" "}
                <span className="text-[#2377c4] relative">
                  Learning Experience
                </span>
              </h1>
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
             Design your path, Transform you knowledge
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </div>
          <motion.div
            className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
            <Image
              width={3000}
              height={3000}
              src={"/images/main-page.jpg"}
              className="object-cover  w-full h-full rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105"
              alt="image"
            />

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
          
        </div>
        <div className="flex md:flex-row flex-col gap-y-2 mt-4 gap-x-12">
        <Button
            size="lg"
            className="group relative overflow-hidden md:max-w-[190px] w-full bg-[#2377c4] border-0 hover:bg-cyan-400"
            onClick={()=>router.push("/products")}

          >
            <span className="relative z-10 ">Shop Collection</span>
            <span className="absolute inset-0  transition-transform duration-300 group-hover:translate-y-full"></span>
            <span className="absolute inset-0  translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            <ChevronRight className="ml-2 h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>

          <Button
            size="lg"
            className="group relative md:max-w-[190px] w-full overflow-hidden bg-[#2377c4] hover:bg-cyan-400"
            onClick={()=>router.push("/about-us")}
          >
            <span className="relative z-10 ">Learn more</span>
          </Button>
        </div>
      </motion.div>
      

      <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full border-2 border-primary/30 animate-float1"></div>
      <div className="absolute bottom-1/4 right-10 w-8 h-8 rounded-full border-2 border-primary/30 animate-float2"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-primary/10 animate-float3"></div>
    </section>
  );
}

export default HeroSection;
