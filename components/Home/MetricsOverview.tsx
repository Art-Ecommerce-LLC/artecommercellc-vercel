"use client";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import CircleProgress from "./CircleProgress";
import { Button } from "@nextui-org/react";
import { CalendarIcon } from "@heroicons/react/24/solid";

export  default function MetricsOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Delay the percentage animation until after the fade-in is complete (1 second)
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
    }
  }, [isInView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="w-full bg-[var(--dark-grey)] py-16 px-6 lg:px-16 mt-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{ duration: 1 }} // Entire section fades in over 1 second
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <h3 className="text-4xl font-semibold text-white text-center mb-8 tracking-wide">
          Why Performance Matters
        </h3>

        {/* Centered Paragraph, with text left-aligned */}
        <p className="text-left text-lg text-white max-w-3xl mx-auto mb-12">
          I focus on delivering high-performing websites that are optimized for search engines, accessibility, and performance. Our strategies ensure your website ranks higher and provides the best user experience, helping you drive more conversions.
        </p>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Best Practices Score */}
            <CircleProgress score={100} label="Best Practices" color="#9C27B0" startAnimation={startAnimation} />

          {/* SEO Score */}
          <CircleProgress score={100} label="SEO" color="#4CAF50" startAnimation={startAnimation} />

          {/* Accessibility Score */}
          <CircleProgress score={91} label="Accessibility" color="#FF9800" startAnimation={startAnimation} />

          {/* Speed Score */}
          <CircleProgress score={88} label="Performace" color="#03A9F4" startAnimation={startAnimation} />

        </div>

        <div className="text-center mt-12">
          <Button
            color="secondary"
            className="height-[6rem]"
            as="a"
            href="/appointments"
          >
            <CalendarIcon className="h-5 w-5" />
            Get a Free Perfomance Audit
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

