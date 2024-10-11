"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  return (
    <div className="w-full bg-[var(--dark-grey)] pb-16 px-6 lg:px-16 justify-center flex flex-col items-center mt-12">
      <motion.div
        ref={aboutRef}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-start lg:space-x-0 py-12 px-0 lg:px-0 w-full"
        initial={{ opacity: 0, x: -100 }}
        animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image and Social Media Section */}
        <div
          className="w-full mr-4 lg:w-auto flex flex-col justify-center items-center mt-0 lg:mt-0"
        >
          <div className="relative w-[225px] h-[225px] sm:w-[225px] sm:h-[225px] lg:w-[225px] lg:h-[225px] rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg mb-2 ">
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
          <div
            className="flex justify-center space-x-4 mb-4"
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
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-full space-y-4 mt-0 lg:mt-0 bg-[rgba(255,255,255,0.05)] border-l-4 border-indigo-600 rounded-lg shadow-lg p-6 hover:shadow-xl lg:flex lg:flex-col lg:justify-center "
        >
          <h2 className="text-4xl font-bold text-white text-left mb-4">
            About Me
          </h2>
          <p className="text-lg text-white leading-relaxed text-left">
            Hi, I&#39;m Ben, a passionate software engineer with a focus on delivering high-quality, SEO-friendly, and scalable websites. Over the past year, I&#39;ve worked closely with clients to create tailored solutions that meet their business needs.
          </p>
          <p className="text-lg text-white leading-relaxed text-left">
            I&#39;m dedicated to ensuring my clients&#39; success by leveraging modern tools and strategies. I take pride in being adaptable, detail-oriented, and committed to client satisfaction.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
