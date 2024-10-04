"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScaleIcon, ArrowTrendingUpIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react"; // Using Button from NextUI

export default function ServicesSection() {
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  return (
    <motion.div
      ref={servicesRef}
      className="w-full py-16 px-6 lg:px-16 bg-[var(--dark-grey)]"
      initial={{ opacity: 0 }}
      animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-4xl font-semibold text-white text-center mb-8 tracking-wide">How I Grow Your Business</h3>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Web Development */}
          <motion.div
            className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.05)] border-l-4 border-indigo-600 rounded-lg p-6 shadow-lg hover:shadow-indigo-600/50 transition-shadow hover:scale-105 transform "
            initial={{ x: 100, opacity: 0 }}
            animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4">
              <CodeBracketIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="text-xl font-semibold text-white">Web Development</h3>
            </div>
            <p className="text-white mt-4">
              Fully customized websites tailored to your business needs with scalable architecture.
            </p>
            <p className="text-sm text-yellow-400 font-semibold mt-2">Limited Spots Available!</p>
            <Button
              className="py-4 px-6 mt-4 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105"
              color="primary"
              as="a"
              href="/pricing"
            >
              Get Started
            </Button>
          </motion.div>

          {/* SEO Optimization */}
          <motion.div
            className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.05)] border-l-4 border-green-600 rounded-lg p-6 shadow-lg hover:shadow-green-600/50 transition-shadow hover:scale-105 transform "
            initial={{ x: 100, opacity: 0 }}
            animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4">
              <ArrowTrendingUpIcon className="h-12 w-12 text-green-600" />
              <h3 className="text-xl font-semibold text-white">Search Engine Optimization</h3>
            </div>
            <p className="text-white mt-4">
              Boost your search engine rankings with SEO strategies built into every page.
            </p>
            <p className="text-sm text-yellow-400 font-semibold mt-2">100% Client Satisfaction!</p>
            <Button
              className="py-4 px-6 mt-4 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105"
              color="primary"
              as="a"
              href="/pricing"
            >
              Boost Your SEO
            </Button>
          </motion.div>

          {/* Automation */}
          <motion.div
            className="flex flex-col items-start text-left bg-[rgba(255,255,255,0.05)] border-l-4 border-yellow-600 rounded-lg p-6 shadow-lg hover:shadow-yellow-600/50 transition-shadow hover:scale-105 transform "
            initial={{ x: 100, opacity: 0 }}
            animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4">
              <ScaleIcon className="h-12 w-12 text-yellow-600" />
              <h3 className="text-xl font-semibold text-white">Automation</h3>
            </div>
            <p className="text-white mt-4">
              Automate essential processes, integrating tools that save time and money.
            </p>
            <p className="text-sm text-yellow-400 font-semibold mt-2">Reduce Costs with Smart Automation!</p>
            <Button
              className="py-4 px-6 mt-4 rounded-lg text-white bg-yellow-600 hover:bg-yellow-700 transition-transform transform hover:scale-105"
              color="primary"
              as="a"
              href="/pricing"
            >
              Automate Now
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
