"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@headlessui/react";
import { BoltIcon, ArrowTrendingUpIcon, ScaleIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaPython, FaReact, FaStripe } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";


export default function Home() {
  // Refs to track sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const integrationsRef = useRef(null);

  // Use inView hook to trigger animations on scroll
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isIntegrationsInView = useInView(integrationsRef, { once: true });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="hero w-full flex flex-col items-center justify-center bg-white min-h-[90vh] lg:pb-16"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section Content */}
        <div className="w-full max-w-7xl px-6 lg:px-16 space-y-8 lg:space-y-0 sm:mt-5">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Text Section */}
            <motion.div
              className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-left text-black sm:space-y-5"
              initial={{ opacity: 0, x: -100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl sm:text-5xl sm:pt-0 lg:text-6xl font-extrabold leading-tight text-black">
                <span className="text-black">Empower Your Business</span> with Custom SEO Websites
              </h1>
              <p className="text-lg md:text-xl text-black">
                My goal is to deliver tailored websites that boost traffic, scale seamlessly with your business, and improve your search rankings.
              </p>
              <ul className="text-black space-y-4">
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
                <p className="text-black">Or call me at <strong>(858) 519-2727</strong></p>
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

     {/* Services Section (Enhanced) */}
<motion.div
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

{/* Integrations Section */}
<div className="w-full bg-white py-16 px-6 lg:px-16 mt-8" ref={integrationsRef}>
  <div className="mx-auto max-w-7xl space-y-12">
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: -100 }}
      animate={isIntegrationsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-4xl font-bold text-gray-900 text-center mb-8">Integrations</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Integration Cards */}
        <motion.div
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-100 border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaPython className="text-5xl text-[#306998]" /> {/* Python Brand Color */}
          <p className="text-lg text-gray-600 mt-4">Python</p>
        </motion.div>
        
        <motion.div
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-100 border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <SiNextdotjs className="text-5xl text-[#000000]" /> {/* Next.js Brand Color */}
          <p className="text-lg text-gray-600 mt-4">Next.js</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-100 border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaStripe className="text-8xl text-[#635BFF]" /> {/* Stripe Brand Color */}
        </motion.div>

        <motion.div
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-100 border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <SiTypescript className="text-5xl text-[#007ACC]" /> {/* TypeScript Brand Color */}
          <p className="text-lg text-gray-600 mt-4">TypeScript</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-100 border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaReact className="text-5xl text-[#61DBFB]" /> {/* React Brand Color */}
          <p className="text-lg text-gray-600 mt-4">React</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-gradient-to-br from-white to-gray-100 border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <SiPostgresql className="text-5xl text-[#336791]" /> {/* PostgreSQL Brand Color */}
          <p className="text-lg text-gray-600 mt-4">PostgreSQL</p>
        </motion.div>
      </div>
    </motion.div>
  </div>
</div>
{/* About Me Section */}
<div className="w-full bg-gradient-to-br pb-16 px-6 lg:px-16 justify-center flex flex-col items-center mt-12">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 py-12 px-4 lg:px-8 bg-white rounded-lg shadow-lg">
    
    {/* Text Section */}
    <motion.div
      ref={aboutRef}
      className="w-full lg:w-1/2 space-y-6"
      initial={{ opacity: 0, x: -100 }}
      animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-900 text-center lg:text-left mb-6">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-left">
        Hi, I&#39;m Ben, a passionate software engineer with a focus on delivering high-quality, SEO-friendly, and scalable websites. Over the past year, I&#39;ve worked closely with clients to create tailored solutions that meet their business needs.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed text-left">
        I&#39;m dedicated to ensuring my clients&#39; success by leveraging modern tools and strategies. I take pride in being adaptable, detail-oriented, and committed to client satisfaction.
      </p>

      {/* Social Media Links - Moved below the text and centered */}
      <motion.div
        className="flex justify-center mt-6 space-x-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a href="https://www.linkedin.com/company/art-ecommerce-llc/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl text-gray-700 hover:text-blue-600 transition-colors duration-300" />
        </a>
        <a href="https://www.github.com/Art-Ecommerce-LLC" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-gray-700 hover:text-black transition-colors duration-300" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl text-gray-700 hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/artecommercellc" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl text-gray-700 hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a href="https://x.com/ArtEcommerceLLC" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl text-gray-700 hover:text-blue-400 transition-colors duration-300" />
        </a>
      </motion.div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      ref={aboutRef}
      className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0"
      initial={{ opacity: 0, x: 100 }}
      animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
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
    </motion.div>
  </div>
</div>



    </div>
  );
}
