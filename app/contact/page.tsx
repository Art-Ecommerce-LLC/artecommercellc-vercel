"use client";

import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-[calc(100vh-70px)]"> {/* Flex for vertical alignment */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-8 md:px-16 lg:px-24 py-12"> 
        {/* Contact Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-left pr-0 lg:pr-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Reach out to me using the contact information below or through social media.
          </p>
        </motion.div>

        {/* Contact Info and Social Media Section */}
        <motion.div
          className="mt-8 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Contact Information */}
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-10 w-10 text-gray-600" />
            <p className="text-xl md:text-2xl text-gray-800">(858) 519-2727</p>
          </div>
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-10 w-10 text-gray-600" />
            <p className="text-xl md:text-2xl text-gray-800">ben@artecommercellc.com</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 pt-6">
            <a href="https://www.linkedin.com/in/ben-myers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a href="https://twitter.com/benmyers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaTwitter className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/benmyers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaInstagram className="h-8 w-8" />
            </a>
            <a href="https://github.com/benmyers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaGithub className="h-8 w-8" />
            </a>
            <a href="https://facebook.com/benmyers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaFacebook className="h-8 w-8" />
            </a>
            <a href="https://youtube.com/benmyers" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FaYoutube className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer is positioned at the bottom */}
      <footer className="w-full bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <nav className="mb-4">
            <ul className="flex flex-col custom-520:flex-row justify-center items-center space-y-4 custom-520:space-y-0 custom-520:space-x-4">
              <li className="flex items-center">
                <a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a>
              </li>
              <li className="text-gray-500 mx-2 hidden custom-520:inline">|</li>
              <li className="flex items-center">
                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
              </li>
              <li className="text-gray-500 mx-2 hidden custom-520:inline">|</li>
              <li className="flex items-center">
                <a href="/pricing" className="text-gray-300 hover:text-white transition duration-300">Pricing</a>
              </li>
            </ul>
          </nav>
          <p className="text-gray-500">&copy; 2024 Art Ecommerce, LLC.</p>
        </div>
      </footer>
    </div>
  );
}
