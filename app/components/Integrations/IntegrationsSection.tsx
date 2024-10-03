"use client";

import { FaPython, FaReact, FaStripe } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function HeroSection() {

    const integrationsRef = useRef(null);
    const isIntegrationsInView = useInView(integrationsRef, { once: true });
{/* Hero Section */}
 
    return  <div className="w-full bg-white py-16 px-6 lg:px-16 mt-8" ref={integrationsRef}>
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
        <motion.a
          href="https://www.python.org/doc/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-[#306998] text-white"
          whileHover={{ scale: 1.05 }}
        >
          <FaPython className="text-5xl" /> {/* Python Brand Color */}
          <p className="text-lg mt-4">Python</p>
        </motion.a>
        
        <motion.a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-[#000000] text-white"
          whileHover={{ scale: 1.05 }}
        >
          <SiNextdotjs className="text-5xl" /> {/* Next.js Brand Color */}
          <p className="text-lg mt-4">Next.js</p>
        </motion.a>

        <motion.a
          href="https://stripe.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-[#635BFF] text-white"
          whileHover={{ scale: 1.05 }}
        >
          <FaStripe className="text-8xl" /> {/* Stripe Brand Color */}
        </motion.a>

        <motion.a
          href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-[#007ACC] text-white"
          whileHover={{ scale: 1.05 }}
        >
          <SiTypescript className="text-5xl" /> {/* TypeScript Brand Color */}
          <p className="text-lg mt-4">TypeScript</p>
        </motion.a>

        <motion.a
          href="https://react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-[#61DBFB] text-black"
          whileHover={{ scale: 1.05 }}
        >
          <FaReact className="text-5xl" /> {/* React Brand Color */}
          <p className="text-lg mt-4">React</p>
        </motion.a>

        <motion.a
          href="https://www.postgresql.org/docs/current/intro-whatis.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center rounded-lg p-6 shadow-lg transition-shadow hover:shadow-2xl hover:scale-105 bg-[#336791] text-white"
          whileHover={{ scale: 1.05 }}
        >
          <SiPostgresql className="text-5xl" /> {/* PostgreSQL Brand Color */}
          <p className="text-lg mt-4">PostgreSQL</p>
        </motion.a>
      </div>
    </motion.div>
  </div>
</div>
}