"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-[calc(100vh-70px)] flex flex-col items-center justify-center overflow-auto px-4"> 
      {/* Adjust for padding under the navbar */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl space-y-4 lg:space-y-0 lg:space-x-12"> {/* Reduced vertical space */}
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 space-y-4 text-left" // Reduced spacing between lines
          initial={{ opacity: 0, y: -30 }} // Smaller animation to minimize delay
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Faster animation
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            About Me
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            I provide comprehensive, end-to-end order fulfillment services, along with building custom websites that help businesses grow and scale effectively.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            I am dedicated to delivering practical and innovative solutions that align with your vision, whether it&apos;s creating new web applications or enhancing existing websites with advanced functionality.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          className="flex justify-center lg:justify-end w-full lg:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Faster animation
        >
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md text-left"> {/* Left-aligned on all screens */}
            <Image
              src="/headshot.webp"
              alt="CEO headshot"
              className="rounded-[100px_20px_50px_20px] lg:rounded-[150px_20px_100px_20px] shadow-lg"
              priority={true}
              height={900}
              width={900}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ maxHeight: '55vh', width: '100%', objectFit: 'cover', objectPosition: 'top' }} // Reduced image height for a tighter fit
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzjT/7JW3uopNPlkkj2Ir5wCScHnoOPXr7VBJpWn+Y22WPGTisSMlrgEkngdfpUTu3mN8x6nvRsVe5/9k="
              placeholder="blur"
            />
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Ben Myers</h3>
              <p className="text-base md:text-lg text-gray-600">CEO/Founder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
