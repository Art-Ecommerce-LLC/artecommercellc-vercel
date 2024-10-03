"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@nextui-org/react";
import { BoltIcon, ScaleIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {

    const heroRef = useRef(null);
    const isHeroInView = useInView(heroRef, { once: true });
    const gearRotationVariants = {
        initial: { rotate: 0 },
        animate: {
            rotate: [180, 360], // Start at 0 degrees, rotate to 360
            transition: {
                duration: 1,      // Adjust how long the rotation takes
                ease: "easeOut",  // Slow down towards the end
                repeat: 0         // Ensure it only rotates once
            },
        },
    };
 
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
                        Maximize Your Online Visibility with SEO
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
                        href="mailto:ben@artecommercellc.com?subject=Get%20Started%20with%20a%20Plan"
                        className="py-5 px-6 rounded-lg flex items-center space-x-2"
                        color="primary"
                        as="a"
                        >
                        <EnvelopeIcon className="h-5 w-5" />
                        
                        Get a Free Consultation
                        </Button>
                        <p className="text-white">Or call me at <strong>(858) 519-2727</strong></p>
                    </div>
                    </motion.div>

                     {/* Rotating Gear Image */}
                     <motion.div
                        className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-8"
                        initial={{ opacity: 0 }}
                        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            variants={gearRotationVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Image
                                src="/seogear.png"
                                alt="SEO Gear"
                                className="object-cover"
                                priority={true}
                                height={500}
                                width={500}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
}