"use client";

import type React from "react";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Mail, MapPin, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedCounter from "@/components/ui/shared/animated-counter";
import NavBar from "@/components/nav-bar/header";
import Image from "next/image";
import HeroSection from "@/components/hero-section";
import StatSection from "@/components/stat-section";
import FeatureSection from "@/components/feature-section";
import BestSeller from "@/components/best-seller";
import AboutSection from "@/components/about-section";
import NewSections from "@/components/news-sections";
import RecentlyViewed from "@/components/recently-viewed";
import Footer from "@/components/footer";
import { ProductQuickView } from "@/components/products/product-quick";
import { SpecialOffersSection } from "@/components/products/special-offers";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: categoriesRef, inView: categoriesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: productsRef, inView: productsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const openQuickView = (product: any) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector("header");
      if (header) {
        if (scrollPosition > 100) {
          header.classList.add("header-scrolled");
        } else {
          header.classList.remove("header-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-50">
      <main className="flex-1">
        <HeroSection
          heroRef={heroRef}
          handleMouseMove={handleMouseMove}
          setHovering={(isHovering) => setIsHovering(isHovering)}
        />
        <StatSection
         statsRef={statsRef} 
         statsInView={statsInView} 
        />
        <FeatureSection
          categoriesInView={categoriesInView}
          categoriesRef={categoriesRef}
        />
        <BestSeller
          productsInView={productsInView}
          productsRef={productsRef}
          openQuickView={openQuickView}
        />
        <SpecialOffersSection />
        <AboutSection />
        <NewSections />
        <RecentlyViewed />
        
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg z-50 hover:bg-primary/90 transition-colors"
        aria-label="Back to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="-rotate-90"/>
      </motion.button>

      {quickViewProduct && (
        <ProductQuickView open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen} product={quickViewProduct} />
      )}
    </div>
  );
}
