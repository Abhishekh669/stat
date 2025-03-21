"use client"
import React from "react";
import { Wrench } from "lucide-react";
import { motion } from "framer-motion";

function BlogPage() {
  return (
    <div className="flex w-full min-h-screen h-full justify-center items-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex justify-center"
        >
          <Wrench className="h-12 w-12 text-blue-500 mb-4" />
        </motion.div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Page Under Maintenance
        </h1>
        <p className="text-gray-600 mb-6">
          We&apos;re currently working on improving this page. Please check back later!
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default BlogPage;