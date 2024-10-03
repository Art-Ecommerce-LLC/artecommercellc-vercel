"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function HeroSection() {

    const aboutRef = useRef(null);
    const isAboutInView = useInView(aboutRef, { once: true });

    return (
        <div className="w-full bg-[var(--dark-grey)] pb-16 px-6 lg:px-16 justify-center flex flex-col items-center mt-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 py-12 px-4 lg:px-8 rounded-lg shadow-lg">
                
                {/* Image Section */}
                <motion.div
                    ref={aboutRef}
                    className="w-full lg:w-1/2 flex flex-col justify-center items-center mt-4 lg:mt-0 space-y-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
                        <Image
                            src="/hirezheadshot.jpg"
                            alt="Ben Myers"
                            className="object-cover"
                            height={500}
                            width={500}
                            priority
                        />
                    </div>

                    {/* Social Media Links */}
                    <motion.div
                        className="flex justify-center space-x-4"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <a href="https://www.linkedin.com/company/art-ecommerce-llc/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl text-white hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a href="https://www.github.com/Art-Ecommerce-LLC" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-3xl text-white hover:text-green-400 transition-colors duration-300" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-3xl text-white hover:text-blue-500 transition-colors duration-300" />
                        </a>
                        <a href="https://www.instagram.com/artecommercellc" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl text-white hover:text-pink-500 transition-colors duration-300" />
                        </a>
                        <a href="https://x.com/ArtEcommerceLLC" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-3xl text-white hover:text-blue-400 transition-colors duration-300" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    ref={aboutRef}
                    className="w-full lg:w-1/2 space-y-4 mt-8 lg:mt-0"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-white text-center lg:text-left mb-4">About Me</h2>
                    <p className="text-lg text-white leading-relaxed text-left">
                        Hi, I&#39;m Ben, a passionate software engineer with a focus on delivering high-quality, SEO-friendly, and scalable websites. Over the past year, I&#39;ve worked closely with clients to create tailored solutions that meet their business needs.
                    </p>
                    <p className="text-lg text-white leading-relaxed text-left">
                        I&#39;m dedicated to ensuring my clients&#39; success by leveraging modern tools and strategies. I take pride in being adaptable, detail-oriented, and committed to client satisfaction.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
