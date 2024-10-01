"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@headlessui/react";
import { BoltIcon, ArrowTrendingUpIcon, ScaleIcon, CodeBracketIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaPython, FaReact, FaStripe } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Home() {
  // Refs to track sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Use inView hook to trigger animations on scroll
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });

  return (
    <div className="w-full bg-gray-50">
      
     {/* Hero Section */}
<motion.div
  ref={heroRef}
  className="hero w-full flex items-center justify-center bg-white min-h-[90vh] pb-12 lg:pb-16"
  initial={{ opacity: 0 }}
  animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
  transition={{ duration: 1 }}
>
  {/* Hero Section Content */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl px-6 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-8">
    {/* Hero Section */}
<motion.div
  ref={heroRef}
  className="relative hero w-full flex flex-col items-center justify-center bg-white min-h-[90vh] pb-12 lg:pb-16"
  initial={{ opacity: 0 }}
  animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
  transition={{ duration: 1 }}
>
  {/* Hero Section Content */}
  <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl px-6 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-8">
    {/* Text Section */}
    <motion.div
      className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-left text-black"
      initial={{ opacity: 0, x: -100 }}
      animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-black">
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
          src={`/seogear.png`}
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

  <motion.div
  className="absolute bottom-8 flex justify-center w-full space-x-6 px-6" // space-x-6 adds space between the arrows
  initial={{ y: 0 }} // Remove opacity animation for no fading
  animate={{ y: [0, -10, 0] }} // Only animate the y-axis for the bounce effect
  transition={{
    duration: 1.5,  // Control the speed of the bounce
    repeat: Infinity,  // Infinite repeat
    ease: "easeInOut",  // Smooth easing for smooth bounce
  }}
>
  <ArrowDownIcon className="h-10 w-10 text-gray-500" />
  <ArrowDownIcon className="h-10 w-10 text-gray-500" />
  <ArrowDownIcon className="h-10 w-10 text-gray-500" />
</motion.div>

  
</motion.div>
  </div>
</motion.div>



      {/* About and Tools Section */}
      <div className="w-full bg-white pb-16 px-6 lg:px-16">
        {/* About and Tools Section Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* About Me Section */}
          <motion.div
            ref={aboutRef}
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">About Me</h2>
            <p className="text-lg text-gray-700 text-left mb-4">
              Hi, I&apos;m Ben, a passionate software engineer with a focus on delivering high-quality, SEO-friendly, and scalable websites. Over the past year, I&apos;ve worked closely with clients to create tailored solutions that meet their business needs.
            </p>
            <p className="text-lg text-gray-700 text-left">
              I&apos;m dedicated to ensuring my clients&apos; success by leveraging modern tools and strategies. I take pride in being adaptable, detail-oriented, and committed to client satisfaction.
            </p>
          </motion.div>

          {/* Tools I Use Section */}
          <motion.div
            ref={aboutRef}
            className="md:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-3">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              <div className="flex flex-col items-center">
                <FaPython className="text-4xl text-gray-700" />
                <p className="text-gray-600 mt-2">Python</p>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-4xl text-gray-700" />
                <p className="text-gray-600 mt-2">Next.js</p>
              </div>
              <div className="flex flex-col items-center">
                <FaStripe className="text-7xl text-gray-700" />
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl text-gray-700" />
                <p className="text-gray-600 mt-2">TypeScript</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-gray-700" />
                <p className="text-gray-600 mt-2">React</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPostgresql className="text-4xl text-gray-700" />
                <p className="text-gray-600 mt-2">PostgreSQL</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <motion.div
        ref={servicesRef}
        className="w-full bg-gray-50 py-16 px-6 lg:px-16"
        initial={{ opacity: 0 }}
        animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-start text-left"
              initial={{ x: 100, opacity: 0 }}
              animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-4">
                <CodeBracketIcon className="h-12 w-12 text-[var(--third-light)]" />
                <h3 className="text-3xl font-bold text-gray-900">Custom Web Development</h3>
              </div>
              <p className="text-gray-600 mt-4">
                Fully customized websites tailored to your business needs with scalable architecture.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-start text-left"
              initial={{ x: 100, opacity: 0 }}
              animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-4">
                <ArrowTrendingUpIcon className="h-12 w-12 text-[var(--third-light)]" />
                <h3 className="text-3xl font-bold text-gray-900">SEO Optimization</h3>
              </div>
              <p className="text-gray-600 mt-4">
                Boost your search engine rankings with SEO strategies built into every page.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-start text-left"
              initial={{ x: 100, opacity: 0 }}
              animate={isServicesInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center space-x-4">
                <ScaleIcon className="h-12 w-12 text-[var(--third-light)]" />
                <h3 className="text-3xl font-bold text-gray-900">Business Automation</h3>
              </div>
              <p className="text-gray-600 mt-4">
                Automate essential processes, integrating tools that save time and money.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        ref={contactRef}
        className="w-full bg-gray-100 py-16 px-6 lg:px-16"
        initial={{ opacity: 0 }}
        animate={isContactInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0">
          {/* Contact Info Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Align heading and icon on the same row */}
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Contact Me</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600">
              Feel free to reach out via phone or email. I’m always open to discussing new projects or collaboration opportunities.
            </p>
            <div className="border-gray-300 pt-4">
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-8 w-8 text-gray-500" />
                <p className="text-xl text-gray-800">(858) 519-2727</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <EnvelopeIcon className="h-8 w-8 text-gray-500" />
                <p className="text-xl text-gray-800">ben@artecommercellc.com</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex space-x-4">
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Connect with Me</h3>
            </div>
            <p className="text-lg md:text-xl text-gray-600 pb-6">Follow me on social media to stay updated with my work.</p>

            {/* Centered social icons */}
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://www.linkedin.com/company/art-ecommerce-llc/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                <FaLinkedin className="h-8 w-8" />
              </a>
              <a href="https://github.com/art-ecommerce-llc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                <FaGithub className="h-8 w-8" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
