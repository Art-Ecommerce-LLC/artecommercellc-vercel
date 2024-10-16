"use client";

import { FaPython, FaReact, FaStripe } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntegrationsSection() {

    const integrationsRef = useRef(null);
    const isIntegrationsInView = useInView(integrationsRef, { once: true });

    return (
        <div className="w-full bg-[var(--dark-grey)] py-16 px-6 lg:px-16 mt-8" ref={integrationsRef}>
            <div className="mx-auto max-w-7xl space-y-12">
                <motion.div
                    className="w-full"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isIntegrationsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-4xl font-semibold text-white text-center mb-8 tracking-wide">Scale Your Capabilities with Trusted Tech</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {/* Python Integration */}
                        <motion.a
                            href="https://www.python.org/doc/"
                            aria-label="Python Documentation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-6 bg-[var(--dark-grey)] card"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaPython className="text-5xl text-[#306998]" />
                            <p className="text-lg mt-4 text-white">Python</p>
                        </motion.a>

                        {/* Next.js Integration */}
                        <motion.a
                            href="https://nextjs.org/docs"
                            target="_blank"
                            aria-label="Next.js Documentation"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center rounded-lg p-6 "
                            whileHover={{ scale: 1.05 }}
                        >
                            <SiNextdotjs className="text-5xl text-white" />
                            <p className="text-lg mt-4 text-white">Next.js</p>
                        </motion.a>

                        {/* Stripe Integration */}
                        <motion.a
                            href="https://stripe.com/docs"
                            aria-label="Stripe Documentation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center rounded-lg p-6 "
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaStripe className="text-8xl text-[#635BFF]" />
                        </motion.a>

                        {/* TypeScript Integration */}
                        <motion.a
                            href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                            aria-label="TypeScript Documentation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center rounded-lg p-6 "
                            whileHover={{ scale: 1.05 }}
                        >
                            <SiTypescript className="text-5xl text-[#007ACC]" />
                            <p className="text-lg mt-4 text-white">TypeScript</p>
                        </motion.a>

                        {/* React Integration */}
                        <motion.a
                            href="https://react.dev/learn"
                            aria-label="React Documentation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center rounded-lg p-6 shadow-sm "
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaReact className="text-5xl text-[#61DBFB]" />
                            <p className="text-lg mt-4 text-white">React</p>
                        </motion.a>

                        {/* PostgreSQL Integration */}
                        <motion.a
                            href="https://www.postgresql.org/docs/current/intro-whatis.html"
                            target="_blank"
                            aria-label="PostgreSQL Documentation"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center rounded-lg p-6 "
                            whileHover={{ scale: 1.05 }}
                        >
                            <SiPostgresql className="text-5xl text-[#336791]" />
                            <p className="text-lg mt-4 text-white">PostgreSQL</p>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

