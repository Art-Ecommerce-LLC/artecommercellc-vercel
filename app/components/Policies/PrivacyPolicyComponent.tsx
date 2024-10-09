"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export default function PrivacyPolicy() {
  const isPolicyRef = React.useRef(null);
  const isInView = useInView(isPolicyRef, { once: true });

  return (
    <div className="w-full bg-[var(--dark-grey)] min-h-[90vh] flex flex-col justify-center items-center px-4">
      <motion.div
        ref={isPolicyRef}
        className="flex flex-col bg-[rgba(255,255,255,0.05)] border-l-4 border-indigo-600 rounded-lg p-6 shadow-lg hover:shadow-indigo-600/50 transition-shadow hover:scale-105 transform max-w-3xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-white mb-4">Privacy Policy</h1>
        <div className="text-white space-y-4">
          <p>
            Welcome to our website. By accessing and using this website, you
            accept and agree to be bound by the following privacy policy:
          </p>

          <h2 className="font-semibold">1. Information Collection</h2>
          <p>
            We collect personal information that you provide to us, such as your
            name, email address, and phone number.
          </p>

          <h2 className="font-semibold">2. Information Use</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, as well as to protect our users.
          </p>

          <h2 className="font-semibold">3. Information Sharing</h2>
          <p>
            We may share your information with third parties for the purpose of
            providing our services or as required by law.
          </p>

          <h2 className="font-semibold">4. Information Security</h2>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure.
          </p>

          <h2 className="font-semibold">5. Changes to Privacy Policy</h2>
          <p>
            We reserve the right to modify or replace this privacy policy at any
            time. Please check this page periodically for changes.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
