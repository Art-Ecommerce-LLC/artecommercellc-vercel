"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export default function TermsOfService() {
  const isTermsRef = React.useRef(null);
  const isTermsInView = useInView(isTermsRef, { once: true });

  return (
    <div className="w-full bg-[var(--dark-grey)] min-h-[90vh] flex flex-col justify-center items-center px-4">
      <motion.div
        ref={isTermsRef}
        className="flex flex-col bg-[rgba(255,255,255,0.05)] border-l-4 border-indigo-600 rounded-lg p-6 shadow-lg hover:shadow-indigo-600/50 transition-shadow hover:scale-105 transform max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isTermsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-white mb-4">Terms of Service</h1>
        <div className="text-white space-y-4">
          <p>
            Welcome to our website. By accessing and using this website, you
            accept and agree to be bound by the following terms and conditions:
          </p>

          <h2 className="font-semibold">1. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text,
            graphics, logos, images, and software, is the property of our
            company and is protected by intellectual property laws.
          </p>

          <h2 className="font-semibold">2. Use of Website</h2>
          <p>
            You may use this website for personal, non-commercial purposes only.
            You must not use this website in any way that causes, or may cause,
            damage to the website or impairment of the availability or
            accessibility of the website.
          </p>

          <h2 className="font-semibold">3. Limitation of Liability</h2>
          <p>
            In no event shall our company be liable for any direct, indirect,
            incidental, special, or consequential damages arising out of or in
            any way connected with the use of this website.
          </p>

          <h2 className="font-semibold">4. Governing Law</h2>
          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of your jurisdiction.
          </p>

          <h2 className="font-semibold">5. Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these terms and conditions
            at any time. Please check this page periodically for changes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
