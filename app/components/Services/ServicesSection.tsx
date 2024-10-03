"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScaleIcon, ArrowTrendingUpIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

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
            <h3 className="text-4xl font-semibold text-white text-center mb-8 tracking-wide">How We Help Your Business Grow</h3>
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Web Development */}
                    <motion.div
                        className="flex flex-col items-start text-left bg-[var(--dark-grey)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
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
                        <a href="/pricing" className="mt-4 text-indigo-600 hover:underline">
                            Get Started
                        </a>
                    </motion.div>

                    {/* SEO Optimization */}
                    <motion.div
                        className="flex flex-col items-start text-left bg-[var(--dark-grey)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center space-x-4">
                            <ArrowTrendingUpIcon className="h-12 w-12 text-green-600" />
                            <h3 className="text-xl font-semibold text-white">SEO Optimization</h3>
                        </div>
                        <p className="text-white mt-4">
                            Boost your search engine rankings with SEO strategies built into every page.
                        </p>
                        <a href="/pricing" className="mt-4 text-green-600 hover:underline">
                            Boost Your SEO
                        </a>
                    </motion.div>

                    {/* Automation */}
                    <motion.div
                        className="flex flex-col items-start text-left bg-[var(--dark-grey)] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
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
                        <a href="/pricing" className="mt-4 text-yellow-600 hover:underline">
                            Automate Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
