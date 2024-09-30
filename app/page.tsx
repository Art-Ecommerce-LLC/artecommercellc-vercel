"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@headlessui/react";
import {
  BoltIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
  CodeBracketIcon
} from "@heroicons/react/24/solid"; // Icons for Hero and Services sections

import { FaStripe, FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiPostgresql, SiTypescript } from "react-icons/si";

export default function Home() {
  // Refs to track sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  // Use inView hook to trigger animations on scroll
  const isHeroInView = useInView(heroRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });

  return (
    <div className="w-full bg-gray-50">
      
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="hero w-full flex items-center justify-center bg-white min-h-[calc(100vh-70px)]"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl p-8 md:p-16 space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Text Section */}
          <motion.div
            className="flex flex-col justify-center w-full lg:w-1/2 space-y-8 text-left pr-2 text-black"
            initial={{ opacity: 0, x: -100 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black">
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
                alt="Artist Logo"
                className="object-cover"
                priority={true}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1aWe88+R2iDsMuCAWMbd0DDp6Zq7Hf6oIkCabLIm0bXMy5YetPv0Ua9YRhR5cqSmRccOcDqO9bCqFUKoAAGAB2rZu2r1M1rof/9k="
                placeholder="blur"
                height={500}
                width={500}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* About Me & Tools Section (Side by Side) */}
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* About Me Section */}
          <motion.div
            ref={aboutRef}
            className="md:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            animate={isAboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">About Me</h2>
            <p className="text-lg text-gray-700 text-left mb-4">
              Hi, I'm Ben, a passionate software engineer with a focus on delivering high-quality, SEO-friendly, and scalable websites. Over the past year, I’ve worked closely with clients to create tailored solutions that meet their business needs.
            </p>
            <p className="text-lg text-gray-700 text-left">
              I’m dedicated to ensuring my clients’ success by leveraging modern tools and strategies. I take pride in being adaptable, detail-oriented, and committed to client satisfaction.
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
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-3" >Technologies</h3>
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
        className="w-full bg-gray-50 py-16 px-8"
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
                <h3 className="text-2xl font-bold text-gray-900">Custom Web Development</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">SEO Optimization</h3>
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
                <h3 className="text-2xl font-bold text-gray-900">Business Automation</h3>
              </div>
              <p className="text-gray-600 mt-4">
                Automate essential processes, integrating tools that save time and money.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
