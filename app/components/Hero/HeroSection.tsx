"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@headlessui/react";
import { BoltIcon, ScaleIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

export default function HeroSection() {

    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });
{/* Hero Section */}
 
    return  <motion.div
                ref={heroRef}
                className="hero w-full flex flex-col items-center justify-center bg-[var(--dark-grey)] min-h-[90vh] lg:pb-16"
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
            >
            {/* Hero Section Content */}
            <div className="w-full max-w-7xl p-6 lg:px-16 space-y-8 lg:space-y-0 ">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                    {/* Text Section */}
                    <motion.div
                    className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-left text-white sm:space-y-5"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <h1 className="text-3xl sm:text-5xl sm:pt-0 lg:text-6xl font-extrabold leading-tight text-white">
                        <span className="text-white">Grow Your Business</span> with Search Engine Optimization
                    </h1>
                    <p className="text-lg md:text-xl text-white">
                        Get a tailored website that boosts traffic, grows with your business, and improves search rankings.
                    </p>
                    <ul className="text-white space-y-4">
                        <li className="flex items-center space-x-4">
                        <BoltIcon className="h-8 w-8 text-[var(--third-light)]" />
                        <span><strong>Expert SEO Integration:</strong> Elevate your organic traffic.</span>
                        </li>
                        <li className="flex items-center space-x-4">
                        <ScaleIcon className="h-8 w-8 text-[var(--third-light)]" />
                        <span><strong>Scalable Solutions:</strong> Websites that grow with your business.</span>
                        </li>
                        <li className="flex items-center space-x-4">
                        <ArrowTrendingUpIcon className="h-8 w-8 text-[var(--third-light)]" />
                        <span><strong>Proven Satisfaction:</strong> Happy clients and measurable results.</span>
                        </li>
                    </ul>
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <Button
                        as="a"
                        href="mailto:ben@artecommercellc.com?subject=Get%20a%20Free%20Consultation"
                        className="px-6 py-3 bg-[var(--button-bg-color)] text-[var(--hover-text-color)] font-semibold rounded-lg shadow-lg hover:bg-[var(--hover-bg-color)]"
                        >
                        Get Your Free SEO Audit Today!
                        </Button>
                        <p className="text-white">Or call me at <strong>(858) 519-2727</strong></p>
                    </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                    className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                    <div className="w-full max-w-sm lg:max-w-md">
                        <Image
                        src={"/seogear.png"}
                        alt="SEO Gear"
                        className="object-cover"
                        priority={true}
                        blurDataURL="data:image/jpeg;base64,..."
                        height={500}
                        width={500}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
}