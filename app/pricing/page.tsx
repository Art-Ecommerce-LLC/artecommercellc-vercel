"use client";

import { motion } from "framer-motion";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

export default function Pricing() {
  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center justify-start mt-8 px-4 sm:px-8 md:px-12 lg:px-16">
      
      {/* Text Section */}
      <motion.div
        className="flex flex-col justify-start w-full max-w-4xl space-y-6 text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight flex items-center">
          Pricing
          <CurrencyDollarIcon className="w-10 h-10 text-gray-800 ml-2" />
        </h2>
        <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-gray-600 max-w-3xl">
          My pricing is based on the complexity of the project, specific
          requirements, and duration of labor. I offer competitive rates with flexible payment options to accommodate various budgets. Contact me for a detailed quote tailored to your needs.
        </p>
      </motion.div>

      {/* Pricing Details */}
      <motion.div
        className="mt-12 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Basic Plan */}
        <div className="flex flex-col items-start bg-white p-8 border border-gray-300 rounded-lg shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Basic Plan</h3>
          <p className="text-gray-600 mt-4">Ideal for small projects and startups.</p>
          <div className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">$500+</div>
          <ul className="mt-6 space-y-2 text-gray-600 w-full flex-grow">
            <li>Up to 5 pages</li>
            <li>Responsive layout</li>
            <li>Email support</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="flex flex-col items-start bg-white p-8 border border-gray-300 rounded-lg shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Standard Plan</h3>
          <p className="text-gray-600 mt-4">Perfect for medium-sized projects.</p>
          <div className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">$1000+</div>
          <ul className="mt-6 space-y-2 text-gray-600 w-full flex-grow">
            <li>Up to 10 pages</li>
            <li>Custom design</li>
            <li>Responsive layout</li>
            <li>Priority email support</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col items-start bg-white p-8 border border-gray-300 rounded-lg shadow-md transition-transform hover:scale-105">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Premium Plan</h3>
          <p className="text-gray-600 mt-4">For complex, large-scale projects.</p>
          <div className="text-3xl sm:text-4xl font-bold text-gray-800 mt-4">$2000+</div>
          <ul className="mt-6 space-y-2 text-gray-600 w-full flex-grow">
            <li>Unlimited pages</li>
            <li>Advanced design</li>
            <li>Custom integrations</li>
            <li>24/7 priority support</li>
          </ul>
        </div>
      </motion.div>

      {/* Email Me Button for All Plans */}
      <motion.div
        className="mt-12 mb-6" // Add margin on the top and bottom for spacing
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a
          href="mailto:ben@artecommercellc.com?subject=Get%20Started%20with%20a%20Plan"
          className="py-3 px-6 text-white rounded-lgransition-colors Button"
        >
          Email Me to Get Started
        </a>
      </motion.div>
    </div>
  );
}
