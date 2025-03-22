"use client"
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SocialMediaIcons from './social-icons'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function Footer() {
  const router = useRouter();
  const links = [
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Blog",
      url: "/#",
    },
    {
      title: "Products",
      url: "/products",
    },
    {
      title: "FAQ",
      url: "/#",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
  ];
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 pointer-events-none"></div>
    <div className="container px-4 py-12 relative ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-xl font-bold text-white mb-4 relative inline-block">
            Writefully Yours
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h3>
          <p className="text-sm mb-4">
            Premium stationery for creative minds and productive
            professionals.
          </p>
          <SocialMediaIcons />
        </div>


        <div className='min-w-[calc(100vw-700px)] flex gap-x-4 justify-between'>
        <div>
          <h3 className="font-medium text-white mb-4 relative inline-block">
            Shop
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h3>
          <ul className=" text-sm">
            {[
              "Notebooks",
              "Pens & Pencils",
              "Planners",
              "Office Essentials",
              "Gift Sets",
            ].map((item, index) => (
              <li key={index}>
                <Button
                variant={"ghost"}
                  onClick={() => router.push(`/products`)}
                  className="p-0 hover:text-white hover:bg-transparent transition-colors duration-300 relative group"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white mb-4 relative inline-block">
            Information
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h3>
          <ul className=" text-sm">
            {links.map((item, index) => (
              <li key={index}>
                <Button
                variant={"ghost"}
                  onClick={() => router.push(`${item.url}`)}
                  className="p-0 hover:text-white transition-colors hover:bg-transparent duration-300 relative group"
                >
                  <span>{item.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-white mb-4 relative inline-block">
            Contact
            <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start group">
              <MapPin className="h-5 w-5 mr-2 shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span> Sydney,  Australia</span>
            </li>
            <li className="flex items-center group">
              <Phone className="h-5 w-5 mr-2 shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span>+61 2 1234 5678</span>
            </li>
            <li className="flex items-center group">
              <Mail className="h-5 w-5 mr-2 shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span>info@writefullyyours.com</span>
            </li>
          </ul>
        </div>

        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
        <p>© 2025 Writefully Yours. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
