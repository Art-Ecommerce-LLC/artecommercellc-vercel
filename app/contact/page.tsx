"use client";

import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="w-full flex items-center justify-center min-h-[calc(100vh-70px)]">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-8 md:px-16 lg:px-24 pb-8"> 
        {/* Use consistent px padding on both sides */}
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 space-y-6 text-left pr-0 lg:pr-8" // Adjusted padding
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Contact Me
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            If you have any questions or would like to reach out to me, please use the following contact information.
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="mt-8 w-full lg:w-1/2 flex justify-center lg:justify-start" // Adjusted alignment
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full max-w-sm lg:max-w-md text-center lg:text-left space-y-6">
            <div className="flex items-center space-x-4">
              <PhoneIcon className="h-10 w-10 text-gray-600" />
              <p className="text-xl md:text-2xl text-gray-800">(858) 519-2727</p>
            </div>
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-10 w-10 text-gray-600" />
              <p className="text-xl md:text-2xl text-gray-800">ben@artecommercellc.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
