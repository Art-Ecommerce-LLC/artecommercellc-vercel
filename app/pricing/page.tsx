"use client";

import { motion } from "framer-motion";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"; // Importing Headless UI icon

export default function Pricing() {
  return (
    <div className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center justify-start mt-8">
      
      {/* Text Section */}
      <motion.div
        className="flex flex-col justify-start w-full max-w-4xl space-y-6 text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight flex items-center">
          Pricing
          <CurrencyDollarIcon className="w-10 h-10 text-gray-800 ml-2" /> {/* Using the Heroicons CurrencyDollarIcon */}
        </h2>
        <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
          The pricing is based on the complexity of the project, specific
          requirements of our clients, and the duration of labor. I offer
          competitive rates and flexible payment options to accommodate various
          budgets. For a detailed quote, please contact me directly.
        </p>
      </motion.div>

      {/* Pricing Details */}
      <motion.div
        className="mt-12 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Basic Plan */}
        <div className="flex flex-col items-center bg-white p-8 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Basic Plan</h3>
          <p className="text-gray-600 mt-4">Ideal for small projects and startups.</p>
          <div className="text-4xl font-bold text-gray-800 mt-4">$500+</div>
          <ul className="mt-6 space-y-4 text-gray-600 text-left">
            <li>Up to 5 pages</li>
            <li>Responsive layout</li>
          </ul>
        </div>

        {/* Standard Plan */}
        <div className="flex flex-col items-center bg-white p-8 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Standard Plan</h3>
          <p className="text-gray-600 mt-4">Perfect for medium-sized projects.</p>
          <div className="text-4xl font-bold text-gray-800 mt-4">$1000+</div>
          <ul className="mt-6 space-y-4 text-gray-600 text-left">
            <li>Up to 10 pages</li>
            <li>Custom design</li>
            <li>Responsive layout</li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col items-center bg-white p-8 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800">Premium Plan</h3>
          <p className="text-gray-600 mt-4">For complex, large-scale projects.</p>
          <div className="text-4xl font-bold text-gray-800 mt-4">$2000+</div>
          <ul className="mt-6 space-y-4 text-gray-600 text-left">
            <li>Unlimited pages</li>
            <li>Advanced design</li>
            <li>Custom integrations</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
