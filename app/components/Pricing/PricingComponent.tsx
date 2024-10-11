"use client";

import { motion } from "framer-motion";
import { CurrencyDollarIcon, EnvelopeIcon, CheckCircleIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, CogIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import NavbarComponent from "../Navbar";
import Footer from "../Footer";


export default function Pricing() {
  return (
    <div className="bg-[var(--dark-grey)]">
      <NavbarComponent isActive={"Pricing"} />
      <div className="w-full min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-start w-full max-w-4xl space-y-6 text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight flex items-center p-6">
            Pricing
            <CurrencyDollarIcon className="w-10 h-10 text-white ml-2" />
          </h2>
        </motion.div>

        {/* Pricing Details */}
        <motion.div
          className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Basic Plan */}
          <motion.div
            className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border-l-4 border-blue-500 rounded-lg p-6 shadow-lg hover:shadow-blue-500/50 transition-shadow hover:scale-105 transform "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <DevicePhoneMobileIcon className="h-6 w-6 text-blue-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Basic Plan</h3>
            </div>
            <p className="text-white">Ideal for small businesses and startups.</p>
            <div className="text-3xl sm:text-4xl font-bold text-white mt-4">$2K</div>
            <ul className="mt-6 space-y-2 text-white w-full flex-grow">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>1 page</span>
              </li>
              <li className="flex items-center space-x-2">
                <CogIcon className="h-5 w-5 text-gray-500" />
                <span>Custom design</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Responsive layout</span>
              </li>
              
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                <span>Email support</span>
              </li>
              
            </ul>
            <div className="mt-6 text-white">
              <h4 className="text-lg font-semibold">Additional Costs:</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Maintenance & Hosting: $100/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Website updates after delivery: $300</span>
                </li>
              </ul>
            </div>
              <Button
                className="py-4 px-6 mt-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105 flex items-center space-x-2"
                color="primary"
                as="a"
                href="/appointments"
              >
                <CalendarIcon className="h-5 w-5" />
                Get Started
              </Button>
          </motion.div>

          {/* Standard Plan */}
          <motion.div
            className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border-l-4 border-yellow-500 rounded-lg p-6 shadow-lg hover:shadow-yellow-500/50 transition-shadow hover:scale-105 transform "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <ComputerDesktopIcon className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Standard Plan</h3>
            </div>
            <p className="text-white">Perfect for medium-sized projects.</p>
            <div className="text-3xl sm:text-4xl font-bold text-white mt-4">$3K</div>
            <ul className="mt-6 space-y-2 text-white w-full flex-grow">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Up to 5 pages</span>
              </li>
              <li className="flex items-center space-x-2">
                <CogIcon className="h-5 w-5 text-gray-500" />
                <span>Custom design</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Responsive layout</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                <span>Priority email support</span>
              </li>
            </ul>
            <div className="mt-6 text-white">
              <h4 className="text-lg font-semibold">Additional Costs:</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Maintenance & Hosting: $100/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Website updates after delivery: $300</span>
                </li>
              </ul>
            </div>
              <Button
                className="py-4 px-6 mt-4 rounded-lg text-white bg-yellow-500 hover:bg-yellow-600 transition-transform transform hover:scale-105 flex items-center space-x-2"
                color="primary"
                as="a"
                href="/appointments"
              >
                <CalendarIcon className="h-5 w-5" />
                Get Started
              </Button>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            className="flex flex-col items-start bg-[rgba(255,255,255,0.05)] border-l-4 border-green-500 rounded-lg p-6 shadow-lg hover:shadow-green-500/50 transition-shadow hover:scale-105 transform "
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Premium Plan</h3>
            </div>
            <p className="text-white">For complex, large-scale projects.</p>
            <div className="text-3xl sm:text-4xl font-bold text-white mt-4">$10K</div>
            <ul className="mt-6 space-y-2 text-white w-full flex-grow">
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Up to 10 Pages</span>
              </li>
              <li className="flex items-center space-x-2">
                <CogIcon className="h-5 w-5 text-gray-500" />
                <span>Custom design</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Custom Integrations</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Responsive layout</span>
              </li>
              <li className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                <span>24/7 priority support</span>
              </li>
            </ul>
            <div className="mt-6 text-white">
              <h4 className="text-lg font-semibold">Additional Costs:</h4>
              <ul className="space-y-2 mt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Maintenance & Hosting: $500/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span>Website updates after delivery: $300</span>
                </li>
              </ul>
            </div>
              <Button
                className="py-4 px-6 mt-4 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105 flex items-center space-x-2"
                color="primary"
                as="a"
                href="/appointments"
              >
                <CalendarIcon className="h-5 w-5" />
                Get Started
              </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
