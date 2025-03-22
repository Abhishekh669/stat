"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { cn } from "@/lib/utils";
import { useStatStore } from "@/store/use-stat-store";
import Hint from "../Hint";

function NavBar() {
  const { cartsProduct } = useStatStore();
  const pathname = usePathname();
  const routes = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about-us" },
    { title: "Products", url: "/products" },
    { title: "Collections", url: "/collections" },
    { title: "Blog", url: "/blog" },
    { title: "Contact", url: "/contact" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-offwhite-rose/95 backdrop-blur-sm transition-all duration-300 flex justify-between items-center">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary relative overflow-hidden group"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              Writefully
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              {" "}
              Yours
            </span>
            <span className="absolute left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-primary">
              Writefully
            </span>
            <span className="absolute left-[108px] inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-primary">
              {" "}
              Yours
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="text-sm font-medium relative group"
            >
              <span
                className={cn(
                  "transition-colors duration-300 group-hover:text-primary",
                  pathname === item.url && "text-primary" // Highlight active route
                )}
              >
                {item.title}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <Link
              href="/#"
              className="text-sm font-medium transition-colors hover:text-primary hidden md:block"
            >
              Account
            </Link>
            <Hint label="your carts products" side="right">
              <Link href="/carts" className="relative group">
                <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white transition-transform duration-300 group-hover:scale-125">
                  {cartsProduct.length}
                </span>
              </Link>
            </Hint>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <Button
        variant={"outline"}
        className="border-none md:hidden"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </Button>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Navigate through the website</SheetDescription>
          </SheetHeader>

          <nav className="flex flex-col gap-y-4 mt-4">
            {routes.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="text-sm font-medium relative group"
                onClick={() => setOpen(false)} // Close sidebar on link click
              >
                <span
                  className={cn(
                    "transition-colors duration-300 group-hover:text-primary",
                    pathname === item.url && "text-primary" // Highlight active route
                  )}
                >
                  {item.title}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <Link
                href="/#"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Account
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default NavBar;
