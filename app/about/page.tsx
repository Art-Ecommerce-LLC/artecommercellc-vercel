"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-8xl p-8 md:p-16">
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-left lg:text-left pr-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Art Ecommerce offers comprehensive end-to-end order fulfillment services, alongside building custom websites that empower artists to sell their work effortlessly.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Our team delivers practical solutions that align with our clients' visions, whether it’s new web applications or enhancing existing sites with advanced functionalities.
          </p>
        </motion.div>

        {/* CEO Section */}
        <motion.div
          className="mt-8 w-full lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full max-w-sm lg:max-w-md text-center lg:text-left">
            <Image
              src="/headshot.png"
              alt="CEO headshot"
              className="rounded-[100px_20px_50px_20px] lg:rounded-[150px_20px_100px_20px] shadow-lg"
              priority={true}
              height={600}
              width={450}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDzjT/7JW3uopNPlkkj2Ir5wCScHnoOPXr7VBJpWn+Y22WPGTisSMlrgEkngdfpUTu3mN8x6nvRsVe5/9k="
              placeholder="blur"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-800">Ben Myers</h3>
              <p className="text-lg text-gray-600">CEO/Founder</p>
              <p className="text-md text-gray-500">Encinitas, CA</p>
              <p className="text-md text-gray-500">UC Berkeley Graduate, Physics (2023)</p>
              <p className="text-md text-gray-500">Physicist Turned Software Developer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
