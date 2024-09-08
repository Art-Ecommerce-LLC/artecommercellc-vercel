"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Community() {
  return (
    <div className="w-full h-full pt-6 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-8xl pl-8 pb-8 pr-8 pt-0 lg:space-x-16">
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-left lg:text-left pr-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Community
          </h2>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Art Ecommerce is dedicated to making your art sell. I build artists, designers, and photographers a platform that makes that possible. By partnering with me, artists benefit from a robust platform to market and monetize their creativity.
          </p>
        </motion.div>

        {/* Logo Section */}
        <motion.div
          className="mt-8 w-full lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-8 w-full max-w-md lg:max-w-lg">
            <div className="flex justify-center h-[150px] items-center p-4 rounded-lg">
              <a href="https://www.briglightart.com">
                <Image
                  src="/brigLogo.webp"
                  alt="Artist logo 1"
                  className=""
                  width={150}
                  height={150}
                  priority={true}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgfB8uj3sY0llnSE27PcmeTaskuOi7BwAMnLHgA5OK4KXyxK/lFjHuOwvwcds471uyRRrKoWNQCvOB1qq8ab2+RevpQB//2Q=="
                  placeholder="blur"
                />
              </a>
            </div>
            <div className="flex justify-center items-center p-4 rounded-lg">
              <a href="https://benmyers.org">
                {/* <Image
                  src="/exampleLogo2.png"
                  alt="Artist logo 2"
                  className="example-logo"
                  width={150}
                  height={150}
                  priority={true}
                /> */}
                <span className="text-4xl text-gray-800">Coming Soon</span>
              </a>
            </div>
            <div className="flex justify-center items-center p-4 rounded-lg ">
              <a href="https://blissmember.com">
                {/* <Image
                  src="/exampleLogo3.png"
                  alt="Artist logo 3"
                  className="example-logo"
                  width={150}
                  height={150}
                  priority={true}
                /> */}
                <span className="text-4xl text-gray-800">Coming Soon</span>
              </a>
            </div>
            <div className="flex justify-center items-center p-4 rounded-lg">
              <a href="https://lzgvisuals.com">
                {/* <Image
                  src="/exampleLogo4.png"
                  alt="Coming"
                  className="example-logo"
                  width={150}
                  height={150}
                  priority={true}
                /> */}
                <span className="text-4xl text-gray-800">Coming Soon</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
