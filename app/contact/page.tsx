"use client";

import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="w-full h-full pt-6 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-8xl pt-0 pl-8 pr-8 pb-8 md:p-16">
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-left lg:text-left pr-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            If you have any questions or would like to reach out to us, please use the following contact information.
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div
          className="mt-8 w-full lg:w-2/5 flex justify-center"
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
