"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Community() {
  return (
    <div className="w-full h-full pt-6 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl px-8 md:px-12 lg:px-16 pb-8 lg:space-x-16"> 
        {/* Adjusted padding and margins for even spacing */}
        
        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-left lg:text-left"
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
          className="mt-8 w-full lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-8 w-full max-w-sm lg:max-w-lg">
            {/* First logo */}
            <div className="flex justify-center items-center p-4 rounded-lg">
              <a href="https://www.briglightart.com">
              <Image
                  src="/brigLogo.webp"
                  alt="Artist logo 1"
                  className="border-2 border-gray-200 rounded-lg" 
                  width={150}
                  height={150}
                  priority={true}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgfB8uj3sY0llnSE27PcmeTaskuOi7BwAMnLHgA5OK4KXyxK/lFjHuOwvwcds471uyRRrKoWNQCvOB1qq8ab2+RevpQB//2Q=="
                  placeholder="blur"
                />
              </a>
            </div>

            {/* Second logo */}
            <div className="flex justify-center items-center p-4 rounded-lg">
              <a href="https://lzgvisuals.com">
              <Image
                  src="/lzglogo.png"
                  alt="Coming"
                  className="border-2 border-gray-200 rounded-lg"
                  width={150}
                  height={150}
                  priority={true}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxS3toZLSeV5VV41BVCeWyccemBzzVSiigD//Z"
                  placeholder="blur"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
