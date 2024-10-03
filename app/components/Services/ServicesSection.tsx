"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScaleIcon, ArrowTrendingUpIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {

    const servicesRef = useRef(null);
    const isServicesInView = useInView(servicesRef, { once: true });

    return <motion.div
        ref={servicesRef}
        className="w-full py-16 px-6 lg:px-16"
        initial={{ opacity: 0 }}
        animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        >
            <h3 className="text-4xl font-bold text-gray-900 text-center mb-8">Services</h3>
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                    className="flex flex-col items-start text-left bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow hover:scale-105"
                    initial={{ x: 100, opacity: 0 }}
                    animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >

                    <div className="flex items-center space-x-4">
                        <CodeBracketIcon className="h-12 w-12 text-indigo-600" />
                        <h3 className="text-3xl font-bold text-gray-900">Web Development</h3>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Fully customized websites tailored to your business needs with scalable architecture.
                    </p>
                    </motion.div>

                    <motion.div
                    className="flex flex-col items-start text-left bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow hover:scale-105"
                    initial={{ x: 100, opacity: 0 }}
                    animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <div className="flex items-center space-x-4">
                        <ArrowTrendingUpIcon className="h-12 w-12 text-green-600" />
                        <h3 className="text-3xl font-bold text-gray-900">SEO Optimization</h3>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Boost your search engine rankings with SEO strategies built into every page.
                    </p>
                    </motion.div>

                    <motion.div
                    className="flex flex-col items-start text-left bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow hover:scale-105"
                    initial={{ x: 100, opacity: 0 }}
                    animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <div className="flex items-center space-x-4">
                        <ScaleIcon className="h-12 w-12 text-yellow-600" />
                        <h3 className="text-3xl font-bold text-gray-900">Automation</h3>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Automate essential processes, integrating tools that save time and money.
                    </p>
                    </motion.div>
                </div>
            </div>
    </motion.div>
}